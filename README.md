# djobs.net — Personal Consulting Website

Personal website for **Ahmed Djobs**, Technical Product Strategist · Cybersecurity Advisor · Blockchain Advisor.

Built with Next.js 14 App Router, TypeScript, Tailwind CSS, next-intl (EN/AR), Supabase, and Resend.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS (custom design tokens) |
| Animation | Framer Motion |
| Internationalisation | next-intl v4 (EN + AR, RTL) |
| Newsletter DB | Supabase (PostgreSQL) |
| Email delivery | Resend |
| QR code | qrcode |
| Deployment | Vercel |

---

## Commands

```bash
bun dev          # start dev server → http://localhost:3000
bun build        # production build
bun lint         # ESLint
```

---

## Project Structure

```
djobs.net/
├── app/
│   ├── layout.tsx                      # Root layout — no locale context (redirect stubs only)
│   ├── page.tsx                        # Root redirect → /en
│   ├── globals.css                     # Base styles, Tailwind overrides, RTL/Arabic fixes
│   ├── opengraph-image.tsx             # Dynamic OG image (1200×630)
│   ├── robots.ts                       # robots.txt — per-bot rules, disallows /api/ /_next/ /admin/
│   ├── sitemap.ts                      # sitemap.xml — all locales, hreflang alternates, legal pages
│   ├── not-found.tsx                   # 404 fallback
│   ├── actions/
│   │   └── newsletter.ts               # Server Action — subscribe with rate-limit + honeypot
│   ├── components/
│   │   └── NewsletterForm.tsx          # Client component (inline + stacked layouts)
│   │
│   │   # Root redirect stubs (→ /en/... equivalents)
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── projects/page.tsx
│   ├── insights/page.tsx
│   ├── insights/[slug]/page.tsx
│   ├── privacy-policy/page.tsx
│   ├── terms-and-conditions/page.tsx
│   ├── cookie-policy/page.tsx
│   │
│   └── [locale]/                       # ← All routed pages live here
│       ├── layout.tsx                  # Locale layout — lang/dir, fonts, GA4, Consent Mode v2
│       ├── page.tsx                    # Home / Hero
│       ├── about/page.tsx
│       ├── services/page.tsx
│       ├── projects/page.tsx
│       ├── insights/
│       │   ├── page.tsx                # Article listing (locale-aware content + tags)
│       │   └── [slug]/page.tsx         # Article detail — Markdown renderer + CTA
│       ├── privacy-policy/page.tsx     # GDPR Privacy Policy (EN + AR)
│       ├── terms-and-conditions/page.tsx
│       └── cookie-policy/page.tsx
│
├── components/
│   ├── Nav.tsx                         # Responsive nav, RTL-aware, Framer Motion overlay
│   ├── Footer.tsx                      # 4-column footer + compliance links row + newsletter band
│   ├── consent/
│   │   ├── ConsentBanner.tsx           # GDPR consent banner + preference centre modal (RTL-aware)
│   │   └── PrivacySettingsButton.tsx   # 'use client' — dispatches djobs:open-consent event
│   ├── layout/
│   │   └── PageMotion.tsx             # Must wrap every page; forces entry animation on navigation
│   ├── legal/
│   │   └── LegalPageLayout.tsx        # Sticky TOC sidebar + sections renderer for legal pages
│   ├── motion/
│   │   ├── FadeIn.tsx
│   │   ├── MotionSection.tsx
│   │   ├── variants.ts
│   │   └── index.ts
│   ├── projects/
│   │   └── diagram/ProjectDiagram.tsx # SVG architecture diagrams for projects page
│   └── ui/
│       ├── CTAButton.tsx              # BookButton (→ cal.com/djobs), CTAButton variants
│       ├── ContactQR.tsx              # QR code for contact card
│       ├── Icons.tsx                  # SVG icon components
│       ├── LanguageSwitcher.tsx       # EN ⇄ AR toggle in nav
│       ├── Logo.tsx
│       └── ScrollToTop.tsx            # Fixed scroll-to-top button (appears after 300px)
│
├── content/
│   ├── articles.ts                    # 8 English articles as typed records (slug → Article)
│   ├── articlesAr.ts                  # Arabic article records
│   └── legal/
│       └── index.ts                   # privacyPolicy(), termsAndConditions(), cookiePolicy() — EN + AR
│
├── i18n/
│   ├── routing.ts                     # defineRouting({ locales: ['en','ar'], defaultLocale: 'en' })
│   ├── request.ts                     # next-intl server request config
│   ├── navigation.ts                  # Locale-aware Link, redirect helpers
│   ├── config.ts                      # Shared locale list
│   └── getDictionary.ts              # Dictionary loader (legacy helper)
│
├── lib/
│   ├── consent.ts                     # Consent storage utilities — getStoredConsent, setStoredConsent
│   ├── constants.ts                   # SITE, SERVICES (01–04), NAV_LINKS — single source of truth
│   ├── seo.ts                         # buildMeta(), JSON-LD schemas (person, org, website, service, article, breadcrumb, faq)
│   ├── supabase.ts                    # createSupabaseClient() / createSupabaseAdmin()
│   ├── resend.ts                      # Resend singleton, email HTML + text templates
│   ├── utils.ts                       # Shared utilities
│   ├── dms/                           # Design Motion System tokens and guards
│   └── motion/                        # Motion interaction hooks
│
├── messages/
│   ├── en.json                        # English copy — source of truth
│   └── ar.json                        # Arabic copy — full native rewrite (not a translation)
│
├── middleware.ts                      # next-intl middleware — locale detection + routing
├── tailwind.config.ts
├── next.config.mjs                    # next-intl plugin, security headers
├── supabase-schema.sql                # Drop-in SQL — run once in Supabase SQL Editor
└── .env.example                       # Documents all required environment variables
```

