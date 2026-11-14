import Link from 'next/link'
import { BookButton, CTAButton } from '@/components/ui/CTAButton'
import { buildMeta } from '@/lib/seo'
import { SERVICES, SITE } from '@/lib/constants'
import {
  SERVICE_ICONS,
  SearchIcon, LockIcon, ChainIcon,
  GlobeIcon, ClipboardIcon, LayersIcon,
  SudanFlagIcon,
} from '@/components/ui/Icons'

export const metadata = buildMeta({
  title: 'Ahmed Djobs: Cybersecurity & Blockchain Consultant',
  description: 'Digital Consultant specializing in cybersecurity consulting, blockchain strategy, and secure digital infrastructure. Helping enterprises and startups build defensible systems.',
  path: '/',
})

/* ── Color maps ─────────────────────────────────────────── */
const colorMap: Record<string, { accent: string; glow: string; badge: string; ring: string }> = {
  cyan:   { accent: 'text-cyan',         glow: 'shadow-[0_0_30px_rgba(238,148,39,0.15)]',   badge: 'bg-[rgba(238,148,39,0.1)] text-cyan border-[rgba(238,148,39,0.25)]',  ring: 'border-[rgba(238,148,39,0.2)]'  },
  purple: { accent: 'text-purple',       glow: 'shadow-[0_0_30px_rgba(77,159,220,0.15)]',  badge: 'bg-[rgba(77,159,220,0.1)] text-purple border-[rgba(77,159,220,0.25)]', ring: 'border-[rgba(77,159,220,0.2)]' },
  green:  { accent: 'text-[#7FB8E8]',    glow: 'shadow-[0_0_30px_rgba(127,184,232,0.12)]',   badge: 'bg-[rgba(127,184,232,0.08)] text-[#7FB8E8] border-[rgba(127,184,232,0.2)]', ring: 'border-[rgba(127,184,232,0.15)]' },
  amber:  { accent: 'text-[#F7B766]',    glow: 'shadow-[0_0_30px_rgba(247,183,102,0.12)]',  badge: 'bg-[rgba(247,183,102,0.08)] text-[#F7B766] border-[rgba(247,183,102,0.2)]', ring: 'border-[rgba(247,183,102,0.15)]' },
}

/* ── Stats ───────────────────────────────────────────────── */
const stats = [
  { value: '15+', label: 'Years in Digital Consulting' },
  { value: '40+', label: 'Projects Delivered' },
  { value: '4',   label: 'Core Specializations' },
  { value: '∞',   label: 'Commitment to Security' },
]

/* ── Insights preview ─────────────────────────────────────── */
const insights = [
  {
    slug: 'zero-trust-architecture',
    tag: 'Cybersecurity',
    tagColor: 'cyan',
    title: 'Zero Trust Architecture: Why Perimeter Security Is Dead',
    excerpt: 'Modern threat landscapes have made perimeter-based security obsolete. Here\'s how Zero Trust principles rebuild your defensive posture from the ground up.',
    read: '7 min',
  },
  {
    slug: 'blockchain-enterprise-myths',
    tag: 'Blockchain',
    tagColor: 'purple',
    title: 'The 5 Blockchain Enterprise Myths That Are Costing You Deals',
    excerpt: 'Misaligned expectations about what blockchain can and can\'t do have derailed countless initiatives. Let\'s cut through the noise with first-principles thinking.',
    read: '9 min',
  },
  {
    slug: 'pm-security-first',
    tag: 'Digital Product Management',
    tagColor: 'green',
    title: 'Security-First Product Delivery: A PM\'s Framework',
    excerpt: 'How technical product managers can embed security checkpoints into sprint cycles without sacrificing velocity or engineering morale.',
    read: '6 min',
  },
]

