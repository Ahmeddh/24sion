'use client'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { CTAButton, BookButton } from '@/components/ui/CTAButton'
import { Motion } from '@/components/motion'
import { PageMotion } from '@/components/layout/PageMotion'
import { ProjectDiagram } from '@/components/projects/diagram'
import { DURATION, EASE } from '@/lib/motion/tokens'
import { getMotionDirection, dirFromLocale } from '@/lib/dms/direction'

/* ═══════════════════════════════════════════════════════════
   Non-translatable visual data (SVG diagrams, colors, tags)
═══════════════════════════════════════════════════════════ */
const projectVisuals = [
  {
    id: 'petronas',
    color: 'cyan' as const,
    tags: ['Fintech', 'Enterprise', 'Web Platform', 'Fraud Prevention'],
    year: '2011 to 2015',
    svgViewBox: '0 0 240 300',
    svgContent: `
      <g>
        <rect x="8" y="8" width="224" height="64" rx="8" fill="rgba(0,198,255,0.04)" stroke="rgba(0,198,255,0.2)" stroke-width="1" stroke-dasharray="4,3"/>
        <text x="16" y="23" font-size="7" fill="rgba(0,198,255,0.5)" font-family="monospace" letter-spacing="1.5">ENTERPRISE</text>
        <rect x="14" y="28" width="94" height="36" rx="6" fill="rgba(0,198,255,0.08)" stroke="rgba(0,198,255,0.3)" stroke-width="1"/>
        <text x="61" y="44" text-anchor="middle" font-size="8.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Corporate Portal</text>
        <text x="61" y="56" text-anchor="middle" font-size="7" fill="#9898b8" font-family="monospace">Order eCoupons</text>
        <rect x="118" y="28" width="114" height="36" rx="6" fill="rgba(0,198,255,0.08)" stroke="rgba(0,198,255,0.3)" stroke-width="1"/>
        <text x="175" y="44" text-anchor="middle" font-size="8.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Coupon Printer</text>
        <text x="175" y="56" text-anchor="middle" font-size="7" fill="#9898b8" font-family="monospace">Watermarked · Branded</text>
      </g>
      <rect x="60" y="86" width="120" height="38" rx="7" fill="rgba(0,198,255,0.12)" stroke="rgba(0,198,255,0.4)" stroke-width="1.5"/>
      <text x="120" y="103" text-anchor="middle" font-size="8.5" fill="#00c6ff" font-family="sans-serif" font-weight="700">eCoupon Engine</text>
      <text x="120" y="116" text-anchor="middle" font-size="7" fill="#9898b8" font-family="monospace">Generate · Validate · Track</text>
      <line x1="61" y1="64" x2="90" y2="86" stroke="rgba(0,198,255,0.4)" stroke-width="1.2"/>
      <line x1="175" y1="64" x2="150" y2="86" stroke="rgba(0,198,255,0.4)" stroke-width="1.2"/>
      <g>
        <rect x="8" y="140" width="224" height="66" rx="8" fill="rgba(123,97,255,0.04)" stroke="rgba(123,97,255,0.18)" stroke-width="1" stroke-dasharray="4,3"/>
        <text x="16" y="155" font-size="7" fill="rgba(123,97,255,0.5)" font-family="monospace" letter-spacing="1.5">REDEMPTION LAYER</text>
        <rect x="14" y="160" width="100" height="40" rx="6" fill="rgba(123,97,255,0.08)" stroke="rgba(123,97,255,0.3)" stroke-width="1"/>
        <text x="64" y="177" text-anchor="middle" font-size="8" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Station Claim</text>
        <text x="64" y="190" text-anchor="middle" font-size="7" fill="#9898b8" font-family="monospace">Submit · Get Credit</text>
        <rect x="126" y="160" width="98" height="40" rx="6" fill="rgba(123,97,255,0.08)" stroke="rgba(123,97,255,0.3)" stroke-width="1"/>
        <text x="175" y="177" text-anchor="middle" font-size="8" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Fuel Dispensing</text>
        <text x="175" y="190" text-anchor="middle" font-size="7" fill="#9898b8" font-family="monospace">Coupon Scan · POS</text>
      </g>
      <line x1="90" y1="124" x2="64" y2="160" stroke="rgba(123,97,255,0.3)" stroke-width="1.1"/>
      <line x1="150" y1="124" x2="175" y2="160" stroke="rgba(123,97,255,0.3)" stroke-width="1.1"/>
      <g>
        <rect x="8" y="220" width="224" height="56" rx="8" fill="rgba(0,255,170,0.03)" stroke="rgba(0,255,170,0.15)" stroke-width="1" stroke-dasharray="3,2"/>
        <text x="16" y="235" font-size="7" fill="rgba(0,255,170,0.4)" font-family="monospace" letter-spacing="1.5">SETTLEMENT</text>
        <rect x="14" y="240" width="100" height="30" rx="5" fill="rgba(0,255,170,0.06)" stroke="rgba(0,255,170,0.2)" stroke-width="1"/>
        <text x="64" y="253" text-anchor="middle" font-size="7.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Credit Account</text>
        <text x="64" y="264" text-anchor="middle" font-size="6.5" fill="#9898b8" font-family="monospace">Station Balance</text>
        <rect x="126" y="240" width="98" height="30" rx="5" fill="rgba(0,255,170,0.06)" stroke="rgba(0,255,170,0.2)" stroke-width="1"/>
        <text x="175" y="253" text-anchor="middle" font-size="7.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Bulk Fuel Orders</text>
        <text x="175" y="264" text-anchor="middle" font-size="6.5" fill="#9898b8" font-family="monospace">Credit to Inventory</text>
      </g>
      <line x1="64" y1="200" x2="64" y2="240" stroke="rgba(0,255,170,0.2)" stroke-width="1" stroke-dasharray="3,2"/>
      <line x1="175" y1="200" x2="175" y2="240" stroke="rgba(0,255,170,0.2)" stroke-width="1" stroke-dasharray="3,2"/>
      <rect x="40" y="284" width="160" height="10" rx="4" fill="rgba(0,198,255,0.05)" stroke="rgba(0,198,255,0.15)" stroke-width="1" stroke-dasharray="3,2"/>
      <text x="120" y="292" text-anchor="middle" font-size="6.5" fill="#6e6e8e" font-family="monospace">Fraud Prevention Dashboard · Admin</text>
    `,
  },
  {
    id: 'fds',
    color: 'amber' as const,
    tags: ['Enterprise', 'Fleet Management', 'Distributed Architecture', 'Government / UN'],
    year: '2010 to 2014',
    svgViewBox: '0 0 240 318',
    svgContent: `
      <g>
        <rect x="8" y="8" width="224" height="64" rx="8" fill="rgba(255,179,64,0.05)" stroke="rgba(255,179,64,0.22)" stroke-width="1" stroke-dasharray="4,3"/>
        <text x="16" y="23" font-size="7" fill="rgba(255,179,64,0.5)" font-family="monospace" letter-spacing="1.5">FIELD TERMINALS</text>
        <rect x="14" y="28" width="58" height="36" rx="6" fill="rgba(255,179,64,0.08)" stroke="rgba(255,179,64,0.3)" stroke-width="1"/>
        <text x="43" y="44" text-anchor="middle" font-size="7.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Station POS</text>
        <text x="43" y="56" text-anchor="middle" font-size="6.5" fill="#9898b8" font-family="monospace">15 Stations</text>
        <rect x="82" y="28" width="72" height="36" rx="6" fill="rgba(255,179,64,0.08)" stroke="rgba(255,179,64,0.3)" stroke-width="1"/>
        <text x="118" y="44" text-anchor="middle" font-size="7.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">ID Card Reader</text>
        <text x="118" y="56" text-anchor="middle" font-size="6.5" fill="#9898b8" font-family="monospace">Barcode / RFID</text>
        <rect x="164" y="28" width="68" height="36" rx="6" fill="rgba(255,179,64,0.08)" stroke="rgba(255,179,64,0.3)" stroke-width="1"/>
        <text x="198" y="44" text-anchor="middle" font-size="7.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Fuel Meter</text>
        <text x="198" y="56" text-anchor="middle" font-size="6.5" fill="#9898b8" font-family="monospace">Pump Integration</text>
      </g>
      <rect x="60" y="86" width="120" height="36" rx="7" fill="rgba(255,179,64,0.12)" stroke="rgba(255,179,64,0.4)" stroke-width="1.5"/>
      <text x="120" y="102" text-anchor="middle" font-size="8.5" fill="#ffb340" font-family="sans-serif" font-weight="700">FDS Core Engine</text>
      <text x="120" y="110" text-anchor="middle" font-size="6.5" fill="#9898b8" font-family="monospace">Transaction Processing</text>
      <text x="120" y="120" text-anchor="middle" font-size="6.5" fill="#9898b8" font-family="monospace">Auth &amp; Validation</text>
      <line x1="43" y1="64" x2="85" y2="86" stroke="rgba(255,179,64,0.35)" stroke-width="1.2"/>
      <line x1="118" y1="64" x2="118" y2="86" stroke="rgba(255,179,64,0.35)" stroke-width="1.2"/>
      <line x1="198" y1="64" x2="155" y2="86" stroke="rgba(255,179,64,0.35)" stroke-width="1.2"/>
      <g>
        <rect x="8" y="138" width="224" height="96" rx="8" fill="rgba(0,198,255,0.03)" stroke="rgba(0,198,255,0.12)" stroke-width="1" stroke-dasharray="4,3"/>
        <text x="16" y="153" font-size="7" fill="rgba(0,198,255,0.4)" font-family="monospace" letter-spacing="1.5">FLEET REGISTRIES</text>
        <rect x="14" y="159" width="60" height="66" rx="6" fill="rgba(0,198,255,0.06)" stroke="rgba(0,198,255,0.2)" stroke-width="1"/>
        <text x="44" y="179" text-anchor="middle" font-size="7.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Vehicles</text>
        <text x="44" y="191" text-anchor="middle" font-size="7" fill="#00c6ff" font-family="monospace">60,000</text>
        <text x="44" y="203" text-anchor="middle" font-size="6" fill="#9898b8" font-family="monospace">UN · Patrol ·</text>
        <text x="44" y="213" text-anchor="middle" font-size="6" fill="#9898b8" font-family="monospace">Logistics</text>
        <rect x="84" y="159" width="64" height="66" rx="6" fill="rgba(0,198,255,0.06)" stroke="rgba(0,198,255,0.2)" stroke-width="1"/>
        <text x="116" y="179" text-anchor="middle" font-size="7.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Generators</text>
        <text x="116" y="191" text-anchor="middle" font-size="7" fill="#00c6ff" font-family="monospace">14,000</text>
        <text x="116" y="203" text-anchor="middle" font-size="6" fill="#9898b8" font-family="monospace">Power Plants</text>
        <text x="116" y="213" text-anchor="middle" font-size="6" fill="#9898b8" font-family="monospace">Camp · Field</text>
        <rect x="158" y="159" width="66" height="66" rx="6" fill="rgba(0,198,255,0.06)" stroke="rgba(0,198,255,0.2)" stroke-width="1"/>
        <text x="191" y="179" text-anchor="middle" font-size="7.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Aircraft</text>
        <text x="191" y="191" text-anchor="middle" font-size="7" fill="#00c6ff" font-family="monospace">140</text>
        <text x="191" y="203" text-anchor="middle" font-size="6" fill="#9898b8" font-family="monospace">Aviation Grade</text>
        <text x="191" y="213" text-anchor="middle" font-size="6" fill="#9898b8" font-family="monospace">Fuel Audit</text>
      </g>
      <line x1="90" y1="122" x2="44" y2="159" stroke="rgba(0,198,255,0.25)" stroke-width="1.1"/>
      <line x1="120" y1="122" x2="116" y2="159" stroke="rgba(0,198,255,0.25)" stroke-width="1.1"/>
      <line x1="150" y1="122" x2="191" y2="159" stroke="rgba(0,198,255,0.25)" stroke-width="1.1"/>
      <rect x="8" y="248" width="224" height="64" rx="8" fill="rgba(123,97,255,0.04)" stroke="rgba(123,97,255,0.15)" stroke-width="1" stroke-dasharray="3,2"/>
      <text x="16" y="263" font-size="7" fill="rgba(123,97,255,0.4)" font-family="monospace" letter-spacing="1.5">DATA SYNC LAYER</text>
      <rect x="14" y="268" width="88" height="38" rx="5" fill="rgba(123,97,255,0.07)" stroke="rgba(123,97,255,0.25)" stroke-width="1"/>
      <text x="58" y="282" text-anchor="middle" font-size="7.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Local DB</text>
      <text x="58" y="293" text-anchor="middle" font-size="6" fill="#9898b8" font-family="monospace">Field Stations · Offline</text>
      <text x="58" y="302" text-anchor="middle" font-size="5.5" fill="#6e6e8e" font-family="monospace">SQL Server</text>
      <text x="120" y="284" text-anchor="middle" font-size="9" fill="rgba(123,97,255,0.55)" font-family="sans-serif">↔</text>
      <text x="120" y="295" text-anchor="middle" font-size="5.5" fill="rgba(123,97,255,0.4)" font-family="monospace">on connect</text>
      <rect x="138" y="268" width="86" height="38" rx="5" fill="rgba(123,97,255,0.07)" stroke="rgba(123,97,255,0.25)" stroke-width="1"/>
      <text x="181" y="282" text-anchor="middle" font-size="7.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">HQ Central DB</text>
      <text x="181" y="293" text-anchor="middle" font-size="6" fill="#9898b8" font-family="monospace">Khartoum · Audit</text>
      <text x="181" y="302" text-anchor="middle" font-size="5.5" fill="#6e6e8e" font-family="monospace">Crystal Reports</text>
    `,
  },
  {
    id: 'shoogircash',
    color: 'green' as const,
    tags: ['Fintech', 'e-Wallet', 'Central Bank API', 'National Scale'],
    year: '2015 to 2017',
    svgViewBox: '0 0 240 280',
    svgContent: `
      <g>
        <rect x="8" y="8" width="224" height="54" rx="8" fill="rgba(0,255,170,0.04)" stroke="rgba(0,255,170,0.18)" stroke-width="1" stroke-dasharray="4,3"/>
        <text x="16" y="23" font-size="7" fill="rgba(0,255,170,0.45)" font-family="monospace" letter-spacing="1.5">CONSUMER LAYER</text>
        <rect x="14" y="28" width="96" height="28" rx="6" fill="rgba(0,255,170,0.07)" stroke="rgba(0,255,170,0.25)" stroke-width="1"/>
        <text x="62" y="40" text-anchor="middle" font-size="7.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Mobile Wallet</text>
        <text x="62" y="51" text-anchor="middle" font-size="6.5" fill="#9898b8" font-family="monospace">iOS · Android</text>
        <rect x="120" y="28" width="104" height="28" rx="6" fill="rgba(0,255,170,0.07)" stroke="rgba(0,255,170,0.25)" stroke-width="1"/>
        <text x="172" y="40" text-anchor="middle" font-size="7.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Merchant Portal</text>
        <text x="172" y="51" text-anchor="middle" font-size="6.5" fill="#9898b8" font-family="monospace">Web · POS</text>
      </g>
      <rect x="50" y="76" width="140" height="38" rx="7" fill="rgba(0,255,170,0.12)" stroke="rgba(0,255,170,0.4)" stroke-width="1.5"/>
      <text x="120" y="93" text-anchor="middle" font-size="8.5" fill="#00ffaa" font-family="sans-serif" font-weight="700">ShoogirCash Core</text>
      <text x="120" y="106" text-anchor="middle" font-size="6.5" fill="#9898b8" font-family="monospace">RESTful Gateway · Auth · Tokenization</text>
      <line x1="62" y1="56" x2="85" y2="76" stroke="rgba(0,255,170,0.35)" stroke-width="1.2"/>
      <line x1="172" y1="56" x2="155" y2="76" stroke="rgba(0,255,170,0.35)" stroke-width="1.2"/>
      <g>
        <rect x="8" y="130" width="224" height="60" rx="8" fill="rgba(255,179,64,0.04)" stroke="rgba(255,179,64,0.16)" stroke-width="1" stroke-dasharray="4,3"/>
        <text x="16" y="145" font-size="7" fill="rgba(255,179,64,0.4)" font-family="monospace" letter-spacing="1.5">BUSINESS LOGIC</text>
        <rect x="14" y="150" width="94" height="32" rx="6" fill="rgba(255,179,64,0.07)" stroke="rgba(255,179,64,0.22)" stroke-width="1"/>
        <text x="61" y="164" text-anchor="middle" font-size="7.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Commission Engine</text>
        <text x="61" y="175" text-anchor="middle" font-size="6" fill="#9898b8" font-family="monospace">Multi-tier · Agent</text>
        <rect x="118" y="150" width="106" height="32" rx="6" fill="rgba(255,179,64,0.07)" stroke="rgba(255,179,64,0.22)" stroke-width="1"/>
        <text x="171" y="164" text-anchor="middle" font-size="7.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Transaction Ledger</text>
        <text x="171" y="175" text-anchor="middle" font-size="6" fill="#9898b8" font-family="monospace">Real-time · Audit</text>
      </g>
      <line x1="90" y1="114" x2="61" y2="150" stroke="rgba(255,179,64,0.25)" stroke-width="1.1"/>
      <line x1="150" y1="114" x2="171" y2="150" stroke="rgba(255,179,64,0.25)" stroke-width="1.1"/>
      <rect x="50" y="206" width="140" height="38" rx="7" fill="rgba(0,198,255,0.1)" stroke="rgba(0,198,255,0.35)" stroke-width="1.5"/>
      <text x="120" y="223" text-anchor="middle" font-size="8" fill="#00c6ff" font-family="sans-serif" font-weight="700">CBOS Central Bank API</text>
      <text x="120" y="236" text-anchor="middle" font-size="6.5" fill="#9898b8" font-family="monospace">Settlement · Clearing · Compliance</text>
      <line x1="120" y1="182" x2="120" y2="206" stroke="rgba(0,198,255,0.4)" stroke-width="1.3"/>
      <text x="120" y="265" text-anchor="middle" font-size="6.5" fill="#6e6e8e" font-family="monospace">~69% Sudan Online Payments at Peak (2015–2016)</text>
    `,
  },
  {
    id: 'healthcare-ssi',
    color: 'purple' as const,
    tags: ['Blockchain', 'Hyperledger Fabric', 'SSI', 'HIPAA', 'Government'],
    year: '2021 to 2024',
    svgViewBox: '0 0 240 290',
    svgContent: `
      <g>
        <rect x="8" y="8" width="224" height="56" rx="8" fill="rgba(123,97,255,0.04)" stroke="rgba(123,97,255,0.2)" stroke-width="1" stroke-dasharray="4,3"/>
        <text x="16" y="23" font-size="7" fill="rgba(123,97,255,0.5)" font-family="monospace" letter-spacing="1.5">IDENTITY HOLDERS</text>
        <rect x="14" y="28" width="88" height="30" rx="6" fill="rgba(123,97,255,0.08)" stroke="rgba(123,97,255,0.28)" stroke-width="1"/>
        <text x="58" y="41" text-anchor="middle" font-size="7.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Patient Wallet</text>
        <text x="58" y="52" text-anchor="middle" font-size="6" fill="#9898b8" font-family="monospace">SSI Credential</text>
        <rect x="112" y="28" width="112" height="30" rx="6" fill="rgba(123,97,255,0.08)" stroke="rgba(123,97,255,0.28)" stroke-width="1"/>
        <text x="168" y="41" text-anchor="middle" font-size="7.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Provider Identity</text>
        <text x="168" y="52" text-anchor="middle" font-size="6" fill="#9898b8" font-family="monospace">Verifiable Credential</text>
      </g>
      <rect x="50" y="78" width="140" height="38" rx="7" fill="rgba(123,97,255,0.13)" stroke="rgba(123,97,255,0.4)" stroke-width="1.5"/>
      <text x="120" y="95" text-anchor="middle" font-size="8" fill="#7b61ff" font-family="sans-serif" font-weight="700">SSI Verification Layer</text>
      <text x="120" y="108" text-anchor="middle" font-size="6.5" fill="#9898b8" font-family="monospace">Zero-Knowledge Proof · DID Resolver</text>
      <line x1="58" y1="58" x2="85" y2="78" stroke="rgba(123,97,255,0.3)" stroke-width="1.2"/>
      <line x1="168" y1="58" x2="155" y2="78" stroke="rgba(123,97,255,0.3)" stroke-width="1.2"/>
      <rect x="20" y="132" width="200" height="48" rx="7" fill="rgba(0,198,255,0.08)" stroke="rgba(0,198,255,0.3)" stroke-width="1.5"/>
      <text x="120" y="150" text-anchor="middle" font-size="8" fill="#00c6ff" font-family="sans-serif" font-weight="700">Hyperledger Fabric Network</text>
      <text x="120" y="162" text-anchor="middle" font-size="6.5" fill="#9898b8" font-family="monospace">Tamper-Evident · Permissioned · HIPAA</text>
      <text x="120" y="173" text-anchor="middle" font-size="6" fill="#6e6e8e" font-family="monospace">Health Record Anchoring · Access Log</text>
      <line x1="120" y1="116" x2="120" y2="132" stroke="rgba(0,198,255,0.35)" stroke-width="1.3"/>
      <g>
        <rect x="8" y="196" width="224" height="56" rx="8" fill="rgba(0,255,170,0.03)" stroke="rgba(0,255,170,0.14)" stroke-width="1" stroke-dasharray="3,2"/>
        <text x="16" y="211" font-size="7" fill="rgba(0,255,170,0.4)" font-family="monospace" letter-spacing="1.5">GOV AGENCY SYSTEMS</text>
        <rect x="14" y="216" width="64" height="28" rx="5" fill="rgba(0,255,170,0.06)" stroke="rgba(0,255,170,0.18)" stroke-width="1"/>
        <text x="46" y="228" text-anchor="middle" font-size="6.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Agency A</text>
        <text x="46" y="239" text-anchor="middle" font-size="5.5" fill="#9898b8" font-family="monospace">EHR System</text>
        <rect x="88" y="216" width="64" height="28" rx="5" fill="rgba(0,255,170,0.06)" stroke="rgba(0,255,170,0.18)" stroke-width="1"/>
        <text x="120" y="228" text-anchor="middle" font-size="6.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Agency B</text>
        <text x="120" y="239" text-anchor="middle" font-size="5.5" fill="#9898b8" font-family="monospace">Benefits DB</text>
        <rect x="162" y="216" width="62" height="28" rx="5" fill="rgba(0,255,170,0.06)" stroke="rgba(0,255,170,0.18)" stroke-width="1"/>
        <text x="193" y="228" text-anchor="middle" font-size="6.5" fill="#f0f0fa" font-family="sans-serif" font-weight="600">Agency C</text>
        <text x="193" y="239" text-anchor="middle" font-size="5.5" fill="#9898b8" font-family="monospace">Audit Trail</text>
      </g>
      <line x1="80" y1="180" x2="46" y2="216" stroke="rgba(0,255,170,0.2)" stroke-width="1"/>
      <line x1="120" y1="180" x2="120" y2="216" stroke="rgba(0,255,170,0.2)" stroke-width="1"/>
      <line x1="160" y1="180" x2="193" y2="216" stroke="rgba(0,255,170,0.2)" stroke-width="1"/>
      <text x="120" y="280" text-anchor="middle" font-size="6.5" fill="#6e6e8e" font-family="monospace">Tokenised Access · No Centralised Data Custody</text>
    `,
  },
]

