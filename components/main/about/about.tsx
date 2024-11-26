import React from "react";
import Link from "next/link";
import { aboutUsData } from "@/data/index";


export function AboutSection() {
  const { title, description } = aboutUsData;
 
return (
    <section className="text-gray-900 body-font px-5 bg-white"
    id="about-us">
      <div
        className="max-w-screen-xl mx-auto flex pt-20 items-center pb-20 sm:pb-28 md:pb-36 flex-col-reverse px-4 sm:px-8 md:px-4 lg:px-4 xl:px-5 lg:flex-row"
        
      >
        <div className="w-full sm:w-full md:w-3/5 lg:w-1/2 mb-0 items-center flex justify-center md:justify-end mt-10 sm:mt-14 md:mt-10 lg:mt-0 mr-0 lg:mr-24 lg:pl-10 xl:mr-44 rounded-md">
          <img
            className="rounded-xl pop-effect"
            loading="lazy"
            alt="About Us"
            src="/assets/about_us.jpg"
          />
        </div>
        <div className="flex flex-col w-full sm:w-full md:w-full lg:w-2/5 items-center justify-center text-center lg:text-left">
          <div className="text-dark  font-extrabold leading-none text-3xl sm:text-4xl md:text-5xl lg:text-title">
            <h1 className="flex justify-center items-center text-center">About Us</h1>
          </div>
          <div
            className="mb-8 mt-8 leading-relaxed text-gray-700 text-lg md:text-pera"
            style={{lineHeight: "2.5rem"}}
          >
            We at The Optimised Solutions always provide highly
            customized solutions to our clients to meet their unique needs. We
            strive to create successful results and long-term benefits for our
            customers and we would absolutely love to do it for you.
          </div>
          <div className="flex justify-center items-start text-start">
            <Link
              className="inline-flex items-start font-semibold ml-0 sm:ml-2 md:mb-2 lg:mb-0 text-xl sm:text-2xl text-light"
              href="#contact-us"
            >
              Get started
              <svg
                className="w-6 h-6 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
