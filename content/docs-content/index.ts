import { bitcoinCampaignHtml } from './bitcoin-campaign'
import { workshopClientHtml } from './workshop-client'
import { workshopPlaybookHtml } from './workshop-playbook'
import { dubaiWorkshopRunwayHtml } from './dubai-workshop-runway'

const DOC_HTML: Record<string, string> = {
  'bitcoin-paycheck-plan-campaign': bitcoinCampaignHtml,
  'bitcoin-workshop-client': workshopClientHtml,
  'bitcoin-workshop-playbook': workshopPlaybookHtml,
  'dubai-workshop-runway': dubaiWorkshopRunwayHtml,
}

export function getDocHtml(slug: string): string | null {
  return DOC_HTML[slug] ?? null
}