---

## Pages

All pages are served under `/:locale/...`. The root `/` redirects to `/en`.

| Route | Description |
|---|---|
| `/:locale` | Hero, service overview cards, expertise chips, CTA band |
| `/:locale/about` | Bio, 15+ year timeline, skills grid, education, certifications |
| `/:locale/services` | Four detailed service sections (Digital, Web/Mobile, Cyber, Blockchain) |
| `/:locale/projects` | Interactive tabbed project cards with SVG architecture diagrams |
| `/:locale/insights` | Article listing — featured grid + full list, locale-aware |
| `/:locale/insights/[slug]` | Full article — Markdown renderer, author block, reading progress bar |
| `/:locale/privacy-policy` | GDPR Privacy Policy (EN + AR native copy) |
| `/:locale/terms-and-conditions` | Terms & Conditions (EN + AR) |
| `/:locale/cookie-policy` | Cookie Policy with category breakdown (EN + AR) |

---

## Services

| ID | Service | Accent |
|---|---|---|
| 01 | Digital Transformation | Amber |
| 02 | Web & Mobile Product Management | Green |
| 03 | Cybersecurity | Cyan |
| 04 | Blockchain & Web3 Advisory | Purple |

`lib/constants.ts` is the single source of truth for service definitions. The Fractional CISO concept is explained in plain language inside the Cybersecurity service body copy rather than being used as a title or badge.

---

## GDPR & Privacy Compliance

### Consent Banner (`components/consent/ConsentBanner.tsx`)

- Appears on first visit when no stored consent exists
- Dismiss (×) button: hides for the session via `sessionStorage` key `djobs_banner_dismissed` — reappears on next visit (GDPR-safe default; analytics stays denied until explicitly accepted)
- Three actions: **Accept All**, **Reject Non-Essential**, **Manage Preferences**
- Preference centre modal with per-category toggles: Essential (always on), Analytics, Functional, Marketing
- Fully bilingual — reads `document.documentElement.lang` and renders EN or AR copy, RTL-aware layout
- Fires `gtag('consent', 'update', ...)` after any choice
- Listens for `djobs:open-consent` CustomEvent to reopen from the footer "Privacy Settings" link

### Consent Storage (`lib/consent.ts`)

```ts
CONSENT_KEY     = 'djobs_consent_v1'
CONSENT_VERSION = '1.0'

type ConsentCategories = {
  essential:  true       // always true
  analytics:  boolean
  functional: boolean
  marketing:  boolean
}

type ConsentRecord = {
  version:    string
  timestamp:  string    // ISO 8601
  categories: ConsentCategories
}
```

