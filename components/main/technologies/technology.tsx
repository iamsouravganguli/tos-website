// components/TechnologiesSection.tsx

import React from 'react';

export function TechnologiesSection() {
  return (
    <section className="md:grid bg-white text-black md:px-12 max-h-screen py-16 " id="technologies">
      
      <div className='flex flex-col md:flex-row items-center justify-center gap-24 md:py-24 pt-16 md:px-20'>
        {/* Text Content */}
      <div className="flex-1 max-w-2xl space-y-2 md:space-y-6 mx-4 md:mx-auto md:mb-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 md:mb-6">Technologies we use</h2>
        <p className="text-base md:text-xl">
          Totally Optimized Solutions Ltd. works with a variety of web and mobile technologies every day 
          for different projects & clients. Here’s some of the tech you’ll find us using.
        </p>
      </div>

      {/* Image Content */}
      <div className="flex items-center justify-center md:w-1/2 mx-4">
        <img 
          src='https://e7.pngegg.com/pngimages/901/967/png-clipart-front-end-web-development-responsive-web-design-front-and-back-ends-web-design-web-design-user-interface-design.png' 
          alt="Technologies" 
          className="w-full h-auto object-cover" 
        />
      </div>
      </div>
    </section>
  );
}
