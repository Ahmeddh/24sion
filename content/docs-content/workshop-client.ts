export const workshopClientHtml = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Bitcoin Wealth Workshop, Dubai, December 2026</title>
<style>
:root {
  --bg: #09090e;
  --surface: #111118;
  --card: #15151f;
  --border: rgba(255,255,255,0.07);
  --orange: #f7931a;
  --orange-soft: rgba(247,147,26,0.1);
  --orange-border: rgba(247,147,26,0.28);
  --text: #ffffff;
  --muted: rgba(255,255,255,0.55);
  --dim: rgba(255,255,255,0.28);
  --green: #10b981;
  --red: #ef4444;
  --chart-bg: #0c0c14;
}
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

/* ── FOLD LAYOUT ── */
.fold {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 72px 24px;
  border-bottom: 1px solid var(--border);
  position: relative;
  overflow: hidden;
}
.fold.compact { min-height: auto; padding: 64px 24px; }
.inner { max-width: 780px; margin: 0 auto; width: 100%; }

/* ── TYPE ── */
.eyebrow {
  font-family: 'SF Mono', monospace;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--orange);
  display: block;
  margin-bottom: 14px;
}
h1 {
  font-size: clamp(34px, 6vw, 66px);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.03;
  margin-bottom: 18px;
}
h2 {
  font-size: clamp(22px, 4vw, 38px);
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.1;
  margin-bottom: 12px;
}
h3 { font-size: 15px; font-weight: 700; margin-bottom: 6px; }
p { color: var(--muted); line-height: 1.75; font-size: 15px; margin-bottom: 12px; }
p:last-child { margin-bottom: 0; }
strong { color: var(--text); font-weight: 700; }
.accent { color: var(--orange); }

/* ── FOLD 1: HERO ── */
.hero-glow {
  position: absolute;
  width: 700px; height: 700px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(247,147,26,0.11) 0%, transparent 65%);
  top: -250px; right: -150px;
  pointer-events: none;
}
.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--orange-soft);
  border: 1px solid var(--orange-border);
  border-radius: 100px;
  padding: 7px 15px;
  font-size: 12px;
  font-weight: 600;
  color: var(--orange);
  margin-bottom: 24px;
}
.badge-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--green); flex-shrink: 0; animation: pulse 2s ease-in-out infinite; }
@keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }

/* funnel */
.funnel {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 28px 0;
  flex-wrap: wrap;
}
.f-step {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 10px;
  border: 1px solid;
  font-size: 13px;
  font-weight: 600;
}
.f-step.done { border-color: rgba(16,185,129,0.3); background: rgba(16,185,129,0.07); color: var(--green); }
.f-step.here { border-color: var(--orange-border); background: var(--orange-soft); color: var(--orange); }
.f-check { font-size: 12px; }
.f-arrow { color: var(--dim); font-size: 14px; flex-shrink: 0; }

/* stats strip */
.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
  margin-top: 28px;
}
.stat { background: var(--card); padding: 22px 18px; text-align: center; }
.stat-v {
  font-family: 'SF Mono', monospace;
  font-size: 28px;
  font-weight: 800;
  color: var(--orange);
  display: block;
  line-height: 1;
  margin-bottom: 6px;
}
.stat-l { font-size: 11px; color: var(--dim); line-height: 1.4; }

/* ── FOLD 2: GAP CHART ── */
.chart-wrap {
  background: var(--chart-bg);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  margin: 24px 0;
  position: relative;
}
.chart-header {
  padding: 18px 20px 12px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.chart-legend {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: var(--dim);
  font-weight: 600;
}
.legend-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
canvas { display: block; width: 100%; }

/* result cards */
.result-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 16px;
}
.r-card {
  border-radius: 12px;
  padding: 18px 20px;
  border: 1px solid;
}
.r-card.bad { border-color: rgba(239,68,68,0.2); background: rgba(239,68,68,0.05); }
.r-card.good { border-color: var(--orange-border); background: var(--orange-soft); }
.r-label { font-size: 10px; font-family: monospace; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 700; margin-bottom: 8px; display: block; }
.r-card.bad .r-label { color: var(--red); }
.r-card.good .r-label { color: var(--orange); }
.r-val { font-size: 26px; font-weight: 800; font-family: monospace; margin-bottom: 4px; display: block; }
.r-card.bad .r-val { color: var(--red); }
.r-card.good .r-val { color: var(--orange); }
.r-sub { font-size: 12px; color: var(--dim); }

/* ── FOLD 3: DCA CHART ── */
.signal-box {
  background: var(--card);
  border: 1px solid var(--border);
  border-left: 3px solid var(--orange);
  border-radius: 0 12px 12px 0;
  padding: 14px 18px;
  margin-bottom: 20px;
}
.signal-box p { font-size: 13px; margin: 0; }

.dca-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 16px;
}
.dca-stat {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 16px;
  text-align: center;
}
.dca-stat.highlight { border-color: var(--orange-border); background: var(--orange-soft); }
.dca-v {
  font-family: monospace;
  font-size: 20px;
  font-weight: 800;
  color: var(--orange);
  display: block;
  margin-bottom: 4px;
}
.dca-l { font-size: 11px; color: var(--dim); }

/* ── FOLD 4: WORKSHOP ── */
.guide-bar {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 22px;
  margin-bottom: 24px;
}

.steps-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 24px;
}
.step-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 18px;
  position: relative;
  overflow: hidden;
}
.step-n {
  font-family: monospace;
  font-size: 10px;
  color: var(--orange);
  font-weight: 700;
  letter-spacing: 0.1em;
  margin-bottom: 8px;
  display: block;
}
.step-card h4 { font-size: 13px; font-weight: 700; margin-bottom: 5px; }
.step-card p { font-size: 12px; margin: 0; }

.outcomes {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
}
.outcome {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 11px;
  padding: 16px;
  display: flex;
  gap: 12px;
  align-items: flex-start;
}
.outcome-n {
  font-family: monospace;
  font-size: 10px;
  color: var(--orange);
  font-weight: 700;
  flex-shrink: 0;
  padding-top: 2px;
}
.outcome h4 { font-size: 13px; font-weight: 700; margin-bottom: 3px; }
.outcome p { font-size: 12px; margin: 0; }

/* ── FOLD 5: CLOSE ── */
.guarantee-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 24px;
}
.g-card {
  border: 1px solid var(--orange-border);
  background: var(--orange-soft);
  border-radius: 14px;
  padding: 20px;
}
.g-card h4 { font-size: 14px; font-weight: 800; margin-bottom: 7px; }
.g-card p { font-size: 12px; }

.logistics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-bottom: 20px;
}
.log-item {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 11px;
  padding: 16px;
}
.log-l { font-family: monospace; font-size: 9px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--dim); display: block; margin-bottom: 6px; font-weight: 600; }
.log-v { font-size: 14px; font-weight: 700; }

.bring-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-bottom: 28px;
}
.bring-item {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 11px;
  padding: 16px 12px;
  text-align: center;
}
.bring-icon { font-size: 22px; margin-bottom: 8px; display: block; }
.bring-item p { font-size: 11px; color: var(--dim); margin: 0; line-height: 1.4; }

.cta-block {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 40px 28px;
  text-align: center;
}
.cta-block h3 { font-size: 22px; font-weight: 800; margin-bottom: 8px; }
.cta-block p { font-size: 14px; max-width: 420px; margin: 0 auto 20px; }
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--orange);
  color: #070710;
  font-weight: 800;
  font-size: 15px;
  padding: 16px 36px;
  border-radius: 12px;
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: opacity 0.15s;
}
.btn:hover { opacity: 0.88; }
.cta-note { font-size: 11px; color: var(--dim); margin-top: 12px; font-family: monospace; letter-spacing: 0.1em; text-transform: uppercase; }

