// components/Footer.tsx
import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-zinc-950">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between m-2">
          <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src="/assets/LogoFoot.png" className="h-16" alt="tos Logo" />
            
          </a>
          <div className="flex flex-wrap items-center mb-6 text-lg font-medium text-white sm:mb-0">
           
              <Link href="#services" className="hover:underline me-4 md:me-6">Services</Link>
            
            
              <Link href="#about-us" className="hover:underline me-4 md:me-6">About Us</Link>
          
              <Link href="#technologies" className="hover:underline me-4 md:me-6">Technologies</Link>
          
            
              <Link href="#faq" className="hover:underline">FAQ's</Link>
           
         </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-md text-white sm:text-center ">
          © {new Date().getFullYear()} <a href="/" className="hover:underline">Totally Optimized Solutions</a>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
