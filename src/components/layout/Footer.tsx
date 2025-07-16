import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Testriq_Logo from '../../../public/Testriq_Logo.png';
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {

  const coreService = [
    { name: 'LaunchFast QA', href: '#' },
    { name: 'Web Application Testing', href: '#' },
    { name: 'Mobile App Testing', href: '#' },
    { name: 'Api Testing', href: '#' },
    { name: 'Performance Testing', href: '#' },
    { name: 'Automation Testing', href: '#' },

  ]

  const specializedTesting = [
    { name: 'Ai Application Testing', href: '#' },
    { name: 'IoT Device Testing', href: '#' },
    { name: 'Security Testing', href: '#' },
    { name: 'Robotics Testing', href: '#' },
    { name: 'Smart Device Testing', href: '#' },
    { name: 'ETL Testing', href: '#' }
  ]
  const quickLinks = [
    { name: 'About Us', href: '/about-us' },
    { name: 'Our Team', href: '/our-team' },
    { name: 'Our Clients', href: '#' },
    { name: 'Case Studies', href: '#' },
    { name: 'Blogs', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact Us', href: '#' }
  ]


  return (
    <footer className='w-full bg-gray-300 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <section className='py-10 md:py-16'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-[#59585B]'>
            
            {/* Company Info Section */}
            <div className='lg:col-span-1'>
              <Image
                src={Testriq_Logo}
                alt='Testriq-Logo'
                width={100}
                height={100}
                className='mb-4'
              />

              <p className='mb-4 text-sm leading-relaxed'>
                Premium software testing services with over a decade of
                experience. ISTQB certified experts providing comprehensive QA
                solutions.
              </p>

              <div className='space-y-3'>
                <div className='flex items-start gap-2'>
                  <IoLocation className='w-5 h-5 mt-1 flex-shrink-0' />
                  <span className='text-sm'>
                    Office Number 2 & 3, 2nd Floor, Ashley Towers, Kanakia Rd, Vagad Nagar, Beverly Park, Mira Road East, Mira Bhayandar, Maharashtra 401107
                  </span>
                </div>

                <div className='flex items-center gap-2'>
                  <FaPhoneAlt className='w-4 h-4 flex-shrink-0' />
                  <a href="tel:+91 915-2929-343" className='text-sm hover:text-sky-500 transition duration-200 ease-in-out'>
                    (+91) 915-2929-343
                  </a>
                </div>

                <div className='flex items-center gap-2'>
                  <IoIosMail className='w-5 h-5 flex-shrink-0' />
                  <a href="mailto:contact@testriq.com" className='text-sm hover:text-sky-500 transition duration-200 ease-in-out'>
                    contact@testriq.com
                  </a>
                </div>
              </div>
            </div>

            {/* Core Services Section */}
            <div className=''>
              <h3 className="text-lg font-bold mb-4 text-sky-500">Core Service</h3>
              <ul className='space-y-2'>
                {coreService.map((link) => (
                  <li key={link.name} className='transition duration-200 hover:text-sky-500'>
                    <Link href={link.href} className='text-sm'>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specialized Testing Section */}
            <div className=''>
              <h3 className="text-lg font-bold mb-4 text-sky-500">Specialized Testing</h3>
              <ul className='space-y-2'>
                {specializedTesting.map((link) => (
                  <li key={link.name} className='transition duration-200 hover:text-sky-500'>
                    <Link href={link.href} className='text-sm'>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links Section */}
            <div className=''>
              <h3 className="text-lg font-bold mb-4 text-sky-500">Company</h3>
              <ul className='space-y-2'>
                {quickLinks.map((link) => (
                  <li key={link.name} className='transition duration-200 hover:text-sky-500'>
                    <Link href={link.href} className='text-sm'>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Divider */}
          <div className='mt-8 pt-8 border-t border-gray-400'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4 text-[#59585B]'>
              
              <div className='text-center md:text-left'>
                <p className='text-sm'>&copy; 2025 Testriq QA LAB LLP. All Rights Reserved</p>
              </div>

              <div className='flex flex-wrap justify-center md:justify-end gap-4'>
                <a href="#" className='text-sm hover:text-sky-500 transition duration-200 ease-in-out'>Privacy Policy</a>
                <a href="#" className='text-sm hover:text-sky-500 transition duration-200 ease-in-out'>Terms Of Service</a>
                <a href="#" className='text-sm hover:text-sky-500 transition duration-200 ease-in-out'>Sitemap</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;