/* ── RESPONSIVE / MOBILE ── */
@media (max-width: 640px) {
  /* Fold padding: shorter on mobile so content is reachable */
  .fold { padding: 48px 18px; min-height: auto; }
  .fold.compact { padding: 44px 18px; }

  /* Type scale: tighten headings on small screens */
  h1 { font-size: clamp(28px, 8vw, 48px); margin-bottom: 14px; }
  h2 { font-size: clamp(22px, 6vw, 34px); }

  /* Hero funnel: vertical stack */
  .funnel { flex-direction: column; align-items: flex-start; gap: 6px; margin: 22px 0; }
  .f-step { width: 100%; font-size: 14px; padding: 12px 16px; }
  .f-arrow { transform: rotate(90deg); margin-left: 16px; }

  /* Stats strip: single column, bigger touch area */
  .stats { grid-template-columns: 1fr; }
  .stat { padding: 20px 18px; }
  .stat-v { font-size: 32px; }

  /* Charts: reduce height so they don't dominate narrow screens */
  canvas[id="gapChart"]             { height: 200px !important; }
  canvas[id="purchasingPowerChart"] { height: 220px !important; }
  canvas[id="dcaChart"]             { height: 180px !important; }
  canvas[id="dcaCompare"]           { height: 130px !important; }

  /* Result cards: single column */
  .result-cards { grid-template-columns: 1fr; }
  .r-val { font-size: 22px; }

  /* DCA stats: single column */
  .dca-stats { grid-template-columns: 1fr; }
  .dca-v { font-size: 22px; }

  /* Signal box */
  .signal-box { padding: 12px 14px; }
  .signal-box p { font-size: 14px; }

  /* Guide bar: tighter padding */
  .guide-bar { padding: 16px; }

  /* Step cards: single column */
  .steps-row { grid-template-columns: 1fr; }
  .step-card { padding: 16px; }

  /* Outcomes: single column */
  .outcomes { grid-template-columns: 1fr; }
  .outcome { padding: 14px; }

  /* Guarantee cards: single column */
  .guarantee-cards { grid-template-columns: 1fr; }

  /* Logistics: 2 columns */
  .logistics { grid-template-columns: repeat(2, 1fr); }

  /* Bring row: 2 columns */
  .bring-row { grid-template-columns: repeat(2, 1fr); }
  .bring-item { padding: 14px 10px; }
  .bring-icon { font-size: 26px; }

  /* CTA block: full-width button, smaller padding */
  .cta-block { padding: 28px 18px; }
  .cta-block h3 { font-size: 20px; }
  .btn { width: 100%; justify-content: center; padding: 18px 24px; font-size: 16px; }
  .cta-note { font-size: 10px; }

  /* Integration pills: min touch target height */
  .guide-bar a[href*="strike"],
  .guide-bar a[href*="coinos"],
  .guide-bar a[href*="ark"],
  .guide-bar a[href*="blue"] {
    padding: 9px 14px;
    min-height: 44px;
  }

  /* Chart header: stack label and legend */
  .chart-header { flex-direction: column; gap: 8px; padding: 14px 14px 10px; }
  .chart-header span { font-size: 11px !important; }
  .legend-item { font-size: 12px; }
}
</style>
</head>
<body>

<!-- ═══════════════════════════════════════════════════
     FOLD 1: HERO
════════════════════════════════════════════════════ -->
<div class="fold">
  <div class="hero-glow"></div>
  <div class="inner">
    <div class="badge"><span class="badge-dot"></span>You qualified. December 2026, Dubai</div>
    <span class="eyebrow">Bitcoin Wealth Workshop</span>
    <h1>Your savings are already moving.<br><span class="accent">The question is which direction.</span></h1>
    <p>You passed the fit call. You understand Bitcoin. This is the day we put your actual setup in place, test it live in the room, and make sure it works before you need it.</p>

    <div class="funnel">
      <div class="f-step done"><span class="f-check">&#10003;</span>Fit call</div>
      <div class="f-arrow">&#8594;</div>
      <div class="f-step done"><span class="f-check">&#10003;</span>Bitcoin basics</div>
      <div class="f-arrow">&#8594;</div>
      <div class="f-step here">&#9679; Full-day workshop</div>
    </div>

    <div class="stats">
      <div class="stat"><span class="stat-v">$2k</span><span class="stat-l">Per seat. AED or BTC accepted.</span></div>
      <div class="stat"><span class="stat-v">15-25</span><span class="stat-l">People. All pre-qualified.</span></div>
      <div class="stat"><span class="stat-v">Dubai</span><span class="stat-l">December 2026. Luxury hotel.</span></div>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════
     FOLD 2: THE GAP - SDG vs BTC
════════════════════════════════════════════════════ -->
<div class="fold compact">
  <div class="inner">
    <span class="eyebrow">The contrast</span>
    <h2>Same 8 years.<br>Two completely different outcomes.</h2>
    <p>If you had invested $1,000 in 2018, one in Sudanese pounds and one in Bitcoin, here is what each is worth today.</p>

    <div class="chart-wrap">
      <div class="chart-header">
        <span style="font-size:12px;font-weight:700;color:var(--dim)">Value of $1,000 invested in 2018 &middot; linear scale &middot; true gap</span>
        <div class="chart-legend">
          <div class="legend-item"><span class="legend-dot" style="background:#f7931a"></span>Bitcoin (BTC)</div>
          <div class="legend-item"><span class="legend-dot" style="background:#ef4444"></span>Sudanese Pound (SDG)</div>
        </div>
      </div>
      <canvas id="gapChart" height="280"></canvas>
    </div>

    <div class="result-cards">
      <div class="r-card bad">
        <span class="r-label">$1,000 in SDG</span>
        <span class="r-val">$4.33</span>
        <div class="r-sub">SDG lost 99.5% of its USD purchasing power. 26 pounds per dollar became 6,000.</div>
      </div>
      <div class="r-card good">
        <span class="r-label">$1,000 in BTC</span>
        <span class="r-val">$15,385</span>
        <div class="r-sub">0.1538 BTC bought at $6,500 in August 2018 is worth over $15k today.</div>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════
     FOLD 2b: THE DOLLAR'S SHRINKING POWER
════════════════════════════════════════════════════ -->
<div class="fold compact">
  <div class="inner">
    <span class="eyebrow">The hidden erosion</span>
    <h2>What really happened<br>to your $1,000 since 2018.</h2>
    <p>Forget the SDG. Even if you kept your money in US dollars — the world's "safe" currency — it was quietly losing ground. The government admits part of it. Your grocery bill tells the rest.</p>

    <div class="chart-wrap">
      <div class="chart-header">
        <span style="font-size:12px;font-weight:700;color:var(--dim)">$1,000 held since 2018 &middot; four outcomes &middot; BTC avg 2018 price: $7,500</span>
        <div class="chart-legend">
          <div class="legend-item"><span class="legend-dot" style="background:#f7931a"></span>Bitcoin</div>
          <div class="legend-item"><span class="legend-dot" style="background:#ef4444"></span>Real costs</div>
          <div class="legend-item"><span class="legend-dot" style="background:#f59e0b"></span>CPI break-even</div>
          <div class="legend-item"><span class="legend-dot" style="background:rgba(255,255,255,0.3)"></span>Cash</div>
        </div>
      </div>
      <canvas id="purchasingPowerChart" height="280"></canvas>
    </div>

    <div class="result-cards">
      <div class="r-card bad" style="border-color:rgba(255,255,255,0.1);background:rgba(255,255,255,0.03)">
        <span class="r-label" style="color:rgba(255,255,255,0.4)">Cash in bank</span>
        <span class="r-val" style="color:rgba(255,255,255,0.35);font-size:22px">$1,000</span>
        <div class="r-sub">Same number. But it buys $293 less than it did in 2018. Holding cash felt safe. It wasn't.</div>
      </div>
      <div class="r-card good">
        <span class="r-label">Bitcoin (0.133 BTC)</span>
        <span class="r-val">~$12,000</span>
        <div class="r-sub">Average 2018 BTC price was $7,500. $1,000 bought 0.133 BTC. Same position is now worth ~$12,000. 12× your money.</div>
      </div>
    </div>
    <div style="background:var(--card);border:1px solid var(--border);border-radius:12px;padding:16px 18px;margin-top:10px;display:grid;grid-template-columns:1fr 1fr;gap:14px">
      <div>
        <div style="font-family:monospace;font-size:9px;letter-spacing:0.12em;text-transform:uppercase;color:#f59e0b;font-weight:700;margin-bottom:5px">CPI break-even</div>
        <div style="font-size:18px;font-weight:800;color:#f59e0b;font-family:monospace">$1,293</div>
        <div style="font-size:12px;color:var(--dim);margin-top:4px">The minimum your savings needed to grow just to stay even. Official government number. Most savings accounts didn't reach it.</div>
      </div>
      <div>
        <div style="font-family:monospace;font-size:9px;letter-spacing:0.12em;text-transform:uppercase;color:#ef4444;font-weight:700;margin-bottom:5px">Real costs (groceries + rent)</div>
        <div style="font-size:18px;font-weight:800;color:#ef4444;font-family:monospace">$1,450</div>
        <div style="font-size:12px;color:var(--dim);margin-top:4px">What you actually needed to maintain your lifestyle. Food and rent rose 40–50%, not the 29% CPI suggests.</div>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════
     FOLD 3: DCA SIGNAL - 200 WMA
