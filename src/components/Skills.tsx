import Reveal from './Reveal'

interface Skill {
  category: string
  items: string[]
}

const skills: Skill[] = [
  { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Go', 'Python'] },
  { category: 'Frameworks', items: ['React', 'Next.js', 'Angular', 'Express'] },
  { category: 'Tools', items: ['Git', 'Docker', 'Kubernetes', 'Grafana', 'Rancher', 'Figma'] },
  { category: 'Databases', items: ['MySQL', 'PostgreSQL', 'DynamoDB', 'SQLite'] },
  { category: 'Clouds', items: ['AWS', 'Oracle Cloud', 'Hetzner'] },
]

const allSkills = skills.flatMap((s) => s.items)

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex items-baseline gap-4 mb-16">
            <span className="section-label">01 / Skills</span>
            <span className="flex-1 h-px bg-border" />
          </div>
        </Reveal>

        <Reveal>
          <h2 className="section-title mb-20 max-w-3xl">
            A toolkit shaped by shipping, not by trends.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14 mb-20">
          {skills.map((skill, i) => (
            <Reveal key={skill.category} delay={i * 80}>
              <div>
                <h3 className="section-label mb-5">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-lg text-fg">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="marquee-mask overflow-hidden">
          <div className="flex gap-12 animate-marquee whitespace-nowrap font-mono text-sm text-fg-subtle uppercase tracking-[0.2em]">
            {[...allSkills, ...allSkills].map((item, i) => (
              <span key={`${item}-${i}`} className="flex items-center gap-12">
                {item}
                <span className="text-border">/</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
