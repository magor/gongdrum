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

// Bitrate cap per channel layout. Only sources clearly above the cap are re-encoded
// (constant bitrate, at the cap); everything else is served untouched.
const MAX_KBPS = { mono: 128, stereo: 192 };
// Sources within this margin above the cap are left alone; re-encoding them would
// add generation loss for almost no size gain.
const CAP_TOLERANCE = 1.1;
const SETTINGS_KEY = `cbr-cap-m${MAX_KBPS.mono}-s${MAX_KBPS.stereo}-t${CAP_TOLERANCE}`;

const ffmpeg = process.env.FFMPEG_PATH || 'ffmpeg';
const ffprobe = process.env.FFPROBE_PATH || 'ffprobe';

function hashFile(filePath) {
  const data = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(data).digest('hex');
}

function readManifest() {
  if (!fs.existsSync(manifestFile)) return { version: 1, tracks: {} };
  return JSON.parse(fs.readFileSync(manifestFile, 'utf8'));
}

function hasTool(command) {
  return spawnSync(command, ['-version'], { stdio: 'ignore' }).status === 0;
}

function probe(sourcePath) {
  const result = spawnSync(
    ffprobe,
    [
      '-v', 'error',
      '-select_streams', 'a:0',
      '-show_entries', 'stream=channels:format=bit_rate',
      '-of', 'json',
      sourcePath,
    ],
    { encoding: 'utf8' },
  );
  if (result.status !== 0) throw new Error(`ffprobe failed for ${sourcePath}`);

  const info = JSON.parse(result.stdout);
  return {
    channels: Number(info.streams?.[0]?.channels ?? 2),
    kbps: Math.round(Number(info.format?.bit_rate ?? 0) / 1000),
  };
}

function encode(sourcePath, outPath, kbps) {
  const tmpPath = `${outPath}.tmp.mp3`;
  const result = spawnSync(
    ffmpeg,
    [
      '-v', 'error', '-y',
      '-i', sourcePath,
      // Audio stream only: drops embedded cover art.
      '-map', '0:a',
      '-c:a', 'libmp3lame',
      '-b:a', `${kbps}k`,
      tmpPath,
    ],
    { stdio: ['ignore', 'inherit', 'inherit'] },
  );
  if (result.status !== 0) {
    fs.rmSync(tmpPath, { force: true });
    throw new Error(`ffmpeg failed for ${sourcePath}`);
  }

  fs.renameSync(tmpPath, outPath);
  return fs.statSync(outPath).size;
}

function processTrack(sourcePath, outPath, sourceHash, sourceSize) {
  const { channels, kbps } = probe(sourcePath);
  const capKbps = channels === 1 ? MAX_KBPS.mono : MAX_KBPS.stereo;
  const base = { sourceHash, settings: SETTINGS_KEY, sourceSize, sourceKbps: kbps };

  if (kbps <= capKbps * CAP_TOLERANCE) {
    fs.rmSync(outPath, { force: true });
    return { ...base, reencoded: false, kbps, size: sourceSize };
  }

  const size = encode(sourcePath, outPath, capKbps);
  return { ...base, reencoded: true, kbps: capKbps, size };
}

function main() {
  if (!fs.existsSync(sourceRoot)) {
    console.log('No source audio found, skipping optimization.');
    return;
  }

  if (!hasTool(ffmpeg) || !hasTool(ffprobe)) {
    if (process.env.CI) {
      console.error('ffmpeg and ffprobe are required to optimize audio in CI.');
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
  let reencoded = 0;
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
      (!cached.reencoded || fs.existsSync(outPath))
    ) {
      entry = cached;
      reused += 1;
    } else {
      entry = processTrack(sourcePath, outPath, sourceHash, sourceSize);
    }

    tracks[file] = entry;
    if (entry.reencoded) reencoded += 1;
    totalBefore += sourceSize;
    totalAfter += entry.size;
  }

  // Only re-encoded tracks live in the output dir; untouched ones are served from
  // site/public/audio. Remove anything else (stale or no longer re-encoded).
  for (const file of fs.readdirSync(outputRoot)) {
    if (tracks[file]?.reencoded) continue;
    fs.rmSync(path.join(outputRoot, file), { force: true });
  }

  fs.writeFileSync(manifestFile, JSON.stringify({ version: 1, tracks }, null, 2));

  const mb = (bytes) => (bytes / 1024 / 1024).toFixed(1);
  console.log(
    `Checked ${files.length} audio tracks (${reused} cached, ${reencoded} capped, ` +
      `${files.length - reencoded} served as-is): ${mb(totalBefore)} MB -> ${mb(totalAfter)} MB.`,
  );
}

main();
