"use client";

import React from "react";
import { heroData } from "@/data/index";
import Link from "next/link";

export function Hero() {
  const {
    title,
    description,
    buttonText1,
    buttonLink1,
    buttonText2,
    buttonLink2,
    image,
  } = heroData;

  return (
    <section className="bg-light pt-16">
      <div className="max-w-screen-xl flex items-center mx-auto flex-col lg:flex-row pt-10 sm:pt-10 pb-10 px-4 sm:px-8 md:px-4 xl:px-0">
        <div className="flex flex-col pt-0 mb-16 lg:flex-grow w-full lg:w-3/5 xl:w-1/2 pr-10 lg:pr-0 xl:pr-10 items-start text-left md:mb-0 ">
          <div className="text-dark title-font mb-2 sm:mb-3 md:mb-5 leading-none text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-main-title text-left font-extrabold text-gray-900 ">
            Shaping ideas
          </div>
          <div className="text-dark title-font mb-4 sm:mb-6 md:mb-8 leading-none text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-main-title text-left font-extrabold text-gray-900 ">
            into products
          </div>
          <div className="leading-relaxed text-gray-700 mb-4 sm:mb-6 md:mb-8 text-base sm:text-xl text-left">
            The goal isn’t to build a product. The goal is to build your
            business.
          </div>
          <div className="flex justify-center">
            <a
              className="inline-flex items-center border-0 mt-4 transition duration-500 ease-in-out transform ring-offset-current ring-offset-2 px-5 sm:px-7 md:px-10 lg:px-11 xl:px-12 py-2 sm:py-3 md:py-4 lg:py-4 xl:py-5 font-semibold rounded-lg text-xl md:text-2xl text-white bg-medium-light focus:outline-none hover:bg-medium md:mt-0 focus:shadow-outline focus:ring-2"
              href="#contact_us"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="w-full sm:w-3/4 lg:w-2/5 xl:w-1/2">
        
        
        <img className="object-cover object-center rounded-lg" alt="hero" src="/assets/hero.svg" />
        </div>
      </div>
    </section>
  );
}
