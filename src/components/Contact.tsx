'use client'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a 
            href="mailto:tonnyfrancis161@poli.ufrj.br"
            className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
              Email
            </h3>
            <p className="text-gray-600 text-sm break-all">
              tonnyfrancis161@poli.ufrj.br
            </p>
          </a>
          
          <a 
            href="https://github.com/Tonny-Francis"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="text-4xl mb-4">🐙</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
              GitHub
            </h3>
            <p className="text-gray-600 text-sm">
              @Tonny-Francis
            </p>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/tonny-francis/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
              LinkedIn
            </h3>
            <p className="text-gray-600 text-sm">
              tonny-francis
            </p>
          </a>
        </div>
      </div>
    </section>
  )
}
