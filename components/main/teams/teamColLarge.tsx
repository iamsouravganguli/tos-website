'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import { Autoplay, Navigation, Pagination } from "swiper/modules"; // Import Swiper modules

import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import TeamMemberCard from "./teammembercard";
import { teamsData } from "@/data/teamsData";

const TeamColLarge = () => {
  return (
    <section className="py-8 bg-light ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="">
          <div className=" flex flex-col justify-center items-center text-center mb-6">
            <h2 className="font-manrope text-3xl md:text-4xl lg:text-5xl text-[#02077d] font-bold mb-4">
              Our leading, strong & creative team
            </h2>
            <p className="text-lg text-gray-900 mb-6">
              These people work on making our product best.
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
            pagination={{
              clickable: true,
            }}
            navigation
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
                slidesPerView: 3, // Show 3 slides on larger screens
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 4, // Show 4 slides on even larger screens
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
      </div>
    </section>
  );
};

export default TeamColLarge;