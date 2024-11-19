// components/TechnologiesSection.tsx

import React from "react";
import reactimg from "@/public/assets/technologies/react.png";
import js from "@/public/assets/technologies/js.png";
import nextjs from "@/public/assets/technologies/nextjs-icon.png";
import vuejs from "@/public/assets/technologies/vuejs.png";
import nodejs from "@/public/assets/technologies/nodejs.png";
import expressjs from "@/public/assets/technologies/express.png";
import mongodb from "@/public/assets/technologies/mongodb.png";
import sql from "@/public/assets/technologies/mysql.png";
import docker from "@/public/assets/technologies/docker.png";
import capacitor from "@/public/assets/technologies/capacitor.png";
import Image from "next/image";

export function TechnologiesSection() {
  return (
    <section className="text-gray-900 py-12 px-4">
      <div className="flex flex-col justify-center items-center">
      <div className="hidden md:flex">
  <h1 className="text-dark md:px-28 px-32 font-extrabold md:text-5xl text-3xl text-center leading-tight">
    Next-Generation Technologies We Use <br />
    <span className="block text-center">
      to Elevate Your Project
    </span>
  </h1>
</div>
        <div className="md:hidden">
          <h1 className="text-dark flex justify-center items-center  font-extrabold md:text-5xl text-2xl">Next-Gen Technologies  </h1>
          <h1 className="text-dark flex justify-center items-center font-extrabold md:text-5xl text-2xl">we use</h1>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  md:mt-10">
          <div className="border-r border-b border-gray-300 mt-10 h-20 px-10 flex justify-center items-center">
            <Image src={reactimg} alt={""} width={80} height={20} />
          </div>
          <div className="border-r border-b border-gray-300 mt-10 h-20 px-10 flex justify-center items-center">
            <Image src={nextjs} alt={""} width={50} height={20} />
            <p className="text-black font-bold">&nbsp; Next.js</p>
          </div>
          <div className="border-r border-b border-gray-300 mt-10 h-20 px-10 flex justify-center items-center">
            <Image src={js} alt={""} width={40} height={20} />
            <p className="text-[#8dc74a] font-bold">&nbsp; JavaScript</p>
          </div>
          <div className="border-r border-b border-gray-300 mt-10 h-20 px-10 flex justify-center items-center">
            <Image src={vuejs} alt={""} width={50} height={20} />
            <p className="text-black font-semibold">Vue.js</p>
          </div>
          <div className="border-r border-b border-gray-300 mt-10 h-20 px-10 flex justify-center items-center">
            <Image src={nodejs} alt={""} width={80} height={20} />
          </div>
          <div className="border-r border-b border-gray-300 mt-10 h-20 px-10 flex justify-center items-center">
            <Image src={docker} alt={""} width={80} height={20} />
            <p className="text-blue-500 font-semibold">&nbsp;Docker</p>
          </div>
          <div className="border-r border-b border-gray-300 mt-10 h-20 px-10 flex justify-center items-center">
            <Image src={expressjs} alt={""} width={100} height={20} />
          </div>
          <div className="border-r border-b border-gray-300 mt-10 h-20 px-10 flex justify-center items-center">
            <Image src={mongodb} alt={""} width={100} height={20} />
          </div>
          <div className="border-r border-b border-gray-300 mt-10 h-20 px-10 flex justify-center items-center">
            <Image src={sql} alt={""} width={50} height={20} />
            <p className="text-blue-950 font-semibold">My</p>
            <p className="text-orange-500 font-semibold">SQL</p>
          </div>
          <div className="border-r border-b border-gray-300 mt-10 h-20 px-10 flex justify-center items-center">
            <Image src={capacitor} alt={""} width={50} height={20} />
            <p className="text-blue-400 font-semibold">&nbsp;Capacitor</p>
          </div>
        </div>
      </div>
    </section>
  );
}