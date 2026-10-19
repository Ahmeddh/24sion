import { notFound, redirect } from 'next/navigation'
import { findDoc } from '@/content/docs-config'
import { verifyDocToken } from '@/lib/docs-auth'
import { DocPasswordForm } from './DocPasswordForm'

export const metadata = {
  robots: { index: false, follow: false },
}

export default async function DocPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ t?: string; error?: string }>
}) {
  const { slug }    = await params
  const { t, error } = await searchParams

  const doc = findDoc(slug)
  if (!doc) notFound()

  if (t && verifyDocToken(t, slug)) {
    redirect(`/docs/${slug}/view?t=${t}`)
  }

  return <DocPasswordForm slug={slug} title={doc.title} hasError={error === '1'} />
}
