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
