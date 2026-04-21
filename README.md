# followup
Daily followup of vendors clients, staff.

## House — Vendor Follow-up Tracker

The tracker app lives in [`index.html`](./index.html). Once GitHub Pages is enabled for this repo (Settings → Pages → Deploy from branch → `main` / root), it will be viewable at:

`https://carohitai.github.io/followup/`

Until Pages is enabled, you can preview the file with any static HTML viewer, e.g.:

- Raw file: `https://raw.githubusercontent.com/carohitai/followup/main/index.html`
- Rendered via htmlpreview: `https://htmlpreview.github.io/?https://github.com/carohitai/followup/blob/main/index.html`

## Deploy to Vercel

This repo includes a [`vercel.json`](./vercel.json) so it can be deployed as a static site on Vercel.

- One-off: run `npx vercel` (or `npx vercel --prod`) from the repo root.
- Continuous: import the repo in the [Vercel dashboard](https://vercel.com/new). No build step is needed — Vercel serves `index.html` directly.