════════════════════════════════════════════════════ -->
<div class="fold compact">
  <div class="inner">
    <span class="eyebrow">The signal</span>
    <h2>What happens when you buy<br>below the 200 Weekly Average.</h2>

    <div class="signal-box">
      <p>June 13, 2022 was the day Bitcoin crashed below $20,000 for the first time since 2020. Cascading liquidations across crypto lending platforms triggered the drop in hours. If you started buying $1,000 every month from that exact day and stopped on October 13, 2023 (17 months total, no more buys after that), this is what happened.</p>
    </div>

    <div class="chart-wrap">
      <div class="chart-header">
        <span style="font-size:12px;font-weight:700;color:var(--dim)">$1,000/month, Jun 13 2022 to Oct 13 2023 (17 buys, then hold)</span>
        <div class="chart-legend">
          <div class="legend-item"><span class="legend-dot" style="background:#f7931a"></span>Portfolio value</div>
          <div class="legend-item"><span class="legend-dot" style="background:rgba(255,255,255,0.25)"></span>Total invested</div>
        </div>
      </div>
      <canvas id="dcaChart" height="260"></canvas>
    </div>

    <div class="dca-stats">
      <div class="dca-stat">
        <span class="dca-v">$17,000</span>
        <div class="dca-l">Total invested (17 monthly buys)</div>
      </div>
      <div class="dca-stat">
        <span class="dca-v">0.754 BTC</span>
        <div class="dca-l">Accumulated, then held</div>
      </div>
      <div class="dca-stat highlight">
        <span class="dca-v">$75,374</span>
        <div class="dca-l">Value today at $100k/BTC (+343%)</div>
      </div>
    </div>
    <p style="font-size:12px;color:var(--dim);margin-top:12px">Historical BTC prices used (approximate monthly closes). Past performance does not guarantee future results. This illustrates the DCA methodology, not a price prediction.</p>

    <div style="margin-top:40px">
      <h3 style="font-size:17px;margin-bottom:10px">Does buying more often help?</h3>
      <p>Not really. Three people invested the same $17,000 over the same 17 months. One bought monthly. One bought every week. One bought every day. The chart below shows what each ended up with. The differences are so small they barely register.</p>
      <p>What actually matters is not the frequency. It is whether you start at all. The person who waited to "find the right time" is still waiting.</p>
      <div class="chart-wrap" style="margin-top:16px">
        <div class="chart-header">
          <span style="font-size:12px;font-weight:700;color:var(--dim)">Same $17,000 &middot; same 17-month window &middot; three frequencies</span>
          <div class="chart-legend">
            <div class="legend-item"><span class="legend-dot" style="background:#f7931a"></span>Monthly</div>
            <div class="legend-item"><span class="legend-dot" style="background:#fb9e41"></span>Weekly</div>
            <div class="legend-item"><span class="legend-dot" style="background:#fdc782"></span>Daily</div>
          </div>
        </div>
        <canvas id="dcaCompare" height="160"></canvas>
      </div>
      <div style="background:var(--card);border:1px solid var(--border);border-left:3px solid var(--orange);border-radius:0 12px 12px 0;padding:14px 18px;margin-top:16px">
        <p style="font-size:13px;margin:0;color:var(--muted)"><strong style="color:var(--text)">Time preference</strong> is the idea that some people value the present more than the future. High time preference means spending now. Low time preference means deferring gratification for a bigger payoff later. Bitcoin is one of the few savings tools that directly rewards low time preference. The longer you hold it, the better the odds. It has never produced a loss over any 4-year period in its history.</p>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════
     FOLD 4: THE WORKSHOP
