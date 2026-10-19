import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { NewsletterForm } from '@/app/components/NewsletterForm'
import { PageMotion } from '@/components/layout/PageMotion'
import { MotionSection } from '@/components/motion'
import type { Metadata } from 'next'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const isAr = locale === 'ar'
  return {
    title: isAr ? 'المقالات: الأمن السيبراني والبلوكتشين والاستراتيجية الرقمية' : 'Insights: Cybersecurity, Blockchain & Digital Strategy',
    description: isAr
      ? 'مقالات متخصصة في استشارات الأمن السيبراني والبلوكتشين والويب 3 وإدارة المنتجات الرقمية والتحول الرقمي من أحمد دجبس.'
      : 'Expert articles on cybersecurity consulting, blockchain strategy, web3, digital product management, and digital transformation from Ahmed Djobs.',
  }
}

const tagColorMap: Record<string, string> = {
  'Cybersecurity':              'text-cyan border-[rgba(0,198,255,0.25)] bg-[rgba(0,198,255,0.07)]',
  'Blockchain':                 'text-purple border-[rgba(123,97,255,0.25)] bg-[rgba(123,97,255,0.07)]',
  'Digital Product Management': 'text-[#00ffaa] border-[rgba(0,255,170,0.2)] bg-[rgba(0,255,170,0.06)]',
  'Digital Strategy':           'text-[#ffb340] border-[rgba(255,179,64,0.2)] bg-[rgba(255,179,64,0.06)]',
  'Web3':                       'text-purple border-[rgba(123,97,255,0.25)] bg-[rgba(123,97,255,0.07)]',
}

const tagColorMapAr: Record<string, string> = {
  'أمن سيبراني':           'text-cyan border-[rgba(0,198,255,0.25)] bg-[rgba(0,198,255,0.07)]',
  'بلوكتشين':              'text-purple border-[rgba(123,97,255,0.25)] bg-[rgba(123,97,255,0.07)]',
  'إدارة مشاريع رقمية':   'text-[#00ffaa] border-[rgba(0,255,170,0.2)] bg-[rgba(0,255,170,0.06)]',
  'الاستراتيجية الرقمية':  'text-[#ffb340] border-[rgba(255,179,64,0.2)] bg-[rgba(255,179,64,0.06)]',
  'ويب 3':                 'text-purple border-[rgba(123,97,255,0.25)] bg-[rgba(123,97,255,0.07)]',
}

