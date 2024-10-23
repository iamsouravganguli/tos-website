// Teams.tsx
"use client"; 

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import { Autoplay, Navigation, Pagination } from "swiper/modules"; // Import Swiper modules

import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import TeamMemberCard from "./teammembercard";
import { teamsData } from "@/data/teamsData";



export const Teams: React.FC = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
        <p className="inline-block mb-4 font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-title tracking-wider text-dark uppercase rounded-full bg-teal-accent-400">
          The Minds Behind
        </p>
        <p className="text-base text-gray-700 md:text-lg leading-relaxed" >
          The creative force driving our ideas, innovation, and growth, turning vision into reality every day.
        </p>
      </div>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true} // Enables infinite looping
        autoplay={{
          delay: 3000, // Set the delay for autoplay in milliseconds
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          840: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
      >
        {teamsData.map((teamMember, index) => (
          <SwiperSlide key={index}>
            <TeamMemberCard 
              name={teamMember.name} 
              role={teamMember.role} 
              imageUrl={teamMember.imageUrl} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
