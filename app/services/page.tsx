import { buildMeta, serviceSchema } from '@/lib/seo'
import { BookButton, CTAButton } from '@/components/ui/CTAButton'
import { SITE } from '@/lib/constants'
import { ShieldIcon, ChainIcon, MobileIcon, RocketIcon } from '@/components/ui/Icons'

export const metadata = buildMeta({
  title: 'Cybersecurity & Blockchain Consulting Services',
  description: 'Professional cybersecurity consulting, blockchain strategy, web3 advisory, technical project management, and digital transformation services. Fractional CISO, security audits, smart contract guidance, and more.',
  path: '/services',
})

/* ── Schema markup for all services ─────────────────────── */
const schemas = [
  serviceSchema({ name: 'Cybersecurity Consulting', description: 'End-to-end cybersecurity advisory including risk assessments, security architecture design, CISO-as-a-service, and incident response planning for enterprises and startups.', provider: 'Ahmed Djobs' }),
  serviceSchema({ name: 'Blockchain Strategy Consulting', description: 'Blockchain architecture guidance, smart contract consulting, Web3 product strategy, tokenomics design, and DeFi advisory for enterprises, startups, and institutional clients.', provider: 'Ahmed Djobs' }),
  serviceSchema({ name: 'Web & Mobile Digital Product Management', description: 'Senior digital product management and delivery leadership for web and mobile platforms, from technical roadmaps to vendor oversight and stakeholder alignment.', provider: 'Ahmed Djobs' }),
  serviceSchema({ name: 'Digital Strategy & Transformation', description: 'Digital transformation advisory and technology strategy, helping organizations design, plan, and execute digital ecosystem modernization with security built in.', provider: 'Ahmed Djobs' }),
]

/* ── Service icon map ────────────────────────────────────── */
const svcIcons = {
  cybersecurity: ShieldIcon,
  blockchain:    ChainIcon,
  webmobile:     MobileIcon,
  digital:       RocketIcon,
} as const