/* ── Color map ───────────────────────────────────────────── */
const colorMap = {
  cyan:   { accent: '#00c6ff', border: 'border-[rgba(0,198,255,0.2)]',   bg: 'bg-[rgba(0,198,255,0.04)]',   tab: 'border-b-2 border-cyan text-cyan',              badge: 'bg-[rgba(0,198,255,0.1)] text-cyan border-[rgba(0,198,255,0.25)]',      dot: 'bg-cyan',         glow: 'shadow-[0_0_30px_rgba(0,198,255,0.06)]'  },
  amber:  { accent: '#ffb340', border: 'border-[rgba(255,179,64,0.2)]',  bg: 'bg-[rgba(255,179,64,0.03)]',  tab: 'border-b-2 border-[#ffb340] text-[#ffb340]',    badge: 'bg-[rgba(255,179,64,0.08)] text-[#ffb340] border-[rgba(255,179,64,0.2)]', dot: 'bg-[#ffb340]',    glow: 'shadow-[0_0_30px_rgba(255,179,64,0.06)]' },
  green:  { accent: '#00ffaa', border: 'border-[rgba(0,255,170,0.18)]',  bg: 'bg-[rgba(0,255,170,0.03)]',   tab: 'border-b-2 border-[#00ffaa] text-[#00ffaa]',    badge: 'bg-[rgba(0,255,170,0.08)] text-[#00ffaa] border-[rgba(0,255,170,0.2)]',  dot: 'bg-[#00ffaa]',    glow: 'shadow-[0_0_30px_rgba(0,255,170,0.06)]' },
  purple: { accent: '#7b61ff', border: 'border-[rgba(123,97,255,0.2)]',  bg: 'bg-[rgba(123,97,255,0.04)]',  tab: 'border-b-2 border-purple text-purple',           badge: 'bg-[rgba(123,97,255,0.1)] text-purple border-[rgba(123,97,255,0.25)]',   dot: 'bg-purple',       glow: 'shadow-[0_0_30px_rgba(123,97,255,0.06)]' },
}

