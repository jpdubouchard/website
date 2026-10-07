# Decisions

Site-level decisions, newest first. Hosting account details and security to-dos are kept in JP's private notes, not here.

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
- Astro or plain HTML for the rebuild.
- Current role and post-2019 history for the résumé content.