/* ── Service definitions (full detail) ──────────────────── */
const services = [
  {
    id: 'digital' as const,
    num: '01',
    color: { accent: 'text-[#ffb340]', border: 'border-[rgba(255,179,64,0.18)]', glow: 'shadow-[0_0_40px_rgba(255,179,64,0.06)]', badge: 'bg-[rgba(255,179,64,0.08)] text-[#ffb340] border-[rgba(255,179,64,0.2)]', hr: 'bg-[#ffb340]', bullet: 'bg-[#ffb340]' },
    title: 'Digital Strategy & Transformation',
    tagline: 'Architecture for Resilient, Scalable Digital Systems',
    seoHeadline: 'Digital Transformation Consulting for Forward-Thinking Organizations',
    description: `
      Digital transformation has become one of the most misused phrases in business. Behind every
      successful transformation is a clear-eyed architectural vision, ruthless prioritization, and
      organizational alignment, not just a new cloud provider or a SaaS subscription.
    `,
    body: `
      I work with leadership teams to define what digital transformation actually means for their
      organization: which systems to modernize first, how to sequence the migration, where to build
      versus buy, and how to ensure security is a foundation rather than an afterthought. The result is
      a transformation roadmap that's ambitious and achievable.
    `,
    deliverables: [
      'Digital Maturity Assessment',
      'Technology Stack Audit & Modernization Roadmap',
      'Build vs. Buy Strategic Analysis',
      'Cloud Migration Architecture Planning',
      'Legacy System Integration Strategy',
      'Data Architecture & Governance Framework',
      'Digital Operating Model Design',
      'Innovation Pipeline & POC Planning',
      'Executive Alignment & Change Management Advisory',
      'KPI & OKR Framework for Digital Initiatives',
    ],
    idealFor: ['Traditional Enterprises Going Digital', 'Mid-Market Companies Scaling Tech', 'Organizations Post-Acquisition', 'Government & Public Sector Modernization'],
    keywords: ['digital transformation consultant', 'digital strategy consulting', 'technology advisory', 'IT strategy consultant', 'digital transformation services'],
  },
  {
    id: 'webmobile' as const,
    num: '02',
    color: { accent: 'text-[#00ffaa]', border: 'border-[rgba(0,255,170,0.18)]', glow: 'shadow-[0_0_40px_rgba(0,255,170,0.06)]', badge: 'bg-[rgba(0,255,170,0.08)] text-[#00ffaa] border-[rgba(0,255,170,0.2)]', hr: 'bg-[#00ffaa]', bullet: 'bg-[#00ffaa]' },
    title: 'Web & Mobile Digital Product Management',
    tagline: 'Technical Leadership for Complex Digital Products',
    seoHeadline: 'Senior Digital Product Manager for Web & Mobile Delivery',
    description: `
      Great technology doesn't ship itself. Complex digital products, especially those at the
      intersection of security and consumer experience, require a product manager who can think in
      code and communicate in business outcomes. That's the gap I fill.
    `,
    body: `
      From greenfield mobile apps to enterprise web platform migrations, I provide senior delivery
      leadership: technical roadmap design, sprint coordination, vendor selection and oversight,
      stakeholder communication, and risk management. I don't just track tickets;
      I anticipate blockers before they become crises.
    `,
    deliverables: [
      'Technical Roadmap & Product Architecture Planning',
      'Agile Sprint Planning & Delivery Coordination',
      'Cross-functional Team Leadership',
      'Vendor Selection, Evaluation & Oversight',
      'Stakeholder Reporting & Executive Communication',
      'Risk Register & Mitigation Planning',
      'QA Process Design & Release Management',
      'API Integration Architecture Review',
      'Mobile App (iOS / Android) Delivery Management',
      'Web Platform (SaaS / Marketplace) Delivery',
    ],
    idealFor: ['Startups Scaling Their Tech Team', 'Enterprises Running Digital Projects', 'Agencies Needing Senior PM Cover', 'CTOs Seeking Delivery Support'],
    keywords: ['web project manager', 'mobile app project management', 'technical project manager', 'agile project management', 'digital product manager', 'delivery manager'],
  },
  {
    id: 'cybersecurity' as const,
    num: '03',
    color: { accent: 'text-cyan', border: 'border-[rgba(0,198,255,0.2)]', glow: 'shadow-[0_0_40px_rgba(0,198,255,0.08)]', badge: 'bg-[rgba(0,198,255,0.1)] text-cyan border-[rgba(0,198,255,0.25)]', hr: 'bg-cyan', bullet: 'bg-cyan' },
    title: 'Cybersecurity Consulting',
    tagline: 'Audit, Harden & Defend Your Digital Infrastructure',
    seoHeadline: 'Fractional CISO & Cybersecurity Advisory for Modern Organizations',
    description: `
      In today's threat landscape, perimeter defenses are no longer enough. Organizations need a
      strategic security partner who understands both the technical depth and the business risk,
      someone who can translate threat models into boardroom decisions.
    `,
    body: `
      As your cybersecurity consultant, I deliver end-to-end advisory covering initial risk assessments
      and security architecture reviews through incident response planning and compliance readiness (ISO
      27001, SOC 2, GDPR, NCA ECC). Every engagement is built around your actual threat profile, not
      generic checklists.
    `,
    deliverables: [
      'Cybersecurity Risk Assessment & Gap Analysis',
      'Security Architecture Design & Review',
      'Threat Modeling (STRIDE, PASTA, MITRE ATT&CK)',
      'Penetration Testing Strategy & Oversight',
      'CISO-as-a-Service (Fractional)',
      'Incident Response Planning & Tabletop Exercises',
      'Cloud Security Architecture (AWS, GCP, Azure)',
      'Compliance Readiness (ISO 27001, SOC 2, GDPR)',
      'DevSecOps Integration & Secure SDLC',
      'Security Awareness Training for Teams',
    ],
    idealFor: ['Fintech & Regulated Industries', 'SaaS Startups Pre-Launch', 'Enterprises with Legacy Infrastructure', 'Organizations Seeking ISO/SOC Certification'],
    keywords: ['cybersecurity consultant', 'cybersecurity consulting services', 'CISO as a service', 'security audit services', 'cybersecurity risk assessment', 'penetration testing consultant', 'cybersecurity advisory'],
  },
  {
    id: 'blockchain' as const,
    num: '04',
    color: { accent: 'text-purple', border: 'border-[rgba(123,97,255,0.2)]', glow: 'shadow-[0_0_40px_rgba(123,97,255,0.08)]', badge: 'bg-[rgba(123,97,255,0.1)] text-purple border-[rgba(123,97,255,0.25)]', hr: 'bg-purple', bullet: 'bg-purple' },
    title: 'Blockchain Consultancy',
    tagline: 'Strategy, Architecture & Web3 Advisory',
    seoHeadline: 'Enterprise Blockchain Strategy & Web3 Product Advisory',
    description: `
      Blockchain's promise is real, but so is the graveyard of failed implementations. Whether
      you're a Fortune 500 exploring distributed ledger technology or a startup building a DeFi
      protocol, the difference between success and expensive failure is strategic clarity up front.
    `,
    body: `
      I guide organizations from "should we blockchain this?" to a concrete technical architecture
      and go-to-market path. My advisory covers blockchain strategy, smart contract architecture
      review, tokenomics design, and Web3 product development, grounded in what actually works in
      production.
    `,
    deliverables: [
      'Blockchain Feasibility & Strategy Assessment',
      'Smart Contract Architecture Guidance & Review',
      'Tokenomics Design & Economic Modeling',
      'Web3 Product Strategy & Roadmap',
      'DeFi Protocol Architecture Advisory',
      'NFT & Digital Asset Strategy',
      'Blockchain Security Audit Coordination',
      'Layer 1 / Layer 2 Selection & Trade-off Analysis',
      'DAO Governance Structure Design',
      'Institutional Crypto Advisory',
    ],
    idealFor: ['Enterprises Evaluating DLT', 'Web3 Startups & Protocol Teams', 'Investment Funds & Family Offices', 'Government & Public Sector'],
    keywords: ['blockchain consultant', 'blockchain strategy consulting', 'web3 consultant', 'smart contract consulting', 'DeFi consultant', 'crypto advisor', 'blockchain advisory'],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* JSON-LD schemas */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      {/* ═══ HERO ══════════════════════════════════════════════ */}
      <section className="relative py-24 px-6 text-center overflow-hidden" aria-label="Services header">
        <div className="absolute inset-0 bg-cyber-grid opacity-[0.3] pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-xs font-mono text-cyan tracking-[0.2em] uppercase mb-4">What I Offer</p>
          <h1 className="text-4xl md:text-5xl font-bold font-sans text-[#f0f0fa] tracking-tight mb-5">
            Consulting Services
          </h1>
          <p className="text-lg text-[#9898b8] max-w-xl mx-auto leading-relaxed">
            Four disciplines, one consultant. Pick the engagement model that fits: one-off project, ongoing retainer, or fractional leadership embedded in your team.
          </p>
        </div>
      </section>

      {/* ═══ SERVICE SECTIONS ══════════════════════════════════ */}
      {services.map((svc, idx) => (
        <section
          key={svc.id}
          id={svc.id}
          className={`py-20 px-6 scroll-mt-24 ${idx % 2 === 1 ? 'bg-[rgba(255,255,255,0.015)]' : ''}`}
          aria-label={svc.title}
        >
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

              {/* Left: Text */}
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className={svc.color.accent}>
                    {(() => { const Icon = svcIcons[svc.id]; return <Icon size={28} /> })()}
                  </span>
                  <span className={`text-[0.65rem] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border ${svc.color.badge}`}>
                    Service {svc.num}
                  </span>
                </div>

                <h2 className={`text-3xl md:text-[2.2rem] font-bold font-sans ${svc.color.accent} mb-2`}>
                  {svc.title}
                </h2>
                <p className="text-sm font-mono text-[#5a5a7a] mb-5">{svc.tagline}</p>

                <div className={`h-px w-12 ${svc.color.hr} mb-7`} />

                <h3 className="text-[1rem] font-bold text-[#f0f0fa] mb-3">{svc.seoHeadline}</h3>
                <p className="text-[#9898b8] text-[0.9rem] leading-relaxed mb-4">{svc.description.trim()}</p>
                <p className="text-[#9898b8] text-[0.9rem] leading-relaxed mb-8">{svc.body.trim()}</p>

                {/* Ideal For */}
                <div className="mb-8">
                  <p className="text-xs font-mono text-[#5a5a7a] tracking-widest uppercase mb-3">Ideal For</p>
                  <div className="flex flex-wrap gap-2">
                    {svc.idealFor.map(label => (
                      <span key={label} className="text-[0.72rem] px-3 py-1 rounded-full border border-[rgba(255,255,255,0.07)] text-[#9898b8] bg-[rgba(255,255,255,0.03)]">
                        {label}
                      </span>
                    ))}
                  </div>
                </div>

                <BookButton size="lg" />
              </div>

              {/* Right: Deliverables */}
              <div className={`bg-[#0e0e1c] border rounded-2xl p-8 ${svc.color.border} ${svc.color.glow}`}>
                <p className="text-xs font-mono text-[#5a5a7a] tracking-widest uppercase mb-6">
                  What You Get
                </p>
                <ul className="flex flex-col gap-4">
                  {svc.deliverables.map(item => (
                    <li key={item} className="flex items-start gap-3 text-[0.875rem] text-[#9898b8]">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${svc.color.bullet}`} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ═══ CTA ════════════════════════════════════════════════ */}
      <section className="py-24 px-6 border-t border-[rgba(255,255,255,0.05)]" aria-label="Book a consultation">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-xs font-mono text-cyan tracking-[0.2em] uppercase mb-4">Next Step</p>
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-[#f0f0fa] mb-4">
            Not Sure Which Service Fits?
          </h2>
          <p className="text-[#c0c0d8] max-w-md mx-auto mb-10">
            Book a free 30-minute discovery call. We'll map your challenges to the right engagement model. No sales pitch, just honest advice.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <BookButton size="xl" />
            <CTAButton href={`mailto:${SITE.email}`} variant="ghost" size="xl" external>
              Send a Brief
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  )
}
