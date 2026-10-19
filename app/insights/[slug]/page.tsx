import { notFound }  from 'next/navigation'
import Link           from 'next/link'
import { buildMeta, articleSchema } from '@/lib/seo'
import { BookButton } from '@/components/ui/CTAButton'
import { SITE }       from '@/lib/constants'
import { articles }   from '@/content/articles'

/* ── Tag colour map ───────────────────────────────────────── */
const tagColorCls: Record<string, string> = {
  cyan:   'text-cyan   border-[rgba(0,198,255,0.25)]   bg-[rgba(0,198,255,0.08)]',
  purple: 'text-purple border-[rgba(123,97,255,0.25)]  bg-[rgba(123,97,255,0.08)]',
  green:  'text-[#00ffaa] border-[rgba(0,255,170,0.2)] bg-[rgba(0,255,170,0.06)]',
  amber:  'text-[#ffb340] border-[rgba(255,179,64,0.2)] bg-[rgba(255,179,64,0.06)]',
}

/* ── Types ────────────────────────────────────────────────── */
interface Props { params: { slug: string } }

/* ── Metadata ─────────────────────────────────────────────── */
export async function generateMetadata({ params }: Props) {
  const article = articles[params.slug]
  if (!article) return buildMeta({ title: 'Article Not Found', description: '', noindex: true })
  return buildMeta({
    title:       article.title,
    description: article.excerpt,
    path:        `/insights/${params.slug}`,
  })
}

/* ── Static paths ─────────────────────────────────────────── */
export function generateStaticParams() {
  return Object.keys(articles).map(slug => ({ slug }))
}

/* ── Minimal Markdown renderer ────────────────────────────── */
function renderBody(raw: string): React.ReactNode[] {
  const lines    = raw.trim().split('\n')
  const elements: React.ReactNode[] = []
  let i = 0

  const renderInline = (text: string) =>
    text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/`(.+?)`/g, '<code>$1</code>')

  while (i < lines.length) {
    const line = lines[i]
    const trim = line.trim()

    if (!trim) { i++; continue }

    /* headings */
    if (trim.startsWith('## ')) {
      const id = trim.slice(3).toLowerCase().replace(/[^a-z0-9]+/g, '-')
      elements.push(<h2 key={i} id={id}>{trim.slice(3)}</h2>)
      i++; continue
    }
    if (trim.startsWith('### ')) {
      const id = trim.slice(4).toLowerCase().replace(/[^a-z0-9]+/g, '-')
      elements.push(<h3 key={i} id={id}>{trim.slice(4)}</h3>)
      i++; continue
    }

    /* bullet list */
    if (trim.startsWith('- ')) {
      const items: string[] = []
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        items.push(lines[i].trim().slice(2))
        i++
      }
      elements.push(
        <ul key={i}>
          {items.map((it, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: renderInline(it) }} />
          ))}
        </ul>
      )
      continue
    }

    /* numbered list */
    if (/^\d+\. /.test(trim)) {
      const items: string[] = []
      while (i < lines.length && /^\d+\. /.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\. /, ''))
        i++
      }
      elements.push(
        <ol key={i}>
          {items.map((it, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: renderInline(it) }} />
          ))}
        </ol>
      )
      continue
    }

    /* paragraph */
    elements.push(
      <p key={i} dangerouslySetInnerHTML={{ __html: renderInline(trim) }} />
    )
    i++
  }

  return elements
}

/* ── Page ─────────────────────────────────────────────────── */
export default function ArticlePage({ params }: Props) {
  const article = articles[params.slug]
  if (!article) notFound()

  const schema = articleSchema({
    title:     article.title,
    excerpt:   article.excerpt,
    slug:      params.slug,
    date:      article.date,
    category:  article.tag,
  })

  const tc = tagColorCls[article.tagColor] ?? tagColorCls.cyan

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ═══ HEADER ════════════════════════════════════════════ */}
      <section className="py-16 px-6 border-b border-[rgba(255,255,255,0.05)]" aria-label="Article header">
        <div className="max-w-[720px] mx-auto">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-mono text-[#6e6e8e] mb-8" aria-label="Breadcrumb">
            <Link href="/"         className="hover:text-[#9898b8] transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/insights" className="hover:text-[#9898b8] transition-colors">Insights</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#5a5a7a] truncate max-w-[200px]">{article.title}</span>
          </nav>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className={`text-[0.65rem] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border ${tc}`}>
              {article.tag}
            </span>
            <span className="text-[0.68rem] font-mono text-[#6e6e8e]">{article.read} read</span>
            <span className="text-[0.68rem] font-mono text-[#6e6e8e]">·</span>
            <time className="text-[0.68rem] font-mono text-[#6e6e8e]" dateTime={article.date}>
              {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold font-sans text-[#f0f0fa] leading-tight mb-5">
            {article.title}
          </h1>
          <p className="text-lg text-[#9898b8] leading-relaxed">{article.excerpt}</p>

          {/* Author */}
          <div className="flex items-center gap-3 mt-8 pt-8 border-t border-[rgba(255,255,255,0.06)]">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan/30 to-purple/30 border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-xs font-bold text-[#f0f0fa] font-mono">
              AD
            </div>
            <div>
              <p className="text-sm font-semibold text-[#f0f0fa]">Ahmed Djobs</p>
              <p className="text-xs text-[#5a5a7a] font-mono">Digital Consultant · Cybersecurity & Blockchain</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BODY ══════════════════════════════════════════════ */}
      <article className="py-16 px-6" aria-label="Article body">
        <div className="max-w-[720px] mx-auto prose-dark">
          {renderBody(article.body)}
        </div>
      </article>

      {/* ═══ CTA ════════════════════════════════════════════════ */}
      <section className="py-16 px-6 border-t border-[rgba(255,255,255,0.05)]" aria-label="CTA">
        <div className="max-w-[720px] mx-auto">
          <div className="bg-[#0e0e1c] border border-[rgba(0,198,255,0.15)] rounded-2xl p-8 text-center">
            <p className="text-xs font-mono text-cyan tracking-widest uppercase mb-3">Work With Ahmed</p>
            <h2 className="text-xl font-bold font-sans text-[#f0f0fa] mb-3">
              Need expert advisory on this topic?
            </h2>
            <p className="text-[#c0c0d8] text-sm mb-7 max-w-md mx-auto">
              Book a discovery session to discuss how these principles apply to your organization.
            </p>
            <BookButton size="lg" />
          </div>

          <div className="mt-10 pt-8 border-t border-[rgba(255,255,255,0.05)] flex items-center justify-between">
            <Link href="/insights" className="text-sm font-mono text-[#5a5a7a] hover:text-[#f0f0fa] transition-colors">
              ← All Insights
            </Link>
            <Link href="/services" className="text-sm font-mono text-cyan hover:text-[#22d4ff] transition-colors">
              View Services →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
