import { DOCS } from '@/content/docs-config'
import { verifyAdminToken, adminDocToken } from '@/lib/docs-auth'
import { AdminPasswordForm } from './AdminPasswordForm'
import { DocsDirectory } from './DocsDirectory'

export const metadata = {
  robots: { index: false, follow: false },
}

export default async function DocsIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ t?: string; error?: string }>
}) {
  const { t, error } = await searchParams

  if (t && verifyAdminToken(t)) {
    const docsWithTokens = DOCS.map(doc => ({
      ...doc,
      token: adminDocToken(doc.slug) ?? '',
    }))
    return <DocsDirectory docs={docsWithTokens} />
  }

  return <AdminPasswordForm hasError={error === '1'} />
}
