# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun dev          # start dev server (Next.js, port 3000)
bun run build    # production build (plain `bun build` is Bun's bundler, not the Next.js build)
bun lint         # ESLint
```

No test suite is configured. Verify UI changes by running the dev server.

## Architecture Overview

Next.js 14 App Router site with **next-intl** for bilingual (English / Arabic) support. All user-facing routes live under `app/[locale]/` — the locale segment is always present (`/en/...` or `/ar/...`). The root `app/` directory contains redirect stubs and non-locale files (robots, sitemap, OG image).

### Routing & i18n

- `middleware.ts` intercepts every request and rewrites to the locale prefix via `next-intl/middleware`.
- `i18n/routing.ts` defines supported locales (`en`, `ar`), default `en`, with auto-detection disabled.
- All copy lives in `messages/en.json` and `messages/ar.json`. Pages call `useTranslations` / `getTranslations` with a namespace matching the page (e.g. `'home'`, `'about'`).
- Arabic locale sets `dir="rtl"` on `<html>`. Use the `Tajawal` font (already loaded) for Arabic text — the other fonts are Latin-only.

### Data Layer

There is **no database for content**. All article content is stored in `content/articles.ts` (English) and `content/articlesAr.ts` (Arabic) as plain TypeScript objects keyed by slug. The insights list page reads these directly; `app/[locale]/insights/[slug]/page.tsx` looks up by slug.

`lib/constants.ts` is the single source of truth for:
- `SITE` — site-wide metadata, URLs, social handles, `cal.com/djobs` booking link
- `SERVICES` — the 4 service definitions (id, slug, color, title, tagline, description, keywords)
- `NAV_LINKS` — navigation structure

When changing site identity, titles, or services, update `lib/constants.ts` first, then `messages/en.json` and `messages/ar.json`.

`lib/seo.ts` exposes `buildMeta()` for per-page metadata, plus JSON-LD schema objects (`personSchema`, `organizationSchema`, `serviceSchema`, `articleSchema`). Schema data lives here — not in `constants.ts`.

### Motion System (DMS-1)

All animation tokens are defined in `lib/dms/tokens.ts`. **Never hardcode durations or easing values in components** — import from `dm` instead. Components in `components/motion/` (`FadeIn`, `MotionSection`) wrap Framer Motion and accept the token-based variants defined in `components/motion/variants.ts`.

`components/layout/PageMotion.tsx` must wrap every page's return value — it uses `key={pathname}` to force remount and replay the entry animation on client-side navigation.

### Styling

Tailwind CSS with a custom dark theme. All design tokens are in `tailwind.config.ts`:
- Background layers: `base` (#080810) → `surface` → `elevated` → `card` → `card-hover`
- Accent palette: `cyan`, `purple`, `green` (#00ffaa), `amber` (#ffb83f), `rose`
- Font families: `sans` (Space Grotesk), `mono` (IBM Plex Mono), `serif` (Lora)
- Custom backgrounds: `bg-grid-cyan`, `bg-grad-hero`, `bg-grad-cta`

### External Integrations

- **Supabase** — `lib/supabase.ts`, used for newsletter subscriptions (`app/actions/newsletter.ts`)
- **Resend** — `lib/resend.ts`, email delivery
- **Google Analytics** — GA4 (`G-X89XZE17WL`), injected in the locale layout
- **cal.com/djobs** — booking link, referenced via `SITE.cal`

### Key Conventions

- Pages are async server components; interactive pieces are `'use client'` components.
- `components/sections/` holds large reusable page sections (if present — check before creating new ones).
- `components/diagrams/` and `components/projects/` hold specialized visuals.
- Import aliases: `@/` maps to the repo root.
