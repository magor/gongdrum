import { spawnSync } from 'child_process';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const sourceRoot = path.join(root, 'site/public/audio');
const outputRoot = path.join(root, 'site/public/_optimized/audio');
const manifestFile = path.join(root, 'site/src/generated/audio-manifest.json');

// LAME VBR quality (0 = best, 9 = smallest). V4 tops out around ~165 kbps on dense
// strikes and drops lower on quiet decays, keeping gong shimmer clean while roughly
// halving 240–320 kbps sources.
const MP3_VBR_QUALITY = 4;
// Keep the original when re-encoding saves less than this; avoids generation loss
// on sources that are already ~128–160 kbps.
const MIN_SAVINGS = 0.15;
const SETTINGS_KEY = `lame-v${MP3_VBR_QUALITY}-min${MIN_SAVINGS}`;

const ffmpeg = process.env.FFMPEG_PATH || 'ffmpeg';

function hashFile(filePath) {
  const data = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(data).digest('hex');
}

function readManifest() {
  if (!fs.existsSync(manifestFile)) return { version: 1, tracks: {} };
  return JSON.parse(fs.readFileSync(manifestFile, 'utf8'));
}

function hasFfmpeg() {
  return spawnSync(ffmpeg, ['-version'], { stdio: 'ignore' }).status === 0;
}

function encode(sourcePath, outPath) {
  const tmpPath = `${outPath}.tmp.mp3`;
  const result = spawnSync(
    ffmpeg,
    [
      '-v', 'error', '-y',
      '-i', sourcePath,
      // Audio stream only: drops embedded cover art.
      '-map', '0:a',
      '-c:a', 'libmp3lame',
      '-q:a', String(MP3_VBR_QUALITY),
      tmpPath,
    ],
    { stdio: ['ignore', 'inherit', 'inherit'] },
  );
  if (result.status !== 0) {
    fs.rmSync(tmpPath, { force: true });
    throw new Error(`ffmpeg failed for ${sourcePath}`);
  }

  const sourceSize = fs.statSync(sourcePath).size;
  const encodedSize = fs.statSync(tmpPath).size;
  if (encodedSize > sourceSize * (1 - MIN_SAVINGS)) {
    fs.rmSync(tmpPath);
    fs.copyFileSync(sourcePath, outPath);
    return { reencoded: false, size: sourceSize };
  }

  fs.renameSync(tmpPath, outPath);
  return { reencoded: true, size: encodedSize };
}

function main() {
  if (!fs.existsSync(sourceRoot)) {
    console.log('No source audio found, skipping optimization.');
    return;
  }

  if (!hasFfmpeg()) {
    if (process.env.CI) {
      console.error('ffmpeg is required to optimize audio in CI.');
      process.exit(1);
    }
    console.warn('ffmpeg not found, skipping audio optimization (originals will be served).');
    fs.rmSync(outputRoot, { recursive: true, force: true });
    return;
  }

  fs.mkdirSync(outputRoot, { recursive: true });

  const previous = readManifest();
  const files = fs
    .readdirSync(sourceRoot)
    .filter((file) => file.toLowerCase().endsWith('.mp3'))
    .sort();
  const tracks = {};
  let reused = 0;
  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const sourcePath = path.join(sourceRoot, file);
    const outPath = path.join(outputRoot, file);
    const sourceHash = hashFile(sourcePath);
    const sourceSize = fs.statSync(sourcePath).size;
    const cached = previous.tracks?.[file];

    let entry;
    if (
      cached?.sourceHash === sourceHash &&
      cached?.settings === SETTINGS_KEY &&
      fs.existsSync(outPath)
    ) {
      entry = cached;
      reused += 1;
    } else {
      const { reencoded, size } = encode(sourcePath, outPath);
      entry = { sourceHash, settings: SETTINGS_KEY, reencoded, sourceSize, size };
    }

    tracks[file] = entry;
    totalBefore += sourceSize;
    totalAfter += entry.size;
  }

  // Remove outputs whose source no longer exists.
  for (const file of fs.readdirSync(outputRoot)) {
    if (tracks[file]) continue;
    fs.rmSync(path.join(outputRoot, file), { force: true });
  }

  fs.writeFileSync(manifestFile, JSON.stringify({ version: 1, tracks }, null, 2));

  const mb = (bytes) => (bytes / 1024 / 1024).toFixed(1);
  console.log(
    `Optimized ${files.length} audio tracks (${reused} cached, ${files.length - reused} processed): ` +
      `${mb(totalBefore)} MB -> ${mb(totalAfter)} MB.`,
  );
}

main();