const articles = [
  {
    slug: 'bitcoin-treasury-companies-leverage-risk',
    tag: 'Web3',
    title: 'Bitcoin Treasury Companies: The Leverage Risk Hiding Inside the Saylor Model',
    excerpt: 'Public companies hold roughly 6% of all bitcoin, most of it financed with debt and preferred dividends payable in dollars. In 2026 the flywheel started spinning backwards.',
    read: '11 min',
    date: 'September 2026',
    featured: true,
  },
  {
    slug: 'bitcoin-200-week-ma-dca-plan',
    tag: 'Web3',
    title: "The 200-Week Moving Average: Bitcoin's Long-Term Compass (and My DCA Plan)",
    excerpt: 'Bitcoin is retesting its 200-week moving average after pulling back from $125K. A charted, tiered DCA plan with Fibonacci-mapped zones, targets, and a clear invalidation level.',
    read: '8 min',
    date: 'July 2026',
    featured: true,
  },
  {
    slug: 'zero-trust-architecture',
    tag: 'Cybersecurity',
    title: 'Zero Trust Architecture: Why Perimeter Security Is Dead',
    excerpt: 'Your network perimeter is already gone. Zero Trust is the only architecture built for a world where the attacker is already inside.',
    read: '7 min',
    date: 'May 2026',
    featured: true,
  },
  {
    slug: 'blockchain-enterprise-myths',
    tag: 'Blockchain',
    title: 'The 5 Blockchain Enterprise Myths That Are Costing You Deals',
    excerpt: 'Blockchain has been oversold for a decade. Here is a first-principles look at what is real, what is not, and where the real value actually lives.',
    read: '9 min',
    date: 'April 2026',
    featured: false,
  },
  {
    slug: 'pm-security-first',
    tag: 'Digital Product Management',
    title: "Security-First Product Delivery: A PM's Framework",
    excerpt: 'Security issues found in production cost 10-15x more to fix than ones caught in design. Here is how to embed security into sprint cycles without killing velocity.',
    read: '6 min',
    date: 'April 2026',
    featured: false,
  },
  {
    slug: 'defi-risk-assessment',
    tag: 'Web3',
    title: 'DeFi Risk Assessment: What Institutional Investors Need to Know',
    excerpt: 'Smart contract exploits, oracle manipulation, liquidity crises. A structured five-layer framework for evaluating DeFi protocol exposure before committing capital.',
    read: '10 min',
    date: 'March 2026',
    featured: false,
  },
  {
    slug: 'digital-transformation-failure',
    tag: 'Digital Strategy',
    title: 'Why 70% of Digital Transformations Fail: The 3 Patterns That Predict It',
    excerpt: 'After years of advising transformation programs, certain failure patterns emerge every time. Most have nothing to do with technology.',
    read: '8 min',
    date: 'February 2026',
    featured: false,
  },
  {
    slug: 'smart-contract-security',
    tag: 'Blockchain',
    title: "Smart Contract Security: A Non-Developer's Guide to What Goes Wrong",
    excerpt: 'You do not need to read Solidity to understand the attack surfaces that cost DeFi billions. A plain-language breakdown of the most common vulnerabilities.',
    read: '7 min',
    date: 'January 2026',
    featured: false,
  },
  {
    slug: 'ciso-fractional',
    tag: 'Cybersecurity',
    title: 'Why Your Startup Needs a Fractional CISO (Not Just a Security Checklist)',
    excerpt: 'ISO 27001 compliance checklists will not save you from a sophisticated attack. Here is what strategic security leadership actually looks like for a high-growth startup.',
    read: '5 min',
    date: 'December 2025',
    featured: false,
  },
  {
    slug: 'agile-technical-pm',
    tag: 'Digital Product Management',
    title: 'The Technical PM Advantage: Why Engineering Background Changes Everything',
    excerpt: 'A product manager who can reason about architecture operates on a fundamentally different level. Here is how the gap between technical and non-technical PMs keeps widening.',
    read: '6 min',
    date: 'November 2025',
    featured: false,
  },
]

