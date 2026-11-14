import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { NewsletterForm } from '@/app/components/NewsletterForm'
import { PageMotion } from '@/components/layout/PageMotion'
import { MotionSection } from '@/components/motion'
import type { Metadata } from 'next'
import { buildMeta } from '@/lib/seo'
import { articles as store } from '@/content/articles'
import { articlesAr as storeAr } from '@/content/articlesAr'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const isAr = locale === 'ar'
  return buildMeta({
    title: isAr ? 'مقالات البيتكوين والأمن السيبراني والبلوكتشين' : 'Bitcoin, Cybersecurity and Blockchain Insights',
    description: isAr
      ? 'ابدأ بخطة البيتكوين المجانية، ثم اقرأ مقالات واضحة عن الأمن السيبراني والبلوكتشين وإدارة المنتجات من أحمد دجبس.'
      : 'Start with the free Bitcoin DCA plan, then read clear, practical articles on cybersecurity, blockchain and product strategy from Ahmed Djobs.',
    path: '/insights',
    locale,
  })
}

const tagColorMap: Record<string, string> = {
  'Cybersecurity':              'text-cyan border-[rgba(238,148,39,0.25)] bg-[rgba(238,148,39,0.07)]',
  'Blockchain':                 'text-purple border-[rgba(77,159,220,0.25)] bg-[rgba(77,159,220,0.07)]',
  'Digital Product Management': 'text-[#7FB8E8] border-[rgba(127,184,232,0.2)] bg-[rgba(127,184,232,0.06)]',
  'Digital Strategy':           'text-[#F7B766] border-[rgba(247,183,102,0.2)] bg-[rgba(247,183,102,0.06)]',
  'Web3':                       'text-purple border-[rgba(77,159,220,0.25)] bg-[rgba(77,159,220,0.07)]',
}

const tagColorMapAr: Record<string, string> = {
  'أمن سيبراني':           'text-cyan border-[rgba(238,148,39,0.25)] bg-[rgba(238,148,39,0.07)]',
  'بلوكتشين':              'text-purple border-[rgba(77,159,220,0.25)] bg-[rgba(77,159,220,0.07)]',
  'إدارة مشاريع رقمية':   'text-[#7FB8E8] border-[rgba(127,184,232,0.2)] bg-[rgba(127,184,232,0.06)]',
  'الاستراتيجية الرقمية':  'text-[#F7B766] border-[rgba(247,183,102,0.2)] bg-[rgba(247,183,102,0.06)]',
  'ويب 3':                 'text-purple border-[rgba(77,159,220,0.25)] bg-[rgba(77,159,220,0.07)]',
}

/* Single source of truth: titles, excerpts and dates come from /content.
   Order below is the display order; the first three are featured.      */
const ORDER = [
  'bitcoin-200-week-ma-dca-plan',
  'bitcoin-treasury-companies-leverage-risk',
  'zero-trust-architecture',
  'blockchain-enterprise-myths',
  'pm-security-first',
  'defi-risk-assessment',
  'digital-transformation-failure',
  'smart-contract-security',
  'ciso-fractional',
  'agile-technical-pm',
]
const FEATURED = new Set(ORDER.slice(0, 3))

function buildList(isAr: boolean) {
  const src = isAr ? storeAr : store
  return ORDER.filter(slug => src[slug] ?? store[slug]).map(slug => {
    const a = src[slug] ?? store[slug]
    return {
      slug,
      tag:      a.tag,
      title:    a.title,
      excerpt:  a.excerpt,
      read:     a.read,
      date:     new Date(a.date).toLocaleDateString(isAr ? 'ar-EG' : 'en-US', { year: 'numeric', month: 'long' }),
      featured: FEATURED.has(slug),
    }
  })
}

