import Link from 'next/link'
import type { Metadata } from 'next'
import Footer from '@/src/components/Footer'
import { getAllPosts } from '@/src/lib/posts'

export const metadata: Metadata = {
  title: 'Blog | Tonny Sousa',
  description: 'Anotações, aprendizados e decisões técnicas.',
}

function formatDate(date: string) {
  if (!date) return ''
  return new Date(date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

export default async function BlogIndexPage() {
  const posts = await getAllPosts()

  return (
    <main className="min-h-screen flex flex-col bg-bg">
      <section className="flex-1 px-6 pt-32 pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-baseline gap-4 mb-12">
            <span className="section-label">~/blog</span>
            <span className="flex-1 h-px bg-border" />
          </div>

          <header className="mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-fg leading-[1.05] tracking-tight mb-6">
              Notes & writing.
            </h1>
            <p className="text-lg text-fg-muted max-w-xl leading-relaxed">
              Anotações sobre o que aprendo enquanto construo coisas. Sem cronograma,
              sem newsletter, sem promessa.
            </p>
          </header>

          {posts.length === 0 ? (
            <p className="text-fg-subtle font-mono text-sm">{'// no posts yet'}</p>
          ) : (
            <ul className="space-y-px bg-border-subtle">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block bg-bg hover:bg-bg-elevated transition-colors py-8 px-1"
                  >
                    <div className="grid grid-cols-12 gap-6 items-baseline">
                      <time className="col-span-12 md:col-span-3 font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle">
                        {formatDate(post.date)}
                      </time>
                      <div className="col-span-12 md:col-span-9">
                        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-fg group-hover:text-fg-muted transition-colors">
                          {post.title}
                        </h2>
                        {post.description && (
                          <p className="text-fg-muted mt-2 leading-relaxed">
                            {post.description}
                          </p>
                        )}
                        {post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mt-4">
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
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      <Footer />
    </main>
  )
}
