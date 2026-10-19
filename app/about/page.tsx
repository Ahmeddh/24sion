import { buildMeta, personSchema } from '@/lib/seo'
import { BookButton, CTAButton } from '@/components/ui/CTAButton'
import { SITE } from '@/lib/constants'
import { SudanFlagIcon } from '@/components/ui/Icons'
import { ContactQR } from '@/components/ui/ContactQR'

export const metadata = buildMeta({
  title: 'About Ahmed Djobs: Digital Consultant',
  description: 'Ahmed Djobs is a digital nomad consultant with 15+ years of expertise delivering national-scale fintech, enterprise platforms, and secure identity systems for governments and startups worldwide.',
  path: '/about',
})

const timeline = [
  {
    year: '2025 to Now',
    role: 'CEO',
    jobTitle: 'Chief Executive Officer',
    org: 'Zero Bytes · 0bytes.io (Founded 2019)',
    detail: 'Leading Zero Bytes, a cybersecurity firm built around real attack paths rather than assumptions or checklists. We work with SaaS companies, financial institutions, and regulated businesses to uncover exploitable weaknesses and turn them into clear, prioritised fixes that measurably reduce risk. Services cover penetration testing (external, application, API, and mobile), identity and internal security assessments, phishing simulations, security awareness programs, threat intelligence monitoring, cyber resilience programs, and ISO 27001 / PCI DSS compliance readiness.',
  },
  {
    year: '2024 to Now',
    role: 'Independent Digital Consultant',
    jobTitle: 'Independent Digital Consultant',
    org: 'djobs.net',
    detail: 'Running a boutique consultancy focused on cybersecurity advisory, blockchain strategy, and digital transformation. Clients span fintech startups, enterprise organisations, and government agencies across Africa, the Middle East, and Europe.',
  },
  {
    year: 'Sep 2021 to Nov 2024',
    role: 'Solution Architect',
    jobTitle: 'Solution Architect',
    org: 'Conduent (Remote)',
    detail: 'Designed a secure healthcare identity system for US government agencies using Hyperledger Fabric and Self-Sovereign Identity (SSI) models. Architected a tokenised, HIPAA-compliant access management solution for medical data. Led the Royal Caribbean digital pilot covering experience tokens for VIP services and concierge automation. Advised on welfare benefits distribution, supply chain tracking, and IoT-integrated auditable access control.',
  },
  {
    year: 'Nov 2016 to Jan 2021',
    role: 'CTO',
    jobTitle: 'Chief Technology Officer',
    org: 'Appitize LTD Co.',
    detail: 'Served as CTO, leading technical strategy and digital product delivery for clients across the Gulf region. Oversaw deployment of AI-powered chatbot solutions, brand portfolio websites, Facebook application campaigns, and paid digital advertising products. Managed technical teams and agency vendor relationships to deliver high-traffic marketing campaigns and conversion-focused automation workflows. Drove measurable growth outcomes through data-informed digital product development aligned with client commercial objectives.',
  },
  {
    year: 'Apr 2015 to May 2017',
    role: 'Sr. Software Developer',
    jobTitle: 'Senior Software Developer',
    org: 'ICN Integrated Solutions (icare net)',
    detail: 'Built ShoogirCash, a national e-Wallet integrated with the Central Bank of Sudan (CBOS) Consumer API for settlement and clearing. ShoogirCash processed approximately 69% of online payment transactions in Sudan during 2015 to 2016, becoming the country\'s de-facto digital payments rail. Engineered secure RESTful payment services and a customised commission engine handling complex multi-tier business structures.',
  },
  {
    year: 'Jun 2011 to Apr 2015',
    role: 'Software Engineer',
    jobTitle: 'Software Engineer',
    org: 'OraConcept for IT Solution',
    detail: 'Designed and delivered the PETRONAS Enterprise Fuel eCoupon platform: a prepaid fuel coupon system serving corporate clients and Petronas station agents across the national network. The system covered online coupon ordering, watermarked branded coupon generation, station-level claim and verification, and a credit redemption workflow that converted redeemed coupons into station fuel ordering credit. Built on a web-based fraud-prevention architecture giving Petronas full lifecycle visibility over every coupon issued, claimed, and settled.',
  },
]

