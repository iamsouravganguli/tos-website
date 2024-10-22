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

  const handleScroll = () => {
    const nextSection = document.getElementById("services");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            <button
              onClick={handleScroll}
              className="relative flex items-center px-8 py-4 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
            >
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                Get Started
              </span>
            </button>
          </div>
        </div>
        <div className="w-full sm:w-3/4 lg:w-2/5 xl:w-1/2">
          <img
            className="object-cover object-center rounded-lg"
            alt="hero"
            src="/assets/hero.svg"
          />
        </div>
      </div>
    </section>
  );
}
