import Reveal from './Reveal'

const channels = [
  {
    label: 'Email',
    value: 'contato@nexusops.com.br',
    href: 'mailto:contato@nexusops.com.br',
  },
  {
    label: 'GitHub',
    value: '@Tonny-Francis',
    href: 'https://github.com/Tonny-Francis',
  },
  {
    label: 'LinkedIn',
    value: 'tonny-francis',
    href: 'https://www.linkedin.com/in/tonny-francis/',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex items-baseline gap-4 mb-16">
            <span className="section-label">04 / Contact</span>
            <span className="flex-1 h-px bg-border" />
          </div>
        </Reveal>

        <Reveal>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-12 max-w-4xl">
            Have a project in mind? Let&apos;s talk.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <a
            href="mailto:contato@nexusops.com.br"
            className="inline-flex items-center gap-3 font-mono text-sm uppercase tracking-[0.2em] text-fg border-b border-fg pb-2 hover:text-fg-muted hover:border-fg-muted transition-colors"
          >
            <span>contato@nexusops.com.br</span>
            <span aria-hidden>→</span>
          </a>
        </Reveal>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-px bg-border-subtle">
          {channels.map((channel, i) => (
            <Reveal key={channel.label} delay={i * 80}>
              <a
                href={channel.href}
                target={channel.href.startsWith('http') ? '_blank' : undefined}
                rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-bg hover:bg-bg-elevated transition-colors p-8 flex flex-col gap-3 group h-full"
              >
                <span className="section-label">{channel.label}</span>
                <span className="text-lg text-fg group-hover:text-fg-muted transition-colors break-all font-mono">
                  {channel.value}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
