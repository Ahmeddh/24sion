# Deployment: dev first, then production

| Branch | Vercel environment | Domain | Indexed by Google |
|---|---|---|---|
| `dev` | Preview (branch domain) | `dev.24sion.com` | No (noindex header, robots disallow, empty sitemap) |
| `main` | Production | `24sion.com` (and `www.24sion.com` redirecting to it) | Yes |

## Flow
1. Work on a feature branch and open a PR into `dev`. CI (`.github/workflows/ci.yml`) runs a type check and a production build.
2. Merge into `dev`. Vercel deploys it to `dev.24sion.com`. Check it there.
3. Open a PR from `dev` into `main`. Merge only after the dev deployment and CI are green.
4. Vercel deploys `main` to production.

## One-time Vercel setup (dashboard)
- Project > Settings > Git: Production Branch = `main`.
- Project > Settings > Domains: add `24sion.com` (production), `www.24sion.com` (redirect to apex) and `dev.24sion.com` (assign to Git branch `dev`).
- Project > Settings > Environment Variables: set `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `RESEND_API_KEY` and the docs passwords for Production, and separate test values for Preview.
- Project > Settings > Git: keep "Require CI" style protection by enabling branch protection on `main` in GitHub (require the `verify` check).

Non-production deployments never get indexed: the code reads `VERCEL_ENV` (see `IS_PRODUCTION` in `lib/constants.ts`).
