import { notFound }  from 'next/navigation'
import Link           from 'next/link'
import { getTranslations } from 'next-intl/server'
import { BookButton, CTAButton } from '@/components/ui/CTAButton'
import { articleSchema } from '@/lib/seo'
import { articles }   from '@/content/articles'
import { articlesAr } from '@/content/articlesAr'
import { PageMotion } from '@/components/layout/PageMotion'
import { MotionSection } from '@/components/motion'
import type { Metadata } from 'next'

const tagColorCls: Record<string, string> = {
  cyan:   'text-cyan   border-[rgba(0,198,255,0.25)]   bg-[rgba(0,198,255,0.08)]',
  purple: 'text-purple border-[rgba(123,97,255,0.25)]  bg-[rgba(123,97,255,0.08)]',
  green:  'text-[#00ffaa] border-[rgba(0,255,170,0.2)] bg-[rgba(0,255,170,0.06)]',
  amber:  'text-[#ffb340] border-[rgba(255,179,64,0.2)] bg-[rgba(255,179,64,0.06)]',
}

type Props = { params: Promise<{ locale: string; slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const isAr    = locale === 'ar'
  const article = isAr ? (articlesAr[slug] ?? articles[slug]) : articles[slug]
  if (!article) return { title: 'Article Not Found' }
  return {
    title:       article.title,
    description: article.excerpt,
  }
}

/* Generate all locale × slug combinations so every route is
   statically pre-rendered — this is what fixes the 500 errors.
   Without locale in the params, Next.js can't set the request
   locale context that getTranslations() relies on.              */
export function generateStaticParams() {
  const slugs   = Object.keys(articles)
  const locales = ['en', 'ar']
  return locales.flatMap(locale => slugs.map(slug => ({ locale, slug })))
}

/* ── Markdown renderer ─────────────────────────────────────── */

function renderInline(text: string) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`(.+?)`/g,       '<code>$1</code>')
    .replace(
      /\[(.+?)\]\((.+?)\)/g,
      '<a href="$2" class="text-cyan underline underline-offset-4 hover:text-[#22d4ff] transition-colors" target="_blank" rel="noopener">$1</a>'
    )
}

/* Heading IDs: keep ASCII a-z0-9 for English, keep Arabic
   Unicode range U+0600–U+06FF for Arabic; fall back to index  */
function headingId(text: string, index: number): string {
  const clean = text
    .toLowerCase()
    .replace(/[^a-z0-9؀-ۿ\s]+/g, '')
    .trim()
    .replace(/\s+/g, '-')
  return clean || `h-${index}`
}

function renderBody(raw: string): React.ReactNode[] {
  const lines    = raw.trim().split('\n')
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]
    const trim = line.trim()

    if (!trim) { i++; continue }

    if (trim.startsWith('## ')) {
      const text = trim.slice(3)
      elements.push(<h2 key={i} id={headingId(text, i)}>{text}</h2>)
      i++; continue
    }
    if (trim.startsWith('### ')) {
      const text = trim.slice(4)
      elements.push(<h3 key={i} id={headingId(text, i)}>{text}</h3>)
      i++; continue
    }

    /* Images: ![caption](/path.svg) */
    if (trim.startsWith('![')) {
      const m = trim.match(/^!\[(.*?)\]\((.*?)\)$/)
      if (m) {
        elements.push(
          <figure key={i} className="my-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={m[2]}
              alt={m[1]}
              loading="lazy"
              className="w-full rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#0e0e1c]"
            />
            {m[1] && (
              <figcaption className="text-center text-xs font-mono text-[#5a5a7a] mt-3">
                {m[1]}
              </figcaption>
            )}
          </figure>
        )
        i++; continue
      }
    }

    if (trim.startsWith('- ')) {
      const items: string[] = []
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        items.push(lines[i].trim().slice(2))
        i++
      }
      elements.push(
        <ul key={i}>
          {items.map((it, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: renderInline(it) }} />
          ))}
        </ul>
      )
      continue
    }

    if (/^\d+\. /.test(trim)) {
      const items: string[] = []
      while (i < lines.length && /^\d+\. /.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\. /, ''))
        i++
      }
      elements.push(
        <ol key={i}>
          {items.map((it, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: renderInline(it) }} />
          ))}
        </ol>
      )
      continue
    }

    elements.push(
      <p key={i} dangerouslySetInnerHTML={{ __html: renderInline(trim) }} />
    )
    i++
  }

  return elements
}

