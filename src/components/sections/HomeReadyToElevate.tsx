"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ctaSection = {
  title: "Ready to Elevate Your Software Quality?",
  subtitle:
    "Join 50+ companies who trust us with their critical testing needs. Get started with a free consultation today.",
  primaryButton: {
    label: "Start Free Consultation",
    href: "#",
  },
  secondaryButton: {
    label: "View Our Work",
    href: "#",
  },
};

const HomeReadyToElevate = () => {
  return (
    <section className="py-16 px-8 sm:px-8 md:px-12 lg:px-24 text-center bg-white">
      <h2 className="text-2xl sm:text-4xl">{ctaSection.title}</h2>
      <p className="mt-4 text-gray-500 text-base sm:text-lg">
        {ctaSection.subtitle}
      </p>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        {/* Primary Button */}
        <a
          href={ctaSection.primaryButton.href}
          className="inline-flex items-center gap-2 px-6 py-3 text-white bg-[theme(color.brand.blue)] transition rounded-md text-sm font-medium"
        >
          {ctaSection.primaryButton.label}
          <FaArrowRight className="text-xs" />
        </a>

        {/* Secondary Button */}
        <a
          href={ctaSection.secondaryButton.href}
          className="inline-flex items-center px-6 py-3 text-gray-700 border border-gray-300 hover:bg-gray-50 transition rounded-md text-sm font-medium"
        >
          {ctaSection.secondaryButton.label}
        </a>
      </div>
    </section>
  );
};

export default HomeReadyToElevate;
