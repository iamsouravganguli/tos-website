import React from 'react';
import Link from 'next/link'; 
import { aboutUsData } from '@/data/index';

export function AboutSection() {
  const { title, description } = aboutUsData;

  return (
   <section className='md:grid bg-white text-black  max-h-screen py-16 px-6 md:px-12' id='about-us'>
     <div >
      <div className='flex flex-col md:flex-row items-center justify-center gap-12 xl:gap-40 ' >
      {/* Image Content */}
      <div className="flex-1 max-w-lg mx-auto md:mx-0 order-2 md:order-1 flex justify-center">
        <img 
          src='/assets/about_us.jpg' 
          alt="About Us" 
          className="w-full max-w-lg h-auto object-cover rounded-lg shadow-lg" 
        />
      </div>

      {/* Text Content */}
      <div className="flex-1 max-w-lg mx-auto md:mx-12 order-1 md:order-2 text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">{title}</h2> 
        <p className="text-base md:text-lg lg:text-xl mb-6"> 
          {description}
        </p>
        <Link 
          href="#contact" 
          className="text-blue-600 hover:underline flex items-center gap-2 text-base md:text-lg"
        >
          Get in Touch
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-4 h-4 md:w-5 md:h-5 text-blue-600"  
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
    </div>
   </section>
  );
}
