import { useEffect, useState } from 'react'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('projects')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "NomadNav: Travel Assistant",
      period: "July 2024 - Dec 2024",
      technologies: ["Java Swing/JavaFX", "PostgreSQL", "JDBC", "Bing Maps API"],
      description: "Enhanced a travel assistant with embedded maps and interactive interface. Integrated Bing Maps API for real-time route and travel data. Implemented PostgreSQL with JDBC for user profiles and travel history. Provided personalized recommendations based on preferences, budget, and travel style.",
      features: [
        "Real-time route planning with Bing Maps integration",
        "User profile management with PostgreSQL",
        "Personalized travel recommendations",
        "Interactive JavaFX interface",
        "Travel history tracking"
      ],
      icon: "🗺️",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Multilingual Audio Translation Extension",
      period: "Jan 2025 - May 2025",
      technologies: ["yt-dlp", "PyTorch", "Ngrok", "Meta SeamlessM4T"],
      description: "Expanded a real-time audio translation extension for YouTube and other platforms. Leveraged Meta's SeamlessM4T model components with PyTorch for multilingual support. Employed Ngrok for secure tunneling during development and testing. Improved accessibility and ensured cross-platform compatibility.",
      features: [
        "Real-time audio translation",
        "Multi-language support with SeamlessM4T",
        "YouTube and platform integration",
        "Secure tunneling with Ngrok",
        "Cross-platform compatibility"
      ],
      icon: "🌐",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Health Care Centre Website",
      period: "Sep 2024 - Jan 2025",
      technologies: ["HTML", "CSS", "Bootstrap", "PHP", "MySQL"],
      description: "Designed and enhanced the website with a user-friendly interface. Implemented appointment booking, medical record access, and role-based access control. Maintained responsive design and ensured secure password storage using hashing.",
      features: [
        "Appointment booking system",
        "Medical record management",
        "Role-based access control",
        "Responsive design with Bootstrap",
        "Secure authentication with password hashing"
      ],
      icon: "🏥",
      color: "from-green-500 to-teal-500"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my recent projects that demonstrate my skills in full-stack development, 
              AI integration, and modern web technologies.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className={`project-card bg-white rounded-2xl p-8 shadow-lg ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex`}>
                {/* Project Image/Icon */}
                <div className={`lg:w-1/3 flex items-center justify-center mb-8 lg:mb-0 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                  <div className={`w-32 h-32 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center shadow-xl`}>
                    <span className="text-6xl">{project.icon}</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="lg:w-2/3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 sm:mb-0">{project.title}</h3>
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-gray-100 to-blue-100 text-gray-700 rounded-full text-sm font-semibold">
                      {project.period}
                    </span>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Statistics */}
          <div className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Project Impact</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">3+</h4>
                <p className="text-gray-600">Major Projects</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">15+</h4>
                <p className="text-gray-600">Technologies Used</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Full-Stack</h4>
                <p className="text-gray-600">Development</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">AI/ML</h4>
                <p className="text-gray-600">Integration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
