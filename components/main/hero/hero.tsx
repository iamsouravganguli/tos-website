'use client';

import React from 'react';
import { heroData } from '@/data/index';

export function Hero() {
  const { title, description, buttonText1, buttonLink1, buttonText2, buttonLink2, image } = heroData;

  return (
    <section className="flex items-center justify-between h-screen bg-gradient-to-r from-blue-700 to-indigo-500 text-white px-6 md:px-12">
      <div className="flex flex-col justify-center max-w-xl space-y-6 md:space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">{title}</h1>
        <p className="text-lg md:text-xl">{description}</p>
        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
          <a href={buttonLink1} className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg shadow-lg hover:bg-gray-200 transition-all duration-300">
            {buttonText1}
          </a>
          <a href={buttonLink2} className="bg-transparent border-2 border-white px-6 py-3 rounded-full text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
            {buttonText2}
          </a>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-center flex-1">
        <img 
          src={image} 
          alt="Totally Optimized Solutions" 
          className="w-full  h-auto" 
        />
      </div>
    </section>
  );
}
