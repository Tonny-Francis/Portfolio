import Reveal from './Reveal'

const meta = [
  { label: 'Role', value: 'Full-stack developer' },
  { label: 'Focus', value: 'Web · DevOps · Cloud' },
  { label: 'Based in', value: 'Rio de Janeiro, BR' },
  { label: 'Status', value: 'Open to work' },
]

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center px-6 pt-32 pb-24 overflow-hidden"
    >
      <div className="absolute inset-0 grid-noise opacity-30 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full">
        <Reveal>
          <div className="flex items-center gap-3 mb-12 font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span>Available for new work — Q2 2026</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="text-6xl md:text-8xl font-bold text-fg leading-[1.02] tracking-tight">
            Tonny Sousa.
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-8 text-xl md:text-2xl text-fg-muted leading-relaxed max-w-2xl">
            Full-stack developer building products at the intersection of design and
            infrastructure — shipping for clients across Brazil while studying Software
            Development Analysis at IBMR.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <dl className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 max-w-3xl">
            {meta.map((item) => (
              <div key={item.label} className="flex flex-col gap-1.5">
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-subtle">
                  {item.label}
                </dt>
                <dd className="text-fg text-sm">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-16 flex flex-wrap gap-4">
            <a
              href="#work"
              className="px-5 py-3 bg-fg text-bg font-mono text-xs uppercase tracking-[0.15em] hover:bg-fg-muted transition-colors"
            >
              View work →
            </a>
            <a
              href="#contact"
              className="px-5 py-3 border border-border text-fg font-mono text-xs uppercase tracking-[0.15em] hover:border-fg-muted transition-colors"
            >
              Get in touch
            </a>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-fg-subtle">
        Scroll
      </div>
    </section>
  )
}
