"use client";

import React from "react";
import { FaSearch, FaCog, FaCheckCircle, FaRocket } from "react-icons/fa";

const EcommerceTestingProcessSection: React.FC = () => {
  const processSteps = [
    {
      icon: FaSearch,
      title: "Analysis & Planning",
      description: "Comprehensive platform analysis and testing strategy development"
    },
    {
      icon: FaCog,
      title: "Test Execution",
      description: "Systematic testing of all e-commerce functionalities and integrations"
    },
    {
      icon: FaCheckCircle,
      title: "Quality Assurance",
      description: "Thorough validation and verification of all test results"
    },
    {
      icon: FaRocket,
      title: "Optimization",
      description: "Performance improvements and final deployment preparation"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our E-Commerce Testing Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven methodology that ensures comprehensive testing and optimal results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcommerceTestingProcessSection;