Utilities: `getStoredConsent()`, `setStoredConsent(prefs)`, `clearConsent()`

### Google Consent Mode v2 (`app/[locale]/layout.tsx`)

An inline `<script>` runs **before** Google Analytics loads. It reads `localStorage('djobs_consent_v1')` and calls `gtag('consent', 'default', ...)`. If no stored consent exists, all storage is denied with `wait_for_update: 500`. After the user makes a choice, `ConsentBanner` calls `gtag('consent', 'update', ...)` to lift the restrictions.

### Legal Pages (`content/legal/index.ts`)

Three functions return locale-aware structured content:
- `privacyPolicy(locale)` — data collected, lawful basis, retention, rights, contact
- `termsAndConditions(locale)` — service terms, IP, limitation of liability
- `cookiePolicy(locale)` — cookie categories and technology details

Each returns `{ title, lastUpdated, effectiveDate, sections: Array<{ heading, content }> }`.

`LegalPageLayout` renders a sticky desktop TOC sidebar alongside the section body.

### Footer Compliance Links

Footer renders a compliance links row between the main grid and the bottom bar:
- Privacy Policy · Terms & Conditions · Cookie Policy (Next.js `Link` components)
- Privacy Settings (`PrivacySettingsButton` — client component dispatching the open-consent event)

---

## SEO & Schema Markup

### JSON-LD Schemas (`lib/seo.ts`)

| Schema | Scope |
|---|---|
| `personSchema` | All pages — Ahmed Djobs Person entity |
| `organizationSchema` | All pages — djobs.net ProfessionalService |
| `websiteSchema` | All pages — includes SearchAction for insights search |
| `serviceSchemas` | Individual service pages |
| `articleSchema` | Each `/insights/[slug]` page |
| `breadcrumbSchema(items)` | Per-page breadcrumb trail |
| `faqSchema(faqs)` | Available for FAQ sections |

### Sitemap (`app/sitemap.ts`)

- Home: priority 1.0, weekly
- Services / About: priority 0.9–0.95, monthly
- Legal pages: priority 0.3, yearly
- All article slugs across both locales
- Every entry includes `hreflang` alternates for `en`, `ar`, and `x-default`

### robots.ts (`app/robots.ts`)

Per-bot rules for Googlebot, Bingbot, and wildcard crawlers. Disallows: `/api/`, `/_next/`, `/admin/`, `/auth/`, `/dashboard/`, `/internal/`.

---

## Scroll-to-Top (`components/ui/ScrollToTop.tsx`)

Fixed circular button in the bottom-right corner. Appears after 300px of scroll via a passive scroll listener. Smooth-scrolls to top on click. Rendered globally in `app/[locale]/layout.tsx` alongside `ConsentBanner`.

---

## Internationalisation (i18n)

| Locale | Language | Direction | URL prefix |
|---|---|---|---|
| `en` | English | LTR | `/en/...` |
| `ar` | Arabic | RTL | `/ar/...` |

`en` is the default locale. The root `/` redirects automatically to `/en`.

- **Routing:** `next-intl` middleware (`middleware.ts`) intercepts all requests
- **Locale layout:** `app/[locale]/layout.tsx` sets `<html lang dir>`, loads Tajawal font for `ar`
- **Server components:** `getTranslations({ locale, namespace })`
- **Client components:** `useTranslations(namespace)`
- **All UI copy** lives in `messages/en.json` and `messages/ar.json`, namespaced by page

### Adding a Translation Key

1. Add key + English value to `messages/en.json`
2. Add Arabic equivalent to `messages/ar.json`
3. Use `t('keyName')` in the component
4. Validate both files:

```bash
node -e "JSON.parse(require('fs').readFileSync('messages/ar.json','utf8')); console.log('ar.json ✓')"
node -e "JSON.parse(require('fs').readFileSync('messages/en.json','utf8')); console.log('en.json ✓')"
```

### Arabic / RTL Rules

