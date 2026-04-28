import Reveal from './Reveal'

interface Project {
  name: string
  year: string
  description: string
  techStack: string[]
  githubUrl?: string
  demoUrl?: string
  gradient: string
}

const projects: Project[] = [
  {
    name: 'Aivory AI',
    year: '2025',
    description:
      'AI-powered platform delivering ML-driven solutions for real businesses. Designed the product surface from blank canvas.',
    techStack: ['Next.js', 'TypeScript', 'AI/ML'],
    demoUrl: 'https://aivory.com.br',
    gradient:
      'radial-gradient(circle at 30% 20%, rgba(168,85,247,0.4), transparent 60%), radial-gradient(circle at 80% 70%, rgba(56,189,248,0.35), transparent 55%), #0a0a0a',
  },
  {
    name: 'Terminal Portfolio',
    year: '2024',
    description:
      'A command-line styled portfolio. Type, navigate, explore — every page is a directory, every project a file.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind'],
    githubUrl: 'https://github.com/Tonny-Francis',
    gradient:
      'radial-gradient(circle at 50% 50%, rgba(74,222,128,0.18), transparent 55%), linear-gradient(135deg, #0a0a0a, #0f1a0f)',
  },
]

export default function Projects() {
  return (
    <section id="work" className="py-32 px-6 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex items-baseline gap-4 mb-16">
            <span className="section-label">02 / Selected Work</span>
            <span className="flex-1 h-px bg-border" />
          </div>
        </Reveal>

        <Reveal>
          <h2 className="section-title mb-20 max-w-3xl">
            Selected projects.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => {
            const PrimaryLink = project.demoUrl ?? project.githubUrl
            return (
              <Reveal key={project.name} delay={i * 100}>
                <a
                  href={PrimaryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div
                    className="aspect-[4/3] rounded-lg border border-border overflow-hidden relative transition-all duration-500 group-hover:border-fg-muted"
                    style={{ backgroundImage: project.gradient }}
                  >
                    <div className="absolute inset-0 grid-noise opacity-30" />
                    <div className="absolute inset-0 p-7 flex flex-col justify-between">
                      <div className="flex items-start justify-between font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">
                        <span>[{project.year}]</span>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                          {project.demoUrl ? '↗ Live' : '↗ GitHub'}
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-fg leading-tight tracking-tight">
                        {project.name}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-5 flex items-start justify-between gap-6">
                    <p className="text-fg-muted leading-relaxed flex-1 max-w-md">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 justify-end max-w-[40%]">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] uppercase tracking-[0.15em] text-fg-subtle border border-border px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
