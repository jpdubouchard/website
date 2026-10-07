# jpdubouchard.ca

JP Bouchard's personal site. Plain HTML, Bootstrap and Font Awesome, no build step.

- Pages: `index.html`, `work.html`, `education.html`, `project.html`, `404.html`, plus `images/`, `css/`, `js/`, `webfonts/` and `documents/` (capstone report PDF).
- Deploys: every push to `main` runs the GitHub Action in `.github/workflows/`, which uploads the site to S3 and refreshes CloudFront. Changes go through a pull request.
- The site is a 2019 résumé page ("Last Edit May 2019"): job title, years of experience and projects stop at 2019, and the page is mostly empty space.
- Planned features (each a backlog item in JP's notes): résumé and portfolio rebuild, project pages with hosted copies and links out, a contact form that hides JP's email, and a sign-in-only collage gallery.
- Not published to the site: `README*` and `DECISIONS.md` are excluded from the upload.
- Known issue: check the links in `project.html` to JP's GitHub repos (the username was fixed in PR #1; recheck after any edit).

Decisions are logged in [DECISIONS.md](DECISIONS.md).
