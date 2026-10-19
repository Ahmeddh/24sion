'use client'

export function DocPasswordForm({ slug, title, hasError }: { slug: string; title: string; hasError: boolean }) {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#050510',
      fontFamily: '-apple-system, "Segoe UI", system-ui, sans-serif',
      padding: '24px',
    }}>
      <div style={{
        position: 'fixed', inset: 0,
        background: 'radial-gradient(circle, rgba(247,147,26,0.04) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative',
        background: '#0a0a1e',
        border: '1px solid rgba(247,147,26,0.25)',
        borderRadius: '16px',
        padding: '40px 44px',
        width: '100%',
        maxWidth: '420px',
        boxShadow: '0 0 60px rgba(247,147,26,0.07)',
      }}>
        <div style={{
          width: '44px', height: '44px',
          background: 'rgba(247,147,26,0.12)',
          border: '1px solid rgba(247,147,26,0.3)',
          borderRadius: '12px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '22px', marginBottom: '22px',
        }}>₿</div>

        <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#f7931a', marginBottom: '8px' }}>
          Protected Document
        </div>
        <h1 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#eceef8', lineHeight: 1.3, marginBottom: '28px', letterSpacing: '-0.01em' }}>
          {title}
        </h1>

        <form method="POST" action="/docs/api/auth">
          <input type="hidden" name="type"  value="doc" />
          <input type="hidden" name="slug"  value={slug} />

          <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#7070a0', marginBottom: '8px' }}>
            Access Password
          </label>
          <input
            type="password"
            name="password"
            autoFocus
            autoComplete="current-password"
            placeholder="Enter password"
            required
            style={{
              width: '100%',
              background: '#0f0f28',
              border: `1px solid ${hasError ? 'rgba(255,96,96,0.5)' : 'rgba(255,255,255,0.1)'}`,
              borderRadius: '10px',
              padding: '12px 14px',
              fontSize: '15px',
              color: '#eceef8',
              outline: 'none',
              boxSizing: 'border-box' as const,
              fontFamily: 'inherit',
              marginBottom: '8px',
            }}
          />

          {hasError && <p style={{ fontSize: '12px', color: '#ff6060', marginBottom: '16px', marginTop: '4px' }}>Incorrect password. Try again.</p>}
          {!hasError && <div style={{ marginBottom: '16px' }} />}

          <button type="submit" style={{
            width: '100%', background: '#f7931a', border: 'none', borderRadius: '10px',
            padding: '13px', fontSize: '14px', fontWeight: 700, color: '#050510',
            cursor: 'pointer', fontFamily: 'inherit', letterSpacing: '0.01em',
          }}>
            Unlock Document
          </button>
        </form>

        <p style={{ fontSize: '11px', color: '#3a3a60', marginTop: '24px', textAlign: 'center', lineHeight: 1.5 }}>
          djobs.net · Private document · Not indexed
        </p>
      </div>
    </div>
  )
}
