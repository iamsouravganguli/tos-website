"use client";

import React from "react";
import Image from 'next/image';
import Link from 'next/link';

export const Teams: React.FC = () => {
  const teamImages = [
    {
      name:"Amit Tiwari",
      position:"Software Development Manager",
      image:"/assets/team/Amit.jpg",
    },
    {
      name:"Sourav Ganguli",
      position:"Chief Technology Officer ",
      image:"/assets/team/Saurav.jpg",
    },
    {
      name:"Piyush Sarwaariya ",
      position:"Founder and CEO",
      image:"/assets/team/Piyush.jpg",
    },
    {
      name:"Abhishek Kumar",
      position:"Web developer",
      image:"/assets/team/Abhishek.jpg",
    },
    {
      name:"Anuj Upadhyay",
      position:"Web developer",
      image:"/assets/team/Anuj.jpg",
    },
  ];
  return (
    <div className=" py-16 flex justify-center items-center text-center flex-col bg-white  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-8 lg:py-20" id="team">
      <div className=" mb-10 lg:max-w-xl px-5">
        <p className="mb-4 font-extrabold text-3xl  md:text-5xl lg:text-title text-dark uppercase bg-teal-accent-400">
          The Minds Behind
        </p>
        <p className="text-base text-gray-700 md:text-lg leading-relaxed">
          The creative force driving our ideas, innovation, and growth, turning
          vision into reality every day.
        </p>
      </div>

      
      <div className="row">
        <div
          className="flex flex-wrap justify-center wow fadeInUp animated"
          data-wow-delay="100ms"
          style={{
            visibility: "visible",
            animationDelay: "100ms",
            animationName: "fadeInUp",
          }}
        >
          {teamImages.map((item, index) => (
            <div
              className="relative w-full md:w-1/3 lg:w-1/4 px-5 mb-4"
              key={index}
            >
              <div className="group overflow-hidden relative">
                <Image
                  decoding="async"
                  src={item.image}
                  alt="Team Member"
                  width={500}
                  height={300}
                  className="lazyloaded w-[60rem] h-70 md:h-60  transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-2 z-10">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="team-one__sub-title text-sm">{item.position}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-black text-white text-center py-2 z-20 transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                  <h3 className="font-bold text-lg">
                    <a href="#">{item.name}</a>
                  </h3>
                  <p className="team-one__sub-title team-one__hover-sub-title text-sm">
                    {item.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <div className="flex justify-center my-10">
        <Link href="/career">
          <button className="relative inline-flex items-center justify-center px-7 py-2 overflow-hidden tracking-tighter text-black bg-white rounded-lg border border-violet-400 group transition-all duration-300 ease-in-out">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-medium-light rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute bottom-0 left-0 h-full -ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-auto h-full opacity-100 object-stretch"
                viewBox="0 0 487 487"
              >
                <path
                  fillOpacity=".1"
                  fillRule="nonzero"
                  fill="#FFF"
                  d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                ></path>
              </svg>
            </span>
            <span className="absolute top-0 right-0 w-12 h-full -mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="object-cover w-full h-full"
                viewBox="0 0 487 487"
              >
                <path
                  fillOpacity=".1"
                  fillRule="nonzero"
                  fill="#FFF"
                  d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                ></path>
              </svg>
            </span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200 group-hover:bg-medium-light transition-all duration-300 ease-in-out"></span>
            <span className="relative text-base text-center font-medium group-hover:text-white transition-colors duration-300 ease-in-out">
              Join our team
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};