════════════════════════════════════════════════════ -->
<div class="fold compact">
  <div class="inner">
    <span class="eyebrow">The workshop</span>
    <h2>One day. Built and tested.<br>Not another lecture.</h2>

    <div class="guide-bar">
      <h3 style="margin-bottom:8px">Who's running this</h3>
      <p style="font-size:14px;margin-bottom:16px">Ahmed received his first Bitcoin in 2018 as freelance payment. He lost a wallet in 2021 after accidentally publishing a private key to GitHub. When the war started in Sudan in April 2023, he moved <strong>$500,000 in Bitcoin and stablecoins</strong> for 500 people he knew personally, at a 1-2% fee while Western Union was charging 5%. That experience is what this workshop is built from. Not theory.</p>

      <!-- Authority logo badges — icon-only, no text labels -->
      <div style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:16px;align-items:center">

        <!-- Bitcoin -->
        <a href="https://bitcoin.org" target="_blank" rel="noopener" title="Bitcoin" style="display:block;border-radius:50%;text-decoration:none;transition:opacity 0.15s;flex-shrink:0" onmouseover="this.style.opacity=0.75" onmouseout="this.style.opacity=1">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
            <circle cx="22" cy="22" r="22" fill="#F7931A"/>
            <path d="M30.8 19.9c.4-2.9-1.8-4.5-4.9-5.5l1-4-2.4-.6-1 3.9c-.6-.2-1.3-.3-1.9-.4l1-3.9-2.4-.6-1 4c-.5-.1-1-.2-1.4-.3l-3.4-.8-.7 2.6s1.8.4 1.7.4c1 .2 1.2 1 1.1 1.5l-1.1 4.6h.2l-1.7 6.6c-.1.3-.4.8-1.1.6.0.0-1.7-.4-1.7-.4l-1.2 2.7 3.2.8c.6.1 1.1.3 1.7.4l-1 4.1 2.4.6 1-4c.6.2 1.3.3 1.9.5l-1 3.9 2.4.6 1-4c4 .8 7.1.4 8.3-3.2.9-2.9-.1-4.6-2.1-5.7 1.5-.4 2.6-1.4 2.9-3.5zm-5 7.1c-.7 2.8-5.5 1.4-7 1l1.2-5c1.5.4 6.5 1.1 5.8 4zm.7-7.1c-.6 2.5-4.7 1.3-6 1l1.1-4.5c1.4.3 5.5.9 4.9 3.5z" fill="white"/>
          </svg>
        </a>

        <!-- Bitcoin21 AR — lightning bolt logo + YouTube badge overlay -->
        <a href="https://www.youtube.com/@Bitcoin21_ar" target="_blank" rel="noopener" title="Bitcoin21 AR on YouTube" style="position:relative;display:block;text-decoration:none;transition:opacity 0.15s;flex-shrink:0" onmouseover="this.style.opacity=0.75" onmouseout="this.style.opacity=1">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
            <rect width="44" height="44" rx="10" fill="#2a2a2a"/>
            <!-- Lightning bolt: diagonal from top-right to bottom-left -->
            <!-- Upper blade -->
            <path d="M34 5L36 7L24 18H28L15 39L13 37L25.5 26H21.5Z" fill="white"/>
            <!-- Central nameplate (distinctive B21 feature) -->
            <rect x="18.5" y="16" width="11" height="8" rx="1" fill="white"/>
            <text x="24" y="22.5" font-size="4.5" fill="#1a1a1a" font-weight="900" font-family="Arial Black, Arial, sans-serif" text-anchor="middle" letter-spacing="-0.3">B21</text>
          </svg>
          <!-- YouTube corner badge -->
          <span style="position:absolute;bottom:-3px;right:-3px;background:#FF0000;border-radius:4px;width:16px;height:11px;display:flex;align-items:center;justify-content:center;border:1.5px solid #09090e">
            <svg width="8" height="8" viewBox="0 0 8 8"><path d="M2.5 1.5L6.5 4L2.5 6.5V1.5Z" fill="white"/></svg>
          </span>
        </a>

        <!-- CypherBox — actual logo paths from FCDeCFu2_400x400.svg, scaled to 44×44 -->
        <a href="https://cypherbox.io" target="_blank" rel="noopener" title="CypherBox Wallet — CTO & co-creator" style="display:block;border-radius:10px;text-decoration:none;transition:opacity 0.15s;flex-shrink:0" onmouseover="this.style.opacity=0.75" onmouseout="this.style.opacity=1">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
            <defs>
              <radialGradient id="cbg" cx="50%" cy="38%" r="62%">
                <stop offset="0%" stop-color="#252525"/>
                <stop offset="100%" stop-color="#060606"/>
              </radialGradient>
              <mask id="cm">
                <rect width="44" height="44" fill="white"/>
                <!-- Internal dark details (brim fill + goggle holes) punched into white silhouette -->
                <!-- Transform maps original path coords → 44px icon:
                     translate(2,8) scale(0.121) translate(-50,-104) translate(0,400) scale(0.1,-0.1) -->
                <g transform="translate(2,8) scale(0.121) translate(-50,-104) translate(0,400) scale(0.1,-0.1)" fill="black">
                  <path d="M1342 2909 c-289 -39 -562 -178 -625 -318 -28 -63 -17 -115 38 -190 39 -53 80 -89 90 -79 2 2 -2 40 -10 83 -8 44 -14 87 -15 96 0 9 41 -25 93 -75 93 -93 222 -196 244 -196 8 0 10 12 7 33 -17 125 -34 281 -34 308 l0 32 53 -49 c28 -27 107 -89 175 -138 l122 -88 0 -118 c0 -104 2 -119 18 -124 9 -3 82 -13 162 -22 214 -25 753 -26 945 -1 180 24 296 44 367 63 l56 16 4 107 4 106 -41 51 c-183 229 -533 394 -1018 481 -115 20 -182 26 -352 28 -115 2 -243 -1 -283 -6z"/>
                  <path d="M2900 1864 c-52 -19 -142 -48 -200 -66 -58 -17 -109 -35 -114 -39 -16 -14 13 -144 42 -188 16 -25 44 -50 68 -61 149 -73 309 78 322 303 4 70 2 87 -9 86 -8 -1 -57 -16 -109 -35z"/>
                  <path d="M1490 1718 c0 -218 120 -368 296 -368 84 0 145 23 203 78 65 61 102 141 104 225 l2 62 -75 8 c-173 18 -496 58 -512 63 -16 5 -18 -3 -18 -68z"/>
                </g>
              </mask>
            </defs>
            <rect width="44" height="44" rx="9" fill="url(#cbg)"/>
            <!-- White logo silhouette using actual outer path, internal details masked out above -->
            <g mask="url(#cm)">
              <g transform="translate(2,8) scale(0.121) translate(-50,-104) translate(0,400) scale(0.1,-0.1)" fill="white">
                <path d="M1975 2956 c355 -60 621 -155 845 -301 41 -27 122 -96 179 -153 l103 -103 26 23 c14 13 40 39 59 58 l34 35 -6 -105 c-3 -58 -8 -115 -11 -127 -2 -13 -1 -23 4 -23 11 0 62 55 112 123 24 32 44 56 45 55 2 -2 -5 -75 -16 -163 -10 -88 -18 -168 -19 -178 0 -10 -24 -44 -54 -75 -55 -57 -55 -58 -62 -137 l-6 -80 44 43 c24 23 46 40 49 37 3 -2 -1 -55 -8 -117 l-14 -112 -49 -52 c-28 -29 -50 -58 -50 -64 0 -6 -16 -36 -35 -66 -110 -171 -267 -265 -445 -265 -42 0 -94 7 -119 15 -80 29 -157 100 -202 189 -11 20 -23 37 -27 37 -4 0 -13 -15 -20 -32 -20 -55 -91 -157 -151 -215 -102 -100 -233 -160 -399 -184 -107 -15 -209 -5 -304 31 -86 32 -197 109 -260 181 -47 53 -70 71 -132 98 -42 18 -76 36 -76 40 0 3 -11 69 -25 145 -27 151 -29 176 -17 176 5 0 46 -20 92 -45 46 -25 87 -45 92 -45 12 0 9 34 -10 135 l-18 90 -98 61 c-53 34 -101 65 -106 70 -5 5 -18 63 -29 129 -19 108 -23 122 -48 140 -16 10 -56 46 -91 79 -79 75 -117 149 -116 226 0 74 25 122 99 195 133 130 367 225 625 255 138 16 449 4 615 -24z"/>
              </g>
            </g>
          </svg>
        </a>
      </div>

      <div style="border-top:1px solid var(--border);padding-top:12px">
        <div style="font-size:9px;font-family:monospace;letter-spacing:0.12em;text-transform:uppercase;color:var(--dim);margin-bottom:10px;font-weight:600">CypherBox integrates</div>
        <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center">

          <!-- Strike — actual mark paths from Strike.svg (M174.2 lightning bolt + M211.3 puck) -->
          <a href="https://strike.me/en/" target="_blank" rel="noopener" title="Strike" style="display:flex;align-items:center;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);border-radius:8px;padding:6px 12px;text-decoration:none;transition:opacity 0.15s;gap:7px" onmouseover="this.style.opacity=0.7" onmouseout="this.style.opacity=1">
            <!-- mark bounding box in original SVG: x:95-285, y:200-320 → scaled to 20×14 -->
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
              <g transform="translate(0,0.7) scale(0.105) translate(-95,-200)" fill="white">
                <path d="M174.2,202.6l76.1,27.7c0.3,0.1,0.6,0.2,0.9,0.4c0.7,0.2,1.4,0.4,2,0.7c24.2,8.8,36.8,35.4,28.1,59.3c-8.7,23.9-35.4,36.2-59.7,27.4l-79-28.7c-4.8-1.8-7.4-7.1-5.6-11.9c1.7-4.8,7.1-7.2,11.9-5.5l43.9,16c-2-6.5-2.6-13.4-1.6-20.2l-90.1-32.8c-4.8-1.8-7.4-7.1-5.6-11.9c1.7-4.8,7.1-7.2,11.9-5.5l90.1,32.8c3.6-5.8,8.4-10.8,14.2-14.5l-43.9-16c-4.8-1.8-7.4-7.1-5.6-11.9C164.1,203.3,169.4,200.8,174.2,202.6z"/>
                <path d="M211.3,265.2c-5.3,14.4,2.3,30.4,16.9,35.7c14.6,5.3,30.6-2.1,35.9-16.5c5.2-14.4-2.3-30.4-16.9-35.7C232.7,243.3,216.6,250.7,211.3,265.2z"/>
              </g>
            </svg>
            <span style="font-size:13px;font-weight:700;color:white;font-family:-apple-system,sans-serif;letter-spacing:-0.3px">strike</span>
          </a>

          <!-- Coinos -->
          <a href="https://coinos.io/" target="_blank" rel="noopener" title="Coinos" style="display:flex;align-items:center;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);border-radius:8px;padding:6px 12px;text-decoration:none;transition:opacity 0.15s;gap:7px" onmouseover="this.style.opacity=0.7" onmouseout="this.style.opacity=1">
            <!-- Coinos icon: two concentric rings + half-filled inner -->
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="8.5" stroke="white" stroke-width="1.3" fill="none"/>
              <circle cx="9" cy="9" r="5.5" stroke="white" stroke-width="1.3" fill="none"/>
              <!-- left half filled -->
              <path d="M9 3.5 A5.5 5.5 0 0 0 9 14.5 Z" fill="white"/>
              <!-- inner right circle -->
              <circle cx="11" cy="9" r="2" stroke="white" stroke-width="1" fill="none"/>
            </svg>
            <span style="font-size:13px;font-weight:700;color:white;font-family:-apple-system,sans-serif;letter-spacing:-0.3px">coinos</span>
          </a>

          <!-- Ark Vaults -->
          <a href="https://ark-protocol.org" target="_blank" rel="noopener" title="Ark Vaults" style="display:flex;align-items:center;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);border-radius:8px;padding:6px 12px;text-decoration:none;transition:opacity 0.15s;gap:6px" onmouseover="this.style.opacity=0.7" onmouseout="this.style.opacity=1">
            <!-- Ark: stylised ark/shield shape -->
            <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
              <path d="M7 1L13 4V10C13 13.5 10 16.5 7 17.5C4 16.5 1 13.5 1 10V4L7 1Z" stroke="white" stroke-width="1.4" fill="none" stroke-linejoin="round"/>
              <path d="M7 5V12M4 8.5H10" stroke="white" stroke-width="1.3" stroke-linecap="round"/>
            </svg>
            <span style="font-size:13px;font-weight:700;color:white;font-family:-apple-system,sans-serif;letter-spacing:-0.3px">Ark</span>
          </a>

          <!-- Blue Wallet -->
          <a href="https://bluewallet.io/" target="_blank" rel="noopener" title="Blue Wallet" style="display:flex;align-items:center;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);border-radius:8px;padding:6px 12px;text-decoration:none;transition:opacity 0.15s;gap:7px" onmouseover="this.style.opacity=0.7" onmouseout="this.style.opacity=1">
            <!-- Blue Wallet icon: two stacked cards (actual logo) -->
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
              <!-- Bottom card (lighter blue, peeks out from behind) -->
              <rect x="4" y="5" width="18" height="13" rx="3.5" fill="#6BB8EE"/>
              <!-- Top card (darker blue) -->
              <rect x="0" y="0" width="18" height="13" rx="3.5" fill="#1F53A8"/>
              <!-- "blue" text on bottom card lower-right -->
              <text x="15" y="15.5" font-size="5" fill="white" font-weight="800" font-family="Arial, sans-serif" text-anchor="end">blue</text>
            </svg>
            <span style="font-size:13px;font-weight:700;color:white;font-family:-apple-system,sans-serif;letter-spacing:-0.3px">BlueWallet</span>
          </a>

        </div>
      </div>
    </div>

    <div class="steps-row">
      <div class="step-card">
        <span class="step-n">STEP 01</span>
        <h4>Book a fit check</h4>
        <p>20 minutes. We confirm this is right for you.</p>
      </div>
      <div class="step-card" style="border-color:var(--orange-border);background:var(--orange-soft)">
        <span class="step-n">STEP 02</span>
        <h4>One full day in Dubai</h4>
        <p>You build your setup, live. With the room.</p>
      </div>
      <div class="step-card">
        <span class="step-n">STEP 03</span>
        <h4>Leave with it tested</h4>
        <p>You delete and recover your wallet. If it works, you go home with it. If not, you get a refund.</p>
      </div>
    </div>

    <div class="outcomes">
      <div class="outcome"><span class="outcome-n">01</span><div><h4>Your wallet stack, built</h4><p>Cold storage configured for your situation. Nobody else has the keys.</p></div></div>
      <div class="outcome"><span class="outcome-n">02</span><div><h4>A passed recovery test</h4><p>You deleted it and recovered it live. You know it works.</p></div></div>
      <div class="outcome"><span class="outcome-n">03</span><div><h4>A conversion plan</h4><p>How much, at what intervals, using which rails. Specific to you.</p></div></div>
      <div class="outcome"><span class="outcome-n">04</span><div><h4>A pressure playbook</h4><p>What to do when internet goes down or apps stop working.</p></div></div>
      <div class="outcome"><span class="outcome-n">05</span><div><h4>A wealth framework</h4><p>How to think about Bitcoin as a percentage of your net worth.</p></div></div>
      <div class="outcome"><span class="outcome-n">06</span><div><h4>An emergency exit protocol</h4><p>How to move Bitcoin across borders fast. Built from real evacuations.</p></div></div>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════
     FOLD 5: GUARANTEE + LOGISTICS + CTA
