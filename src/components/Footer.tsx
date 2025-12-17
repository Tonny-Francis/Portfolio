'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-8 px-6 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600">
            © {currentYear} Tonny Sousa. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a 
              href="https://github.com/Tonny-Francis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/tonny-francis/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:tonnyfrancis161@poli.ufrj.br"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          Built with Next.js, React, TypeScript & Tailwind CSS
        </div>
      </div>
    </footer>
  )
}
