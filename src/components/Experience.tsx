import Reveal from './Reveal'

interface ExperienceItem {
  company: string
  role: string
  period: string
  description?: string
  url?: string
}

const experiences: ExperienceItem[] = [
  {
    company: 'Nexus Ops Tecnologia',
    role: 'Founder',
    period: '2026 — Present',
    description:
      'My full-stack services company. Run my own projects and deliver custom solutions for clients — from product to infra.',
    url: 'https://nexusops.com.br',
  },
  {
    company: 'B.Safe Solutions',
    role: 'DevOps Engineer / Infrastructure Consultant — Freelance',
    period: 'Mar — Apr 2026',
    description:
      'Designed and shipped a production K3s cluster on Hetzner Cloud with full CI/CD, monitoring, logging, and deployment automation.',
  },
  {
    company: 'Convem',
    role: 'Full-Stack Developer',
    period: '2022 — Present',
    description:
      'Building robust full-stack solutions with modern stacks. Long-term focus on reliability and product velocity.',
  },
  {
    company: 'Regulatório Mais',
    role: 'Full-Stack Developer',
    period: '2024 — Present',
    description:
      'Regulatory compliance platforms with focus on scalability and performance.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex items-baseline gap-4 mb-16">
            <span className="section-label">03 / Experience</span>
            <span className="flex-1 h-px bg-border" />
          </div>
        </Reveal>

        <Reveal>
          <h2 className="section-title mb-20 max-w-3xl">
            Experience.
          </h2>
        </Reveal>

        <div className="space-y-px bg-border-subtle">
          {experiences.map((exp, i) => (
            <Reveal key={`${exp.company}-${exp.period}`} delay={i * 80}>
              <div className="bg-bg group hover:bg-bg-elevated transition-colors py-8">
                <div className="grid grid-cols-12 gap-6 items-baseline">
                  <span className="col-span-12 md:col-span-2 font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle">
                    {exp.period}
                  </span>
                  <div className="col-span-12 md:col-span-7">
                    {exp.url ? (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl md:text-3xl font-bold text-fg group-hover:text-fg-muted transition-colors tracking-tight"
                      >
                        {exp.company} ↗
                      </a>
                    ) : (
                      <h3 className="text-2xl md:text-3xl font-bold text-fg tracking-tight">
                        {exp.company}
                      </h3>
                    )}
                    <p className="text-fg-muted mt-2 font-mono text-sm">{exp.role}</p>
                    {exp.description && (
                      <p className="text-fg-subtle mt-3 leading-relaxed max-w-xl">
                        {exp.description}
                      </p>
                    )}
                  </div>
                  <span className="hidden md:flex col-span-3 justify-end font-mono text-xs text-fg-subtle opacity-0 group-hover:opacity-100 transition-opacity">
                    {exp.url ? '↗' : '·'}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20 pt-12 border-t border-border">
            <span className="section-label">Education</span>
            <p className="mt-5 text-xl text-fg font-bold tracking-tight">
              <span>Software Development Analysis</span>
              <span className="text-fg-muted font-normal font-mono text-sm ml-3">— IBMR</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
