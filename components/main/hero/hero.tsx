'use client';

import React from 'react';
import { heroData } from '@/data/index';
import Link from 'next/link';

export function Hero() {
  const { title, description, buttonText1, buttonLink1, buttonText2, buttonLink2, image } = heroData;

  return (
    <section className="bg-sky-50 text-black md:py-44 px-12 max-h-screen my-16">
      <div className='flex items-center justify-center'>
      <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto">
        {/* Text Section */}
        <div className="flex-1 flex flex-col justify-center space-y-4 md:space-y-6 text-start md:text-left py-6">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">{title}</h1>
          <p className="text-sm sm:text-md md:text-base lg:text-lg">{description}</p>
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 justify-center md:justify-start">
            <Link
              href={buttonLink1}
              className="md:w-48 md:h-12 w-32 h-10 bg-blue-600 text-white flex items-center justify-center rounded-full text-sm md:text-base shadow-lg hover:bg-blue-700 transition-all duration-300"
            >
              {buttonText1}
            </Link>
            <Link
              href={buttonLink2}
              className="md:w-48 md:h-12 w-32 h-10 bg-transparent border-2 border-blue-700 flex items-center justify-center rounded-full text-sm md:text-base hover:bg-blue-700 hover:text-white text-blue-600 transition-all duration-300"
            >
              {buttonText2}
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src={image}
            alt="Totally Optimized Solutions"
            className="w-full max-w-md h-auto object-cover"
          />
        </div>
      </div>
      </div>
    </section>
  );
}
