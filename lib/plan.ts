/* ═══════════════════════════════════════════════════════════════
   The 200-Week Cycle Plan: single source of truth.
   The home page, the lead popup and the DCA calculator all read
   from here. Change a number once and every page follows.
   Prices are USD. Percentages are share of the money (buys) or
   share of the Bitcoin held (sells). `null` means "not decided yet"
   and the UI hides that number instead of inventing one.
═══════════════════════════════════════════════════════════════ */

export type BuyZone = {
  id:    'zone1' | 'golden' | 'diamond'
  low:   number
  high:  number
  /** Share of the total budget bought in this zone, 0 to 100 */
  pct:   number | null
}

export type SellTarget = {
  id:    't1' | 't2' | 't3' | 't4' | 't5'
  price: number
  /** Upper edge when the target is a range */
  priceHigh?: number
  /** Share of the Bitcoin held that is sold at this target, 0 to 100 */
  pct:   number | null
}

export const BUY_ZONES: BuyZone[] = [
  { id: 'zone1',   low: 55_000, high: 60_000, pct: 30 },
  { id: 'golden',  low: 43_700, high: 48_700, pct: 30 },
  { id: 'diamond', low: 35_000, high: 38_000, pct: 20 },
]

export const SELL_TARGETS: SellTarget[] = [
  { id: 't1', price: 106_000, pct: 10 },
  { id: 't2', price: 125_000, pct: 0 },
  { id: 't3', price: 173_000, pct: 30 },
  { id: 't4', price: 211_000, pct: 30 },
  { id: 't5', price: 242_000, priceHigh: 250_000, pct: 10 },
]

/** A weekly close below this price means the plan is wrong and gets rethought */
export const INVALIDATION_PRICE = 31_000

export const PLAN_ARTICLE_SLUG = 'bitcoin-200-week-ma-dca-plan'

/** Share of the Bitcoin that is never sold, whatever the price */
export const KEEP_PCT = 20

/* Money that sits outside the three zones.
   lowball: resting bids far below the market, filled only in a flash crash.
   side:    Ahmed's own altcoin trading account. Not part of the plan and not
            something the site recommends; shown so the split adds up to 100. */
export type ExtraBucket = { id: 'lowball' | 'side'; pct: number }

export const EXTRA_BUCKETS: ExtraBucket[] = [
  { id: 'lowball', pct: 10 },
  { id: 'side',    pct: 10 },
]

/** Share of the budget not assigned anywhere yet */
export function unassignedPct(): number {
  const used = BUY_ZONES.reduce((sum, z) => sum + (z.pct ?? 0), 0)
             + EXTRA_BUCKETS.reduce((sum, b) => sum + b.pct, 0)
  return Math.max(0, 100 - used)
}

export function zoneMid(z: BuyZone): number {
  return (z.low + z.high) / 2
}

/** Which zone a price sits in, or where it sits relative to the ladder */
export function locatePrice(price: number): BuyZone['id'] | 'above' | 'between' | 'below' | 'invalid' {
  if (price < INVALIDATION_PRICE) return 'invalid'
  for (const z of BUY_ZONES) if (price >= z.low && price <= z.high) return z.id
  const top    = Math.max(...BUY_ZONES.map(z => z.high))
  const bottom = Math.min(...BUY_ZONES.map(z => z.low))
  if (price > top) return 'above'
  if (price < bottom) return 'below'
  return 'between'
}
