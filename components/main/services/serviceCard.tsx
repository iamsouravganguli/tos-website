import React from 'react';
import { Service } from '@/types';

interface ServiceCardProps {
  title: string;
  description: string;
  image?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title,description,image }) => {


  return (
    <div className="flex flex-col sm:flex-row xl:flex-row 2xl:flex-row bg-gray-100 bg-opacity-85 py-4
    px-4 sm:py-5 sm:px-6 rounded-xl sm:h-44 xl:h-44 2xl:h-44 max-w-[416px] min-w-[416px]">
    <div className="justify-start items-start flex mr-4 sm:mr-6 mb-0 xl:mb-3 2xl:mb-0">
  
    <div className="p-4 bg-white rounded-full">
    {/* <svg className="h-6 sm:h-8 w-6 sm:w-8" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.5 0H2.5C1.11979 0 0 1.11769 0 2.4953V17.4671C0 18.8447 1.11979 19.9624 2.5 19.9624H12.5L11.25 24.953H7.5C7.04167 24.953 6.66667 25.3273 6.66667 25.7848C6.66667 26.2422 7.04167 26.6165 7.5 26.6165H22.5C22.9583 26.6165 23.3333 26.2422 23.3333 25.7848C23.3333 25.3273 22.9583 24.953 22.5 24.953H18.75L17.5 19.9624H27.5C28.8802 19.9624 30 18.8447 30 17.4671V2.4953C30 1.11769 28.8802 0 27.5 0ZM12.9688 24.953L13.8021 21.6259H16.1979L17.0313 24.953H12.9688ZM28.3333 17.4671C28.3333 17.9246 27.9583 18.2989 27.5 18.2989H2.5C2.04167 18.2989 1.66667 17.9246 1.66667 17.4671V2.4953C1.66667 2.03783 2.04167 1.66353 2.5 1.66353H27.5C27.9583 1.66353 28.3333 2.03783 28.3333 2.4953V17.4671Z" fill="#0F53FA"></path></svg> */}
   <img src={image} className='h-6 w-6 sm:min-h-8 sm:min-w-8 ' alt={title} />
    </div>
    </div>
    <div className="flex flex-col text-left select-none">
    <div className="font-extrabold text-xl sm:text-2xl text-light">{title}</div>
    <div className="mt-2 text-gray-500 font-medium text-base sm:text-lg">{description}</div>
    </div>
    </div>
  );
};




{/* <div className="flex flex-col sm:flex-row xl:flex-col 2x1:flex-row bg-service_bg py-4
px-4 sm:py-5 sm:px-6 rounded-x1 sm:h-44 xl:h-60 2x1:h-44"> flex == $0
<div className="justify-start items-start flex mr-4 sm:mr-6 mb-0 xl:mb-3 2x1:mb-0">
flex
<div className="p-4 bg-white rounded-full">
<svg className="h-6 sm:h-8 w-6 sm:w-8" viewBox="0 0 30 27" fill="none" xmlns="htt
p://www.w3.org/2000/svg"></svg>
</div>
</div>
<div className="flex flex-col text-left select-none"> flex
<div className="font-extrabold text-xl sm:text-2x1">UI/UX</div>
<div className="mt-2 text-gray-500 font-medium text-base sm:text-lg">Combining the best user experience with the best visual interface.</div>
</div>
</div> */}