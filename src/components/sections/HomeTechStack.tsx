import React from "react";
import Image from "next/image";
import {
  SiCypress,
  SiAppium,
  SiSwagger,
  SiInsomnia,
} from "react-icons/si";
import { FaCircleCheck } from "react-icons/fa6";
import { FaRocket, FaNetworkWired, FaDesktop } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { PiMedal } from "react-icons/pi";

const techStack = {
  title: "Our Technology Stack",
  subtitle:
    "We leverage cutting-edge tools and technologies to deliver comprehensive testing solutions across all platforms and environments.",
  categories: [
    {
      title: "Automation Tools",
      items: [
        {
          name: "Selenium WebDriver",
          icon: (
            <Image
              src="/Selenium_Logo.png"
              alt="Selenium Logo"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        { name: "Cypress", icon: <SiCypress /> },
        { name: "Playwright", icon: <FaDesktop /> },
        { name: "Appium", icon: <SiAppium /> },
        { name: "TestComplete", icon: <FaCircleCheck /> },
      ],
    },
    {
      title: "Performance Testing",
      items: [
        {
          name: "JMeter",
          icon: (
            <Image
              src="/JMeter_Logo.png"
              alt="JMeter Logo"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        { name: "LoadRunner", icon: <FaRocket /> },
        { name: "K6", icon: <FaNetworkWired /> },
        { name: "Gatling", icon: <FaRocket /> },
        { name: "BlazeMeter", icon: <FaRocket /> },
      ],
    },
    {
      title: "API Testing",
      items: [
        {
          name: "Postman",
          icon: (
            <Image
              src="/Postman_Logo.png"
              alt="Postman Logo"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        { name: "REST Assured", icon: <TbApi /> },
        { name: "SoapUI", icon: <SiSwagger /> },
        { name: "Insomnia", icon: <SiInsomnia /> },
        { name: "Newman", icon: <TbApi /> },
      ],
    },
    {
      title: "Security Testing",
      items: [
        {
          name: "OWASP ZAP",
          icon: (
            <Image
              src="/Owasp_Zap_Logo.png"
              alt="OWASP ZAP Logo"
              width={20}
              height={20}
              className="object-contain"
            />
          ),
        },
        { name: "Burp Suite", icon: <MdOutlineSecurity /> },
        { name: "Nessus", icon: <MdOutlineSecurity /> },
        { name: "Veracode", icon: <PiMedal /> },
        { name: "Checkmarx", icon: <MdOutlineSecurity /> },
      ],
    },
  ],
};

const HeroTechStack = () => {
  return (
    <section className="py-16 px-8 sm:px-8 md:px-12 lg:px-24 bg-white text-center">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl sm:text-4xl">{techStack.title}</h2>
        <p className="mt-4 text-gray-500 text-base sm:text-lg">
          {techStack.subtitle}
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {techStack.categories.map((category, idx) => (
          <div
            key={idx}
            className="bg-white ring-sky-200 ring-1 rounded-lg shadow-sm p-6 text-left transition duration-300 transform hover:shadow-sky-200 hover:shadow-xl cursor-pointer"
          >
            <h3 className="text-xl text-[theme(color.brand.blue)] mb-4 text-center">
              {category.title}
            </h3>
            <ul className="space-y-4 px-4 py-4">
              {category.items.map((tool, toolIdx) => (
                <li
                  key={toolIdx}
                  className="flex items-center gap-2 text-gray-700 text-sm"
                >
                  <span className="text-[theme(color.brand.blue)] text-2xl">
                    {tool.icon}
                  </span>
                  <span className="text-base px-2">{tool.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroTechStack;