export default async function InsightsPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations('insights')

  const isAr           = locale === 'ar'
  const activeArticles = buildList(isAr)
  const activeTagMap   = isAr ? tagColorMapAr : tagColorMap
  const featured       = activeArticles.filter(a => a.featured)
  const rest           = activeArticles.filter(a => !a.featured)

  return (
    <PageMotion>
    <>
      {/* ═══ HERO ════════════════════════════════════════════════ */}
      <section className="relative py-24 px-6 text-center overflow-hidden" aria-label={t('heroLabel')}>
        <div className="absolute inset-0 bg-cyber-grid opacity-[0.25] pointer-events-none" aria-hidden="true" />
        <MotionSection className="relative max-w-3xl mx-auto">
          <p className="text-xs font-mono text-cyan tracking-[0.2em] uppercase mb-4">{t('knowledgeBase')}</p>
          <h1 className="text-4xl md:text-5xl font-bold font-sans text-[#f0f0fa] tracking-tight mb-5">
            {t('heroTitle')}
          </h1>
          <p className="text-lg text-[#9898b8] max-w-xl mx-auto">
            {t('heroSub')}
          </p>
        </MotionSection>
      </section>

      {/* ═══ FEATURED ════════════════════════════════════════════ */}
      <section className="pb-12 px-6" aria-label={t('featuredLabel')}>
        <div className="max-w-[1100px] mx-auto">
          <MotionSection>
          <p className="text-xs font-mono text-[#5a5a7a] tracking-widest uppercase mb-6">{t('featured')}</p>
          </MotionSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((post, i) => {
              const tc = activeTagMap[post.tag] ?? 'text-cyan border-[rgba(238,148,39,0.25)] bg-[rgba(238,148,39,0.07)]'
              return (
                <MotionSection key={post.slug} delay={i * 0.1}>
                <Link
                  href={`/${locale}/insights/${post.slug}`}
                  className="group bg-[#0e0e1c] border border-[rgba(255,255,255,0.07)] hover:border-[rgba(255,255,255,0.14)] rounded-2xl p-7 flex flex-col transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] h-full"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-[0.63rem] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border ${tc}`}>
                      {post.tag}
                    </span>
                    <span className="text-[0.68rem] text-[#6e6e8e] font-mono ms-auto">{post.read}</span>
                  </div>
                  <h2 className="text-[0.95rem] font-bold font-sans text-[#f0f0fa] leading-snug mb-3 group-hover:text-cyan transition-colors flex-1">
                    {post.title}
                  </h2>
                  <p className="text-[0.82rem] text-[#5a5a7a] leading-relaxed mb-5">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[0.68rem] font-mono text-[#6e6e8e]">{post.date}</span>
                    <span className="text-xs font-mono text-cyan opacity-0 group-hover:opacity-100 transition-opacity">{t('readArrow')}</span>
                  </div>
                </Link>
                </MotionSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══ ALL ARTICLES ════════════════════════════════════════ */}
      <section className="py-12 px-6 border-t border-[rgba(255,255,255,0.05)]" aria-label={t('allArticlesLabel')}>
        <div className="max-w-[1100px] mx-auto">
          <MotionSection>
          <p className="text-xs font-mono text-[#5a5a7a] tracking-widest uppercase mb-6">{t('allArticles')}</p>
          </MotionSection>
          <div className="flex flex-col gap-4">
            {rest.map((post, i) => {
              const tc = activeTagMap[post.tag] ?? 'text-cyan border-[rgba(238,148,39,0.25)] bg-[rgba(238,148,39,0.07)]'
              return (
                <MotionSection key={post.slug} delay={i * 0.07}>
                <Link
                  href={`/${locale}/insights/${post.slug}`}
                  className="group flex flex-col sm:flex-row sm:items-center gap-4 bg-[#0e0e1c] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.12)] rounded-xl px-6 py-5 transition-all duration-200"
                >
                  <div className="flex items-center gap-3 sm:w-44 flex-shrink-0">
                    <span className={`text-[0.6rem] font-mono tracking-widest uppercase px-2 py-0.5 rounded-full border ${tc}`}>
                      {post.tag}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-[0.9rem] font-bold font-sans text-[#f0f0fa] group-hover:text-cyan transition-colors mb-1">
                      {post.title}
                    </h2>
                    <p className="text-[0.78rem] text-[#5a5a7a] leading-relaxed line-clamp-1">{post.excerpt}</p>
                  </div>
                  <div className="flex items-center gap-4 sm:flex-col sm:items-end text-[0.68rem] font-mono text-[#6e6e8e] flex-shrink-0">
                    <span>{post.date}</span>
                    <span>{post.read}</span>
                  </div>
                </Link>
                </MotionSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══ CTA ════════════════════════════════════════════════ */}
      <section className="py-20 px-6 border-t border-[rgba(255,255,255,0.05)]" aria-label={t('ctaLabel')}>
        <MotionSection className="max-w-[600px] mx-auto text-center">
          <p className="text-xs font-mono text-cyan tracking-[0.2em] uppercase mb-4">{t('staySharp')}</p>
          <h2 className="text-2xl font-bold font-sans text-[#f0f0fa] mb-4">
            {t('ctaTitle')}
          </h2>
          <p className="text-[#c0c0d8] mb-8 max-w-sm mx-auto">
            {t('ctaSub')}
          </p>
          <NewsletterForm layout="stacked" className="mx-auto" />
        </MotionSection>
      </section>
    </>
    </PageMotion>
  )
}