- **Font:** [Tajawal](https://fonts.google.com/specimen/Tajawal) — loaded conditionally for `ar`, applied via `:lang(ar)` in `globals.css`
- **Letter-spacing:** forced to `0` — positive tracking breaks Arabic letterforms
- **Layout:** Tailwind logical properties (`start-*`, `end-*`, `ms-*`, `me-*`, `ps-*`, `pe-*`)
- **Copy:** `messages/ar.json` is a **native Arabic rewrite**, not a translation. Never use em-dash `—` in Arabic copy; restructure with commas, semicolons, or new sentences.

---

## Motion System

All animation tokens live in `lib/dms/tokens.ts`. Never hardcode durations or easing values in components — import from `dm` instead.

`components/layout/PageMotion.tsx` must wrap every page's return value — it uses `key={pathname}` to force remount and replay the entry animation on client-side navigation.

---

## Data Layer

- **No database for content.** Article content is in `content/articles.ts` (EN) and `content/articlesAr.ts` (AR) as plain TypeScript objects keyed by slug.
- **Legal content** is in `content/legal/index.ts` as structured functions returning locale-aware copy.
- **Site metadata** (`SITE`, `SERVICES`, `NAV_LINKS`) lives in `lib/constants.ts` — update here first, then the message files.
- **Schema data** lives in `lib/seo.ts`, not `constants.ts`.

---

## Experience Timeline (About Page)

Key entries in `messages/en.json` → `about.timeline`:

| Year | Role | Organisation |
|---|---|---|
| Apr 2015 – Dec 2016 | PM / Business Analyst | iCare Net (ICN) |
| Nov 2016 – Aug 2021 | Project Manager | Appitize |
| 2019 – Present | CEO | Zero Bytes LLC |
| Jan 2025 – Present | Part-time CTO | CypherBox LLC |
| 2024 – Present | Founder | djobs.net |

The Nov–Dec 2016 overlap between ICN and Appitize is intentional (transition period).

**CypherBox** is an open-source Bitcoin wallet on React Native delivering progressive self-custody. Five integrations: Strike and Coinos (Lightning Network payments and fiat onramps), Ark Vault (Bitcoin Layer 2), Hot Wallet (BIP39/SegWit self-custody), Cold Storage (PSBT hardware signing via ColdCard, Keystone, Jade). iOS and Android only.

---

## Newsletter

Server Action (`app/actions/newsletter.ts`) with honeypot, rate limiting (3/min per IP), email validation, and duplicate handling. Welcome email via Resend. `NewsletterForm` supports `layout="inline"` (footer) and `layout="stacked"` (insights CTA).

---

## Local Development

```bash
bun install
cp .env.example .env.local
# fill in NEXT_PUBLIC_SITE_URL, SUPABASE_URL, SUPABASE_ANON_KEY,
# SUPABASE_SERVICE_ROLE_KEY, RESEND_API_KEY
bun run dev        # → http://localhost:3000/en
```

Run `supabase-schema.sql` in Supabase SQL Editor once to create the `newsletter_subscribers` table, RLS policies, and `unsubscribe_email()` RPC.

---

## Branch Workflow

```
dev  ──── feature work, localization, bug fixes
 │
 └──► PR → main  (production / Vercel auto-deploy)
```

All new work goes to **`dev`** first. PRs are created from `dev` → `main` via `gh pr create`.

---

## Deployment (Vercel)

1. Connect the GitHub repo in Vercel.
2. Add environment variables: `NEXT_PUBLIC_SITE_URL`, `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `RESEND_API_KEY`.
3. Vercel handles `next build` and edge functions automatically.
4. Set `NEXT_PUBLIC_SITE_URL=https://djobs.net` in production and redeploy.

---

## Design Tokens

| Token | Value |
|---|---|
| Background base | `#080810` |
| Surface layers | `surface` → `elevated` → `card` → `card-hover` |
| Primary text | `#f0f0fa` |
| Muted text | `#9898b8` |
| Cyan accent | `#00c6ff` |
| Purple accent | `#7b61ff` |
| Green accent | `#00ffaa` |
| Amber accent | `#ffb340` |
| Font sans | Space Grotesk |
| Font mono | IBM Plex Mono |
| Font serif | Lora |
| Font Arabic | Tajawal |

Custom backgrounds: `bg-grid-cyan`, `bg-grad-hero`, `bg-grad-cta`. All tokens defined in `tailwind.config.ts`.
