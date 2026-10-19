export const dubaiWorkshopRunwayHtml = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Six-Week Runway</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@400;500;600&display=swap">
<style>
  :root {
    --bg: #f5f3ee;
    --surface: #ffffff;
    --surface-2: #ece9e1;
    --ink: #15141a;
    --muted: #5f5d68;
    --faint: #9b9aa3;
    --line: rgba(21,20,26,0.12);
    --line-strong: rgba(21,20,26,0.28);
    --accent: #d97a0f;
    --accent-ink: #15141a;
    --accent-soft: rgba(217,122,15,0.10);
    --accent-line: rgba(217,122,15,0.35);
    --ok: #1f7a4f;
    --ok-soft: rgba(31,122,79,0.10);
    --warn: #9a6a08;
    --warn-soft: rgba(154,106,8,0.10);
    --risk: #b93a2e;
    --risk-soft: rgba(185,58,46,0.09);
    --shadow: 0 1px 2px rgba(21,20,26,0.06), 0 8px 24px rgba(21,20,26,0.06);
  }
  @media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]) {
      --bg: #0d0d12;
      --surface: #15151c;
      --surface-2: #1c1c25;
      --ink: #f1efe9;
      --muted: #a6a4a0;
      --faint: #6d6c73;
      --line: rgba(241,239,233,0.10);
      --line-strong: rgba(241,239,233,0.26);
      --accent: #f7931a;
      --accent-ink: #0d0d12;
      --accent-soft: rgba(247,147,26,0.12);
      --accent-line: rgba(247,147,26,0.38);
      --ok: #45c48a;
      --ok-soft: rgba(69,196,138,0.12);
      --warn: #e8b64a;
      --warn-soft: rgba(232,182,74,0.12);
      --risk: #ff6f63;
      --risk-soft: rgba(255,111,99,0.12);
      --shadow: 0 1px 2px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.35);
    }
  }
  :root[data-theme="dark"] {
    --bg: #0d0d12;
    --surface: #15151c;
    --surface-2: #1c1c25;
    --ink: #f1efe9;
    --muted: #a6a4a0;
    --faint: #6d6c73;
    --line: rgba(241,239,233,0.10);
    --line-strong: rgba(241,239,233,0.26);
    --accent: #f7931a;
    --accent-ink: #0d0d12;
    --accent-soft: rgba(247,147,26,0.12);
    --accent-line: rgba(247,147,26,0.38);
    --ok: #45c48a;
    --ok-soft: rgba(69,196,138,0.12);
    --warn: #e8b64a;
    --warn-soft: rgba(232,182,74,0.12);
    --risk: #ff6f63;
    --risk-soft: rgba(255,111,99,0.12);
    --shadow: 0 1px 2px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.35);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } * { transition: none !important; } }
  body {
    background: var(--bg);
    color: var(--ink);
    font-family: 'IBM Plex Sans', 'Segoe UI', system-ui, sans-serif;
    font-size: 15px;
    line-height: 1.6;
  }
  .mono { font-family: 'IBM Plex Mono', 'SF Mono', Menlo, monospace; }
  a { color: var(--accent); }

  /* ── HEADER ── */
  .top {
    position: sticky; top: 0; z-index: 50;
    background: var(--bg);
    border-bottom: 1px solid var(--line);
  }
  .top-inner {
    max-width: 1040px; margin: 0 auto; padding: 14px 24px 0;
    display: flex; flex-direction: column; gap: 10px;
  }
  .top-row { display: flex; align-items: baseline; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
  .brand { font-weight: 600; font-size: 15px; letter-spacing: -0.01em; }
  .brand span { color: var(--muted); font-weight: 400; }
  .stamp { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--muted); letter-spacing: 0.04em; }
  .tabs { display: flex; gap: 2px; }
  .tab {
    appearance: none; background: none; border: none; cursor: pointer;
    font: inherit; font-size: 13.5px; font-weight: 500; color: var(--muted);
    padding: 10px 14px; border-bottom: 2px solid transparent; white-space: nowrap;
    display: inline-flex; align-items: center; gap: 8px;
  }
  .tab .n { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--faint); }
  .tab:hover { color: var(--ink); }
  .tab:focus-visible { outline: 2px solid var(--accent); outline-offset: -2px; border-radius: 4px; }
  .tab.active { color: var(--ink); border-bottom-color: var(--accent); }
  .tab.active .n { color: var(--accent); }
  /* Mobile tab select */
  .tab-select { display: none; }
  @media (max-width: 640px) {
    .tabs { display: none; }
    .tab-select {
      display: block; width: 100%; margin: 0;
      background: var(--surface); border: none; border-bottom: 1px solid var(--line);
      color: var(--ink); font-size: 15px; font-weight: 600; font-family: inherit;
      padding: 14px 16px; cursor: pointer; -webkit-appearance: none; appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23f7931a' stroke-width='1.8' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
      background-repeat: no-repeat; background-position: right 16px center;
      padding-right: 40px;
    }
    .wrap { padding: 28px 16px 60px; }
  }

  /* ── PANELS ── */
  .panel { display: none; }
  .panel.active { display: block; }
  .wrap { max-width: 1040px; margin: 0 auto; padding: 40px 24px 96px; }
  .col { max-width: 760px; }
  .wide { max-width: 1040px; }

  .eyebrow {
    font-family: 'IBM Plex Mono', monospace; font-size: 11px; font-weight: 500;
    letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent); margin-bottom: 10px;
  }
  h1 { font-size: clamp(28px, 4.6vw, 40px); font-weight: 700; letter-spacing: -0.025em; line-height: 1.12; text-wrap: balance; margin-bottom: 14px; }
  h2 { font-size: 22px; font-weight: 600; letter-spacing: -0.015em; line-height: 1.25; text-wrap: balance; margin-bottom: 10px; }
  h3 { font-size: 16px; font-weight: 600; margin-bottom: 6px; }
  h4 { font-size: 14px; font-weight: 600; margin-bottom: 4px; }
  p { color: var(--muted); max-width: 68ch; }
  p + p { margin-top: 10px; }
  p strong, li strong { color: var(--ink); font-weight: 600; }
  .lead { font-size: 17px; color: var(--ink); max-width: 62ch; }
  section { margin-top: 48px; }
  section:first-child { margin-top: 0; }
  .sec-head { display: flex; align-items: baseline; gap: 14px; padding-bottom: 10px; border-bottom: 1px solid var(--line-strong); margin-bottom: 20px; }
  .sec-head h2 { margin: 0; }
  .sec-head .stamp { margin-left: auto; }

  /* ── LISTS ── */
  ul.plain { list-style: none; display: flex; flex-direction: column; gap: 8px; color: var(--muted); }
  ul.plain li { padding-left: 18px; position: relative; max-width: 70ch; }
  ul.plain li::before { content: ''; position: absolute; left: 0; top: 0.72em; width: 8px; height: 1.5px; background: var(--accent); }
  ol.steps { list-style: none; counter-reset: s; display: flex; flex-direction: column; gap: 10px; }
  ol.steps li { counter-increment: s; display: grid; grid-template-columns: 30px 1fr; gap: 10px; color: var(--muted); max-width: 72ch; }
  ol.steps li::before { content: counter(s, decimal-leading-zero); font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: var(--accent); padding-top: 3px; }

  /* ── RANK CARDS ── */
  .ranks { display: grid; grid-template-columns: 1fr; gap: 12px; margin-top: 20px; }
  .rank {
    display: grid; grid-template-columns: 64px 1fr; gap: 18px;
    background: var(--surface); border: 1px solid var(--line); border-radius: 10px; padding: 20px 22px;
  }
  .rank.first { border-color: var(--accent-line); box-shadow: var(--shadow); }
  .rank-n { font-family: 'IBM Plex Mono', monospace; font-size: 34px; font-weight: 600; line-height: 1; color: var(--accent); }
  .rank-n small { display: block; font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--faint); margin-top: 6px; font-weight: 500; }
  .rank h3 { font-size: 17px; }
  .rank .when { font-family: 'IBM Plex Mono', monospace; font-size: 11.5px; color: var(--muted); margin-bottom: 8px; }
  .rank .done { margin-top: 12px; padding-top: 12px; border-top: 1px dashed var(--line); font-size: 13.5px; color: var(--muted); }
  .rank .done b { color: var(--ink); font-weight: 600; }

  /* ── FLAGS ── */
  .flags { display: flex; flex-direction: column; gap: 10px; }
  .flag { display: grid; grid-template-columns: 8px 1fr; gap: 14px; background: var(--surface); border: 1px solid var(--line); border-radius: 8px; padding: 14px 16px 14px 14px; }
  .flag .bar { border-radius: 4px; }
  .flag.risk .bar { background: var(--risk); }
  .flag.warn .bar { background: var(--warn); }
  .flag.ok .bar { background: var(--ok); }
  .flag h4 { display: flex; gap: 10px; align-items: baseline; }
  .flag .tag { font-family: 'IBM Plex Mono', monospace; font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; }
  .flag.risk .tag { color: var(--risk); } .flag.warn .tag { color: var(--warn); } .flag.ok .tag { color: var(--ok); }
  .flag p { font-size: 13.5px; }

  /* ── TABLES ── */
  .tbl { overflow-x: auto; border: 1px solid var(--line); border-radius: 8px; background: var(--surface); }
  table { width: 100%; border-collapse: collapse; font-size: 13.5px; }
  th { text-align: left; font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; letter-spacing: 0.1em; text-transform: uppercase; font-weight: 500; color: var(--muted); padding: 10px 12px; border-bottom: 1px solid var(--line-strong); background: var(--surface-2); white-space: nowrap; }
  td { padding: 10px 12px; border-bottom: 1px solid var(--line); vertical-align: top; color: var(--muted); }
  tr:last-child td { border-bottom: none; }
  td:first-child { color: var(--ink); font-weight: 500; white-space: nowrap; }
  td.num, th.num { text-align: right; font-family: 'IBM Plex Mono', monospace; font-variant-numeric: tabular-nums; white-space: nowrap; }
  td.num { color: var(--ink); }
  tr.hl td { background: var(--accent-soft); }
  .tbl.wrapfirst td:first-child { white-space: normal; }

  /* ── TIMELINE ── */
  .runway { display: flex; flex-direction: column; border-left: 2px solid var(--line-strong); margin-left: 6px; }
  .rw { display: grid; grid-template-columns: 150px 1fr; gap: 16px; padding: 12px 0 12px 18px; position: relative; }
  .rw::before { content: ''; position: absolute; left: -7px; top: 19px; width: 12px; height: 12px; border-radius: 50%; background: var(--bg); border: 2px solid var(--line-strong); }
  .rw.key::before { background: var(--accent); border-color: var(--accent); }
  .rw .d { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: var(--ink); padding-top: 2px; }
  .rw .d small { display: block; color: var(--faint); font-size: 11px; }
  .rw h4 { font-size: 14.5px; }
  .rw p { font-size: 13.5px; }
  @media (max-width: 560px) { .rw { grid-template-columns: 1fr; gap: 4px; } }

  /* ── DECISIONS ── */
  .decisions { display: grid; grid-template-columns: 1fr; gap: 10px; }
  .dec { background: var(--surface); border: 1px solid var(--line); border-radius: 8px; padding: 14px 16px; display: grid; grid-template-columns: 1fr; gap: 6px; }
  .dec .q { font-weight: 600; }
  .dec .a { color: var(--muted); font-size: 13.5px; }
  .dec .a b { color: var(--accent); font-weight: 600; }

  /* ── CHECKLIST ── */
  .check { list-style: none; display: flex; flex-direction: column; gap: 6px; }
  .check li { display: grid; grid-template-columns: 22px 1fr; gap: 12px; align-items: start; padding: 9px 12px; background: var(--surface); border: 1px solid var(--line); border-radius: 6px; }
  .check input { width: 16px; height: 16px; margin-top: 3px; accent-color: var(--accent); cursor: pointer; }
  .check label { cursor: pointer; color: var(--ink); font-size: 14px; }
  .check label small { display: block; color: var(--muted); font-size: 12.5px; margin-top: 2px; }
  .check li.done label { color: var(--faint); text-decoration: line-through; }
  .check li.done label small { text-decoration: none; }

  /* ── ENGINE ── */
  .engine { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
  @media (max-width: 640px) { .engine { grid-template-columns: repeat(2, 1fr); } }
  .eng { background: var(--surface); border: 1px solid var(--line); border-radius: 8px; padding: 16px; }
  .eng .v { font-family: 'IBM Plex Mono', monospace; font-size: 30px; font-weight: 600; color: var(--accent); line-height: 1; }
  .eng .l { font-size: 12.5px; color: var(--muted); margin-top: 6px; }

  /* ── SCRIPTS ── */
  .script { background: var(--surface); border: 1px solid var(--line); border-radius: 10px; padding: 18px 20px; margin-bottom: 10px; }
  .script .sh { display: flex; justify-content: space-between; align-items: center; gap: 12px; margin-bottom: 10px; }
  .script .sl { font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent); }
  .script .body { white-space: pre-wrap; color: var(--ink); font-size: 14px; line-height: 1.7; max-width: 72ch; }
  .script .body i { color: var(--muted); }
  .script .note { margin-top: 10px; padding-top: 10px; border-top: 1px dashed var(--line); font-size: 12.5px; color: var(--muted); }
  .script[dir="rtl"] .body { font-size: 15.5px; line-height: 1.9; }
  .copy { appearance: none; border: 1px solid var(--line-strong); background: var(--surface-2); color: var(--muted); font: inherit; font-size: 11.5px; font-weight: 500; padding: 4px 10px; border-radius: 6px; cursor: pointer; }
  .copy:hover { color: var(--ink); }
  .copy:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
  .copy.ok { color: var(--ok); border-color: var(--ok); }

  .branch { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 12px; }
  @media (max-width: 600px) { .branch { grid-template-columns: 1fr; } }
  .br { border-radius: 8px; padding: 12px 14px; font-size: 13.5px; }
  .br.yes { background: var(--ok-soft); border: 1px solid var(--ok); }
  .br.no { background: var(--risk-soft); border: 1px solid var(--risk); }
  .br b { display: block; font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 4px; }
  .br.yes b { color: var(--ok); } .br.no b { color: var(--risk); }

  .obj { display: grid; grid-template-columns: 1fr; gap: 8px; }
  .ob { background: var(--surface); border: 1px solid var(--line); border-radius: 8px; padding: 12px 16px; display: grid; grid-template-columns: 1fr; gap: 4px; }
  .ob .they { font-weight: 600; }
  .ob .you { color: var(--muted); font-size: 13.5px; max-width: 72ch; }
  .ob .you::before { content: 'You: '; color: var(--accent); font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; }

  /* ── POSTS ── */
  .post { background: var(--surface); border: 1px solid var(--line); border-radius: 10px; padding: 18px 20px; margin-bottom: 10px; }
  .post .pm { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; margin-bottom: 10px; }
  .pill { font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; letter-spacing: 0.08em; text-transform: uppercase; padding: 3px 9px; border-radius: 100px; border: 1px solid var(--line-strong); color: var(--muted); }
  .pill.acc { border-color: var(--accent-line); color: var(--accent); background: var(--accent-soft); }
  .post .hook { font-weight: 600; font-size: 15.5px; margin-bottom: 8px; max-width: 60ch; }
  .post .pb { white-space: pre-wrap; color: var(--muted); font-size: 14px; line-height: 1.7; max-width: 70ch; }
  .post[dir="rtl"] .pb, .post[dir="rtl"] .hook { font-size: 15.5px; line-height: 1.9; }
  .note { margin-top: 10px; padding-top: 10px; border-top: 1px dashed var(--line); font-size: 12.5px; color: var(--muted); }

  /* ── CURRICULUM ── */
  .arch { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
  @media (max-width: 720px) { .arch { grid-template-columns: 1fr 1fr; } }
  .stage { background: var(--surface); border: 1px solid var(--line); border-radius: 8px; padding: 14px; }
  .stage.core { border-color: var(--accent-line); background: var(--accent-soft); }
  .stage .sn { font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent); margin-bottom: 6px; }
  .stage h4 { font-size: 14px; }
  .stage p { font-size: 12.5px; }
  .flow { display: grid; grid-template-columns: repeat(5, 1fr); gap: 6px; }
  @media (max-width: 760px) { .flow { grid-template-columns: 1fr 1fr; } }
  .fl { background: var(--surface); border: 1px solid var(--line); border-radius: 8px; padding: 12px; }
  .fl .fn { font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; color: var(--accent); margin-bottom: 4px; }
  .fl h4 { font-size: 13.5px; }
  .fl p { font-size: 12.5px; }
  .mod { background: var(--surface); border: 1px solid var(--line); border-radius: 10px; margin-bottom: 12px; overflow: hidden; }
  .mod-h { display: grid; grid-template-columns: 92px 1fr auto; gap: 14px; align-items: baseline; padding: 14px 18px; border-bottom: 1px solid var(--line); background: var(--surface-2); }
  .mod-h .t { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: var(--accent); }
  .mod-h h3 { margin: 0; font-size: 15.5px; }
  .mod-h .kind { font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); white-space: nowrap; }
  .mod-b { padding: 16px 18px; display: grid; grid-template-columns: 1fr 1fr; gap: 16px 24px; }
  @media (max-width: 680px) { .mod-b { grid-template-columns: 1fr; } .mod-h { grid-template-columns: 1fr; gap: 4px; } }
  .mod-b .full { grid-column: 1 / -1; }
  .mod-b h5 { font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-bottom: 6px; font-weight: 500; }
  .mod-b ul { list-style: none; display: flex; flex-direction: column; gap: 5px; font-size: 13.5px; color: var(--muted); }
  .mod-b ul li { padding-left: 14px; position: relative; }
  .mod-b ul li::before { content: ''; position: absolute; left: 0; top: 0.7em; width: 6px; height: 1.5px; background: var(--accent); }
  .mod-b p { font-size: 13.5px; }
  .mod-b .gate { background: var(--ok-soft); border: 1px solid var(--ok); border-radius: 6px; padding: 10px 12px; font-size: 13px; color: var(--ink); }
  .mod-b .gate b { color: var(--ok); font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; letter-spacing: 0.1em; text-transform: uppercase; display: block; margin-bottom: 3px; }

  /* ── BUDGET ── */
  .calc { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; align-items: start; }
  @media (max-width: 820px) { .calc { grid-template-columns: 1fr; } }
  .inputs { background: var(--surface); border: 1px solid var(--line); border-radius: 10px; padding: 6px 0; }
  .inp { display: grid; grid-template-columns: 1fr 120px; gap: 12px; align-items: center; padding: 8px 16px; border-bottom: 1px solid var(--line); }
  .inp:last-child { border-bottom: none; }
  .inp label { font-size: 13.5px; color: var(--ink); }
  .inp label small { display: block; color: var(--faint); font-size: 11.5px; }
  .inp input[type="number"] { width: 100%; font: inherit; font-family: 'IBM Plex Mono', monospace; font-size: 13.5px; text-align: right; padding: 6px 8px; border: 1px solid var(--line-strong); border-radius: 6px; background: var(--bg); color: var(--ink); }
  .inp input[type="number"]:focus-visible { outline: 2px solid var(--accent); outline-offset: 1px; }
  .inp.head { background: var(--surface-2); border-top: 1px solid var(--line-strong); }
  .inp.head label { font-weight: 600; }
  .results { position: sticky; top: 108px; display: flex; flex-direction: column; gap: 10px; }
  .res { background: var(--surface); border: 1px solid var(--line); border-radius: 10px; padding: 16px 18px; }
  .res.big { border-color: var(--accent-line); background: var(--accent-soft); }
  .res .rl { font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); }
  .res .rv { font-family: 'IBM Plex Mono', monospace; font-size: 28px; font-weight: 600; letter-spacing: -0.02em; line-height: 1.15; color: var(--ink); font-variant-numeric: tabular-nums; }
  .res.big .rv { color: var(--accent); }
  .res .rs { font-size: 12.5px; color: var(--muted); margin-top: 4px; }
  .res-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .res.neg .rv { color: var(--risk); }
  .res.pos .rv { color: var(--ok); }
  .lines { font-size: 13px; }
  .lines .ln { display: flex; justify-content: space-between; gap: 12px; padding: 5px 0; border-bottom: 1px dashed var(--line); color: var(--muted); }
  .lines .ln:last-child { border-bottom: none; }
  .lines .ln span:last-child { font-family: 'IBM Plex Mono', monospace; color: var(--ink); font-variant-numeric: tabular-nums; }
  .gate-box { border: 1px solid var(--accent-line); background: var(--accent-soft); border-radius: 10px; padding: 16px 18px; }
  .gate-box h3 { margin-bottom: 8px; }
  .gate-row { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-top: 10px; }
  @media (max-width: 640px) { .gate-row { grid-template-columns: 1fr; } }
  .g { background: var(--surface); border-radius: 8px; padding: 12px; font-size: 13px; color: var(--muted); }
  .g b { display: block; font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 4px; }
  .g.go b { color: var(--ok); } .g.hold b { color: var(--warn); } .g.stop b { color: var(--risk); }
  .goals { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
  @media (max-width: 760px) { .goals { grid-template-columns: 1fr 1fr; } }
  .goal { background: var(--surface); border: 1px solid var(--line); border-radius: 8px; padding: 14px; }
  .goal h4 { font-size: 14px; }
  .goal p { font-size: 12.5px; }
  .src { font-size: 12.5px; color: var(--faint); margin-top: 10px; }
  .src a { color: var(--muted); }
</style>
</head>
<body>
<div class="top">
  <div class="top-inner">
    <div class="top-row">
      <div class="brand">Six-Week Runway <span>· Bitcoin Wealth Workshop, Dubai → Cambodia</span></div>
      <div class="stamp">PRIVATE · AHMED ONLY · REVISED SUN 6 SEP 2026</div>
    </div>
    <div class="tabs" role="tablist">
      <button class="tab active" role="tab" data-tab="call"><span class="n">1</span>The call</button>
      <button class="tab" role="tab" data-tab="launch"><span class="n">2</span>Launch pack</button>
      <button class="tab" role="tab" data-tab="curriculum"><span class="n">3</span>Curriculum</button>
      <button class="tab" role="tab" data-tab="budget"><span class="n">4</span>Budget &amp; Cambodia</button>
    </div>
    <select class="tab-select" onchange="showTabSelect(this.value)">
      <option value="call">1 · The call</option>
      <option value="launch">2 · Launch pack</option>
      <option value="curriculum">3 · Curriculum</option>
      <option value="budget">4 · Budget &amp; Cambodia</option>
    </select>
  </div>
</div>

<!-- ═══════════════════════════════ TAB 1: THE CALL ═══════════════════════════════ -->
<div class="panel active" id="panel-call">
  <div class="wrap">
    <div class="col">
      <div class="eyebrow">Prioritisation · revised for a mid-October date</div>
      <h1>Sell it, then build it, then move.</h1>
      <p class="lead">You land in Dubai on 16 September and want the workshop in mid-October. That is six weeks from tomorrow. At $2,000 a seat, with the first ten at $1,000, the target is a room of 25. That needs the engine at full rate from Monday, and it has one advantage the November plan did not: you will be in the city for a month before the day, and coffee converts better than phone calls.</p>

      <div class="ranks">
        <div class="rank first">
          <div class="rank-n">1<small>Now</small></div>
          <div>
            <h3>Launch the campaign and start calling. Monday, from wherever you are.</h3>
            <div class="when">Starts Mon 7 Sep · continues from Dubai after 16 Sep · hard close Mon 12 Oct</div>
            <p>The date is <strong>Saturday 17 October 2026</strong>. Fit calls need about two weeks of outreach before they book, and a room of 25 needs roughly 75 fit calls at the playbook's conversion rates, which the early-bird price should beat in the first three weeks. That only works if the first messages go out this week, before you travel. The move to Dubai then becomes an outreach tool: every fit call with someone in the UAE becomes a 30-minute coffee.</p>
            <p>There is a built-in check on <strong>Friday 9 October</strong>: ten or more seats paid means the date holds. Fewer means you slip one week to 24 October rather than run a half-empty room.</p>
            <div class="done"><b>Done this week means:</b> date fixed, Basem confirmed for the wallet session, venue on hold, 100-name warm list built, first 30 outbound touches sent, first 3 fit calls booked, posts 1 to 3 live.</div>
          </div>
        </div>
        <div class="rank">
          <div class="rank-n">2<small>Parallel</small></div>
          <div>
            <h3>Finish the beginner curriculum with Basem, then rehearse it once.</h3>
            <div class="when">Build window Mon 21 Sep – Sun 4 Oct · remote dry run with Basem Sat 10 Oct</div>
            <p>This version is the beginner day: from buying USDT to stacking L-BTC and Lightning in CypherBox, then withdrawing to a hot wallet the person controls. Cold storage moves to an advanced workshop for power users once this one has run well. That is a cleaner product. Whether an advanced day follows is decided from what attendees say, not now. The full draft is on the Curriculum tab; the build window is editing with Basem, not writing from zero.</p>
            <div class="done"><b>Done means:</b> Basem has signed off the CypherBox flow and screens, every module has an exercise and a pass check, the recovery test protocol is written, the pre-work pack is sent Sunday 11 October.</div>
          </div>
        </div>
        <div class="rank">
          <div class="rank-n">3<small>Costed</small></div>
          <div>
            <h3>Dubai is a month-long stay, budgeted. Cambodia is decided, so budget the mode, not the whether.</h3>
            <div class="when">Dubai budget: on the Budget tab · Cambodia mode set Mon 19 Oct · fly around 1 Nov</div>
            <p>Your Cambodia notes are clear: you are going, to run both P2P desks online from a cheap base, open a USD account, cut monthly costs so more goes into Bitcoin and marriage savings, and run ZeroBytes remotely. The AED to USDT desk already earns $100 to $250 a day, six days a week, and the new USD to USDT desk adds 2 to 2.5% on about $90,000 a month. Together they cover the base on their own, so Dubai cash decides the size of the float and how fast the savings targets ramp, not whether you can live. The three modes are written down on the Budget tab.</p>
            <div class="done"><b>Done means:</b> Dubai monthly rental booked before 16 Sep; Cambodia mode chosen on 19 Oct against cash in the bank; residency permit budgeted at $1,200.</div>
          </div>
        </div>
      </div>
    </div>

    <section class="col">
      <div class="sec-head"><h2>Is mid-October realistic?</h2></div>
      <p>Yes, with three conditions. Each has a date by which it must be true, and a fallback if it is not.</p>
      <div class="tbl wrapfirst" style="margin-top:14px">
        <table>
          <thead><tr><th>Must be true</th><th>By</th><th>If it is not</th></tr></thead>
          <tbody>
            <tr><td>Outreach started at full rate before you travel, with the 100-name list built</td><td>Sun 13 Sep</td><td>The date moves a week for every week this slips. Travel does not pause the engine.</td></tr>
            <tr><td>20 fit calls booked, 10 completed, first Basics session announced</td><td>Sun 27 Sep</td><td>Add in-person Dubai outreach from 16 Sep: Sudanese and diaspora circles, ZeroBytes contacts, two meetups a week.</td></tr>
            <tr><td>10 seats paid in full</td><td>Fri 9 Oct</td><td>Slip to Sat 24 Oct. Do not run below 8 paid. Fallback of last resort: Sat 7 Nov.</td></tr>
          </tbody>
        </table>
      </div>
      <p class="src">Twenty-five seats in six weeks is ambitious from a cold start. The plan assumes it because three things push the same way: the early bird, the warm 2023 list, and a month in Dubai in person. Twenty-five paid seats is the target, ten early bird and fifteen standard; twenty is still a good day.</p>
    </section>

    <section class="col">
      <div class="sec-head"><h2>Seven things to fix or watch before Monday</h2></div>
      <div class="flags">
        <div class="flag risk"><div class="bar"></div><div>
          <h4>Drop the "3x in 3 years or refund" guarantee <span class="tag">Risk</span></h4>
          <p>The playbook says Bitcoin has never failed to triple over any three-year window since 2013. That is not true. Someone who bought at the December 2017 top saw roughly 1.2x by December 2020, and the April 2021 top was flat three years later. Anyone who bought at a cycle peak would trigger the refund. Beyond the maths, a written price guarantee on a virtual asset is the kind of promotion Dubai's Virtual Assets Regulatory Authority (VARA) marketing rules exist to stop. Keep the recovery guarantee, which you control, and add a lifetime seat at future cohorts.</p>
        </div></div>
        <div class="flag warn"><div class="bar"></div><div>
          <h4>The early bird is the engine; the day is a proof, not a payday <span class="tag">Caution</span></h4>
          <p>Ten early-bird seats at $1,000 plus fifteen at $2,000 is $40,000 gross. The day's own costs are covered by the first six seats, and the whole five-week Dubai stay by the first eleven, with a sensible venue rather than a five-star one. The early bird ends when the tenth seat is paid, not on a date, and the count is posted honestly; that is what makes the first three weeks of calls move. Its real output is testimonials, a room full of people who have done the pipeline, and feedback forms. Those decide whether 1:1, another group day, or an advanced day comes next. Do not price or promise any of that before 19 October.</p>
        </div></div>
        <div class="flag warn"><div class="bar"></div><div>
          <h4>Teach the framework, never the amount <span class="tag">Caution</span></h4>
          <p>The landing page promises "specific amounts, specific rails, specific intervals" for each person. A personal recommendation on a virtual asset transaction is VARA's definition of Advisory Services, a licensed activity. The fix is wording and posture: you and Basem teach the pipeline and the sizing framework; each person writes their own plan in their own notebook.</p>
        </div></div>
        <div class="flag warn"><div class="bar"></div><div>
          <h4>Basem needs a defined slot, a fee, and a rehearsal <span class="tag">Caution</span></h4>
          <p>He runs the 10:45 build session and a Q&amp;A after it, remotely. Agree this week: exactly which CypherBox screens and swaps he will demo, whether he is paid a flat fee or a share per seat, the video link and a backup link, and the dry run on 10 October. A remote session that fails on hotel wifi is the biggest single-point risk on the day, so the room gets a hotspot as a fallback.</p>
        </div></div>
        <div class="flag risk"><div class="bar"></div><div>
          <h4>Cambodia: the bank account and the P2P market must not touch <span class="tag">Risk</span></h4>
          <p>The National Bank of Cambodia's 2025 rules put Bitcoin in the prohibited Group 2 bucket and tell banks not to facilitate crypto transactions. Opening a USD account there for living and savings is sensible. Running the USD-to-USDT market's fiat legs through that account is how it gets frozen. Keep the market's fiat side on rails in jurisdictions that allow it and with counterparties outside Cambodia; keep the Cambodian account clean. Details on the Budget tab.</p>
        </div></div>
        <div class="flag warn"><div class="bar"></div><div>
          <h4>One offer, one identity <span class="tag">Caution</span></h4>
          <p>Lead with the Dubai workshop only. The earlier remote Paycheck Plan is parked; running it alongside would split the message. People who fit but cannot travel go on a list for a remote cohort later, with nothing promised.</p>
        </div></div>
        <div class="flag ok"><div class="bar"></div><div>
          <h4>Your warmest list already exists, and part of it lives in Dubai <span class="tag">Asset</span></h4>
          <p>The people you moved money for in 2023 already trusted you with their savings under the worst conditions. They, and the people they told, are tier one. Some of them are in the UAE. From 16 September those are coffees, not calls.</p>
        </div></div>
      </div>
    </section>

    <section class="col">
      <div class="sec-head"><h2>The runway, week by week</h2><span class="stamp">MON 7 SEP → SAT 17 OCT</span></div>
      <div class="runway">
        <div class="rw key"><div class="d">Week 0<small>Mon 7 – Sun 13 Sep</small></div><div><h4>Decide and ignite, before you fly</h4><p>Fix the date. Confirm Basem's slot, fee, and dry-run date. Hold a venue by email. Update the landing page with the StoryBrand rewrite and 17 October. Build the 100-name list. Start outbound Wednesday. Posts 1 to 3 go out. Book the Dubai monthly rental.</p></div></div>
        <div class="rw"><div class="d">Mon 14 – Wed 16 Sep</div><div><h4>Travel without stopping the engine</h4><p>Messages and follow-ups continue from the phone. Arrive Dubai Wed 16 Sep. Walk the shortlisted venues Thursday and Friday.</p></div></div>
        <div class="rw"><div class="d">Weeks 1–2<small>Mon 14 – Sun 27 Sep</small></div><div><h4>Full-rate outreach, now partly in person</h4><p>10 messages, 5 follow-ups, 3 calls or coffees, 1 post every weekday. Two Dubai meetups a week. Target by 27 Sep: 20 fit calls booked, 10 done. Basics session #1 announced for Sat 3 Oct.</p></div></div>
        <div class="rw"><div class="d">Weeks 3–4<small>Mon 28 Sep – Sun 11 Oct</small></div><div><h4>Fit-call engine, Basics sessions, curriculum lock</h4><p>3 to 5 fit calls a day. Basics #1 Sat 3 Oct and #2 Sat 10 Oct, online, 90 minutes. Curriculum locked with Basem by 4 Oct. <strong>Fri 9 Oct: the ten-seat check.</strong> Sat 10 Oct evening: remote dry run with Basem on real phones. Sun 11 Oct: pre-work pack sent. Target by 11 Oct: 55 fit calls done, 25 through Basics, 15 seats paid.</p></div></div>
        <div class="rw"><div class="d">Week 5<small>Mon 12 – Fri 16 Oct</small></div><div><h4>Close and prepare</h4><p>Mon 12 Oct hard close: agreements signed, seats paid, headcount to the venue. Thu 15 Oct venue walkthrough and wifi test with Basem on the link. Fri 16 Oct: test sats sent to every attendee's Lightning address, workbooks printed.</p></div></div>
        <div class="rw key"><div class="d">Sat 17 Oct</div><div><h4>Workshop day</h4><p>9:00 to 17:00. Basem's build session at 10:45. Recovery test at 15:30. Testimonials collected in the room.</p></div></div>
        <div class="rw"><div class="d">Mon 19 Oct</div><div><h4>Cambodia mode decision</h4><p>Count cash received. Pick the spending mode on the Budget tab. Book the flight to Phnom Penh for around 1 November. Set the float for the USD desk. Read every feedback form before deciding anything about 1:1, group, or advanced formats.</p></div></div>
        <div class="rw"><div class="d">Sun 1 Nov</div><div><h4>Phnom Penh</h4><p>Six months, November 2026 to April 2027. Residency permit application in the first week.</p></div></div>
      </div>
    </section>

    <section class="col">
      <div class="sec-head"><h2>Decisions I made for you, with the reasoning</h2></div>
      <p>Each of these is reversible. Overrule any of them and the rest of the plan still holds.</p>
      <div class="decisions" style="margin-top:14px">
        <div class="dec"><div class="q">Workshop date</div><div class="a"><b>Saturday 17 October 2026.</b> Six weeks of runway, a month of you in Dubai beforehand, Saturday so people fly in Friday and out Sunday. Slip to 24 October only if fewer than eight seats are confirmed on 9 October.</div></div>
        <div class="dec"><div class="q">Ticket and room</div><div class="a"><b>$2,000 a seat. First ten seats $1,000. Paid in full to confirm. Target 25: ten early bird plus fifteen standard.</b> The early bird closes on the tenth paid seat, never on a date, and the count is posted as it moves. No deposit split; it adds admin for nothing. Twenty-five runs well with Basem remote, one assistant, and neighbours helping.</div></div>
        <div class="dec"><div class="q">Scope</div><div class="a"><b>Beginner day, hot wallet only, on CypherBox.</b> Cold storage, multisig and inheritance move to an advanced workshop offered to attendees afterwards. No hardware device in the seat price.</div></div>
        <div class="dec"><div class="q">Guarantee</div><div class="a"><b>Recovery-or-refund only, plus a lifetime seat at future cohorts.</b> Drop the price guarantee. Have the agreement reviewed by a UAE lawyer before the first payment.</div></div>
        <div class="dec"><div class="q">Dubai stay</div><div class="a"><b>Monthly studio or room in JLT, Barsha Heights or Deira, 16 Sep to about 20 Oct.</b> Far cheaper than five weeks of hotel nights, and you need a quiet room for fit calls. The day itself uses a good business-centre training room or a mid-range hotel meeting room; five-star is not what this ticket pays for.</div></div>
        <div class="dec"><div class="q">Payment rails</div><div class="a"><b>Bank transfer or stablecoin first, card as a fallback.</b> Payment in full confirms the seat; hard close 12 October.</div></div>
        <div class="dec"><div class="q">Cambodia</div><div class="a"><b>Going, around 1 November.</b> Spending mode set on 19 October by cash collected. Residency permit at $1,200 in year one, $300 renewal, instead of visa extensions.</div></div>
      </div>
    </section>
  </div>
</div>

<!-- ═══════════════════════════════ TAB 2: LAUNCH PACK ═══════════════════════════════ -->
<div class="panel" id="panel-launch">
  <div class="wrap">
    <div class="col">
      <div class="eyebrow">Priority 1 · Campaign and outbound</div>
      <h1>Week zero, then the daily engine.</h1>
      <p class="lead">Everything below is ready to use as written. Scripts have copy buttons. The checklist remembers what you tick on this device.</p>
    </div>

    <section class="col">
      <div class="sec-head"><h2>Week-zero checklist</h2><span class="stamp">MON 7 – SUN 13 SEP</span></div>
      <ul class="check" data-store="wk0">
        <li><input type="checkbox" id="c1"><label for="c1">Fix the date: Saturday 17 October 2026<small>On the landing page, the fit-call booking page, and your LinkedIn headline.</small></label></li>
        <li><input type="checkbox" id="c11"><label for="c11">Confirm Basem<small>Scope of the 10:45 build session and Q&amp;A, which CypherBox screens and swaps he demos, flat fee or per-seat share, video link plus a backup, and the remote dry run on Sat 10 Oct.</small></label></li>
        <li><input type="checkbox" id="c2"><label for="c2">Hold a venue by email, walk it after you land<small>Two business centres (JLT, Barsha Heights) and one mid-range hotel, day-use training room for 25, classroom setup, lunch and two breaks, strong wifi for a remote presenter. Ask whether a ticketed private workshop needs a Department of Economy and Tourism event permit through them.</small></label></li>
        <li><input type="checkbox" id="c12"><label for="c12">Book the Dubai monthly rental<small>Studio or room, 16 Sep to about 20 Oct, with a quiet corner for calls. JLT, Barsha Heights or Deira.</small></label></li>
        <li><input type="checkbox" id="c3"><label for="c3">Apply the StoryBrand rewrite to the landing page<small>Customer-first hero, internal problem line, three-step plan, two-futures section. Remove the 3x guarantee. Replace "cold storage" with the pipeline promise. Add Basem as the wallet expert.</small></label></li>
        <li><input type="checkbox" id="c4"><label for="c4">Fit-call link live<small>20 minutes, cal.com. Three screening questions on the form: monthly income band, country, "what made you book".</small></label></li>
        <li><input type="checkbox" id="c5"><label for="c5">Payment path and agreement<small>Bank details, a stablecoin address, and a card link as fallback. Two amounts: $1,000 early bird, $2,000 standard, paid in full. Draft the service agreement and send it to a UAE lawyer.</small></label></li>
        <li><input type="checkbox" id="c6"><label for="c6">Build the 100-name list in three tiers, marking who is in the UAE<small>Tier 1: people you moved money for in 2023 and their families. Tier 2: people who have asked you about Bitcoin in the last two years. Tier 3: Gulf and diaspora professionals with stable income. One sheet: name, tier, city, channel, last touch, status.</small></label></li>
        <li><input type="checkbox" id="c7"><label for="c7">Fix LinkedIn headline and About<small>One identity. "Security engineer who moved $500k in Bitcoin through a war. Teaching professionals to buy, stack and hold it themselves. Dubai, 17 Oct."</small></label></li>
        <li><input type="checkbox" id="c8"><label for="c8">Schedule posts 1 to 3<small>Copy is below. Facebook in Sudanese Arabic, LinkedIn in English, one reel.</small></label></li>
        <li><input type="checkbox" id="c9"><label for="c9">Start outbound on Wednesday 9 September<small>Tier 1 first. 10 messages or voice notes, 3 calls. Do not wait for the page to be perfect.</small></label></li>
        <li><input type="checkbox" id="c10"><label for="c10">Announce Bitcoin Basics session #1 for Saturday 3 October<small>Online, 90 minutes, free for anyone who passed the fit call. Stage two of the funnel and the bridge to the $5k ask.</small></label></li>
      </ul>
    </section>

    <section class="col">
      <div class="sec-head"><h2>The daily engine</h2><span class="stamp">EVERY WEEKDAY</span></div>
      <div class="engine">
        <div class="eng"><div class="v">10</div><div class="l">new warm messages or voice notes</div></div>
        <div class="eng"><div class="v">5</div><div class="l">follow-ups on earlier messages</div></div>
        <div class="eng"><div class="v">3</div><div class="l">calls, or coffees once you are in Dubai</div></div>
        <div class="eng"><div class="v">1</div><div class="l">post published</div></div>
      </div>
      <p style="margin-top:14px">Track three numbers weekly and nothing else: conversations started, fit calls booked, dollars collected. Likes are not a number.</p>
      <div class="tbl" style="margin-top:14px">
        <table>
          <thead><tr><th>Week</th><th class="num">Touches</th><th class="num">Fit calls booked</th><th class="num">Fit calls done</th><th class="num">Through Basics</th><th class="num">Seats paid</th><th class="num">Cash in</th></tr></thead>
          <tbody>
            <tr><td>Wk 0 · 7 Sep</td><td class="num">30</td><td class="num">3</td><td class="num">0</td><td class="num">0</td><td class="num">0</td><td class="num">$0</td></tr>
            <tr><td>Wk 1–2 · 14 Sep</td><td class="num">150</td><td class="num">20</td><td class="num">10</td><td class="num">0</td><td class="num">0</td><td class="num">$0</td></tr>
            <tr><td>Wk 3–4 · 28 Sep</td><td class="num">150</td><td class="num">30</td><td class="num">55</td><td class="num">25</td><td class="num">15</td><td class="num">$20,000</td></tr>
            <tr class="hl"><td>Wk 5 · 12 Oct</td><td class="num">60</td><td class="num">10</td><td class="num">75</td><td class="num">35</td><td class="num">20–25</td><td class="num">$30,000–40,000</td></tr>
          </tbody>
        </table>
      </div>
      <p class="src">Assumes 40% of fit calls go to Basics and 60 to 70% of Basics attendees pay; the playbook's numbers were set for a $5,000 ticket, so these are conservative here. Cash-in assumes the first ten seats at $1,000 and the rest at $2,000, paid in full.</p>
    </section>

    <section class="col">
      <div class="sec-head"><h2>Outbound call script, warm network</h2><span class="stamp">5 MINUTES</span></div>
      <p>This is a phone call to someone who knows you. The goal is not to sell the seat. The goal is one of two next steps: a fit call booked, or a clear no. Say less than feels natural.</p>
      <div class="script" style="margin-top:14px">
        <div class="sh"><span class="sl">Open</span><button class="copy" data-copy="call-open">Copy</button></div>
        <div class="body" id="call-open">[Name], it's Ahmed. Do you have three minutes? Good.

You remember 2023, when the banks froze and I was moving money for people. I have turned what I did then into one day of teaching. It is in Dubai on 17 October, for a small group, and it is about one thing: getting your savings into Bitcoin, step by step from buying USDT to holding Bitcoin yourself, so that no bank, app, or border can freeze it.

I am calling you first because you were there. I am not asking you to decide anything on this call.

<i>[Pause. Let them react. Whatever they say, listen for 30 seconds.]</i></div>
      </div>
      <div class="script">
        <div class="sh"><span class="sl">The ask</span><button class="copy" data-copy="call-ask">Copy</button></div>
        <div class="body" id="call-ask">Here is what I am asking. Twenty minutes on a call next week where I check whether this is actually right for you. Some people I will tell no. If it fits, there is a short online session on 3 October and then the day in Dubai.

Would Tuesday or Thursday be better for the twenty minutes?

<i>[Book it on the spot. Send the calendar link while still on the phone. If they are in the UAE, make it a coffee after the 16th.]</i></div>
      </div>
      <div class="branch">
        <div class="br yes"><b>They ask about price</b>The day is two thousand dollars, and the first ten seats are a thousand. It comes with a guarantee that you can delete and recover your own wallet before you go home, or the money comes back. That is for the fit call though. First I want to know if you should even be in the room.</div>
        <div class="br no"><b>They are not a fit or say no</b>Understood, and thank you for hearing me out. One favour: if someone comes to mind who has real savings and is worried about where they sit, would you tell them to call me? <i>Then end the call. Do not linger.</i></div>
      </div>
      <div class="script" style="margin-top:12px">
        <div class="sh"><span class="sl">WhatsApp voice note, 45 seconds (for the Sudanese network)</span><button class="copy" data-copy="vn">Copy</button></div>
        <div class="body" id="vn">Salam [Name], Ahmed here. Quick one, no need to reply now. I'm running one day in Dubai on 17 October on how to move savings into Bitcoin and hold it yourself, the same way I did it for people in 2023. Small group, hands-on, you leave with it working on your own phone. I thought of you. If you want the details, just reply "Dubai" and I'll send them. If it's not for you, no problem at all.</div>
        <div class="note">Record it in dialect, not from this text. Voice notes get answered; long texts get read and forgotten.</div>
      </div>
    </section>

    <section class="col">
      <div class="sec-head"><h2>Fit call script</h2><span class="stamp">20 MINUTES</span></div>
      <ol class="steps">
        <li><div><strong>Open with silence.</strong> "Tell me about your current financial setup and what made you book this call." Then say nothing for three minutes. You are diagnosing.</div></li>
        <li><div><strong>Three gates, asked plainly.</strong> "Is your monthly income stable, and roughly what band is it in?" "Do you have savings you want to protect, and roughly what order of size?" "Are you comfortable installing apps and following instructions on your own phone?" Hesitation on the third is fine; evasion on the first two is a no.</div></li>
        <li><div><strong>Name the fear back.</strong> "So what I'm hearing is you want [their words], and what is stopping you is [their words]. Is that right?"</div></li>
        <li><div><strong>Shape of the offer, in three steps.</strong> "There is a 90-minute online session on 3 October so everyone starts from the same baseline. Then one full day in Dubai on 17 October where you build the whole pipeline on your own phone with Basem, who built the wallet: buy USDT, swap it into Bitcoin, stack, and move it to a wallet only you control. Then you prove it works by deleting it and bringing it back. You leave with a working setup and a written plan you made yourself."</div></li>
        <li><div><strong>Price and guarantee, then stop.</strong> "It is two thousand dollars. The first ten seats are a thousand and [N] of those are left. Paid in full confirms the seat. If you cannot recover your own wallet by the end of the day, you get all of it back. Do you want to go to the 3 October session?" Then wait. The next person who speaks moves.</div></li>
        <li><div><strong>Decline kindly when it is a no.</strong> "I don't think this is the right room for you right now, and I'd rather tell you that than take your money." If they fit but cannot travel, take their name for a remote cohort later and promise nothing else.</div></li>
      </ol>
    </section>

    <section class="col">
      <div class="sec-head"><h2>Objections you will hear, and what to say</h2></div>
      <div class="obj">
        <div class="ob"><div class="they">"Two thousand is a lot."</div><div class="you">For a day, yes. It is also less than one bad transfer fee on the money you are protecting, and far less than most people lose the first time they hold Bitcoin without a process. If you decide this week it is a thousand; the first ten seats are half price and [N] are left. The question is what it costs to learn this during the next freeze instead of before it.</div></div>
        <div class="ob"><div class="they">"I can learn this on YouTube."</div><div class="you">You can, and you have had years to. The reason you have not is not a lack of videos. It is that nobody was standing next to you when you deleted the wallet. That is the whole day.</div></div>
        <div class="ob"><div class="they">"Why Dubai? Why in person?"</div><div class="you">Because seed phrases are written on paper, not screens, and because I want to watch you recover your wallet with my own eyes before I let you go home. That does not work on Zoom.</div></div>
        <div class="ob"><div class="they">"Where is the cold storage part?"</div><div class="you">Not in this day, on purpose. Cold storage protects a balance you already have. This day builds the pipeline that creates the balance and gets it into your hands. When you have something worth locking away, the advanced day covers hardware, multisig, and inheritance. Attendees get first seats.</div></div>
        <div class="ob"><div class="they">"Is Bitcoin halal?"</div><div class="you">I am not a scholar and I will not pretend to be. Several scholars have ruled that owning Bitcoin as an asset is permissible; some disagree. What the day teaches is custody and protection, not speculation or leverage. Ask someone you trust and come back with a clear conscience.</div></div>
        <div class="ob"><div class="they">"What if the price crashes?"</div><div class="you">It will, at some point. The day is not a price call. It is about making sure that whatever you decide to hold, you hold it in a way that nobody can take, freeze, or lose. If you want predictions, I am the wrong person.</div></div>
        <div class="ob"><div class="they">"I need to think about it."</div><div class="you">You should. It is your money. What specifically do you want to think through? Sometimes it is a question I can answer in thirty seconds.</div></div>
        <div class="ob"><div class="they">"Can you just set it up for me?"</div><div class="you">No, and you should not want anyone to. If someone else holds your keys, it is their Bitcoin. Basem and I will be next to you while you do it, which is different.</div></div>
        <div class="ob"><div class="they">"Is this legal where I live?"</div><div class="you">Holding your own Bitcoin is legal in most countries and restricted in a few. We cover where you live on the day, and I will tell you plainly if your country is one of the hard ones. I will not tell you to break a law.</div></div>
      </div>
    </section>

    <section class="col">
      <div class="sec-head"><h2>First eight posts, ready to publish</h2><span class="stamp">WEEKS 0–4</span></div>
      <p>Same facts, different voice per platform. Facebook is for the Sudanese network in dialect. LinkedIn is for the Gulf professional class in English. Reels are face-to-camera with the hook in the first two seconds. One call to action per post, always the fit call.</p>

      <div class="post" style="margin-top:14px" dir="rtl">
        <div class="pm" dir="ltr"><span class="pill acc">Post 1</span><span class="pill">Facebook · Arabic</span><span class="pill">Mon 7 Sep</span><button class="copy" data-copy="p1" style="margin-left:auto">Copy</button></div>
        <div class="hook">يوم البنوك وقفت</div>
        <div class="pb" id="p1">في أبريل ٢٠٢٣ البنوك وقفت. التطبيقات وقفت. ويسترن يونيون بتاخد ٥٪. وناس كتيرة كان عندها ٤٨ ساعة تطلع بكل حاجة تملكها.

في الشهور الجاية حوّلت أكتر من نص مليون دولار بيتكوين وعملات مستقرة لناس أعرفهم شخصياً. كل تحويل وصل. عمولتي كانت ١ إلى ٢٪.

ما عملتها عشان عندي قروش كتيرة. عملتها عشان عارف كيف.

الفرق ده هو اللي حأعلّمه في يوم واحد في دبي، ١٧ أكتوبر. مجموعة صغيرة، شغل عملي على تلفونك، بتطلع والحاجة شغالة في يدك.

لو عندك مدخرات عايز تحميها، اكتب لي "دبي" في الخاص وأرسل ليك التفاصيل.</div>
        <div class="note" dir="ltr">Written in plain Arabic leaning Sudanese. Rewrite any line that does not sound like you talking to a cousin.</div>
      </div>

      <div class="post">
        <div class="pm"><span class="pill acc">Post 2</span><span class="pill">LinkedIn · English</span><span class="pill">Tue 8 Sep</span><button class="copy" data-copy="p2" style="margin-left:auto">Copy</button></div>
        <div class="hook">Same eight years. Two currencies. One went 230x the wrong way.</div>
        <div class="pb" id="p2">In 2018 one US dollar cost 26 Sudanese pounds.
When the war started in April 2023 it cost 600.
Today it costs about 6,000.

On 8 August 2018 I was paid in Bitcoin for a website. It was worth $6,500 a coin that day.

I am not posting this to sell Bitcoin. I am posting it because most of the professionals I know in the Gulf and the diaspora still hold the majority of their savings in a currency and a bank that someone else controls.

Currency risk is not a Sudanese problem. It is a "you do not hold the keys" problem, and it arrives without notice.

On 17 October I am running one day in Dubai for people who have real savings and want to stop hoping: from buying your first USDT to holding Bitcoin nobody can freeze. The first ten seats are half price. If that is you, the link to a 20-minute fit call is in my profile.</div>
      </div>

      <div class="post">
        <div class="pm"><span class="pill acc">Post 3</span><span class="pill">Reel · Instagram / TikTok</span><span class="pill">Wed 9 Sep</span><button class="copy" data-copy="p3" style="margin-left:auto">Copy</button></div>
        <div class="hook">Hook: "One dollar costs six thousand Sudanese pounds today."</div>
        <div class="pb" id="p3">[0–2s, face to camera] One US dollar costs six thousand Sudanese pounds today.
[2–10s] In 2018 it was twenty-six. Two hundred and thirty times. Eight years. That is what it looks like when your savings sit in something you do not control.
[10–25s] In April 2023 the banks froze. I moved half a million dollars in Bitcoin for people who had 48 hours to leave. Every transfer arrived. It did not need a bank, an app, or permission.
[25–35s] The difference between the people who could move and the people who could not was not money. It was knowing how, before they needed it.
[35–45s] I am teaching exactly that, hands-on, one day in Dubai on 17 October. Link in bio. Twenty-minute call first. I say no to most people.</div>
      </div>

      <div class="post">
        <div class="pm"><span class="pill acc">Post 4</span><span class="pill">LinkedIn · English</span><span class="pill">Thu 10 Sep</span><button class="copy" data-copy="p4" style="margin-left:auto">Copy</button></div>
        <div class="hook">I pushed my Bitcoin private key to a public GitHub repo. Here is what it taught me.</div>
        <div class="pb" id="p4">2021. I had a wallet with real money in it. I was moving fast on a side project, committed a config file, and pushed.

The key was in the file. The wallet was empty within the hour.

I have spent fifteen years securing enterprise and fintech systems. I knew better. I still did it, because self-custody failures are not knowledge failures. They are process failures, and a process you have never tested under pressure is a guess.

That mistake is now the first thing I teach. Not "keep your keys safe". A specific, boring, written procedure that survives a bad day, and a test where you delete your wallet in front of me and bring it back.

If you hold Bitcoin and have never done a recovery test, you do not know if you own it. Fit call link in my profile.</div>
      </div>

      <div class="post" dir="rtl">
        <div class="pm" dir="ltr"><span class="pill acc">Post 5</span><span class="pill">Facebook · Arabic</span><span class="pill">Sat 12 Sep</span><button class="copy" data-copy="p5" style="margin-left:auto">Copy</button></div>
        <div class="hook">ليه ويسترن يونيون ٥٪ وأنا كنت ١٪؟</div>
        <div class="pb" id="p5">ناس كتيرة سألتني السؤال ده في ٢٠٢٣.

الإجابة بسيطة: ويسترن يونيون بتدفع لبنوك، ووكلاء، ومكاتب، وكل واحد بياخد حصة. البيتكوين ما فيه وسيط. التحويل بيمشي مني ليك مباشرة وبيوصل في دقائق، مش في ٣ إلى ٥ أيام.

وده مش عمل خيري. ده شغل محترف بعمولة أقل لأن التكلفة الحقيقية أقل.

الناس اللي اتعلمت الحاجة دي قبل الأزمة كانت مرتاحة وقت الأزمة. الناس اللي ما اتعلمت دفعت ٥٪ واستنت.

يوم ١٧ أكتوبر في دبي حأعلّم الحاجة دي بالكامل، بإيدك وعلى تلفونك. اكتب "دبي" في الخاص.</div>
      </div>

      <div class="post">
        <div class="pm"><span class="pill acc">Post 6</span><span class="pill">LinkedIn · English</span><span class="pill">Tue 15 Sep</span><button class="copy" data-copy="p6" style="margin-left:auto">Copy</button></div>
        <div class="hook">The Gulf professional class has a currency-risk problem and almost nobody is talking about it.</div>
        <div class="pb" id="p6">You earn in dirhams or riyals, pegged to the dollar. You feel safe.

Your savings are in a bank account that can be frozen by a compliance flag, a sanctions list you did not know you were near, or a residency status that changes when a job does. Your family's money back home is in a currency that may have lost half its value since you last checked.

None of this is dramatic. It is ordinary. And it is why the professionals I work with are not asking "should I buy Bitcoin". They are asking "how do I actually get from my salary to Bitcoin I hold myself, without getting it wrong".

That is a pipeline, not a purchase. It is the one I build with people in a room, not a post.

One day. Dubai. 17 October. Fit call first, link in profile.</div>
      </div>

      <div class="post">
        <div class="pm"><span class="pill acc">Post 7</span><span class="pill">LinkedIn + Facebook</span><span class="pill">Mon 21 Sep</span><button class="copy" data-copy="p7" style="margin-left:auto">Copy</button></div>
        <div class="hook">The person who built the wallet is in the room. Meet Basem.</div>
        <div class="pb" id="p7">Most Bitcoin workshops are one person and a slide deck.

On 17 October in Dubai the wallet-building session is run by Basem Alasi, who builds CypherBox, the wallet you will be using. He joins the room live and walks every phone through the same pipeline: buy USDT, move it into Liquid, swap it into Bitcoin, stack it, and when the balance is real, withdraw it to a wallet only you control.

I handle the why, the threat model, and the 2023 pressure playbook. Basem handles the how, screen by screen, and takes questions until there are none left.

Then, at half past three, everyone deletes the app and recovers it from paper. If you cannot, you get your money back.

Twenty-five seats. The first ten are $1,000, then $2,000. [N] early-bird seats left. Fit call link in my profile.</div>
        <div class="note">Tag Basem on both platforms. Ask him to share it the same day.</div>
      </div>

      <div class="post">
        <div class="pm"><span class="pill acc">Post 8</span><span class="pill">All platforms</span><span class="pill">After Basics #1 · Sun 4 Oct</span><button class="copy" data-copy="p8" style="margin-left:auto">Copy</button></div>
        <div class="hook">What happened in the first Bitcoin Basics session, and what people said after.</div>
        <div class="pb" id="p8">Yesterday twelve people spent ninety minutes with me online, before the Dubai day, getting to the same baseline: what a seed phrase is, why it lives on paper, the difference between the three ways Bitcoin moves.

[Quote one attendee, with permission, by first name and city.]

[Quote a second one.]

Seats for 17 October are [X] of 25 confirmed, and [N] early-bird seats are left. If you want one, the fit call link is in my profile. The next online session is 10 October.</div>
        <div class="note">Post within 24 hours of the session. Real quotes only. Real seat counts only.</div>
      </div>
    </section>
  </div>
</div>

<!-- ═══════════════════════════════ TAB 3: CURRICULUM ═══════════════════════════════ -->
<div class="panel" id="panel-curriculum">
  <div class="wrap">
    <div class="col">
      <div class="eyebrow">Priority 2 · Beginner curriculum, with Basem</div>
      <h1>One day, one pipeline, one proof.</h1>
      <p class="lead">The day builds a working pipeline from local currency to Bitcoin the person holds, on their own phone, in CypherBox, with the person who built the wallet on the screen. Everything before 15:30 exists so the recovery test passes. Cold storage is deliberately not in this day; it is the advanced workshop that follows.</p>
    </div>

    <section class="col">
      <div class="sec-head"><h2>Programme architecture</h2></div>
      <div class="arch">
        <div class="stage"><div class="sn">Stage 1</div><h4>Fit call</h4><p>20 min, phone or coffee. Filter for stable income, real savings, phone comfort, and a reason. Output: a yes, a no, or a downsell.</p></div>
        <div class="stage"><div class="sn">Stage 2</div><h4>Bitcoin Basics</h4><p>90 min, online, cohort of 10 to 15. Shared baseline so nobody asks "what is a seed phrase" in Dubai. Output: pre-work assigned.</p></div>
        <div class="stage core"><div class="sn">Stage 3</div><h4>Beginner workshop day</h4><p>8 hours, Dubai, up to 25 people, Basem remote for the build. Output: a working pipeline, a written plan, a passed recovery test.</p></div>
        <div class="stage"><div class="sn">Next</div><h4>Decided after Dubai</h4><p>1:1, another group day, an advanced cold-storage day, or a remote cohort. Chosen from workshop results and attendee feedback, not before.</p></div>
      </div>
    </section>

    <section class="col">
      <div class="sec-head"><h2>The pipeline everyone builds</h2><span class="stamp">IN CYPHERBOX · LED BY BASEM</span></div>
      <p>Two scenarios are shown, one for a country with a licensed exchange and one for a peer-to-peer country. Both end in the same place. Basem confirms the exact screens and supported swaps before the dry run; the steps below are the teaching sequence, not a claim about a specific app version.</p>
      <div class="flow" style="margin-top:14px">
        <div class="fl"><div class="fn">Step 1</div><h4>Buy USDT</h4><p>Peer-to-peer with escrow, or a licensed exchange where one exists. Fee and settlement compared live for two countries.</p></div>
        <div class="fl"><div class="fn">Step 2</div><h4>Receive it in CypherBox</h4><p>USDT lands in the person's own wallet on Liquid. First moment they hold something no platform controls.</p></div>
        <div class="fl"><div class="fn">Step 3</div><h4>Swap into Bitcoin</h4><p>USDT to L-BTC on Liquid, or to Bitcoin on Lightning for spending. Why the two rails exist and when to use each.</p></div>
        <div class="fl"><div class="fn">Step 4</div><h4>Stack on a schedule</h4><p>Repeat steps 1 to 3 on a cadence matched to income. The 200-week moving average as the behavioural baseline.</p></div>
        <div class="fl"><div class="fn">Step 5</div><h4>Withdraw to your hot wallet</h4><p>When the balance is meaningful, move it to a mainchain wallet only the person controls. The advanced day takes it from there to cold storage.</p></div>
      </div>
    </section>

    <section class="col">
      <div class="sec-head"><h2>Stage 2 · Bitcoin Basics session</h2><span class="stamp">90 MIN · ONLINE · SAT 3 OCT AND SAT 10 OCT</span></div>
      <div class="tbl">
        <table>
          <thead><tr><th>Min</th><th>Block</th><th>What they must leave knowing</th></tr></thead>
          <tbody>
            <tr><td>0–10</td><td>Why this exists</td><td>Sudan 2023 in five minutes. The one rule of the Dubai day: everyone does the recovery test.</td></tr>
            <tr><td>10–30</td><td>What Bitcoin actually is</td><td>A ledger nobody owns; 21 million; a key is ownership. Not price, not mining detail.</td></tr>
            <tr><td>30–45</td><td>Keys, seeds, and custody</td><td>Seed phrase = the wallet. Exchange balance = an IOU. Why paper, never a photo or a note app.</td></tr>
            <tr><td>45–60</td><td>Stablecoins and the three rails</td><td>What USDT is and is not. Mainchain (slow, final), Lightning (instant, small), Liquid (fast, where the swaps happen). Where each step of the pipeline lives.</td></tr>
            <tr><td>60–75</td><td>Hot wallet now, cold storage later</td><td>What a hot wallet on a phone is good for and what it is not. Why cold storage is a separate skill for a later day. Amount bands that make each sensible.</td></tr>
            <tr><td>75–90</td><td>Basic OPSEC and pre-work</td><td>Never say how much online. Never type a seed. Install CypherBox. Financial snapshot worksheet handed out.</td></tr>
          </tbody>
        </table>
      </div>
      <p class="src">Record the first one; send the recording to anyone who joins late. Basem can drop in for the 45 to 60 block if his time allows; it is not required.</p>
    </section>

    <section class="col">
      <div class="sec-head"><h2>Pre-work pack</h2><span class="stamp">SENT SUN 11 OCT</span></div>
      <ul class="plain">
        <li><strong>Device.</strong> Their own phone, updated, fully charged, with the charger. Not a work phone under corporate management. A laptop is optional this time; the day runs on the phone.</li>
        <li><strong>Install before arrival.</strong> CypherBox, from the official store link Basem provides. Installed, not configured. Everything else is created in the room.</li>
        <li><strong>Bring.</strong> A physical notebook and two pens. Passport, as the venue may ask. A rough financial snapshot: monthly income, liquid savings, and the share they are considering moving. Bands, not exact figures.</li>
        <li><strong>Bring, if they have one.</strong> An account on the exchange or peer-to-peer platform they already use, verified, with a small amount of local currency ready. Anyone without one buys through the demo path with test funds.</li>
        <li><strong>Send Ahmed.</strong> A Lightning address from CypherBox by Thursday 15 October, so test sats can be funded the day before.</li>
        <li><strong>Read.</strong> A two-page primer on personal threat modelling so the 09:30 session lands on prepared minds.</li>
        <li><strong>Provided on the day.</strong> Two backup cards, a printed workbook, test Bitcoin on Lightning and Liquid, and a small USDT amount for the swap exercise.</li>
      </ul>
    </section>

    <section class="col">
      <div class="sec-head"><h2>Stage 3 · Workshop day, module by module</h2><span class="stamp">SAT 17 OCT · 09:00–17:00</span></div>

      <div class="mod">
        <div class="mod-h"><span class="t">09:00–09:30</span><h3>Welcome, the one rule, who is in the room</h3><span class="kind">Talk · Ahmed</span></div>
        <div class="mod-b">
          <div><h5>Objective</h5><p>Set the contract for the day: this is a build, not a lecture, and it ends with a test everyone takes.</p></div>
          <div><h5>Facilitator notes</h5><p>Ahmed's story in five minutes, not fifteen. Each person says one sentence: what they are protecting and from what. Write those on a board; they become the threat models at 09:30. Test the Basem link now, not at 10:45.</p></div>
          <div class="full"><div class="gate"><b>Pass check</b>Every person has said out loud what they are protecting. Basem's video link is live on the room screen.</div></div>
        </div>
      </div>

      <div class="mod">
        <div class="mod-h"><span class="t">09:30–10:30</span><h3>Personal threat model and the shape of your setup</h3><span class="kind">Talk + worksheet · Ahmed</span></div>
        <div class="mod-b">
          <div><h5>Objective</h5><p>Each person leaves with a one-page picture: what lives in the hot wallet, what stays in local currency for now, and what will one day move to cold storage.</p></div>
          <div><h5>Content</h5><ul><li>Six adversaries: thief, coercer, border, bank or state freeze, death, and yourself (loss, mistakes).</li><li>Two layers for today: a spending layer on Lightning, a stacking layer on Liquid. The third layer, cold storage, is named and deferred.</li><li>Backup discipline for a hot wallet: paper, two copies, two places, never a screen.</li><li>Amount bands: when a hot wallet is enough, and the balance at which the advanced day becomes urgent.</li></ul></div>
          <div><h5>Exercise</h5><p>Worksheet: rank your six adversaries, assign the two layers with rough shares, list every place a backup will physically exist. Ahmed walks three real profiles: a salaried expat, a business owner with family abroad, a retiree with heirs.</p></div>
          <div><h5>Facilitator notes</h5><p>Do not recommend shares. Show the framework and three examples, let them fill their own. Say "I am not telling you how much" out loud at least once. Coffee at 10:30.</p></div>
          <div class="full"><div class="gate"><b>Pass check</b>Worksheet complete and shown to a neighbour, who can explain it back.</div></div>
        </div>
      </div>

      <div class="mod">
        <div class="mod-h"><span class="t">10:45–12:30</span><h3>Build the pipeline in CypherBox</h3><span class="kind">Hands-on · Basem, remote</span></div>
        <div class="mod-b">
          <div><h5>Objective</h5><p>A working CypherBox wallet on every phone, the seed on paper, USDT received, swapped into L-BTC and into Lightning, with three live balances.</p></div>
          <div><h5>Sequence</h5><ul><li>Create the wallet. Write the words in the notebook. Verify. Phones on the table face up until everyone is done.</li><li>Receive the provided USDT on Liquid. Watch it arrive. First balance.</li><li>Swap part of it to L-BTC. Second balance. Basem explains what happened underneath in two minutes, no more.</li><li>Swap a small part to Lightning and pay the assistant's invoice. Third balance and first outgoing payment.</li><li>Scenario A, licensed-exchange country: how the USDT purchase and withdrawal to CypherBox looks, shown on Basem's screen. Scenario B, peer-to-peer country: the escrow flow and what to check before releasing.</li><li>Withdrawal to a mainchain hot wallet: shown, not required today. Where the advanced day begins.</li></ul></div>
          <div><h5>Facilitator notes</h5><p>Basem drives; Ahmed and the assistant walk the room. Basem pauses at each balance until every hand is up. Pair fast people with slow people at 11:30. Q&amp;A from 12:00 to 12:30 with Basem, then a working lunch where stragglers catch up.</p></div>
          <div><h5>Common failures</h5><ul><li>Typing the seed into the phone's notes app "just for now". Stop the room and address it once.</li><li>Hotel wifi drops the remote link or the swaps stall. Hotspot on standby; Basem has a second device on mobile data.</li><li>A swap takes longer than the room expects. Have the assistant narrate what a pending swap looks like so nobody re-sends.</li></ul></div>
          <div class="full"><div class="gate"><b>Pass check</b>Three live balances (USDT on Liquid, L-BTC, Lightning) on every phone. One outgoing Lightning payment made. Seed written on paper and verified by the wallet itself.</div></div>
        </div>
      </div>

      <div class="mod">
        <div class="mod-h"><span class="t">13:30–14:30</span><h3>Stacking plan with a framework</h3><span class="kind">Hands-on · Ahmed</span></div>
        <div class="mod-b">
          <div><h5>Objective</h5><p>Each person writes their own stacking plan: source of funds, acquisition route for their country, cadence, and a behavioural rule for drawdowns.</p></div>
          <div><h5>Content</h5><ul><li>Routes by country: licensed exchange, peer-to-peer with escrow, over-the-counter desk, and the stablecoin bridge for hard countries. Fee ladders and settlement times for each.</li><li>Sizing framework: net-worth bands and a personal ceiling, expressed as a range the person picks.</li><li>Cadence: the 200-week moving average as a behavioural baseline, lighter buys far above it, steadier buys near it.</li><li>Records: a simple ledger of every purchase for tax and source-of-funds questions later.</li></ul></div>
          <div><h5>Exercise</h5><p>Worksheet with four boxes: where the money comes from, which route and why, how often and roughly how much as a share of income, and the sentence you will read to yourself on a 40% drawdown day.</p></div>
          <div><h5>Facilitator notes</h5><p>Two worked examples on the board using invented people. Never touch a real number from the room. This is the module where the education-versus-advice line is thinnest; the worksheet keeps you on the right side of it.</p></div>
          <div class="full"><div class="gate"><b>Pass check</b>Plan written in their own hand. Ahmed has not written on anyone's worksheet.</div></div>
        </div>
      </div>

      <div class="mod">
        <div class="mod-h"><span class="t">14:30–15:15</span><h3>Self-custody under pressure</h3><span class="kind">Talk + scenarios · Ahmed</span></div>
        <div class="mod-b">
          <div><h5>Objective</h5><p>A written personal pressure playbook: what you do, in order, for each of five scenarios, with a hot wallet as the tool you have today.</p></div>
          <div><h5>Scenarios</h5><ul><li><strong>Internet down.</strong> Why Lightning dies first, why a Liquid balance waits patiently, what to pre-arrange.</li><li><strong>Bank freeze.</strong> The stablecoin bridge in reverse, peer-to-peer liquidity contacts prepared in advance, never all savings in one rail.</li><li><strong>Coercion.</strong> Why the spending layer is deliberately small, and the honest limits of a phone wallet against a determined adversary. This is where cold storage will matter later.</li><li><strong>Border and seizure.</strong> Travel with nothing on the phone if needed; backups do not travel with you; declaration rules of the countries you cross are followed.</li><li><strong>Death.</strong> A letter, where it lives, who knows. The full inheritance design is advanced-day material.</li></ul></div>
          <div><h5>Facilitator notes</h5><p>Sudan, April 2023, told as a sequence of decisions, not a story. What happened at hour 0, hour 12, day 3. Each scenario ends with the room writing one line in the playbook section of the workbook.</p></div>
          <div class="full"><div class="gate"><b>Pass check</b>Five lines written. Each person can say which rail they would reach for first in a freeze.</div></div>
        </div>
      </div>

      <div class="mod">
        <div class="mod-h"><span class="t">15:15–15:30</span><h3>Pre-test preparation</h3><span class="kind">Hands-on</span></div>
        <div class="mod-b">
          <div><h5>Objective</h5><p>Everyone knows exactly what is about to happen and has the materials to survive it.</p></div>
          <div><h5>Checklist</h5><ul><li>Seed on paper, verified at creation. Copied to the second backup card now.</li><li>Three balances noted by the assistant for the record, amounts only.</li><li>Ahmed reads the protocol aloud. Basem is back on the link for questions. Then no more questions until it is over.</li></ul></div>
        </div>
      </div>

      <div class="mod">
        <div class="mod-h"><span class="t">15:30–16:30</span><h3>The live recovery test</h3><span class="kind">Live test</span></div>
        <div class="mod-b">
          <div class="full"><h5>Protocol</h5>
            <ol class="steps">
              <li><div>Delete CypherBox from the phone entirely. Reinstall from the store.</div></li>
              <li><div>Restore from the written words. Wait for sync. Confirm the USDT and L-BTC balances match the recorded amounts, within fees.</div></li>
              <li><div>Pay a small Lightning invoice from the assistant and receive one back, proving the Lightning path is live after restore.</div></li>
              <li><div>Swap a small amount of L-BTC to Lightning after the restore, proving the swap path is live and the person can do it without Basem talking them through it.</div></li>
              <li><div>Show the assistant the three balances and the second backup card. That is the pass.</div></li>
            </ol>
          </div>
          <div><h5>Rules</h5><ul><li>Neighbours may help. Ahmed, Basem and the assistant answer questions but do not touch a phone.</li><li>A person who cannot complete step 5 by 16:30 gets thirty more minutes after 17:00 with Ahmed. If still not complete, the refund stands, no questions.</li><li>Nobody photographs anyone's screen.</li></ul></div>
          <div><h5>Facilitator notes</h5><p>This module is the product. Rehearse it twice in the 10 October dry run with Basem, once with a deliberately wrong seed word to practise the failure conversation. Have two charged spare phones.</p></div>
        </div>
      </div>

      <div class="mod">
        <div class="mod-h"><span class="t">16:30–16:50</span><h3>Emergency exit protocol</h3><span class="kind">Talk · Ahmed</span></div>
        <div class="mod-b">
          <div><h5>Objective</h5><p>A lawful, written procedure for leaving a country at short notice with your wealth intact and nothing to seize.</p></div>
          <div><h5>Content</h5><ul><li>Before: backups already placed in two jurisdictions; a memorised recovery route; a small spending layer topped up.</li><li>Leaving: phone wiped or carrying only the spending layer; no seeds on your person; declaration rules checked and followed for every border.</li><li>Arriving: restore from backup in a safe place, not at the airport; pre-identified liquidity in the destination; a source-of-funds file ready for any bank or exchange that asks.</li></ul></div>
          <div><h5>Facilitator notes</h5><p>Say plainly that this is about not being robbed or frozen, not about evading anyone's law. Anyone who wants the other thing is in the wrong room.</p></div>
        </div>
      </div>

      <div class="mod">
        <div class="mod-h"><span class="t">16:50–17:00</span><h3>Wrap, next steps, testimonials</h3><span class="kind">Wrap</span></div>
        <div class="mod-b">
          <div><h5>Close</h5><ul><li>Each person reads one line from their plan aloud if they wish.</li><li>Homework: first real purchase within 14 days, a repeat recovery drill in 90 days.</li><li>Feedback form completed in the room before anyone leaves. Day-14 group call date set. WhatsApp group opened, Basem in it.</li></ul></div>
          <div><h5>Testimonials</h5><p>Ask in the room, while the relief is fresh. Phone video, thirty seconds, first name and city. The assistant collects signed permission slips.</p></div>
        </div>
      </div>
    </section>

    <section class="col">
      <div class="sec-head"><h2>Recovery test rubric</h2></div>
      <div class="tbl wrapfirst">
        <table>
          <thead><tr><th>Step</th><th>Evidence</th><th>Pass condition</th></tr></thead>
          <tbody>
            <tr><td>Wallet restored from paper</td><td>Balances on screen</td><td>USDT and L-BTC balances equal recorded amounts, within fees.</td></tr>
            <tr><td>Lightning live after restore</td><td>Paid and received invoice</td><td>Both directions settle within two minutes.</td></tr>
            <tr><td>Swap done unassisted</td><td>New Lightning balance</td><td>L-BTC to Lightning swap completed without step-by-step help.</td></tr>
            <tr><td>Backup discipline</td><td>Two backup cards shown</td><td>Both cards match; seed never typed anywhere except the wallet's own restore screen; no photos.</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="col">
      <div class="sec-head"><h2>Materials and facilitator kit</h2></div>
      <div class="tbl">
        <table>
          <thead><tr><th>Item</th><th>Per</th><th>Notes</th></tr></thead>
          <tbody>
            <tr><td>Backup card, laminated or steel</td><td>Seat</td><td>Two per person. They keep both.</td></tr>
            <tr><td>Printed workbook</td><td>Seat</td><td>Threat model page, stacking worksheet, five-scenario playbook, test protocol, homework, advanced-day outline.</td></tr>
            <tr><td>Test funds</td><td>Seat</td><td>About $20 of USDT on Liquid and a few thousand sats on Lightning, funded on 16 Oct to the address each person sent.</td></tr>
            <tr><td>Basem, remote</td><td>Room</td><td>Runs 10:45 to 12:30 and returns for the test at 15:15. Primary link plus a backup link. His fee or share agreed in week zero.</td></tr>
            <tr><td>Room assistant</td><td>Room</td><td>One ZeroBytes engineer, briefed at the dry run, owns the balance record, the assistant invoice, and the permission slips.</td></tr>
            <tr><td>Connectivity</td><td>Room</td><td>Hotel wifi plus a mobile hotspot as fallback, tested with Basem on 15 Oct. Lightning and the remote link are the first things to fail on bad wifi.</td></tr>
            <tr><td>Spares</td><td>Room</td><td>Two charged phones with CypherBox installed, cables, power strips for every table.</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="col">
      <div class="sec-head"><h2>After Dubai</h2></div>
      <p>Whether the next thing is 1:1, another group day, an advanced cold-storage day, or a remote cohort is decided from two inputs only: the workshop results and the attendee feedback forms. Nothing is priced or promised before 19 October.</p>
      <ul class="plain" style="margin-top:14px">
        <li><strong>Feedback form, filled in the room.</strong> Five questions: what was worth the ticket, what was missing, which follow-on would you pay for and roughly what would it be worth to you, who would you refer, one sentence for the testimonial.</li>
        <li><strong>Candidates to test against the answers.</strong> A remote 1:1 intensive; a repeat group day in Dubai or Kuala Lumpur; an advanced day for attendees who now hold a balance; a remote cohort for people who could not travel.</li>
        <li><strong>Decision date.</strong> Monday 19 October, with the forms read and the cash counted.</li>
      </ul>
    </section>

    <section class="col">
      <div class="sec-head"><h2>Guardrails on every version</h2></div>
      <ul class="plain">
        <li>Education and implementation, never a personal recommendation of amounts, timing, or specific assets. The worksheets exist to keep this true.</li>
        <li>Neither Ahmed nor Basem touches a phone, a seed, or a key. Say it in the agreement, say it in the room.</li>
        <li>No price predictions, anywhere, ever.</li>
        <li>No advice to evade any country's law. Declaration rules are followed, not avoided.</li>
        <li>App screens and supported swaps are confirmed by Basem two weeks before each delivery. Apps change; the procedure should not.</li>
      </ul>
    </section>
  </div>
</div>

<!-- ═══════════════════════════════ TAB 4: BUDGET & CAMBODIA ═══════════════════════════════ -->
<div class="panel" id="panel-budget">
  <div class="wrap">
    <div class="col">
      <div class="eyebrow">Priority 3 · Dubai stay and the Cambodia base</div>
      <h1>Ten early-bird seats pay for Dubai, stay included. The two desks pay for Cambodia.</h1>
      <p class="lead">Every field is editable and remembered on this device. Dubai is now a five-week stay, not a five-night trip. Cambodia is a decided move funded by two P2P desks that already exist or are about to, so its calculator asks what the base costs, what the desks bring in, and what is left for Bitcoin and marriage savings. Flights are round trips from Cairo to Dubai and from Dubai to Phnom Penh, set above Skyscanner's cheapest fares. Living costs are deliberately generous.</p>
    </div>

    <section class="wide">
      <div class="sec-head"><h2>Dubai, 16 September to about 20 October</h2><span class="stamp">STAY + WORKSHOP DAY</span></div>
      <div class="calc">
        <div class="inputs" id="dubai-inputs">
          <div class="inp head"><label>Revenue</label><span></span></div>
          <div class="inp"><label>Early-bird seats sold<small>First ten seats, max 10</small></label><input type="number" data-k="eb" value="10" min="0" max="10"></div>
          <div class="inp"><label>Early-bird price<small>USD</small></label><input type="number" data-k="ebPrice" value="1000" step="100"></div>
          <div class="inp"><label>Standard seats sold<small>After the ten early-bird seats; 25 in total</small></label><input type="number" data-k="std" value="15" min="0" max="15"></div>
          <div class="inp"><label>Standard price<small>USD</small></label><input type="number" data-k="price" value="2000" step="100"></div>
          <div class="inp"><label>Payment fee<small>% of revenue. Card ≈ 3, bank or stablecoin ≈ 0.5</small></label><input type="number" data-k="feePct" value="1" step="0.5"></div>
          <div class="inp head"><label>The stay</label><span></span></div>
          <div class="inp"><label>Flights Cairo ⇄ Dubai, round trip<small>Your figure; Skyscanner shows returns from about $200</small></label><input type="number" data-k="flight" value="650" step="50"></div>
          <div class="inp"><label>Monthly rental, whole stay<small>Studio, about five weeks, generous</small></label><input type="number" data-k="rental" value="2600" step="100"></div>
          <div class="inp"><label>Living costs in Dubai, whole stay<small>Food, transport, coffees with prospects, generous</small></label><input type="number" data-k="living" value="2200" step="100"></div>
          <div class="inp head"><label>The day</label><span></span></div>
          <div class="inp"><label>Venue room, day use<small>Business-centre training room or mid-range hotel, 25 people</small></label><input type="number" data-k="venue" value="500" step="50"></div>
          <div class="inp"><label>Food and beverage per head<small>Lunch and two breaks, hotel rate</small></label><input type="number" data-k="fb" value="60" step="5"></div>
          <div class="inp"><label>Permit, AV, printing</label><input type="number" data-k="extras" value="300" step="50"></div>
          <div class="inp"><label>Basem's fee<small>Flat, or set to 0 and use the share below</small></label><input type="number" data-k="basem" value="500" step="100"></div>
          <div class="inp"><label>Basem's share per seat<small>USD per paid seat, if revenue share</small></label><input type="number" data-k="basemShare" value="0" step="50"></div>
          <div class="inp"><label>Room assistant, day rate</label><input type="number" data-k="assistant" value="400" step="50"></div>
          <div class="inp"><label>Legal review of the agreement<small>UAE counsel, one-off</small></label><input type="number" data-k="legal" value="800" step="100"></div>
          <div class="inp"><label>Backup cards and workbook per seat</label><input type="number" data-k="kit" value="30" step="5"></div>
          <div class="inp"><label>Test funds per seat<small>USDT plus sats</small></label><input type="number" data-k="sats" value="20" step="5"></div>
          <div class="inp"><label>Spares and contingency</label><input type="number" data-k="misc" value="500" step="50"></div>
          <div class="inp"><label>Campaign spend, six weeks</label><input type="number" data-k="campaign" value="2000" step="100"></div>
        </div>
        <div class="results">
          <div class="res-grid">
            <div class="res big"><div class="rl">Net after all costs</div><div class="rv" id="d-net">—</div><div class="rs" id="d-net-s"></div></div>
            <div class="res"><div class="rl">Break-even seats</div><div class="rv" id="d-be">—</div><div class="rs">Day costs only / including the five-week stay, early-bird seats first</div></div>
          </div>
          <div class="res-grid">
            <div class="res"><div class="rl">Revenue</div><div class="rv" id="d-rev">—</div></div>
            <div class="res"><div class="rl">Total cost</div><div class="rv" id="d-cost">—</div></div>
          </div>
          <div class="res">
            <div class="rl" style="margin-bottom:8px">Cost lines</div>
            <div class="lines" id="d-lines"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="col">
      <div class="sec-head"><h2>What the Cambodia base is for</h2></div>
      <p>Your notes name four jobs. Each has a number attached in the calculator below, so the base is judged on whether it does the jobs, not on whether it is cheap.</p>
      <div class="goals" style="margin-top:14px">
        <div class="goal"><h4>Run both P2P desks online</h4><p>The AED to USDT desk keeps running as it is: $100 to $250 a day, six days a week. The USD to USDT desk is new: 2 to 2.5% on about $90,000 a month. Counterparties outside Cambodia; the USD desk needs a float and clean rails.</p></div>
        <div class="goal"><h4>Cut monthly costs</h4><p>So more goes to Bitcoin every month and to marriage savings. The lean mode below is the point of the move.</p></div>
        <div class="goal"><h4>Open a USD account</h4><p>For living, savings and receiving consulting income. Kept separate from the market's fiat legs.</p></div>
        <div class="goal"><h4>Run ZeroBytes remotely</h4><p>Sudan operations from a calm base. A fixed morning block, Sudan time, before the market opens.</p></div>
      </div>
      <div class="flags" style="margin-top:14px">
        <div class="flag risk"><div class="bar"></div><div>
          <h4>Keep the bank account and the market apart <span class="tag">Risk</span></h4>
          <p>Cambodian banks are instructed not to facilitate crypto transactions, and Bitcoin sits in the prohibited Group 2 category. A USD account that receives and sends the fiat side of a USDT market will be flagged and closed, and that can take the residency application down with it. Use the Cambodian account for rent, savings, and consulting income. The AED desk already runs on UAE rails and stays there. The USD desk's fiat legs go on accounts and rails in jurisdictions that permit it, with counterparties in the Gulf, Sudan diaspora, and elsewhere. Do not market either desk to Cambodian residents.</p>
        </div></div>
        <div class="flag warn"><div class="bar"></div><div>
          <h4>The residency permit and the account are linked <span class="tag">Caution</span></h4>
          <p>Banks typically want a long-stay visa or permit to open a foreigner's account, so the permit comes first. Budget the $1,200 for year one and $300 for renewal as you said, apply in the first week, and expect the account to follow a few weeks later.</p>
        </div></div>
      </div>
    </section>

    <section class="wide">
      <div class="sec-head"><h2>Cambodia, six months as a base</h2><span class="stamp">NOV 2026 – APR 2027</span></div>
      <div class="calc">
        <div class="inputs" id="cam-inputs">
          <div class="inp head"><label>Living, per month</label><span></span></div>
          <div class="inp"><label>Months</label><input type="number" data-k="months" value="6" min="1" max="12"></div>
          <div class="inp"><label>Rent<small>Your figure</small></label><input type="number" data-k="rent" value="400" step="50"></div>
          <div class="inp"><label>Utilities and internet<small>Air conditioning most of the day</small></label><input type="number" data-k="util" value="180" step="10"></div>
          <div class="inp"><label>Food and daily life<small>Eating out freely, Western and local</small></label><input type="number" data-k="food" value="800" step="50"></div>
          <div class="inp"><label>Coworking<small>Dedicated desk, reliable power and internet</small></label><input type="number" data-k="cowork" value="150" step="10"></div>
          <div class="inp"><label>Health insurance</label><input type="number" data-k="ins" value="150" step="10"></div>
          <div class="inp"><label>Transport, phone, gym, extras</label><input type="number" data-k="extra" value="250" step="50"></div>
          <div class="inp head"><label>One-off</label><span></span></div>
          <div class="inp"><label>Residency permit, year one<small>Renewal about $300 in year two</small></label><input type="number" data-k="permit" value="1200" step="50"></div>
          <div class="inp"><label>Flights Dubai ⇄ Phnom Penh, round trip<small>Your figure; Skyscanner shows from about AED 2,242 (≈$610)</small></label><input type="number" data-k="flyin" value="900" step="50"></div>
          <div class="inp"><label>USD account opening and minimum balance</label><input type="number" data-k="bank" value="200" step="50"></div>
          <div class="inp"><label>Equipment and setup<small>Second phone, router, desk</small></label><input type="number" data-k="equip" value="500" step="50"></div>
          <div class="inp"><label>Regional delivery trips<small>Count. Zero until a format is decided</small></label><input type="number" data-k="trips" value="0" min="0"></div>
          <div class="inp"><label>Cost per regional trip</label><input type="number" data-k="tripCost" value="2000" step="100"></div>
          <div class="inp"><label>Buffer, months of living costs<small>Kept untouched</small></label><input type="number" data-k="bufferMonths" value="2" min="0"></div>
          <div class="inp head"><label>AED to USDT desk<small>Already running; keeps running as it is</small></label><span></span></div>
          <div class="inp"><label>Income per working day<small>You quoted $100 to $250</small></label><input type="number" data-k="aedDay" value="150" step="25"></div>
          <div class="inp"><label>Working days per week</label><input type="number" data-k="aedDays" value="6" min="0" max="7"></div>
          <div class="inp head"><label>USD to USDT desk<small>New from Cambodia</small></label><span></span></div>
          <div class="inp"><label>Working float<small>Capital tied up in the desk, not spent</small></label><input type="number" data-k="float" value="10000" step="500"></div>
          <div class="inp"><label>Monthly volume<small>You expect about $90,000</small></label><input type="number" data-k="volume" value="90000" step="5000"></div>
          <div class="inp"><label>Net spread<small>% kept. You quoted 2 to 2.5</small></label><input type="number" data-k="spread" value="2.5" step="0.05"></div>
          <div class="inp head"><label>Workshops from the base<small>Undecided until after Dubai; defaults at zero</small></label><span></span></div>
          <div class="inp"><label>Remote 1:1 clients per month</label><input type="number" data-k="oneToOne" value="0" min="0" step="0.5"></div>
          <div class="inp"><label>1:1 price<small>Placeholder</small></label><input type="number" data-k="oneToOnePrice" value="2000" step="100"></div>
          <div class="inp"><label>In-person group days in the period</label><input type="number" data-k="groupDays" value="0" min="0"></div>
          <div class="inp"><label>Seats per group day</label><input type="number" data-k="groupSeats" value="15" min="0"></div>
          <div class="inp"><label>Group seat price<small>Placeholder</small></label><input type="number" data-k="groupPrice" value="2000" step="100"></div>
          <div class="inp head"><label>What the base must fund</label><span></span></div>
          <div class="inp"><label>Bitcoin DCA per month</label><input type="number" data-k="dca" value="1500" step="100"></div>
          <div class="inp"><label>Marriage savings per month</label><input type="number" data-k="marriage" value="1000" step="100"></div>
        </div>
        <div class="results">
          <div class="res-grid">
            <div class="res big"><div class="rl">Monthly income, both desks</div><div class="rv" id="c-inc">—</div><div class="rs" id="c-inc-s"></div></div>
            <div class="res"><div class="rl">Monthly burn</div><div class="rv" id="c-burn">—</div><div class="rs">Living costs only, before DCA and savings</div></div>
          </div>
          <div class="res-grid">
            <div class="res" id="c-sur-box"><div class="rl">Monthly surplus</div><div class="rv" id="c-vol">—</div><div class="rs">After living, DCA and marriage savings</div></div>
            <div class="res"><div class="rl">Cash needed on day one</div><div class="rv" id="c-cash">—</div><div class="rs">Living, one-offs, buffer, and the USD desk float</div></div>
          </div>
          <div class="res-grid">
            <div class="res"><div class="rl">Income over the period</div><div class="rv" id="c-rev">—</div><div class="rs" id="c-rev-s"></div></div>
            <div class="res" id="c-net-box"><div class="rl">Left after living, DCA and savings</div><div class="rv" id="c-net">—</div><div class="rs" id="c-net-s"></div></div>
          </div>
          <div class="res">
            <div class="rl" style="margin-bottom:8px">Where the money goes</div>
            <div class="lines" id="c-lines"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="col">
      <div class="gate-box">
        <div class="eyebrow">Decide on Monday 19 October</div>
        <h3>Three modes for the first six months</h3>
        <p>Count cash actually received for the Dubai day, not seats promised. Write the number down before you read the modes. You are going either way, and the two desks cover living costs on their own, so the mode sets the USD desk float and how fast DCA and marriage savings run, not whether you eat.</p>
        <div class="gate-row">
          <div class="g go"><b>Funded · 20 or more paid seats</b>USD desk float at $15k from day one, DCA and marriage savings at full rate from month one. Read the feedback forms and pick one follow-on format to test in the first quarter, priced from what attendees said.</div>
          <div class="g hold"><b>Lean · 12 to 19 paid seats</b>USD desk float at $10k, DCA and savings at full rate from month two once the desk's first month is banked. No regional trip before March; follow-on formats tested remotely first.</div>
          <div class="g stop"><b>Bootstrap · 11 or fewer</b>USD desk float at $5k, grown from its own spread. DCA and savings at half rate for the first quarter. Re-run the day remotely with the testimonials you have, and revisit formats in the spring.</div>
        </div>
      </div>
    </section>

    <section class="col">
      <div class="sec-head"><h2>Where the defaults come from</h2></div>
      <div class="tbl wrapfirst">
        <table>
          <thead><tr><th>Item</th><th>Researched range or source</th><th>Default used</th></tr></thead>
          <tbody>
            <tr><td>Dubai meeting room, full day, 25 people</td><td>AED 1,500–3,000 in Downtown or DIFC hotels; AED 800–2,500 for business-centre training rooms</td><td>$500, business-centre tier</td></tr>
            <tr><td>Flights, round trip</td><td>Skyscanner: Cairo ⇄ Dubai returns from about £148 (≈$200), cheapest in September and October; Dubai ⇄ Phnom Penh from about AED 2,242 (≈$610), typically via Bangkok or Kuala Lumpur on Air Arabia, Emirates or AirAsia</td><td>$650 and $900, your figures</td></tr>
            <tr><td>Dubai monthly rental, studio or room</td><td>Mid-range hotel rooms run AED 250–650 a night outside peak; a monthly studio in JLT, Barsha or Deira is far cheaper per night</td><td>$2,200 for about five weeks</td></tr>
            <tr><td>Cambodia residency permit</td><td>Your figure: about $1,200 for one year, about $300 to renew</td><td>$1,200 year one</td></tr>
            <tr><td>P2P desk income</td><td>Your figures: AED to USDT $100–250 a day, six days a week; USD to USDT 2–2.5% on about $90,000 a month</td><td>$150 a day, 2.5% on $90,000</td></tr>
            <tr><td>Phnom Penh living</td><td>$550–800 lean, $900–1,400 comfortable, $1,500–2,500+ high-end with a prime-area condo; one-bed central rent $420–620, more for BKK1 condos</td><td>$1,930 a month all-in, generous on everything but rent</td></tr>
            <tr><td>Cambodia crypto position</td><td>NBC rules from January 2025: Bitcoin is a prohibited Group 2 asset; banks told not to facilitate crypto transactions; two licensed platforms only</td><td>Base, not market; account kept clean</td></tr>
            <tr><td>Dubai VARA</td><td>Advisory Services is a licensed activity, defined as personal recommendations on virtual-asset transactions</td><td>Framework, not amounts</td></tr>
            <tr><td>GITEX Global 2026</td><td>7–11 December, Expo City; peak pricing follows into January</td><td>Reason to keep the advanced day out of December</td></tr>
          </tbody>
        </table>
      </div>
      <p class="src">Sources: <a href="https://eventifydubai.com/blog/conference-venue-guide-dubai/">Eventify Dubai venue pricing</a>, <a href="https://www.hotdesk.com/blog/rent-meeting-room-in-dubai">Hotdesk meeting-room guide</a>, <a href="https://www.middleeastbulletin.com/understanding-dubai-hotel-prices-during-peak-season">Dubai peak-season hotel pricing</a>, <a href="https://cambodianess.com/article/cost-of-living-in-phnom-penh-in-2026-a-practical-guide-for-expats-and-digital-nomads">Cambodianess cost of living 2026</a>, <a href="https://wise.com/us/cost-of-living/cambodia/phnom-penh">Wise Phnom Penh costs</a>, <a href="https://www.lightspark.com/knowledge/is-crypto-legal-in-cambodia">Lightspark on Cambodia crypto law</a>, <a href="https://www.centralbanking.com/fintech/crypto-assets/7963543/cambodia-allows-banks-to-handle-stablecoins-and-backed-cryptos">Central Banking on NBC rules</a>, <a href="https://abspartners.ae/vara-licensed-activities-dubai-regulatory-framework-guide/">VARA licensed activities</a>, <a href="https://www.gitex.com/">GITEX Global</a>, <a href="https://www.skyscanner.net/routes/cai/dxb/cairo-to-dubai.html">Skyscanner Cairo to Dubai</a>, <a href="https://www.skyscanner.ae/routes/dxb/pnh/dubai-to-phnom-penh.html">Skyscanner Dubai to Phnom Penh</a>.</p>
    </section>
  </div>
</div>

<script>
(function () {
  var LS = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  /* Tabs */
  var tabs = document.querySelectorAll('.tab');
  var panels = document.querySelectorAll('.panel');
  function show(id) {
    tabs.forEach(function (t) { t.classList.toggle('active', t.dataset.tab === id); t.setAttribute('aria-selected', t.dataset.tab === id ? 'true' : 'false'); });
    panels.forEach(function (p) { p.classList.toggle('active', p.id === 'panel-' + id); });
    LS.set('rw-tab', id);
    window.scrollTo(0, 0);
  }
  tabs.forEach(function (t) { t.addEventListener('click', function () { show(t.dataset.tab); }); });
  window.showTabSelect = function(id) { show(id); };
  var hashTab = (location.hash || '').replace('#', '');
  var saved = LS.get('rw-tab');
  if (hashTab && document.getElementById('panel-' + hashTab)) show(hashTab);
  else if (saved && document.getElementById('panel-' + saved)) show(saved);

  /* Checklists */
  document.querySelectorAll('.check[data-store]').forEach(function (list) {
    var key = 'rw-check-' + list.dataset.store;
    var state = {};
    try { state = JSON.parse(LS.get(key) || '{}'); } catch (e) { state = {}; }
    list.querySelectorAll('input[type=checkbox]').forEach(function (cb) {
      if (state[cb.id]) { cb.checked = true; cb.parentElement.classList.add('done'); }
      cb.addEventListener('change', function () {
        state[cb.id] = cb.checked;
        cb.parentElement.classList.toggle('done', cb.checked);
        LS.set(key, JSON.stringify(state));
      });
    });
  });

  /* Copy buttons */
  document.querySelectorAll('.copy[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var el = document.getElementById(btn.dataset.copy);
      if (!el) return;
      var text = el.innerText;
      function done() { btn.textContent = 'Copied'; btn.classList.add('ok'); setTimeout(function () { btn.textContent = 'Copy'; btn.classList.remove('ok'); }, 1600); }
      if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(text).then(done, done); }
      else { var ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch (e) {} document.body.removeChild(ta); done(); }
    });
  });

  /* Calculators */
  function money(n) { var s = Math.round(Math.abs(n)).toLocaleString('en-US'); return (n < 0 ? '−$' : '$') + s; }
  function bind(container, storeKey, compute) {
    var savedVals = {};
    try { savedVals = JSON.parse(LS.get(storeKey) || '{}'); } catch (e) { savedVals = {}; }
    container.querySelectorAll('input[data-k]').forEach(function (inp) {
      if (savedVals[inp.dataset.k] !== undefined) inp.value = savedVals[inp.dataset.k];
    });
    var run = function () {
      var vals = {};
      container.querySelectorAll('input[data-k]').forEach(function (inp) { vals[inp.dataset.k] = parseFloat(inp.value) || 0; });
      LS.set(storeKey, JSON.stringify(vals));
      compute(vals);
    };
    container.querySelectorAll('input[data-k]').forEach(function (inp) { inp.addEventListener('input', run); });
    run();
  }
  function lines(el, rows) {
    el.innerHTML = rows.map(function (r) { return '<div class="ln"><span>' + r[0] + '</span><span>' + money(r[1]) + '</span></div>'; }).join('');
  }

  bind(document.getElementById('dubai-inputs'), 'rw-dubai-v6', function (v) {
    var eb = Math.min(v.eb, 10);
    var seats = eb + v.std;
    var stay = v.flight + v.rental + v.living;
    var dayFixed = v.venue + v.extras + v.basem + v.assistant + v.legal + v.misc + v.campaign;
    var fixed = stay + dayFixed;
    var varSeat = v.fb + v.kit + v.sats + v.basemShare;
    var rev = eb * v.ebPrice + v.std * v.price;
    var fees = rev * (v.feePct / 100);
    var cost = fixed + seats * varSeat + fees;
    var net = rev - cost;
    var mEb = v.ebPrice * (1 - v.feePct / 100) - varSeat;
    var mStd = v.price * (1 - v.feePct / 100) - varSeat;
    function be(f) {
      if (mEb <= 0 && mStd <= 0) return Infinity;
      if (mEb > 0 && f <= 10 * mEb) return Math.ceil(f / mEb);
      if (mStd <= 0) return Infinity;
      return 10 + Math.ceil((f - 10 * Math.max(mEb, 0)) / mStd);
    }
    var beDay = be(dayFixed), beAll = be(fixed);
    document.getElementById('d-rev').textContent = money(rev);
    document.getElementById('d-cost').textContent = money(cost);
    document.getElementById('d-net').textContent = money(net);
    document.getElementById('d-net-s').textContent = eb + ' early-bird at ' + money(v.ebPrice) + ' + ' + v.std + ' at ' + money(v.price) + ' · ' + money(varSeat) + ' variable cost per seat';
    document.getElementById('d-be').textContent = isFinite(beAll) ? beDay + ' / ' + beAll : '—';
    lines(document.getElementById('d-lines'), [
      ['Five-week stay: flight, rental, living', stay],
      ['Venue, food for ' + seats + ', permit and extras', v.venue + v.fb * seats + v.extras],
      ['Basem: fee plus share', v.basem + v.basemShare * seats],
      ['Assistant and legal', v.assistant + v.legal],
      ['Kits and test funds for ' + seats, (v.kit + v.sats) * seats],
      ['Payment fees at ' + v.feePct + '%', fees],
      ['Campaign and contingency', v.campaign + v.misc]
    ]);
  });

  bind(document.getElementById('cam-inputs'), 'rw-cambodia-v6', function (v) {
    var monthly = v.rent + v.util + v.food + v.cowork + v.ins + v.extra;
    var living = monthly * v.months;
    var oneOff = v.permit + v.flyin + v.bank + v.equip;
    var trips = v.trips * v.tripCost;
    var buffer = monthly * v.bufferMonths;
    var cost = living + oneOff + trips;
    var aedMonthly = v.aedDay * v.aedDays * 52 / 12;
    var usdMonthly = v.volume * (v.spread / 100);
    var wsMonthly = v.oneToOne * v.oneToOnePrice;
    var incMonthly = aedMonthly + usdMonthly + wsMonthly;
    var revGroup = v.groupDays * v.groupSeats * v.groupPrice;
    var income = incMonthly * v.months + revGroup;
    var commitments = (v.dca + v.marriage) * v.months;
    var left = income - cost - commitments;
    var surplus = incMonthly - monthly - v.dca - v.marriage;
    document.getElementById('c-inc').textContent = money(incMonthly);
    document.getElementById('c-inc-s').textContent = money(aedMonthly) + ' AED desk · ' + money(usdMonthly) + ' USD desk' + (wsMonthly ? ' · ' + money(wsMonthly) + ' 1:1' : '');
    document.getElementById('c-burn').textContent = money(monthly);
    var sb = document.getElementById('c-sur-box');
    sb.classList.toggle('neg', surplus < 0); sb.classList.toggle('pos', surplus >= 0);
    document.getElementById('c-vol').textContent = money(surplus);
    document.getElementById('c-cash').textContent = money(living + oneOff + buffer + v.float);
    document.getElementById('c-rev').textContent = money(income);
    document.getElementById('c-rev-s').textContent = v.months + ' months of both desks' + (revGroup ? ' plus ' + money(revGroup) + ' from group days' : '');
    var nb = document.getElementById('c-net-box');
    nb.classList.toggle('neg', left < 0); nb.classList.toggle('pos', left >= 0);
    document.getElementById('c-net').textContent = money(left);
    document.getElementById('c-net-s').textContent = left < 0 ? 'Short by this much over ' + v.months + ' months; trim DCA or savings, or raise desk volume' : 'Surplus over ' + v.months + ' months after every commitment';
    lines(document.getElementById('c-lines'), [
      ['Rent, utilities, food, coworking, insurance, extras', living],
      ['Permit, round-trip flight, bank, equipment', oneOff],
      [v.trips + ' regional trip' + (v.trips === 1 ? '' : 's'), trips],
      ['Bitcoin DCA, ' + v.months + ' months', v.dca * v.months],
      ['Marriage savings, ' + v.months + ' months', v.marriage * v.months],
      ['Buffer held untouched', buffer],
      ['USD desk float, capital not spent', v.float]
    ]);
  });
})();
<\/script>
</body>
</html>`
