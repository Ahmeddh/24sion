export const bitcoinCampaignHtml = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Bitcoin Paycheck Plan: Launch Campaign</title>
</head>
<body>
<title>Bitcoin Paycheck Plan: Launch Campaign</title>
<style>
:root {
  --bg:#050510;--surface:#0a0a1e;--card:#0f0f28;--card-alt:#13132e;
  --border:rgba(255,255,255,0.07);--border-hi:rgba(255,255,255,0.13);
  --text:#eceef8;--muted:#7070a0;--faint:#2a2a48;
  --bitcoin:#f7931a;--btc-bg:rgba(247,147,26,0.10);--btc-bd:rgba(247,147,26,0.25);
  --cyan:#00c6ff;--cyan-bg:rgba(0,198,255,0.08);--cyan-bd:rgba(0,198,255,0.2);
  --green:#00d97e;--green-bg:rgba(0,217,126,0.08);--green-bd:rgba(0,217,126,0.18);
  --gold:#d4a84b;--gold-bg:rgba(212,168,75,0.08);
  --red:#ff6060;--red-bg:rgba(255,96,96,0.07);--red-bd:rgba(255,96,96,0.18);
  --r:12px;--rs:8px;
}
@media(prefers-color-scheme:light){:root{
  --bg:#f4f4fb;--surface:#fff;--card:#eef0f8;--card-alt:#e6e8f4;
  --border:rgba(0,0,0,0.08);--border-hi:rgba(0,0,0,0.15);
  --text:#0c0c24;--muted:#5a5a7a;--faint:#c4c4dc;
  --btc-bg:rgba(247,147,26,0.07);--cyan-bg:rgba(0,198,255,0.06);
}}
:root[data-theme=light]{
  --bg:#f4f4fb;--surface:#fff;--card:#eef0f8;--card-alt:#e6e8f4;
  --border:rgba(0,0,0,0.08);--border-hi:rgba(0,0,0,0.15);
  --text:#0c0c24;--muted:#5a5a7a;--faint:#c4c4dc;
  --btc-bg:rgba(247,147,26,0.07);--cyan-bg:rgba(0,198,255,0.06);
}
:root[data-theme=dark]{
  --bg:#050510;--surface:#0a0a1e;--card:#0f0f28;
  --border:rgba(255,255,255,0.07);--text:#eceef8;--muted:#7070a0;--faint:#2a2a48;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
body{background:var(--bg);color:var(--text);font-family:-apple-system,'Segoe UI',system-ui,sans-serif;font-size:15px;line-height:1.7;overflow-x:hidden}
body::before{content:'';position:fixed;inset:0;background:radial-gradient(circle,rgba(247,147,26,0.045) 1px,transparent 1px);background-size:32px 32px;pointer-events:none;z-index:0}
.wrap{position:relative;z-index:1;max-width:880px;margin:0 auto;padding:48px 20px 100px}
h1{font-size:clamp(2.2rem,6vw,3.6rem);font-weight:900;line-height:1.05;letter-spacing:-.035em;text-wrap:balance}
h2{font-size:1.25rem;font-weight:700;letter-spacing:-.02em;text-wrap:balance}
h3{font-size:.95rem;font-weight:700;letter-spacing:-.01em}
.eyebrow{font-size:.68rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:10px}
.section{margin-top:64px}
.sec-head{display:flex;align-items:baseline;gap:12px;margin-bottom:22px;padding-bottom:14px;border-bottom:1px solid var(--border)}
.card{background:var(--card);border:1px solid var(--border);border-radius:var(--r);padding:20px 24px}

/* HERO */
.badge{display:inline-flex;align-items:center;gap:8px;background:var(--btc-bg);border:1px solid var(--btc-bd);border-radius:100px;padding:5px 14px;font-size:.7rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--bitcoin);margin-bottom:22px}
.hero-sub{color:var(--muted);font-size:1rem;max-width:560px;margin-top:14px;line-height:1.65}
.goal-row{display:flex;gap:10px;margin-top:32px;flex-wrap:wrap}
.gcard{border-radius:var(--r);padding:18px 20px;flex:1;min-width:140px}
.gcard.btc{background:var(--btc-bg);border:1px solid var(--btc-bd)}
.gcard.cyn{background:var(--cyan-bg);border:1px solid var(--cyan-bd)}
.gcard.grn{background:var(--green-bg);border:1px solid var(--green-bd)}
.gcard.neu{background:var(--card);border:1px solid var(--border)}
.gcard .num{font-size:2rem;font-weight:900;letter-spacing:-.04em;line-height:1;font-family:'SF Mono','Courier New',monospace;font-variant-numeric:tabular-nums}
.gcard.btc .num{color:var(--bitcoin)}.gcard.cyn .num{color:var(--cyan)}.gcard.grn .num{color:var(--green)}.gcard.neu .num{color:var(--text)}
.gcard .lbl{font-size:.7rem;color:var(--muted);margin-top:6px;font-weight:600;text-transform:uppercase;letter-spacing:.06em}

/* OFFER */
.price-line{display:flex;align-items:baseline;gap:10px;margin-top:16px}
.price{font-size:2rem;font-weight:900;color:var(--bitcoin);font-family:'SF Mono','Courier New',monospace;letter-spacing:-.03em}
.price-note{color:var(--muted);font-size:.82rem}
.delivs{list-style:none;margin-top:16px;display:flex;flex-direction:column;gap:8px}
.delivs li{display:flex;gap:10px;font-size:.88rem}
.delivs li::before{content:'→';color:var(--cyan);flex-shrink:0;font-weight:700}
.fnf{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px}
@media(max-width:500px){.fnf{grid-template-columns:1fr}}
.for-c{background:var(--green-bg);border:1px solid var(--green-bd);border-radius:var(--rs);padding:16px 18px}
.nfor-c{background:var(--red-bg);border:1px solid var(--red-bd);border-radius:var(--rs);padding:16px 18px}
.for-c h3,.nfor-c h3{font-size:.66rem;text-transform:uppercase;letter-spacing:.1em;margin-bottom:10px}
.for-c h3{color:var(--green)}.nfor-c h3{color:var(--red)}
.fl,.nl{list-style:none;display:flex;flex-direction:column;gap:6px;font-size:.83rem}
.fl li::before{content:'✓ ';color:var(--green);font-weight:700}
.nl li::before{content:'✕ ';color:var(--red);font-weight:700}
.guarantee{background:var(--cyan-bg);border:1px solid var(--cyan-bd);border-radius:var(--r);padding:18px 22px;margin-top:10px}
.guarantee .eyebrow{color:var(--cyan)}

/* P2P CALLOUT */
.p2p-box{background:var(--btc-bg);border:1px solid var(--btc-bd);border-radius:var(--r);padding:20px 24px;margin-top:10px}
.p2p-box .eyebrow{color:var(--bitcoin)}
.p2p-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-top:14px}
@media(max-width:560px){.p2p-row{grid-template-columns:1fr}}
.p2p-item{background:rgba(247,147,26,0.06);border:1px solid rgba(247,147,26,0.12);border-radius:var(--rs);padding:12px 14px}
.p2p-item .p2p-label{font-size:.68rem;text-transform:uppercase;letter-spacing:.09em;font-weight:700;color:var(--bitcoin);margin-bottom:4px}
.p2p-item p{font-size:.81rem;color:var(--muted);line-height:1.55}