const education = [
  {
    institution: 'University at Buffalo, State University of New York',
    credential: 'Blockchain Specialist · Blockchain',
    period: 'Jun 2021 to Sep 2022',
    detail: 'Specialisation covering encryption, hashing, consensus mechanisms, transactions, and private-public key systems. Designed, developed, and tested smart contracts and decentralised applications on a private Ethereum blockchain. Topics included dApp stack architecture, best practices, scalability, and privacy, concluding with a landscape review of real-world use cases and emerging platforms.',
  },
  {
    institution: 'Sudan University of Science & Technology',
    credential: 'Bachelor of Electronics Engineering · Computer Engineering',
    period: '2006 to 2011',
    detail: 'Foundation in software engineering, electronics, network systems, and computer architecture.',
  },
  {
    institution: 'Niit Institute',
    credential: 'Diploma in .Net Technology · Web Development using ASP.NET',
    period: '2012 to 2013',
    detail: 'Practical training in .NET framework, C#, and ASP.NET web application development.',
  },
  {
    institution: 'Microsoft Virtual Academy',
    credential: 'Computer Software Technology / Technician',
    period: '',
    detail: 'Recognised as Top Student in Sudan. Covered core software technology and Microsoft development tooling.',
  },
]

const certifications = [
  { name: 'Prompt Design in Vertex AI Skill Badge', issuer: 'Google', date: 'Sep 2025' },
  { name: 'Foundations of Digital Marketing & E-commerce', issuer: 'Google · Coursera', date: '91.87%' },
  { name: 'React.js Essential Training', issuer: 'LinkedIn Learning', date: 'Jan 2022' },
  { name: 'Blockchain Platforms', issuer: 'University at Buffalo · Coursera', date: '85.18%' },
  { name: 'Blockchain Basics', issuer: 'University at Buffalo · Coursera', date: '96%' },
  { name: 'Smart Contracts', issuer: 'University at Buffalo · Coursera', date: '90.40%' },
  { name: 'Decentralized Applications (Dapps)', issuer: 'University at Buffalo · Coursera', date: '88.76%' },
  { name: 'Programming for Everybody: Getting Started with Python', issuer: 'University of Michigan · Coursera', date: '96.51%' },
  { name: 'ITIL Foundation', issuer: 'Cabinet Office', date: 'Feb 2013' },
  { name: 'Software Testing using Visual Studio 2012', issuer: 'Microsoft', date: 'Apr 2013' },
  { name: 'Administering Team Foundation Server 2012', issuer: 'Microsoft', date: 'Apr 2013' },
]

