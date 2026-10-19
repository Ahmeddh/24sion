import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMeta } from '@/lib/seo'
import { PageMotion } from '@/components/layout/PageMotion'
import { FadeIn, MotionSection } from '@/components/motion'
import { SITE } from '@/lib/constants'

export async function generateMetadata(): Promise<Metadata> {
  return buildMeta({
    title: 'Bitcoin Wealth Workshop — Dubai, September 2026 | Ahmed Djobs',
    description: '5 spots. One full day in Dubai. Walk out with a tested Bitcoin self-custody setup and a wealth preservation plan. $5,000 or your money back.',
    path: '/bitcoin-workshop',
  })
}

const btcOrange = '#f7931a'

const NUMBERS = [
  { label: 'SDG / USD — 2018',       value: '26',         sub: 'Sudanese pound, official rate' },
  { label: 'SDG / USD — April 2023', value: '600',        sub: 'War starts. April 15.' },
  { label: 'SDG / USD — Today',      value: '6,000',      sub: '230× collapse since 2018' },
  { label: 'BTC — Aug 8, 2018',      value: '$6,500',     sub: 'Date of first wallet' },
  { label: 'BTC — Today',            value: '$100,000+',  sub: '15× gain, same period' },
]

const WHAT_YOU_GET = [
  { n: '01', title: 'Full custody architecture', body: 'We design your wallet stack from scratch — cold storage, hot wallet, multi-sig where warranted. Built for your threat model, not a generic template.' },
  { n: '02', title: 'Live recovery test', body: 'You destroy your wallet setup in front of me. Then you recover it — across Lightning, Liquid, and mainchain Bitcoin. You leave knowing it works.' },
  { n: '03', title: 'SDG → BTC conversion plan', body: 'How to convert existing wealth to Bitcoin systematically, at what intervals, using which rails. Specific to your situation.' },
  { n: '04', title: 'Self-custody under pressure', body: 'What to do when internet is down, apps stop working, or you need to move fast. Field-tested. Not theoretical.' },
  { n: '05', title: 'Wealth calculation framework', body: 'How to think about Bitcoin as a percentage of your net worth, when to take profit, when to hold. The framework the books don\'t teach.' },
  { n: '06', title: 'Emergency escape protocol', body: 'How to move Bitcoin across borders quickly, safely, with minimal digital footprint. Based on real evacuations, not hypotheticals.' },
]

const GUARANTEE = [
  { title: 'Live recovery or refund', body: 'If you cannot fully recover your wallet across all three networks by end of day — Lightning, Liquid, mainchain — you get your $5,000 back. No questions.' },
  { title: '3× in 3 years or refund', body: 'If Bitcoin has not at minimum tripled in value within 3 years of your workshop date, you get your $5,000 back. Historically conservative. Still guaranteed.' },
]

const FOR = [
  'You have $10k+ monthly income after tax and real wealth to protect',
  'You understand Bitcoin is not a get-rich-quick scheme',
  'You\'re time-poor and need one condensed, expert session — not 200 YouTube videos',
  'You\'re in the MENA region or diaspora and understand what currency collapse actually looks like',
  'You want self-custody, not another exchange account',
]

const NOT_FOR = [
  'You\'re looking for trading signals or price predictions',
  'You want to put in $100 and see what happens',
  'You\'re not willing to take notes and do the recovery test',
  'You\'re expecting someone to manage your Bitcoin for you',
]

const FAQ = [
  { q: 'What do I need to bring?', a: 'A laptop, your phone, and an open mind. No prior Bitcoin experience required — but basic tech literacy helps. We start from your current setup.' },
  { q: 'What does the hotel day-use include?', a: 'A private meeting room or suite for the full day session, access to amenities. The experience is designed so you\'re focused and comfortable for 8 hours of deep work.' },
  { q: 'Travel expenses?', a: 'Not included. You cover your own flights and hotel stay if you need accommodation. The $5,000 covers Ahmed\'s full day and the workshop venue.' },
  { q: 'How do I know the guarantee is real?', a: 'The recovery guarantee is provable in the room — you either recover your wallet or you don\'t. The 3× guarantee is written into the service agreement you sign before paying.' },
  { q: 'Why only 5 spots?', a: 'Each session is fully 1:1. Ahmed is in Dubai for a limited window in September. 5 sessions is the maximum without compromising quality.' },
  { q: 'I\'m not in Dubai — can we do this remotely?', a: 'The September cohort is Dubai only. Remote options for Q4 2026 are being evaluated. Book a fit check call and we can discuss.' },
]

