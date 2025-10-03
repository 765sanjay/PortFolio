import { useEffect, useState } from 'react'

const Education = () => {
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

    const element = document.getElementById('education')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const educationData = [
    {
      period: "2022 - 2026",
      degree: "B.E. in Computer Science and Engineering",
      institution: "Anna University - MIT Campus",
      location: "Tiruchirapalli, Thuraiyur 621010",
      grade: "CGPA: 8.74",
      description: "Currently pursuing Bachelor of Engineering in Computer Science with focus on software development, algorithms, and modern web technologies.",
      icon: "🎓"
    },
    {
      period: "2022",
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Sowdambikaa Matric Higher Secondary School",
      location: "Tiruchirapalli",
      grade: "96%",
      description: "Completed higher secondary education with excellent academic performance, focusing on mathematics and science subjects.",
      icon: "📚"
    },
    {
      period: "2020",
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Vimala Matric Higher Secondary School",
      location: "Tiruchirapalli",
      grade: "99%",
      description: "Completed secondary education with outstanding academic performance, laying strong foundation for higher studies.",
      icon: "🏆"
    }
  ]

  const leadershipData = [
    {
      period: "July 2025 - May 2026",
      role: "Chairperson",
      organization: "TedcMIT",
      description: "Organized club activities and technical events, fostering innovation and collaboration among students.",
      icon: "👑"
    },
    {
      period: "2024",
      role: "Event Coordinator",
      organization: "Industrial Visit to BSNL Bengaluru",
      description: "Coordinated industrial visit for 146 students and 4 faculty members, managing logistics and ensuring smooth execution.",
      icon: "🚌"
    }
  ]

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Education & <span className="gradient-text">Leadership</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My academic journey and leadership experiences that have shaped my professional development.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Academic Journey</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
              
              {educationData.map((edu, index) => (
                <div key={index} className="relative flex items-start mb-12">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className="ml-16 bg-white p-8 rounded-2xl shadow-lg hover-lift w-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{edu.icon}</span>
                        <div>
                          <h4 className="text-xl font-bold text-gray-800">{edu.degree}</h4>
                          <p className="text-lg font-semibold text-blue-600">{edu.institution}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-semibold">
                          {edu.period}
                        </span>
                        <p className="text-lg font-bold text-gray-800 mt-2">{edu.grade}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-gray-600 flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {edu.location}
                      </p>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Roles */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Leadership & Contributions</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {leadershipData.map((leadership, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover-lift">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">{leadership.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">{leadership.role}</h4>
                      <p className="text-lg font-semibold text-blue-600">{leadership.organization}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 text-green-800 rounded-full text-sm font-semibold">
                      {leadership.period}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">{leadership.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Highlights */}
          <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Academic Highlights</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">8.74</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Current CGPA</h4>
                <p className="text-gray-600">B.E. Computer Science</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">96%</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">HSC Score</h4>
                <p className="text-gray-600">Higher Secondary</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">99%</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">SSLC Score</h4>
                <p className="text-gray-600">Secondary School</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
