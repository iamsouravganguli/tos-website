"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { navbarData } from "@/data";

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
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-[#fff] fixed w-full z-20 top-0 border-b border-gray-200 overflow-x-hidden ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img
              src="/assets/LogoNav.png"
              alt="YourLogo"
              className="h-8 md:h-12 w-auto cursor-pointer ml-1"
            />
          </Link>
        </div>

        {/* Center Section: Navigation Links */}
        <div className="hidden md:flex flex-grow justify-center space-x-6 ml-24">
          {navbarData.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-900  text-lg hover:font-medium transition-all duration-50 ease-in-out"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right Section: Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Link href="/career">
            <button className="relative inline-flex items-center justify-center px-7 py-2 overflow-hidden tracking-tighter text-black bg-white rounded-md border border-violet-400 group transition-all duration-300 ease-in-out">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-medium-light rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute bottom-0 left-0 h-full -ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-auto h-full opacity-100 object-stretch"
                  viewBox="0 0 487 487"
                >
                  <path
                    fillOpacity=".1"
                    fillRule="nonzero"
                    fill="#FFF"
                    d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                  ></path>
                </svg>
              </span>
              <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="object-cover w-full h-full"
                  viewBox="0 0 487 487"
                >
                  <path
                    fillOpacity=".1"
                    fillRule="nonzero"
                    fill="#FFF"
                    d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                  ></path>
                </svg>
              </span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200 group-hover:bg-medium-light transition-all duration-300 ease-in-out"></span>
              <span className="relative text-base font-medium group-hover:text-white transition-colors duration-300 ease-in-out">
                Careers
              </span>
            </button>
          </Link>

          <Link href="/#contact-us">
            <button className="text-white bg-medium-light hover:bg-white hover:text-dark font-semibold backdrop-blur-lg rounded-md py-2 px-4 shadow hover:shadow-dark duration-700 border border-medium">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <FaTimes className="w-6 h-6 text-xl" />
          ) : (
            <FaBars className="w-6 h-6 text-xl" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu from Top */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 w-full bg-[#fff] shadow-md transition-transform transform ${
          isOpen ? "translate-y-[4.55rem]" : "-translate-y-full "
        } ease-in-out duration-300 `}
      >
        <ul className="flex flex-col p-4 font-medium border-b border-gray-100 bg-white ">
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
              <Link href="/career">
                <button className="relative inline-flex items-center justify-center px-7 py-2 overflow-hidden tracking-tighter text-black bg-white border  border-violet-400 rounded-md group transition-all duration-300 ease-in-out ">
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-medium-light rounded-full group-hover:w-56 group-hover:h-56"></span>
                  <span className="absolute bottom-0 left-0 h-full -ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-auto h-full opacity-100 object-stretch"
                      viewBox="0 0 487 487"
                    >
                      <path
                        fillOpacity=".1"
                        fillRule="nonzero"
                        fill="#FFF"
                        d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                      ></path>
                    </svg>
                  </span>
                  <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="object-cover w-full h-full"
                      viewBox="0 0 487 487"
                    >
                      <path
                        fillOpacity=".1"
                        fillRule="nonzero"
                        fill="#FFF"
                        d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                      ></path>
                    </svg>
                  </span>
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200 group-hover:bg-medium-light transition-all duration-300 ease-in-out"></span>
                  <span className="relative text-base font-semibold group-hover:text-white transition-colors duration-300 ease-in-out">
                    Careers
                  </span>
                </button>
              </Link>
            </li>
            <li>
              <Link href="/#contact-us">
                <button className="text-white bg-medium-light hover:bg-white hover:text-dark font-semibold backdrop-blur-lg rounded-md py-2 px-4 shadow hover:shadow-dark duration-700 border border-medium">
                  Contact Us
                </button>
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};
