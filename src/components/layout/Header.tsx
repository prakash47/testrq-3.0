"use client";
import React, { useState } from "react";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import Testriq_Logo from "../../../public/Testriq_Logo.png";

// Define the type for submenu items with links
type SubmenuItem = {
  label: string;
  link: string;
};

type Submenu = SubmenuItem[] | { heading: string; services: SubmenuItem[] }[];

// Define the type for a menu item
interface MenuItem {
  label: string;
  link: string;
  submenu?: Submenu;
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const [activeServiceSubmenu, setActiveServiceSubmenu] = useState<number | null>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setActiveSubmenu(null);
    setActiveServiceSubmenu(null);
  };

  const toggleSubmenu = (index: number) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
    setActiveServiceSubmenu(null);
  };

  const toggleServiceSubmenu = (index: number) => {
    setActiveServiceSubmenu(activeServiceSubmenu === index ? null : index);
  };

  // Define menu items with proper types and links
  const menuItems: MenuItem[] = [
    { label: "Home", link: "/" },
    {
      label: "Company",
      link: "",
      submenu: [
        { label: "About Us", link: "/about" },
        { label: "Our Team", link: "/team" },
      ],
    },
    {
      label: "Services",
      link: "",
      submenu: [
        {
          heading: "Testing Services",
          services: [
            { label: "LaunchFast QA", link: "/services/launchfast-qa" },
            { label: "Exploratory Testing", link: "/services/exploratory-testing" },
            { label: "Web Application Testing", link: "/services/web-application-testing" },
            { label: "Desktop Application Testing", link: "/services/desktop-application-testing" },
            { label: "Mobile Application Testing", link: "/services/mobile-application-testing" },
            { label: "API Testing", link: "/services/api-testing" },
          ],
        },
        {
          heading: "Specialized Testing",
          services: [
            { label: "IoT Device Testing", link: "/services/iot-device-testing" },
            { label: "AI Application Testing", link: "/services/ai-application-testing" },
            { label: "Robotics Testing", link: "/services/robotics-testing" },
            { label: "Smart Device Testing", link: "/services/smart-device-testing" },
            { label: "ETL Testing", link: "/services/etl-testing" },
            { label: "Security Testing", link: "/services/security-testing" },
          ],
        },
        {
          heading: "Quality Assurance",
          services: [
            { label: "Manual Testing", link: "/services/manual-testing" },
            { label: "Automation Testing", link: "/services/automation-testing" },
            { label: "Regression Testing", link: "/services/regression-testing" },
            { label: "Performance Testing", link: "/services/performance-testing" },
            { label: "QA Documentation", link: "/services/qa-documentation" },
            { label: "Data Analysis", link: "/services/data-analysis" },
          ],
        },
        {
          heading: "Advanced Testing",
          services: [
            { label: "Load Testing", link: "/services/load-testing" },
            { label: "Compatibility Testing", link: "/services/compatibility-testing" },
            { label: "Usability Testing", link: "/services/usability-testing" },
            { label: "Accessibility Testing", link: "/services/accessibility-testing" },
            { label: "Database Testing", link: "/services/database-testing" },
            { label: "Integration Testing", link: "/services/integration-testing" },
          ],
        },
      ],
    },
    {
      label: "QA Solutions",
      link: "",
      submenu: [
        { label: "Ecommerce Testing Services", link: "/qa-solutions/ecommerce-testing" },
        { label: "Automation Testing Services", link: "/qa-solutions/automation-testing" },
        { label: "Gaming App Testing Services", link: "/qa-solutions/gaming-app-testing" },
        { label: "Manual Testing", link: "/qa-solutions/manual-testing" },
        { label: "Banking & Finance Testing Services", link: "/qa-solutions/banking-finance-testing" },
      ],
    },
    { label: "Tools", link: "/tools" },
    { label: "Our Clients", link: "/clients" },
    { label: "Jobs", link: "/careers" },
    { label: "Blog", link: "/blog" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md px-4 sm:px-6 md:px-16 sticky top-0 z-50">
      <div className="flex justify-between items-center  sm:px-5 md:px-8 py-3 sm:py-4">
        {/* Logo */}
        <Link href="/">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold cursor-pointer">
            <Image
              src={Testriq_Logo}
              alt="Testriq_Logo"
              height={100}
              width={120}
            />
          </h2>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden xl:flex space-x-6 2xl:space-x-4 w-max-screen-xl text-gray-700 text-sm xl:text-base relative">
          {menuItems.map((item, idx) => (
            <li key={idx} className="relative group cursor-pointer">
              <Link href={item.link}>
                <div className="flex items-center gap-1 hover:text-[theme(color.brand.blue)] px-2 py-1">
                  {item.label}
                  {item.submenu && <MdKeyboardArrowDown />}
                </div>
              </Link>

              {/* Mega Menu for 'Services' */}
              {item.label === "Services" && item.submenu && (
                <div className="absolute top-full mt-0 left-0 right-0 ml-[calc(-35vw+100%)] xl:ml-[calc(-39vw+100%)] bg-white shadow-lg z-[60] translate-y-4 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 w-screen pointer-events-none group-hover:pointer-events-auto">
                  <div className="w-full mx-auto grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-8 py-6 xl:py-8 px-4 xl:px-6 ml-8 xl:ml-24">
                    {item.submenu.map((column, colIdx) => {
                      if ('label' in column && 'link' in column) {
                        return (
                          <div key={colIdx} className="space-y-3 xl:space-y-4">
                            <Link href={column.link}>
                              <h2 className="text-base xl:text-lg font-semibold text-gray-800 hover:text-[theme(color.brand.blue)] cursor-pointer">
                                {column.label}
                              </h2>
                            </Link>
                          </div>
                        );
                      }

                      return (
                        <div key={colIdx} className="space-y-3 xl:space-y-4">
                          <h2 className="text-base xl:text-lg font-semibold text-gray-800">
                            {column.heading}
                          </h2>
                          <div className="flex flex-row">
                            <ul className="space-y-2 xl:space-y-4">
                              {column.services.map((service, subIdx) => (
                                <li key={subIdx}>
                                  <Link href={service.link}>
                                    <span className="text-sm xl:text-base text-gray-600 hover:text-[theme(color.brand.blue)] cursor-pointer">
                                      {service.label}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Dropdown for other items */}
              {item.submenu && item.label !== "Services" && (
                <ul className="absolute top-full left-0 bg-white shadow-md rounded-md py-2 w-max z-[55] translate-y-4 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
                  {item.submenu.map((subItem, subIdx) => (
                    <li key={subIdx}>
                      <Link href={('link' in subItem) ? subItem.link : '#'}>
                        <span className="block px-4 py-2 hover:bg-blue-50 hover:text-[theme(color.brand.blue)] text-sm xl:text-base text-gray-600 cursor-pointer">
                          {('label' in subItem) ? subItem.label : subItem.heading}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Tablet Menu Button */}
        <div className="hidden md:flex xl:hidden items-center">
          <button
            className="text-gray-700 text-xl p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Actions */}
        <div className="hidden xl:flex items-center gap-3 2xl:gap-4">
          <Link href="/contact">
            <button className="bg-[#25A8E0] text-white px-3 xl:px-4 py-2 rounded-xl hover:bg-blue-400 flex items-center gap-2">
              <span className="text-sm xl:text-base">Talk to Expert</span>
              <FaArrowRight className="w-3 h-3 xl:w-4 xl:h-5" />
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Tablet Menu */}
      {menuOpen && (
        <div className="hidden md:block xl:hidden">
          <div className="bg-white border-t shadow-lg max-h-[80vh] overflow-y-auto">
            <div className="px-6 py-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {menuItems.map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Link href={item.link}>
                        <h3 className="text-lg font-semibold text-gray-800 hover:text-[theme(color.brand.blue)] cursor-pointer">
                          {item.label}
                        </h3>
                      </Link>
                      {item.submenu && (
                        <button
                          onClick={() => toggleSubmenu(idx)}
                          className="text-gray-600 hover:text-[theme(color.brand.blue)] p-1"
                        >
                          <MdKeyboardArrowDown 
                            className={`transition-transform duration-200 ${
                              activeSubmenu === idx ? "rotate-180" : ""
                            }`} 
                          />
                        </button>
                      )}
                    </div>

                    {/* Tablet Submenu */}
                    {item.submenu && activeSubmenu === idx && (
                      <div className="pl-4 space-y-2 border-l-2 border-blue-100">
                        {item.label === "Services" ? (
                          <div className="space-y-3">
                            {item.submenu.map((column, colIdx) => {
                              if ('label' in column && 'link' in column) {
                                return (
                                  <div key={colIdx}>
                                    <Link href={column.link}>
                                      <span className="text-sm font-medium text-gray-700 hover:text-[theme(color.brand.blue)] cursor-pointer">
                                        {column.label}
                                      </span>
                                    </Link>
                                  </div>
                                );
                              }
                              return (
                                <div key={colIdx} className="space-y-2">
                                  <div className="flex items-center justify-between">
                                    <h4 className="text-sm font-medium text-gray-800">{column.heading}</h4>
                                    <button
                                      onClick={() => toggleServiceSubmenu(colIdx)}
                                      className="text-gray-500 hover:text-[theme(color.brand.blue)] p-1"
                                    >
                                      <MdKeyboardArrowDown 
                                        className={`w-4 h-4 transition-transform duration-200 ${
                                          activeServiceSubmenu === colIdx ? "rotate-180" : ""
                                        }`} 
                                      />
                                    </button>
                                  </div>
                                  {activeServiceSubmenu === colIdx && (
                                    <ul className="pl-3 space-y-1 border-l border-gray-200">
                                      {column.services.map((service, subIdx) => (
                                        <li key={subIdx}>
                                          <Link href={service.link}>
                                            <span className="block text-sm text-gray-600 hover:text-[theme(color.brand.blue)] py-1 cursor-pointer">
                                              {service.label}
                                            </span>
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <ul className="space-y-1">
                            {item.submenu.map((subItem, subIdx) => (
                              <li key={subIdx}>
                                <Link href={('link' in subItem) ? subItem.link : '#'}>
                                  <span className="block text-sm text-gray-600 hover:text-[theme(color.brand.blue)] py-1 cursor-pointer">
                                    {('label' in subItem) ? subItem.label : subItem.heading}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t">
                <Link href="/contact">
                  <button className="w-full bg-[#25A8E0] text-white px-4 py-3 rounded-xl hover:bg-blue-400 flex items-center justify-center gap-2">
                    <span className="text-sm">Talk to Expert</span>
                    <FaArrowRight className="w-3 h-3" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden">
          <div className="bg-white border-t shadow-lg max-h-[80vh] overflow-y-auto">
            <div className="px-4 py-4">
              <ul className="space-y-3">
                {menuItems.map((item, idx) => (
                  <li key={idx} className="border-b border-gray-100 pb-3">
                    <div className="flex items-center justify-between">
                      <Link href={item.link}>
                        <span className="text-base font-medium text-gray-800 hover:text-[theme(color.brand.blue)] cursor-pointer">
                          {item.label}
                        </span>
                      </Link>
                      {item.submenu && (
                        <button
                          onClick={() => toggleSubmenu(idx)}
                          className="text-gray-600 hover:text-[theme(color.brand.blue)] p-2"
                        >
                          <MdKeyboardArrowDown 
                            className={`transition-transform duration-200 ${
                              activeSubmenu === idx ? "rotate-180" : ""
                            }`} 
                          />
                        </button>
                      )}
                    </div>

                    {/* Mobile Submenu */}
                    {item.submenu && activeSubmenu === idx && (
                      <div className="mt-3 pl-4 space-y-3 border-l-2 border-blue-100">
                        {item.label === "Services" ? (
                          <div className="space-y-4">
                            {item.submenu.map((column, colIdx) => {
                              if ('label' in column && 'link' in column) {
                                return (
                                  <div key={colIdx}>
                                    <Link href={column.link}>
                                      <span className="text-sm font-medium text-gray-700 hover:text-[theme(color.brand.blue)] cursor-pointer">
                                        {column.label}
                                      </span>
                                    </Link>
                                  </div>
                                );
                              }
                              return (
                                <div key={colIdx} className="space-y-2">
                                  <div className="flex items-center justify-between">
                                    <h4 className="text-sm font-semibold text-gray-800">{column.heading}</h4>
                                    <button
                                      onClick={() => toggleServiceSubmenu(colIdx)}
                                      className="text-gray-500 hover:text-[theme(color.brand.blue)] p-1"
                                    >
                                      <MdKeyboardArrowDown 
                                        className={`w-4 h-4 transition-transform duration-200 ${
                                          activeServiceSubmenu === colIdx ? "rotate-180" : ""
                                        }`} 
                                      />
                                    </button>
                                  </div>
                                  {activeServiceSubmenu === colIdx && (
                                    <ul className="pl-3 space-y-2 border-l border-gray-200">
                                      {column.services.map((service, subIdx) => (
                                        <li key={subIdx}>
                                          <Link href={service.link}>
                                            <span className="block text-sm text-gray-600 hover:text-[theme(color.brand.blue)] py-1 cursor-pointer">
                                              {service.label}
                                            </span>
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <ul className="space-y-2">
                            {item.submenu.map((subItem, subIdx) => (
                              <li key={subIdx}>
                                <Link href={('link' in subItem) ? subItem.link : '#'}>
                                  <span className="block text-sm text-gray-600 hover:text-[theme(color.brand.blue)] py-1 cursor-pointer">
                                    {('label' in subItem) ? subItem.label : subItem.heading}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t">
                <Link href="/contact">
                  <button className="w-full bg-[#25A8E0] text-white px-4 py-3 rounded-xl hover:bg-blue-400 flex items-center justify-center gap-2">
                    <span className="text-sm">Talk to Expert</span>
                    <FaArrowRight className="w-3 h-3" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};


export default Navbar;


































































// "use client";
// import React, { useState } from "react";
// import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
// import { MdKeyboardArrowDown } from "react-icons/md";
// import Image from "next/image";
// import Testriq_Logo from "../../../public/Testriq_Logo.png";

// // Define the type for submenu items (simple string list)
// type Submenu = string[] | { heading: string; services: string[] }[];

// // Define the type for a menu item
// interface MenuItem {
//   label: string;
//   submenu?: Submenu;
// }

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null); // State to track active submenu in mobile

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   const toggleSubmenu = (index: number) => {
//     // If the clicked submenu is already open, close it, otherwise open it
//     setActiveSubmenu(activeSubmenu === index ? null : index);
//   };

//   // Define menu items with proper types
//   const menuItems: MenuItem[] = [
//     { label: "Home" },
//     {
//       label: "Company",
//       submenu: ["About Us", "Our Team"],
//     },
//     {
//       label: "Services",
//       submenu: [
//         {
//           heading: "Testing Services",
//           services: [
//             "LaunchFast QA",
//             "Exploratory Testing",
//             "Web Application Testing",
//             "Desktop Application Testing",
//             "Mobile Application Testing",
//             "API Testing",
//           ],
//         },
//         {
//           heading: "Specialized Testing",
//           services: [
//             "IoT Device Testing",
//             "AI Application Testing",
//             "Robotics Testing",
//             "Smart Device Testing",
//             "ETL Testing",
//             "Security Testing",
//           ],
//         },
//         {
//           heading: "Quality Assurance",
//           services: [
//             "Manual Testing",
//             "Automation Testing",
//             "Regression Testing",
//             "Performance Testing",
//             "QA Documentation",
//             "Data Analysis",
//           ],
//         },
//         {
//           heading: "Specialized Testing",
//           services: [
//             "IoT Device Testing",
//             "AI Application Testing",
//             "Robotics Testing",
//             "Smart Device Testing",
//             "ETL Testing",
//             "Security Testing",
//           ],
//         },
//       ],
//     },
//     {
//       label: "QA Solutions",
//       submenu: [
//         "Ecommerce Testing Services",
//         "Automation Testing Services",
//         "Gaming App Testing Services",
//         "Manual Testing",
//         "Banking & Finance Testing Services",
//       ],
//     },
//     { label: "Tools" },
//     { label: "Our Clients" },
//     { label: "Jobs" },
//     { label: "Blog" },
//     { label: "Contact" },
//   ];

//   return (
//     <nav className="bg-white shadow-md px-4 sm:px-6 md:px-16 sticky top-0 z-50">
//       <div className="flex justify-between items-center px-2 sm:px-5 md:px-8 py-3 sm:py-4">
//         {/* Logo */}
//         <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
//           <Image
//             src={Testriq_Logo}
//             alt="Testriq_Logo"
//             height={100}
//             width={120}
//           />
//         </h2>

//         {/* Desktop Menu */}
//         <ul className="hidden xl:flex space-x-6 2xl:space-x-4 w-max-screen-xl text-gray-700 text-sm xl:text-base relative">
//           {menuItems.map((item, idx) => (
//             <li key={idx} className="relative group cursor-pointer">
//               <div className="flex items-center gap-1 hover:text-[theme(color.brand.blue)] px-2 py-1">
//                 {item.label}
//                 {item.submenu && <MdKeyboardArrowDown />}
//               </div>

//               {/* Mega Menu for 'Services' */}
//               {item.label === "Services" && item.submenu && (
//                 <div className="absolute top-full mt-0 left-0 right-0 ml-[calc(-35vw+100%)] xl:ml-[calc(-39vw+100%)] bg-white shadow-lg z-[60] translate-y-4 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 w-screen pointer-events-none group-hover:pointer-events-auto">
//                   <div className="w-full mx-auto grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-8 py-6 xl:py-8 px-4 xl:px-6 ml-8 xl:ml-24">
//                     {item.submenu.map((column, colIdx) => {
//                       // Check if the column is of type { heading: string, services: string[] }
//                       if (typeof column === "string") {
//                         return (
//                           <div key={colIdx} className="space-y-3 xl:space-y-4">
//                             <h2 className="text-base xl:text-lg font-semibold text-gray-800">
//                               {column}
//                             </h2>
//                           </div>
//                         );
//                       }

//                       // If it's the complex object, render the heading and services
//                       return (
//                         <div key={colIdx} className="space-y-3 xl:space-y-4">
//                           <h2 className="text-base xl:text-lg font-semibold text-gray-800">
//                             {column.heading}
//                           </h2>
//                           <div className="flex flex-row">
//                             <ul className="space-y-2 xl:space-y-4">
//                               {column.services.map((service, subIdx) => (
//                                 <li
//                                   key={subIdx}
//                                   className="text-sm xl:text-base text-gray-600 hover:text-[theme(color.brand.blue)]"
//                                 >
//                                   {service}
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               )}

//               {/* Dropdown for other items */}
//               {item.submenu && item.label !== "Services" && (
//                 <ul className="absolute top-full left-0 bg-white shadow-md rounded-md py-2 w-max z-[55] translate-y-4 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
//                   {item.submenu.map((subItem, subIdx) => (
//                     // Here, we conditionally render subItem based on its type
//                     <li
//                       key={subIdx}
//                       className="px-4 py-2 hover:bg-blue-50 hover:text-[theme(color.brand.blue)] text-sm xl:text-base text-gray-600"
//                     >
//                       {typeof subItem === "string" ? subItem : subItem.heading}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Tablet Menu (simplified horizontal) */}
//         <div className="hidden md:flex xl:hidden items-center">
//           <button
//             className="text-gray-700 text-xl p-2"
//             onClick={toggleMenu}
//             aria-label="Toggle menu"
//           >
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Actions */}
//         <div className="hidden xl:flex items-center gap-3 2xl:gap-4">

//           <button className="bg-[#25A8E0] text-white px-3 xl:px-4 py-2 rounded-xl hover:bg-blue-400 flex items-center gap-2">
//             <span className="text-sm xl:text-base">Talk to Expert</span>
//             <FaArrowRight className="w-3 h-3 xl:w-4 xl:h-5" />
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-gray-700 text-xl"
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Tablet Dropdown Menu */}
//       {menuOpen && (
//         <div className="hidden md:block xl:hidden px-4 pb-4 border-t">
//           <div className="grid grid-cols-2 gap-4 py-4">
//             {menuItems.map((item, idx) => (
//               <div key={idx} className="relative group">
//                 <div className="flex items-center gap-1 cursor-pointer text-gray-700 hover:text-[theme(color.brand.blue)] p-2 rounded-md hover:bg-gray-50">
//                   <span className="text-md font-medium ">{item.label}</span>
//                   {item.submenu && <MdKeyboardArrowDown />}
//                 </div>

//                 {/* Tablet Submenu */}
//                 {item.submenu && (
//                   <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-64 z-[60] translate-y-4 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
//                     {item.label === "Services" && item.submenu ? (
//                       <div className="grid grid-cols-1 gap-2 p-3">
//                         {item.submenu.map((column, colIdx) => {
//                           if (typeof column === "string") {
//                             return (
//                               <div key={colIdx} className="py-1">
//                                 <h3 className="text-sm font-semibold text-gray-700 hover:text-[theme(color.brand.blue)]">
//                                   {column}
//                                 </h3>
//                               </div>
//                             );
//                           }
//                           return (
//                             <div key={colIdx} className="py-1">
//                               <h3 className="text-sm font-semibold text-gray-700 mb-1">
//                                 {column.heading}
//                               </h3>
//                               <ul className="space-y-1 ml-2">
//                                 {column.services
//                                   .slice(0, 3)
//                                   .map((service, subIdx) => (
//                                     <li
//                                       key={subIdx}
//                                       className="pt-2 text-sm text-gray-700 hover:text-[theme(color.brand.blue)] cursor-pointer"
//                                     >
//                                       {service}
//                                     </li>
//                                   ))}
//                               </ul>
//                             </div>
//                           );
//                         })}
//                       </div>
//                     ) : (
//                       <ul className="py-1">
//                         {item.submenu.map((subItem, subIdx) => (
//                           <li
//                             key={subIdx}
//                             className="px-4 py-2 hover:bg-blue-50 text-sm text-gray-600 hover:text-[theme(color.brand.blue)] cursor-pointer"
//                           >
//                             {typeof subItem === "string"
//                               ? subItem
//                               : subItem.heading}
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           <div className="flex items-center justify-between pt-4 border-t">
//             <button className="bg-[#25A8E0] text-white px-4 py-2 rounded-xl hover:bg-blue-400 flex items-center gap-2">
//               <span className="text-sm">Talk to Expert</span>
//               <FaArrowRight className="w-3 h-3" />
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Mobile Menu Items */}
//       {menuOpen && (
//         <div className="md:hidden px-4 pb-4">
//           <ul className="space-y-3 text-gray-700">
//             {menuItems.map((item, idx) => (
//               <li
//                 key={idx}
//                 className="hover:text-[theme(color.brand.blue)] cursor-pointer"
//               >
//                 <div
//                   className="flex items-center justify-between p-2 rounded-md hover:bg-gray-50"
//                   onClick={() => item.submenu && toggleSubmenu(idx)} // Toggle submenu visibility on click
//                 >
//                   <span className="text-base font-medium">{item.label}</span>
//                   {item.submenu && (
//                     <MdKeyboardArrowDown
//                       className={`transition-transform ${
//                         activeSubmenu === idx ? "rotate-180" : ""
//                       }`}
//                     />
//                   )}
//                 </div>

//                 {/* Submenu for mobile (conditionally render if it's active) */}
//                 {item.submenu && activeSubmenu === idx && (
//                   <div className="pl-4 mt-2 space-y-2 bg-gray-50 rounded-md p-3">
//                     {item.label === "Services" && item.submenu ? (
//                       <div className="space-y-3">
//                         {item.submenu.map((column, colIdx) => {
//                           if (typeof column === "string") {
//                             return (
//                               <div key={colIdx}>
//                                 <h3 className="text-sm font-semibold text-gray-800">
//                                   {column}
//                                 </h3>
//                               </div>
//                             );
//                           }
//                           return (
//                             <div key={colIdx}>
//                               <h3 className="text-md font-semibold text-gray-800 mb-2">
//                                 {column.heading}
//                               </h3>
//                               <ul className="space-y-1 ml-2">
//                                 {column.services.map((service, subIdx) => (
//                                   <li
//                                     key={subIdx}
//                                     className="text-sm text-gray-600 hover:text-[theme(color.brand.blue)] py-1"
//                                   >
//                                     {service}
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>
//                           );
//                         })}
//                       </div>
//                     ) : (
//                       <ul className="space-y-2">
//                         {item.submenu.map((subItem, subIdx) => (
//                           <li
//                             key={subIdx}
//                             className="text-sm text-gray-600 hover:text-[theme(color.brand.blue)] p-1"
//                           >
//                             {typeof subItem === "string"
//                               ? subItem
//                               : subItem.heading}
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>

//           <div className="mt-6 flex flex-col gap-4 pt-4 border-t">
//             <button className="bg-[#25A8E0] text-white px-4 py-2 rounded-xl hover:bg-blue-400 flex items-center justify-center gap-2">
//               <span className="text-sm">Talk to Expert</span>
//               <FaArrowRight className="w-3 h-3" />
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
