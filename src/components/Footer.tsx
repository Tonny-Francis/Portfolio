import Link from 'next/link'

const links = [
  { label: 'Blog', href: '/blog', external: false },
  { label: 'GitHub', href: 'https://github.com/Tonny-Francis', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tonny-francis/', external: true },
  { label: 'Email', href: 'mailto:contato@nexusops.com.br', external: false },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border-subtle px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle">
          © {currentYear} Tonny Sousa
        </div>

        <div className="flex flex-wrap gap-6 font-mono text-xs uppercase tracking-[0.15em]">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg-muted hover:text-fg transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-fg-muted hover:text-fg transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle">
          Rio de Janeiro / BR
        </div>
      </div>
    </footer>
  )
}
