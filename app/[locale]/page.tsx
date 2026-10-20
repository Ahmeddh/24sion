import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { BookButton, CTAButton } from '@/components/ui/CTAButton'
import { buildMeta } from '@/lib/seo'
import { articles, type Article } from '@/content/articles'
import { articlesAr } from '@/content/articlesAr'
import { SERVICES, SITE } from '@/lib/constants'
import { PageMotion } from '@/components/layout/PageMotion'
import { FadeIn, MotionSection } from '@/components/motion'
import {
  SERVICE_ICONS,
  SearchIcon, LockIcon, ChainIcon,
  GlobeIcon, ClipboardIcon, LayersIcon,
  SudanFlagIcon,
} from '@/components/ui/Icons'

const colorMap: Record<string, { accent: string; glow: string; badge: string; ring: string }> = {
  cyan:   { accent: 'text-cyan',      glow: 'shadow-[0_0_30px_rgba(238,148,39,0.15)]',  badge: 'bg-[rgba(238,148,39,0.1)] text-cyan border-[rgba(238,148,39,0.25)]',     ring: 'border-[rgba(238,148,39,0.2)]'  },
  purple: { accent: 'text-purple',    glow: 'shadow-[0_0_30px_rgba(77,159,220,0.15)]', badge: 'bg-[rgba(77,159,220,0.1)] text-purple border-[rgba(77,159,220,0.25)]', ring: 'border-[rgba(77,159,220,0.2)]' },
  green:  { accent: 'text-[#7FB8E8]', glow: 'shadow-[0_0_30px_rgba(127,184,232,0.12)]',  badge: 'bg-[rgba(127,184,232,0.08)] text-[#7FB8E8] border-[rgba(127,184,232,0.2)]', ring: 'border-[rgba(127,184,232,0.15)]' },
  amber:  { accent: 'text-[#F7B766]', glow: 'shadow-[0_0_30px_rgba(247,183,102,0.12)]', badge: 'bg-[rgba(247,183,102,0.08)] text-[#F7B766] border-[rgba(247,183,102,0.2)]', ring: 'border-[rgba(247,183,102,0.15)]' },
}

const expertiseIcons = [SearchIcon, ChainIcon, LockIcon, GlobeIcon, ClipboardIcon, LayersIcon]
const expertiseColors = ['text-cyan', 'text-purple', 'text-cyan', 'text-purple', 'text-[#7FB8E8]', 'text-[#F7B766]']

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'home' })
  return buildMeta({
    title: `Ahmed Djobs: ${t('heroLine1')} ${t('heroLine2')} ${t('heroLine3')}`,
    description: t('heroSub'),
    path: '/',
    locale,
  })
}

type SvcCard      = { id: string; title: string; tagline: string; description: string }
type InsightCard  = { slug: string; tag: string; tagColor: string; title: string; excerpt: string; readMin: number }
type ExpertiseItem = { label: string }
type ProofItem    = { stat: string; label: string; detail: string; tag: string }

