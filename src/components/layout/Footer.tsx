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
    { name: 'About Us', href: '#' },
    { name: 'Our Clients', href: '#' },
    { name: 'Case Studies', href: '#' },
    { name: 'Blogs', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact Us', href: '#' }
  ]


  return (
    <footer className='w-screen-3xl bg-gray-300 md:px-16'>
      <section className='flex flex-col lg:px-8 md:py-16 pt-10'>
        <div className='flex flex-col md:flex-row ml-8 text-[#59585B] gap-10'>
          <div className='lg:w-md '>
            <div>
              <Image
                src={Testriq_Logo}
                alt='Testriq-Logo'
                width={100}
                height={100}
              />
            </div>

            <div className='mt-3'>
              <p>
                Premium software testing services with over a decade of
                experience. ISTQB certified experts providing comprehensive QA
                solutions.
              </p>
            </div>

            <div className='flex mt-2'>
              <IoLocation className='w-10 mt-1 mr-1' />
              <p>
                Office Number 2 & 3, 2nd Floor, Ashley Towers, Kanakia Rd, Vagad Nagar, Beverly Park, Mira Road East, Mira Bhayandar, Maharashtra 401107
              </p>
            </div>

            <div className='flex mt-2'>
              <FaPhoneAlt className='mt-1 mr-2' />
              <a href="#" className=' hover:text-sky-500 transition duration-200 ease-in-out'>
                (+91) 915-2929-343
              </a>
            </div>

            <div className='flex mt-2'>
              <IoIosMail className='mr-1 mt-1' size={20} />
              <a href="#" className=' hover:text-sky-500 transition duration-200 ease-in-out'>contact@testriq.com</a>
            </div>
          </div>

          <div className='flex flex-col md:ml-5 w-sm'>

            <h3 className="text-xl font-bold mb-4 text-sky-500">Core Service</h3>
            <ul className='space-y-2'>
              {
                coreService.map((link) => {
                  return <li key={link.name}>
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                })
              }
            </ul>
          </div>

          <div className='flex flex-col w-sm'>

            <h3 className="text-xl font-bold mb-4 text-sky-500">Specialized Testing</h3>
            <ul className='space-y-2'>
              {
                specializedTesting.map((link) => {
                  return <li key={link.name}>
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                })
              }
            </ul>
          </div>

          <div className='flex flex-col w-sm'>

            <h3 className="text-xl font-bold mb-4 text-sky-500">Quick Links</h3>
            <ul className='space-y-2'>
              {
                quickLinks.map((link) => {
                  return <li key={link.name}>
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                })
              }
            </ul>
          </div>

        </div>

        <div className='mt-3'>
        <hr className='w-full text-sky-500' />
        </div>
        
        <div className='flex flex-col md:flex-row text-[#59585B] mt-8 justify-between'>
          
          <div className='text-center'>
            <p>&copy; 2024 Testriq QA LAB LLP. All Rights Reserved</p>
          </div>

          <div className='flex gap-5 justify-center mt-5 mb-10'>
            <a href="#" className='hover:text-sky-500 transition duration-200 ease-in-out'>Privacy Policy</a>
            <a href="#" className='hover:text-sky-500 transition duration-200 ease-in-out'>Terms Of Service</a>
            <a href="#" className='hover:text-sky-500 transition duration-200 ease-in-out'>Sitemap</a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
