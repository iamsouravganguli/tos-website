import Image from "next/image";
import React from "react";

export const ClientDomains: React.FC = () => {
  const clientDomains = [
    {
      title: "Media & Entertainment",
      description: "Empowering Growth for Media & Entertainment",
      icon: "/assets/domain.svg",
    },
    {
      title: "AgriTech",
      description: "Supporting AgriTech Industries with our hardware solutions.",
      icon: "/assets/domain.svg",
    },
    {
      title: "Healthcare",
      description: "Providing Healthcare solutions to improve patient care.",
      icon: "/assets/domain.svg",
    },
    {
      title: "TeleCom",
      description: "Helping TeleCom companies with our secure solutions.",
      icon: "/assets/domain.svg",
    },
  ];

  return (
    <section className="flex flex-col  justify-center items-center pt-10 bg-white bg-[url('/assets/bg-pattern.svg')] bg-center bg-repeat-x">
      <h1 className="text-dark font-extrabold leading-none px-5 text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
        Serving the Clients
      </h1>
      <h1 className="text-dark font-extrabold leading-none text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
        Across Multiple Domains
      </h1>
      <div className="mt-10 w-full px-10 ">
        <div
          className={`grid gap-6 ${
            clientDomains.length === 2
              ? 'lg:grid-cols-2'
              : 'lg:grid-cols-3 md:grid-cols-2 grid-cols-1'
          }`}
        >
          {clientDomains.map((item, index) => (
            <div
              key={index}
              className=" gap-5 flex h-44 xl:h-50 place-items-center justify-center text-center p-4 rounded-lg shadow-md bg-white"
            >
              <div className="border border-gray-300 p-2 rounded-lg">
                <Image src={item.icon} alt="" width={120} height={50} />
              </div>
              <div className="flex flex-col pl-2 text-left">
                <h1 className="font-bold text-lg">{item.title}</h1>
                <p className="text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Centering logic for uneven number of items */}
        
      </div>
    </section>
  );
};