const tagColors: Record<string, string> = {
  'Fintech':                  'text-cyan border-[rgba(0,198,255,0.25)] bg-[rgba(0,198,255,0.07)]',
  'Enterprise':               'text-[#ffb340] border-[rgba(255,179,64,0.2)] bg-[rgba(255,179,64,0.06)]',
  'Web Platform':             'text-[#00ffaa] border-[rgba(0,255,170,0.2)] bg-[rgba(0,255,170,0.06)]',
  'Fraud Prevention':         'text-purple border-[rgba(123,97,255,0.25)] bg-[rgba(123,97,255,0.07)]',
  'Fleet Management':         'text-cyan border-[rgba(0,198,255,0.25)] bg-[rgba(0,198,255,0.07)]',
  'Distributed Architecture': 'text-[#ffb340] border-[rgba(255,179,64,0.2)] bg-[rgba(255,179,64,0.06)]',
  'Government / UN':          'text-purple border-[rgba(123,97,255,0.25)] bg-[rgba(123,97,255,0.07)]',
  'e-Wallet':                 'text-[#00ffaa] border-[rgba(0,255,170,0.2)] bg-[rgba(0,255,170,0.06)]',
  'Central Bank API':         'text-cyan border-[rgba(0,198,255,0.25)] bg-[rgba(0,198,255,0.07)]',
  'National Scale':           'text-[#ffb340] border-[rgba(255,179,64,0.2)] bg-[rgba(255,179,64,0.06)]',
  'Blockchain':               'text-purple border-[rgba(123,97,255,0.25)] bg-[rgba(123,97,255,0.07)]',
  'Hyperledger Fabric':       'text-cyan border-[rgba(0,198,255,0.25)] bg-[rgba(0,198,255,0.07)]',
  'SSI':                      'text-[#00ffaa] border-[rgba(0,255,170,0.2)] bg-[rgba(0,255,170,0.06)]',
  'HIPAA':                    'text-[#ffb340] border-[rgba(255,179,64,0.2)] bg-[rgba(255,179,64,0.06)]',
  'Government':               'text-purple border-[rgba(123,97,255,0.25)] bg-[rgba(123,97,255,0.07)]',
}

