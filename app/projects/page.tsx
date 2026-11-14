'use client'
import { useState } from 'react'
import { CTAButton, BookButton } from '@/components/ui/CTAButton'

/* ═══════════════════════════════════════════════════════════
   Project data
═══════════════════════════════════════════════════════════ */
const projects = [

  /* ── 1. Petronas eCoupon ─────────────────────────────────── */
  {
    id: 'petronas',
    tab: 'Fuel eCoupon',
    title: 'Petronas Fuel eCoupon System',
    category: 'Enterprise / Fintech',
    color: 'cyan' as const,
    tags: ['Fintech', 'Enterprise', 'Web Platform', 'Fraud Prevention'],
    summary: 'Designed the Petronas enterprise Fuel eCoupon platform: a prepaid coupon system for corporate clients. Enterprises order fuel coupons online, print watermarked branded vouchers, and distribute them to employees. Station agents accept coupons, submit them through the claim portal to receive credit, and use that credit balance to order bulk fuel from Petronas. A closed-loop, fraud-resistant prepayment system.',
    role: 'System Designer & Technical PM',
    year: '2011 to 2015',
    outcomes: [
      'Corporate prepaid fuel ordering portal with bulk coupon management',
      'Watermarked, serialised coupon generation with tamper-evident print design',
      'Multi-station claim portal for physical coupon submission and validation',
      'Agent credit system: redeemed coupons convert to bulk fuel order balance',
      'Fraud prevention dashboard with full coupon lifecycle audit trail',
    ],
    diagramTitle: 'Fuel eCoupon System Architecture',
    svgViewBox: '0 0 240 300',
    svgContent: `
      <g>
        <rect x="8" y="8" width="224" height="64" rx="8" fill="rgba(238,148,39,0.04)" stroke="rgba(238,148,39,0.2)" stroke-width="1" stroke-dasharray="4,3"/>
        <text x="16" y="23" font-size="7" fill="rgba(238,148,39,0.5)" font-family="monospace" letter-spacing="1.5">ENTERPRISE</text>
        <rect x="14" y="28" width="94" height="36" rx="6" fill="rgba(238,148,39,0.08)" stroke="rgba(238,148,39,0.3)" stroke-width="1"/>
        <text x="61" y="44" text-anchor="middle" font-size="8.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Corporate Portal</text>
        <text x="61" y="56" text-anchor="middle" font-size="7" fill="#9898b8" font-family="monospace">Order eCoupons</text>
        <rect x="118" y="28" width="114" height="36" rx="6" fill="rgba(238,148,39,0.08)" stroke="rgba(238,148,39,0.3)" stroke-width="1"/>
        <text x="175" y="44" text-anchor="middle" font-size="8.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Coupon Printer</text>
        <text x="175" y="56" text-anchor="middle" font-size="7" fill="#9898b8" font-family="monospace">Watermarked · Branded</text>
      </g>
      <rect x="60" y="86" width="120" height="38" rx="7" fill="rgba(238,148,39,0.12)" stroke="rgba(238,148,39,0.4)" stroke-width="1.5"/>
      <text x="120" y="103" text-anchor="middle" font-size="8.5" fill="#EE9427" font-family="sans-serif" font-weight="700">eCoupon Engine</text>
      <text x="120" y="116" text-anchor="middle" font-size="7" fill="#9898b8" font-family="monospace">Generate · Validate · Track</text>
      <line x1="61" y1="64" x2="90" y2="86" stroke="rgba(238,148,39,0.4)" stroke-width="1.2"/>
      <line x1="175" y1="64" x2="150" y2="86" stroke="rgba(238,148,39,0.4)" stroke-width="1.2"/>
      <g>
        <rect x="8" y="140" width="224" height="66" rx="8" fill="rgba(77,159,220,0.04)" stroke="rgba(77,159,220,0.18)" stroke-width="1" stroke-dasharray="4,3"/>
        <text x="16" y="155" font-size="7" fill="rgba(77,159,220,0.5)" font-family="monospace" letter-spacing="1.5">REDEMPTION LAYER</text>
        <rect x="14" y="160" width="100" height="40" rx="6" fill="rgba(77,159,220,0.08)" stroke="rgba(77,159,220,0.3)" stroke-width="1"/>
        <text x="64" y="177" text-anchor="middle" font-size="8" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Station Claim</text>
        <text x="64" y="190" text-anchor="middle" font-size="7" fill="#9898b8" font-family="monospace">Submit · Get Credit</text>
        <rect x="126" y="160" width="98" height="40" rx="6" fill="rgba(77,159,220,0.08)" stroke="rgba(77,159,220,0.3)" stroke-width="1"/>
        <text x="175" y="177" text-anchor="middle" font-size="8" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Fuel Dispensing</text>
        <text x="175" y="190" text-anchor="middle" font-size="7" fill="#9898b8" font-family="monospace">Coupon Scan · POS</text>
      </g>
      <line x1="90" y1="124" x2="64" y2="160" stroke="rgba(77,159,220,0.3)" stroke-width="1.1"/>
      <line x1="150" y1="124" x2="175" y2="160" stroke="rgba(77,159,220,0.3)" stroke-width="1.1"/>
      <g>
        <rect x="8" y="220" width="224" height="56" rx="8" fill="rgba(127,184,232,0.03)" stroke="rgba(127,184,232,0.15)" stroke-width="1" stroke-dasharray="3,2"/>
        <text x="16" y="235" font-size="7" fill="rgba(127,184,232,0.4)" font-family="monospace" letter-spacing="1.5">SETTLEMENT</text>
        <rect x="14" y="240" width="100" height="30" rx="5" fill="rgba(127,184,232,0.06)" stroke="rgba(127,184,232,0.2)" stroke-width="1"/>
        <text x="64" y="253" text-anchor="middle" font-size="7.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Credit Account</text>
        <text x="64" y="264" text-anchor="middle" font-size="6.5" fill="#9898b8" font-family="monospace">Station Balance</text>
        <rect x="126" y="240" width="98" height="30" rx="5" fill="rgba(127,184,232,0.06)" stroke="rgba(127,184,232,0.2)" stroke-width="1"/>
        <text x="175" y="253" text-anchor="middle" font-size="7.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Bulk Fuel Orders</text>
        <text x="175" y="264" text-anchor="middle" font-size="6.5" fill="#9898b8" font-family="monospace">Credit to Inventory</text>
      </g>
      <line x1="64" y1="200" x2="64" y2="240" stroke="rgba(127,184,232,0.2)" stroke-width="1" stroke-dasharray="3,2"/>
      <line x1="175" y1="200" x2="175" y2="240" stroke="rgba(127,184,232,0.2)" stroke-width="1" stroke-dasharray="3,2"/>
      <rect x="40" y="284" width="160" height="10" rx="4" fill="rgba(238,148,39,0.05)" stroke="rgba(238,148,39,0.15)" stroke-width="1" stroke-dasharray="3,2"/>
      <text x="120" y="292" text-anchor="middle" font-size="6.5" fill="#6e6e8e" font-family="monospace">Fraud Prevention Dashboard · Admin</text>
    `,
  },

  /* ── 2. FDS — Fuel Distribution System ─────────────────── */
  {
    id: 'fds',
    tab: 'Fuel Distribution',
    title: 'Fuel Distribution System: UNAMID × Petronas',
    category: 'Mission-Critical Systems',
    color: 'amber' as const,
    tags: ['Enterprise', 'Fleet Management', 'Distributed Architecture', 'Government / UN'],
    summary: 'Designed the UN peacekeeping fuel infrastructure in Darfur: 60,000 vehicles, 14,000 generators, and 140 aircraft tracked across 15 Petronas stations. The core engineering challenge was connectivity. Remote Darfur field stations had no reliable internet. The solution: a distributed database architecture where each station recorded transactions into a local SQL Server offline, then automatically synced to the central Petronas HQ database in Khartoum whenever a connection became available.',
    role: 'System Designer & Technical PM',
    year: '2010 to 2014',
    outcomes: [
      '60,000 vehicles tracked with per-transaction fuel logs',
      '14,000 power generators on scheduled service cycles',
      '140 aircraft managed with aviation-grade fuel compliance records',
      '15 dedicated Petronas stations operated exclusively for UNAMID',
      'Offline-first distributed DB: each field station wrote to a local SQL Server, synced to Petronas HQ in Khartoum on available connection',
      'UN finance audit reports and fleet consumption dashboards generated from the centralised HQ database',
    ],
    diagramTitle: 'Fuel Distribution System Architecture',
    svgViewBox: '0 0 240 318',
    svgContent: `
      <g>
        <rect x="8" y="8" width="224" height="64" rx="8" fill="rgba(247,183,102,0.05)" stroke="rgba(247,183,102,0.22)" stroke-width="1" stroke-dasharray="4,3"/>
        <text x="16" y="23" font-size="7" fill="rgba(247,183,102,0.5)" font-family="monospace" letter-spacing="1.5">FIELD TERMINALS</text>
        <rect x="14" y="28" width="58" height="36" rx="6" fill="rgba(247,183,102,0.08)" stroke="rgba(247,183,102,0.3)" stroke-width="1"/>
        <text x="43" y="44" text-anchor="middle" font-size="7.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Station POS</text>
        <text x="43" y="56" text-anchor="middle" font-size="6.5" fill="#9898b8" font-family="monospace">15 Stations</text>
        <rect x="82" y="28" width="72" height="36" rx="6" fill="rgba(247,183,102,0.08)" stroke="rgba(247,183,102,0.3)" stroke-width="1"/>
        <text x="118" y="44" text-anchor="middle" font-size="7.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">ID Card Reader</text>
        <text x="118" y="56" text-anchor="middle" font-size="6.5" fill="#9898b8" font-family="monospace">Barcode / RFID</text>
        <rect x="164" y="28" width="68" height="36" rx="6" fill="rgba(247,183,102,0.08)" stroke="rgba(247,183,102,0.3)" stroke-width="1"/>
        <text x="198" y="44" text-anchor="middle" font-size="7.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Fuel Meter</text>
        <text x="198" y="56" text-anchor="middle" font-size="6.5" fill="#9898b8" font-family="monospace">Pump Integration</text>
      </g>
      <rect x="60" y="86" width="120" height="36" rx="7" fill="rgba(247,183,102,0.12)" stroke="rgba(247,183,102,0.4)" stroke-width="1.5"/>
      <text x="120" y="102" text-anchor="middle" font-size="8.5" fill="#F7B766" font-family="sans-serif" font-weight="700">FDS Core Engine</text>
      <text x="120" y="110" text-anchor="middle" font-size="6.5" fill="#9898b8" font-family="monospace">Transaction Processing</text>
      <text x="120" y="120" text-anchor="middle" font-size="6.5" fill="#9898b8" font-family="monospace">Auth &amp; Validation</text>
      <line x1="43" y1="64" x2="85" y2="86" stroke="rgba(247,183,102,0.35)" stroke-width="1.2"/>
      <line x1="118" y1="64" x2="118" y2="86" stroke="rgba(247,183,102,0.35)" stroke-width="1.2"/>
      <line x1="198" y1="64" x2="155" y2="86" stroke="rgba(247,183,102,0.35)" stroke-width="1.2"/>
      <g>
        <rect x="8" y="138" width="224" height="96" rx="8" fill="rgba(238,148,39,0.03)" stroke="rgba(238,148,39,0.12)" stroke-width="1" stroke-dasharray="4,3"/>
        <text x="16" y="153" font-size="7" fill="rgba(238,148,39,0.4)" font-family="monospace" letter-spacing="1.5">FLEET REGISTRIES</text>
        <rect x="14" y="159" width="60" height="66" rx="6" fill="rgba(238,148,39,0.06)" stroke="rgba(238,148,39,0.2)" stroke-width="1"/>
        <text x="44" y="179" text-anchor="middle" font-size="7.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Vehicles</text>
        <text x="44" y="191" text-anchor="middle" font-size="7" fill="#EE9427" font-family="monospace">60,000</text>
        <text x="44" y="203" text-anchor="middle" font-size="6" fill="#9898b8" font-family="monospace">UN · Patrol ·</text>
        <text x="44" y="213" text-anchor="middle" font-size="6" fill="#9898b8" font-family="monospace">Logistics</text>
        <rect x="84" y="159" width="64" height="66" rx="6" fill="rgba(238,148,39,0.06)" stroke="rgba(238,148,39,0.2)" stroke-width="1"/>
        <text x="116" y="179" text-anchor="middle" font-size="7.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Generators</text>
        <text x="116" y="191" text-anchor="middle" font-size="7" fill="#EE9427" font-family="monospace">14,000</text>
        <text x="116" y="203" text-anchor="middle" font-size="6" fill="#9898b8" font-family="monospace">Power Plants</text>
        <text x="116" y="213" text-anchor="middle" font-size="6" fill="#9898b8" font-family="monospace">Camp · Field</text>
        <rect x="158" y="159" width="66" height="66" rx="6" fill="rgba(238,148,39,0.06)" stroke="rgba(238,148,39,0.2)" stroke-width="1"/>
        <text x="191" y="179" text-anchor="middle" font-size="7.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Aircraft</text>
        <text x="191" y="191" text-anchor="middle" font-size="7" fill="#EE9427" font-family="monospace">140</text>
        <text x="191" y="203" text-anchor="middle" font-size="6" fill="#9898b8" font-family="monospace">Aviation Grade</text>
        <text x="191" y="213" text-anchor="middle" font-size="6" fill="#9898b8" font-family="monospace">Fuel Audit</text>
      </g>
      <line x1="90" y1="122" x2="44" y2="159" stroke="rgba(238,148,39,0.25)" stroke-width="1.1"/>
      <line x1="120" y1="122" x2="116" y2="159" stroke="rgba(238,148,39,0.25)" stroke-width="1.1"/>
      <line x1="150" y1="122" x2="191" y2="159" stroke="rgba(238,148,39,0.25)" stroke-width="1.1"/>
      <rect x="8" y="248" width="224" height="64" rx="8" fill="rgba(77,159,220,0.04)" stroke="rgba(77,159,220,0.15)" stroke-width="1" stroke-dasharray="3,2"/>
      <text x="16" y="263" font-size="7" fill="rgba(77,159,220,0.4)" font-family="monospace" letter-spacing="1.5">DATA SYNC LAYER</text>
      <rect x="14" y="268" width="88" height="38" rx="5" fill="rgba(77,159,220,0.07)" stroke="rgba(77,159,220,0.25)" stroke-width="1"/>
      <text x="58" y="282" text-anchor="middle" font-size="7.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Local DB</text>
      <text x="58" y="293" text-anchor="middle" font-size="6" fill="#9898b8" font-family="monospace">Field Stations · Offline</text>
      <text x="58" y="302" text-anchor="middle" font-size="5.5" fill="#6e6e8e" font-family="monospace">SQL Server</text>
      <text x="120" y="284" text-anchor="middle" font-size="9" fill="rgba(77,159,220,0.55)" font-family="sans-serif">↔</text>
      <text x="120" y="295" text-anchor="middle" font-size="5.5" fill="rgba(77,159,220,0.4)" font-family="monospace">on connect</text>
      <rect x="138" y="268" width="86" height="38" rx="5" fill="rgba(77,159,220,0.07)" stroke="rgba(77,159,220,0.25)" stroke-width="1"/>
      <text x="181" y="282" text-anchor="middle" font-size="7.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">HQ Central DB</text>
      <text x="181" y="293" text-anchor="middle" font-size="6" fill="#9898b8" font-family="monospace">Khartoum · Audit</text>
      <text x="181" y="302" text-anchor="middle" font-size="5.5" fill="#6e6e8e" font-family="monospace">Crystal Reports</text>
      <line x1="44" y1="225" x2="44" y2="248" stroke="rgba(77,159,220,0.2)" stroke-width="1" stroke-dasharray="3,2"/>
      <line x1="116" y1="225" x2="116" y2="248" stroke="rgba(77,159,220,0.2)" stroke-width="1" stroke-dasharray="3,2"/>
      <line x1="191" y1="225" x2="191" y2="248" stroke="rgba(77,159,220,0.2)" stroke-width="1" stroke-dasharray="3,2"/>
    `,
  },


  /* ── 4. ShoogirCash ──────────────────────────────────────── */
  {
    id: 'shoogircash',
    tab: 'ShoogirCash',
    title: 'ShoogirCash: Mobile Payments App',
    category: 'Mobile / Fintech',
    color: 'amber' as const,
    tags: ['Mobile App', 'Fintech', 'Digital Product Management', 'iOS · Android'],
    summary: 'Led end-to-end digital product management for ShoogirCash, a mobile cash transfer app for underbanked users. Delivered iOS and Android in a 6-month sprint cycle with PCI-DSS compliance built in from sprint 1 and a 40% reduction in KYC drop-off.',
    role: 'Technical Project Manager',
    year: '2022 to 2023',
    outcomes: [
      'iOS + Android delivered on schedule in 6-month sprint cycle',
      'PCI-DSS compliance integrated from sprint 1',
      'KYC/AML flow redesigned: drop-off reduced by 40%',
      '3 payment rail integrations: local bank, mobile wallet, card',
    ],
    diagramTitle: 'Mobile Payment System Architecture',
    svgViewBox: '0 0 240 290',
    svgContent: `
      <rect x="76" y="8" width="88" height="52" rx="8" fill="rgba(247,183,102,0.1)" stroke="rgba(247,183,102,0.4)" stroke-width="1.5"/>
      <text x="120" y="30" text-anchor="middle" font-size="9" fill="#F7B766" font-family="sans-serif" font-weight="700">ShoogirCash</text>
      <text x="120" y="43" text-anchor="middle" font-size="7.5" fill="#9898b8" font-family="monospace">iOS / Android</text>
      <text x="120" y="54" text-anchor="middle" font-size="7" fill="#9898b8" font-family="monospace">React Native</text>
      <rect x="60" y="74" width="120" height="36" rx="7" fill="rgba(247,183,102,0.08)" stroke="rgba(247,183,102,0.3)" stroke-width="1.2"/>
      <text x="120" y="90" text-anchor="middle" font-size="8.5" fill="#F7B766" font-family="sans-serif" font-weight="600">Secure API Gateway</text>
      <text x="120" y="103" text-anchor="middle" font-size="7" fill="#9898b8" font-family="monospace">TLS 1.3 · JWT · Rate Limit</text>
      <line x1="120" y1="60" x2="120" y2="74" stroke="rgba(247,183,102,0.4)" stroke-width="1.5"/>
      <g>
        <rect x="8" y="124" width="224" height="90" rx="8" fill="rgba(247,183,102,0.03)" stroke="rgba(247,183,102,0.12)" stroke-width="1" stroke-dasharray="4,3"/>
        <text x="16" y="139" font-size="7" fill="rgba(247,183,102,0.4)" font-family="monospace" letter-spacing="1.5">CORE SERVICES</text>
        <rect x="14" y="145" width="66" height="60" rx="6" fill="rgba(247,183,102,0.07)" stroke="rgba(247,183,102,0.25)" stroke-width="1"/>
        <text x="47" y="165" text-anchor="middle" font-size="8" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Identity</text>
        <text x="47" y="178" text-anchor="middle" font-size="7" fill="#9898b8" font-family="monospace">KYC / AML</text>
        <text x="47" y="190" text-anchor="middle" font-size="7" fill="#9898b8" font-family="monospace">Biometric</text>
        <rect x="90" y="145" width="60" height="60" rx="6" fill="rgba(247,183,102,0.07)" stroke="rgba(247,183,102,0.25)" stroke-width="1"/>
        <text x="120" y="165" text-anchor="middle" font-size="8" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Ledger</text>
        <text x="120" y="178" text-anchor="middle" font-size="7" fill="#9898b8" font-family="monospace">Txn Engine</text>
        <text x="120" y="190" text-anchor="middle" font-size="7" fill="#9898b8" font-family="monospace">PCI-DSS</text>
        <rect x="160" y="145" width="64" height="60" rx="6" fill="rgba(247,183,102,0.07)" stroke="rgba(247,183,102,0.25)" stroke-width="1"/>
        <text x="192" y="165" text-anchor="middle" font-size="8" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Notify</text>
        <text x="192" y="178" text-anchor="middle" font-size="7" fill="#9898b8" font-family="monospace">Push / SMS</text>
        <text x="192" y="190" text-anchor="middle" font-size="7" fill="#9898b8" font-family="monospace">Webhook</text>
      </g>
      <line x1="95" y1="110" x2="47" y2="145" stroke="rgba(247,183,102,0.3)" stroke-width="1.1"/>
      <line x1="120" y1="110" x2="120" y2="145" stroke="rgba(247,183,102,0.3)" stroke-width="1.1"/>
      <line x1="145" y1="110" x2="192" y2="145" stroke="rgba(247,183,102,0.3)" stroke-width="1.1"/>
      <rect x="8" y="228" width="224" height="50" rx="7" fill="rgba(238,148,39,0.04)" stroke="rgba(238,148,39,0.15)" stroke-width="1" stroke-dasharray="3,2"/>
      <text x="16" y="243" font-size="7" fill="rgba(238,148,39,0.4)" font-family="monospace" letter-spacing="1.5">PAYMENT RAILS</text>
      <text x="120" y="259" text-anchor="middle" font-size="7.5" fill="#9898b8" font-family="monospace">Local Bank API · Mobile Wallet · Visa / Mastercard</text>
      <line x1="47" y1="205" x2="55" y2="228" stroke="rgba(238,148,39,0.2)" stroke-width="1" stroke-dasharray="3,2"/>
      <line x1="120" y1="205" x2="120" y2="228" stroke="rgba(238,148,39,0.2)" stroke-width="1" stroke-dasharray="3,2"/>
      <line x1="192" y1="205" x2="185" y2="228" stroke="rgba(238,148,39,0.2)" stroke-width="1" stroke-dasharray="3,2"/>
    `,
  },

  /* ── 5. Pharmacy ─────────────────────────────────────────── */
  {
    id: 'pharmacy',
    tab: 'Pharmacy System',
    title: 'Pharmacy Ordering System',
    category: 'Mobile / Healthcare',
    color: 'purple' as const,
    tags: ['Mobile App', 'Healthcare', 'System Architecture', 'React Native'],
    summary: 'Designed and managed delivery of a pharmacy-to-patient ordering system. Patients request prescriptions, track delivery live, and communicate with pharmacists via a secure mobile interface with HL7 FHIR-compatible data handling.',
    role: 'Technical PM & Architecture Reviewer',
    year: '2021',
    outcomes: [
      'Real-time pharmacist dashboard with live order queue',
      'HL7 FHIR-compatible prescription data format',
      'Live delivery tracking with GPS ETA',
      'Role-based access: patient / pharmacist / admin',
    ],
    diagramTitle: 'Pharmacy Platform Architecture',
    svgViewBox: '0 0 240 290',
    svgContent: `
      <g>
        <rect x="8" y="8" width="224" height="64" rx="8" fill="rgba(77,159,220,0.04)" stroke="rgba(77,159,220,0.18)" stroke-width="1" stroke-dasharray="4,3"/>
        <text x="16" y="23" font-size="7" fill="rgba(77,159,220,0.5)" font-family="monospace" letter-spacing="1.5">CLIENT APPS</text>
        <rect x="14" y="28" width="90" height="36" rx="6" fill="rgba(77,159,220,0.08)" stroke="rgba(77,159,220,0.3)" stroke-width="1"/>
        <text x="59" y="44" text-anchor="middle" font-size="8.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Patient App</text>
        <text x="59" y="56" text-anchor="middle" font-size="7" fill="#9898b8" font-family="monospace">React Native</text>
        <rect x="118" y="28" width="114" height="36" rx="6" fill="rgba(77,159,220,0.08)" stroke="rgba(77,159,220,0.3)" stroke-width="1"/>
        <text x="175" y="44" text-anchor="middle" font-size="8.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Pharmacist Dashboard</text>
        <text x="175" y="56" text-anchor="middle" font-size="7" fill="#9898b8" font-family="monospace">Web · Real-time</text>
      </g>
      <rect x="60" y="86" width="120" height="36" rx="7" fill="rgba(77,159,220,0.12)" stroke="rgba(77,159,220,0.4)" stroke-width="1.5"/>
      <text x="120" y="102" text-anchor="middle" font-size="8.5" fill="#b3a0ff" font-family="sans-serif" font-weight="700">REST API + WebSocket</text>
      <text x="120" y="115" text-anchor="middle" font-size="7" fill="#9898b8" font-family="monospace">Node.js · Socket.IO</text>
      <line x1="59" y1="64" x2="95" y2="86" stroke="rgba(77,159,220,0.35)" stroke-width="1.2"/>
      <line x1="175" y1="64" x2="145" y2="86" stroke="rgba(77,159,220,0.35)" stroke-width="1.2"/>
      <g>
        <rect x="8" y="136" width="224" height="84" rx="8" fill="rgba(238,148,39,0.03)" stroke="rgba(238,148,39,0.12)" stroke-width="1" stroke-dasharray="4,3"/>
        <text x="16" y="151" font-size="7" fill="rgba(238,148,39,0.4)" font-family="monospace" letter-spacing="1.5">SERVICES</text>
        <rect x="14" y="157" width="62" height="54" rx="6" fill="rgba(238,148,39,0.06)" stroke="rgba(238,148,39,0.2)" stroke-width="1"/>
        <text x="45" y="177" text-anchor="middle" font-size="8" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Orders</text>
        <text x="45" y="189" text-anchor="middle" font-size="7" fill="#9898b8" font-family="monospace">FHIR · Rx</text>
        <text x="45" y="201" text-anchor="middle" font-size="6.5" fill="#9898b8" font-family="monospace">Prescriptions</text>
        <rect x="86" y="157" width="68" height="54" rx="6" fill="rgba(238,148,39,0.06)" stroke="rgba(238,148,39,0.2)" stroke-width="1"/>
        <text x="120" y="177" text-anchor="middle" font-size="8" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Delivery</text>
        <text x="120" y="189" text-anchor="middle" font-size="7" fill="#9898b8" font-family="monospace">GPS Track</text>
        <text x="120" y="201" text-anchor="middle" font-size="6.5" fill="#9898b8" font-family="monospace">Live ETA</text>
        <rect x="164" y="157" width="60" height="54" rx="6" fill="rgba(238,148,39,0.06)" stroke="rgba(238,148,39,0.2)" stroke-width="1"/>
        <text x="194" y="177" text-anchor="middle" font-size="8" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Notify</text>
        <text x="194" y="189" text-anchor="middle" font-size="7" fill="#9898b8" font-family="monospace">Push · SMS</text>
        <text x="194" y="201" text-anchor="middle" font-size="6.5" fill="#9898b8" font-family="monospace">Status</text>
      </g>
      <line x1="95" y1="122" x2="45" y2="157" stroke="rgba(238,148,39,0.25)" stroke-width="1"/>
      <line x1="120" y1="122" x2="120" y2="157" stroke="rgba(238,148,39,0.25)" stroke-width="1"/>
      <line x1="145" y1="122" x2="194" y2="157" stroke="rgba(238,148,39,0.25)" stroke-width="1"/>
      <rect x="60" y="234" width="120" height="40" rx="6" fill="rgba(127,184,232,0.04)" stroke="rgba(127,184,232,0.12)" stroke-width="1" stroke-dasharray="3,2"/>
      <text x="120" y="251" text-anchor="middle" font-size="7.5" fill="#9898b8" font-family="monospace">PostgreSQL · Redis Cache</text>
      <text x="120" y="265" text-anchor="middle" font-size="7" fill="#5a5a7a" font-family="monospace">Encrypted at rest · HIPAA-aware</text>
      <line x1="45" y1="211" x2="80" y2="234" stroke="rgba(127,184,232,0.18)" stroke-width="1" stroke-dasharray="3,2"/>
      <line x1="120" y1="211" x2="120" y2="234" stroke="rgba(127,184,232,0.18)" stroke-width="1" stroke-dasharray="3,2"/>
      <line x1="194" y1="211" x2="160" y2="234" stroke="rgba(127,184,232,0.18)" stroke-width="1" stroke-dasharray="3,2"/>
    `,
  },

  /* ── 6. Talabat Clone ────────────────────────────────────── */
  {
    id: 'talabat',
    tab: 'Food Delivery',
    title: 'Talabat-Clone: Food Delivery Platform',
    category: 'Platform Engineering',
    color: 'cyan' as const,
    tags: ['Marketplace', 'Real-Time', 'System Design', 'Microservices'],
    summary: 'Architected a multi-vendor food delivery marketplace from scratch: real-time order tracking via WebSocket pub/sub, microservices handling 1,000+ concurrent orders, restaurant onboarding portal, and Stripe plus regional payment gateway integration.',
    role: 'System Architect & Technical Advisor',
    year: '2022',
    outcomes: [
      'Microservices supporting 1,000+ concurrent orders',
      'Real-time driver tracking with WebSocket pub/sub',
      'Multi-vendor restaurant onboarding portal',
      'Stripe + regional payment gateway integration',
    ],
    diagramTitle: 'Food Delivery Platform: System Design',
    svgViewBox: '0 0 240 290',
    svgContent: `
      <g>
        <rect x="8" y="8" width="224" height="62" rx="8" fill="rgba(238,148,39,0.04)" stroke="rgba(238,148,39,0.2)" stroke-width="1" stroke-dasharray="4,3"/>
        <text x="16" y="23" font-size="7" fill="rgba(238,148,39,0.5)" font-family="monospace" letter-spacing="1.5">CLIENT LAYER</text>
        <rect x="14" y="28" width="60" height="34" rx="6" fill="rgba(238,148,39,0.08)" stroke="rgba(238,148,39,0.25)" stroke-width="1"/>
        <text x="44" y="44" text-anchor="middle" font-size="8" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Customer</text>
        <text x="44" y="55" text-anchor="middle" font-size="6.5" fill="#9898b8" font-family="monospace">App</text>
        <rect x="84" y="28" width="72" height="34" rx="6" fill="rgba(238,148,39,0.08)" stroke="rgba(238,148,39,0.25)" stroke-width="1"/>
        <text x="120" y="44" text-anchor="middle" font-size="8" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Restaurant</text>
        <text x="120" y="55" text-anchor="middle" font-size="6.5" fill="#9898b8" font-family="monospace">Dashboard</text>
        <rect x="166" y="28" width="66" height="34" rx="6" fill="rgba(238,148,39,0.08)" stroke="rgba(238,148,39,0.25)" stroke-width="1"/>
        <text x="199" y="44" text-anchor="middle" font-size="8" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Driver</text>
        <text x="199" y="55" text-anchor="middle" font-size="6.5" fill="#9898b8" font-family="monospace">App</text>
      </g>
      <rect x="60" y="84" width="120" height="34" rx="7" fill="rgba(238,148,39,0.12)" stroke="rgba(238,148,39,0.4)" stroke-width="1.5"/>
      <text x="120" y="100" text-anchor="middle" font-size="8.5" fill="#EE9427" font-family="sans-serif" font-weight="700">API Gateway</text>
      <text x="120" y="112" text-anchor="middle" font-size="7" fill="#9898b8" font-family="monospace">Kong · JWT · Rate Limit</text>
      <line x1="44" y1="62" x2="90" y2="84" stroke="rgba(238,148,39,0.3)" stroke-width="1.1"/>
      <line x1="120" y1="62" x2="120" y2="84" stroke="rgba(238,148,39,0.3)" stroke-width="1.1"/>
      <line x1="199" y1="62" x2="150" y2="84" stroke="rgba(238,148,39,0.3)" stroke-width="1.1"/>
      <g>
        <rect x="8" y="132" width="224" height="94" rx="8" fill="rgba(77,159,220,0.03)" stroke="rgba(77,159,220,0.15)" stroke-width="1" stroke-dasharray="4,3"/>
        <text x="16" y="147" font-size="7" fill="rgba(77,159,220,0.5)" font-family="monospace" letter-spacing="1.5">MICROSERVICES</text>
        <rect x="14" y="153" width="46" height="64" rx="6" fill="rgba(77,159,220,0.07)" stroke="rgba(77,159,220,0.2)" stroke-width="1"/>
        <text x="37" y="173" text-anchor="middle" font-size="7.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Order</text>
        <text x="37" y="185" text-anchor="middle" font-size="6.5" fill="#9898b8" font-family="monospace">State</text>
        <text x="37" y="196" text-anchor="middle" font-size="6.5" fill="#9898b8" font-family="monospace">Machine</text>
        <rect x="68" y="153" width="46" height="64" rx="6" fill="rgba(77,159,220,0.07)" stroke="rgba(77,159,220,0.2)" stroke-width="1"/>
        <text x="91" y="173" text-anchor="middle" font-size="7.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Track</text>
        <text x="91" y="185" text-anchor="middle" font-size="6.5" fill="#9898b8" font-family="monospace">WS</text>
        <text x="91" y="196" text-anchor="middle" font-size="6.5" fill="#9898b8" font-family="monospace">Pub/Sub</text>
        <rect x="122" y="153" width="46" height="64" rx="6" fill="rgba(77,159,220,0.07)" stroke="rgba(77,159,220,0.2)" stroke-width="1"/>
        <text x="145" y="173" text-anchor="middle" font-size="7.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Payment</text>
        <text x="145" y="185" text-anchor="middle" font-size="6.5" fill="#9898b8" font-family="monospace">Stripe</text>
        <text x="145" y="196" text-anchor="middle" font-size="6.5" fill="#9898b8" font-family="monospace">PCI</text>
        <rect x="176" y="153" width="56" height="64" rx="6" fill="rgba(77,159,220,0.07)" stroke="rgba(77,159,220,0.2)" stroke-width="1"/>
        <text x="204" y="173" text-anchor="middle" font-size="7.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Catalog</text>
        <text x="204" y="185" text-anchor="middle" font-size="6.5" fill="#9898b8" font-family="monospace">Menus</text>
        <text x="204" y="196" text-anchor="middle" font-size="6.5" fill="#9898b8" font-family="monospace">Search</text>
      </g>
      <line x1="100" y1="116" x2="37" y2="153" stroke="rgba(77,159,220,0.2)" stroke-width="1"/>
      <line x1="112" y1="116" x2="91" y2="153" stroke="rgba(77,159,220,0.2)" stroke-width="1"/>
      <line x1="128" y1="116" x2="145" y2="153" stroke="rgba(77,159,220,0.2)" stroke-width="1"/>
      <line x1="140" y1="116" x2="204" y2="153" stroke="rgba(77,159,220,0.2)" stroke-width="1"/>
      <rect x="8" y="240" width="224" height="38" rx="7" fill="rgba(127,184,232,0.04)" stroke="rgba(127,184,232,0.12)" stroke-width="1" stroke-dasharray="3,2"/>
      <text x="120" y="256" text-anchor="middle" font-size="7.5" fill="#9898b8" font-family="monospace">Postgres · Redis · Kafka Event Bus</text>
      <text x="120" y="270" text-anchor="middle" font-size="7" fill="#5a5a7a" font-family="monospace">Docker / Kubernetes</text>
    `,
  },

  /* ── 7. Uber Clone ───────────────────────────────────────── */
  {
    id: 'uber',
    tab: 'Ride Hailing',
    title: 'Uber-Clone: Ride Hailing Platform',
    category: 'Platform Engineering',
    color: 'amber' as const,
    tags: ['Real-Time', 'Geo-Location', 'System Design', 'Mobile'],
    summary: 'Full ride-hailing system architecture for a regional mobility startup: geo-spatial driver matching under 2 seconds, dynamic surge pricing with demand heatmaps, multi-stop routing via Google Maps Platform, and dual apps in React Native and Flutter.',
    role: 'System Architect',
    year: '2023',
    outcomes: [
      'Geo-spatial driver matching with < 2s response time',
      'Dynamic surge pricing with demand heatmaps',
      'Multi-stop routing via Google Maps Platform',
      'Dual app: rider (React Native) + driver (Flutter)',
    ],
    diagramTitle: 'Ride-Hailing Platform Architecture',
    svgViewBox: '0 0 240 290',
    svgContent: `
      <g>
        <rect x="8" y="8" width="224" height="62" rx="8" fill="rgba(247,183,102,0.04)" stroke="rgba(247,183,102,0.18)" stroke-width="1" stroke-dasharray="4,3"/>
        <text x="16" y="23" font-size="7" fill="rgba(247,183,102,0.5)" font-family="monospace" letter-spacing="1.5">MOBILE CLIENTS</text>
        <rect x="14" y="28" width="96" height="34" rx="6" fill="rgba(247,183,102,0.08)" stroke="rgba(247,183,102,0.3)" stroke-width="1"/>
        <text x="62" y="44" text-anchor="middle" font-size="8.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Rider App</text>
        <text x="62" y="55" text-anchor="middle" font-size="7" fill="#9898b8" font-family="monospace">React Native</text>
        <rect x="120" y="28" width="112" height="34" rx="6" fill="rgba(247,183,102,0.08)" stroke="rgba(247,183,102,0.3)" stroke-width="1"/>
        <text x="176" y="44" text-anchor="middle" font-size="8.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Driver App</text>
        <text x="176" y="55" text-anchor="middle" font-size="7" fill="#9898b8" font-family="monospace">Flutter · Background GPS</text>
      </g>
      <rect x="8" y="84" width="106" height="36" rx="7" fill="rgba(247,183,102,0.1)" stroke="rgba(247,183,102,0.35)" stroke-width="1.5"/>
      <text x="61" y="100" text-anchor="middle" font-size="8" fill="#F7B766" font-family="sans-serif" font-weight="700">Real-Time Engine</text>
      <text x="61" y="113" text-anchor="middle" font-size="7" fill="#9898b8" font-family="monospace">WebSocket · Socket.IO</text>
      <rect x="126" y="84" width="106" height="36" rx="7" fill="rgba(247,183,102,0.08)" stroke="rgba(247,183,102,0.28)" stroke-width="1.2"/>
      <text x="179" y="100" text-anchor="middle" font-size="8" fill="#F7B766" font-family="sans-serif" font-weight="700">REST API</text>
      <text x="179" y="113" text-anchor="middle" font-size="7" fill="#9898b8" font-family="monospace">Node.js · JWT · Helmet</text>
      <line x1="62" y1="62" x2="61" y2="84" stroke="rgba(247,183,102,0.35)" stroke-width="1.2"/>
      <line x1="176" y1="62" x2="179" y2="84" stroke="rgba(247,183,102,0.35)" stroke-width="1.2"/>
      <g>
        <rect x="8" y="134" width="224" height="90" rx="8" fill="rgba(238,148,39,0.03)" stroke="rgba(238,148,39,0.1)" stroke-width="1" stroke-dasharray="4,3"/>
        <text x="16" y="149" font-size="7" fill="rgba(238,148,39,0.4)" font-family="monospace" letter-spacing="1.5">CORE ENGINES</text>
        <rect x="14" y="155" width="62" height="60" rx="6" fill="rgba(238,148,39,0.06)" stroke="rgba(238,148,39,0.18)" stroke-width="1"/>
        <text x="45" y="175" text-anchor="middle" font-size="8" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Matching</text>
        <text x="45" y="187" text-anchor="middle" font-size="7" fill="#9898b8" font-family="monospace">Geo-spatial</text>
        <text x="45" y="199" text-anchor="middle" font-size="7" fill="#9898b8" font-family="monospace">PostGIS</text>
        <rect x="86" y="155" width="68" height="60" rx="6" fill="rgba(238,148,39,0.06)" stroke="rgba(238,148,39,0.18)" stroke-width="1"/>
        <text x="120" y="175" text-anchor="middle" font-size="8" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Surge Pricing</text>
        <text x="120" y="187" text-anchor="middle" font-size="7" fill="#9898b8" font-family="monospace">Demand Model</text>
        <text x="120" y="199" text-anchor="middle" font-size="7" fill="#9898b8" font-family="monospace">Heatmaps</text>
        <rect x="164" y="155" width="68" height="60" rx="6" fill="rgba(238,148,39,0.06)" stroke="rgba(238,148,39,0.18)" stroke-width="1"/>
        <text x="198" y="175" text-anchor="middle" font-size="8" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Payments</text>
        <text x="198" y="187" text-anchor="middle" font-size="7" fill="#9898b8" font-family="monospace">Stripe · Wallet</text>
        <text x="198" y="199" text-anchor="middle" font-size="7" fill="#9898b8" font-family="monospace">PCI-DSS</text>
      </g>
      <line x1="50" y1="120" x2="45" y2="155" stroke="rgba(238,148,39,0.2)" stroke-width="1"/>
      <line x1="165" y1="120" x2="198" y2="155" stroke="rgba(238,148,39,0.2)" stroke-width="1"/>
      <rect x="40" y="238" width="160" height="38" rx="7" fill="rgba(77,159,220,0.05)" stroke="rgba(77,159,220,0.15)" stroke-width="1" stroke-dasharray="3,2"/>
      <text x="120" y="254" text-anchor="middle" font-size="7.5" fill="#9898b8" font-family="monospace">Google Maps Platform</text>
      <text x="120" y="267" text-anchor="middle" font-size="7" fill="#5a5a7a" font-family="monospace">Directions API · Distance Matrix</text>
      <line x1="45" y1="215" x2="80" y2="238" stroke="rgba(77,159,220,0.18)" stroke-width="1" stroke-dasharray="3,2"/>
      <line x1="120" y1="215" x2="120" y2="238" stroke="rgba(77,159,220,0.18)" stroke-width="1" stroke-dasharray="3,2"/>
    `,
  },
]

