import { useEffect, useState } from 'react'

const Certifications = () => {
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

    const element = document.getElementById('certifications')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const certifications = [
    {
      title: "The Complete Full-Stack Web Development Bootcamp",
      provider: "Udemy",
      description: "Finished a comprehensive course on full-stack web development through Udemy, covering modern technologies and best practices.",
      skills: ["Frontend Development", "Backend Development", "Database Management", "Modern Frameworks", "Best Practices"],
      icon: "💻",
      color: "from-blue-500 to-indigo-500",
      type: "Course Completion"
    },
    {
      title: "Introduction to MongoDB",
      provider: "Coursera",
      description: "Fulfilled an online course on Coursera, gaining foundational knowledge of MongoDB, including data modeling and CRUD operations.",
      skills: ["MongoDB", "NoSQL Databases", "Data Modeling", "CRUD Operations", "Database Design"],
      icon: "🍃",
      color: "from-green-500 to-emerald-500",
      type: "Course Completion"
    },
    {
      title: "Journey to Cloud: Envisioning Your Solution",
      provider: "IBM SkillBuild",
      description: "Concluded as part of a cloud learning pathway by IBM SkillBuild, focusing on cloud architecture and solution design.",
      skills: ["Cloud Computing", "Solution Architecture", "IBM Cloud", "Cloud Services", "Infrastructure Design"],
      icon: "☁️",
      color: "from-cyan-500 to-blue-500",
      type: "Learning Pathway"
    },
    {
      title: "Agile Explorer",
      provider: "IBM SkillBuild",
      description: "Achieved through a skill-building program offered by IBM SkillBuild, covering agile methodologies and project management.",
      skills: ["Agile Methodologies", "Project Management", "Scrum", "Team Collaboration", "Iterative Development"],
      icon: "🚀",
      color: "from-purple-500 to-pink-500",
      type: "Skill Building"
    }
  ]

  const platforms = [
    {
      name: "LeetCode",
      problems: "400+",
      level: "Advanced",
      icon: "🧮",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "HackerRank",
      sql: "Level 5",
      java: "Level 4",
      problemSolving: "Level 3",
      icon: "💡",
      color: "from-green-500 to-teal-500"
    }
  ]

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Certifications & <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Continuous learning and skill development through various platforms and educational programs.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover-lift">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <span className="text-2xl">{cert.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{cert.title}</h3>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-xs font-semibold">
                        {cert.type}
                      </span>
                    </div>
                    <p className="text-lg font-semibold text-blue-600 mb-2">{cert.provider}</p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">{cert.description}</p>

                <div>
                  <h4 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">Skills Gained:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coding Platforms */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Coding Platform Achievements</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-xl flex items-center justify-center`}>
                      <span className="text-2xl">{platform.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">{platform.name}</h4>
                      <p className="text-gray-600">Competitive Programming</p>
                    </div>
                  </div>

                  {platform.name === "LeetCode" ? (
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Problems Solved:</span>
                        <span className="text-2xl font-bold text-orange-600">{platform.problems}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Level:</span>
                        <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold">
                          {platform.level}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">SQL:</span>
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                          {platform.sql}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Java:</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                          {platform.java}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Problem Solving:</span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
                          {platform.problemSolving}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Learning Journey */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Continuous Learning Journey</h3>
              <p className="text-lg mb-6 opacity-90">
                Committed to staying updated with the latest technologies and best practices in software development.
              </p>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">4+</div>
                  <div className="text-sm opacity-90">Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">400+</div>
                  <div className="text-sm opacity-90">Problems Solved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <div className="text-sm opacity-90">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">∞</div>
                  <div className="text-sm opacity-90">Learning Mindset</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
