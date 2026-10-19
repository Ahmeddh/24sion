import Link from 'next/link'
import { CTAButton } from '@/components/ui/CTAButton'

export default function NotFound() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center text-center px-6">
      <p className="text-xs font-mono text-cyan tracking-[0.2em] uppercase mb-4">404</p>
      <h1 className="text-4xl font-bold font-sans text-[#f0f0fa] mb-4">Page Not Found</h1>
      <p className="text-[#9898b8] max-w-md mb-10">
        This page doesn't exist or has been moved. Head back to the homepage or explore the site.
      </p>
      <div className="flex gap-3">
        <CTAButton href="/" variant="primary" size="lg">Back to Home</CTAButton>
        <CTAButton href="/services" variant="ghost" size="lg">View Services</CTAButton>
      </div>
    </section>
  )
}
