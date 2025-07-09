import React from 'react';
import Image from 'next/image';
import Testriq_Logo from '../../../public/Testriq_Logo.png';
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className='w-screen-3xl bg-gray-300 md:px-16'>
      <section className='md:px-8 md:py-16'>
        <div className='flex text-[#59585B] gap-8'>
          <div className='w-3xl'>
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

          <div className='flex flex-col w-xl'>
            <div>
              <h3 className='text-2xl text-sky-500'>Core Services</h3>
            </div>

            <div className='flex flex-col leading-7 mt-2'>
              <a href="#" className='hover:text-sky-500 transition duration-200 ease-in-out'>LaunchFast QA</a>
              <a href="#" className='hover:text-sky-500 transition duration-200 ease-in-out'>Web Application Testing</a>
              <a href="#" className='hover:text-sky-500 transition duration-200 ease-in-out'>Mobile App Testing</a>
              <a href="#" className='hover:text-sky-500 transition duration-200 ease-in-out'>Api Testing</a>
              <a href="#" className='hover:text-sky-500 transition duration-200 ease-in-out'>Performance Testing</a>
              <a href="#" className='hover:text-sky-500 transition duration-200 ease-in-out'>Automation Testing</a>
            </div>
          </div>

          <div className='flex flex-col w-xl'>
            <div>
              <h3 className='text-2xl text-sky-500'>Specialized Testing</h3>
            </div>

            <div>
              <div className='flex flex-col leading-7 mt-2'>
              <a href="#" className='hover:text-sky-500 transition duration-200 ease-in-out'>Ai Application Testing</a>
              <a href="#" className='hover:text-sky-500 transition duration-200 ease-in-out'>IoT Device Testing</a>
              <a href="#" className='hover:text-sky-500 transition duration-200 ease-in-out'>Security Testing</a>
              <a href="#" className='hover:text-sky-500 transition duration-200 ease-in-out'>Robotics Testing</a>
              <a href="#" className='hover:text-sky-500 transition duration-200 ease-in-out'>Smart Device Testing</a>
              <a href="#" className='hover:text-sky-500 transition duration-200 ease-in-out'>ETL Testing</a>
            </div>
            </div>
          </div>

          <div className='flex flex-col w-xl'>
            <div>
              <h3 className='text-2xl text-sky-500'>Company</h3>
            </div>

            <div>
              <div className='flex flex-col leading-7 mt-2'>
              <a href="#" className='hover:text-sky-500 transition duration-200 ease-in-out'>About Us</a>
              <a href="#" className='hover:text-sky-500 transition duration-200 ease-in-out'>Our Clients</a>
              <a href="#" className='hover:text-sky-500 transition duration-200 ease-in-out'>Case Studies</a>
              <a href="#" className='hover:text-sky-500 transition duration-200 ease-in-out'>Blogs</a>
              <a href="#" className='hover:text-sky-500 transition duration-200 ease-in-out'>Careers</a>
              <a href="#" className='hover:text-sky-500 transition duration-200 ease-in-out'>Contact Us</a>
            </div>
            </div>
          </div>

        </div>
      </section>
    </footer>
  );
};

export default Footer;
