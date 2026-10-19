import { ImageResponse } from 'next/og'

export const runtime     = 'edge'
export const alt         = 'Ahmed Djobs: Cybersecurity & Blockchain Consultant'
export const size        = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#080810',
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        }}
      >
        {/* ── Grid pattern ── */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage:
            'linear-gradient(rgba(0,198,255,0.05) 1px, transparent 1px),' +
            'linear-gradient(90deg, rgba(0,198,255,0.05) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }} />

        {/* ── Gradient overlays ── */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'radial-gradient(ellipse 80% 60% at 0% 0%, rgba(0,198,255,0.12) 0%, transparent 60%)',
        }} />
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'radial-gradient(ellipse 60% 60% at 100% 100%, rgba(123,97,255,0.14) 0%, transparent 60%)',
        }} />
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(to bottom, transparent 40%, rgba(8,8,16,0.7) 100%)',
        }} />

        {/* ── Right-side decorative node diagram ── */}
        <div style={{
          position: 'absolute', right: 80, top: 180,
          display: 'flex', flexDirection: 'column', gap: 0,
          opacity: 0.35,
        }}>
          {/* Row 1 */}
          <div style={{ display: 'flex', gap: 0 }}>
            {[['#00c6ff', 'rgba(0,198,255,0.06)'], ['#7b61ff', 'rgba(123,97,255,0.06)'], ['#00c6ff', 'rgba(0,198,255,0.06)']].map(([color, bg], col) => (
              <div key={col} style={{ width: 56, height: 56, margin: 6, borderRadius: 12, border: `1.5px solid ${color}`, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 8, height: 8, borderRadius: 4, background: color, opacity: 0.6 }} />
              </div>
            ))}
          </div>
          {/* Row 2 */}
          <div style={{ display: 'flex', gap: 0 }}>
            {[['#7b61ff', 'rgba(123,97,255,0.06)'], ['#00c6ff', 'rgba(0,198,255,0.06)'], ['#7b61ff', 'rgba(123,97,255,0.06)']].map(([color, bg], col) => (
              <div key={col} style={{ width: 56, height: 56, margin: 6, borderRadius: 12, border: `1.5px solid ${color}`, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 8, height: 8, borderRadius: 4, background: color, opacity: 0.6 }} />
              </div>
            ))}
          </div>
          {/* Row 3 */}
          <div style={{ display: 'flex', gap: 0 }}>
            {[['#00c6ff', 'rgba(0,198,255,0.06)'], ['#7b61ff', 'rgba(123,97,255,0.06)'], ['#00c6ff', 'rgba(0,198,255,0.06)']].map(([color, bg], col) => (
              <div key={col} style={{ width: 56, height: 56, margin: 6, borderRadius: 12, border: `1.5px solid ${color}`, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 8, height: 8, borderRadius: 4, background: color, opacity: 0.6 }} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Main content ── */}
        <div style={{
          position: 'relative', zIndex: 10,
          display: 'flex', flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          width: '100%',
        }}>

          {/* Top: Logo + name */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              <div style={{ display: 'flex', gap: 5 }}>
                <div style={{ width: 14, height: 14, borderRadius: 4, border: '2px solid #00c6ff' }} />
                <div style={{ width: 14, height: 14, borderRadius: 4, border: '2px solid #7b61ff' }} />
              </div>
              <div style={{ display: 'flex', gap: 5 }}>
                <div style={{ width: 14, height: 14, borderRadius: 4, border: '2px solid #7b61ff' }} />
                <div style={{ width: 14, height: 14, borderRadius: 4, border: '2px solid #00c6ff' }} />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span style={{ fontSize: 20, fontWeight: 700, color: '#f0f0fa', letterSpacing: '-0.02em' }}>
                Ahmed Djobs
              </span>
              <span style={{ fontSize: 12, color: '#5a5a7a', fontFamily: 'monospace' }}>
                djobs.net
              </span>
            </div>
          </div>

          {/* Middle: Headline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 680 }}>
            {/* Category badge */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: 'rgba(0,198,255,0.08)',
              border: '1px solid rgba(0,198,255,0.25)',
              borderRadius: 100,
              padding: '6px 16px',
              width: 320,
            }}>
              <div style={{ width: 6, height: 6, borderRadius: 3, background: '#00c6ff' }} />
              <span style={{ fontSize: 12, color: '#00c6ff', fontFamily: 'monospace', letterSpacing: '0.12em' }}>
                DIGITAL CONSULTANT · DIGITAL NOMAD
              </span>
            </div>

            {/* Main headline */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div style={{ display: 'flex', fontSize: 60, fontWeight: 800, lineHeight: 1.06, letterSpacing: '-0.03em', color: '#f0f0fa', margin: 0 }}>
                Cybersecurity &amp;&nbsp;
                <span style={{
                  background: 'linear-gradient(135deg, #00c6ff 0%, #7b61ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  Blockchain
                </span>
              </div>
              <div style={{ fontSize: 60, fontWeight: 800, lineHeight: 1.06, letterSpacing: '-0.03em', color: '#f0f0fa', margin: 0 }}>
                Consultant
              </div>
            </div>

            {/* Tagline */}
            <div style={{ fontSize: 19, color: '#9898b8', lineHeight: 1.5, maxWidth: 560, margin: 0 }}>
              Helping enterprises and startups build secure, scalable digital systems
              with security built in from day one.
            </div>
          </div>

          {/* Bottom: Service chips (fixed row, no wrap) */}
          <div style={{ display: 'flex', gap: 10 }}>
            {[
              { label: 'Cybersecurity',         color: 'rgba(0,198,255,0.12)',   border: 'rgba(0,198,255,0.3)'   },
              { label: 'Blockchain Strategy',    color: 'rgba(123,97,255,0.12)', border: 'rgba(123,97,255,0.3)' },
              { label: 'Web & Mobile PM',        color: 'rgba(0,255,170,0.08)',  border: 'rgba(0,255,170,0.25)' },
              { label: 'Digital Transformation', color: 'rgba(255,179,64,0.08)', border: 'rgba(255,179,64,0.25)' },
            ].map(chip => (
              <div key={chip.label} style={{
                background: chip.color,
                border: `1px solid ${chip.border}`,
                borderRadius: 100,
                padding: '7px 18px',
                fontSize: 13,
                color: '#f0f0fa',
                fontFamily: 'monospace',
              }}>
                {chip.label}
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom accent line ── */}
        <div style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: 3,
          background: 'linear-gradient(90deg, #00c6ff 0%, #7b61ff 50%, #00ffaa 100%)',
        }} />
      </div>
    ),
    { ...size },
  )
}
