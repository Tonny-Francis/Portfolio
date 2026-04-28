import Link from 'next/link'

const links = [
  { href: '/#work', label: 'Work' },
  { href: '/#experience', label: 'Experience' },
  { href: '/blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border-subtle bg-bg/70 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm text-fg hover:text-fg-muted transition-colors"
        >
          tonny.sousa
        </Link>
        <div className="flex items-center gap-7 font-mono text-xs uppercase tracking-[0.15em]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-fg-muted hover:text-fg transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