type ProjectText = {
  id: string
  tab: string
  title: string
  category: string
  role: string
  summary: string
  diagramTitle: string
  outcomes: string[]
}

export default function ProjectsPage() {
  const params = useParams()
  const locale = (params?.locale as string) || 'en'
  const t = useTranslations('projects')

  const projectTexts = t.raw('list') as ProjectText[]
  const projects = projectVisuals.map((v, i) => ({ ...v, ...projectTexts[i] }))

  const reduce    = useReducedMotion()
  const motionDir = getMotionDirection(dirFromLocale(locale))
  const [active, setActive] = useState(0)
  const proj = projects[active]
  const c    = colorMap[proj.color]

  return (
    <PageMotion>
    <>
      {/* ═══ HERO ════════════════════════════════════════════════ */}
      <section className="relative py-24 px-6 text-center overflow-hidden" aria-label={t('heroLabel')}>
        <div className="absolute inset-0 bg-cyber-grid opacity-[0.25] pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-xs font-mono text-cyan tracking-[0.2em] uppercase mb-4">{t('heroTag')}</p>
          <h1 className="text-4xl md:text-5xl font-bold font-sans text-[#f0f0fa] tracking-tight mb-5">
            {t('heroLabel')}
          </h1>
          <p className="text-lg text-[#9898b8] max-w-xl mx-auto">{t('heroSub')}</p>
        </div>
      </section>

      {/* ═══ PROJECT TABS ════════════════════════════════════════ */}
      <section className="pb-24 px-6" aria-label="Project showcase">
        <div className="max-w-[1100px] mx-auto">

          {/* Tab bar */}
          <div
            className="flex overflow-x-auto gap-0 border-b border-[rgba(255,255,255,0.07)] mb-10 scrollbar-none"
            role="tablist"
          >
            {projects.map((p, i) => {
              const cc      = colorMap[p.color]
              const isActive = i === active
              return (
                <button
                  key={p.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(i)}
                  style={isActive ? { color: cc.accent } : {}}
                  className={`relative px-5 py-3 text-xs font-mono tracking-widest uppercase whitespace-nowrap cursor-pointer transition-colors duration-[120ms] ease-[cubic-bezier(0.2,0,0,1)] ${
                    isActive ? '' : 'text-[#5a5a7a] hover:text-[#9898b8]'
                  }`}
                >
                  {p.tab}
                  {isActive && (
                    <motion.span
                      layoutId="tab-indicator"
                      style={{ backgroundColor: cc.accent }}
                      className="absolute bottom-[-1px] left-0 right-0 h-0.5 z-10"
                      transition={{ duration: DURATION.base, ease: EASE.inOut }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* Project panel */}
          <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: reduce ? 0 : 6  }}
            animate={{ opacity: 1, y: 0 }}
            exit={{    opacity: 0, y: reduce ? 0 : -4 }}
            transition={{ duration: DURATION.base, ease: EASE.inOut }}
            className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10"
            role="tabpanel"
          >

            {/* Left: Details */}
            <div>
              {/* Header */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tags.map(tag => (
                    <span
                      key={tag}
                      className={`text-[0.6rem] font-mono tracking-widest uppercase px-2 py-0.5 rounded-full border ${tagColors[tag] ?? 'text-cyan border-[rgba(0,198,255,0.25)] bg-[rgba(0,198,255,0.07)]'}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-sans text-[#f0f0fa] mb-1">
                  {proj.title}
                </h2>
                <p className="text-xs font-mono text-[#5a5a7a] tracking-widest uppercase">
                  {proj.category}
                </p>
              </div>

              {/* Meta */}
              <Motion variant="card" dir={dirFromLocale(locale)} className={`flex gap-8 mb-6 p-4 rounded-xl border ${c.border} ${c.bg}`}>
                <div>
                  <p className="text-[0.6rem] font-mono text-[#6e6e8e] tracking-widest uppercase mb-1">{t('roleLabel')}</p>
                  <p className="text-sm text-[#f0f0fa] font-semibold">{proj.role}</p>
                </div>
                <div>
                  <p className="text-[0.6rem] font-mono text-[#6e6e8e] tracking-widest uppercase mb-1">{t('periodLabel')}</p>
                  <p className="text-sm text-[#f0f0fa] font-mono">{proj.year}</p>
                </div>
              </Motion>

              {/* Summary */}
              <p className="text-[#9898b8] leading-relaxed mb-8 text-[0.925rem]">
                {proj.summary}
              </p>

              {/* Outcomes */}
              <div className="mb-8">
                <p className="text-xs font-mono text-[#5a5a7a] tracking-widest uppercase mb-4">{t('outcomesLabel')}</p>
                <ul className="flex flex-col gap-3">
                  {proj.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-3 text-[0.875rem] text-[#9898b8]">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${c.dot}`} aria-hidden="true" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Architecture diagram */}
            <div>
              <p className="text-xs font-mono text-[#5a5a7a] tracking-widest uppercase mb-4">{t('archLabel')}</p>
              <ProjectDiagram
                svgContent={proj.svgContent}
                svgViewBox={proj.svgViewBox}
                diagramTitle={proj.diagramTitle}
                borderClass={c.border}
                bgClass={c.bg}
                glowClass={c.glow}
              />
            </div>
          </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ═══ CTA ════════════════════════════════════════════════ */}
      <section className="py-24 px-6 border-t border-[rgba(255,255,255,0.05)]" aria-label="Book consultation">
        <div className="max-w-[700px] mx-auto text-center">
          <p className="text-xs font-mono text-cyan tracking-[0.2em] uppercase mb-4">{t('ctaTag')}</p>
          <h2 className="text-3xl font-bold font-sans text-[#f0f0fa] mb-4">{t('ctaTitle')}</h2>
          <p className="text-[#c0c0d8] max-w-md mx-auto mb-10">{t('ctaSub')}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <BookButton size="xl" />
            <CTAButton href="mailto:hello@djobs.net" variant="ghost" size="xl" external>
              {t('emailBtn')}
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  </PageMotion>
  )
}
