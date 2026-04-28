import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Footer from '@/src/components/Footer'
import { getPost, getPostSlugs } from '@/src/lib/posts'

interface PageProps {
  readonly params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPost(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | Tonny Sousa`,
    description: post.description,
  }
}

function formatDate(date: string) {
  if (!date) return ''
  return new Date(date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getPost(params.slug)
  if (!post) notFound()

  return (
    <main className="min-h-screen flex flex-col bg-bg">
      <article className="flex-1 px-6 pt-32 pb-24">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle hover:text-fg transition-colors"
          >
            ← cd ~/blog
          </Link>

          <header className="mt-12 mb-16 pb-12 border-b border-border-subtle">
            <time className="font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle">
              {formatDate(post.date)}
            </time>
            <h1 className="text-4xl md:text-5xl font-bold text-fg leading-[1.05] tracking-tight mt-4 mb-6">
              {post.title}
            </h1>
            {post.description && (
              <p className="text-lg text-fg-muted leading-relaxed max-w-2xl">
                {post.description}
              </p>
            )}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] uppercase tracking-[0.15em] text-fg-subtle border border-border px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div
            className="prose prose-invert prose-lg max-w-none prose-headings:tracking-tight prose-headings:font-bold prose-a:text-fg prose-a:underline-offset-4 hover:prose-a:text-fg-muted"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </article>
      <Footer />
    </main>
  )
}