export default async function ArticlePage({ params }: Props) {
  const { locale, slug } = await params
  const isAr   = locale === 'ar'

  /* Prefer the Arabic article when locale is ar; fall back to English */
  const article = isAr ? (articlesAr[slug] ?? articles[slug]) : articles[slug]
  if (!article) notFound()

  /* Pass locale explicitly — avoids relying on request context  */
  const t = await getTranslations({ locale, namespace: 'insights' })

  const schema = articleSchema({
    title:    article.title,
    excerpt:  article.excerpt,
    slug,
    date:     article.date,
    category: article.tag,
  })

  const tc       = tagColorCls[article.tagColor] ?? tagColorCls.cyan
  const dateStr  = new Date(article.date).toLocaleDateString(
    isAr ? 'ar-SA' : 'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  )

  return (
    <PageMotion>
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ═══ HEADER ════════════════════════════════════════════ */}
      <section className="py-16 px-6 border-b border-[rgba(255,255,255,0.05)]" aria-label={t('articleHeaderLabel')}>
        <MotionSection className="max-w-[720px] mx-auto">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-mono text-[#6e6e8e] mb-8" aria-label="Breadcrumb">
            <Link href={`/${locale}`}          className="hover:text-[#9898b8] transition-colors">{t('breadcrumbHome')}</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/${locale}/insights`} className="hover:text-[#9898b8] transition-colors">{t('breadcrumbInsights')}</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#5a5a7a] truncate max-w-[200px]">{article.title}</span>
          </nav>

          {/* Tag + read time */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className={`text-[0.65rem] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border ${tc}`}>
              {article.tag}
            </span>
            <span className="text-[0.68rem] font-mono text-[#6e6e8e]">{article.read} {t('read')}</span>
            <span className="text-[0.68rem] font-mono text-[#6e6e8e]">·</span>
            <time className="text-[0.68rem] font-mono text-[#6e6e8e]" dateTime={article.date}>
              {dateStr}
            </time>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold font-sans text-[#f0f0fa] leading-tight mb-5">
            {article.title}
          </h1>
          <p className="text-lg text-[#9898b8] leading-relaxed">{article.excerpt}</p>

          {/* Author */}
          <div className="flex items-center gap-3 mt-8 pt-8 border-t border-[rgba(255,255,255,0.06)]">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan/30 to-purple/30 border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-xs font-bold text-[#f0f0fa] font-mono flex-shrink-0">
              AD
            </div>
            <div>
              <p className="text-sm font-semibold text-[#f0f0fa]">
                {isAr ? 'أحمد جوبس' : 'Ahmed Djobs'}
              </p>
              <p className="text-xs text-[#5a5a7a] font-mono">
                {isAr
                  ? 'مستشار رقمي · أمن سيبراني وبلوكتشين'
                  : 'Digital Consultant · Cybersecurity & Blockchain'}
              </p>
            </div>
          </div>
        </MotionSection>
      </section>

      {/* ═══ BODY ══════════════════════════════════════════════ */}
      <article className="py-16 px-6" aria-label={t('articleBodyLabel')}>
        <MotionSection className="max-w-[720px] mx-auto prose-dark">
          {renderBody(article.body)}
        </MotionSection>
      </article>

      {/* ═══ CTA ════════════════════════════════════════════════ */}
      <section className="py-16 px-6 border-t border-[rgba(255,255,255,0.05)]" aria-label="CTA">
        <MotionSection className="max-w-[720px] mx-auto">
          <div className="bg-[#0e0e1c] border border-[rgba(0,198,255,0.15)] rounded-2xl p-8 text-center">
            <p className="text-xs font-mono text-cyan tracking-widest uppercase mb-3">
              {article.cta?.eyebrow ?? t('workWithAhmed')}
            </p>
            <h2 className="text-xl font-bold font-sans text-[#f0f0fa] mb-3">
              {article.cta?.title ?? t('articleCtaTitle')}
            </h2>
            <p className="text-[#c0c0d8] text-sm mb-7 max-w-md mx-auto">
              {article.cta?.sub ?? t('articleCtaSub')}
            </p>
            {article.cta ? (
              <CTAButton href={article.cta.href} variant="primary" size="lg" external>
                {article.cta.button}
              </CTAButton>
            ) : (
              <BookButton size="lg" />
            )}
          </div>

          <div className="mt-10 pt-8 border-t border-[rgba(255,255,255,0.05)] flex items-center justify-between">
            <Link
              href={`/${locale}/insights`}
              className="text-sm font-mono text-[#5a5a7a] hover:text-[#f0f0fa] transition-colors"
            >
              {t('backToInsights')}
            </Link>
            <Link
              href={`/${locale}/services`}
              className="text-sm font-mono text-cyan hover:text-[#22d4ff] transition-colors"
            >
              {t('viewServices')}
            </Link>
          </div>
        </MotionSection>
      </section>
    </>
    </PageMotion>
  )
}