════════════════════════════════════════════════════ -->
<div class="fold compact">
  <div class="inner">
    <span class="eyebrow">The guarantee</span>
    <h2>Two ways to get your $2,000 back.</h2>

    <div class="guarantee-cards">
      <div class="g-card">
        <h4>Live recovery or refund</h4>
        <p>If you cannot fully recover your wallet across Lightning, Liquid, and mainchain by end of day, you get your $2,000 back. Verifiable in the room before you leave.</p>
      </div>
      <div class="g-card">
        <h4>3x in 3 years or refund</h4>
        <p>If Bitcoin has not at least tripled from your workshop date within 3 years, you get your $2,000 back. Written into the service agreement you sign before paying.</p>
      </div>
    </div>

    <div class="logistics">
      <div class="log-item"><span class="log-l">Date</span><span class="log-v">December 2026</span></div>
      <div class="log-item"><span class="log-l">Location</span><span class="log-v">Dubai, UAE</span></div>
      <div class="log-item"><span class="log-l">Duration</span><span class="log-v">9am to 5pm</span></div>
      <div class="log-item"><span class="log-l">Venue</span><span class="log-v">Luxury hotel suite</span></div>
      <div class="log-item"><span class="log-l">Group size</span><span class="log-v">15 to 25 people</span></div>
      <div class="log-item"><span class="log-l">Cost</span><span class="log-v">$2,000 (AED or BTC)</span></div>
    </div>

    <div class="bring-row">
      <div class="bring-item"><span class="bring-icon">&#128187;</span><p>Laptop (Mac or Windows, charged)</p></div>
      <div class="bring-item"><span class="bring-icon">&#128241;</span><p>Phone (iOS or Android)</p></div>
      <div class="bring-item"><span class="bring-icon">&#128211;</span><p>Physical notebook. No digital notes for seed phrases</p></div>
      <div class="bring-item"><span class="bring-icon">&#128202;</span><p>Rough sense of your savings and income</p></div>
    </div>

    <div class="cta-block">
      <h3>You've already qualified.</h3>
      <p>The next step is confirming your seat and signing the service agreement before the workshop date.</p>
      <a class="btn" href="https://cal.com/djobs">Confirm your seat &#8594;</a>
      <p class="cta-note">$2,000 &middot; AED or BTC &middot; Full day &middot; Luxury hotel &middot; Dubai</p>
    </div>
  </div>
</div>

