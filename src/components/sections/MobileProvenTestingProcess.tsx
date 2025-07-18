"use client";

import React from "react";
import { FaClipboardList, FaCogs, FaBug, FaCheckCircle, FaRocket, FaShieldAlt } from "react-icons/fa";

const MobileProvenTestingProcess: React.FC = () => {
  const processSteps = [
    {
      step: "01",
      icon: <FaClipboardList className="w-8 h-8" />,
      title: "Requirements Analysis",
      description: "We thoroughly analyze your mobile application requirements, target platforms, devices, and user demographics to create a comprehensive testing strategy.",
      details: [
        "App architecture review",
        "Target device analysis",
        "User persona validation",
        "Platform-specific requirements"
      ]
    },
    {
      step: "02",
      icon: <FaCogs className="w-8 h-8" />,
      title: "Test Planning & Design",
      description: "Our experts design detailed test cases covering all aspects of mobile functionality, user experience, and platform-specific features.",
      details: [
        "Test case development",
        "Device matrix planning",
        "Automation strategy design",
        "Performance benchmarks"
      ]
    },
    {
      step: "03",
      icon: <FaBug className="w-8 h-8" />,
      title: "Test Execution",
      description: "Systematic execution of functional, performance, security, and compatibility tests across real devices and simulators/emulators.",
      details: [
        "Real device testing",
        "Automated test execution",
        "Cross-platform validation",
        "Network condition testing"
      ]
    },
    {
      step: "04",
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Security & Compliance",
      description: "Comprehensive security testing and app store compliance validation to ensure your app meets all platform requirements.",
      details: [
        "Security vulnerability assessment",
        "App store guideline compliance",
        "Data privacy validation",
        "Permission testing"
      ]
    },
    {
      step: "05",
      icon: <FaCheckCircle className="w-8 h-8" />,
      title: "Quality Validation",
      description: "Final validation phase ensuring all requirements are met and the application is ready for app store submission and user deployment.",
      details: [
        "Final acceptance testing",
        "Performance validation",
        "User experience verification",
        "App store readiness check"
      ]
    },
    {
      step: "06",
      icon: <FaRocket className="w-8 h-8" />,
      title: "Launch Support",
      description: "Ongoing support during app store submission and post-launch monitoring to ensure continued quality and performance.",
      details: [
        "App store submission support",
        "Post-launch monitoring",
        "User feedback analysis",
        "Continuous improvement"
      ]
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-[theme(color.brand.blue)] text-sm px-4 py-2 rounded-full mb-4">
            Our Methodology
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Proven Mobile Testing{" "}
            <span className="text-[theme(color.brand.blue)]">Process</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our systematic approach ensures comprehensive testing coverage and delivers 
            high-quality mobile applications that exceed user expectations across all platforms.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[theme(color.brand.blue)] to-blue-300 opacity-20"></div>

          <div className="space-y-12">
            {processSteps.map((process, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                {/* Content Card */}
                <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-[theme(color.brand.blue)] to-blue-600 rounded-xl flex items-center justify-center text-white">
                        {process.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl font-bold text-[theme(color.brand.blue)]">
                          {process.step}
                        </span>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {process.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {process.description}
                      </p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {process.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[theme(color.brand.blue)] rounded-full"></div>
                        <span className="text-sm text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step Indicator (Desktop) */}
                <div className="hidden lg:flex flex-shrink-0 w-24 h-24 bg-white rounded-full border-4 border-[theme(color.brand.blue)] items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-[theme(color.brand.blue)]">
                    {process.step}
                  </span>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Testing Tools & Technologies */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Testing Tools & Technologies We Use
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 mb-4">Automation Tools</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div>Appium</div>
                <div>XCUITest</div>
                <div>Espresso</div>
                <div>Detox</div>
                <div>Calabash</div>
              </div>
            </div>
            
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 mb-4">Device Testing</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div>AWS Device Farm</div>
                <div>Firebase Test Lab</div>
                <div>BrowserStack</div>
                <div>Sauce Labs</div>
                <div>Real Device Lab</div>
              </div>
            </div>
            
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 mb-4">Performance Tools</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div>Xcode Instruments</div>
                <div>Android Profiler</div>
                <div>GameBench</div>
                <div>Perfecto</div>
                <div>Custom Analytics</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[theme(color.brand.blue)] to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Mobile Testing Project?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let our proven process ensure your mobile application delivers exceptional 
              quality and performance across all devices and platforms.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 bg-white text-[theme(color.brand.blue)] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Start Your Project
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[theme(color.brand.blue)] transition-colors">
                Download Process Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileProvenTestingProcess;

