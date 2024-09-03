// components/TechnologiesSection.tsx

import React from "react";

export function TechnologiesSection() {
  return (
    <section className="text-gray-900 pb-12 px-4">
      <div
        className="max-w-screen-xl flex flex-col items-center mx-auto lg:flex-row pt-20 sm:pt-16 md:pt-16 lg:pt-28 xl:pt-36 lg:pb-28 xl:pb-36 px-4 sm:px-8 md:px-4 lg:px-4 xl:px-0 lg:mr-4 xl:mr-auto overflow-y-hidden overflow-x-hidden"
        id="technologies"
      >
        <div className="flex flex-col w-full lg:w-3/5 xl:w-1/2 items-start text-left">
          <div className="text-dark font-extrabold text-left leading-none text-3xl sm:text-4xl md:text-5xl lg:text-title">
            Technologies we use
          </div>
          <div
            className="mb-8 mt-8 leading-relaxed text-gray-700 text-lg sm:text-pera"
            style={{lineHeight: "2.5rem"}}
          >
            Double slash Internet Pvt. Ltd. works with a variety of web and
            mobile technologies every day for different projects &amp; clients.
            Here’s some of the tech you’ll find us using.
          </div>
        </div>
        <div className="w-9/12 md:w-9/12 lg:w-2/5 xl:w-1/2 flex justify-center sm:justify-end">
          <div className="lg:flex hidden w-full justify-center md:justify-end sm:-mr-37"></div>
          <img src="/assets/technologies.svg" alt="" />
     
        </div>
      </div>
    </section>
  );
}
