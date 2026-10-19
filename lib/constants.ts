export const SITE = {
  name:        'Ahmed Djobs',
  url:         'https://djobs.net',
  title:       'Ahmed Djobs | Cybersecurity Advisor · Product Strategist · Blockchain Advisor',
  description: 'Ahmed Djobs is a senior digital consultant with 15+ years of enterprise delivery. Cybersecurity Advisor, Technical Product Strategist, and Blockchain Advisor for regulated industries, fintech, and government-scale organisations. Founder of Zero Bytes cybersecurity.',
  email:       'contact@djobs.net',
  cal:         'https://cal.com/djobs',
  linkedin:    'https://www.linkedin.com/in/ahmeddjobs/',
  twitter:     'https://x.com/AhmedDjobs',
  github:      'https://github.com/Ahmeddh',
  location:    'Global · Remote-First',
  twitterHandle: '@AhmedDjobs',
} as const

export const NAV_LINKS = [
  { href: '/',          label: 'Home'     },
  { href: '/about',     label: 'About'    },
  { href: '/services',  label: 'Services' },
  { href: '/insights',  label: 'Insights' },
  { href: '/projects',  label: 'Projects' },
] as const

export const SERVICES = [
  {
    id:    'digital',
    slug:  'digital-strategy',
    num:   '01',
    icon:  'digital',
    color: 'amber' as const,
    title: 'Enterprise Digital Transformation',
    tagline: 'System Modernisation with Security and Scalability Built In',
    description: 'Large-scale digital modernisation advisory: technology architecture, migration sequencing, build-vs-buy decisions, and operating model design for enterprises and public sector organisations.',
    keywords: ['digital transformation advisor', 'enterprise technology strategy', 'IT modernisation consultant', 'digital transformation consulting', 'technology advisory'],
  },
  {
    id:    'webmobile',
    slug:  'web-mobile-pm',
    num:   '02',
    icon:  'webmobile',
    color: 'green' as const,
    title: 'Digital Product Strategy & Delivery',
    tagline: 'Senior Product Leadership for Enterprise-Scale Systems',
    description: 'End-to-end product strategy and delivery leadership for complex digital platforms: technical roadmaps, sprint coordination, vendor oversight, and stakeholder alignment at enterprise scale.',
    keywords: ['enterprise product strategist', 'digital product manager', 'technical product management', 'delivery leadership', 'product strategy consultant', 'digital transformation advisor'],
  },
  {
    id:    'cybersecurity',
    slug:  'cybersecurity',
    num:   '03',
    icon:  'cybersecurity',
    color: 'cyan' as const,
    title: 'Cybersecurity Consulting & Security Leadership',
    tagline: 'Senior Security Advisory for Enterprises and Regulated Industries',
    description: 'End-to-end security leadership: governance, architecture, compliance readiness, and risk programs for enterprises and regulated industries. Founder of Zero Bytes cybersecurity.',
    keywords: ['cybersecurity consultant', 'cybersecurity advisory', 'security leadership', 'ISO 27001 consultant', 'SOC 2 compliance', 'HIPAA security', 'security architecture consultant'],
  },
  {
    id:    'blockchain',
    slug:  'blockchain',
    num:   '04',
    icon:  'blockchain',
    color: 'purple' as const,
    title: 'Blockchain & Web3 Architecture Advisory',
    tagline: 'Enterprise Blockchain Strategy, Identity Systems & Smart Contracts',
    description: 'Blockchain strategy, Hyperledger and SSI architecture, smart contract design, and Web3 advisory for enterprises, regulated industries, and institutional clients.',
    keywords: ['blockchain consultant', 'blockchain strategy consulting', 'web3 strategist', 'enterprise blockchain', 'Hyperledger consultant', 'smart contract advisor', 'SSI identity'],
  },
] as const

export type ServiceColor = 'cyan' | 'purple' | 'green' | 'amber'
