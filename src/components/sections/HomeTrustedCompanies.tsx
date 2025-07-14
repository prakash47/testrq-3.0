import React from "react";
import Image from "next/image";

const companyLogos = [
  {
    name: "Canva",
    logo: (
      <Image
        src="/Canva_Logo.png"
        alt="Canva Logo"
        width={80}
        height={160}
        className="object-contain"
      />
    ),
  },
  {
    name: "Milton",
    logo: (
      <Image
        src="/Milton_Logo.jpg"
        alt="Milton Logo"
        width={80}
        height={160}
        className="object-contain"
      />
    ),
  },
  {
    name: "Brandify",
    logo: (
      <Image
        src="/Brandify_Logo.png"
        alt="Brandify Logo"
        width={80}
        height={160}
        className="object-contain"
      />
    ),
  },
];

const HomeTrustedCompanies = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 md:px-12 lg:px-24 text-center">
      <h2 className="text-2xl sm:text-4xl">Trusted by Leading Companies</h2>
      <p className="mt-4 text-gray-500 text-base sm:text-lg">
        Join 50+ companies who trust us with their critical testing needs and
        quality assurance requirements.
      </p>

      {/* Company Logos */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 items-center justify-center">
        {companyLogos.map((company, idx) => (
          <div key={idx} className="flex items-center justify-center">
            {company.logo}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeTrustedCompanies;
