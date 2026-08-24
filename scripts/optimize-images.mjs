import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const sourceRoot = path.join(root, 'site/public/obrazky');
const outputRoot = path.join(root, 'site/public/_optimized/obrazky');
const manifestFile = path.join(root, 'site/src/generated/image-manifest.json');

const SOURCE_RE = /\.(jpe?g|png)$/i;
const VARIANTS = {
  card: { maxWidth: 480, jpegQuality: 82, webpQuality: 80 },
  display: { maxWidth: 1280, jpegQuality: 85, webpQuality: 82 },
};
const PLACEHOLDER_WIDTH = 24;

function hashFile(filePath) {
  const data = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(data).digest('hex');
}

function relativeSourcePath(filePath) {
  return path.relative(sourceRoot, filePath).split(path.sep).join('/');
}

function outputBaseName(relativePath) {
  const parsed = path.parse(relativePath);
  return path.join(parsed.dir, parsed.name).split(path.sep).join('/');
}

function publicPath(relativePath) {
  return `./_optimized/obrazky/${relativePath.split(path.sep).join('/')}`;
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function readManifest() {
  if (!fs.existsSync(manifestFile)) return { version: 1, images: {} };
  return JSON.parse(fs.readFileSync(manifestFile, 'utf8'));
}

function listSourceImages(dir, files = []) {
  if (!fs.existsSync(dir)) return files;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      listSourceImages(fullPath, files);
      continue;
    }
    if (SOURCE_RE.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

async function createPlaceholder(buffer) {
  const { data, info } = await sharp(buffer)
    .rotate()
    .resize({ width: PLACEHOLDER_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: 40, progressive: true })
    .toBuffer({ resolveWithObject: true });

  return `data:image/jpeg;base64,${data.toString('base64')}`;
}

async function writeVariant(pipeline, outPath, format, options) {
  ensureDir(path.dirname(outPath));

  if (format === 'jpeg') {
    await pipeline
      .clone()
      .jpeg({ quality: options.quality, progressive: true, mozjpeg: true })
      .toFile(outPath);
    return;
  }

  await pipeline.clone().webp({ quality: options.quality }).toFile(outPath);
}

async function optimizeImage(sourcePath, previousEntry) {
  const relativePath = relativeSourcePath(sourcePath);
  const sourceHash = hashFile(sourcePath);
  const sourceStat = fs.statSync(sourcePath);

  if (
    previousEntry?.sourceHash === sourceHash &&
    previousEntry?.sourceMtimeMs === sourceStat.mtimeMs
  ) {
    return previousEntry;
  }

  const input = sharp(sourcePath, { failOn: 'none' }).rotate();
  const metadata = await input.metadata();
  const placeholder = await createPlaceholder(fs.readFileSync(sourcePath));
  const baseName = outputBaseName(relativePath);
  const variants = {};

  for (const [variantName, config] of Object.entries(VARIANTS)) {
    const resized = input.clone().resize({
      width: config.maxWidth,
      withoutEnlargement: true,
      fit: 'inside',
    });

    const jpegPath = path.join(outputRoot, `${baseName}.${variantName}.jpg`);
    const webpPath = path.join(outputRoot, `${baseName}.${variantName}.webp`);

    if (metadata.hasAlpha) {
      const pngPath = path.join(outputRoot, `${baseName}.${variantName}.png`);
      ensureDir(path.dirname(pngPath));
      await resized
        .clone()
        .png({ compressionLevel: 9, adaptiveFiltering: true })
        .toFile(pngPath);
      await writeVariant(resized, webpPath, 'webp', { quality: config.webpQuality });

      variants[variantName] = {
        jpeg: publicPath(`${baseName}.${variantName}.png`),
        webp: publicPath(`${baseName}.${variantName}.webp`),
      };
      continue;
    }

    await writeVariant(resized, jpegPath, 'jpeg', { quality: config.jpegQuality });
    await writeVariant(resized, webpPath, 'webp', { quality: config.webpQuality });

    variants[variantName] = {
      jpeg: publicPath(`${baseName}.${variantName}.jpg`),
      webp: publicPath(`${baseName}.${variantName}.webp`),
    };
  }

  return {
    source: `./obrazky/${relativePath}`,
    sourceHash,
    sourceMtimeMs: sourceStat.mtimeMs,
    width: metadata.width ?? 0,
    height: metadata.height ?? 0,
    placeholder,
    variants,
  };
}

async function main() {
  if (!fs.existsSync(sourceRoot)) {
    console.log('No source images found, skipping optimization.');
    return;
  }

  const previousManifest = readManifest();
  const sourceImages = listSourceImages(sourceRoot).sort();
  const images = {};
  let reused = 0;

  for (const sourcePath of sourceImages) {
    const key = relativeSourcePath(sourcePath);
    const entry = await optimizeImage(sourcePath, previousManifest.images?.[key]);
    images[key] = entry;
    if (entry.sourceHash === previousManifest.images?.[key]?.sourceHash) {
      reused += 1;
    }
  }

  ensureDir(path.dirname(manifestFile));
  fs.writeFileSync(
    manifestFile,
    JSON.stringify({ version: 1, images }, null, 2),
  );

  console.log(
    `Optimized ${sourceImages.length} images (${reused} cached, ${sourceImages.length - reused} regenerated).`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
