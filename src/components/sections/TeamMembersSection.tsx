import React from "react";
import { FaCode, FaMobile, FaShieldAlt, FaRobot, FaDatabase, FaGlobe } from "react-icons/fa";

const TeamMembersSection = () => {
  const departments = [
    {
      name: "Automation Testing",
      icon: FaCode,
      memberCount: 12,
      description: "Specialists in test automation frameworks and CI/CD integration",
      color: "bg-blue-500",
      skills: ["Selenium", "Cypress", "Playwright", "API Testing", "CI/CD"],
    },
    {
      name: "Mobile Testing",
      icon: FaMobile,
      memberCount: 8,
      description: "Experts in iOS and Android application testing",
      color: "bg-green-500",
      skills: ["iOS Testing", "Android Testing", "React Native", "Flutter", "Appium"],
    },
    {
      name: "Security Testing",
      icon: FaShieldAlt,
      memberCount: 6,
      description: "Cybersecurity professionals ensuring application security",
      color: "bg-red-500",
      skills: ["OWASP", "Penetration Testing", "Vulnerability Assessment", "Security Audits"],
    },
    {
      name: "AI/ML Testing",
      icon: FaRobot,
      memberCount: 5,
      description: "Cutting-edge specialists in AI and machine learning testing",
      color: "bg-purple-500",
      skills: ["Model Testing", "Data Validation", "AI Ethics", "Performance Testing"],
    },
    {
      name: "Performance Testing",
      icon: FaDatabase,
      memberCount: 7,
      description: "Load and performance testing experts",
      color: "bg-orange-500",
      skills: ["JMeter", "LoadRunner", "K6", "Performance Monitoring", "Scalability"],
    },
    {
      name: "Manual Testing",
      icon: FaGlobe,
      memberCount: 12,
      description: "Experienced manual testers with domain expertise",
      color: "bg-teal-500",
      skills: ["Exploratory Testing", "Usability Testing", "Regression Testing", "UAT"],
    },
  ];

  const teamMembers = [
    {
      name: "Sandeep Maske",
      role: "Founder & CEO",
      department: "Testriq QA Lab & Cinute Digital",
      experience: "7 Years",
      specialties: ["Selenium", "Python", "CI/CD"],
      gradient: "from-blue-400 to-blue-500",
    },
    {
      name: "Priya Sharma",
      role: "Mobile Testing Lead",
      department: "Mobile Testing",
      experience: "6 Years",
      specialties: ["iOS", "Android", "Appium"],
      gradient: "from-green-400 to-green-500",
    },
    {
      name: "David Kim",
      role: "Security Testing Specialist",
      department: "Security Testing",
      experience: "8 Years",
      specialties: ["OWASP", "Penetration Testing"],
      gradient: "from-red-400 to-red-500",
    },
    {
      name: "Maria Garcia",
      role: "Performance Testing Expert",
      department: "Performance Testing",
      experience: "9 Years",
      specialties: ["JMeter", "Load Testing"],
      gradient: "from-orange-400 to-orange-500",
    },
    {
      name: "James Wilson",
      role: "AI Testing Researcher",
      department: "AI/ML Testing",
      experience: "5 Years",
      specialties: ["ML Models", "Data Validation"],
      gradient: "from-purple-400 to-purple-500",
    },
    {
      name: "Lisa Chen",
      role: "Manual Testing Lead",
      department: "Manual Testing",
      experience: "10 Years",
      specialties: ["Exploratory", "Usability"],
      gradient: "from-teal-400 to-teal-500",
    },
  ];

  return (
    <section className="bg-white py-16 px-8 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-[theme(color.brand.blue)] text-sm px-4 py-2 rounded-full mb-4">
            Our Team
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Specialized <span className="text-[theme(color.brand.blue)]">Departments</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Our team is organized into specialized departments, each bringing deep expertise 
            in their respective domains to deliver comprehensive testing solutions.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
            >
              <div className={`w-16 h-16 ${dept.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <dept.icon className="text-white w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{dept.name}</h3>
              <div className="text-[theme(color.brand.blue)] font-semibold mb-3">
                {dept.memberCount} Team Members
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">{dept.description}</p>
              
              <div className="space-y-2">
                <div className="text-sm font-semibold text-gray-800">Key Skills:</div>
                <div className="flex flex-wrap gap-2">
                  {dept.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Team Members */}
        <div className="bg-[theme(color.background.gray)] rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Featured <span className="text-[theme(color.brand.blue)]">Team Members</span>
            </h3>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Meet some of our exceptional team members who exemplify our commitment 
              to excellence and innovation in software testing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${member.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-white text-xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
                  <div className="text-[theme(color.brand.blue)] font-semibold mb-2">{member.role}</div>
                  <div className="text-gray-600 text-sm mb-3">{member.department}</div>
                  
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <div className="text-sm font-semibold text-gray-800 mb-2">Experience</div>
                    <div className="text-[theme(color.brand.blue)] font-bold">{member.experience}</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-gray-800">Specialties:</div>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.specialties.map((specialty, specIndex) => (
                        <span
                          key={specIndex}
                          className="bg-blue-100 text-[theme(color.brand.blue)] px-2 py-1 rounded-md text-xs"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Team <span className="text-[theme(color.brand.blue)]">Excellence</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { metric: "50+", label: "Team Members", description: "Across all departments" },
              { metric: "8.5", label: "Avg. Experience", description: "Years in testing" },
              { metric: "40+", label: "Certifications", description: "Industry recognized" },
              { metric: "15+", label: "Technologies", description: "Expertise areas" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[theme(color.brand.blue)] mb-2">
                  {stat.metric}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembersSection;

