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
    <div className="px-4 py-16 bg-white  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className=" mb-10 lg:max-w-xl sm:text-center">
        <p className="inline-block mb-4 font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-title tracking-wider text-dark uppercase rounded-full bg-teal-accent-400">
          The Minds Behind
        </p>
        <p className="text-base text-gray-700 md:text-lg leading-relaxed">
          The creative force driving our ideas, innovation, and growth, turning
          vision into reality every day.
        </p>
      </div>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1} 
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1, // Show 1 slide on screens smaller than 640px
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2, // Show 2 slides on screens larger than 768px
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2, // Show 2 slides on larger screens
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 3, // Show 3 slides on even larger screens
            spaceBetween: 40,
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
              email={teamMember.email}
              linkedin={teamMember.linkedin}
              review={teamMember.review}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
