"use client";
// import React, { useState, useRef, useEffect } from "react";
// import Link from "next/link";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { navbarData } from "@/data";

// export const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const menuRef = useRef<HTMLDivElement>(null);

//   const handleClickOutside = (event: MouseEvent) => {
//     if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
//       setIsOpen(false);
//     }
//   };

//   const handleScroll = () => {
//     setIsScrolled(window.scrollY > 0);
//   };

//   useEffect(() => {
//     if (isOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isOpen]);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <nav
//       className={`bg-white fixed w-full z-20 top-0 border-b border-gray-200 overflow-x-hidden ${
//         isScrolled ? "shadow-md" : ""
//       }`}
//     >
//       <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
//         {/* Logo Section */}
//         <div className="flex-shrink-0">
//           <Link href="/">
//             <img
//               src="/assets/LogoNav.png"
//               alt="YourLogo"
//               className="h-8 md:h-10 w-auto cursor-pointer"
//             />
//           </Link>
//         </div>

//         {/* Center Section: Navigation Links */}
//         <div className="hidden md:flex flex-grow justify-center lg:space-x-6 md:space-x-3 ">
//           {navbarData.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               className="text-gray-900 lg:text-lg xl:text-xl md:text-sm hover:font-medium transition-all duration-50 ease-in-out"
//             >
//               {item.label}
//             </Link>
//           ))}
//         </div>

//         {/* Right Section: Buttons */}
//         <div className="hidden md:flex items-center space-x-3">
//           <Link href="/career">
//             <button className="relative inline-flex items-center justify-center lg:px-7 md:px-3 py-2 overflow-hidden tracking-tighter text-black bg-white rounded-md border border-violet-400 group transition-all duration-300 ease-in-out">
//               <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-medium-light rounded-full group-hover:w-56 group-hover:h-56"></span>
//               <span className="relative md:text-sm lg:text-base xl:text-xl font-medium group-hover:text-white transition-colors duration-300 ease-in-out">
//                 Careers
//               </span>
//             </button>
//           </Link>

//           <Link href="/#contact-us">
//             <button className="text-white md:text-sm lg:text-lg  bg-medium-light hover:bg-white hover:text-dark font-semibold rounded-md py-2 px-4 shadow duration-700 border border-medium">
//               Contact Us
//             </button>
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           type="button"
//           className="md:hidden p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <span className="sr-only">Open main menu</span>
//           {isOpen ? (
//             <FaTimes className="w-6 h-6" />
//           ) : (
//             <FaBars className="w-6 h-6" />
//           )}
//         </button>
//       </div>

//       {/* Mobile Drawer Menu from Top */}
//       <div
//         ref={menuRef}
//         className={`fixed top-0 left-0 w-full bg-white shadow-md transition-transform transform ${
//           isOpen ? "translate-y-0" : "-translate-y-full"
//         } ease-in-out duration-300 `}
//       >
//         <ul className="flex flex-col p-4 font-medium border-b border-gray-100 bg-white">
//           {navbarData.map((item) => (
//             <li key={item.href}>
//               <Link
//                 href={item.href}
//                 className="block py-2 px-3 text-black rounded hover:bg-gray-200 transition-all duration-500 ease-in-out"
//               >
//                 {item.label}
//               </Link>
//             </li>
//           ))}
//           <div className="flex flex-row gap-1 mx-2 mt-4">
//             <li>
//               <Link href="/career">
//                 <button className="relative inline-flex items-center justify-center px-7 py-2 overflow-hidden tracking-tighter text-black bg-white border border-violet-400 rounded-md group transition-all duration-300 ease-in-out">
//                   <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-medium-light rounded-full group-hover:w-56 group-hover:h-56"></span>
//                   <span className="relative text-base font-semibold group-hover:text-white transition-colors duration-300 ease-in-out">
//                     Careers
//                   </span>
//                 </button>
//               </Link>
//             </li>
//             <li>
//               <Link href="/#contact-us">
//                 <button className="text-white bg-medium-light hover:bg-white hover:text-dark font-semibold rounded-md py-2 px-4 shadow duration-700 border border-medium">
//                   Contact Us
//                 </button>
//               </Link>
//             </li>
//             {/* <button type="button" className="md:hidden p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
//     <span className="sr-only">Open main menu</span>
//     <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 352 512" className="w-6 h-6 text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//     <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
//     </svg>
//   </button> */}
//           </div>
//         </ul>
//       </div>
//     </nav>
//   );
// };

