export const workshopPlaybookHtml = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Bitcoin Workshop — Ahmed's Playbook</title>
<style>
  :root {
    --bg: #08080d; --surface: #0f0f17; --card: #141420; --card2: #1a1a28;
    --border: rgba(255,255,255,0.07); --orange: #f7931a;
    --orange-soft: rgba(247,147,26,0.1); --orange-border: rgba(247,147,26,0.22);
    --text: #ffffff; --muted: rgba(255,255,255,0.55); --dim: rgba(255,255,255,0.25);
    --green: #00cc77; --green-soft: rgba(0,204,119,0.1); --green-border: rgba(0,204,119,0.25);
    --blue: #5b9cf6; --blue-soft: rgba(91,156,246,0.1);
    --purple: #a78bfa; --purple-soft: rgba(167,139,250,0.1); --red: #f87171;
  }
  @media (prefers-color-scheme: light) {
    :root {
      --bg: #f0ede8; --surface: #e8e4de; --card: #ffffff; --card2: #f5f2ee;
      --border: rgba(0,0,0,0.08); --text: #0d0d12;
      --muted: rgba(0,0,0,0.55); --dim: rgba(0,0,0,0.3);
    }
  }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: var(--bg); color: var(--text); line-height: 1.6; font-size: 14px; }
  .page-header { background: var(--surface); border-bottom: 1px solid var(--border); padding: 18px 28px; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 100; gap: 12px; flex-wrap: wrap; }
  .ph-left { display: flex; align-items: center; gap: 12px; }
  .private-badge { background: rgba(248,113,113,0.15); border: 1px solid rgba(248,113,113,0.3); color: var(--red); font-size: 10px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; padding: 4px 10px; border-radius: 20px; font-family: monospace; }
  .ph-title { font-size: 13px; font-weight: 700; color: var(--muted); }
  .tabs { display: flex; gap: 4px; background: var(--card); border-bottom: 1px solid var(--border); padding: 0 28px; }
  .tab { font-size: 12px; font-weight: 600; color: var(--dim); padding: 14px 16px; border-bottom: 2px solid transparent; cursor: pointer; white-space: nowrap; background: none; border-top: none; border-left: none; border-right: none; transition: color 0.15s, border-color 0.15s; }
  .tab.active { color: var(--orange); border-bottom-color: var(--orange); }
  .tab-content { display: none; }
  .tab-content.active { display: block; }
  /* Mobile tab select */
  .tab-select { display: none; }
  @media (max-width: 640px) {
    .tabs { display: none; }
    .tab-select {
      display: block; width: 100%; margin: 0;
      background: var(--card); border: none; border-bottom: 1px solid var(--border);
      color: var(--text); font-size: 14px; font-weight: 600; font-family: inherit;
      padding: 14px 16px; cursor: pointer; -webkit-appearance: none; appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23f7931a' stroke-width='1.8' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
      background-repeat: no-repeat; background-position: right 16px center;
      padding-right: 40px;
    }
  }
  .wrap { max-width: 900px; margin: 0 auto; padding: 32px 28px; }
  section { margin-bottom: 40px; }
  .section-title { font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--orange); margin-bottom: 16px; font-family: monospace; }
  h2 { font-size: 22px; font-weight: 800; letter-spacing: -0.02em; margin-bottom: 10px; }
  h3 { font-size: 15px; font-weight: 700; margin-bottom: 6px; }
  p { color: var(--muted); line-height: 1.75; margin-bottom: 10px; }
  p:last-child { margin-bottom: 0; }
  p strong { color: var(--text); font-weight: 700; }
  .card { background: var(--card); border: 1px solid var(--border); border-radius: 12px; padding: 20px; margin-bottom: 10px; }
  .card.green { border-color: var(--green-border); background: var(--green-soft); }
  .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
  .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
  @media (max-width: 600px) { .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; } }
  @media (max-width: 640px) {
    .page-header { padding: 14px 16px; }
    .tabs { padding: 0 12px; }
    .tab { padding: 12px 12px; font-size: 11px; }
    .wrap { padding: 22px 16px; }
    .card { padding: 16px; }
    h2 { font-size: 18px; }
    .kpi-val { font-size: 24px; }
    .agenda-row { grid-template-columns: 64px 1fr; gap: 8px; }
    .agenda-row > *:last-child { grid-column: 2; }
  }
  .kpi { background: var(--card); border: 1px solid var(--border); border-radius: 12px; padding: 20px; text-align: center; }
  .kpi-val { font-family: monospace; font-size: 28px; font-weight: 800; color: var(--orange); display: block; line-height: 1; margin-bottom: 8px; }
  .kpi-label { font-size: 11px; color: var(--dim); line-height: 1.4; }
  .funnel-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin: 16px 0; }
  @media (max-width: 560px) { .funnel-row { grid-template-columns: 1fr; } }
  .funnel-col { border-radius: 12px; padding: 18px; border: 1px solid var(--border); background: var(--card); }
  .funnel-col h4 { font-size: 13px; font-weight: 700; margin-bottom: 6px; }
  .funnel-col p { font-size: 12px; color: var(--dim); }
  .funnel-stage { font-size: 9px; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; font-family: monospace; margin-bottom: 8px; display: block; }
  .agenda-row { display: grid; grid-template-columns: 80px 1fr auto; gap: 12px; padding: 14px 0; border-bottom: 1px solid var(--border); align-items: start; }
  .agenda-row:last-child { border-bottom: none; }
  .a-time { font-family: monospace; font-size: 11px; font-weight: 700; color: var(--orange); padding-top: 2px; }
  .a-content h4 { font-size: 13px; font-weight: 700; margin-bottom: 3px; }
  .a-content p { font-size: 12px; color: var(--dim); margin: 0; }
  .a-tag { font-family: monospace; font-size: 9px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 3px 8px; border-radius: 6px; white-space: nowrap; flex-shrink: 0; }
  .a-tag.lecture { background: var(--blue-soft); color: var(--blue); border: 1px solid rgba(91,156,246,0.2); }
  .a-tag.hands { background: var(--orange-soft); color: var(--orange); border: 1px solid var(--orange-border); }
  .a-tag.live { background: rgba(248,113,113,0.12); color: var(--red); border: 1px solid rgba(248,113,113,0.25); }
  .a-tag.brk { background: var(--green-soft); color: var(--green); border: 1px solid var(--green-border); }
  .cal-week { margin-bottom: 24px; }
  .cal-week-header { display: flex; align-items: center; gap: 12px; margin-bottom: 10px; }
  .cal-week-label { font-family: monospace; font-size: 9px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--dim); background: var(--card); border: 1px solid var(--border); border-radius: 20px; padding: 4px 10px; white-space: nowrap; }
  .cal-week-goal { font-size: 12px; font-weight: 600; color: var(--muted); }
  .posts-row { display: flex; flex-direction: column; gap: 8px; }
  .post-item { background: var(--card); border: 1px solid var(--border); border-radius: 10px; padding: 14px 16px; display: grid; grid-template-columns: 70px 70px 1fr; gap: 12px; align-items: start; }
  @media (max-width: 640px) {
    .post-item { grid-template-columns: auto auto 1fr; gap: 8px; padding: 12px 14px; }
    .post-platform { font-size: 8px; padding: 3px 7px; }
  }
  .post-platform { font-family: monospace; font-size: 9px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 3px 8px; border-radius: 6px; text-align: center; }
  .post-platform.fb { background: rgba(59,130,246,0.15); color: #60a5fa; border: 1px solid rgba(59,130,246,0.25); }
  .post-platform.li { background: rgba(14,165,233,0.12); color: #38bdf8; border: 1px solid rgba(14,165,233,0.2); }
  .post-platform.ig { background: rgba(236,72,153,0.12); color: #f472b6; border: 1px solid rgba(236,72,153,0.2); }
  .post-platform.all { background: var(--orange-soft); color: var(--orange); border: 1px solid var(--orange-border); }
  .post-type { font-size: 10px; color: var(--dim); padding-top: 2px; font-style: italic; }
  .post-angle { font-size: 13px; font-weight: 600; color: var(--text); }
  .post-note { font-size: 11px; color: var(--dim); margin-top: 3px; }
  .milestone { display: flex; gap: 14px; align-items: flex-start; padding: 14px 0; border-bottom: 1px solid var(--border); }
  .milestone:last-child { border-bottom: none; }
  .m-date { font-family: monospace; font-size: 10px; font-weight: 700; color: var(--orange); min-width: 90px; padding-top: 2px; }
  .m-content h4 { font-size: 13px; font-weight: 700; margin-bottom: 3px; }
  .m-content p { font-size: 12px; color: var(--dim); margin: 0; }
  .econ-table { width: 100%; border-collapse: collapse; margin: 16px 0; }
  .econ-table th { font-family: monospace; font-size: 9px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--dim); font-weight: 600; text-align: left; padding: 10px 12px; border-bottom: 1px solid var(--border); }
  .econ-table td { padding: 12px; font-size: 13px; border-bottom: 1px solid var(--border); color: var(--muted); vertical-align: top; }
  .econ-table td:first-child { font-weight: 700; color: var(--text); }
  .econ-table td.val { font-family: monospace; font-weight: 700; color: var(--orange); }
  .econ-table tr.total td { background: var(--orange-soft); border-color: var(--orange-border); }
  .econ-table tr.total td.val { font-size: 16px; }
  .checklist { list-style: none; display: flex; flex-direction: column; gap: 8px; margin: 12px 0; }
  .checklist li { display: flex; gap: 10px; align-items: flex-start; font-size: 13px; color: var(--muted); line-height: 1.5; }
  .checklist li .cb { width: 16px; height: 16px; border-radius: 4px; border: 1px solid var(--border); flex-shrink: 0; margin-top: 1px; background: var(--card); }
  .platform-card { background: var(--card); border: 1px solid var(--border); border-radius: 12px; overflow: hidden; margin-bottom: 12px; }
  .platform-header { padding: 14px 18px; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; }
  .platform-header h4 { font-size: 14px; font-weight: 700; }
  .platform-meta { font-size: 11px; color: var(--dim); }
  .platform-body { padding: 16px 18px; }
  .platform-body p { font-size: 13px; }
  .tag-row { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 10px; }
  .tag { background: var(--card2); border: 1px solid var(--border); border-radius: 6px; padding: 3px 8px; font-size: 10px; font-weight: 600; color: var(--dim); }
  .callout { border-left: 3px solid var(--orange); background: var(--orange-soft); border-radius: 0 10px 10px 0; padding: 14px 18px; margin: 16px 0; font-size: 13px; color: var(--muted); }
  .callout strong { color: var(--orange); }
</style>
</head>
<body>

<div class="page-header">
  <div class="ph-left">
    <span class="private-badge">Private</span>
    <span class="ph-title">Bitcoin Workshop Playbook</span>
  </div>
  <span style="font-family:monospace;font-size:11px;color:var(--dim)">Aug 2026</span>
</div>

<div class="tabs">
  <button class="tab active" onclick="switchTab('overview')">Overview</button>
  <button class="tab" onclick="switchTab('funnel')">The funnel</button>
  <button class="tab" onclick="switchTab('agenda')">Workshop day</button>
  <button class="tab" onclick="switchTab('campaign')">60-day campaign</button>
  <button class="tab" onclick="switchTab('platforms')">Platforms</button>
  <button class="tab" onclick="switchTab('economics')">Economics</button>
</div>
<select class="tab-select" onchange="switchTabSelect(this.value)">
  <option value="overview">Overview</option>
  <option value="funnel">The funnel</option>
  <option value="agenda">Workshop day</option>
  <option value="campaign">60-day campaign</option>
  <option value="platforms">Platforms</option>
  <option value="economics">Economics</option>
</select>

<div id="tab-overview" class="tab-content active">
  <div class="wrap">
    <section>
      <div class="section-title">What this is</div>
      <h2>One day. 15-25 people. Dubai. September 2026.</h2>
      <p>This is a group workshop, not a 1:1 session. Everyone in the room has passed two prerequisite stages before paying: a 20-minute fit call (income check, situation check) and a Bitcoin Basics session (they know what Bitcoin is, how wallets work, what self-custody means). By the time they get to the workshop, you're not educating, you're building.</p>
    </section>
    <section>
      <div class="section-title">Key numbers</div>
      <div class="grid-4">
        <div class="kpi"><span class="kpi-val">15-25</span><span class="kpi-label">Seats per session</span></div>
        <div class="kpi"><span class="kpi-val">$5k</span><span class="kpi-label">Per seat</span></div>
        <div class="kpi"><span class="kpi-val">$125k</span><span class="kpi-label">Max revenue, full room</span></div>
        <div class="kpi"><span class="kpi-val">Aug 23</span><span class="kpi-label">ZeroBytes validation session</span></div>
      </div>
    </section>
    <section>
      <div class="section-title">Three-stage filter</div>
      <div class="funnel-row">
        <div class="funnel-col"><span class="funnel-stage" style="color:var(--blue)">Stage 1</span><h4>Fit call</h4><p>20 minutes. Income check, tech comfort, real reason to be there. Filters out speculators.</p></div>
        <div class="funnel-col"><span class="funnel-stage" style="color:var(--purple)">Stage 2</span><h4>Bitcoin Basics session</h4><p>Everyone arrives at the workshop with the same baseline. No one is asking what a seed phrase is on the day.</p></div>
        <div class="funnel-col" style="border-color:var(--orange-border);background:var(--orange-soft)"><span class="funnel-stage" style="color:var(--orange)">Stage 3</span><h4>Full-day workshop</h4><p>$5,000. Laptop, notebook, rough sense of their finances. They leave with a tested setup.</p></div>
      </div>
    </section>
    <section>
      <div class="section-title">Timeline</div>
      <div class="milestone"><div class="m-date">Aug 16, 2026</div><div class="m-content"><h4>Now</h4><p>Landing page live. Social campaign starting. Fit call booking open.</p></div></div>
      <div class="milestone"><div class="m-date">Aug 23, 2026</div><div class="m-content"><h4>ZeroBytes validation session</h4><p>Run the Bitcoin Basics format. Collect testimonials. Add social proof within 24 hours.</p></div></div>
      <div class="milestone"><div class="m-date">Aug 23 - Sep 5</div><div class="m-content"><h4>Fit calls running</h4><p>5 fit calls per day, 4 hours per day, 2 weeks. Goal: 15-25 qualified leads.</p></div></div>
      <div class="milestone"><div class="m-date">Sep 2026</div><div class="m-content"><h4>Workshop day</h4><p>Dubai. Full day. 15-25 people. Recovery test live. Guarantee signed.</p></div></div>
      <div class="milestone"><div class="m-date">Oct 2026</div><div class="m-content"><h4>Post-workshop</h4><p>Testimonials collected. Next cohort planning. Remote format evaluated for Q4.</p></div></div>
    </section>
  </div>
</div>

<div id="tab-funnel" class="tab-content">
  <div class="wrap">
    <section>
      <div class="section-title">Stage 1: Fit call</div>
      <h2>What you're checking for</h2>
      <p>The fit call is a filter, not a sales call. You're checking whether this person belongs in the room.</p>
      <div class="grid-2">
        <div class="card green"><h3 style="color:var(--green);margin-bottom:10px">Keep them</h3>
          <ul class="checklist">
            <li><span class="cb"></span>Stable income, meaningful savings to protect</li>
            <li><span class="cb"></span>Understands Bitcoin is not a get-rich scheme</li>
            <li><span class="cb"></span>In MENA or diaspora, has lived with currency risk</li>
            <li><span class="cb"></span>Time-poor, wants one structured session not YouTube</li>
            <li><span class="cb"></span>Willing to do the hands-on recovery test</li>
          </ul>
        </div>
        <div class="card" style="border-color:rgba(248,113,113,0.2);background:rgba(248,113,113,0.05)">
          <h3 style="color:var(--red);margin-bottom:10px">Decline politely</h3>
          <ul class="checklist">
            <li><span class="cb"></span>Looking for price predictions or trading signals</li>
            <li><span class="cb"></span>Wants to put in $100 and see what happens</li>
            <li><span class="cb"></span>Expects someone to manage their Bitcoin for them</li>
            <li><span class="cb"></span>Income is unstable or they're in financial difficulty</li>
          </ul>
        </div>
      </div>
      <div class="callout"><strong>Script tip:</strong> Open with "Tell me about your current financial setup and what made you book this call." Listen for 3 minutes before saying anything.</div>
    </section>
    <section>
      <div class="section-title">Stage 2: Bitcoin basics session</div>
      <h2>What they need to know before the workshop</h2>
      <p>The ZeroBytes format or equivalent. Goal: same baseline for everyone. Nobody asks "what is a seed phrase?" on the day.</p>
      <div class="card">
        <h3 style="margin-bottom:12px">Topics to cover</h3>
        <ul class="checklist">
          <li><span class="cb"></span>What Bitcoin actually is (not price, the technology)</li>
          <li><span class="cb"></span>Hot wallet vs cold storage</li>
          <li><span class="cb"></span>What self-custody means and why it matters</li>
          <li><span class="cb"></span>Seed phrases: what they are, why they live on paper</li>
          <li><span class="cb"></span>Lightning, Liquid, and mainchain: the difference</li>
          <li><span class="cb"></span>Basic OPSEC: what not to do online</li>
        </ul>
      </div>
      <p>The ZeroBytes session on August 23 is your test run. Collect testimonials immediately after and use them in the campaign.</p>
    </section>
    <section>
      <div class="section-title">Conversion math</div>
      <div class="grid-3">
        <div class="kpi"><span class="kpi-val">~40%</span><span class="kpi-label">Fit call to basics session (conservative)</span></div>
        <div class="kpi"><span class="kpi-val">~60%</span><span class="kpi-label">Basics session to workshop (they're committed)</span></div>
        <div class="kpi"><span class="kpi-val">~60-70</span><span class="kpi-label">Fit calls needed to fill 15-25 seats</span></div>
      </div>
    </section>
  </div>
</div>

<div id="tab-agenda" class="tab-content">
  <div class="wrap">
    <section>
      <div class="section-title">Workshop day</div>
      <h2>Hour by hour.</h2>
      <p>Everything before 3:30pm builds toward the live recovery test. That's what people pay for. The test is the proof.</p>
      <div style="margin-top:20px">
        <div class="agenda-row"><div class="a-time">9:00 AM</div><div class="a-content"><h4>Welcome and context</h4><p>Who's in the room. The one rule: everyone does the recovery test. Ahmed's story, 5 minutes max.</p></div><span class="a-tag lecture">Talk</span></div>
        <div class="agenda-row"><div class="a-time">9:30 AM</div><div class="a-content"><h4>Wallet architecture</h4><p>Cold storage, hot wallet, multi-sig. Ahmed walks through 3 real-world threat models.</p></div><span class="a-tag lecture">Talk</span></div>
        <div class="agenda-row"><div class="a-time">10:30 AM</div><div class="a-content"><h4>Coffee break</h4><p>15 minutes.</p></div><span class="a-tag brk">Break</span></div>
        <div class="agenda-row"><div class="a-time">10:45 AM</div><div class="a-content"><h4>Build your setup</h4><p>Everyone opens their laptop. Ahmed walks the room through building a wallet stack from scratch. By end: every person has a working wallet installed and configured.</p></div><span class="a-tag hands">Hands-on</span></div>
        <div class="agenda-row"><div class="a-time">12:30 PM</div><div class="a-content"><h4>Lunch</h4><p>Working lunch. Ahmed circulates for individual questions. People who got stuck can catch up.</p></div><span class="a-tag brk">Break</span></div>
        <div class="agenda-row"><div class="a-time">1:30 PM</div><div class="a-content"><h4>Conversion planning</h4><p>Which rails to use, at what intervals, how much. Ahmed works through 2-3 examples. Attendees draft their own plan in their notebook.</p></div><span class="a-tag hands">Hands-on</span></div>
        <div class="agenda-row"><div class="a-time">2:30 PM</div><div class="a-content"><h4>Self-custody under pressure</h4><p>Based on what actually happened in Sudan, April 2023. Internet down, apps gone, 48-hour windows. Real scenarios, not hypotheticals.</p></div><span class="a-tag lecture">Talk</span></div>
        <div class="agenda-row"><div class="a-time">3:15 PM</div><div class="a-content"><h4>Pre-test prep</h4><p>Everyone writes seed phrase in notebook. Confirms wallet has test Bitcoin. Ahmed explains exactly what's about to happen.</p></div><span class="a-tag hands">Hands-on</span></div>
        <div class="agenda-row"><div class="a-time">3:30 PM</div><div class="a-content"><h4>Live recovery test</h4><p>Everyone deletes their wallet. Recovers it from seed phrase across Lightning, Liquid, and mainchain. Ahmed available but does not intervene unless someone is completely stuck. Anyone who fails gets a full refund.</p></div><span class="a-tag live">Live test</span></div>
        <div class="agenda-row"><div class="a-time">4:30 PM</div><div class="a-content"><h4>Emergency exit protocol</h4><p>Moving Bitcoin across borders with minimal footprint. Travel ban, internet shutdown, confiscation risk scenarios. Based on 2023 evacuation experience.</p></div><span class="a-tag lecture">Talk</span></div>
        <div class="agenda-row"><div class="a-time">4:50 PM</div><div class="a-content"><h4>Wrap-up and Q&amp;A</h4><p>Open floor. Next steps per person. How to reach Ahmed post-workshop. Ask for testimonials.</p></div><span class="a-tag brk">Wrap</span></div>
      </div>
    </section>
    <section>
      <div class="section-title">Running it as a group</div>
      <div class="card"><p>The live recovery test was originally designed for 1:1. With 15-25 people, let faster attendees help slower ones during the test. This reduces pressure on Ahmed and builds real connections in the room. Assign one ZeroBytes team member as a room assistant for the day.</p></div>
    </section>
  </div>
</div>

<div id="tab-campaign" class="tab-content">
  <div class="wrap">
    <section>
      <div class="section-title">60-day content campaign</div>
      <h2>What to post, when, and why.</h2>
      <p>Goal: 60-70 qualified fit call bookings. Every post is aimed at one type of person. Not viral reach.</p>
      <div class="grid-3">
        <div class="kpi"><span class="kpi-val">60</span><span class="kpi-label">Days of content</span></div>
        <div class="kpi"><span class="kpi-val">Daily</span><span class="kpi-label">Per platform</span></div>
        <div class="kpi"><span class="kpi-val">3</span><span class="kpi-label">Platforms: Facebook, LinkedIn, Instagram/TikTok</span></div>
      </div>
    </section>
    <section>
      <div class="cal-week">
        <div class="cal-week-header"><span class="cal-week-label">Week 1-2 &middot; Aug 16-29</span><span class="cal-week-goal">Goal: awareness. Establish the problem.</span></div>
        <div class="posts-row">
          <div class="post-item"><span class="post-platform fb" aria-label="Facebook">FB</span><span class="post-type">Story</span><div><div class="post-angle">The day the war started and the banks froze</div><div class="post-note">Sudanese Arabic. Personal. No selling.</div></div></div>
          <div class="post-item"><span class="post-platform li" aria-label="LinkedIn">LI</span><span class="post-type">Data</span><div><div class="post-angle">SDG vs BTC: same 8 years, two completely different outcomes</div><div class="post-note">English. Numbers first, story second.</div></div></div>
          <div class="post-item"><span class="post-platform ig" aria-label="Instagram">IG</span><span class="post-type">Reel</span><div><div class="post-angle">1 USD now costs 6,000 Sudanese pounds. Let that land.</div><div class="post-note">30-45 seconds. No fancy production.</div></div></div>
          <div class="post-item"><span class="post-platform fb" aria-label="Facebook">FB</span><span class="post-type">Education</span><div><div class="post-angle">Why Western Union is 5% and mine was 1-2% (and settled in minutes)</div><div class="post-note">Sudanese Arabic. Professional positioning, not charity.</div></div></div>
          <div class="post-item"><span class="post-platform li" aria-label="LinkedIn">LI</span><span class="post-type">Opinion</span><div><div class="post-angle">The MENA professional class has a currency risk problem nobody is talking about</div><div class="post-note">English. Opens a conversation.</div></div></div>
        </div>
      </div>
      <div class="cal-week">
        <div class="cal-week-header"><span class="cal-week-label">Week 3 &middot; Aug 23-29</span><span class="cal-week-goal">Goal: social proof. ZeroBytes session happens Aug 23.</span></div>
        <div class="posts-row">
          <div class="post-item"><span class="post-platform all" aria-label="All platforms">ALL</span><span class="post-type">Recap</span><div><div class="post-angle">ZeroBytes session recap: what happened and what people said after</div><div class="post-note">Post within 24 hours. Real testimonials. Real names if they agree.</div></div></div>
          <div class="post-item"><span class="post-platform fb" aria-label="Facebook">FB</span><span class="post-type">Testimonial</span><div><div class="post-angle">One specific quote from a ZeroBytes attendee</div><div class="post-note">Sudanese Arabic. The more specific, the better.</div></div></div>
          <div class="post-item"><span class="post-platform ig" aria-label="Instagram">IG</span><span class="post-type">Reel</span><div><div class="post-angle">Short clip or photo from ZeroBytes with voiceover</div><div class="post-note">Real footage beats polished content at this stage.</div></div></div>
        </div>
      </div>
      <div class="cal-week">
        <div class="cal-week-header"><span class="cal-week-label">Week 4-6 &middot; Sep 1-21</span><span class="cal-week-goal">Goal: workshop launch. Fit calls running. Drive bookings.</span></div>
        <div class="posts-row">
          <div class="post-item"><span class="post-platform all" aria-label="All platforms">ALL</span><span class="post-type">Launch</span><div><div class="post-angle">The Dubai workshop is open. Here's how to get in.</div><div class="post-note">Direct. Simple. Link to landing page.</div></div></div>
          <div class="post-item"><span class="post-platform fb" aria-label="Facebook">FB</span><span class="post-type">Objection</span><div><div class="post-angle">Why $5,000 is either expensive or cheap depending on one thing</div><div class="post-note">Sudanese Arabic. Address the price directly before people ask.</div></div></div>
          <div class="post-item"><span class="post-platform li" aria-label="LinkedIn">LI</span><span class="post-type">Case study</span><div><div class="post-angle">What it took to move $500k in Bitcoin during a war with no bank access</div><div class="post-note">English. Long-form. Earns shares from people you haven't met.</div></div></div>
          <div class="post-item"><span class="post-platform ig" aria-label="Instagram">IG</span><span class="post-type">Reel</span><div><div class="post-angle">I pushed my private key to GitHub and lost a Bitcoin wallet. Here's what I learned.</div><div class="post-note">Vulnerable, specific, human. The mistake makes the expertise credible.</div></div></div>
          <div class="post-item"><span class="post-platform all" aria-label="All platforms">ALL</span><span class="post-type">Scarcity</span><div><div class="post-angle">Seats update: X spots filled, Y remaining</div><div class="post-note">Post at 50% and 80% capacity. Real numbers only.</div></div></div>
        </div>
      </div>
      <div class="cal-week">
        <div class="cal-week-header"><span class="cal-week-label">Week 7-9 &middot; Sep 22 - Oct 12</span><span class="cal-week-goal">Goal: close remaining seats. Build for next cohort.</span></div>
        <div class="posts-row">
          <div class="post-item"><span class="post-platform all" aria-label="All platforms">ALL</span><span class="post-type">FOMO</span><div><div class="post-angle">The workshop is next week. 3 seats left.</div><div class="post-note">Short. Specific. No embellishment.</div></div></div>
          <div class="post-item"><span class="post-platform li" aria-label="LinkedIn">LI</span><span class="post-type">Forward-looking</span><div><div class="post-angle">Remote formats for Q4: what I'm evaluating and why</div><div class="post-note">Seeds next cohort without closing door on people who missed September.</div></div></div>
          <div class="post-item"><span class="post-platform all" aria-label="All platforms">ALL</span><span class="post-type">Post-workshop</span><div><div class="post-angle">What happened in the room. What people walked out with.</div><div class="post-note">Within 48 hours. Real quotes, real faces if permitted.</div></div></div>
        </div>
      </div>
    </section>
  </div>
</div>

<div id="tab-platforms" class="tab-content">
  <div class="wrap">
    <section>
      <div class="section-title">Platform breakdown</div>
      <h2>Same story, different voice on each platform.</h2>
    </section>
    <div class="platform-card">
      <div class="platform-header"><h4>Facebook</h4><span class="platform-meta">Sudanese Arabic &middot; Long-form personal posts &middot; Daily</span></div>
      <div class="platform-body">
        <p>Your main audience is Sudanese professionals in the diaspora and at home. They know you or know someone who does. The tone is personal, community-first. Talk like you're messaging a cousin, not writing a post.</p>
        <p style="margin-top:8px">Write in dialect, not formal Arabic. Dialect feels human. Formal Arabic feels like a press release.</p>
        <p style="margin-top:8px">What works: personal stories with specific details, the war context (lived experience for them), the 1-2% fee framing, and anything that makes them feel like they can still catch up.</p>
        <div class="tag-row"><span class="tag">Sudanese dialect</span><span class="tag">Personal and warm</span><span class="tag">Long-form OK</span><span class="tag">War context resonates</span></div>
      </div>
    </div>
    <div class="platform-card">
      <div class="platform-header"><h4>LinkedIn</h4><span class="platform-meta">English &middot; Professional tone &middot; 3-4x per week</span></div>
      <div class="platform-body">
        <p>MENA professionals, diaspora with corporate or freelance careers. They haven't lived the SDG collapse but they understand the concept. They respond to data, credentials, and the $500k number.</p>
        <p style="margin-top:8px">Lead with data. Follow with story. End with professional implication. The ZeroBytes validation angle matters here more than on Facebook.</p>
        <div class="tag-row"><span class="tag">English</span><span class="tag">Data-first</span><span class="tag">Credentials matter</span><span class="tag">Shorter than Facebook</span></div>
      </div>
    </div>
    <div class="platform-card">
      <div class="platform-header"><h4>Instagram and TikTok</h4><span class="platform-meta">Reels &middot; 30-60 seconds &middot; Daily</span></div>
      <div class="platform-body">
        <p>Short. Face to camera. Hook in the first 2 seconds. Good hooks: "1 USD now costs 6,000 Sudanese pounds." / "I accidentally pushed my Bitcoin private key to GitHub." / "I moved $500,000 in Bitcoin during a war."</p>
        <p style="margin-top:8px">Don't over-produce. The story is interesting enough. End every reel with one action: "Link in bio to book a 20-minute call."</p>
        <div class="tag-row"><span class="tag">Face to camera</span><span class="tag">Hook in 2 seconds</span><span class="tag">30-60 seconds</span><span class="tag">One CTA per video</span></div>
      </div>
    </div>
    <section style="margin-top:24px">
      <div class="section-title">What not to post</div>
      <div class="card">
        <ul class="checklist">
          <li><span class="cb"></span>Price predictions. Attracts the wrong audience and damages credibility with the right one.</li>
          <li><span class="cb"></span>Generic Bitcoin education. Your audience has already Googled this.</li>
          <li><span class="cb"></span>Polished stock-photo content. Your story is the content.</li>
          <li><span class="cb"></span>Multiple CTAs in one post. Pick one and stick to it.</li>
        </ul>
      </div>
    </section>
  </div>
</div>

<div id="tab-economics" class="tab-content">
  <div class="wrap">
    <section>
      <div class="section-title">Revenue model</div>
      <h2>Numbers at different capacity levels.</h2>
      <table class="econ-table">
        <thead><tr><th>Scenario</th><th>Seats</th><th>Revenue</th><th>Notes</th></tr></thead>
        <tbody>
          <tr><td>Minimum viable</td><td class="val">15</td><td class="val">$75,000</td><td>Break-even: venue + Ahmed's time + room assistant</td></tr>
          <tr><td>Target</td><td class="val">20</td><td class="val">$100,000</td><td>Comfortable margin. Campaign costs recovered.</td></tr>
          <tr class="total"><td>Full room</td><td class="val">25</td><td class="val">$125,000</td><td>One day. Dubai. No travel required beyond getting there.</td></tr>
        </tbody>
      </table>
      <div class="callout"><strong>Note on refunds:</strong> The 3x guarantee is historically very unlikely to trigger. The recovery guarantee is within your control to prevent by running the day well.</div>
    </section>
    <section>
      <div class="section-title">Cost breakdown</div>
      <div class="card">
        <table class="econ-table" style="margin:0">
          <thead><tr><th>Item</th><th>Estimate</th><th>Notes</th></tr></thead>
          <tbody>
            <tr><td>Hotel venue (private room, day-use)</td><td class="val">$2-5k</td><td>Depends on hotel and room size</td></tr>
            <tr><td>Room assistant (ZeroBytes)</td><td class="val">$500-1k</td><td>One person for the day</td></tr>
            <tr><td>Ahmed's travel to Dubai</td><td class="val">Variable</td><td>Flights and accommodation</td></tr>
            <tr><td>Campaign content and tools</td><td class="val">$500-2k</td><td>Mostly time cost. Minimal paid media needed.</td></tr>
            <tr><td>Service agreement (legal review)</td><td class="val">$500-1k</td><td>One-time cost. Covers both guarantees.</td></tr>
          </tbody>
        </table>
      </div>
    </section>
    <section>
      <div class="section-title">Funnel math</div>
      <div class="grid-3">
        <div class="kpi"><span class="kpi-val">60-70</span><span class="kpi-label">Fit calls needed to fill 15-25 seats</span></div>
        <div class="kpi"><span class="kpi-val">5/day</span><span class="kpi-label">Fit call rate for 2 weeks post-Aug 23</span></div>
        <div class="kpi"><span class="kpi-val">$100k</span><span class="kpi-label">Revenue target at 20 seats</span></div>
      </div>
      <div class="callout" style="margin-top:20px"><strong>Reality check:</strong> 60-70 qualified leads in 4 weeks needs the campaign running hard from day one. The ZeroBytes session on Aug 23 is your first real social proof moment. The first 2 weeks of the campaign are the hardest.</div>
    </section>
  </div>
</div>

<script>
  function switchTab(id) {
    document.querySelectorAll('.tab-content').forEach(function(el) { el.classList.remove('active'); });
    document.querySelectorAll('.tab').forEach(function(el) { el.classList.remove('active'); });
    document.getElementById('tab-' + id).classList.add('active');
    event.currentTarget.classList.add('active');
  }
  function switchTabSelect(id) {
    document.querySelectorAll('.tab-content').forEach(function(el) { el.classList.remove('active'); });
    document.getElementById('tab-' + id).classList.add('active');
  }
<\/script>

</body>
</html>`
