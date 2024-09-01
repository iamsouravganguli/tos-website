// components/Navbar.tsx
'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navbarData } from '@/data';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full z-20 top-0 border-b border-gray-200 overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img
              src="/assets/LogoNav.png"
              alt="YourLogo"
              className="h-8 md:h-14 w-auto cursor-pointer"
            />
          </Link>
        </div>

        {/* Center Section: Navigation Links */}
        <div className="hidden md:flex flex-grow justify-center space-x-6">
          {navbarData.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-900 md:text-xl text-lg hover:font-semibold transition-all duration-50 ease-in-out"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right Section: Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Link href="/careers">
            <span className="text-md px-4 py-2 border-2 border-blue-700 text-blue-700 rounded-md hover:bg-blue-700 hover:text-white hover:font-semibold transition-all duration-500 ease-in-out">
              Careers
            </span>
          </Link>
          <Link href="#contact-us">
            <span className="text-md px-4 py-2 border-2 border-blue-700 bg-blue-700 text-white rounded-md hover:bg-blue-800 hover:font-semibold transition-all duration-500 ease-in-out">
              Contact Us
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? <FaTimes className="w-6 h-6 text-xl" /> : <FaBars className="w-6 h-6 text-xl" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-16 left-0 w-full bg-white shadow-md ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col p-4 font-medium border border-gray-100 rounded-lg bg-gray-50">
          {navbarData.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block py-2 px-3 text-black rounded hover:bg-gray-200 transition-all duration-500 ease-in-out"
              >
                {item.label}
              </Link>
            </li>
          ))}
         <div className='flex flex-row gap-1 mx-2'>
         <li>
            <Link href="/careers">
              <span className="block text-md m-1 px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-100 hover:font-semibold w-fit transition-all duration-500 ease-in-out">
                Careers
              </span>
            </Link>
          </li>
          <li>
            <Link href="#contact-us">
              <span className="block text-md m-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 hover:font-semibold w-fit transition-all duration-500 ease-in-out">
                Contact Us
              </span>
            </Link>
          </li>
         </div>
        </ul>
      </div>
    </nav>
  );
};