<script>
(function() {

// ── GAP CHART DATA ──────────────────────────────────────────
// Value of $1,000 invested in 2018 (in USD, log scale)
var GAP_LABELS = ['2018','2019','2020','2021','2022','2023','2024','2025','2026'];
var SDG_RATES  = [26, 45, 55, 450, 570, 600, 3500, 5000, 6000];
var BTC_PRICES = [6500, 7200, 29000, 47000, 16500, 42000, 97000, 98000, 100000];
var SDG_VALUES = SDG_RATES.map(function(r){ return 1000 * (26 / r); });
var BTC_VALUES = BTC_PRICES.map(function(p){ return (1000 / 6500) * p; });

// ── PURCHASING POWER CHART DATA ──────────────────────────────
// All lines: value of $1,000 held/invested in 2018, tracked to 2025
var PP_LABELS = ['2018','2019','2020','2021','2022','2023','2024','2025'];
// Cash: flat nominal
var PP_CASH = [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000];
// CPI: how much $1,000 of 2018 goods cost each year (hurdle rate, US CPI-U)
var PP_CPI  = [1000, 1018, 1032, 1083, 1166, 1214, 1258, 1293];
// Real costs: groceries + rent composite (rose ~45% vs CPI's ~29%)
var PP_REAL = [1000, 1025, 1042, 1120, 1280, 1370, 1420, 1450];
// Bitcoin: 0.1333 BTC (= $1,000 at avg 2018 price $7,500) × annual avg BTC price
var PP_BTC  = [1000,  973, 1467, 6267, 3733, 3733, 8667, 12000];

// ── DCA CHART DATA ──────────────────────────────────────────
// Monthly buys on the 13th: Jun 13 2022 -> Oct 13 2023 (17 months)
var DCA_PRICES = [
  20000,19300,24000,22000,19500,16500,
  17000,18000,22000,24000,30000,27000,
  26000,30000,29000,26500,27000
];
var DCA_X_LABELS = [
  "Jun 22","","Aug 22","","Oct 22","Nov 22",
  "","Jan 23","","Mar 23","Apr 23","",
  "Jun 23","","","","Oct 23"
];
var CONTRIBUTION = 1000;
var portfolioVals = [];
var investedVals = [];
var btcAccum = 0;
for (var i = 0; i < DCA_PRICES.length; i++) {
  btcAccum += CONTRIBUTION / DCA_PRICES[i];
  portfolioVals.push(Math.round(btcAccum * DCA_PRICES[i]));
  investedVals.push((i + 1) * CONTRIBUTION);
}

// ── DCA FREQUENCY COMPARISON ─────────────────────────────────
// Same $17,000, same period, three frequencies via linear interpolation
var TOTAL_DAYS_DCA = 487; // Jun 13 2022 -> Oct 13 2023
var TOTAL_INVESTED = 17000;
var NUM_MONTHS_DCA = DCA_PRICES.length;

function priceAtDay(d) {
  var monthFrac = d / 30.44;
  var mLow = Math.min(Math.floor(monthFrac), NUM_MONTHS_DCA - 1);
  var mHigh = Math.min(mLow + 1, NUM_MONTHS_DCA - 1);
  var frac = monthFrac - Math.floor(monthFrac);
  return DCA_PRICES[mLow] * (1 - frac) + DCA_PRICES[mHigh] * frac;
}

var NUM_WEEKS_DCA = 70;
var weeklyContrib = TOTAL_INVESTED / NUM_WEEKS_DCA;
var weeklyBTC = 0;
for (var ww = 0; ww < NUM_WEEKS_DCA; ww++) { weeklyBTC += weeklyContrib / priceAtDay(ww * 7); }

var dailyContrib = TOTAL_INVESTED / TOTAL_DAYS_DCA;
var dailyBTC = 0;
for (var dd = 0; dd < TOTAL_DAYS_DCA; dd++) { dailyBTC += dailyContrib / priceAtDay(dd); }

// btcAccum already holds monthly total from the loop above
var CURRENT_PRICE = 100000;
var freqBars = [
  { label: 'Monthly (x17 buys)', btc: btcAccum,   color: '#f7931a' },
  { label: 'Weekly  (x70 buys)', btc: weeklyBTC,  color: '#fb9e41' },
  { label: 'Daily  (x487 buys)', btc: dailyBTC,   color: '#fdc782' }
];

// ── HELPERS ─────────────────────────────────────────────────
var IS_MOBILE = window.innerWidth <= 640;

function setupCanvas(canvas) {
  var dpr = window.devicePixelRatio || 1;
  var rect = canvas.parentElement.getBoundingClientRect();
  var w = Math.floor(rect.width);
  // Reduce chart heights on narrow screens
  var baseH = parseInt(canvas.getAttribute('height'), 10);
  var mobileH = { gapChart: 200, purchasingPowerChart: 220, dcaChart: 180, dcaCompare: 130 };
  var h = (IS_MOBILE && mobileH[canvas.id]) ? mobileH[canvas.id] : baseH;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  canvas.style.width = w + 'px';
  canvas.style.height = h + 'px';
  var ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  return { ctx: ctx, w: w, h: h };
}

function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }

function formatDollars(v) {
  if (v >= 1000) return '$' + (v / 1000).toFixed(0) + 'k';
  if (v >= 1) return '$' + v.toFixed(0);
  return '$' + v.toFixed(2);
}

// ── PURCHASING POWER CHART ───────────────────────────────────
function drawPurchasingPowerChart() {
  var canvas = document.getElementById('purchasingPowerChart');
  if (!canvas) return;
  var s = setupCanvas(canvas);
  var ctx = s.ctx, W = s.w, H = s.h;

  var PAD_L = IS_MOBILE ? 44 : 56;
  var PAD_R = IS_MOBILE ? 72 : 90;
  var PAD_T = 20, PAD_B = IS_MOBILE ? 28 : 36;
  var chartW = W - PAD_L - PAD_R;
  var chartH = H - PAD_T - PAD_B;
  var N = PP_LABELS.length;
  var yMax = 13000;

  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = '#0c0c14';
  ctx.fillRect(0, 0, W, H);

  function ppY(v) { return PAD_T + chartH - (v / yMax) * chartH; }
  function ppX(i) { return PAD_L + (i / (N - 1)) * chartW; }

  // Grid lines
  [0, 2000, 4000, 6000, 8000, 10000, 12000].forEach(function(gv) {
    var y = ppY(gv);
    ctx.strokeStyle = 'rgba(255,255,255,0.05)';
    ctx.lineWidth = 1; ctx.setLineDash([]);
    ctx.beginPath(); ctx.moveTo(PAD_L, y); ctx.lineTo(PAD_L + chartW, y); ctx.stroke();
    ctx.fillStyle = 'rgba(255,255,255,0.25)';
    ctx.font = '10px "SF Mono", monospace';
    ctx.textAlign = 'right';
    ctx.fillText(formatDollars(gv), PAD_L - 6, y + 4);
  });

  // X axis labels
  ctx.fillStyle = 'rgba(255,255,255,0.3)';
  ctx.font = '10px -apple-system, sans-serif';
  ctx.textAlign = 'center';
  PP_LABELS.forEach(function(lbl, i) {
    ctx.fillText(lbl, ppX(i), PAD_T + chartH + 18);
  });

  function drawPPLine(data, color, lineWidth, dash) {
    ctx.beginPath();
    data.forEach(function(v, i) {
      var x = ppX(i), y = ppY(v);
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    });
    ctx.strokeStyle = color; ctx.lineWidth = lineWidth;
    ctx.setLineDash(dash || []); ctx.stroke(); ctx.setLineDash([]);
  }

  // Cash (gray dashed — flatline)
  drawPPLine(PP_CASH, 'rgba(255,255,255,0.28)', 1.5, [5, 5]);
  // CPI hurdle (amber dotted)
  drawPPLine(PP_CPI,  '#f59e0b', 1.5, [3, 4]);
  // Real costs (red solid)
  drawPPLine(PP_REAL, '#ef4444', 2, []);

  // BTC area fill
  ctx.beginPath();
  PP_BTC.forEach(function(v, i) {
    var x = ppX(i), y = ppY(v);
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.lineTo(ppX(N - 1), PAD_T + chartH);
  ctx.lineTo(ppX(0), PAD_T + chartH);
  ctx.closePath();
  var ppBtcGrad = ctx.createLinearGradient(0, PAD_T, 0, PAD_T + chartH);
  ppBtcGrad.addColorStop(0, 'rgba(247,147,26,0.32)');
  ppBtcGrad.addColorStop(1, 'rgba(247,147,26,0.02)');
  ctx.fillStyle = ppBtcGrad; ctx.fill();

  // BTC line
  drawPPLine(PP_BTC, '#f7931a', 2.5, []);

  // 2022 crash marker
  var crashX = ppX(4);
  ctx.strokeStyle = 'rgba(239,68,68,0.35)';
  ctx.lineWidth = 1; ctx.setLineDash([3, 3]);
  ctx.beginPath(); ctx.moveTo(crashX, PAD_T); ctx.lineTo(crashX, PAD_T + chartH); ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = 'rgba(239,68,68,0.6)';
  ctx.font = '9px -apple-system, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('2022', crashX, PAD_T + 12);

  // End-point dots + right-side labels
  var lastI = N - 1;
  var labelX = ppX(lastI) + 8;

  // BTC
  ctx.beginPath(); ctx.arc(ppX(lastI), ppY(PP_BTC[lastI]), 4, 0, Math.PI*2);
  ctx.fillStyle = '#f7931a'; ctx.fill();
  ctx.fillStyle = '#f7931a';
  ctx.font = 'bold ' + (IS_MOBILE ? '10' : '11') + 'px -apple-system, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText(IS_MOBILE ? '$12k' : '$12,000', labelX, ppY(PP_BTC[lastI]) + 4);

  // Real costs
  ctx.fillStyle = '#ef4444';
  ctx.font = (IS_MOBILE ? '9' : '10') + 'px -apple-system, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('$1,450', labelX, ppY(PP_REAL[lastI]) - 3);

  // CPI
  ctx.fillStyle = '#f59e0b';
  ctx.fillText('$1,293', labelX, ppY(PP_CPI[lastI]) + 12);

  // Cash
  ctx.fillStyle = 'rgba(255,255,255,0.35)';
  ctx.fillText('$1,000', labelX, ppY(PP_CASH[lastI]) + 14);

  // Bottom annotation (desktop only)
  if (!IS_MOBILE) {
    ctx.fillStyle = 'rgba(255,255,255,0.18)';
    ctx.font = '9px -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('cash / CPI / real costs — all within $450 of each other', PAD_L + chartW * 0.42, ppY(1225) - 6);
  }
}

// ── GAP CHART ────────────────────────────────────────────────
function drawGapChart() {
  var canvas = document.getElementById('gapChart');
  if (!canvas) return;
  var s = setupCanvas(canvas);
  var ctx = s.ctx, W = s.w, H = s.h;

  var PAD_L = IS_MOBILE ? 44 : 56, PAD_R = 12, PAD_T = 16, PAD_B = IS_MOBILE ? 28 : 36;
  var chartW = W - PAD_L - PAD_R;
  var chartH = H - PAD_T - PAD_B;

  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = '#0c0c14';
  ctx.fillRect(0, 0, W, H);

  // Linear scale: $0 to $16,500
  // (this shows the true gap — SDG collapses to near zero, BTC climbs to $15,385)
  var gapYMax = 16500;
  function yPos(val) {
    return PAD_T + chartH - (Math.max(0, val) / gapYMax) * chartH;
  }

  function xPos(i) {
    return PAD_L + (i / (GAP_LABELS.length - 1)) * chartW;
  }

  // Grid lines (linear, every $2k)
  var gridVals = [0, 2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000];
  ctx.strokeStyle = 'rgba(255,255,255,0.05)';
  ctx.lineWidth = 1;
  ctx.setLineDash([]);
  gridVals.forEach(function(gv) {
    var y = yPos(gv);
    ctx.beginPath();
    ctx.moveTo(PAD_L, y);
    ctx.lineTo(PAD_L + chartW, y);
    ctx.stroke();
    ctx.fillStyle = 'rgba(255,255,255,0.25)';
    ctx.font = '10px "SF Mono", monospace';
    ctx.textAlign = 'right';
    ctx.fillText(formatDollars(gv), PAD_L - 6, y + 4);
  });

  // X axis labels
  ctx.fillStyle = 'rgba(255,255,255,0.3)';
  ctx.font = '10px -apple-system, sans-serif';
  ctx.textAlign = 'center';
  GAP_LABELS.forEach(function(lbl, i) {
    ctx.fillText(lbl, xPos(i), PAD_T + chartH + 18);
  });

  // BTC area fill
  ctx.beginPath();
  BTC_VALUES.forEach(function(v, i) {
    var x = xPos(i), y = yPos(v);
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.lineTo(xPos(BTC_VALUES.length - 1), PAD_T + chartH);
  ctx.lineTo(xPos(0), PAD_T + chartH);
  ctx.closePath();
  var btcGrad = ctx.createLinearGradient(0, PAD_T, 0, PAD_T + chartH);
  btcGrad.addColorStop(0, 'rgba(247,147,26,0.3)');
  btcGrad.addColorStop(1, 'rgba(247,147,26,0.02)');
  ctx.fillStyle = btcGrad;
  ctx.fill();

  // BTC line
  ctx.beginPath();
  BTC_VALUES.forEach(function(v, i) {
    var x = xPos(i), y = yPos(v);
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = '#f7931a';
  ctx.lineWidth = 2.5;
  ctx.setLineDash([]);
  ctx.stroke();

  // SDG area fill
  ctx.beginPath();
  SDG_VALUES.forEach(function(v, i) {
    var x = xPos(i), y = yPos(v);
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.lineTo(xPos(SDG_VALUES.length - 1), PAD_T + chartH);
  ctx.lineTo(xPos(0), PAD_T + chartH);
  ctx.closePath();
  var sdgGrad = ctx.createLinearGradient(0, PAD_T, 0, PAD_T + chartH);
  sdgGrad.addColorStop(0, 'rgba(239,68,68,0.25)');
  sdgGrad.addColorStop(1, 'rgba(239,68,68,0.02)');
  ctx.fillStyle = sdgGrad;
  ctx.fill();

  // SDG line
  ctx.beginPath();
  SDG_VALUES.forEach(function(v, i) {
    var x = xPos(i), y = yPos(v);
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = '#ef4444';
  ctx.lineWidth = 2;
  ctx.setLineDash([]);
  ctx.stroke();

  // End-point labels
  // BTC end
  var btcEnd = BTC_VALUES[BTC_VALUES.length - 1];
  var btcEndX = xPos(BTC_VALUES.length - 1);
  var btcEndY = yPos(btcEnd);
  ctx.beginPath();
  ctx.arc(btcEndX, btcEndY, 4, 0, Math.PI * 2);
  ctx.fillStyle = '#f7931a';
  ctx.fill();
  ctx.fillStyle = '#f7931a';
  ctx.font = 'bold 11px -apple-system, sans-serif';
  ctx.textAlign = 'right';
  ctx.fillText(IS_MOBILE ? '$15k' : '$15,385', btcEndX - 8, btcEndY - 8);

  // SDG end — at linear scale, SDG ($4.33) is essentially at the x-axis
  var sdgEnd = SDG_VALUES[SDG_VALUES.length - 1];
  var sdgEndX = xPos(SDG_VALUES.length - 1);
  var sdgEndY = yPos(sdgEnd); // ~= PAD_T + chartH (bottom)
  ctx.beginPath();
  ctx.arc(sdgEndX, sdgEndY, 4, 0, Math.PI * 2);
  ctx.fillStyle = '#ef4444';
  ctx.fill();
  // Label above the x-axis (small upward callout)
  ctx.fillStyle = '#ef4444';
  ctx.font = 'bold 10px -apple-system, sans-serif';
  ctx.textAlign = 'right';
  ctx.fillText('SDG: $4.33', sdgEndX - 8, PAD_T + chartH - 6);

  // Explain the scale in the upper-right corner
  ctx.fillStyle = 'rgba(255,255,255,0.2)';
  ctx.font = '9px -apple-system, sans-serif';
  ctx.textAlign = 'right';
  ctx.fillText('Linear scale. SDG is at the floor.', PAD_L + chartW, PAD_T + 14);
}

// ── DCA CHART ────────────────────────────────────────────────
function drawDcaChart() {
  var canvas = document.getElementById('dcaChart');
  if (!canvas) return;
  var s = setupCanvas(canvas);
  var ctx = s.ctx, W = s.w, H = s.h;

  var PAD_L = IS_MOBILE ? 46 : 62, PAD_R = 12, PAD_T = 16, PAD_B = IS_MOBILE ? 28 : 36;
  var chartW = W - PAD_L - PAD_R;
  var chartH = H - PAD_T - PAD_B;
  var N = portfolioVals.length;

  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = '#0c0c14';
  ctx.fillRect(0, 0, W, H);

  // Scale
  var maxVal = Math.max.apply(null, portfolioVals.concat(investedVals));
  var yMax = Math.ceil(maxVal / 20000) * 20000;

  function yPos(v) { return PAD_T + chartH - (v / yMax) * chartH; }
  function xPos(i) { return PAD_L + (i / (N - 1)) * chartW; }

  // Grid lines
  var yTicks = [0, 5000, 10000, 15000, 20000, 25000].filter(function(v){ return v <= yMax; });
  ctx.strokeStyle = 'rgba(255,255,255,0.05)';
  ctx.lineWidth = 1;
  yTicks.forEach(function(v) {
    var y = yPos(v);
    ctx.beginPath();
    ctx.moveTo(PAD_L, y);
    ctx.lineTo(PAD_L + chartW, y);
    ctx.stroke();
    ctx.fillStyle = 'rgba(255,255,255,0.25)';
    ctx.font = '10px "SF Mono", monospace';
    ctx.textAlign = 'right';
    ctx.fillText(formatDollars(v), PAD_L - 6, y + 4);
  });

  // X axis labels (only labeled ones)
  ctx.fillStyle = 'rgba(255,255,255,0.3)';
  ctx.font = '10px -apple-system, sans-serif';
  ctx.textAlign = 'center';
  DCA_X_LABELS.forEach(function(lbl, i) {
    if (lbl) ctx.fillText(lbl, xPos(i), PAD_T + chartH + 18);
  });

  // Invested area (gray)
  ctx.beginPath();
  investedVals.forEach(function(v, i) {
    var x = xPos(i), y = yPos(v);
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.lineTo(xPos(N - 1), PAD_T + chartH);
  ctx.lineTo(xPos(0), PAD_T + chartH);
  ctx.closePath();
  ctx.fillStyle = 'rgba(255,255,255,0.04)';
  ctx.fill();

  // Invested line (dashed)
  ctx.beginPath();
  investedVals.forEach(function(v, i) {
    var x = xPos(i), y = yPos(v);
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = 'rgba(255,255,255,0.22)';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([4, 4]);
  ctx.stroke();
  ctx.setLineDash([]);

  // Portfolio area (orange)
  ctx.beginPath();
  portfolioVals.forEach(function(v, i) {
    var x = xPos(i), y = yPos(v);
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.lineTo(xPos(N - 1), PAD_T + chartH);
  ctx.lineTo(xPos(0), PAD_T + chartH);
  ctx.closePath();
  var pGrad = ctx.createLinearGradient(0, PAD_T, 0, PAD_T + chartH);
  pGrad.addColorStop(0, 'rgba(247,147,26,0.35)');
  pGrad.addColorStop(0.6, 'rgba(247,147,26,0.1)');
  pGrad.addColorStop(1, 'rgba(247,147,26,0.02)');
  ctx.fillStyle = pGrad;
  ctx.fill();

  // Portfolio line
  ctx.beginPath();
  portfolioVals.forEach(function(v, i) {
    var x = xPos(i), y = yPos(v);
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = '#f7931a';
  ctx.lineWidth = 2.5;
  ctx.setLineDash([]);
  ctx.stroke();

  // Marker: Jun 2022 flash crash (index 0)
  var signalX = xPos(0);
  ctx.fillStyle = 'rgba(247,147,26,0.9)';
  ctx.font = 'bold 9px -apple-system, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('Flash crash', signalX + 4, PAD_T + 12);

  // Marker: Nov 2022 FTX collapse (index 5)
  var ftxIdx = 5;
  var ftx = xPos(ftxIdx);
  ctx.strokeStyle = 'rgba(239,68,68,0.45)';
  ctx.lineWidth = 1;
  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.moveTo(ftx, PAD_T);
  ctx.lineTo(ftx, PAD_T + chartH);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = 'rgba(239,68,68,0.8)';
  ctx.font = '9px -apple-system, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('FTX', ftx, PAD_T + 12);

  // Marker: Oct 2023 last buy (index 16)
  var lastBuyX = xPos(16);
  ctx.strokeStyle = 'rgba(16,185,129,0.4)';
  ctx.lineWidth = 1;
  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.moveTo(lastBuyX, PAD_T);
  ctx.lineTo(lastBuyX, PAD_T + chartH);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = 'rgba(16,185,129,0.85)';
  ctx.font = '9px -apple-system, sans-serif';
  ctx.textAlign = 'right';
  ctx.fillText('Last buy', lastBuyX - 4, PAD_T + 12);

  // End point dot + label
  var lastV = portfolioVals[N - 1];
  var lastX = xPos(N - 1);
  var lastY = yPos(lastV);
  ctx.beginPath();
  ctx.arc(lastX, lastY, 5, 0, Math.PI * 2);
  ctx.fillStyle = '#f7931a';
  ctx.fill();
  ctx.fillStyle = '#f7931a';
  ctx.font = 'bold 11px -apple-system, sans-serif';
  ctx.textAlign = 'right';
  ctx.fillText(formatDollars(lastV), lastX - 8, lastY - 8);
}

// ── DCA COMPARE CHART ────────────────────────────────────────
function drawDcaCompareChart() {
  var canvas = document.getElementById('dcaCompare');
  if (!canvas) return;
  var s = setupCanvas(canvas);
  var ctx = s.ctx, W = s.w, H = s.h;

  // On mobile: stacked layout (label top, bar full-width, value right)
  // On desktop: horizontal label | bar | value
  var PAD_T = 10, PAD_B = 10;
  var maxBTC = Math.max(freqBars[0].btc, freqBars[1].btc, freqBars[2].btc) * 1.08;

  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = '#0c0c14';
  ctx.fillRect(0, 0, W, H);

  if (IS_MOBILE) {
    // Mobile: label above each bar, value at bar end, full-width bars
    var PAD_L_M = 12, PAD_R_M = 12;
    var trackW = W - PAD_L_M - PAD_R_M;
    var rowH = Math.floor((H - PAD_T - PAD_B) / freqBars.length);

    freqBars.forEach(function(bar, i) {
      var rowTop = PAD_T + i * rowH;
      var labelY = rowTop + 14;
      var barY = rowTop + 20;
      var barH = rowH - 28;
      var barW = (bar.btc / maxBTC) * trackW;

      // Label
      ctx.fillStyle = 'rgba(255,255,255,0.5)';
      ctx.font = '10px "SF Mono", monospace';
      ctx.textAlign = 'left';
      ctx.fillText(bar.label, PAD_L_M, labelY);

      // Background track
      ctx.fillStyle = 'rgba(255,255,255,0.05)';
      ctx.beginPath();
      ctx.roundRect(PAD_L_M, barY, trackW, barH, 3);
      ctx.fill();

      // Bar
      var grad = ctx.createLinearGradient(PAD_L_M, 0, PAD_L_M + barW, 0);
      grad.addColorStop(0, bar.color);
      grad.addColorStop(1, bar.color + 'aa');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.roundRect(PAD_L_M, barY, barW, barH, 3);
      ctx.fill();

      // BTC value overlaid right of bar
      var val = Math.round(bar.btc * CURRENT_PRICE);
      ctx.fillStyle = bar.color;
      ctx.font = 'bold 10px -apple-system, sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText(bar.btc.toFixed(3) + ' BTC  $' + (val / 1000).toFixed(0) + 'k', W - PAD_R_M, barY + barH / 2 + 4);
    });
  } else {
    var PAD_L = 160, PAD_R = 110;
    var chartW = W - PAD_L - PAD_R;
    var chartH = H - PAD_T - PAD_B;
    var rowH = Math.floor(chartH / freqBars.length);

    freqBars.forEach(function(bar, i) {
      var y = PAD_T + i * rowH + rowH * 0.2;
      var barH = rowH * 0.6;
      var barW = (bar.btc / maxBTC) * chartW;

      ctx.fillStyle = 'rgba(255,255,255,0.04)';
      ctx.beginPath();
      ctx.roundRect(PAD_L, y, chartW, barH, 4);
      ctx.fill();

      var grad = ctx.createLinearGradient(PAD_L, 0, PAD_L + barW, 0);
      grad.addColorStop(0, bar.color);
      grad.addColorStop(1, bar.color + '99');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.roundRect(PAD_L, y, barW, barH, 4);
      ctx.fill();

      ctx.fillStyle = 'rgba(255,255,255,0.6)';
      ctx.font = '11px "SF Mono", monospace';
      ctx.textAlign = 'right';
      ctx.fillText(bar.label, PAD_L - 8, y + barH / 2 + 4);

      var val = Math.round(bar.btc * CURRENT_PRICE);
      ctx.fillStyle = bar.color;
      ctx.font = 'bold 12px -apple-system, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(bar.btc.toFixed(3) + ' BTC', PAD_L + chartW + 8, y + barH / 2 - 2);
      ctx.fillStyle = 'rgba(255,255,255,0.35)';
      ctx.font = '10px "SF Mono", monospace';
      ctx.fillText('= $' + val.toLocaleString(), PAD_L + chartW + 8, y + barH / 2 + 12);
    });
  }
}

// ── RENDER ───────────────────────────────────────────────────
function renderAll() {
  drawGapChart();
  drawPurchasingPowerChart();
  drawDcaChart();
  drawDcaCompareChart();
}

function scheduleRender() {
  IS_MOBILE = window.innerWidth <= 640;
  // rAF ensures layout is complete and containers have real dimensions
  requestAnimationFrame(function() {
    requestAnimationFrame(renderAll);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', scheduleRender);
} else {
  scheduleRender();
}

var resizeTimer;
window.addEventListener('resize', function() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(scheduleRender, 120);
});

})();
<\/script>
</body>
</html>`
