import React from 'react';
import { Service } from '@/types';

export const ServiceCard: React.FC<Service> = ({ title, description, image }) => {
  return (
    <div className="w-72 sm:w-80 h-auto p-4 sm:p-6 bg-gray-100 border border-gray-100 rounded-lg shadow-sm flex flex-col ">
      <div className="flex justify-center items-center mb-4 h-14 sm:h-16">
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d={image} />
        </svg>
      </div>
      <div className="flex flex-col flex-grow">
        <a href="#">
          <h5 className="text-base sm:text-lg mb-2 font-semibold tracking-tight text-black">{title}</h5>
        </a>
        <p className="text-sm sm:text-base mb-3 font-normal text-black flex-grow">{description}</p>
        <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline text-xs sm:text-sm mt-auto">
          See more details
          <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
          </svg>
        </a>
      </div>
    </div>
  );
};
