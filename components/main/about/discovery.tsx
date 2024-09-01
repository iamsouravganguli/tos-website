// components/DiscoverSection.tsx

import React from 'react';

export function DiscoverSection() {
  return (
    <div className='py-24 px-6 bg-sky-50 text-black min-h-screen'>
      <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center">Discover how we work</h2>
      <p className="text-md md:text-lg lg:text-xl mb-6 text-center">
        Learn about our processes and strategies to deliver outstanding results.
      </p>
      
      <div className="flex flex-col md:flex-row flex-wrap md:justify-center md:items-center gap-8 my-24">
        {/* Process 1 */}
        <div className="flex md:flex-col flex-row items-center gap-4 p-2">
          <div className="rounded-full bg-gray-200 p-4 md:mr-4">
            <img 
              src="/assets/icon1.svg" 
              alt="Understanding" 
              className="w-16 h-16"
            />
          </div>
          <div className="md:text-center text-left mt-4 md:mt-0 gap-2">
            <h3 className="text-lg md:text-2xl font-semibold">Ideate</h3>
            <p>Turn your idea from concept to MVP</p>
          </div>
        </div>

        {/* Process 2 */}
        <div className="flex md:flex-col flex-row items-center gap-4 p-2">
          <div className="rounded-full bg-gray-200 p-4 md:mr-4">
            <img 
              src="/assets/icon2.svg" 
              alt="Strategizing" 
              className="w-16 h-16"
            />
          </div>
          <div className="md:text-center text-left mt-4 md:mt-0 gap-2">
            <h3 className="text-lg md:text-2xl font-semibold">Design</h3>
            <p>Sketch out the product to align the user needs</p>
          </div>
        </div>

        {/* Process 3 */}
        <div className="flex md:flex-col flex-row items-center gap-4 p-2">
          <div className="rounded-full bg-gray-200 p-4 md:mr-4">
            <img 
              src="/assets/icon3.svg" 
              alt="Implementing" 
              className="w-16 h-16"
            />
          </div>
          <div className="md:text-center text-left mt-4 md:mt-0 gap-2">
            <h3 className="text-lg md:text-2xl font-semibold">Develop</h3>
            <p>Convert the designs into a live application</p>
          </div>
        </div>

        {/* Process 4 */}
        <div className="flex md:flex-col flex-row items-center gap-4 p-2">
          <div className="rounded-full bg-gray-200 p-4 md:mr-4">
            <img 
              src="/assets/icon4.svg" 
              alt="Ensuring Quality" 
              className="w-16 h-16"
            />
          </div>
          <div className="md:text-center text-left mt-4 md:mt-0 gap-2">
            <h3 className="text-lg md:text-2xl font-semibold">Deploy</h3>
            <p>Launching the application to the market</p>
          </div>
        </div>
      </div>
    </div>
  );
}
