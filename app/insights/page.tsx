import Link from 'next/link'
import { buildMeta } from '@/lib/seo'
import { CTAButton } from '@/components/ui/CTAButton'
import { NewsletterForm } from '@/app/components/NewsletterForm'

export const metadata = buildMeta({
  title: 'Insights: Cybersecurity, Blockchain & Digital Strategy',
  description: 'Expert articles on cybersecurity consulting, blockchain strategy, web3, digital product management, and digital transformation from Ahmed Djobs.',
  path: '/insights',
})

const tagColorMap: Record<string, string> = {
  'Cybersecurity':              'text-cyan border-[rgba(0,198,255,0.25)] bg-[rgba(0,198,255,0.07)]',
  'Blockchain':                 'text-purple border-[rgba(123,97,255,0.25)] bg-[rgba(123,97,255,0.07)]',
  'Digital Product Management': 'text-[#00ffaa] border-[rgba(0,255,170,0.2)] bg-[rgba(0,255,170,0.06)]',
  'Digital Strategy':           'text-[#ffb340] border-[rgba(255,179,64,0.2)] bg-[rgba(255,179,64,0.06)]',
  'Web3':                       'text-purple border-[rgba(123,97,255,0.25)] bg-[rgba(123,97,255,0.07)]',
}

const articles = [
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
    featured: true,
  },
  {
    slug: 'pm-security-first',
    tag: 'Digital Product Management',
    title: "Security-First Product Delivery: A PM's Framework",
    excerpt: 'Security issues found in production cost 10-15x more to fix than ones caught in design. Here is how to embed security into sprint cycles without killing velocity.',
    read: '6 min',
    date: 'April 2026',
    featured: true,
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

const featured = articles.filter(a => a.featured)
const rest     = articles.filter(a => !a.featured)

export default function InsightsPage() {
  return (
    <>
      {/* ═══ HERO ════════════════════════════════════════════════ */}
      <section className="relative py-24 px-6 text-center overflow-hidden" aria-label="Insights header">
        <div className="absolute inset-0 bg-cyber-grid opacity-[0.25] pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-xs font-mono text-cyan tracking-[0.2em] uppercase mb-4">Knowledge Base</p>
          <h1 className="text-4xl md:text-5xl font-bold font-sans text-[#f0f0fa] tracking-tight mb-5">
            Insights
          </h1>
          <p className="text-lg text-[#9898b8] max-w-xl mx-auto">
            No fluff. No AI-generated filler. Just the frameworks and first-principles thinking that actually move the needle.
          </p>
        </div>
      </section>

      {/* ═══ FEATURED ════════════════════════════════════════════ */}
      <section className="pb-12 px-6" aria-label="Featured articles">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-mono text-[#5a5a7a] tracking-widest uppercase mb-6">Featured</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map(post => {
              const tc = tagColorMap[post.tag] ?? 'text-cyan border-[rgba(0,198,255,0.25)] bg-[rgba(0,198,255,0.07)]'
              return (
                <Link
                  key={post.slug}
                  href={`/insights/${post.slug}`}
                  className="group bg-[#0e0e1c] border border-[rgba(255,255,255,0.07)] hover:border-[rgba(255,255,255,0.14)] rounded-2xl p-7 flex flex-col transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-[0.63rem] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border ${tc}`}>
                      {post.tag}
                    </span>
                    <span className="text-[0.68rem] text-[#6e6e8e] font-mono ml-auto">{post.read}</span>
                  </div>
                  <h2 className="text-[0.95rem] font-bold font-sans text-[#f0f0fa] leading-snug mb-3 group-hover:text-cyan transition-colors flex-1">
                    {post.title}
                  </h2>
                  <p className="text-[0.82rem] text-[#5a5a7a] leading-relaxed mb-5">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[0.68rem] font-mono text-[#6e6e8e]">{post.date}</span>
                    <span className="text-xs font-mono text-cyan opacity-0 group-hover:opacity-100 transition-opacity">Read →</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══ ALL ARTICLES ════════════════════════════════════════ */}
      <section className="py-12 px-6 border-t border-[rgba(255,255,255,0.05)]" aria-label="All articles">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-mono text-[#5a5a7a] tracking-widest uppercase mb-6">All Articles</p>
          <div className="flex flex-col gap-4">
            {rest.map(post => {
              const tc = tagColorMap[post.tag] ?? 'text-cyan border-[rgba(0,198,255,0.25)] bg-[rgba(0,198,255,0.07)]'
              return (
                <Link
                  key={post.slug}
                  href={`/insights/${post.slug}`}
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
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══ CTA ════════════════════════════════════════════════ */}
      <section className="py-20 px-6 border-t border-[rgba(255,255,255,0.05)]" aria-label="Newsletter">
        <div className="max-w-[600px] mx-auto text-center">
          <p className="text-xs font-mono text-cyan tracking-[0.2em] uppercase mb-4">Stay Sharp</p>
          <h2 className="text-2xl font-bold font-sans text-[#f0f0fa] mb-4">
            Get new articles in your inbox.
          </h2>
          <p className="text-[#c0c0d8] mb-8 max-w-sm mx-auto">
            No spam. No SEO filler. Just the frameworks and perspectives worth reading.
          </p>
          <NewsletterForm layout="stacked" className="mx-auto" />
        </div>
      </section>
    </>
  )
}
