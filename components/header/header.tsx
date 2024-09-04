'use client'
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navbarData } from '@/data';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-[#fff] fixed w-full z-20 top-0 border-b border-gray-200 overflow-x-hidden ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img
              src="/assets/LogoNav.png"
              alt="YourLogo"
              className="h-8 md:h-14 w-auto cursor-pointer ml-1"
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

      {/* Mobile Drawer Menu from Top */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 w-full bg-[#fff] shadow-md transition-transform transform ${
          isOpen ? 'translate-y-[4.55rem]' : '-translate-y-full '
        } ease-in-out duration-300 `}
      >





        <ul className="flex flex-col p-4 font-medium border-b border-gray-100 bg-white">
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
          <div className="flex flex-row gap-1 mx-2 mt-4">
            <li>
              <Link href="/careers">
                <span className="block text-md m-1 px-4 py-2 border border-medium text-light rounded hover:bg-blue-100 hover:font-semibold w-fit transition-all duration-500 ease-in-out">
                  Careers
                </span>
              </Link>
            </li>
            <li>
              <Link href="#contact-us">
                <span className="block text-md m-1 px-4 py-2 bg-medium-light text-white rounded hover:bg-medium hover:font-semibold w-fit transition-all duration-500 ease-in-out">
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
