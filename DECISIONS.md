# Decisions

Site-level decisions, newest first. Hosting account details and security to-dos are kept in JP's private notes, not here.

## 2026-10-09
- The rebuild uses Astro with content in Markdown, replacing the plain HTML pages. Launch pages are home (about and résumé) and contact.
- The site is bilingual from the start: English under `/en/`, French under `/fr/`, with a language switch.
- Look: a slate-indigo palette that meets WCAG AA, with a dark mode that follows the system setting and a toggle.
- The contact form is a small serverless function that sends through Amazon SES, so JP's email address never appears on the site or in the repo.
- A projects and resources showcase follows the rebuild. Entries are bilingual, and working copies live under `/demos/<name>/` as hand-refreshed snapshots; this replaces the earlier `/projects/<name>/` plan for copies.
- The collage gallery will live at scrapbook.jpdubouchard.ca with its own sign-in per guest, which JP can remove individually.
- The detailed roadmap and feature specs stay private; this file gets one-line entries as features ship.
- The capstone report PDF keeps its address. The dead UVic GreenFlow link and the broken MinecraftOverviewer link are dropped.

## 2026-10-07
- Repo rules for Claude live in `CLAUDE.md`, kept out of the upload. Since this project can't write to JP's private vault, any thread that changes status or makes a decision ends with a "Vault update" section for JP to paste there.
- Security headers come from CloudFront's managed `SecurityHeadersPolicy` rather than a custom policy: nothing to maintain, and it covers HTTPS-only, no content sniffing, no framing and a referrer rule.

## 2026-10-06
- The beer map (beer.jpdubouchard.ca, the separate GrowlerFinder repo) stays up. Its unused Google keys were deleted and the live Maps key was restricted to its site and two APIs.

## 2026-10-04
- The `404.html` page is live; the bucket's error document points at it.
- The deploy role is stored as a masked repo secret, not a variable, so it does not show in the public Actions logs.

## 2026-10-03
- Stay on AWS: CloudFront added in front of the existing S3 bucket for https, instead of moving to Cloudflare Pages, Netlify or GitHub Pages. Moving would only save the current under-$1/month.
- Deploys use GitHub Actions with a narrow IAM role (GitHub OIDC), so no AWS keys are held by Claude or stored in the repo. Default branch renamed `master` to `main`.
- Scope is a rebuild. Five goals: résumé and portfolio, sign-in-only collage gallery, copies of technical projects, a contact form that hides JP's email, and links to externally hosted projects. Each feature is its own project, not in this repo yet.
- Architecture plan: one CloudFront distribution serves the public site and `/projects/<name>/` static copies, the gallery from a separate private bucket, and `/api/contact` from a Lambda function. Projects needing a server go on a subdomain or are hosted elsewhere and linked.

## Open
- Current role and post-2019 history for the résumé content.
