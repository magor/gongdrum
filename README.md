# Resonant Gong Drums

A lightweight single-page marketing site for promoting gong drums. It uses Vite with
vanilla TypeScript so the site builds into static files that can be hosted on GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The build output is written to `dist/`.

## GitHub Pages

Source lives under `site/`. The workflow at `.github/workflows/pages.yml` builds with Vite,
copies the production output to the repository root (`index.html`, `assets/`, `obrazky/`),
and deploys the same build to GitHub Pages.

This keeps the live site working when Pages is configured for legacy branch deployment from
`/ (root)`, which would otherwise serve `site/index.html` and block `/src/main.ts` with the
`video/mp2t` MIME type.

For new setups, prefer **GitHub Actions** as the Pages source in repository settings so only
the workflow artifact is published. The custom domain `gongdrum.cz` is configured via
`site/public/CNAME`.

## Adding a new GongDrum

Each drum is identified by a **slug** — a lowercase name with hyphens, e.g. `little-thai`,
`nova-genesis`. The slug is used for asset folders, audio filenames, and code references.

### 1. Add photos and audio

Put files in `site/public/` (this is the build source):

```
site/public/obrazky/my-new-drum/photo1.jpg
site/public/obrazky/my-new-drum/photo2.jpg
site/public/audio/my-new-drum.mp3
```

Supported image formats: `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`.

On build, `scripts/generate-galleries.mjs` scans each folder under `site/public/obrazky/`,
sorts filenames alphabetically, and builds the gallery automatically. You do not list individual
photos in code.

The **first sorted image** becomes the card cover and the first slide when the lightbox opens.
Rename files (e.g. prefix with `01-`, `02-`) if you need a specific order or cover photo.

Audio is optional. If `site/public/audio/{slug}.mp3` exists, the sample player appears on
the card.

### 2. Add drum metadata

Edit `site/src/drums.ts` and append an entry to `drumCatalog`:

```ts
{
  slug: 'my-new-drum',
  name: 'My New Drum',
  meta: 'průměr 600 mm',
  description: 'Short description shown on the gallery card.',
},
```

### 3. Mark as sold (optional)

When a drum sells, add its slug to `SOLD_DRUM_SLUGS` in the same file. Remove the slug to
mark it available again. Sold drums move to the end of the gallery and show a “Prodáno” banner.

### 4. Build and deploy

```bash
npm run build
```

Commit the new assets under `site/public/` plus any `drums.ts` changes, then push to `main`.
GitHub Actions rebuilds the site and deploys to GitHub Pages.

During build (and in CI), `scripts/optimize-images.mjs` generates responsive WebP/JPEG
variants with progressive encoding and tiny blur placeholders. Product cards load the
`card` size (~480px), the lightbox loads `display` (~1280px), and browsers pick WebP when
supported. Optimized output is written to `site/public/_optimized/` and is not committed.

### Important: where to put assets

| Location | Purpose |
|----------|---------|
| `site/public/obrazky/` | **Source** — commit new photos here |
| `site/public/audio/` | **Source** — commit new audio here |
| `obrazky/`, `audio/` at repo root | **Deploy output** — overwritten by CI, do not edit |

If assets are accidentally committed to the repo root, the build script copies them into
`site/public/` before scanning, but always prefer `site/public/` directly.