export default function BitcoinWorkshopPage() {
  return (
    <PageMotion>
      <main className="min-h-screen bg-base text-white">

        {/* ── HERO ───────────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-b border-white/[0.06] py-28 px-6">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{ background: `radial-gradient(ellipse 80% 50% at 50% -10%, ${btcOrange}22, transparent)` }}
          />
          <div className="relative mx-auto max-w-3xl text-center">
            <FadeIn>
              <p className="font-mono text-[10px] tracking-[0.22em] uppercase mb-6" style={{ color: btcOrange }}>
                Bitcoin · Self-Custody · Dubai · September 2026
              </p>
              <h1 className="font-sans text-5xl md:text-7xl font-black tracking-tight leading-[1.02] mb-6">
                5 Seats.<br />
                <span style={{ color: btcOrange }}>One Day.</span><br />
                Your Wealth, Secured.
              </h1>
              <p className="text-white/60 text-lg leading-relaxed max-w-xl mx-auto mb-10">
                A full-day private Bitcoin self-custody workshop in Dubai.
                Walk out with a tested setup, a recovery protocol, and a plan.
                Or your $5,000 back.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={SITE.cal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-sans font-bold text-sm tracking-wide transition-all"
                  style={{ background: btcOrange, color: '#080810' }}
                >
                  Book a 20-min Fit Check Call
                </a>
                <a
                  href="#what-you-get"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-8 py-4 font-sans font-semibold text-sm tracking-wide text-white/70 hover:text-white hover:border-white/20 transition-all"
                >
                  See What's Included
                </a>
              </div>
              <p className="mt-6 font-mono text-[11px] text-white/30 tracking-widest uppercase">
                $5,000 · 5 spots · Includes luxury hotel day-use
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ── THE NUMBERS ────────────────────────────────────────── */}
        <MotionSection className="border-b border-white/[0.06] py-20 px-6">
          <div className="mx-auto max-w-4xl">
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase mb-3" style={{ color: btcOrange }}>The contrast</p>
            <h2 className="font-sans text-3xl md:text-4xl font-black tracking-tight mb-12">
              Two assets. Same decade. Different worlds.
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {NUMBERS.map((n) => (
                <div key={n.label} className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-5">
                  <p className="font-mono text-[9px] tracking-widest uppercase text-white/35 mb-3 leading-snug">{n.label}</p>
                  <p className="font-mono text-2xl font-bold mb-1" style={{ color: btcOrange }}>{n.value}</p>
                  <p className="text-[11px] text-white/40 leading-snug">{n.sub}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-white/40 text-sm leading-relaxed max-w-2xl">
              The people who kept SDG lost 99.5% of their USD purchasing power since 2018.
              The people who held Bitcoin made 15×. The gap between knowing and not knowing
              is not theoretical — it has a number.
            </p>
          </div>
        </MotionSection>

        {/* ── THE STORY ──────────────────────────────────────────── */}
        <MotionSection className="border-b border-white/[0.06] py-20 px-6">
          <div className="mx-auto max-w-2xl">
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase mb-3" style={{ color: btcOrange }}>The origin</p>
            <h2 className="font-sans text-3xl md:text-4xl font-black tracking-tight mb-10">
              Why this workshop exists.
            </h2>

            <div className="space-y-8 text-white/70 leading-relaxed">
              <div className="border-l-2 pl-6" style={{ borderColor: btcOrange + '60' }}>
                <p className="font-mono text-[10px] tracking-widest uppercase text-white/30 mb-2">August 8, 2018 · 3am</p>
                <p>
                  A friend needed a WordPress site. Three nights of work, paid in Bitcoin.
                  BTC was $6,500. I didn't fully understand what I was accepting. I just needed the payment.
                </p>
                <p className="mt-3">
                  I still know that public address. I just can't touch it.
                </p>
              </div>

              <div className="border-l-2 pl-6 border-white/10">
                <p className="font-mono text-[10px] tracking-widest uppercase text-white/30 mb-2">2021 · The Expensive Lesson</p>
                <p>
                  My M1 arrived. I felt invincible. I decided to try to break SHA-256.
                  I pushed my private key to a public GitHub repo.
                  The wallet was compromised the same day.
                </p>
                <p className="mt-3">
                  That mistake taught me more about Bitcoin security than any course ever could.
                  I learned what self-custody really means — not from a book, but from real loss.
                </p>
              </div>

              <div className="border-l-2 pl-6" style={{ borderColor: btcOrange + '60' }}>
                <p className="font-mono text-[10px] tracking-widest uppercase text-white/30 mb-2">April 15, 2023 · Sudan</p>
                <p>
                  The war started. Banks froze. Apps stopped working. Internet cut in and out.
                  Families were fleeing to Egypt, Ethiopia, UAE, Saudi Arabia, Uganda, Rwanda,
                  Kenya, South Sudan, Chad — with everything they owned either stuck, burned, or inaccessible.
                </p>
                <p className="mt-3">
                  I had less than $1,000 in personal assets. I had a methodology.
                </p>
                <p className="mt-3">
                  Over the following months I planned, executed, and liquidated{' '}
                  <span className="text-white font-semibold">over $500,000</span> in Bitcoin and stablecoin
                  transfers for people I loved. Every single one arrived at their destination with their wealth intact.
                </p>
                <p className="mt-3">
                  I charged 1–2% on the conversion rate.
                  Western Union was charging 5%. SWIFT was taking 2.5% and 3–5 business days
                  that people running from a war simply didn't have. The black market was at 5%
                  with no guarantees and no recourse. Mine was still the best rate available —
                  and it settled in minutes.
                </p>
              </div>

              <div className="border-l-2 pl-6 border-white/10">
                <p className="font-mono text-[10px] tracking-widest uppercase text-white/30 mb-2">Now</p>
                <p>
                  1 USD now costs 6,000 Sudanese pounds. In 2018 it cost 26.
                  Bitcoin went from $6,500 to over $100,000.
                </p>
                <p className="mt-3">
                  I didn't charge then because I didn't believe what I knew was worth paying for.
                  That was wrong. People paid for not knowing — in a currency they didn't choose.
                </p>
                <p className="mt-3 text-white font-medium">
                  I'm charging now. Because it's worth it. And because you deserve to know.
                </p>
              </div>
            </div>
          </div>
        </MotionSection>

        {/* ── WHAT YOU GET ───────────────────────────────────────── */}
        <div id="what-you-get">
        <MotionSection className="border-b border-white/[0.06] py-20 px-6">
          <div className="mx-auto max-w-4xl">
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase mb-3" style={{ color: btcOrange }}>The workshop</p>
            <h2 className="font-sans text-3xl md:text-4xl font-black tracking-tight mb-12">
              One day. Everything you need.
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {WHAT_YOU_GET.map((item) => (
                <div key={item.n} className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-6">
                  <p className="font-mono text-[10px] tracking-widest uppercase mb-3" style={{ color: btcOrange }}>{item.n}</p>
                  <h3 className="font-sans font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl border p-6" style={{ borderColor: btcOrange + '30', background: btcOrange + '08' }}>
              <p className="font-mono text-[10px] tracking-widest uppercase mb-2" style={{ color: btcOrange }}>Validation</p>
              <p className="text-white/70 text-sm leading-relaxed">
                The methodology has been reviewed by the{' '}
                <span className="text-white font-semibold">ZeroBytes cybersecurity team</span> —
                security professionals with a security-first mindset, recognised in Sudan and internationally.
                Their review covers wallet architecture, recovery protocols, and operational security.
                Testimonials available upon request.
              </p>
            </div>
          </div>
        </MotionSection>
        </div>

        {/* ── THE GUARANTEE ──────────────────────────────────────── */}
        <MotionSection className="border-b border-white/[0.06] py-20 px-6">
          <div className="mx-auto max-w-3xl">
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase mb-3" style={{ color: btcOrange }}>The guarantee</p>
            <h2 className="font-sans text-3xl md:text-4xl font-black tracking-tight mb-4">
              Two ways to get your money back.
            </h2>
            <p className="text-white/50 mb-10 text-sm">Both are extremely unlikely. That's the point.</p>
            <div className="grid md:grid-cols-2 gap-5">
              {GUARANTEE.map((g) => (
                <div key={g.title} className="rounded-xl border p-6" style={{ borderColor: btcOrange + '40', background: btcOrange + '06' }}>
                  <h3 className="font-sans font-bold text-white mb-3">{g.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{g.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-white/35 text-xs leading-relaxed">
              The 3× guarantee applies to Bitcoin's market price, not your investment returns.
              The service agreement you sign before payment specifies exact terms and conditions.
              The recovery guarantee is verifiable in the room on the day.
            </p>
          </div>
        </MotionSection>

        {/* ── WHO IT'S FOR ───────────────────────────────────────── */}
        <MotionSection className="border-b border-white/[0.06] py-20 px-6">
          <div className="mx-auto max-w-4xl grid md:grid-cols-2 gap-12">
            <div>
              <p className="font-mono text-[10px] tracking-[0.22em] uppercase mb-3" style={{ color: btcOrange }}>This is for you if</p>
              <h2 className="font-sans text-2xl font-black tracking-tight mb-8">The right fit.</h2>
              <ul className="space-y-4">
                {FOR.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-white/65 leading-relaxed">
                    <span className="mt-0.5 shrink-0 font-mono text-xs" style={{ color: btcOrange }}>→</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.22em] uppercase mb-3 text-white/30">This is not for you if</p>
              <h2 className="font-sans text-2xl font-black tracking-tight mb-8 text-white/50">The wrong fit.</h2>
              <ul className="space-y-4">
                {NOT_FOR.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-white/35 leading-relaxed">
                    <span className="mt-0.5 shrink-0 font-mono text-xs text-white/20">✕</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </MotionSection>

        {/* ── FAQ ────────────────────────────────────────────────── */}
        <MotionSection className="border-b border-white/[0.06] py-20 px-6">
          <div className="mx-auto max-w-2xl">
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase mb-3" style={{ color: btcOrange }}>FAQ</p>
            <h2 className="font-sans text-3xl font-black tracking-tight mb-12">Common questions.</h2>
            <div className="space-y-8">
              {FAQ.map((item) => (
                <div key={item.q} className="border-b border-white/[0.06] pb-8">
                  <h3 className="font-sans font-bold text-white mb-3 text-sm">{item.q}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </MotionSection>

        {/* ── FINAL CTA ──────────────────────────────────────────── */}
        <MotionSection className="py-28 px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase mb-6" style={{ color: btcOrange }}>
              5 spots · Dubai · September 2026
            </p>
            <h2 className="font-sans text-4xl md:text-5xl font-black tracking-tight mb-6">
              The gap between knowing<br />and not knowing has a price.
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-10 max-w-lg mx-auto">
              Book a 20-minute fit check call. No pitch, no pressure.
              We figure out if this is right for you. If it is, we book your seat.
              If it's not, you leave with clarity.
            </p>
            <a
              href={SITE.cal}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-10 py-5 font-sans font-bold tracking-wide transition-all text-base hover:opacity-90"
              style={{ background: btcOrange, color: '#080810' }}
            >
              Book Your Fit Check Call →
            </a>
            <p className="mt-6 font-mono text-[10px] text-white/25 tracking-widest uppercase">
              $5,000 · Full day · Luxury hotel day-use included · Dubai
            </p>
          </div>
        </MotionSection>

      </main>
    </PageMotion>
  )
}
