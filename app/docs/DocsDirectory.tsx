'use client'

import Link from 'next/link'
import { type DocConfig } from '@/content/docs-config'

type DocWithToken = DocConfig & { token: string }

const DOC_TAGS: Record<string, { label: string }> = {
  'bitcoin-paycheck-plan-campaign': { label: 'Campaign' },
  'dubai-workshop-runway': { label: 'Q4 2026 Plan' },
}

export function DocsDirectory({ docs }: { docs: DocWithToken[] }) {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#050510',
        fontFamily: '-apple-system, "Segoe UI", system-ui, sans-serif',
        color: '#eceef8',
      }}
    >
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'radial-gradient(circle, rgba(247,147,26,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* HERO */}
        <section
          style={{
            padding: '80px 24px 48px',
            textAlign: 'center',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <p
            style={{
              fontSize: '0.65rem',
              fontFamily: 'monospace',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#f7931a',
              marginBottom: '16px',
            }}
          >
            Private · Admin Access
          </p>
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              marginBottom: '16px',
            }}
          >
            Documents
          </h1>
          <p
            style={{
              fontSize: '1rem',
              color: '#7070a0',
              maxWidth: '480px',
              margin: '0 auto',
              lineHeight: 1.65,
            }}
          >
            Campaign briefs, proposals, and internal plans. Not indexed.
            Share individual doc links with authorized recipients only.
          </p>
        </section>

        {/* LIST */}
        <section style={{ padding: '48px 24px 80px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <p
              style={{
                fontSize: '0.65rem',
                fontFamily: 'monospace',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#3a3a60',
                marginBottom: '24px',
              }}
            >
              {docs.length} document{docs.length !== 1 ? 's' : ''}
            </p>

            <style>{`
              .doc-card {
                display: flex;
                align-items: center;
                gap: 16px;
                background: #0f0f28;
                border: 1px solid rgba(255,255,255,0.07);
                border-radius: 14px;
                padding: 18px 20px;
                text-decoration: none;
                color: inherit;
                transition: border-color 0.15s, transform 0.15s;
              }
              .doc-card:hover {
                border-color: rgba(247,147,26,0.35);
                transform: translateY(-1px);
              }
              .doc-title {
                font-size: 0.95rem;
                font-weight: 700;
                color: #eceef8;
                line-height: 1.3;
                margin: 0;
                overflow-wrap: anywhere;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
              }
              .doc-meta {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                gap: 4px;
                flex-shrink: 0;
              }
              @media (max-width: 640px) {
                .doc-card { flex-wrap: wrap; row-gap: 12px; padding: 18px 18px; }
                .doc-title { -webkit-line-clamp: 3; }
                .doc-meta {
                  flex-basis: 100%;
                  flex-direction: row;
                  justify-content: space-between;
                  align-items: center;
                  padding-top: 10px;
                  border-top: 1px solid rgba(255,255,255,0.06);
                }
                .doc-slug { overflow-wrap: anywhere; }
              }
            `}</style>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {docs.map((doc) => {
                const tag = DOC_TAGS[doc.slug]
                return (
                  <Link key={doc.slug} href={`/docs/${doc.slug}/view?t=${doc.token}`} className="doc-card">
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        background: 'rgba(247,147,26,0.1)',
                        border: '1px solid rgba(247,147,26,0.25)',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '18px',
                        flexShrink: 0,
                      }}
                    >
                      ₿
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      {tag && (
                        <span
                          style={{
                            display: 'inline-block',
                            fontSize: '0.6rem',
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            padding: '2px 10px',
                            borderRadius: '100px',
                            border: '1px solid rgba(247,147,26,0.3)',
                            background: 'rgba(247,147,26,0.08)',
                            color: '#f7931a',
                            marginBottom: '6px',
                          }}
                        >
                          {tag.label}
                        </span>
                      )}
                      <h2 className="doc-title">{doc.title}</h2>
                    </div>

                    <div className="doc-meta">
                      <span className="doc-slug" style={{ fontSize: '0.65rem', fontFamily: 'monospace', color: '#3a3a60' }}>
                        /docs/{doc.slug}
                      </span>
                      <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: '#f7931a' }}>
                        Open →
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
