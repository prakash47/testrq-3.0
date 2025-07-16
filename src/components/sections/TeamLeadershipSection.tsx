import React from "react";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

const TeamLeadershipSection = () => {
  const leaders = [
    {
      name: "Sandeep Maske",
      position: "Founder & CEO",
      experience: "20+ Years",
      specialization: "QA Strategy & Leadership",
      bio: "Sandeep Maske, Founder & CEO of TESTRIQ QA LAB & Cinute Digital, drives unparalleled excellence in software testing, empowering diverse industries with QA expertise.",
      achievements: [
        "Founded Testriq in 2010",
        "Scaled company to 50+ employees",
        "ISTQB Advanced Level Certified",
        "Speaker at 20+ industry conferences"
      ],
      gradient: "from-blue-500 to-blue-600",
      img : <Image
              src="/sandeep-maske-img.webp"
              alt="Sandeep Maske"
              width={190}
              height={280}
              className="object-cover rounded-full"
            />
    },
    {
      name: "Michael Chen",
      position: "Chief Technology Officer",
      experience: "12+ Years",
      specialization: "Test Automation & DevOps",
      bio: "Michael leads our technical innovation, driving the adoption of cutting-edge testing tools and methodologies. His expertise in automation has transformed how we deliver quality assurance.",
      achievements: [
        "Led 100+ automation projects",
        "Expert in Selenium, Cypress, Playwright",
        "DevOps and CI/CD specialist",
        "Published 15+ technical articles"
      ],
      gradient: "from-purple-500 to-purple-600",
    },
    {
      name: "Emily Rodriguez",
      position: "Head of Quality Assurance",
      experience: "10+ Years",
      specialization: "Manual Testing & Process Optimization",
      bio: "Emily ensures our testing processes maintain the highest standards. Her meticulous approach to quality assurance has been instrumental in achieving our 99.8% project success rate.",
      achievements: [
        "Designed QA processes for 200+ projects",
        "ISTQB Expert Level Certified",
        "Reduced bug leakage by 95%",
        "Mentored 30+ junior testers"
      ],
      gradient: "from-green-500 to-green-600",
    },
  ];

  return (
    <section className="bg-[theme(color.background.gray)] py-16 px-8 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-[theme(color.brand.blue)] text-sm px-4 py-2 rounded-full mb-4">
            Leadership Team
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-[theme(color.brand.blue)]">Leaders</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Our leadership team combines decades of experience with a forward-thinking approach
            to quality assurance, driving innovation and excellence across all our services.
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="space-y-12">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 ${index % 2 === 0 ? "" : ""
                }`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}>
                {/* Leader Info */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                    <div className="text-xl text-[theme(color.brand.blue)] font-semibold mb-2">
                      {leader.position}
                    </div>
                    <div className="flex items-center gap-4 text-gray-600">
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {leader.experience}
                      </span>
                      <span className="text-sm">{leader.specialization}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">{leader.bio}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h4>
                    <div className="space-y-2">
                      {leader.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full"></div>
                          <span className="text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4">
                    <button className="w-10 h-10 bg-[theme(color.brand.blue)] rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                      <FaLinkedin className="text-white w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                      <FaTwitter className="text-white w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                      <FaEnvelope className="text-white w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Leader Visual */}
                <div className={`flex justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="relative">
                    <div className={`w-64 h-64 bg-gradient-to-br ${leader.gradient} rounded-2xl flex items-center justify-center`}>
                      <div className="text-center text-white">
                        <div className="w-40 h-40 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                          {leader.img}
                        </div>
                        <div className="text-lg font-semibold">{leader.name}</div>
                        <div className="text-sm opacity-90">{leader.position}</div>
                      </div>
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 border">
                      <div className="text-center">
                        <div className="text-lg font-bold text-[theme(color.brand.blue)]">{leader.experience.split('+')[0]}+</div>
                        <div className="text-xs text-gray-600">Years</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Philosophy */}
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Leadership <span className="text-[theme(color.brand.blue)]">Philosophy</span>
            </h3>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              We believe in leading by example, fostering innovation, and creating an environment
              where every team member can thrive and contribute to our collective success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Empowerment",
                description: "We empower our team members to take ownership, make decisions, and drive innovation in their areas of expertise.",
              },
              {
                title: "Transparency",
                description: "Open communication and transparent processes ensure everyone is aligned with our goals and values.",
              },
              {
                title: "Growth",
                description: "We invest in continuous learning and development, helping our team members reach their full potential.",
              },
            ].map((principle, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[theme(color.brand.blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">{index + 1}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h4>
                <p className="text-gray-700">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamLeadershipSection;