/* ── Core expertise items ─────────────────────────────────── */
const expertise = [
  { label: 'Threat Modeling & Risk Assessment',      Icon: SearchIcon,   color: 'text-cyan'     },
  { label: 'Blockchain Architecture & Token Design',  Icon: ChainIcon,    color: 'text-purple'   },
  { label: 'Secure SDLC & DevSecOps Integration',    Icon: LockIcon,     color: 'text-cyan'     },
  { label: 'Web3 Product Strategy',                  Icon: GlobeIcon,    color: 'text-purple'   },
  { label: 'Agile Delivery & Technical Roadmaps',    Icon: ClipboardIcon, color: 'text-[#7FB8E8]' },
  { label: 'Digital Transformation Architecture',    Icon: LayersIcon,   color: 'text-[#F7B766]' },
]

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO ══════════════════════════════════════════════════ */}
      <section
        className="relative min-h-[calc(100vh-64px)] flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        aria-label="Hero"
      >
        {/* Background grid + gradient */}
        <div className="absolute inset-0 bg-cyber-grid opacity-[0.4] pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080810] pointer-events-none" aria-hidden="true" />
        {/* Glow orbs */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan/[0.04] blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-purple/[0.05] blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(238,148,39,0.2)] bg-[rgba(238,148,39,0.06)] text-cyan text-xs font-mono tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
            Digital Consultant
            <span className="mx-1 opacity-40">·</span>
            Digital Nomad
            <span className="flex items-center" aria-label="from Sudan">
              <SudanFlagIcon size={16} />
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[2.8rem] md:text-[4rem] lg:text-[4.8rem] font-bold font-sans leading-[1.08] tracking-[-0.03em] text-[#f0f0fa] mb-6">
            Securing Systems.{' '}
            <span className="text-grad bg-gradient-to-r from-cyan to-purple bg-clip-text text-transparent">
              Building Trust.
            </span>
            <br />Delivering Results.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[#9898b8] leading-relaxed max-w-2xl mx-auto mb-10 font-light">
            I help enterprises and startups navigate cybersecurity risk, design blockchain-native
            systems, and ship complex digital products with security and scalability built in from day one.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <BookButton size="xl" />
            <CTAButton href="/services" variant="ghost" size="xl">
              Explore Services
            </CTAButton>
          </div>

          {/* Keyword chips for SEO */}
          <div className="flex flex-wrap justify-center gap-2 mt-10" aria-label="Specializations">
            {[
              'Cybersecurity Consulting',
              'Blockchain Strategy',
              'Web3 Advisory',
              'Digital Product Management',
              'Digital Transformation',
            ].map(tag => (
              <span
                key={tag}
                className="px-3 py-1 text-[0.72rem] font-mono tracking-wide rounded-full border border-[rgba(255,255,255,0.08)] text-[#5a5a7a] bg-[rgba(255,255,255,0.03)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STATS ════════════════════════════════════════════════ */}
      <section className="py-14 border-y border-[rgba(255,255,255,0.05)]" aria-label="Stats">
        <div className="max-w-[1200px] mx-auto px-6">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(s => (
              <div key={s.label} className="text-center">
                <dt className="text-3xl md:text-4xl font-bold font-mono text-cyan mb-1">{s.value}</dt>
                <dd className="text-xs text-[#5a5a7a] tracking-wide">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ═══ SERVICES ════════════════════════════════════════════ */}
      <section className="py-24 px-6" aria-label="Services overview" id="services">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-14 text-center">
            <p className="text-xs font-mono text-cyan tracking-[0.2em] uppercase mb-3">What I Do</p>
            <h2 className="text-3xl md:text-4xl font-bold font-sans text-[#f0f0fa] tracking-tight">
              Consulting Services
            </h2>
            <p className="mt-4 text-[#9898b8] max-w-xl mx-auto text-[1rem]">
              Four interlocking disciplines, delivered as fractional advisory, project engagements, or ongoing retainers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map(svc => {
              const c = colorMap[svc.color]
              const ServiceIcon = SERVICE_ICONS[svc.id]
              return (
                <Link
                  key={svc.id}
                  href={`/services#${svc.id}`}
                  className={`group relative p-8 rounded-2xl border bg-[#0e0e1c] hover:bg-[#11111f] transition-all duration-300 ${c.ring} ${c.glow} hover:scale-[1.01]`}
                  aria-label={svc.title}
                >
                  {/* Number */}
                  <span className="absolute top-6 right-7 text-[0.7rem] font-mono text-[#6e6e8e]">
                    {svc.num}
                  </span>

                  {/* Icon + badge */}
                  <div className="flex items-center gap-3 mb-5">
                    <span className={`${c.accent}`}>
                      <ServiceIcon size={22} />
                    </span>
                    <span className={`text-[0.65rem] font-mono tracking-[0.15em] uppercase px-2.5 py-1 rounded-full border ${c.badge}`}>
                      {svc.id === 'webmobile' ? 'Digital PM' : svc.id === 'digital' ? 'Strategy' : svc.id.charAt(0).toUpperCase() + svc.id.slice(1)}
                    </span>
                  </div>

                  <h3 className={`text-xl font-bold font-sans mb-2 transition-colors ${c.accent}`}>
                    {svc.title}
                  </h3>
                  <p className="text-sm text-[#5a5a7a] font-mono mb-4">{svc.tagline}</p>
                  <p className="text-[0.9rem] text-[#9898b8] leading-relaxed">
                    {svc.description}
                  </p>

                  <div className={`mt-5 text-xs font-semibold font-mono tracking-wide ${c.accent} group-hover:gap-2 transition-all`}>
                    Learn more →
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="text-center mt-10">
            <CTAButton href="/services" variant="outline" size="lg">
              View All Services
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ═══ ABOUT TEASER ════════════════════════════════════════ */}
      <section className="py-20 px-6 border-t border-[rgba(255,255,255,0.05)]" aria-label="About">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-xs font-mono text-purple tracking-[0.2em] uppercase mb-3">Who I Am</p>
            <h2 className="text-3xl md:text-[2.4rem] font-bold font-sans text-[#f0f0fa] leading-tight mb-6">
              A consultant who speaks both{' '}
              <span className="text-cyan">security</span> and{' '}
              <span className="text-purple">product</span>.
            </h2>
            <p className="text-[#9898b8] leading-relaxed mb-4">
              With over 15 years in digital consulting, I bridge the gap between technical security
              architecture and business strategy. I've worked with fintech companies, government
              agencies, and Web3 startups to design systems that are defensible, scalable, and built
              to last.
            </p>
            <p className="text-[#9898b8] leading-relaxed mb-8">
              My approach is direct: identify the real risk, design the right solution, and deliver
              with precision. No buzzword theater.
            </p>
            <CTAButton href="/about" variant="ghost" size="lg">
              Full Background
            </CTAButton>
          </div>

          {/* Callout card */}
          <div className="relative">
            <div className="bg-[#0e0e1c] border border-[rgba(255,255,255,0.07)] rounded-2xl p-8">
              <p className="text-xs font-mono text-[#5a5a7a] tracking-widest uppercase mb-5">Core Expertise</p>
              <ul className="flex flex-col gap-4">
                {expertise.map(item => (
                  <li key={item.label} className="flex items-center gap-3 text-[0.875rem] text-[#9898b8]">
                    <span className={item.color}>
                      <item.Icon size={15} />
                    </span>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ INSIGHTS ════════════════════════════════════════════ */}
      <section className="py-20 px-6 border-t border-[rgba(255,255,255,0.05)]" aria-label="Insights">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-mono text-cyan tracking-[0.2em] uppercase mb-3">Thinking Out Loud</p>
              <h2 className="text-3xl font-bold font-sans text-[#f0f0fa]">Latest Insights</h2>
            </div>
            <CTAButton href="/insights" variant="ghost" size="sm" className="hidden md:inline-flex">
              All Articles
            </CTAButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.map(post => {
              const tagColor = post.tagColor === 'cyan'
                ? 'text-cyan border-[rgba(238,148,39,0.25)] bg-[rgba(238,148,39,0.08)]'
                : post.tagColor === 'purple'
                ? 'text-purple border-[rgba(77,159,220,0.25)] bg-[rgba(77,159,220,0.08)]'
                : 'text-[#7FB8E8] border-[rgba(127,184,232,0.2)] bg-[rgba(127,184,232,0.06)]'
              return (
                <Link
                  key={post.slug}
                  href={`/insights/${post.slug}`}
                  className="group bg-[#0e0e1c] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.12)] rounded-2xl p-7 flex flex-col transition-all duration-200 hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-[0.65rem] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border ${tagColor}`}>
                      {post.tag}
                    </span>
                    <span className="text-[0.7rem] text-[#6e6e8e] font-mono ml-auto">{post.read} read</span>
                  </div>
                  <h3 className="text-[0.95rem] font-bold font-sans text-[#f0f0fa] leading-snug mb-3 group-hover:text-cyan transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[0.82rem] text-[#5a5a7a] leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <span className="mt-5 text-xs font-mono text-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                    Read article →
                  </span>
                </Link>
              )
            })}
          </div>

          <div className="text-center mt-8 md:hidden">
            <CTAButton href="/insights" variant="ghost" size="md">All Articles</CTAButton>
          </div>
        </div>
      </section>

      {/* ═══ CTA BAND ════════════════════════════════════════════ */}
      <section className="py-24 px-6" aria-label="Book a session">
        <div className="max-w-[900px] mx-auto">
          <div className="relative text-center bg-[#0c0c1e] border border-[rgba(238,148,39,0.15)] rounded-3xl px-8 py-16 overflow-hidden">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan/[0.04] via-transparent to-purple/[0.04] pointer-events-none" aria-hidden="true" />

            <p className="text-xs font-mono text-cyan tracking-[0.2em] uppercase mb-4">Ready to Start?</p>
            <h2 className="text-3xl md:text-4xl font-bold font-sans text-[#f0f0fa] mb-4">
              Let's Build Something Defensible.
            </h2>
            <p className="text-[#9898b8] text-[1rem] max-w-lg mx-auto mb-10">
              Whether you're hardening your infrastructure, launching a Web3 product, or transforming
              your digital stack, book a discovery session and we'll chart the path forward.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <BookButton size="xl" />
              <CTAButton href={`mailto:${SITE.email}`} variant="ghost" size="xl" external>
                Send an Email
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
