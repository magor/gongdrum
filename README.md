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

This repository includes a GitHub Actions workflow at `.github/workflows/pages.yml` that
builds and deploys the site to GitHub Pages whenever changes land on `main`.

For the initial GitHub-hosted URL, enable GitHub Pages in the repository settings and select
**GitHub Actions** as the Pages source. When the custom domain is ready, add the domain in
the same Pages settings and add a `CNAME` file under `public/` containing the domain name.
