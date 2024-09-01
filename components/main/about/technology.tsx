// components/TechnologiesSection.tsx

import React from 'react';

export function TechnologiesSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-white text-black px-6 md:px-12 min-h-screen py-16" id="technologies">
      {/* Text Content */}
      <div className="flex-1 max-w-2xl space-y-2 md:space-y-6 mx-4 md:mx-20 md:mb-0">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4 md:mb-6">Technologies we use</h2>
        <p className="text-base md:text-lg">
          Totally Optimized Solutions Ltd. works with a variety of web and mobile technologies every day 
          for different projects & clients. Here’s some of the tech you’ll find us using.
        </p>
      </div>

      {/* Image Content */}
      <div className="flex-1 flex justify-center px-6 md:px-0">
        <img 
          src='https://e7.pngegg.com/pngimages/901/967/png-clipart-front-end-web-development-responsive-web-design-front-and-back-ends-web-design-web-design-user-interface-design.png' 
          alt="Technologies" 
          className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg" 
        />
      </div>
    </section>
  );
}
