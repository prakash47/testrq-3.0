'use client';
import React from 'react';
import { FaArrowRight, FaPlay, FaCheckCircle } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="bg-gray-100 py-10 px-8 md:px-26 flex flex-col-reverse md:flex-row items-center justify-between">
      
      {/* Left Section */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 text-center md:text-left">
        <span className="inline-block bg-blue-100 text-[#25A8E0] text-base md:text-lg px-4 py-1 rounded-full mb-4">
          ISTQB Certified Experts
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Premium <span className="text-[#25A8E0]">Software Testing</span> Services
        </h1>

        <p className="text-gray-700 text-base md:text-lg mb-6 max-w-xl mx-auto md:mx-0">
          Accelerate your product launch with our comprehensive QA solutions. Over a decade of experience delivering exceptional software testing services to startups and industry leaders.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 mb-8">
          <button className="flex items-center gap-2 py-3 px-5 border bg-[#25A8E0] text-white font-semibold text-base md:text-lg rounded-md hover:bg-blue-400 cursor-pointer w-full sm:w-auto">
                <span className="text-base">Get Started Today</span>
                <FaArrowRight className="w-4 h-5" />
          </button>
          <button className="flex items-center gap-2 py-3 px-5 border border-[#25A8E0] text-[#25A8E0] font-semibold text-base md:text-lg rounded-md hover:cursor-pointer w-full sm:w-auto">
            <FaPlay className="w-4 h-4" />
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6">
          {[
            ['10+', 'Years Experience'],
            ['500+', 'Projects Completed'],
            ['50+', 'Happy Clients'],
            ['99%', 'Success Rate'],
          ].map(([value, label], i) => (
            <div key={i} className="text-center">
              <p className="text-blue-600 font-bold text-2xl md:text-3xl">{value}</p>
              <p className="text-gray-700 text-base">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 bg-white shadow-lg rounded-xl max-w-xl h-80 mx-auto mr-0">
        
      </div>
    </section>
  );
};

export default Hero;