export type DocConfig = {
  slug: string
  title: string
}

export const DOCS: DocConfig[] = [
  {
    slug: 'bitcoin-paycheck-plan-campaign',
    title: 'Bitcoin Paycheck Plan — 60-Day Launch Campaign',
  },
  {
    slug: 'bitcoin-workshop-client',
    title: 'Bitcoin Wealth Workshop — Client Presentation',
  },
  {
    slug: 'bitcoin-workshop-playbook',
    title: 'Bitcoin Wealth Workshop — Playbook (Private)',
  },
  {
    slug: 'dubai-workshop-runway',
    title: 'Six-Week Runway — Dubai Workshop & Cambodia Base (Private)',
  },
]

export function findDoc(slug: string): DocConfig | undefined {
  return DOCS.find((d) => d.slug === slug)
}
