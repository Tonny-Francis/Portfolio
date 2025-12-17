'use client'

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Tonny Sousa
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
          Full-Stack Developer
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            I am currently pursuing a degree in Software Development Analysis at IBMR, driven by a passion for solving complex problems through technology. 
        </p>
        <div className="mt-12 flex gap-4 justify-center">
          <a 
            href="#contact" 
            className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Get in Touch
          </a>
          <a 
            href="#projects" 
            className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  )
}
