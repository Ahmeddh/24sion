import { NextResponse } from 'next/server'

/* ══════════════════════════════════════════════════════════
   GET /api/btc-price → { price, source, asOf }
   Visitors never hit the price providers directly. This route
   asks a provider at most once a minute and the answer is cached
   at the edge, so traffic on the site does not multiply API calls.
   Providers are public endpoints that need no key, tried in order.
══════════════════════════════════════════════════════════ */

export const revalidate = 60

type Provider = { name: string; url: string; pick: (json: any) => number }

const PROVIDERS: Provider[] = [
  {
    name: 'Kraken',
    url:  'https://api.kraken.com/0/public/Ticker?pair=XBTUSD',
    pick: j => Number(Object.values<any>(j?.result ?? {})[0]?.c?.[0]),
  },
  {
    name: 'Coinbase',
    url:  'https://api.coinbase.com/v2/prices/BTC-USD/spot',
    pick: j => Number(j?.data?.amount),
  },
  {
    name: 'CoinGecko',
    url:  'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd',
    pick: j => Number(j?.bitcoin?.usd),
  },
]

async function fromProvider(p: Provider): Promise<number> {
  const res = await fetch(p.url, {
    next:    { revalidate: 60 },
    headers: { accept: 'application/json' },
    signal:  AbortSignal.timeout(6000),
  })
  if (!res.ok) throw new Error(`${p.name} answered ${res.status}`)
  const price = p.pick(await res.json())
  if (!Number.isFinite(price) || price <= 0) throw new Error(`${p.name} sent no usable price`)
  return price
}

export async function GET() {
  for (const p of PROVIDERS) {
    try {
      const price = await fromProvider(p)
      return NextResponse.json(
        { price, source: p.name, asOf: new Date().toISOString() },
        { headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=600' } },
      )
    } catch (err) {
      console.error('[btc-price]', err)
    }
  }
  return NextResponse.json({ error: 'price_unavailable' }, { status: 503 })
}
