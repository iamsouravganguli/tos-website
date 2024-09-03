'use client';

import React from 'react';

export function DiscoverSection() {
  return (
    <section className='md:grid bg-sky-50 text-black md:px-12  py-10 '>
      <div className='flex flex-col justify-center items-center py-14 pb-8 px-6 relative'>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 md:text-center text-start">Discover how we work</h2>
      <p className="text-base md:text-lg lg:text-xl mb-6 md:text-center text-start">
        Learn about our processes and strategies to deliver outstanding results.
      </p>
      
      <div className="relative flex flex-col lg:flex-row md:justify-start md:items-center gap-6 md:my-12">
        <div className='lg:flex  absolute w-3/4 top-16 left-24 border-dotted border-t-4 border-gray-300  '>

        </div>
        
        {/* Process 1 */}
        <div className="relative flex lg:flex-col flex-row items-center gap-4 p-2 z-10 self-start lg:max-w-[19rem]">
          <div className="rounded-full bg-gray-200 p-2 md:p-4 md:mr-4">
            <img 
              src="/assets/icon1.svg" 
              alt="Understanding" 
              className="w-12 h-12 md:w-16 md:h-16"
            />
          </div>
          <div className="lg:text-center text-left mt-2 md:mt-0 gap-2">
            <h3 className=" text-xl font-bold">Ideate</h3>
            <p>Turn your idea from concept to MVP</p>
          </div>
        </div>

        {/* Process 2 */}
        <div className="relative flex lg:flex-col flex-row items-center gap-4 p-2 z-10 self-start lg:max-w-[19rem]">
          <div className="rounded-full bg-gray-200 p-2 md:p-4 md:mr-4">
            <img 
              src="/assets/icon2.svg" 
              alt="Strategizing" 
              className="w-12 h-12 md:w-16 md:h-16"
            />
          </div>
          <div className="lg:text-center text-left mt-2 md:mt-0 gap-2">
            <h3 className=" text-xl font-bold">Design</h3>
            <p>Sketch out the product to align the user needs</p>
          </div>
        </div>

        {/* Process 3 */}
        <div className="relative flex lg:flex-col flex-row items-center gap-4 p-2 z-10 self-start lg:max-w-[19rem]">
          <div className="rounded-full bg-gray-200 p-2 md:p-4 md:mr-4">
            <img 
              src="/public/assets/icon3.svg" 
              alt="Implementing" 
              className="w-12 h-12 md:w-16 md:h-16"
            />
          </div>
          <div className="lg:text-center text-left mt-2 md:mt-0 gap-2">
            <h3 className=" text-xl font-bold">Develop</h3>
            <p>Convert the designs into a live application</p>
          </div>
        </div>

        {/* Process 4 */}
        <div className="relative flex lg:flex-col flex-row items-center gap-4 p-2 z-10 self-start lg:max-w-[19rem]">
          <div className="rounded-full bg-gray-200 p-2 md:p-4 md:mr-4">
            <img 
              src="/assets/icon4.svg" 
              alt="Ensuring Quality" 
              className="w-12 h-12 md:w-16 md:h-16"
            />
          </div>
          <div className="lg:text-center text-left mt-2 md:mt-0 gap-2">
            <h3 className=" text-xl font-bold">Deploy</h3>
            <p>Launching the application to the market</p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
