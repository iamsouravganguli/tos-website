'use client';

import React from 'react';
import { heroData } from '@/data/index';

export function Hero() {
  const { title, description, buttonText1, buttonLink1, buttonText2, buttonLink2, image } = heroData;

  return (
    <section className="flex flex-col md:flex-row items-center justify-between h-screen bg-sky-50 text-black px-6 md:px-12 pt-16">
      <div className="flex flex-col justify-center max-w-xl space-y-4 md:space-y-6 mx-4 md:mx-20 mt-6 mb-6 md:mt-0 md:mb-0">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight">{title}</h1>
        <p className="text-sm md:text-base lg:text-lg">{description}</p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <a href={buttonLink1} className="w-fit bg-blue-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base shadow-lg hover:bg-blue-700 transition-all duration-300">
            {buttonText1}
          </a>
          <a href={buttonLink2} className="w-fit bg-transparent border-2 border-blue-700 px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base hover:bg-blue-700 hover:text-white text-blue-600 transition-all duration-300">
            {buttonText2}
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center flex-1 px-6 md:px-0">
        <img 
          src={image} 
          alt="Totally Optimized Solutions" 
          className="w-full h-auto object-cover md:hidden" 
        />
        <img 
          src={image} 
          alt="Totally Optimized Solutions" 
          className="hidden md:block w-full h-auto object-cover" 
        />
      </div>
    </section>
  );
}