const articlesAr = [
  {
    slug: 'bitcoin-treasury-companies-leverage-risk',
    tag: 'ويب 3',
    title: 'شركات الخزينة البيتكوينية: مخاطر الرافعة المخبأة داخل نموذج سايلور',
    excerpt: 'الشركات المدرجة تملك نحو 6% من كل البيتكوين، ومعظمه مموّل بديون وأرباح أسهم ممتازة تُدفع بالدولار. في 2026 بدأت العجلة تدور بالاتجاه المعاكس.',
    read: '11 د',
    date: 'سبتمبر 2026',
    featured: true,
  },
  {
    slug: 'bitcoin-200-week-ma-dca-plan',
    tag: 'ويب 3',
    title: 'متوسط 200 على الفريم الأسبوعي: بوصلة بيتكوين طويلة المدى وخطتي للشراء بالتدريج',
    excerpt: 'بيتكوين تعيد اختبار المتوسط المتحرك لـ 200 أسبوع بعد التراجع من 125 ألف دولار. خطة شراء بالتدريج مرسومة بمناطق فيبوناتشي وأهداف واضحة ونقطة فشل صريحة.',
    read: '8 د',
    date: 'يوليو 2026',
    featured: true,
  },
  {
    slug: 'zero-trust-architecture',
    tag: 'أمن سيبراني',
    title: 'الثقة الصفرية: لماذا لم يعد أمن المحيط كافياً',
    excerpt: 'حدود شبكتك اختفت بالفعل. نموذج الثقة الصفرية صُمِّم لعالم يكون فيه المهاجم داخل أسوارك قبل أن تبدأ.',
    read: '7 د',
    date: 'مايو 2026',
    featured: true,
  },
  {
    slug: 'blockchain-enterprise-myths',
    tag: 'بلوكتشين',
    title: '5 أساطير عن البلوكتشين تكلّفك الصفقات',
    excerpt: 'عقود من المبالغة في تسويق البلوكتشين. نظرة صادقة من المبادئ الأولى: ما الحقيقي، وما الوهم، وأين تكمن القيمة الفعلية.',
    read: '9 د',
    date: 'أبريل 2026',
    featured: false,
  },
  {
    slug: 'pm-security-first',
    tag: 'إدارة مشاريع رقمية',
    title: 'تسليم المنتج بأمان أولاً: إطار عمل لمدير المنتج',
    excerpt: 'الثغرات المكتشفة في الإنتاج تكلّف أضعاف ما كانت ستكلّفه في التصميم. هذا الإطار يساعدك على تجنّب ذلك من البداية.',
    read: '6 د',
    date: 'أبريل 2026',
    featured: false,
  },
  {
    slug: 'defi-risk-assessment',
    tag: 'ويب 3',
    title: 'تقييم مخاطر DeFi: ما يحتاج المستثمر المؤسسي معرفته',
    excerpt: 'ثغرات العقود الذكية، التلاعب بالأوراكل، أزمات السيولة. إطار من خمس طبقات لتقييم تعرّضك لبروتوكولات DeFi قبل ضخ رأس المال.',
    read: '10 د',
    date: 'مارس 2026',
    featured: false,
  },
  {
    slug: 'digital-transformation-failure',
    tag: 'الاستراتيجية الرقمية',
    title: 'لماذا يفشل 70% من مشاريع التحول الرقمي: 3 أنماط تتكرر دائماً',
    excerpt: 'بعد سنوات من مرافقة برامج التحول، أنماط فشل بعينها تظهر في كل مرة. معظمها لا علاقة له بالتكنولوجيا.',
    read: '8 د',
    date: 'فبراير 2026',
    featured: false,
  },
  {
    slug: 'smart-contract-security',
    tag: 'بلوكتشين',
    title: 'أمان العقود الذكية: دليل غير التقني لفهم ما يسير خطأً',
    excerpt: 'لا تحتاج قراءة Solidity لفهم نقاط الهجوم التي كلّفت DeFi المليارات. شرح بلغة واضحة لأكثر الثغرات شيوعاً.',
    read: '7 د',
    date: 'يناير 2026',
    featured: false,
  },
  {
    slug: 'ciso-fractional',
    tag: 'أمن سيبراني',
    title: 'لماذا تحتاج شركتك الناشئة التعاقد لتنفيذ CISO لا مجرد قائمة امتثال',
    excerpt: 'قوائم مراجعة ISO 27001 لن تنقذك من هجوم متطور. هكذا تبدو القيادة الأمنية الاستراتيجية الحقيقية لشركة في مرحلة النمو.',
    read: '5 د',
    date: 'ديسمبر 2025',
    featured: false,
  },
  {
    slug: 'agile-technical-pm',
    tag: 'إدارة مشاريع رقمية',
    title: 'ميزة مدير المنتج التقني: لماذا تغيّر الخلفية الهندسية كل شيء',
    excerpt: 'مدير المنتج القادر على التفكير في الهندسة المعمارية يعمل على مستوى مختلف تماماً. هكذا تتسع الفجوة باستمرار بين التقني وغير التقني.',
    read: '6 د',
    date: 'نوفمبر 2025',
    featured: false,
  },
]

export default async function InsightsPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations('insights')

  const isAr           = locale === 'ar'
  const activeArticles = isAr ? articlesAr : articles
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
              const tc = activeTagMap[post.tag] ?? 'text-cyan border-[rgba(0,198,255,0.25)] bg-[rgba(0,198,255,0.07)]'
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
              const tc = activeTagMap[post.tag] ?? 'text-cyan border-[rgba(0,198,255,0.25)] bg-[rgba(0,198,255,0.07)]'
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
