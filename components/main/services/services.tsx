"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import { Autoplay, Navigation, Pagination } from "swiper/modules"; // Import Swiper modules

import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ServiceCard } from "./serviceCard";
import { servicesData } from "@/data";

export const Services: React.FC = () => {
  return (
    <section className="bg-white text-dark md:mx-5 mx-auto max-h-screen" id="services">
      <div className="w-full md:py-12 ">
        <section className="pt-16 pb-4 mx-4 md:mx-0">
          <div>
            <h2 className="text-dark text-3xl md:text-5xl font-bold md:text-center text-start mb-12">
              Services we can help you with
            </h2>
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={20} // Space between slides
              slidesPerView={1}
              loop={true} // Enables infinite looping
              autoplay={{
                delay: 2000, // Set the delay for autoplay in milliseconds
                disableOnInteraction: false, // Continue autoplay after user interaction
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3, // Show 3 cards on larger screens
                  spaceBetween: 20,
                },
                1300: {
                  slidesPerView: 3, // Show 3 cards on larger screens
                  spaceBetween: 20,
                },
              }}
              className="mySwiper"
            >
              {servicesData.map((service, index) => (
                <SwiperSlide key={index}>
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    image={service.image}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>
    </section>
  );
};

