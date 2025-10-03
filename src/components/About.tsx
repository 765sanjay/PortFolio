import { useEffect, useState } from 'react'

const About = () => {
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

    const element = document.getElementById('about')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const skills = [
    { category: 'Programming', items: ['Java', 'C', 'JavaScript', 'HTML5', 'CSS3', 'SQL', 'PHP'] },
    { category: 'Frameworks/Tools', items: ['React.js', 'Bootstrap', 'Tailwind CSS', 'Node.js', 'Express.js'] },
    { category: 'Databases', items: ['MySQL', 'PostgreSQL'] },
    { category: 'Development', items: ['Full-Stack Web Development', 'REST APIs', 'Git', 'Agile Methodologies'] },
    { category: 'Platforms', items: ['GitHub', 'VS Code', 'IntelliJ', 'Postman'] },
    { category: 'Soft Skills', items: ['Problem Solving', 'Communication', 'Leadership', 'Critical Thinking', 'Teamwork', 'Time Management'] }
  ]

  const interests = [
    'Full-Stack Web Development',
    'Software Development & System Design',
    'Open-Source Contribution',
    'Exploring New Languages & Frameworks',
    'Technology Blogging'
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A passionate Computer Science Engineering student with a strong foundation in full-stack development and a drive to create innovative solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - About Text */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Who I Am</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  I'm Sanjay A R, a dedicated Computer Science Engineering student at Anna University - MIT Campus, 
                  Chennai. With a CGPA of 8.74, I'm passionate about creating innovative web solutions and 
                  exploring cutting-edge technologies.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  My journey in technology started with a curiosity for how things work, and it has evolved into 
                  a passion for building applications that make a difference. I believe in continuous learning 
                  and staying updated with the latest trends in software development.
                </p>
              </div>

              {/* Areas of Interest */}
              <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Areas of Interest</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {interests.map((interest, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{interest}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Technical Skills</h3>
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover-lift">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="skill-badge px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coding Platforms */}
          <div className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Coding Achievements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l2.396 2.392c.54.54 1.414.54 1.955.003.54-.54.54-1.414.003-1.955l-2.396-2.392A5.95 5.95 0 0 0 13.483 0zm-2.633 2.632L.41 13.01a1.863 1.863 0 0 0 0 2.637l10.44 10.44c.36.36.86.587 1.41.587.55 0 1.05-.226 1.41-.587l10.44-10.44a1.863 1.863 0 0 0 0-2.637L13.41 2.632a1.863 1.863 0 0 0-2.637 0z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">LeetCode</h4>
                <p className="text-3xl font-bold text-orange-600 mb-2">400+</p>
                <p className="text-gray-600">Problems Solved</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">HackerRank</h4>
                <p className="text-3xl font-bold text-green-600 mb-2">Level 5</p>
                <p className="text-gray-600">SQL, Java, Problem Solving</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Achievements</h4>
                <p className="text-3xl font-bold text-blue-600 mb-2">8.74</p>
                <p className="text-gray-600">Current CGPA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
