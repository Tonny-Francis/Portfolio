'use client'

interface ExperienceItem {
  company: string
  role: string
  period: string
  description?: string
  url?: string
}

const experiences: ExperienceItem[] = [
  // {
  //   company: "NexusOps",
  //   role: "CEO / Founder",
  //   period: "2025 - Present",
  //   description: "My full-stack services company, where I execute my own projects and deliver solutions for clients.",
  //   url: "https://nexusops.com.br"
  // },
  {
    company: "Convem",
    role: "Full-Stack Developer",
    period: "2022 - Present",
    description: "Developing robust full-stack solutions, working with modern technologies and best practices."
  },
  {
    company: "Regulatório Mais",
    role: "Full-Stack Developer",
    period: "2024 - Present",
    description: "Building regulatory compliance platforms with focus on scalability and performance."
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div 
              key={`${exp.company}-${exp.period}`}
              className="border-l-4 border-gray-900 pl-6 py-2"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                {exp.url ? (
                  <a 
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-semibold text-gray-900 hover:text-gray-600 transition-colors"
                  >
                    {exp.company} →
                  </a>
                ) : (
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {exp.company}
                  </h3>
                )}
                <span className="text-gray-600 text-sm md:text-base">
                  {exp.period}
                </span>
              </div>
              <p className="text-lg text-gray-700 mb-2">
                {exp.role}
              </p>
              {exp.description && (
                <p className="text-gray-600 leading-relaxed">
                  {exp.description}
                </p>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Education
          </h3>
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>Software Development Analysis</strong> - IBMR
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
