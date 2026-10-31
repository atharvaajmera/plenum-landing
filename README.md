# Plenum — landing page

The marketing site for [Plenum](https://github.com/atharvaajmera/Plenum), a free,
open-source peer-to-peer file transfer app for Android, Windows, macOS, and Linux.

Live at **[plenumonline.me](https://plenumonline.me)**.

## Stack

- Next.js 15 (App Router, static export)
- React 19 + TypeScript
- Hand-authored CSS with design tokens, dark/light themes
- Deployed to GitHub Pages via GitHub Actions

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

## Production build

```bash
npm run build      # writes the static site to ./out
npx serve out      # optional: preview the exported site locally
```

`next.config.mjs` sets `output: "export"`, so the build is a set of static
files. `public/CNAME` and `.github/workflows/deploy.yml` publish `out/` to
GitHub Pages on every push to `main`.

## Content notes

- `app/site.ts` — canonical URL, GitHub/releases links, platform list.
- `app/layout.tsx` — metadata, Open Graph/Twitter cards, JSON-LD.
- `public/screenshots/` — real app captures used in the Showcase section.
- `PRODUCT.md` / `design.md` — product and design rationale.

## QA scripts

With a dev server running on port 3001 (`npm run dev -- -p 3001`):

```bash
npm run qa:probe      # layout, overflow, contrast, asset and font probes
npm run qa:shots      # screenshots at 320/390/768/1440 into shots/
npm run qa:showcase   # verifies both app screenshots render
npm run qa:impact     # platform CTA detection + copy checks
```

Playwright's Chromium is required once: `npx playwright install chromium`.
