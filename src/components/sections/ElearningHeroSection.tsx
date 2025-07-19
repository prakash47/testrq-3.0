"use client";

import React from "react";
import { 
  FaGraduationCap, 
  FaLaptop, 
  FaMobile, 
  FaUsers,
  FaChartLine,
  FaShieldAlt,
  FaRocket,
  FaCheckCircle,
  FaPlay,
  FaBook,
  FaGlobe,
  FaAccessibleIcon
} from "react-icons/fa";

const ElearningHeroSection: React.FC = () => {
  const keyStats = [
    { value: "500M+", label: "Learners Reached", icon: FaUsers },
    { value: "50+", label: "LMS Platforms", icon: FaLaptop },
    { value: "99.9%", label: "Uptime Achieved", icon: FaRocket },
    { value: "WCAG 2.1", label: "Accessibility Compliant", icon: FaAccessibleIcon }
  ];

  const learningTypes = [
    { icon: FaBook, label: "Online Courses", color: "text-blue-500" },
    { icon: FaUsers, label: "Virtual Classrooms", color: "text-green-500" },
    { icon: FaPlay, label: "Video Learning", color: "text-red-500" },
    { icon: FaGlobe, label: "Global Training", color: "text-purple-500" }
  ];

  const complianceStandards = [
    "WCAG 2.1 AA Compliance",
    "Section 508 Standards",
    "SCORM 1.2 & 2004",
    "xAPI (Tin Can API)",
    "GDPR Privacy Compliance",
    "COPPA Educational Standards"
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      {/* Floating Learning Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-1/4 animate-float">
          <div className="w-16 h-16 bg-white bg-opacity-90 rounded-2xl shadow-lg flex items-center justify-center">
            <FaGraduationCap className="w-8 h-8 text-indigo-600" />
          </div>
        </div>
        <div className="absolute top-48 right-1/4 animate-float delay-1000">
          <div className="w-16 h-16 bg-white bg-opacity-90 rounded-2xl shadow-lg flex items-center justify-center">
            <FaBook className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="absolute bottom-48 left-1/3 animate-float delay-2000">
          <div className="w-16 h-16 bg-white bg-opacity-90 rounded-2xl shadow-lg flex items-center justify-center">
            <FaLaptop className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="absolute bottom-32 right-1/3 animate-float delay-3000">
          <div className="w-16 h-16 bg-white bg-opacity-90 rounded-2xl shadow-lg flex items-center justify-center">
            <FaUsers className="w-8 h-8 text-purple-500" />
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-8 md:px-12 lg:px-24 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-indigo-100 rounded-full px-6 py-3 border border-indigo-200">
              <FaGraduationCap className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-semibold text-indigo-600">E-Learning Testing Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Empower Learning
              <span className="block bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Through Quality
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl mt-2">E-Learning Testing</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Ensure exceptional learning experiences with comprehensive testing for LMS platforms, 
              online courses, and educational applications. From accessibility compliance to performance 
              optimization, we help you deliver education that truly makes an impact.
            </p>

            {/* Learning Types */}
            <div className="grid grid-cols-2 gap-4">
              {learningTypes.map((type, index) => (
                <div key={index} className="flex items-center gap-3">
                  <type.icon className={`w-5 h-5 ${type.color} flex-shrink-0`} />
                  <span className="text-gray-700 font-medium">{type.label}</span>
                </div>
              ))}
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">WCAG 2.1 Compliance</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">SCORM Integration</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Multi-Device Testing</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Performance Optimization</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                <FaRocket className="w-5 h-5" />
                Start Free LMS Audit
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300 flex items-center justify-center gap-2">
                <FaUsers className="w-5 h-5" />
                Schedule Demo
              </button>
            </div>

            {/* Compliance Badges */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4">Trusted by leading educational institutions worldwide</p>
              <div className="flex flex-wrap gap-3">
                {complianceStandards.map((standard, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white bg-opacity-80 text-gray-600 text-xs rounded-full border border-gray-200 font-medium"
                  >
                    {standard}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Visual */}
          <div className="space-y-8">
            {/* Key Statistics */}
            <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white border-opacity-50">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">E-Learning Testing Expertise</h3>
                <p className="text-gray-600">Delivering quality education technology</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {keyStats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Impact Metrics */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 border border-green-100">
              <div className="flex items-center gap-3 mb-6">
                <FaChartLine className="w-6 h-6 text-green-600" />
                <h4 className="text-xl font-bold text-gray-900">Average Client Impact</h4>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Course Completion Rate</span>
                  <span className="font-bold text-green-600">+45%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">User Engagement Score</span>
                  <span className="font-bold text-green-600">+38%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Platform Performance</span>
                  <span className="font-bold text-green-600">+52%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Accessibility Compliance</span>
                  <span className="font-bold text-green-600">100%</span>
                </div>
              </div>
            </div>

            {/* Learning Modalities */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl p-8 border border-purple-100">
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Testing Coverage</h4>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white bg-opacity-70 rounded-xl">
                  <FaLaptop className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">Desktop LMS</div>
                </div>
                <div className="text-center p-4 bg-white bg-opacity-70 rounded-xl">
                  <FaMobile className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">Mobile Learning</div>
                </div>
                <div className="text-center p-4 bg-white bg-opacity-70 rounded-xl">
                  <FaPlay className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">Video Content</div>
                </div>
                <div className="text-center p-4 bg-white bg-opacity-70 rounded-xl">
                  <FaShieldAlt className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">Security & Privacy</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-20 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-8 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your E-Learning Platform?</h3>
            <p className="text-indigo-100 mb-6 text-lg">
              Join 200+ educational institutions that trust Testriq for comprehensive e-learning QA solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Get Free Platform Assessment
              </button>
              <button className="bg-white bg-opacity-20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-opacity-30 transition-all border border-white border-opacity-30">
                View Success Stories
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
        .delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </section>
  );
};

export default ElearningHeroSection;

