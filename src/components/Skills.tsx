'use client'

interface Skill {
  category: string
  items: string[]
}

const skills: Skill[] = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Go Lang", "Python"]
  },
  {
    category: "Frameworks",
    items: ["React", "Next.js", "Angular", "Express"]
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Figma", "Kubernetes", "Grafana", "Rancher"]
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "DynamoDB", "SQLite"]
  },
  {
    category: "Clouds",
    items: ["AWS", "Oracle Cloud"]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.category} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span 
                    key={item}
                    className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