import React, { useState, useRef, useEffect } from "react";
import { Mail,Phone } from 'lucide-react';
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
      className={`bg-white fixed w-full z-20 left-0 top-0 border-b border-gray-200 overflow-x-hidden ${
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
              className="h-8 md:h-10 w-auto cursor-pointer"
            />
          </Link>
        </div>

        {/* Center Section: Navigation Links */}
        <div className="hidden md:flex flex-grow justify-center lg:space-x-6 md:space-x-3 ">
          {navbarData.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-900 lg:text-lg xl:text-xl md:text-sm hover:font-medium transition-all duration-50 ease-in-out"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right Section: Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Link href="/career">
            <button className="relative inline-flex items-center justify-center lg:px-7 md:px-3 py-2 overflow-hidden tracking-tighter text-black bg-white rounded-md border border-violet-400 group transition-all duration-300 ease-in-out">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-medium-light rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="relative md:text-sm lg:text-lg xl:text-xl font-medium group-hover:text-white transition-colors duration-300 ease-in-out">
                Careers
              </span>
            </button>
          </Link>

          <Link href="/#contact-us">
            <button className="text-white md:text-sm lg:text-lg  bg-medium-light hover:bg-white hover:text-dark font-semibold rounded-md py-2 px-4 shadow duration-700 border border-medium">
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
            <p></p>
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu from Top */}
      {/* <div
        ref={menuRef}
        className={`fixed top-0 left-0 w-full bg-white md:hidden  shadow-md transition-transform transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } ease-in-out duration-300 `}
      >
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          <Link href="/">
            <img
              src="/assets/LogoNav.png"
              alt="YourLogo"
              className="h-8 w-auto cursor-pointer"
            />
          </Link>
          <button
            type="button"
            className="p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={() => setIsOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <FaTimes className="w-6 h-6" />
          </button>
        </div>
        <ul className="flex flex-col p-4 font-medium  bg-white">
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
                <button className="relative inline-flex items-center justify-center px-7 py-2 overflow-hidden tracking-tighter text-black bg-white border border-violet-400 rounded-md group transition-all duration-300 ease-in-out">
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-medium-light rounded-full group-hover:w-56 group-hover:h-56"></span>
                  <span className="relative text-base font-semibold group-hover:text-white transition-colors duration-300 ease-in-out">
                    Careers
                  </span>
                </button>
              </Link>
            </li>
            <li>
              <Link href="/#contact-us">
                <button className="text-white bg-medium-light hover:bg-white hover:text-dark font-semibold rounded-md py-2 px-4 shadow duration-700 border border-medium">
                  Contact Us
                </button>
              </Link>
            </li>
          </div>
        </ul>
      </div> */}
      <>
  {/* Overlay */}
  {isOpen && (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 md:hidden"
      onClick={() => setIsOpen(false)}
    />
  )}
  <div
  ref={menuRef}
  className={`fixed top-0 left-0 w-64 h-full bg-white shadow-md transition-transform duration-700 transform ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  } ease-in-out z-50 md:hidden`}
>
  {/* Sidebar Content */}
  <div className="flex items-center justify-between border-b border-gray-200 p-4">
    <Link href="/">
      <img
        src="/assets/LogoNav.png"
        alt="YourLogo"
        className="h-8 w-auto cursor-pointer"
      />
    </Link>
    <button
      type="button"
      className="p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      onClick={() => setIsOpen(false)}
    >
      <span className="sr-only">Close menu</span>
      <FaTimes className="w-6 h-6" />
    </button>
  </div>
  <ul className="flex flex-col p-4 font-medium bg-white">
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
          <button className="relative inline-flex items-center justify-center px-5 md:px-7 py-2 overflow-hidden tracking-tighter text-black bg-white border border-violet-400 rounded-md group transition-all duration-300 ease-in-out">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-medium-light rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="relative text-sm md:text-base font-semibold group-hover:text-white transition-colors duration-300 ease-in-out">
              Careers
            </span>
          </button>
        </Link>
      </li>
      <li>
        <Link href="/#contact-us">
          <button className="text-white bg-medium-light hover:bg-white hover:text-dark font-semibold rounded-md text-sm md:text-base py-2 px-2 shadow duration-700 border border-medium">
            Contact Us
          </button>
        </Link>
      </li>
    </div>
  </ul>
</div>

</>

    </nav>
  );
};