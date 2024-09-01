// components/AboutSection.tsx

import React from 'react';
import Link from 'next/link'; 
import { aboutUsData } from '@/data/index';

export function AboutSection() {
  const { title, description } = aboutUsData;

  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-32  min-h-screen bg-white pt-24' >
      {/* Image Content */}
      <div className="flex-1 max-w-lg mx-auto md:mx-0 order-2 md:order-1 flex justify-center">
        <img 
          src='/assets/about_us.jpg' 
          alt="About Us" 
          className="w-[120%] h-full max-h-[200vh] max-w-[120%] object-cover rounded-lg shadow-lg" 
        />
      </div>

      {/* Text Content */}
      <div className="flex-1 max-w-lg mx-auto md:mx-12 order-1 md:order-2 text-left">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">{title}</h2> 
        <p className="text-md md:text-lg lg:text-xl mb-6"> 
          {description}
        </p>
        <Link 
          href="#contact" 
          className="text-blue-600 hover:underline flex items-center gap-2 text-lg md:text-xl"
        >
          Get in Touch
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-5 h-5 text-blue-600"  
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
