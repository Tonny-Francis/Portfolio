'use client'

interface Project {
  name: string
  description: string
  techStack: string[]
  githubUrl?: string
  demoUrl?: string
}

const projects: Project[] = [
  {
    name: "Aivory AI",
    description: "AI-powered platform in development, delivering innovative solutions using AI/ML technologies.",
    techStack: ["Next.js", "React", "TypeScript", "AI/ML"],
    demoUrl: "https://aivory.com.br"
  },
  {
    name: "NexusOps",
    description: "Complete development of the company website, focusing on performance and minimalist UX.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://nexusops.com.br"
  },
  {
    name: "Convem",
    description: "Development of solutions for Convem, a company providing scalable products and services for fintechs.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://convem.io/"
  },
  {
    name: "Regulatório Mais",
    description: "Contributed to a regulatory compliance platform for financial institutions, automating reports to regulators.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://regulatoriomais.com.br/"
  },
  {
    name: "Terminal Portfolio",
    description: "Interactive terminal-style portfolio built with Next.js, showcasing projects with a command-line interface.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Tonny-Francis"
  }
]




export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.name}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {project.name}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-gray-600 transition-colors"
                  >
                    GitHub →
                  </a>
                )}
                {project.demoUrl && (
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-gray-600 transition-colors"
                  >
                    Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