const skills = [
  {
    category: 'Platform, Fintech & Product',
    color: 'text-[#00ffaa]',
    border: 'border-[rgba(0,255,170,0.12)]',
    items: [
      'Digital Platform Strategy & Architecture',
      'Product Scoping & Roadmap Definition',
      'e-Wallets & Payment Rails',
      'Central-Bank API Integration',
      'KYC / AML Workflows & Compliance',
      'Settlement, Clearing & Commission Engines',
      'Delivery Leadership & Stakeholder Alignment',
      'UN / Government Programme Management',
    ],
  },
  {
    category: 'Engineering & Infrastructure',
    color: 'text-[#ffb340]',
    border: 'border-[rgba(255,179,64,0.12)]',
    items: [
      'React.js, Next.js, Node.js, FastAPI, C#/.NET',
      'React Native & Flutter (Mobile)',
      'REST & GraphQL APIs',
      'PostgreSQL, MySQL, MongoDB, Firebase, Redis',
      'Kafka, TheGraph, IPFS',
      'CI/CD, Microsoft ALM, ITIL',
      'Microservices & Event-Driven Systems',
      'Real-time & Geospatial Systems',
    ],
  },
  {
    category: 'Cybersecurity & Security',
    color: 'text-cyan',
    border: 'border-[rgba(0,198,255,0.15)]',
    items: [
      'Threat Modelling (STRIDE, PASTA)',
      'Secure SDLC & DevSecOps',
      'Risk Assessment & Gap Analysis',
      'Security Architecture Review',
      'Incident Response & Playbooks',
      'Compliance (ISO 27001, SOC 2, GDPR, PCI-DSS, HIPAA)',
      'Supply-Chain Hygiene & PII Safety',
      'Cloud Security (AWS, GCP, Azure)',
    ],
  },
  {
    category: 'Blockchain, Web3 & AI',
    color: 'text-purple',
    border: 'border-[rgba(123,97,255,0.15)]',
    items: [
      'Smart Contract Development & Audit',
      'DeFi Protocols & DAO Architecture',
      'Tokenomics & Economic Design',
      'Hyperledger Fabric & SSI Models',
      'NFT Development & IPFS Storage',
      'LLM Integration & RAG Pipelines',
      'AI Strategy & Use-Case Selection',
      'Conversational AI & Workflow Automation',
    ],
  },
]

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* ═══ HERO ════════════════════════════════════════════════ */}
      <section className="relative py-24 px-6 overflow-hidden" aria-label="About header">
        <div className="absolute inset-0 bg-cyber-grid opacity-[0.25] pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <p className="text-xs font-mono text-cyan tracking-[0.2em] uppercase mb-4">Who I Am</p>
            <h1 className="text-4xl md:text-5xl font-bold font-sans text-[#f0f0fa] tracking-tight leading-tight mb-6">
              Ahmed Djobs
            </h1>
            <p className="text-lg text-purple font-mono mb-6">Digital Consultant · Cybersecurity & Blockchain</p>
            <p className="text-[#9898b8] leading-relaxed mb-4">
              15 years. National-scale fintech. Government identity systems. UN peacekeeping infrastructure.
              I don't just advise on systems, I've built them from the ground up at scale.
            </p>
            <p className="text-[#9898b8] leading-relaxed mb-8">
              Today I partner with founders and product leaders to scope the platform, design the architecture,
              lead the delivery, and ship something their customers, auditors, and investors can all trust.
              Security is built in, mobile is first-class, and AI is brought in only where it creates measurable leverage.
            </p>
            <div className="flex gap-3">
              <BookButton size="lg" />
              <CTAButton href={`mailto:${SITE.email}`} variant="ghost" size="lg" external>
                Get in Touch
              </CTAButton>
            </div>
          </div>

          {/* Card */}
          <div className="bg-[#0e0e1c] border border-[rgba(255,255,255,0.07)] rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-7 pb-7 border-b border-[rgba(255,255,255,0.06)]">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan/30 to-purple/30 border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-2xl font-bold text-[#f0f0fa] font-mono">
                AD
              </div>
              <div>
                <p className="text-[#f0f0fa] font-bold text-lg">Ahmed Djobs</p>
                <p className="text-[#5a5a7a] text-sm font-mono">@AhmedDjobs</p>
              </div>
            </div>
            <dl className="flex flex-col gap-5">
              {[
                { label: 'Title',         value: 'Digital Consultant · Cybersecurity & Blockchain' },
                { label: 'Location',      value: 'Digital Nomad', flag: true },
                { label: 'Experience',    value: '15+ Years' },
                { label: 'Available For', value: 'Fractional · Project · Retainer' },
                { label: 'Response Time', value: '< 24 hours' },
                { label: 'Languages',     value: 'English · Arabic' },
              ].map(item => (
                <div key={item.label}>
                  <dt className="text-[0.65rem] font-mono text-[#6e6e8e] tracking-widest uppercase mb-1">{item.label}</dt>
                  <dd className="text-sm text-[#9898b8] flex items-center gap-1.5">
                    {item.value}
                    {'flag' in item && item.flag && <SudanFlagIcon size={14} />}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ═══ PHILOSOPHY ══════════════════════════════════════════ */}
      <section className="py-16 px-6 border-t border-[rgba(255,255,255,0.05)]" aria-label="Philosophy">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-xs font-mono text-purple tracking-[0.2em] uppercase mb-4">Philosophy</p>
          <blockquote className="text-2xl md:text-3xl font-bold font-sans text-[#f0f0fa] leading-snug mb-6">
            "Security isn't a feature. It's a foundation. And good strategy isn't a slide deck. It's a decision."
          </blockquote>
          <p className="text-[#9898b8] text-[1rem] max-w-lg mx-auto">
            My consulting practice is built on the belief that the best technical advice is also the
            most honest advice, even when it means telling a client what they don't want to hear.
          </p>
        </div>
      </section>

      {/* ═══ SKILLS ══════════════════════════════════════════════ */}
      <section className="py-20 px-6 border-t border-[rgba(255,255,255,0.05)]" aria-label="Skills and expertise">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono text-cyan tracking-[0.2em] uppercase mb-3">Expertise</p>
            <h2 className="text-3xl font-bold font-sans text-[#f0f0fa]">Technical Skill Set</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {skills.map(group => (
              <div key={group.category} className={`bg-[#0e0e1c] border rounded-2xl p-7 ${group.border}`}>
                <h3 className={`text-sm font-bold font-mono uppercase tracking-widest mb-5 ${group.color}`}>
                  {group.category}
                </h3>
                <ul className="flex flex-col gap-3">
                  {group.items.map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-[0.875rem] text-[#9898b8]">
                      <span
                        className={`w-1 h-1 rounded-full flex-shrink-0 mt-[0.45rem] ${group.color.replace('text-', 'bg-')}`}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TIMELINE ════════════════════════════════════════════ */}
      <section className="py-20 px-6 border-t border-[rgba(255,255,255,0.05)]" aria-label="Career timeline">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono text-cyan tracking-[0.2em] uppercase mb-3">Journey</p>
            <h2 className="text-3xl font-bold font-sans text-[#f0f0fa]">Work Experience</h2>
          </div>
          <ol className="relative border-l border-[rgba(255,255,255,0.08)] flex flex-col gap-10 pl-8">
            {timeline.map((item, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[2.35rem] top-1 w-3 h-3 rounded-full bg-[#0e0e1c] border-2 border-cyan" aria-hidden="true" />
                <p className="text-xs font-mono text-cyan mb-1">{item.year}</p>
                <p className="text-[1rem] font-bold text-[#f0f0fa] mb-0.5">{item.role}</p>
                <p className="text-[0.65rem] font-mono tracking-widest uppercase text-[#6e6e8e] mb-1">{item.jobTitle}</p>
                <p className="text-xs text-purple font-mono mb-2">{item.org}</p>
                <p className="text-[0.875rem] text-[#9898b8] leading-relaxed">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══ EDUCATION ═══════════════════════════════════════════ */}
      <section className="py-20 px-6 border-t border-[rgba(255,255,255,0.05)]" aria-label="Education">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono text-purple tracking-[0.2em] uppercase mb-3">Credentials</p>
            <h2 className="text-3xl font-bold font-sans text-[#f0f0fa]">Education</h2>
          </div>
          <div className="flex flex-col gap-6">
            {education.map((item, i) => (
              <div key={i} className="bg-[#0e0e1c] border border-[rgba(255,255,255,0.07)] rounded-2xl p-7">
                <div className="flex items-start justify-between gap-4 mb-1">
                  <p className="text-[1rem] font-bold text-white">{item.institution}</p>
                  {item.period && (
                    <span className="text-xs font-mono text-[#6e6e8e] whitespace-nowrap mt-1">{item.period}</span>
                  )}
                </div>
                <p className="text-sm font-mono text-[#b8a8ff] mb-3">{item.credential}</p>
                <p className="text-[0.875rem] text-[#9898b8] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CERTIFICATIONS ══════════════════════════════════════ */}
      <section className="py-20 px-6 border-t border-[rgba(255,255,255,0.05)]" aria-label="Certifications">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono text-cyan tracking-[0.2em] uppercase mb-3">Licenses</p>
            <h2 className="text-3xl font-bold font-sans text-[#f0f0fa]">Certifications</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <div key={i} className="bg-[#0e0e1c] border border-[rgba(255,255,255,0.07)] rounded-xl p-5 flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-cyan flex-shrink-0 mt-[0.35rem]" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-[#f0f0fa] mb-0.5">{cert.name}</p>
                  <p className="text-xs font-mono text-purple">{cert.issuer}</p>
                  <p className="text-xs font-mono text-[#6e6e8e] mt-0.5">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ════════════════════════════════════════════════ */}
      <section className="py-24 px-6 border-t border-[rgba(255,255,255,0.05)]" aria-label="Work with me">
        <div className="max-w-[700px] mx-auto text-center">
          <p className="text-xs font-mono text-cyan tracking-[0.2em] uppercase mb-4">Let's Work Together</p>
          <h2 className="text-3xl font-bold font-sans text-[#f0f0fa] mb-4">
            Ready for Straight-Talking Advisory?
          </h2>
          <p className="text-[#c0c0d8] mb-10 max-w-md mx-auto">
            Book a discovery session and let's figure out exactly where I can add the most value
            for your organisation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <BookButton size="xl" />
            <CTAButton href="/services" variant="ghost" size="xl">View Services</CTAButton>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-[0.65rem] font-mono text-[#6e6e8e] tracking-widest uppercase">Scan to save contact</p>
            <div className="inline-block rounded-xl overflow-hidden border border-[rgba(0,198,255,0.2)] p-2 bg-[#0a0a18]">
              <ContactQR size={110} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
