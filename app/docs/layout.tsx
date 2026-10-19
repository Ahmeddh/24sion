import type { Metadata } from 'next'
import '../../app/globals.css'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body style={{ margin: 0, background: '#050510', color: '#eceef8' }}>
        {children}
      </body>
    </html>
  )
}
