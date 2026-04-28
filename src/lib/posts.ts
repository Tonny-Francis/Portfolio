import fs from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeStringify from 'rehype-stringify'

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts')

export interface PostMeta {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
}

export interface Post extends PostMeta {
  html: string
}

async function readPostFile(slug: string) {
  const filePath = path.join(POSTS_DIR, `${slug}.md`)
  const raw = await fs.readFile(filePath, 'utf8')
  const { data, content } = matter(raw)
  return { data, content }
}

function toMeta(slug: string, data: Record<string, unknown>): PostMeta {
  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ''),
    description: String(data.description ?? ''),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
  }
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const entries = await fs.readdir(POSTS_DIR).catch(() => [] as string[])
  const posts = await Promise.all(
    entries
      .filter((file) => file.endsWith('.md'))
      .map(async (file) => {
        const slug = file.replace(/\.md$/, '')
        const { data } = await readPostFile(slug)
        return toMeta(slug, data)
      })
  )
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPost(slug: string): Promise<Post | null> {
  const { data, content } = await readPostFile(slug).catch(() => ({ data: null, content: '' }))
  if (!data) return null

  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: 'github-dark-dimmed',
      keepBackground: true,
    })
    .use(rehypeStringify)
    .process(content)

  return {
    ...toMeta(slug, data),
    html: String(file),
  }
}

export async function getPostSlugs(): Promise<string[]> {
  const entries = await fs.readdir(POSTS_DIR).catch(() => [] as string[])
  return entries.filter((f) => f.endsWith('.md')).map((f) => f.replace(/\.md$/, ''))
}