/* ROADMAP */
.roadmap{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
@media(max-width:640px){.roadmap{grid-template-columns:1fr 1fr}}
@media(max-width:360px){.roadmap{grid-template-columns:1fr}}
@media(max-width:640px){
  .wrap{padding:32px 16px 60px}
  .section{margin-top:44px}
  h1{font-size:clamp(1.8rem,8vw,3rem)}
  .gcard .num{font-size:1.6rem}
  .card{padding:16px 18px}
}
.wk{background:var(--card);border:1px solid var(--border);border-radius:var(--r);padding:18px 16px}
.wk-lbl{font-size:.62rem;text-transform:uppercase;letter-spacing:.12em;color:var(--muted);margin-bottom:6px}
.wk-title{font-size:.9rem;font-weight:700;margin-bottom:12px}
.wk-acts{list-style:none;display:flex;flex-direction:column;gap:5px}
.wk-acts li{font-size:.78rem;color:var(--muted);padding-left:12px;position:relative}
.wk-acts li::before{content:'·';position:absolute;left:0;color:var(--bitcoin)}
.wk-target{margin-top:14px;padding-top:12px;border-top:1px solid var(--border);font-size:.76rem;font-weight:700;color:var(--bitcoin);font-family:'SF Mono','Courier New',monospace}

/* AUDIENCE */
.aud-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
@media(max-width:520px){.aud-grid{grid-template-columns:1fr}}
.aud-card{background:var(--card);border:1px solid var(--border);border-radius:var(--r);padding:18px 20px}
.aud-card h3{font-size:.82rem;margin-bottom:10px;font-weight:700}
.aud-list{list-style:none;display:flex;flex-direction:column;gap:6px;font-size:.82rem;color:var(--muted)}
.aud-list li{padding-left:14px;position:relative}
.aud-list li::before{content:'·';position:absolute;left:0;color:var(--cyan);font-weight:700}

/* ENGINE */
.engine-row{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.eng-num{font-size:2rem;font-weight:900;font-family:'SF Mono','Courier New',monospace;letter-spacing:-.04em;line-height:1}
.eng-lbl{font-size:.76rem;color:var(--muted);margin-top:4px}

/* TABS */
.tab-bar{display:flex;gap:4px;background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:4px;margin-bottom:18px;flex-wrap:wrap}
.tab-btn{flex:1;min-width:fit-content;background:transparent;border:none;color:var(--muted);font-size:.78rem;font-weight:600;padding:8px 13px;border-radius:7px;cursor:pointer;white-space:nowrap;transition:all .15s;font-family:inherit}
.tab-btn.active{background:var(--card);color:var(--text)}
.tab-panel{display:none}.tab-panel.active{display:block}
/* Mobile: replace pill-tabs with a select dropdown */
.tab-select{display:none}
@media(max-width:640px){
  .tab-bar{display:none}
  .tab-select{
    display:block;width:100%;margin-bottom:18px;
    background:var(--card);border:1px solid var(--border);border-radius:10px;
    color:var(--text);font-size:.92rem;font-weight:600;font-family:inherit;
    padding:13px 16px;cursor:pointer;-webkit-appearance:none;appearance:none;
    background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23f7931a' stroke-width='1.8' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
    background-repeat:no-repeat;background-position:right 16px center;padding-right:40px;
  }
}

/* SCRIPT CARDS */
.sc{background:var(--card);border:1px solid var(--border);border-radius:var(--r);padding:20px 22px;margin-bottom:10px}
.sc-head{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;margin-bottom:12px}
.sc-lbl{font-size:.67rem;text-transform:uppercase;letter-spacing:.1em;font-weight:700;color:var(--bitcoin)}
.copy-btn{background:var(--faint);border:none;color:var(--muted);font-size:.68rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;padding:5px 11px;border-radius:6px;cursor:pointer;flex-shrink:0;transition:all .15s;font-family:inherit}
.copy-btn:hover{background:var(--border-hi);color:var(--text)}
.copy-btn.ok{background:var(--green-bg);color:var(--green)}
.sc-text{font-size:.87rem;line-height:1.78;white-space:pre-wrap}
.sc-hint{margin-top:12px;padding-top:12px;border-top:1px solid var(--border);font-size:.74rem;color:var(--muted)}
.sc-hint-row{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-top:12px;padding-top:12px;border-top:1px solid var(--border)}

/* POSTS */
.post{background:var(--card);border:1px solid var(--border);border-radius:var(--r);padding:22px 24px;margin-bottom:10px}
.post-meta{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px}
.post-num{font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--muted)}
.post-tag{font-size:.7rem;background:var(--btc-bg);color:var(--bitcoin);padding:3px 10px;border-radius:100px;font-weight:600}
.post-hook{font-size:1rem;font-weight:700;margin-bottom:12px;line-height:1.4}
.post-body{font-size:.86rem;color:var(--muted);line-height:1.78;white-space:pre-wrap}

/* CALL STEPS */
.steps{display:flex;flex-direction:column}
.step{display:grid;grid-template-columns:44px 1fr;position:relative}
.step:not(:last-child) .step-line{position:absolute;left:21px;top:44px;bottom:0;width:2px;background:var(--faint)}
.step-n{width:38px;height:38px;background:var(--btc-bg);border:1px solid var(--btc-bd);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.78rem;font-weight:700;color:var(--bitcoin);font-family:'SF Mono','Courier New',monospace;flex-shrink:0;margin-top:4px;position:relative;z-index:1}
.step-body{padding:4px 0 28px 16px}
.step-q{font-weight:700;font-size:.9rem;margin-bottom:6px}
.step-note{font-size:.81rem;color:var(--muted);font-style:italic}

/* WORKSHOP */
.ws-step{background:var(--card);border:1px solid var(--border);border-left:3px solid var(--cyan);border-radius:var(--rs);padding:14px 18px;display:grid;grid-template-columns:28px 1fr;gap:12px;align-items:start;margin-bottom:8px}
.ws-n{font-size:.73rem;font-weight:700;color:var(--cyan);font-family:'SF Mono','Courier New',monospace;padding-top:1px}
.ws-title{font-weight:700;font-size:.9rem}
.ws-desc{font-size:.81rem;color:var(--muted);margin-top:4px;line-height:1.6}

/* METRICS */
.tbl-wrap{background:var(--card);border:1px solid var(--border);border-radius:var(--r);overflow:hidden}
table{width:100%;border-collapse:collapse;font-size:.86rem;font-variant-numeric:tabular-nums}
th{text-align:left;padding:10px 14px;font-size:.67rem;text-transform:uppercase;letter-spacing:.09em;color:var(--muted);font-weight:700;border-bottom:1px solid var(--border)}
td{padding:12px 14px;border-bottom:1px solid var(--border);color:var(--text)}
tr:last-child td{border-bottom:none}
/* Mobile: stacked card rows instead of horizontal scroll */
@media(max-width:640px){
  .tbl-wrap table,.tbl-wrap thead,.tbl-wrap tbody,.tbl-wrap tr,.tbl-wrap th,.tbl-wrap td{display:block}
  .tbl-wrap thead tr{display:none}
  .tbl-wrap tr{border-bottom:1px solid var(--border);padding:12px 0}
  .tbl-wrap tr:last-child{border-bottom:none}
  .tbl-wrap td{border-bottom:none;padding:4px 14px;display:flex;justify-content:space-between;align-items:baseline;gap:8px;font-size:.84rem}
  .tbl-wrap td::before{content:attr(data-label);color:var(--muted);font-size:.67rem;font-weight:700;text-transform:uppercase;letter-spacing:.09em;flex-shrink:0}
  .tbl-wrap td:first-child{font-weight:700;font-size:.9rem;padding-top:8px}
  .tbl-wrap td:first-child::before{display:none}
}
.tc-wk{color:var(--muted);font-weight:600}
.tc-num{font-family:'SF Mono','Courier New',monospace;font-weight:700}
.tc-tgt{color:var(--bitcoin)}.tc-done{color:var(--green)}

/* RISKS */
.risk{display:flex;gap:14px;align-items:flex-start;background:var(--card);border:1px solid var(--border);border-radius:var(--rs);padding:14px 18px;margin-bottom:8px}
.risk-n{font-family:'SF Mono','Courier New',monospace;font-size:.68rem;font-weight:700;color:var(--red);background:var(--red-bg);border:1px solid var(--red-bd);border-radius:6px;padding:2px 7px;flex-shrink:0;margin-top:2px}
.risk-txt{font-size:.87rem;line-height:1.55}
.risk-txt strong{color:var(--text)}

hr.div{border:none;border-top:1px solid var(--border);margin-top:64px}
.footer-note{font-size:.76rem;color:var(--faint);margin-top:20px;text-align:center}
</style>

<div class="wrap">

<!-- HERO -->
<section>
  <div class="badge">60-Day Launch Campaign</div>
  <h1>Bitcoin Paycheck Plan<br><span style="color:var(--bitcoin)">Campaign Brief</span></h1>
  <p class="hero-sub">Security-led. Done-with-you. Global. Works in any country. Regulated exchange or P2P. Same quality, same guarantee.</p>
  <div class="goal-row">
    <div class="gcard btc"><div class="num">$10K</div><div class="lbl">Revenue target · 60 days</div></div>
    <div class="gcard cyn"><div class="num">10</div><div class="lbl">Founding clients</div></div>
    <div class="gcard neu"><div class="num">$1,000</div><div class="lbl">Per client</div></div>
    <div class="gcard grn"><div class="num">~30</div><div class="lbl">Fit calls needed</div></div>
  </div>
</section>

<!-- THE OFFER -->
<section class="section">
  <div class="sec-head"><div class="eyebrow">The Offer</div></div>
  <div class="card">
    <div class="eyebrow" style="color:var(--bitcoin)">The Bitcoin Paycheck Plan</div>
    <h2 style="margin-top:6px">A guided, secure Bitcoin savings setup , done with you in one week, wherever you are in the world, tested and working before you leave.</h2>
    <div class="price-line"><span class="price">$1,000</span><span class="price-note">founding-client rate · raise to $2,000 after first 5 testimonials</span></div>
    <ul class="delivs">
      <li>Fit & Foundation call: does Bitcoin belong in your situation right now?</li>
      <li>Country-specific acquisition path: regulated exchange or P2P, whichever is safer and cheaper where you live</li>
      <li>Account security setup: 2FA, withdrawal whitelists, phishing defense</li>
      <li>Income-matched DCA plan using the tiered-zone framework</li>
      <li>Self-custody setup: hardware wallet, backup, and a live recovery test</li>
      <li>The 200-Week Behavioral Playbook (written guardrail, yours to keep)</li>
      <li>2 weeks async support after setup (WhatsApp / email)</li>
    </ul>
  </div>

  <div class="p2p-box">
    <div class="eyebrow">P2P Expertise: The Global Differentiator</div>
    <p style="font-size:.88rem;margin-top:2px;margin-bottom:0">Most Bitcoin educators point everyone at the same two exchanges. That doesn't work for a client in a country where those exchanges aren't available, charge 4% fees, or require documents that create privacy risk. P2P changes what's possible globally.</p>
    <div class="p2p-row">
      <div class="p2p-item">
        <div class="p2p-label">Restricted markets</div>
        <p>Clients in countries with limited or no regulated exchange access can still buy safely through peer-to-peer platforms with proper verification and escrow practices.</p>
      </div>
      <div class="p2p-item">
        <div class="p2p-label">Fee advantage</div>
        <p>P2P often beats exchange rates in markets with high bank fees, unfavorable FX spreads, or KYC friction; you find the best route per country, not the default one.</p>
      </div>
      <div class="p2p-item">
        <div class="p2p-label">Same security standard</div>
        <p>Whether the client buys on Coinbase or through a P2P platform, the custody setup, seed phrase discipline, and recovery test are identical. The guarantee doesn't change.</p>
      </div>
    </div>
  </div>

  <div class="fnf">
    <div class="for-c">
      <h3>This is for you if…</h3>
      <ul class="fl">
        <li>Stable income + 3–6 months emergency savings</li>
        <li>Believe in Bitcoin long-term, scared to start wrong</li>
        <li>Want to hold their own keys, not on an exchange</li>
        <li>Anywhere in the world, any language</li>
      </ul>
    </div>
    <div class="nfor-c">
      <h3>This is NOT for you if…</h3>
      <ul class="nl">
        <li>You want buy/sell signals or price predictions</li>
        <li>You want someone to manage your money</li>
        <li>You're trading altcoins or using leverage</li>
        <li>High-interest debt or no emergency fund</li>
      </ul>
    </div>
  </div>

  <div class="guarantee">
    <div class="eyebrow">Guarantee</div>
    <p style="font-size:.88rem;margin-top:4px">"By the end, you'll have a live, secure self-custody setup, a written DCA plan matched to your income, and you'll have personally completed a successful wallet-recovery test , or I keep working with you at no extra cost until you do." Education and implementation only , not licensed financial advice.</p>
  </div>
</section>

<!-- TARGET AUDIENCE -->
<section class="section">
  <div class="sec-head"><div class="eyebrow">Who You're Reaching</div></div>
  <div class="aud-grid">
    <div class="aud-card">
      <h3>The universal buyer profile</h3>
      <ul class="aud-list">
        <li>Professional or business owner, 30–50, stable income</li>
        <li>Believes in Bitcoin long-term but hasn't started</li>
        <li>Paralyzed by fear of doing it wrong, not lack of interest</li>
        <li>Has money; lacks a safe, trusted process</li>
        <li>Has "too many open tabs" and is more confused than when they started</li>
      </ul>
    </div>
    <div class="aud-card">
      <h3>Where you reach them</h3>
      <ul class="aud-list">
        <li>Your existing warm network: start here first, always</li>
        <li>LinkedIn connections globally (EN + AR content)</li>
        <li>Referrals from every delivered client</li>
        <li>Bitcoin / self-custody communities where fear is common</li>
        <li>Anyone who engaged with the DCA article</li>
      </ul>
    </div>
    <div class="aud-card">
      <h3>Their exact language</h3>
      <ul class="aud-list">
        <li>"I don't know where to start."</li>
        <li>"I don't want to lose everything."</li>
        <li>"I don't trust these exchanges."</li>
        <li>"Is it too late?"</li>
        <li>"I just want to do it properly and forget about it."</li>
      </ul>
    </div>
    <div class="aud-card">
      <h3>Why they trust you over a YouTube educator</h3>
      <ul class="aud-list">
        <li>15 years enterprise security: their #1 fear is your day job</li>
        <li>You built a Bitcoin wallet (CypherBox), hands-on and proven</li>
        <li>P2P expertise works for their country, not just the easy ones</li>
        <li>Bilingual EN + AR: reach a segment most educators can't</li>
        <li>You never touch their money, ever</li>
      </ul>
    </div>
  </div>
</section>

<!-- 60-DAY ROADMAP -->
<section class="section">
  <div class="sec-head"><div class="eyebrow">60-Day Roadmap</div></div>
  <div class="roadmap">
    <div class="wk">
      <div class="wk-lbl">Week 1</div>
      <div class="wk-title">Foundation & Warm Ignition</div>
      <ul class="wk-acts">
        <li>Fix LinkedIn headline + About</li>
        <li>Set up payment link + application form</li>
        <li>List every warm contact who might fit</li>
        <li>10 warm DMs/day · 1 post/day</li>
        <li>Announce free workshop</li>
      </ul>
      <div class="wk-target">Target: seed the pipeline</div>
    </div>
    <div class="wk">
      <div class="wk-lbl">Week 2</div>
      <div class="wk-title">Workshop + First Closes</div>
      <ul class="wk-acts">
        <li>Drive workshop registrations globally</li>
        <li>Keep 10 warm DMs/day</li>
        <li>Run live workshop (Day 10)</li>
        <li>Run fit calls from Week 1</li>
        <li>Seat 1–2 free beta clients</li>
      </ul>
      <div class="wk-target">$2,000–$4,000</div>
    </div>
    <div class="wk">
      <div class="wk-lbl">Week 3</div>
      <div class="wk-title">Deliver + Prove</div>
      <ul class="wk-acts">
        <li>Deliver founding clients</li>
        <li>Collect testimonial at recovery test</li>
        <li>Post 2 client wins (with permission)</li>
        <li>Keep 10 DMs/day</li>
      </ul>
      <div class="wk-target">$5,000–$7,000</div>
    </div>
    <div class="wk">
      <div class="wk-lbl">Week 4+</div>
      <div class="wk-title">Referrals + Repeat</div>
      <ul class="wk-acts">
        <li>Referral ask to every delivered client</li>
        <li>Announce workshop #2</li>
        <li>Push toward 10 total</li>
        <li>Raise to $2,000 after 5 testimonials</li>
      </ul>
      <div class="wk-target" style="color:var(--green)">$10,000 ✓</div>
    </div>
  </div>
</section>

<!-- DAILY ENGINE -->
<section class="section">
  <div class="sec-head"><div class="eyebrow">The Daily Engine</div></div>
  <div class="card">
    <h3 style="margin-bottom:16px">Rule of 100 , Every Weekday</h3>
    <div class="engine-row">
      <div><div class="eng-num" style="color:var(--bitcoin)">10</div><div class="eng-lbl">warm messages sent</div></div>
      <div><div class="eng-num" style="color:var(--cyan)">5</div><div class="eng-lbl">follow-ups sent</div></div>
      <div><div class="eng-num" style="color:var(--green)">1</div><div class="eng-lbl">post published</div></div>
    </div>
    <p style="font-size:.81rem;color:var(--muted);margin-top:18px;padding-top:16px;border-top:1px solid var(--border)">Track only 3 metrics weekly: <strong style="color:var(--text)">warm conversations started · fit calls booked · dollars collected.</strong> Contact priority: (1) anyone who engaged the DCA article → (2) people who've asked you about Bitcoin → (3) close professional network → (4) broader LinkedIn outreach. Warm first, always.</p>
  </div>
</section>

<!-- CONTENT ASSETS -->
<section class="section">
  <div class="sec-head"><div class="eyebrow">Content Assets</div></div>
  <div class="tab-bar" role="tablist">
    <button class="tab-btn active" onclick="sw('posts',this)">LinkedIn Posts</button>
    <button class="tab-btn" onclick="sw('dms',this)">DM Scripts</button>
    <button class="tab-btn" onclick="sw('call',this)">Discovery Call</button>
    <button class="tab-btn" onclick="sw('ws',this)">Workshop</button>
    <button class="tab-btn" onclick="sw('li',this)">LinkedIn Profile</button>
    <button class="tab-btn" onclick="sw('fb',this)">Facebook</button>
    <button class="tab-btn" onclick="sw('ig',this)">Instagram / TikTok</button>
    <button class="tab-btn" onclick="sw('li2',this)">LinkedIn Dubai</button>
  </div>
  <select class="tab-select" onchange="swSelect(this.value)">
    <option value="posts">LinkedIn Posts</option>
    <option value="dms">DM Scripts</option>
    <option value="call">Discovery Call</option>
    <option value="ws">Workshop</option>
    <option value="li">LinkedIn Profile</option>
    <option value="fb">Facebook</option>
    <option value="ig">Instagram / TikTok</option>
    <option value="li2">LinkedIn Dubai</option>
  </select>

  <!-- POSTS -->
  <div class="tab-panel active" id="tab-posts">

    <div class="post">
      <div class="post-meta"><span class="post-num">Post 01</span><span class="post-tag">Authority</span></div>
      <div class="post-hook">The most expensive Bitcoin mistake isn't buying the top.</div>
      <div class="post-body">Most people are obsessing over price.

The ones who get hurt aren't the ones who bought at $60K. They're the ones who:

→ Lost their seed phrase and lost everything
→ Left coins on an exchange that got hacked
→ Panic-sold at the bottom because they had no plan

I've spent 15 years securing enterprise systems. The security failures I see in Bitcoin aren't technical; they're human.

One number: 21 million. That's it, that's the supply cap. Time in the market beats timing the market. But only if you're holding keys you can actually recover.

Comment SAFE and I'll send you the recovery-test checklist I use with every client.</div>
      <div class="sc-hint-row"><span style="color:var(--muted);font-size:.74rem">Text post · no image · Tuesday or Thursday morning</span><button class="copy-btn" onclick="cp(this,\`The most expensive Bitcoin mistake isn't buying the top.\\n\\nMost people are obsessing over price.\\n\\nThe ones who get hurt aren't the ones who bought at $60K. They're the ones who:\\n\\n→ Lost their seed phrase and lost everything\\n→ Left coins on an exchange that got hacked\\n→ Panic-sold at the bottom because they had no plan\\n\\nI've spent 15 years securing enterprise systems. The security failures I see in Bitcoin aren't technical; they're human.\\n\\nOne number: 21 million. That's it, that's the supply cap. Time in the market beats timing the market. But only if you're holding keys you can actually recover.\\n\\nComment SAFE and I'll send you the recovery-test checklist I use with every client.\`)">Copy</button></div>
    </div>

    <div class="post">
      <div class="post-meta"><span class="post-num">Post 02</span><span class="post-tag">P2P Edge</span></div>
      <div class="post-hook">Most Bitcoin guides tell you to open an account on Coinbase. That advice doesn't work for half the world.</div>
      <div class="post-body">Coinbase isn't available in every country. Binance has been banned or restricted in several markets. Even where they are available, bank rails charge fees that quietly eat your DCA returns.

I've worked with clients across multiple jurisdictions and the first question I always ask isn't "which exchange?" It's "what's actually available to you, legally and practically, where you live?"

Sometimes the answer is a regulated exchange. Sometimes it's a P2P platform with proper escrow. Sometimes it's a combination of both.

The Bitcoin protocol doesn't care how you acquired it. The self-custody and security setup that follows is identical either way.

What matters: you get in safely, legally, with the lowest possible fee drag. Then hold it correctly.

That's what I help people figure out, wherever they are.

Where are you based and what's the acquisition option you've been looking at? Reply below.</div>
      <div class="sc-hint-row"><span style="color:var(--muted);font-size:.74rem">Your global differentiator post: addresses the objection before it's raised</span><button class="copy-btn" onclick="cp(this,\`Most Bitcoin guides tell you to open an account on Coinbase. That advice doesn't work for half the world.\\n\\nCoinbase isn't available in every country. Binance has been banned or restricted in several markets. Even where they are available, bank rails charge fees that quietly eat your DCA returns.\\n\\nI've worked with clients across multiple jurisdictions and the first question I always ask isn't \\"which exchange?\\" , it's \\"what's actually available to you, legally and practically, where you live?\\"\\n\\nSometimes the answer is a regulated exchange. Sometimes it's a P2P platform with proper escrow. Sometimes it's a combination of both.\\n\\nThe Bitcoin protocol doesn't care how you acquired it. The self-custody and security setup that follows is identical either way.\\n\\nWhat matters: you get in safely, legally, with the lowest possible fee drag. Then hold it correctly.\\n\\nThat's what I help people figure out, wherever they are.\\n\\nWhere are you based and what's the acquisition option you've been looking at? Reply below.\`)">Copy</button></div>
    </div>

    <div class="post">
      <div class="post-meta"><span class="post-num">Post 03</span><span class="post-tag">Education</span></div>
      <div class="post-hook">I don't predict Bitcoin's price. Here's what the 200-week moving average actually tells you.</div>
      <div class="post-body">Not where it's going. It can't do that.

What it does: average four years of price history into a single line: roughly one halving cycle. Bitcoin's slowest, most stable trend line.

What it tells you:
→ Is current price stretched far above the long-term trend (paying a premium)?
→ Or back near it (historically a discount zone)?

It doesn't predict tops or bottoms. It sets your behavioral baseline:
- Lighter buys when price is far above it
- Steadier buys as price approaches it
- Automate it so emotion is removed

In every past cycle, price has found major buying interest near this line. Not a guarantee. But it's the closest thing Bitcoin has to a long-term anchor.

DM me and I'll send the framework I built around it.</div>
      <div class="sc-hint-row"><span style="color:var(--muted);font-size:.74rem">Link to DCA article in first comment</span><button class="copy-btn" onclick="cp(this,\`I don't predict Bitcoin's price. Here's what the 200-week moving average actually tells you.\\n\\nNot where it's going. It can't do that.\\n\\nWhat it does: average four years of price history into a single line: roughly one halving cycle. Bitcoin's slowest, most stable trend line.\\n\\nWhat it tells you:\\n→ Is current price stretched far above the long-term trend (paying a premium)?\\n→ Or back near it (historically a discount zone)?\\n\\nIt doesn't predict tops or bottoms. It sets your behavioral baseline:\\n- Lighter buys when price is far above it\\n- Steadier buys as price approaches it\\n- Automate it so emotion is removed\\n\\nIn every past cycle, price has found major buying interest near this line. Not a guarantee. But it's the closest thing Bitcoin has to a long-term anchor.\\n\\nDM me and I'll send the framework I built around it.\`)">Copy</button></div>
    </div>

    <div class="post">
      <div class="post-meta"><span class="post-num">Post 04</span><span class="post-tag">Credibility</span></div>
      <div class="post-hook">I secure enterprise systems for a living. Here's how I'd set up Bitcoin for my own mother.</div>
      <div class="post-body">Not a trading strategy. A storage strategy.

1. Emergency fund first. 3–6 months expenses. No high-interest debt. Non-negotiable.
2. The right acquisition path for her country. Not the same answer everywhere. Regulated exchange where available. P2P with proper escrow where it isn't. Always the lowest-fee, legally sound route.
3. Security lockdown before the first buy. App-based 2FA (not SMS). Dedicated email. Withdrawal whitelist to her hardware wallet address only.
4. A hardware wallet. Physical, air-gapped, never touches the internet.
5. The backup. Seed phrase written on paper. Two copies. Two locations. Never photographed. Never typed anywhere.
6. The recovery test. Before any significant amount moves to self-custody, she wipes the device and recovers from seed. Proves she actually owns the coins.
7. Small recurring buys. Income-matched. Automated. Price checked weekly at most.

Most people never do step 6, which means they don't actually know if they own what they think they own.

Happy to walk through any of these in the comments.</div>
      <div class="sc-hint-row"><span style="color:var(--muted);font-size:.74rem">Strongest authority post: run 4th after context is built</span><button class="copy-btn" onclick="cp(this,\`I secure enterprise systems for a living. Here's how I'd set up Bitcoin for my own mother.\\n\\nNot a trading strategy. A storage strategy.\\n\\n1. Emergency fund first. 3–6 months expenses. No high-interest debt. Non-negotiable.\\n2. The right acquisition path for her country. Not the same answer everywhere. Regulated exchange where available. P2P with proper escrow where it isn't. Always the lowest-fee, legally sound route.\\n3. Security lockdown before the first buy. App-based 2FA (not SMS). Dedicated email. Withdrawal whitelist to her hardware wallet address only.\\n4. A hardware wallet. Physical, air-gapped, never touches the internet.\\n5. The backup. Seed phrase written on paper. Two copies. Two locations. Never photographed. Never typed anywhere.\\n6. The recovery test. Before any significant amount moves to self-custody, she wipes the device and recovers from seed. Proves she actually owns the coins.\\n7. Small recurring buys. Income-matched. Automated. Price checked weekly at most.\\n\\nMost people never do step 6, which means they don't actually know if they own what they think they own.\\n\\nHappy to walk through any of these in the comments.\`)">Copy</button></div>
    </div>

    <div class="post">
      <div class="post-meta"><span class="post-num">Post 05</span><span class="post-tag">Direct Offer</span></div>
      <div class="post-hook">I'm taking 10 founding clients for the Bitcoin Paycheck Plan, from anywhere in the world.</div>
      <div class="post-body">Here's what it is and who it's for.

What it is: a one-week, done-with-you Bitcoin savings setup. Not a course. I work with you personally to set up a secure, self-custodied savings plan matched to your income, wherever you live.

What we do together:
→ Find the right acquisition path for your country: regulated exchange or P2P, whichever is safer, cheaper, and legally sound where you are
→ Lock down your account security the right way
→ Set up an income-matched DCA plan
→ Hardware wallet setup + live recovery test so you know you actually own what you own
→ Your written behavioral playbook so you don't panic when Bitcoin drops 40%

Who it's for: professionals and business owners who believe in Bitcoin long-term but don't trust themselves to set it up correctly. English or Arabic. Any country.

Who it's not for: traders, people wanting price predictions, anyone with high-interest debt or no emergency fund.

Founding price: $1,000. 10 spots. I verify every setup personally.

What I never do: touch your money, hold your keys, or give personalized financial advice.

Fit call link in my profile. 30 minutes, free, no pressure.</div>
      <div class="sc-hint-row"><span style="color:var(--muted);font-size:.74rem">Run Week 2 after the first 3 posts have landed · pin to profile</span><button class="copy-btn" onclick="cp(this,\`I'm taking 10 founding clients for the Bitcoin Paycheck Plan, from anywhere in the world.\\n\\nHere's what it is and who it's for.\\n\\nWhat it is: a one-week, done-with-you Bitcoin savings setup. Not a course. I work with you personally to set up a secure, self-custodied savings plan matched to your income, wherever you live.\\n\\nWhat we do together:\\n→ Find the right acquisition path for your country: regulated exchange or P2P, whichever is safer, cheaper, and legally sound where you are\\n→ Lock down your account security the right way\\n→ Set up an income-matched DCA plan\\n→ Hardware wallet setup + live recovery test so you know you actually own what you own\\n→ Your written behavioral playbook so you don't panic when Bitcoin drops 40%\\n\\nWho it's for: professionals and business owners who believe in Bitcoin long-term but don't trust themselves to set it up correctly. English or Arabic. Any country.\\n\\nWho it's not for: traders, people wanting price predictions, anyone with high-interest debt or no emergency fund.\\n\\nFounding price: $1,000. 10 spots. I verify every setup personally.\\n\\nWhat I never do: touch your money, hold your keys, or give personalized financial advice.\\n\\nFit call link in my profile. 30 minutes, free, no pressure.\`)">Copy</button></div>
    </div>

  </div>

  <!-- DM SCRIPTS -->
  <div class="tab-panel" id="tab-dms">

    <div class="sc">
      <div class="sc-head"><span class="sc-lbl">Warm Invite: LinkedIn / WhatsApp</span><button class="copy-btn" onclick="cp(this,\`Hi [Name], quick one. I've started helping people set up a proper, secure Bitcoin savings plan , the safe self-custody way, not trading or hype. Works in any country, regulated exchange or P2P depending on where you are.\\n\\nGiven my security background it's what people keep asking me about, so I'm doing it properly now with 10 founding clients. Not sure if it's relevant to you, but if you've ever thought about getting into Bitcoin and want to do it right, happy to send details or jump on a free call. No pressure either way.\`)">Copy</button></div>
      <div class="sc-text">Hi [Name], quick one. I've started helping people set up a proper, secure Bitcoin savings plan , the safe self-custody way, not trading or hype. Works in any country, regulated exchange or P2P depending on where you are.

Given my security background it's what people keep asking me about, so I'm doing it properly now with 10 founding clients. Not sure if it's relevant to you, but if you've ever thought about getting into Bitcoin and want to do it right, happy to send details or jump on a free call. No pressure either way.</div>
    </div>

    <div class="sc">
      <div class="sc-head"><span class="sc-lbl">Workshop Invite: WhatsApp / Email</span><button class="copy-btn" onclick="cp(this,\`Hey [Name], I'm running a free 30-min workshop on [date]: how to start saving in Bitcoin safely: finding the right way to buy in your country, locking down security, and holding your own coins without losing them. No trading, no predictions. Works wherever you are.\\n\\nHere's the link: [link]. Feel free to share with anyone who'd find it useful.\`)">Copy</button></div>
      <div class="sc-text">Hey [Name], I'm running a free 30-min workshop on [date]: how to start saving in Bitcoin safely: finding the right way to buy in your country, locking down security, and holding your own coins without losing them. No trading, no predictions. Works wherever you are.

Here's the link: [link]. Feel free to share with anyone who'd find it useful.</div>
    </div>

    <div class="sc">
      <div class="sc-head"><span class="sc-lbl">Follow-Up: Interested</span><button class="copy-btn" onclick="cp(this,\`Great, here's the application link (2 min): [typeform link]\\n\\nAnd a couple of times to talk: [cal link]\\n\\nLook forward to it.\`)">Copy</button></div>
      <div class="sc-text">Great, here's the application link (2 min): [typeform link]

And a couple of times to talk: [cal link]

Look forward to it.</div>
    </div>

    <div class="sc">
      <div class="sc-head"><span class="sc-lbl">Follow-Up: Hesitant</span><button class="copy-btn" onclick="cp(this,\`Totally fair. What's the main thing making you unsure: the timing, the price, or whether it works for your country? Happy to talk it through, no pressure.\`)">Copy</button></div>
      <div class="sc-text">Totally fair. What's the main thing making you unsure: the timing, the price, or whether it works for your country? Happy to talk it through, no pressure.</div>
    </div>

    <div class="sc">
      <div class="sc-head"><span class="sc-lbl">Follow-Up: No Response (3–5 days later)</span><button class="copy-btn" onclick="cp(this,\`Hey [Name], just floating this back up in case it got buried. Still happy to send details or answer anything. If it's not the right time, no worries at all.\`)">Copy</button></div>
      <div class="sc-text">Hey [Name], just floating this back up in case it got buried. Still happy to send details or answer anything. If it's not the right time, no worries at all.</div>
    </div>

    <div class="sc">
      <div class="sc-head"><span class="sc-lbl">Follow-Up: "I need to think about it"</span><button class="copy-btn" onclick="cp(this,\`Of course, it's your money, you should think about it. Can I ask what specifically you want to think through? Sometimes it's a question I can answer in 30 seconds.\`)">Copy</button></div>
      <div class="sc-text">Of course, it's your money, you should think about it. Can I ask what specifically you want to think through? Sometimes it's a question I can answer in 30 seconds.</div>
    </div>

    <div class="sc" style="border-color:var(--cyan-bd);background:var(--cyan-bg)">
      <div class="sc-head"><span class="sc-lbl" style="color:var(--cyan)">Referral Ask: After Delivery (peak satisfaction)</span><button class="copy-btn" onclick="cp(this,\`Really glad you're set up and sleeping easier. Quick favor: who's one person you know who's been meaning to get into Bitcoin but hasn't done it safely? I've got a couple of founding spots left and I'd rather they came from someone you trust.\`)">Copy</button></div>
      <div class="sc-text">Really glad you're set up and sleeping easier. Quick favor: who's one person you know who's been meaning to get into Bitcoin but hasn't done it safely? I've got a couple of founding spots left and I'd rather they came from someone you trust.</div>
      <div class="sc-hint">Ask the moment they complete their recovery test: that's peak satisfaction, peak trust.</div>
    </div>

  </div>

  <!-- DISCOVERY CALL -->
  <div class="tab-panel" id="tab-call">
    <div class="card" style="margin-bottom:18px">
      <h3 style="margin-bottom:4px">Discovery Call Structure</h3>
      <p style="font-size:.82rem;color:var(--muted)">30–40 minutes. Stop talking at step 7. Let them answer.</p>
    </div>
    <div class="steps">
      <div class="step"><div class="step-line"></div><div class="step-n">1</div><div class="step-body"><div class="step-q">"Tell me where you're at with Bitcoin right now."</div><div class="step-note">Let them talk. You're diagnosing, not pitching.</div></div></div>
      <div class="step"><div class="step-line"></div><div class="step-n">2</div><div class="step-body"><div class="step-q">"What are you actually worried about?"</div><div class="step-note">Surface the specific fear , hacked, lost keys, panic sell, wrong exchange, can't access in my country. Name it back exactly.</div></div></div>
      <div class="step"><div class="step-line"></div><div class="step-n">3</div><div class="step-body"><div class="step-q">"What do you want to have happen?"</div><div class="step-note">Their desired outcome in their words. You'll use these exact words when you close.</div></div></div>
      <div class="step"><div class="step-line"></div><div class="step-n">4</div><div class="step-body"><div class="step-q">"Do you have 3–6 months of emergency savings and no high-interest debt?"</div><div class="step-note">Ethical gate. If no: don't sell to them. Tell them honestly.</div></div></div>
      <div class="step"><div class="step-line"></div><div class="step-n">5</div><div class="step-body"><div class="step-q">Reflect back their fear and desired outcome.</div><div class="step-note">"So what I'm hearing is: you want to [outcome], but right now you're blocked by [fear]. Is that right?"</div></div></div>
      <div class="step"><div class="step-line"></div><div class="step-n">6</div><div class="step-body"><div class="step-q">"Here's exactly what we'd do together." (Walk the deliverables, tie to their country.)</div><div class="step-note">Specifically name whether their country is a regulated-exchange or P2P scenario. This personalisation lands hard , it shows you've already thought about their situation.</div></div></div>
      <div class="step"><div class="step-n" style="background:var(--btc-bg);color:var(--bitcoin);border-color:var(--btc-bd)">7</div><div class="step-body"><div class="step-q" style="color:var(--bitcoin)">"It's $1,000. I take 10 founding clients. Here's the guarantee. Want to go ahead?" Then stop.</div><div class="step-note">State price. State guarantee. Ask. Wait. The next person who speaks is the one who moves.</div></div></div>
    </div>
    <div class="sc" style="margin-top:16px">
      <div class="sc-head"><span class="sc-lbl">Closing Script</span><button class="copy-btn" onclick="cp(this,\`I'm not going to pressure you. This only works if you actually want to do it. What we'd do is [recap their outcome in their words]. It's $1,000, it's one guided week, and you'll walk away with a live, secure, tested setup; or I keep working with you until you do. Do you want one of the founding spots?\`)">Copy</button></div>
      <div class="sc-text">"I'm not going to pressure you. This only works if you actually want to do it. What we'd do is [recap their outcome in their words]. It's $1,000, it's one guided week, and you'll walk away with a live, secure, tested setup; or I keep working with you until you do. Do you want one of the founding spots?"</div>
    </div>
  </div>

  <!-- WORKSHOP -->
  <div class="tab-panel" id="tab-ws">
    <div class="card" style="margin-bottom:16px">
      <div class="eyebrow" style="color:var(--bitcoin);margin-bottom:6px">Workshop · 60–75 min · Free · Zoom</div>
      <h2 style="font-size:1.1rem">"How to Start Saving in Bitcoin, Safely: the setup, the security, and the no-panic plan."</h2>
      <p style="font-size:.82rem;color:var(--muted);margin-top:8px">Record it. Repurpose clips as posts. End with the founding-client invite. Open to any country. Make that explicit at the start.</p>
    </div>
    <div class="ws-step"><div class="ws-n">01</div><div><div class="ws-title">Does Bitcoin fit your situation right now?</div><div class="ws-desc">Emergency fund check. Debt check. Cash flow baseline. Why this comes before any buy. You'll turn some people away; say it out loud, it builds trust immediately.</div></div></div>
    <div class="ws-step"><div class="ws-n">02</div><div><div class="ws-title">Finding the right way to buy in your country</div><div class="ws-desc">Not every country has the same options. Regulated exchanges, P2P platforms, hybrid approaches. What to look for: legality, escrow safety, fee structure, KYC requirements. This is where your global edge shows.</div></div></div>
    <div class="ws-step"><div class="ws-n">03</div><div><div class="ws-title">The 3 security mistakes that lose people everything</div><div class="ws-desc">SMS 2FA. Digital seed storage. Not testing recovery. Each illustrated with a real incident. Lean on your security background , this is your strongest section.</div></div></div>
    <div class="ws-step"><div class="ws-n">04</div><div><div class="ws-title">DCA and the 200-week guardrail</div><div class="ws-desc">What the 200W MA actually means (and can't do). Income-matched DCA zones. Why you automate and stop checking price. The panic script.</div></div></div>
    <div class="ws-step"><div class="ws-n">05</div><div><div class="ws-title">Self-custody and why you must test recovery</div><div class="ws-desc">Hardware vs software wallets. The seed phrase , what it is, why you never photograph it. The recovery test , what it is, how to do it, why it's the most important thing you'll do.</div></div></div>
    <div class="ws-step" style="border-left-color:var(--bitcoin)"><div class="ws-n" style="color:var(--bitcoin)">06</div><div><div class="ws-title" style="color:var(--bitcoin)">Founding-client invite + Q&A</div><div class="ws-desc">"I'm taking 10 founding clients to do this with them personally , one week, $1,000, fully remote, any country. Fit call link is in the chat." Then open Q&A.</div></div></div>
  </div>

  <!-- LINKEDIN PROFILE -->
  <div class="tab-panel" id="tab-li">
    <div class="sc">
      <div class="sc-head"><span class="sc-lbl">LinkedIn Headline</span><button class="copy-btn" onclick="cp(this,\`Cybersecurity & Blockchain Advisor | Helping professionals worldwide set up a secure, long-term Bitcoin savings plan: exchange or P2P, any country | Founder, Zero Bytes\`)">Copy</button></div>
      <div class="sc-text">Cybersecurity & Blockchain Advisor | Helping professionals worldwide set up a secure, long-term Bitcoin savings plan: exchange or P2P, any country | Founder, Zero Bytes</div>
      <div class="sc-hint">Replace "AI Automation Engineer | Backend Developer" into one identity. "Worldwide" and "any country" signal immediately that you're not geographically limited.</div>
    </div>
    <div class="sc" style="margin-top:10px">
      <div class="sc-head"><span class="sc-lbl">LinkedIn About: Opening</span><button class="copy-btn" onclick="cp(this,\`I've spent 15+ years securing enterprise and fintech systems, and I built a Bitcoin wallet myself. Now I help professionals worldwide do one specific thing: set up a long-term Bitcoin savings plan the safe way.\\n\\nNot trading. Not price predictions. Not managing your money. A calm, secure process: find the right way to buy in your country (regulated exchange or P2P , they're not the same answer everywhere), lock down your accounts, set up recurring buys that fit your income, and , the part most people get catastrophically wrong , hold your own Bitcoin in self-custody and test that you can actually recover it.\\n\\nI've worked with clients in countries where major exchanges don't operate. P2P experience means the same quality setup is available regardless of where you live or what your local options look like.\\n\\nIf you believe in Bitcoin long-term but you're scared of getting hacked, losing your keys, or panic-selling at the wrong time , that's the whole reason I do this.\\n\\nEducation and implementation only. Never personalized financial, tax, or legal advice.\\nFree 30-min fit call: cal.com/djobs/bitcoin-plan\`)">Copy</button></div>
      <div class="sc-text">I've spent 15+ years securing enterprise and fintech systems, and I built a Bitcoin wallet myself. Now I help professionals worldwide do one specific thing: set up a long-term Bitcoin savings plan the safe way.

Not trading. Not price predictions. Not managing your money. A calm, secure process: find the right way to buy in your country (regulated exchange or P2P , they're not the same answer everywhere), lock down your accounts, set up recurring buys that fit your income, and , the part most people get catastrophically wrong , hold your own Bitcoin in self-custody and test that you can actually recover it.

I've worked with clients in countries where major exchanges don't operate. P2P experience means the same quality setup is available regardless of where you live or what your local options look like.

If you believe in Bitcoin long-term but you're scared of getting hacked, losing your keys, or panic-selling at the wrong time , that's the whole reason I do this.

Education and implementation only. Never personalized financial, tax, or legal advice.
Free 30-min fit call: cal.com/djobs/bitcoin-plan</div>
    </div>
  </div>

  <!-- FACEBOOK -->
  <div class="tab-panel" id="tab-fb">
    <div class="card" style="margin-bottom:16px">
      <div class="eyebrow" style="color:var(--bitcoin);margin-bottom:6px">Facebook — Sudanese Network</div>
      <p style="font-size:.82rem;color:var(--muted)">Targeting Sudanese friends who've followed Ahmed for 5+ years. Emotional, personal, cultural. Sudanese Arabic dialect. CTA: كلمني ١٥ دقيقة نشوف إذا ده مناسبك</p>
    </div>

    <div class="post">
      <div class="post-meta"><span class="post-num">Post 01</span><span class="post-tag">The Night it Started</span></div>
      <div class="post-hook" dir="rtl" style="font-family:Tahoma,Arial,sans-serif;font-size:1.05rem">والله يا ناس...</div>
      <div class="post-body" dir="rtl" style="font-family:Tahoma,Arial,sans-serif;line-height:2">والله يا ناس...

في ليلة ٨ اغسطس ٢٠١٨، ساعة ٣ الصبح، كنت شايل لابتوبي وبشتغل في موقع ويب لصاحبي.

٣ ليالي ما نمت فيهم.
الأجر؟ بتكوين.

ما فهمت زاتو شنو ده بالضبط. بس كنت محتاج الفلوس.

الجنيه السوداني كان ٢٦ للدولار في ساعتها.
اليوم؟ ٦٠٠٠.

والبتكوين ده؟ من ٦,٥٠٠ دولار لأكتر من ١٠٠,٠٠٠ دولار.

لو كنت عارف ساعتها اللي بعرفه اليوم...
تقدر تتخيل؟

#بتكوين #ثروة #سودان</div>
      <div class="sc-hint">📌 Post Tuesday evening. Image: dark background with "٨ اغسطس ٢٠١٨" in bitcoin orange + current BTC price.</div>
    </div>

    <div class="post">
      <div class="post-meta"><span class="post-num">Post 02</span><span class="post-tag">The GitHub Mistake</span></div>
      <div class="post-hook" dir="rtl" style="font-family:Tahoma,Arial,sans-serif;font-size:1.05rem">خليني أقولك شيء ما حكيته لحد قبل كده 😅</div>
      <div class="post-body" dir="rtl" style="font-family:Tahoma,Arial,sans-serif;line-height:2">خليني أقولك شيء ما حكيته لحد قبل كده 😅

في ٢٠٢١، وصلني الـ M1 الجديد.
والله حسيت إني أصبحت سوبرمان نسخة سودانية 😂

قلت في نفسي: ليه ما أحاول أكسر الـ SHA-256؟
(ما بتصدق بقدر؟ أنا زاتو ما صدقت)

فتحت GitHub، رفعت الكود...
ونشرت المفتاح الخاص تاعتي على الإنترنت للناس كلها.

المحفظة الأولى تاعتي — اللي جاتني كأجر ٣ ليالي شغل في ٢٠١٨ — راحت في نفس اليوم.

لسا عارف العنوان العام.
بس ما قادر أوصله.

ده الدرس الأغلى في حياتي.
وده بالظبط سبب الورشة تاعتي في دبي — عشان ما حد تاني يدفع نفس الثمن.

#بتكوين #أمان #تجربة</div>
      <div class="sc-hint">📌 Self-deprecating tone wins here. People share honest mistakes. End with the English line — it's the hook.</div>
    </div>

    <div class="post">
      <div class="post-meta"><span class="post-num">Post 03</span><span class="post-tag">The War</span></div>
      <div class="post-hook" dir="rtl" style="font-family:Tahoma,Arial,sans-serif;font-size:1.05rem">١٥ أبريل ٢٠٢٣.</div>
      <div class="post-body" dir="rtl" style="font-family:Tahoma,Arial,sans-serif;line-height:2">١٥ أبريل ٢٠٢٣.

اليوم ده ما حد منا هينساه.

لما الحرب بدأت، الأبناك وقفت، التطبيقات ما شتغلت، والناس بتجري.

أهل وأصحاب بيتصلوا بيا — مصر، الإمارات، إثيوبيا، السعودية، أوغندا، رواندا، كينيا، جنوب السودان، تشاد.

"أحمد، عندي فلوس في السودان. كيف أطلعها؟"

خليت ليهم نظام تحويل عبر البتكوين.

الرسوم تاعتي؟ ١-٢٪ بس.
مقارنة بـ:
↘ ويسترن يونيون: ٥٪
↘ سويفت: ٢.٥٪ + ٣-٥ أيام ما كانوا عندهم
↘ السوق السودا وقتها: ٥٪ ومافيه ضمانات

أنا كنت الأرخص، الأسرع، والأأمن.

فوق نص مليون دولار اتنقلوا لأسر سودانية في ١٠ دول.
كل تحويل وصل. في دقايق مش أيام.

كنت عندي أقل من ألف دولار أصول شخصية.
بس عندي المعرفة.

#بتكوين #سودان #حرب #تحويل</div>
      <div class="sc-hint">📌 Most powerful post. Run mid-week. No image needed — the words are enough. Allow time for comments before replying.</div>
    </div>

    <div class="post">
      <div class="post-meta"><span class="post-num">Post 04</span><span class="post-tag">The Numbers</span></div>
      <div class="post-hook" dir="rtl" style="font-family:Tahoma,Arial,sans-serif;font-size:1.05rem">ناس كتير بسألوني: "البتكوين ده حقيقي ولا نصب؟"</div>
      <div class="post-body" dir="rtl" style="font-family:Tahoma,Arial,sans-serif;line-height:2">ناس كتير بسألوني: "البتكوين ده حقيقي ولا نصب؟"

والله الإجابة في الأرقام — والأرقام ما بتكذب:

الجنيه السوداني:
↘ ٢٠١٨: ٢٦ جنيه للدولار
↘ أبريل ٢٠٢٣ (لما الحرب بدأت): ٦٠٠ جنيه
↘ اليوم: ٦,٠٠٠ جنيه

يعني الجنيه خسر ٩٩٪ من قيمته من ٢٠١٨.

البتكوين:
↗ ٢٠١٨: ٦,٥٠٠ دولار
↗ اليوم: أكتر من ١٠٠,٠٠٠ دولار

يعني ارتفع ١٥ مرة في نفس الفترة.

الناس اللي حتفظوا بجنيه سوداني: خسروا كل حاجة.
الناس اللي حتفظوا ببتكوين: ربحوا ١٥ ضعف.

ده مش نظرية.
ده حصل. ومازال بيحصل.

في ساعتها كنت تعمل شنو؟

#بتكوين #جنيه #اقتصاد #سودان</div>
      <div class="sc-hint">📌 Use a two-column graphic: SDG collapse on left (red), BTC growth on right (orange). High shareability.</div>
    </div>

    <div class="post">
      <div class="post-meta"><span class="post-num">Post 05</span><span class="post-tag">The Offer</span></div>
      <div class="post-hook" dir="rtl" style="font-family:Tahoma,Arial,sans-serif;font-size:1.05rem">بعد كل اللي فات — جاي وقت أتكلم بصراحة.</div>
      <div class="post-body" dir="rtl" style="font-family:Tahoma,Arial,sans-serif;line-height:2">بعد كل اللي فات — جاي وقت أتكلم بصراحة.

عندي ورشة عمل في دبي في سبتمبر.
يوم واحد. ٥ مقاعد بس.

بتخرج منها بـ:
✓ إعداد محفظة بتكوين كاملة ومختبرة
✓ خطة حفظ ثروة شخصية
✓ قدرة تسترد محفظتك لو حصل أي شيء — زي ما اختبرتها مع فرق أمن سيبراني متخصصة

السعر: ٥,٠٠٠ دولار
شاملة فندق فاخر يوم كامل في دبي.

وعندي ضمانين حقيقيين:
١. لو ما قدرت تسترد محفظتك بنهاية اليوم = فلوسك ترجعلك
٢. لو البتكوين ما عمل ٣ أضعاف في ٣ سنين = فلوسك ترجعلك

كلا الضمانين محتملين جداً.
بس الضمان موجود وموثق في العقد.

كلمني ١٥ دقيقة نشوف إذا ده مناسبك 👇

#دبي #بتكوين #ورشة #ثروة</div>
      <div class="sc-hint">📌 Pin this post. Run last. Direct and specific — no fluff. The story has already been told in posts 1–4.</div>
    </div>
  </div>

  <!-- INSTAGRAM / TIKTOK -->
  <div class="tab-panel" id="tab-ig">
    <div class="card" style="margin-bottom:16px">
      <div class="eyebrow" style="color:var(--cyan);margin-bottom:6px">Instagram / TikTok — Reels</div>
      <p style="font-size:.82rem;color:var(--muted)">Sudanese + MENA + international audience. Sudanese Arabic hook, English subtitles for international reach. DM CTA: "DM me the word <strong style="color:var(--text)">Dubai</strong>".</p>
    </div>

    <div class="sc">
      <div class="sc-head"><span class="sc-lbl">Reel 1 — "The Payment" (hook: 3 sec)</span></div>
      <div class="sc-text">HOOK (on screen, 0–3s):
"في ٢٠١٨ اتدفعت بتكوين مقابل موقع ويب"
[cut to: current BTC price counter ticking up to $100,000+]

VOICEOVER (Sudanese Arabic, EN subtitles):
"August 8, 2018. 3am. I finished a website someone ordered online. Three nights, no sleep. They paid me in Bitcoin — I didn't even know what it was. BTC was $6,500 that night."

[Text overlay: $6,500 → $100,000+]

"I still have the memory. I just wish I had the wallet."

CLOSE:
"DM me the word Dubai if you want to learn how to actually hold Bitcoin."

---
FORMAT NOTES:
- 30–45 seconds max
- Captions on every word (auto-gen + review)
- Trending audio OR dead silence for contrast
- No talking-head intro — number reveal IS the hook</div>
    </div>

    <div class="sc">
      <div class="sc-head"><span class="sc-lbl">Reel 2 — "The War" (emotional, no music)</span></div>
      <div class="sc-text">HOOK (text only, black screen):
"April 15, 2023. Sudan."

[slow cut to: map showing 10 countries highlighted]

VOICEOVER (Arabic + EN subtitles):
"The war started. Banks froze. Families were evacuating to Egypt, Ethiopia, UAE, Saudi, Uganda, Rwanda, Kenya, South Sudan, Chad."

"They needed money moved. Bitcoin didn't care about borders."

[Text: $500,000+ moved. 10 countries. 0 failures.]

"I had less than $1,000 in my own account."
"I charged nothing."

[Long pause — let it breathe]

"That's what Bitcoin is for."

CLOSE:
"DM me Dubai."

---
FORMAT NOTES:
- Dead silence works better than music here
- Keep pacing slow — emotional weight needs space
- No graphics or animations — raw is right</div>
    </div>

    <div class="sc">
      <div class="sc-head"><span class="sc-lbl">Reel 3 — "The Gap" (two-column visual)</span></div>
      <div class="sc-text">VISUAL: Split screen, no voiceover needed — text does the work.

LEFT (red): الجنيه السوداني / Sudanese Pound
2018: 26 SDG / $1
War start: 600 SDG / $1
Today: 6,000 SDG / $1
[arrow pointing DOWN 🔴]
"Lost 99.5% of USD value"

RIGHT (orange): Bitcoin
2018: $6,500
Today: $100,000+
[arrow pointing UP 🟠]
"15x in the same period"

VOICEOVER (last 5 seconds only):
"The difference between the two groups wasn't intelligence. It was information."

CLOSE: "DM me Dubai."

---
FORMAT NOTES:
- Numbers animate in one at a time
- Contrast is the story — let it land silently first
- High share potential in Sudanese diaspora groups</div>
    </div>

    <div class="sc">
      <div class="sc-head"><span class="sc-lbl">Reel 4 — "The Mistake" (self-deprecating)</span></div>
      <div class="sc-text">HOOK:
"I tried to break SHA-256 with my M1 Mac."
[emoji: 💀]

VOICEOVER (fast, funny energy):
"2021. Brand new MacBook M1 just arrived. I felt like a superhero. I thought — why not try to crack the algorithm that protects all of Bitcoin?"

"I wrote some code. I pushed it to GitHub."

[pause]

"...along with my Bitcoin private key."

[sound effect: error beep / record scratch]

"An automated bot emailed me 3 minutes later."
"'I noticed you pushed your private key to a public repo.'"

"My first Bitcoin wallet. Gone."

"I still know the public address. I can see the balance."
"I just can't touch it."

"That mistake is why I built a full-day workshop testing live wallet recovery — in front of you — before you leave the room."

CLOSE: "DM me Dubai."

---
FORMAT NOTES:
- Lean into the comedy — it's a great story
- The pivot to "that's why I built the workshop" is the landing
- English-first reel — broader reach</div>
    </div>

    <div class="sc">
      <div class="sc-head"><span class="sc-lbl">Reel 5 — "The Offer"</span></div>
      <div class="sc-text">HOOK (text on screen):
"5 spots. Dubai. September 2026. $5,000."

VOICEOVER:
"One full day. Luxury hotel in Dubai. You leave with a live Bitcoin wallet — tested, recovered, yours."

"We go through Lightning, Liquid, and mainchain Bitcoin. You personally complete the wallet recovery test in front of me. If you can't, I haven't done my job."

"The guarantee: if Bitcoin doesn't 3x in 3 years — money back. If you can't recover your wallet after the day — money back."

"Both are extremely unlikely. That's the point."

"5 spots. That's it."

[Text overlay: ZeroBytes cybersecurity team — reviewed & validated]

CLOSE: "DM me the word Dubai to find out if you're a fit."

---
FORMAT NOTES:
- Calm, confident delivery — not salesy
- Show the Dubai hotel aesthetic briefly (B-roll)
- Pin to profile after posting</div>
    </div>

    <div class="sc" style="border-color:var(--cyan-bd);background:var(--cyan-bg)">
      <div class="sc-head"><span class="sc-lbl" style="color:var(--cyan)">TikTok Additions</span></div>
      <div class="sc-text">POST ALL 5 REELS on TikTok too — same content, same captions.

ADDITIONAL TIKTOK FORMATS:

Reaction Videos:
- Stitch or Duet viral crypto content and add your real-world Sudan/Bitcoin perspective
- "Let me tell you why this person is right/wrong — from someone who moved $500K during a war"

DM Response Videos:
- When someone DMs "Dubai" → reply with a short video: "Here's exactly what happens on the day..."
- Pin your best DM responses as new videos — they perform well as social proof

Comment Hooks:
- Pin comment on every video: "DM me the word DUBAI for the full details"
- Reply to every comment in first hour — TikTok algorithm rewards engagement velocity

Trend Integration:
- Find trending sounds and use them with your strongest visual (The Gap numbers reel works with almost any trending audio)</div>
    </div>
  </div>

  <!-- LINKEDIN DUBAI WORKSHOP -->
  <div class="tab-panel" id="tab-li2">
    <div class="card" style="margin-bottom:16px">
      <div class="eyebrow" style="color:var(--green);margin-bottom:6px">LinkedIn — Dubai Workshop Campaign</div>
      <p style="font-size:.82rem;color:var(--muted)">English. Formal. Targeting $10k+/month professionals — time-poor, skeptical of crypto, interested in Bitcoin but haven't acted. International clients. CTA: Book a 20-min fit check call → cal.com/djobs</p>
    </div>

    <div class="post">
      <div class="post-meta"><span class="post-num">Post 01</span><span class="post-tag">Case Study</span></div>
      <div class="post-hook">In April 2023, I coordinated the transfer of $500,000+ in Bitcoin and stablecoin holdings for Sudanese families evacuating a war zone.</div>
      <div class="post-body">No bank access. Intermittent internet. Destinations across 10 countries — Egypt, Ethiopia, UAE, Saudi Arabia, Uganda, Rwanda, Kenya, South Sudan, Chad.

Every transfer cleared — in minutes, not days.

My fee: 1–2% on the conversion rate. Western Union was charging 5%. SWIFT was taking 2.5% and 3–5 business days that people in a war zone didn't have. The black market was at 5% with no guarantees and no recourse. Bitcoin self-custody knowledge, applied correctly, was the most competitive financial infrastructure available in that crisis.

I had less than $1,000 in personal assets at the time.

—

This is what Bitcoin self-custody actually means in practice.

Not price speculation. Not "number go up." The ability to move value across borders when every institutional channel has failed.

The families who had Bitcoin in self-custody moved their savings. The families who didn't — couldn't.

—

In September 2026, I'm running a one-day Bitcoin self-custody workshop in Dubai.

5 spots. $5,000. Luxury hotel, full day.

You'll complete a live wallet recovery test — across Lightning, Liquid, and mainchain Bitcoin — before you leave the room.

Guarantee: money back if Bitcoin doesn't 3x in 3 years, or if you can't recover your wallet after the workshop.

If this is relevant to you, book a 20-min fit check call: cal.com/djobs</div>
      <div class="sc-hint-row"><span style="color:var(--muted);font-size:.74rem">Strongest post — run first. No image. Let the numbers do the work.</span><button class="copy-btn" onclick="cp(this,\`In April 2023, I coordinated the transfer of $500,000+ in Bitcoin and stablecoin holdings for Sudanese families evacuating a war zone.\n\nNo bank access. Intermittent internet. Destinations across 10 countries — Egypt, Ethiopia, UAE, Saudi Arabia, Uganda, Rwanda, Kenya, South Sudan, Chad.\n\nEvery transfer cleared — in minutes, not days.\n\nMy fee: 1–2% on the conversion rate. Western Union was charging 5%. SWIFT was taking 2.5% and 3–5 business days that people in a war zone didn't have. The black market was at 5% with no guarantees and no recourse. Bitcoin self-custody knowledge, applied correctly, was the most competitive financial infrastructure available in that crisis.\n\nI had less than $1,000 in personal assets at the time.\n\n—\n\nThis is what Bitcoin self-custody actually means in practice.\n\nNot price speculation. Not "number go up." The ability to move value across borders when every institutional channel has failed.\n\nThe families who had Bitcoin in self-custody moved their savings. The families who didn't — couldn't.\n\n—\n\nIn September 2026, I'm running a one-day Bitcoin self-custody workshop in Dubai.\n\n5 spots. $5,000. Luxury hotel, full day.\n\nYou'll complete a live wallet recovery test — across Lightning, Liquid, and mainchain Bitcoin — before you leave the room.\n\nGuarantee: money back if Bitcoin doesn't 3x in 3 years, or if you can't recover your wallet after the workshop.\n\nIf this is relevant to you, book a 20-min fit check call: cal.com/djobs\`)">Copy</button></div>
    </div>

    <div class="post">
      <div class="post-meta"><span class="post-num">Post 02</span><span class="post-tag">The Numbers</span></div>
      <div class="post-hook">Two assets. Same starting year. Wildly different outcomes.</div>
      <div class="post-body">Sudanese Pound (SDG) vs Bitcoin — 2018 to today:

  Year        SDG/USD        BTC/USD
  2018        26             $6,500
  War (2023)  600            ~$30,000
  Today       6,000          $100,000+

People who held SDG lost 99.5% of their USD purchasing power.
People who held Bitcoin made 15x.

And in 2023, when Bitcoin became the only working payment rail out of Sudan, the fee differential told the same story: 1–2% via Bitcoin vs 5% via Western Union, settled in minutes vs 3–5 business days.

The difference wasn't intelligence. It wasn't timing.
It was knowing that one of those assets has a fixed supply of 21 million units and cannot be printed.

The other one can be — and was.

—

I'm not saying put all your money in Bitcoin.

I'm saying: if you're a professional earning in a currency that can be inflated or devalued, and you haven't at least understood Bitcoin self-custody — you're carrying a risk you may not have priced.

The workshop in Dubai this September is for people who want to close that gap. 5 spots. $5,000. 20-min fit call: cal.com/djobs</div>
      <div class="sc-hint-row"><span style="color:var(--muted);font-size:.74rem">Run second. The table format performs well on LinkedIn — visual contrast lands hard.</span><button class="copy-btn" onclick="cp(this,\`Two assets. Same starting year. Wildly different outcomes.\n\nSudanese Pound (SDG) vs Bitcoin — 2018 to today:\n\n  Year        SDG/USD        BTC/USD\n  2018        26             $6,500\n  War (2023)  600            ~$30,000\n  Today       6,000          $100,000+\n\nPeople who held SDG lost 99.5% of their USD purchasing power.\nPeople who held Bitcoin made 15x.\n\nAnd in 2023, when Bitcoin became the only working payment rail out of Sudan, the fee differential told the same story: 1–2% via Bitcoin vs 5% via Western Union, settled in minutes vs 3–5 business days.\n\nThe difference wasn't intelligence. It wasn't timing.\nIt was knowing that one of those assets has a fixed supply of 21 million units and cannot be printed.\n\nThe other one can be — and was.\n\n—\n\nI'm not saying put all your money in Bitcoin.\n\nI'm saying: if you're a professional earning in a currency that can be inflated or devalued, and you haven't at least understood Bitcoin self-custody — you're carrying a risk you may not have priced.\n\nThe workshop in Dubai this September is for people who want to close that gap. 5 spots. $5,000. 20-min fit call: cal.com/djobs\`)">Copy</button></div>
    </div>

    <div class="post">
      <div class="post-meta"><span class="post-num">Post 03</span><span class="post-tag">The Mistake</span></div>
      <div class="post-hook">In 2021, I accidentally pushed my Bitcoin private key to a public GitHub repository.</div>
      <div class="post-body">I was trying to break SHA-256 — the algorithm that secures all of Bitcoin — with my new M1 MacBook and ChatGPT.

I pushed my code. Three minutes later, an automated bot emailed me:
"I noticed you uploaded your private key to a public repo."

My first Bitcoin wallet. The one I received as payment for a website I built in 3 nights in August 2018, when BTC was $6,500.

Gone.

I still know the public address. I can see the balance on-chain.
I just can't access it.

"I still know that public address. I just can't touch it."

—

That mistake is the reason I built a workshop that tests full wallet recovery — live, in front of you — before you leave the room.

Not theory. Not slides about what you should do.
You physically perform the recovery. If you can't, we're not done.

September 2026. Dubai. 5 spots. $5,000.
Book a 20-min fit check call: cal.com/djobs</div>
      <div class="sc-hint-row"><span style="color:var(--muted);font-size:.74rem">High-performing format on LinkedIn — honest vulnerability + clear lesson. The English hook line is quotable.</span><button class="copy-btn" onclick="cp(this,\`In 2021, I accidentally pushed my Bitcoin private key to a public GitHub repository.\n\nI was trying to break SHA-256 — the algorithm that secures all of Bitcoin — with my new M1 MacBook and ChatGPT.\n\nI pushed my code. Three minutes later, an automated bot emailed me:\n"I noticed you uploaded your private key to a public repo."\n\nMy first Bitcoin wallet. The one I received as payment for a website I built in 3 nights in August 2018, when BTC was $6,500.\n\nGone.\n\nI still know the public address. I can see the balance on-chain.\nI just can't access it.\n\n"I still know that public address. I just can't touch it."\n\n—\n\nThat mistake is the reason I built a workshop that tests full wallet recovery — live, in front of you — before you leave the room.\n\nNot theory. Not slides about what you should do.\nYou physically perform the recovery. If you can't, we're not done.\n\nSeptember 2026. Dubai. 5 spots. $5,000.\nBook a 20-min fit check call: cal.com/djobs\`)">Copy</button></div>
    </div>

    <div class="post">
      <div class="post-meta"><span class="post-num">Post 04</span><span class="post-tag">The Guarantee</span></div>
      <div class="post-hook">Money back if Bitcoin doesn't 3x in 3 years. Money back if you can't recover your wallet after the workshop.</div>
      <div class="post-body">Both are extremely unlikely.

That's the point.

—

Most "Bitcoin education" sells you a course with no skin in the game. Watch 40 hours of video, then figure it out yourself.

This is different.

You're in a room with me for a full day. We go through Lightning, Liquid, and mainchain Bitcoin. You set up a live wallet. You perform a complete recovery test — wipe the device, restore from seed, confirm the balance.

If you can't do that by the end of the day, I haven't done my job.

The guarantee covers both outcomes:
→ Bitcoin doesn't 3x in 3 years from the workshop date: full refund
→ You can't independently recover your wallet after the workshop: full refund

ZeroBytes cybersecurity team has reviewed the curriculum and methodology.

—

I'm not selling confidence. I'm selling a tested result.

September 2026. Dubai. 5 spots. $5,000.
20-min fit check call: cal.com/djobs</div>
      <div class="sc-hint-row"><span style="color:var(--muted);font-size:.74rem">Run fourth. The guarantee is the objection-handler. Post after the story posts have built context.</span><button class="copy-btn" onclick="cp(this,\`Money back if Bitcoin doesn't 3x in 3 years. Money back if you can't recover your wallet after the workshop.\n\nBoth are extremely unlikely.\n\nThat's the point.\n\n—\n\nMost "Bitcoin education" sells you a course with no skin in the game. Watch 40 hours of video, then figure it out yourself.\n\nThis is different.\n\nYou're in a room with me for a full day. We go through Lightning, Liquid, and mainchain Bitcoin. You set up a live wallet. You perform a complete recovery test — wipe the device, restore from seed, confirm the balance.\n\nIf you can't do that by the end of the day, I haven't done my job.\n\nThe guarantee covers both outcomes:\n→ Bitcoin doesn't 3x in 3 years from the workshop date: full refund\n→ You can't independently recover your wallet after the workshop: full refund\n\nZeroBytes cybersecurity team has reviewed the curriculum and methodology.\n\n—\n\nI'm not selling confidence. I'm selling a tested result.\n\nSeptember 2026. Dubai. 5 spots. $5,000.\n20-min fit check call: cal.com/djobs\`)">Copy</button></div>
    </div>

    <div class="post">
      <div class="post-meta"><span class="post-num">Post 05</span><span class="post-tag">5 Spots — Closing</span></div>
      <div class="post-hook">5 spots. Dubai. September 2026. $5,000. This is the closing post.</div>
      <div class="post-body">Here is exactly what you get:

→ One full day at a luxury hotel in Dubai (day-use included)
→ Live Bitcoin wallet setup across Lightning, Liquid, and mainchain
→ A physical wallet recovery test — completed in front of me, not described in a slide deck
→ A DCA framework matched to your income and risk profile
→ Validation from ZeroBytes cybersecurity team on the methodology

Here is the guarantee:
→ Bitcoin doesn't 3x in 3 years: money back
→ You can't recover your wallet after the workshop: money back

Here is who this is for:
→ Professionals earning $10k+/month who've been meaning to understand Bitcoin seriously
→ People who've read enough to be interested, but not enough to act
→ Anyone who's worried about doing it wrong more than they're worried about missing it

Here is who this is not for:
→ Traders, speculators, altcoin investors
→ Anyone wanting price predictions or investment advice
→ People without an emergency fund or with high-interest debt

5 spots. That's a deliberate limit. I verify each setup personally.

If you're reading this and thinking "that might be me" — book a 20-min fit check call.
No obligation. No sales pressure. We find out together if it's a fit.

cal.com/djobs</div>
      <div class="sc-hint-row"><span style="color:var(--muted);font-size:.74rem">Run last. Pin to profile. Direct and specific — the story has already been told.</span><button class="copy-btn" onclick="cp(this,\`5 spots. Dubai. September 2026. $5,000. This is the closing post.\n\nHere is exactly what you get:\n\n→ One full day at a luxury hotel in Dubai (day-use included)\n→ Live Bitcoin wallet setup across Lightning, Liquid, and mainchain\n→ A physical wallet recovery test — completed in front of me, not described in a slide deck\n→ A DCA framework matched to your income and risk profile\n→ Validation from ZeroBytes cybersecurity team on the methodology\n\nHere is the guarantee:\n→ Bitcoin doesn't 3x in 3 years: money back\n→ You can't recover your wallet after the workshop: money back\n\nHere is who this is for:\n→ Professionals earning $10k+/month who've been meaning to understand Bitcoin seriously\n→ People who've read enough to be interested, but not enough to act\n→ Anyone who's worried about doing it wrong more than they're worried about missing it\n\nHere is who this is not for:\n→ Traders, speculators, altcoin investors\n→ Anyone wanting price predictions or investment advice\n→ People without an emergency fund or with high-interest debt\n\n5 spots. That's a deliberate limit. I verify each setup personally.\n\nIf you're reading this and thinking "that might be me" — book a 20-min fit check call.\nNo obligation. No sales pressure. We find out together if it's a fit.\n\ncal.com/djobs\`)">Copy</button></div>
    </div>
  </div>

</section>

<!-- METRICS -->
<section class="section">
  <div class="sec-head"><div class="eyebrow">Weekly Metrics Tracker</div></div>
  <div class="tbl-wrap">
    <table>
      <thead><tr><th>Week</th><th>DMs Sent</th><th>Fit Calls Booked</th><th>Fit Calls Done</th><th>Closes</th><th>$ Collected</th></tr></thead>
      <tbody>
        <tr><td class="tc-wk">Week 1</td><td class="tc-num">50</td><td class="tc-num">5–8</td><td class="tc-num">,</td><td class="tc-num">0</td><td class="tc-num tc-tgt">$0 (seed)</td></tr>
        <tr><td class="tc-wk">Week 2</td><td class="tc-num">50</td><td class="tc-num">5–8</td><td class="tc-num">8–10</td><td class="tc-num">2–4</td><td class="tc-num tc-tgt">$2,000–$4,000</td></tr>
        <tr><td class="tc-wk">Week 3</td><td class="tc-num">50</td><td class="tc-num">5–8</td><td class="tc-num">8–10</td><td class="tc-num">2–3</td><td class="tc-num tc-tgt">$5,000–$7,000</td></tr>
        <tr><td class="tc-wk">Week 4+</td><td class="tc-num">50</td><td class="tc-num">3–5</td><td class="tc-num">5–8</td><td class="tc-num">2–3</td><td class="tc-num tc-done">$10,000 ✓</td></tr>
      </tbody>
    </table>
  </div>
  <p style="font-size:.78rem;color:var(--muted);margin-top:10px">Assumes 30–40% close rate on qualified fit calls. <strong style="color:var(--text)">30-day decision rule:</strong> ≥$3K collected → push hard and raise price. $0 but ≥5 fit calls booked → the offer or close is off, not the demand. &lt;3 fit calls in 30 days of real outreach → audience problem, broaden channel or segment.</p>
</section>

<!-- PRESSURE TEST -->
<section class="section">
  <div class="sec-head"><div class="eyebrow">Pressure Test , 10 Failure Modes</div></div>
  <div class="risk"><span class="risk-n">01</span><span class="risk-txt"><strong>Warm network too small or wrong-fit.</strong> Validate before anything else: will 10 warm contacts take a free fit call? If not, the campaign doesn't start , the audience does.</span></div>
  <div class="risk"><span class="risk-n">02</span><span class="risk-txt"><strong>Researching instead of outreaching.</strong> Building, optimising, planning , all displacement activity. The engine is 10 DMs a day. Nothing replaces it.</span></div>
  <div class="risk"><span class="risk-n">03</span><span class="risk-txt"><strong>Positioning stays split.</strong> "AI Automation Engineer" on LinkedIn + "Cybersecurity Advisor" on djobs.net = nobody trusts either. Fix it on Day 1 before a single DM goes out.</span></div>
  <div class="risk"><span class="risk-n">04</span><span class="risk-txt"><strong>Discounting the price.</strong> $200 attracts tyre-kickers and signals low value. $1,000 is already the founding price. Hold it.</span></div>
  <div class="risk"><span class="risk-n">05</span><span class="risk-txt"><strong>Refusing to seed free clients.</strong> Zero testimonials at launch is a real obstacle. Seat two trusted people free in Week 2 , for the proof only. It makes the next 8 sales possible.</span></div>
  <div class="risk"><span class="risk-n">06</span><span class="risk-txt"><strong>Slipping into advice or predictions.</strong> Any price call, any hint of managing accounts , regulatory and trust risk globally. Education and implementation only, every call, every time.</span></div>
  <div class="risk"><span class="risk-n">07</span><span class="risk-txt"><strong>Delivery too heavy.</strong> Each client = ~2.5 hrs of your time. If you're exceeding that, the offer is over-scoped. Streamline the template, not the client experience.</span></div>
  <div class="risk"><span class="risk-n">08</span><span class="risk-txt"><strong>Regulatory exposure not resolved per jurisdiction.</strong> "Global" means your clients sit under different legal frameworks. Have a clear disclaimer and understand your own UAE obligations (VARA/SCA/ADGM) before accepting paid clients.</span></div>
  <div class="risk"><span class="risk-n">09</span><span class="risk-txt"><strong>Chasing likes instead of conversations.</strong> A post with 200 likes and 0 DMs started is a vanity metric. The only number that matters is replies and DMs initiated.</span></div>
  <div class="risk"><span class="risk-n">10</span><span class="risk-txt"><strong>Quitting at Week 3.</strong> The first 15 "not now" responses are the nos you were always going to get. They are not a signal the offer is broken. Keep rolling.</span></div>
</section>

<hr class="div">
<p class="footer-note">Education and planning only , not licensed financial, tax, or legal advice. Clients are responsible for compliance with their own jurisdiction's laws. Resolve your UAE obligations (VARA/SCA/ADGM) with local counsel before accepting paid clients.</p>

</div>

<script>
// Label table cells for mobile stacked layout
(function(){
  document.querySelectorAll('.tbl-wrap table').forEach(function(tbl){
    var headers = Array.from(tbl.querySelectorAll('thead th')).map(function(th){ return th.textContent.trim(); });
    tbl.querySelectorAll('tbody tr').forEach(function(tr){
      tr.querySelectorAll('td').forEach(function(td, i){
        if(headers[i]) td.setAttribute('data-label', headers[i]);
      });
    });
  });
})();

function sw(id,btn){
  document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('tab-'+id).classList.add('active');
  btn.classList.add('active');
}
function swSelect(id){
  document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('tab-'+id).classList.add('active');
}
function cp(btn,text){
  const done=()=>{
    const o=btn.textContent;btn.textContent='Copied';btn.classList.add('ok');
    setTimeout(()=>{btn.textContent=o;btn.classList.remove('ok')},2000);
  };
  if(navigator.clipboard){navigator.clipboard.writeText(text).then(done).catch(()=>fb(text,btn,done))}
  else fb(text,btn,done);
}
function fb(text,btn,done){
  const t=document.createElement('textarea');t.value=text;
  Object.assign(t.style,{position:'fixed',opacity:'0'});
  document.body.appendChild(t);t.select();
  try{document.execCommand('copy');done()}catch(e){}
  document.body.removeChild(t);
}
</script>

</body>
</html>
`
