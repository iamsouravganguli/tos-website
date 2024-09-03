'use client';

import React from 'react';
import { heroData } from '@/data/index';
import Link from 'next/link';

export function Hero() {
  const { title, description, buttonText1, buttonLink1, buttonText2, buttonLink2, image } = heroData;

  return (
    <section className='md:grid bg-sky-50 text-black  max-h-screen py-16 px-6 md:px-12'>
      <div className="flex flex-col md:flex-row items-center justify-center gap-24 md:py-24 pt-16 md:px-20">
      <div className="flex flex-col justify-center max-w-xl space-y-4 md:space-y-6 ">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight">{title}</h1>
        <p className="text-md md:text-base lg:text-lg">{description}</p>
        <div className="flex flex-col md:flex-row gap-2 md:gap-6">
          <Link
            href={buttonLink1} 
            className="md:w-48 md:h-12 w-32 h-10 bg-blue-600 text-white flex items-center justify-center rounded-full text-base shadow-lg hover:bg-blue-700 transition-all duration-300"
          >
            {buttonText1}
          </Link>
          <Link 
            href={buttonLink2} 
            className="md:w-48 md:h-12 w-32 h-10 bg-transparent border-2 border-blue-700 flex items-center justify-center rounded-full text-base hover:bg-blue-700 hover:text-white text-blue-600 transition-all duration-300"
          >
            {buttonText2}
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <img 
          src={image} 
          alt="Totally Optimized Solutions" 
          className="w-full h-auto object-cover" 
        />
      </div>
    </div>
    </section>
  );
}
