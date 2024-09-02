"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import { Autoplay, Navigation, Pagination } from "swiper/modules"; // Import Swiper modules

import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ServiceCard } from "./serviceCard";
import { servicesData } from "@/data";
import { ClientDomains } from "./clientDomain";

export const Services: React.FC = () => {
  return (
    <>
      <section id="services">
        <div className="pt-16 w-full">
          <section className="py-24 bg-white m-4">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold md:text-center text-start mb-12">
                Services we can help you with
              </h2>
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={-20}
                slidesPerView={1}
                autoplay={{ delay: 2000 }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },

                  1300: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                }}
                className="mySwiper ml-5"
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
          <ClientDomains />
        </div>
      </section>
    </>
  );
};
