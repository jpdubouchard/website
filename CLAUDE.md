# CLAUDE.md

Standing instructions for Claude working in this repo (jpdubouchard.ca). Read `README.md` and `DECISIONS.md` first.

## Rules

- **Public repo:** never write AWS account IDs, role ARNs, keys, or JP's email, postal code or other personal identifiers into any file, commit message or PR. Hosting and security detail lives in JP's private vault, not here.
- **Changes go through a pull request** that JP merges. A push to `main` deploys the site to S3 and refreshes CloudFront.
- **Log decisions** in `DECISIONS.md` when they are made: newest first, grouped under `## YYYY-MM-DD`, one line each. Keep open questions under `## Open`.
- `README*`, `DECISIONS.md` and `CLAUDE.md` are excluded from the S3 upload (see `.github/workflows/deploy.yml`). Keep any new notes files out of the upload the same way.

## Vault update (handoff to JP's vault)

This repo's project can't write to JP's private vault. So whenever a thread changes the site's status or makes a decision, its last reply ends with a short section headed **Vault update** that JP can paste into a vault thread. It has:

- Status: the current state in one line (for example "rebuild: design chosen, not started").
- Decisions: one line per new decision, with the date.
- Open questions that changed.
- Anything infra-related (AWS, security, costs) that the vault note should record.

If nothing changed, say "Vault update: none".