function HomeContent({ locale }: { locale: string }) {
  const t = useTranslations('home')

  const stats = [
    { value: '15+', label: t('statsLabel0') },
    { value: '40+', label: t('statsLabel1') },
    { value: '4',   label: t('statsLabel2') },
    { value: '∞',   label: t('statsLabel3') },
  ]

  const svcCardList   = t.raw('svcCards')      as SvcCard[]
  const svcCardMap    = Object.fromEntries(svcCardList.map(c => [c.id, c]))
  const insightSrc: Record<string, Article> = locale === 'ar' ? articlesAr : articles
  const insightCards: InsightCard[] = [
    'bitcoin-200-week-ma-dca-plan',
    'bitcoin-treasury-companies-leverage-risk',
    'zero-trust-architecture',
  ].map(slug => {
    const a = insightSrc[slug] ?? articles[slug]
    return { slug, tag: a.tag, tagColor: a.tagColor, title: a.title, excerpt: a.excerpt, readMin: parseInt(a.read, 10) || 0 }
  })
  const expertiseRaw  = t.raw('expertiseItems') as ExpertiseItem[]
  const expertiseItems = expertiseRaw.map((item, i) => ({
    label: item.label,
    Icon:  expertiseIcons[i],
    color: expertiseColors[i],
  }))

  const proofItems = t.raw('proofItems') as ProofItem[]

  const svcBadge: Record<string, string> = {
    webmobile:     t('svcBadgeWebmobile'),
    digital:       t('svcBadgeDigital'),
    cybersecurity: t('svcBadgeCybersecurity'),
    blockchain:    t('svcBadgeBlockchain'),
  }

  return (
    <PageMotion>
    <>
      {/* HERO */}
      <section
        className="relative min-h-[calc(100vh-64px)] flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        aria-label="Hero"
      >
        <div className="absolute inset-0 bg-cyber-grid opacity-[0.4] pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080810] pointer-events-none" aria-hidden="true" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan/[0.04] blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-purple/[0.05] blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn delay={0.05}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(238,148,39,0.2)] bg-[rgba(238,148,39,0.06)] text-cyan text-xs font-mono tracking-widest uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
              {t('badge')}
              <span className="flex items-center" aria-label="from Sudan">
                <SudanFlagIcon size={16} />
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h1 className="text-[2.8rem] md:text-[4rem] lg:text-[4.8rem] font-bold font-sans leading-[1.08] tracking-[-0.03em] text-[#f0f0fa] mb-6">
              {t('heroLine1')}{' '}
              <span className="bg-gradient-to-r from-cyan to-purple bg-clip-text text-transparent">
                {t('heroLine2')}
              </span>
              <br />{t('heroLine3')}
            </h1>
          </FadeIn>

          <FadeIn delay={0.28}>
            <p className="text-lg md:text-xl text-[#9898b8] leading-relaxed max-w-2xl mx-auto mb-10 font-light">
              {t('heroSub')}
            </p>
          </FadeIn>

          <FadeIn delay={0.38}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <BookButton size="xl" />
              <CTAButton href={`/${locale}/services`} variant="ghost" size="xl">
                {t('ctaSecondary')}
              </CTAButton>
            </div>
          </FadeIn>

          <FadeIn delay={0.48}>
            <div className="flex flex-wrap justify-center gap-2 mt-10" aria-label="Specializations">
              {(t.raw('chips') as string[]).map(chip => (
                <span
                  key={chip}
                  className="px-3 py-1 text-[0.72rem] font-mono tracking-wide rounded-full border border-[rgba(255,255,255,0.08)] text-[#5a5a7a] bg-[rgba(255,255,255,0.03)]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 border-y border-[rgba(255,255,255,0.05)]" aria-label="Stats">
        <div className="max-w-[1200px] mx-auto px-6">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <MotionSection key={s.label} delay={i * 0.07}>
                <div className="text-center">
                  <dt className="text-3xl md:text-4xl font-bold font-mono text-cyan mb-1">{s.value}</dt>
                  <dd className="text-xs text-[#5a5a7a] tracking-wide">{s.label}</dd>
                </div>
              </MotionSection>
            ))}
          </dl>
        </div>
      </section>

      {/* PROOF LAYER */}
      <section className="py-20 px-6 border-b border-[rgba(255,255,255,0.05)]" aria-label="Proof of delivery">
        <div className="max-w-[1200px] mx-auto">
          <MotionSection className="mb-10 text-center">
            <p className="text-xs font-mono text-cyan tracking-[0.2em] uppercase mb-3">{t('proofLabel')}</p>
            <h2 className="text-2xl md:text-3xl font-bold font-sans text-[#f0f0fa] tracking-tight">{t('proofTitle')}</h2>
            <p className="mt-3 text-[#9898b8] max-w-lg mx-auto text-sm">{t('proofSub')}</p>
          </MotionSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {proofItems.map((item, i) => (
              <MotionSection key={item.label} delay={i * 0.1}>
                <div className="relative bg-[#0e0e1c] border border-[rgba(255,255,255,0.07)] hover:border-[rgba(238,148,39,0.18)] rounded-2xl p-7 transition-all duration-200 h-full flex flex-col">
                  <div className="text-2xl md:text-3xl font-bold font-mono text-cyan mb-1">{item.stat}</div>
                  <div className="text-sm font-semibold text-[#f0f0fa] mb-3">{item.label}</div>
                  <p className="text-[0.82rem] text-[#5a5a7a] leading-relaxed flex-1">{item.detail}</p>
                  <span className="mt-5 text-[0.62rem] font-mono tracking-[0.15em] uppercase px-2.5 py-1 rounded-full border border-[rgba(238,148,39,0.2)] bg-[rgba(238,148,39,0.06)] text-cyan self-start">
                    {item.tag}
                  </span>
                </div>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6" aria-label="Services overview" id="services">
        <div className="max-w-[1200px] mx-auto">
          <MotionSection className="mb-14 text-center">
            <p className="text-xs font-mono text-cyan tracking-[0.2em] uppercase mb-3">{t('servicesLabel')}</p>
            <h2 className="text-3xl md:text-4xl font-bold font-sans text-[#f0f0fa] tracking-tight">
              {t('servicesTitle')}
            </h2>
            <p className="mt-4 text-[#9898b8] max-w-xl mx-auto text-[1rem]">
              {t('servicesSub')}
            </p>
          </MotionSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((svc, i) => {
              const c           = colorMap[svc.color]
              const ServiceIcon = SERVICE_ICONS[svc.id]
              const card        = svcCardMap[svc.id]
              return (
                <MotionSection key={svc.id} delay={i * 0.1}>
                  <Link
                    href={`/${locale}/services#${svc.id}`}
                    className={`group relative p-8 rounded-2xl border bg-[#0e0e1c] hover:bg-[#11111f] transition-all duration-300 block ${c.ring} ${c.glow} hover:scale-[1.01]`}
                    aria-label={card?.title ?? svc.title}
                  >
                    <span className="absolute top-6 end-7 text-[0.7rem] font-mono text-[#6e6e8e]">
                      {svc.num}
                    </span>
                    <div className="flex items-center gap-3 mb-5">
                      <span className={c.accent}><ServiceIcon size={22} /></span>
                      <span className={`text-[0.65rem] font-mono tracking-[0.15em] uppercase px-2.5 py-1 rounded-full border ${c.badge}`}>
                        {svcBadge[svc.id]}
                      </span>
                    </div>
                    <h3 className={`text-xl font-bold font-sans mb-2 transition-colors ${c.accent}`}>{card?.title ?? svc.title}</h3>
                    <p className="text-sm text-[#5a5a7a] font-mono mb-4">{card?.tagline ?? svc.tagline}</p>
                    <p className="text-[0.9rem] text-[#9898b8] leading-relaxed">{card?.description ?? svc.description}</p>
                    <div className={`mt-5 text-xs font-semibold font-mono tracking-wide ${c.accent}`}>
                      {t('learnMore')}
                    </div>
                  </Link>
                </MotionSection>
              )
            })}
          </div>

          <MotionSection className="text-center mt-10">
            <CTAButton href={`/${locale}/services`} variant="outline" size="lg">
              {t('viewAllServices')}
            </CTAButton>
          </MotionSection>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="py-20 px-6 border-t border-[rgba(255,255,255,0.05)]" aria-label="About">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <MotionSection>
            <p className="text-xs font-mono text-purple tracking-[0.2em] uppercase mb-3">{t('aboutLabel')}</p>
            <h2 className="text-3xl md:text-[2.4rem] font-bold font-sans text-[#f0f0fa] leading-tight mb-6">
              {t('aboutHeadlinePre')}{' '}
              <span className="text-cyan">{t('aboutHeadlineSecurity')}</span>{' '}
              {t('aboutHeadlineAnd')}{' '}
              <span className="text-purple">{t('aboutHeadlineProduct')}</span>.
            </h2>
            <p className="text-[#9898b8] leading-relaxed mb-4">{t('aboutP1')}</p>
            <p className="text-[#9898b8] leading-relaxed mb-8">{t('aboutP2')}</p>
            <CTAButton href={`/${locale}/about`} variant="ghost" size="lg">
              {t('aboutCTA')}
            </CTAButton>
          </MotionSection>

          <MotionSection delay={0.15} className="relative">
            <div className="bg-[#0e0e1c] border border-[rgba(255,255,255,0.07)] rounded-2xl p-8">
              <p className="text-xs font-mono text-[#5a5a7a] tracking-widest uppercase mb-5">{t('expertiseLabel')}</p>
              <ul className="flex flex-col gap-4">
                {expertiseItems.map(item => (
                  <li key={item.label} className="flex items-center gap-3 text-[0.875rem] text-[#9898b8]">
                    <span className={item.color}><item.Icon size={15} /></span>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </MotionSection>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="py-20 px-6 border-t border-[rgba(255,255,255,0.05)]" aria-label="Insights">
        <div className="max-w-[1200px] mx-auto">
          <MotionSection className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-mono text-cyan tracking-[0.2em] uppercase mb-3">{t('insightsLabel')}</p>
              <h2 className="text-3xl font-bold font-sans text-[#f0f0fa]">{t('insightsTitle')}</h2>
            </div>
            <CTAButton href={`/${locale}/insights`} variant="ghost" size="sm" className="hidden md:inline-flex">
              {t('allArticles')}
            </CTAButton>
          </MotionSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insightCards.map((post, i) => {
              const tagColor = post.tagColor === 'cyan'
                ? 'text-cyan border-[rgba(238,148,39,0.25)] bg-[rgba(238,148,39,0.08)]'
                : post.tagColor === 'purple'
                ? 'text-purple border-[rgba(77,159,220,0.25)] bg-[rgba(77,159,220,0.08)]'
                : 'text-[#7FB8E8] border-[rgba(127,184,232,0.2)] bg-[rgba(127,184,232,0.06)]'
              return (
                <MotionSection key={post.slug} delay={i * 0.08}>
                  <Link
                    href={`/${locale}/insights/${post.slug}`}
                    className="group bg-[#0e0e1c] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.12)] rounded-2xl p-7 flex flex-col transition-all duration-200 hover:-translate-y-0.5 h-full"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`text-[0.65rem] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border ${tagColor}`}>
                        {post.tag}
                      </span>
                      <span className="text-[0.7rem] text-[#6e6e8e] font-mono ms-auto">{post.readMin} {t('readMin')} {t('read')}</span>
                    </div>
                    <h3 className="text-[0.95rem] font-bold font-sans text-[#f0f0fa] leading-snug mb-3 group-hover:text-cyan transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[0.82rem] text-[#5a5a7a] leading-relaxed flex-1 line-clamp-3">{post.excerpt}</p>
                    <span className="mt-5 text-xs font-mono text-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                      {t('readArticle')}
                    </span>
                  </Link>
                </MotionSection>
              )
            })}
          </div>

          <div className="text-center mt-8 md:hidden">
            <CTAButton href={`/${locale}/insights`} variant="ghost" size="md">{t('allArticles')}</CTAButton>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-24 px-6" aria-label="Book a session">
        <div className="max-w-[900px] mx-auto">
          <MotionSection>
            <div className="relative text-center bg-[#0c0c1e] border border-[rgba(238,148,39,0.15)] rounded-3xl px-8 py-16 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/[0.04] via-transparent to-purple/[0.04] pointer-events-none" aria-hidden="true" />
              <p className="text-xs font-mono text-cyan tracking-[0.2em] uppercase mb-4">{t('ctaBandLabel')}</p>
              <h2 className="text-3xl md:text-4xl font-bold font-sans text-[#f0f0fa] mb-4">{t('ctaBandTitle')}</h2>
              <p className="text-[#9898b8] text-[1rem] max-w-lg mx-auto mb-10">{t('ctaBandSub')}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <BookButton size="xl" />
                <CTAButton href={`mailto:${SITE.email}`} variant="ghost" size="xl" external>
                  {t('sendEmail')}
                </CTAButton>
              </div>
            </div>
          </MotionSection>
        </div>
      </section>
    </>
    </PageMotion>
  )
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  return <HomeContent locale={locale} />
}
