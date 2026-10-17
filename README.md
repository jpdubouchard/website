# jpdubouchard.ca

JP Bouchard's personal site, built with [Astro](https://astro.build). The 2019 pages (plain HTML, Bootstrap and Font Awesome) are served unchanged from `public/` until the rebuild replaces them.

- Pages: `public/` holds `index.html`, `work.html`, `education.html`, `project.html`, `404.html`, plus `images/`, `css/`, `js/`, `webfonts/` and `documents/` (capstone report PDF). New pages go in `src/pages/`.
- Build: `npm ci`, then `npm run build` writes the site to `dist/`; `npm run dev` serves it locally. Needs Node 22 (see `.nvmrc`).
- New pages: English under `/en/`, French under `/fr/` (`src/pages/[lang]/`), with the shared header, footer and palette in `src/layouts/` and `src/components/`, and UI text in `src/i18n/ui.ts`. They carry `noindex` and nothing links to them until launch.
- Checks: `npm run check` (`scripts/check-site.mjs`) runs after the build in CI and fails if a new page is missing in either language, an internal link is broken, or a palette colour pair drops below WCAG AA contrast.
- Deploys: every push to `main` runs `.github/workflows/deploy.yml`, which builds the site, uploads `dist/` to S3 and refreshes CloudFront. Pull requests run the same build in `check.yml`. Changes go through a pull request.
- The site is a 2019 résumé page ("Last Edit May 2019"): job title, years of experience and projects stop at 2019, and the page is mostly empty space.
- Planned features (each a backlog item in JP's notes): résumé and portfolio rebuild, project pages with hosted copies and links out, a contact form that hides JP's email, and a sign-in-only collage gallery.
- Not published to the site: only `dist/` is uploaded, so `README*`, `DECISIONS.md` and `CLAUDE.md` never reach the bucket.
- Known issue: check the links in `public/project.html` to JP's GitHub repos (the username was fixed in PR #1; recheck after any edit).

Decisions are logged in [DECISIONS.md](DECISIONS.md). Rules for Claude working in this repo are in [CLAUDE.md](CLAUDE.md).