/* ── Color helpers ─────────────────────────────────────────── */
const colorTokens: Record<string, { border: string; badge: string; accent: string; tag: string }> = {
  cyan:   { border: 'border-[rgba(238,148,39,0.2)]',   badge: 'bg-[rgba(238,148,39,0.1)]  text-cyan     border-[rgba(238,148,39,0.25)]',    accent: 'text-cyan',       tag: 'bg-[rgba(238,148,39,0.08)]  text-cyan     border-[rgba(238,148,39,0.2)]'   },
  purple: { border: 'border-[rgba(77,159,220,0.2)]',  badge: 'bg-[rgba(77,159,220,0.1)] text-purple   border-[rgba(77,159,220,0.25)]',   accent: 'text-purple',     tag: 'bg-[rgba(77,159,220,0.08)] text-purple   border-[rgba(77,159,220,0.2)]'  },
  green:  { border: 'border-[rgba(127,184,232,0.18)]',  badge: 'bg-[rgba(127,184,232,0.08)] text-[#7FB8E8] border-[rgba(127,184,232,0.2)]',   accent: 'text-[#7FB8E8]',  tag: 'bg-[rgba(127,184,232,0.06)]  text-[#7FB8E8] border-[rgba(127,184,232,0.15)]' },
  amber:  { border: 'border-[rgba(247,183,102,0.18)]', badge: 'bg-[rgba(247,183,102,0.08)] text-[#F7B766] border-[rgba(247,183,102,0.2)]', accent: 'text-[#F7B766]',  tag: 'bg-[rgba(247,183,102,0.06)] text-[#F7B766] border-[rgba(247,183,102,0.15)]' },
}

