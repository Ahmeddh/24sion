'use client'

import { useEffect, useMemo, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { BUY_ZONES, SELL_TARGETS, EXTRA_BUCKETS, KEEP_PCT, INVALIDATION_PRICE, locatePrice, unassignedPct, zoneMid } from '@/lib/plan'
import { LeadMagnetButton } from '@/components/lead/LeadMagnet'
import { cn } from '@/lib/utils'

type PriceState =
  | { status: 'loading' }
  | { status: 'ready'; price: number; source: string; asOf: string }
  | { status: 'error' }

const usd = (n: number, digits = 0) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: digits })
const btc = (n: number) => `${n.toLocaleString('en-US', { maximumFractionDigits: 5 })} BTC`
const k   = (n: number) => `$${(n / 1000).toLocaleString('en-US', { maximumFractionDigits: 1 })}K`

export function DcaCalculator() {
  const t      = useTranslations('calculator')
  const locale = useLocale()
  const [amountRaw, setAmountRaw] = useState('10000')
  const [price, setPrice]         = useState<PriceState>({ status: 'loading' })

  useEffect(() => {
    let alive = true
    const load = () =>
      fetch('/api/btc-price')
        .then(r => (r.ok ? r.json() : Promise.reject()))
        .then(j => { if (alive) setPrice({ status: 'ready', price: j.price, source: j.source, asOf: j.asOf }) })
        .catch(() => { if (alive) setPrice(p => (p.status === 'ready' ? p : { status: 'error' })) })
    load()
    const id = setInterval(load, 60_000)
    return () => { alive = false; clearInterval(id) }
  }, [])

  const amount = Math.max(0, Number(amountRaw.replace(/[^\d.]/g, '')) || 0)

  const rows = useMemo(() => BUY_ZONES.map(z => {
    const dollars = z.pct === null ? null : (amount * z.pct) / 100
    return { zone: z, dollars, coins: dollars === null ? null : dollars / zoneMid(z) }
  }), [amount])

  const spent     = rows.reduce((s, r) => s + (r.dollars ?? 0), 0)
  const coins     = rows.reduce((s, r) => s + (r.coins ?? 0), 0)
  const avgCost   = coins > 0 ? spent / coins : 0
  const heldBack  = (amount * unassignedPct()) / 100
  const where     = price.status === 'ready' ? locatePrice(price.price) : null
  const hasSells  = SELL_TARGETS.some(s => s.pct !== null)

  return (
    <div className="flex flex-col gap-6">
      {/* Live price */}
      <div className="rounded-2xl border border-[rgba(255,255,255,0.09)] bg-[#0e0e1a] p-5 sm:p-6">
        <p className="text-[0.7rem] font-mono tracking-widest uppercase text-[#5a5a7a] mb-2">{t('priceLabel')}</p>
        {price.status === 'loading' && <p className="text-2xl font-bold text-[#5a5a7a]">{t('priceLoading')}</p>}
        {price.status === 'error'   && <p className="text-sm text-[#9898b8]">{t('priceError')}</p>}
        {price.status === 'ready'   && (
          <>
            <p className="text-3xl sm:text-4xl font-bold text-[#f0f0fa]" dir="ltr">{usd(price.price)}</p>
            <p className="mt-2 text-sm text-cyan">{t(`where.${where}`)}</p>
            <p className="mt-1 text-[0.7rem] text-[#5a5a7a] font-mono" dir="ltr">
              {t('priceSource', {
                source: price.source,
                time: new Date(price.asOf).toLocaleTimeString(locale === 'ar' ? 'ar-EG' : 'en-GB', { hour: '2-digit', minute: '2-digit' }),
              })}
            </p>
          </>
        )}
      </div>

      {/* Amount */}
      <div className="rounded-2xl border border-[rgba(255,255,255,0.09)] bg-[#0e0e1a] p-5 sm:p-6">
        <label htmlFor="dca-amount" className="block text-sm font-medium text-[#c8c8e0] mb-2">{t('amountLabel')}</label>
        <div className="relative max-w-xs" dir="ltr">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5a5a7a]">$</span>
          <input
            id="dca-amount" inputMode="decimal" value={amountRaw}
            onChange={e => setAmountRaw(e.target.value)}
            className="w-full bg-[#0a0a14] border border-[rgba(255,255,255,0.09)] text-[#f0f0fa] text-lg font-mono rounded-[10px] ps-8 pe-4 py-3 outline-none focus:border-cyan focus:ring-1 focus:ring-cyan/30 transition-all duration-200"
          />
        </div>
        <p className="mt-2 text-xs text-[#5a5a7a]">{t('amountHint')}</p>
      </div>

      {/* Buy ladder */}
      <div className="rounded-2xl border border-[rgba(255,255,255,0.09)] bg-[#0e0e1a] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-[0.7rem] font-mono tracking-wider uppercase text-[#5a5a7a] border-b border-[rgba(255,255,255,0.06)]">
                <th className="text-start font-normal px-5 py-3">{t('colZone')}</th>
                <th className="text-start font-normal px-3 py-3">{t('colRange')}</th>
                <th className="text-end font-normal px-3 py-3">{t('colShare')}</th>
                <th className="text-end font-normal px-3 py-3">{t('colBuy')}</th>
                <th className="text-end font-normal px-5 py-3">{t('colCoins')}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ zone, dollars, coins: c }) => (
                <tr
                  key={zone.id}
                  className={cn(
                    'border-b border-[rgba(255,255,255,0.06)]',
                    where === zone.id && 'bg-[rgba(238,148,39,0.08)]',
                  )}
                >
                  <td className="px-5 py-3.5 font-semibold text-[#f0f0fa]">{t(`zones.${zone.id}`)}</td>
                  <td className="px-3 py-3.5 text-[#9898b8] font-mono whitespace-nowrap" dir="ltr">{k(zone.low)} to {k(zone.high)}</td>
                  <td className="px-3 py-3.5 text-end text-[#9898b8] font-mono">{zone.pct === null ? t('soon') : `${zone.pct}%`}</td>
                  <td className="px-3 py-3.5 text-end text-[#f0f0fa] font-mono" dir="ltr">{dollars === null ? t('soon') : usd(dollars)}</td>
                  <td className="px-5 py-3.5 text-end text-cyan font-mono whitespace-nowrap" dir="ltr">{c === null ? t('soon') : btc(c)}</td>
                </tr>
              ))}
              {EXTRA_BUCKETS.map(b => (
                <tr key={b.id} className="border-b border-[rgba(255,255,255,0.06)]">
                  <td className="px-5 py-3.5 text-[#9898b8]" colSpan={2}>{t(`extras.${b.id}`)}</td>
                  <td className="px-3 py-3.5 text-end text-[#9898b8] font-mono">{b.pct}%</td>
                  <td className="px-3 py-3.5 text-end text-[#9898b8] font-mono" dir="ltr">{usd((amount * b.pct) / 100)}</td>
                  <td className="px-5 py-3.5" />
                </tr>
              ))}
              {unassignedPct() > 0 && (
                <tr className="border-b border-[rgba(255,255,255,0.06)]">
                  <td className="px-5 py-3.5 text-[#9898b8]" colSpan={2}>{t('heldBack')}</td>
                  <td className="px-3 py-3.5 text-end text-[#9898b8] font-mono">{unassignedPct()}%</td>
                  <td className="px-3 py-3.5 text-end text-[#9898b8] font-mono" dir="ltr">{usd(heldBack)}</td>
                  <td className="px-5 py-3.5" />
                </tr>
              )}
            </tbody>
            <tfoot>
              <tr>
                <td className="px-5 py-4 font-semibold text-[#f0f0fa]" colSpan={3}>{t('total')}</td>
                <td className="px-3 py-4 text-end font-semibold text-[#f0f0fa] font-mono" dir="ltr">{usd(spent)}</td>
                <td className="px-5 py-4 text-end font-semibold text-cyan font-mono whitespace-nowrap" dir="ltr">{btc(coins)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <p className="px-5 pb-4 text-xs text-[#5a5a7a] leading-relaxed">
          {t('ladderNote', { avg: avgCost > 0 ? usd(avgCost) : '$0', invalid: k(INVALIDATION_PRICE) })}
        </p>
      </div>

      {/* Sell ladder: only shown once the selling percentages are set in lib/plan.ts */}
      {hasSells && coins > 0 && (
        <div className="rounded-2xl border border-[rgba(255,255,255,0.09)] bg-[#0e0e1a] overflow-hidden">
          <p className="px-5 pt-5 text-sm font-semibold text-[#f0f0fa]">{t('sellTitle')}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm mt-2">
              <thead>
                <tr className="text-[0.7rem] font-mono tracking-wider uppercase text-[#5a5a7a] border-b border-[rgba(255,255,255,0.06)]">
                  <th className="text-start font-normal px-5 py-3">{t('colTarget')}</th>
                  <th className="text-end font-normal px-3 py-3">{t('colSellShare')}</th>
                  <th className="text-end font-normal px-3 py-3">{t('colSellCoins')}</th>
                  <th className="text-end font-normal px-5 py-3">{t('colSellValue')}</th>
                </tr>
              </thead>
              <tbody>
                {SELL_TARGETS.filter(s => s.pct !== null).map(s => {
                  const sold = (coins * (s.pct as number)) / 100
                  return (
                    <tr key={s.id} className="border-b border-[rgba(255,255,255,0.06)]">
                      <td className="px-5 py-3.5 text-[#f0f0fa] font-mono" dir="ltr">
                        {k(s.price)}{s.priceHigh ? ` to ${k(s.priceHigh)}` : ''}
                      </td>
                      <td className="px-3 py-3.5 text-end text-[#9898b8] font-mono">{s.pct}%</td>
                      <td className="px-3 py-3.5 text-end text-[#9898b8] font-mono whitespace-nowrap" dir="ltr">{btc(sold)}</td>
                      <td className="px-5 py-3.5 text-end text-[#f0f0fa] font-mono" dir="ltr">{usd(sold * s.price)}</td>
                    </tr>
                  )
                })}
                <tr>
                  <td className="px-5 py-3.5 text-[#f0f0fa]">{t('keepRow')}</td>
                  <td className="px-3 py-3.5 text-end text-[#9898b8] font-mono">{KEEP_PCT}%</td>
                  <td className="px-3 py-3.5 text-end text-cyan font-mono whitespace-nowrap" dir="ltr">{btc((coins * KEEP_PCT) / 100)}</td>
                  <td className="px-5 py-3.5" />
                </tr>
              </tbody>
            </table>
          </div>
          <p className="px-5 pb-4 pt-2 text-xs text-[#5a5a7a] leading-relaxed">{t('sellNote')}</p>
        </div>
      )}

      {/* Next step */}
      <div className="rounded-2xl border border-[rgba(238,148,39,0.2)] bg-[rgba(238,148,39,0.05)] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="font-semibold text-[#f0f0fa]">{t('ctaTitle')}</p>
          <p className="text-sm text-[#9898b8] mt-1">{t('ctaSub')}</p>
        </div>
        <LeadMagnetButton source="calculator" size="lg" />
      </div>

      <p className="text-xs text-[#5a5a7a] leading-relaxed">{t('disclaimer')}</p>
    </div>
  )
}
