'use client'

export function AdminPasswordForm({ hasError }: { hasError: boolean }) {
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
        position: 'fixed',
        inset: 0,
        background: 'radial-gradient(circle, rgba(247,147,26,0.04) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative',
        background: '#0a0a1e',
        border: '1px solid rgba(247,147,26,0.2)',
        borderRadius: '16px',
        padding: '40px 44px',
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0 0 60px rgba(247,147,26,0.06)',
      }}>
        <div style={{
          width: '44px', height: '44px',
          background: 'rgba(247,147,26,0.1)',
          border: '1px solid rgba(247,147,26,0.28)',
          borderRadius: '12px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '20px', marginBottom: '22px',
        }}>🔒</div>

        <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#f7931a', marginBottom: '6px' }}>
          Admin Access
        </div>
        <h1 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#eceef8', lineHeight: 1.3, marginBottom: '28px', letterSpacing: '-0.01em' }}>
          Document Directory
        </h1>

        <form method="POST" action="/docs/api/auth">
          <input type="hidden" name="type" value="admin" />

          <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#7070a0', marginBottom: '8px' }}>
            Admin Password
          </label>
          <input
            type="password"
            name="password"
            autoFocus
            autoComplete="current-password"
            placeholder="Enter admin password"
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

          {hasError && <p style={{ fontSize: '12px', color: '#ff6060', marginBottom: '16px', marginTop: '4px' }}>Incorrect password.</p>}
          {!hasError && <div style={{ marginBottom: '16px' }} />}

          <button type="submit" style={{
            width: '100%', background: '#f7931a', border: 'none', borderRadius: '10px',
            padding: '13px', fontSize: '14px', fontWeight: 700, color: '#050510',
            cursor: 'pointer', fontFamily: 'inherit',
          }}>
            Access Directory
          </button>
        </form>

        <p style={{ fontSize: '11px', color: '#2a2a48', marginTop: '24px', textAlign: 'center' }}>
          djobs.net · Not indexed
        </p>
      </div>
    </div>
  )
}