/* ── Bullet dot helper ─────────────────────────────────────── */
const dotBg: Record<string, string> = {
  cyan: 'bg-cyan', purple: 'bg-purple', green: 'bg-[#7FB8E8]', amber: 'bg-[#F7B766]',
}

export default function ProjectsPage() {
  const [activeId, setActiveId] = useState<string>(projects[0].id)
  const active = projects.find(p => p.id === activeId)!
  const c = colorTokens[active.color]

  return (
    <>
      {/* ═══ HERO ════════════════════════════════════════════════ */}
      <section className="relative py-24 px-6 text-center overflow-hidden" aria-label="Projects header">
        <div className="absolute inset-0 bg-cyber-grid opacity-[0.25] pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-xs font-mono text-cyan tracking-[0.2em] uppercase mb-4">Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-bold font-sans text-[#f0f0fa] tracking-tight mb-5">
            Selected Projects
          </h1>
          <p className="text-lg text-[#9898b8] max-w-xl mx-auto">
            Not portfolio pieces. Real systems that processed billions in transactions, tracked 60,000 UN vehicles, and secured government data at scale.
          </p>
        </div>
      </section>

      {/* ═══ PROJECT BROWSER ══════════════════════════════════════ */}
      <section className="pb-24 px-6" aria-label="Project browser">
        <div className="max-w-[1200px] mx-auto">

          {/* Tab bar */}
          <div className="flex flex-wrap gap-2 mb-10 border-b border-[rgba(255,255,255,0.06)] pb-4" role="tablist">
            {projects.map(p => {
              const tc = colorTokens[p.color]
              const isActive = p.id === activeId
              return (
                <button
                  key={p.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${p.id}`}
                  onClick={() => setActiveId(p.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium font-mono transition-all duration-200 border ${
                    isActive
                      ? `${tc.badge} border-current`
                      : 'text-[#5a5a7a] border-transparent hover:text-[#9898b8] hover:border-[rgba(255,255,255,0.08)]'
                  }`}
                >
                  {p.tab}
                </button>
              )
            })}
          </div>

          {/* Active panel */}
          <div id={`panel-${active.id}`} role="tabpanel" aria-label={active.title}
               className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Left: Info */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className={`text-[0.65rem] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border ${c.badge}`}>
                  {active.category}
                </span>
                <span className="text-[0.7rem] font-mono text-[#6e6e8e]">{active.year}</span>
              </div>

              <h2 className={`text-2xl md:text-3xl font-bold font-sans ${c.accent} mb-2`}>
                {active.title}
              </h2>
              <p className="text-sm font-mono text-[#5a5a7a] mb-6">Role: {active.role}</p>
              <p className="text-[#9898b8] text-[0.9rem] leading-relaxed mb-6">{active.summary}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {active.tags.map(tag => (
                  <span key={tag} className={`text-[0.65rem] font-mono tracking-wide px-2.5 py-1 rounded-full border ${c.tag}`}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Outcomes */}
              <div className="bg-[#0e0e1c] border border-[rgba(255,255,255,0.06)] rounded-xl p-6">
                <p className="text-[0.65rem] font-mono text-[#6e6e8e] tracking-widest uppercase mb-4">Key Outcomes</p>
                <ul className="flex flex-col gap-3">
                  {active.outcomes.map((o, i) => (
                    <li key={i} className="flex items-start gap-3 text-[0.875rem] text-[#9898b8]">
                      <span className={`mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0 ${dotBg[active.color]}`} aria-hidden="true" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Architecture diagram — overflow-hidden container */}
            <div className={`bg-[#0a0a1a] border rounded-2xl p-5 ${c.border} overflow-hidden`}>
              <p className="text-[0.65rem] font-mono text-[#6e6e8e] tracking-widest uppercase mb-4">
                {active.diagramTitle}
              </p>
              <div className="w-full overflow-hidden">
                <svg
                  viewBox={active.svgViewBox}
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto block"
                  role="img"
                  aria-label={`Architecture diagram for ${active.title}`}
                  dangerouslySetInnerHTML={{ __html: active.svgContent }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ════════════════════════════════════════════════ */}
      <section className="py-20 px-6 border-t border-[rgba(255,255,255,0.05)]" aria-label="Work with Ahmed">
        <div className="max-w-[700px] mx-auto text-center">
          <p className="text-xs font-mono text-cyan tracking-[0.2em] uppercase mb-4">Have a Project?</p>
          <h2 className="text-3xl font-bold font-sans text-[#f0f0fa] mb-4">
            Let's Architect Something Great.
          </h2>
          <p className="text-[#c0c0d8] mb-10">
            Have a system to build or a problem to solve? Book a session and let's map out your next project from architecture to delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <BookButton size="xl" />
            <CTAButton href="/services" variant="ghost" size="xl">View Services</CTAButton>
          </div>
        </div>
      </section>
    </>
  )
}
