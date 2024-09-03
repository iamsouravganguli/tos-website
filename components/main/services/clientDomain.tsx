import React from "react";

export const ClientDomains: React.FC = () => {

const clientDomains = [
  {
    title: "Media & Entertainment",
    description: "Helping Media & Entertainment companies grow their Customers.",
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
    <section className="text-light body-font bg-[url('/assets/bg-pattern.svg')] bg-center bg-repeat-x">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col justify-center px-4 sm:px-8 md:px-4 xl:px-0 pb-10 sm:pb-20 md:pb-20 lg:pb-52 pt-10 sm:pt-24 md:pt-28 lg:pt-32 items-start md:items-center">
          <div className="text-dark font-extrabold leading-none text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-start md:text-center">
            Serving the clients
          </div>
          <div className="text-dark font-extrabold leading-none text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-start md:text-center">
            across multiple domain
          </div>
          <div className="grid gap-10 pt-20 w-full sm:w-4/5 md:w-3/4 lg:w-full grid-cols-1 lg:grid-cols-2">

{clientDomains.map((domain, index) => (
  <div key={index} className="flex flex-row bg-white py-2 sm:py-5 px-4 sm:px-7 lg:px-5 xl:px-7 rounded-xl shadow-md hover:shadow-xl transition duration-500">
    <div className="mr-4 sm:mr-7 min-w-[98px] min-h-[98px]">
      <div className="p-5 border rounded-xl min-w-[68px]:">
        <img src={domain.icon} alt={domain.title} className="h-10 sm:h-14 w-10 sm:w-14 object-cover" />
      </div>
    </div>
    <div className="font-extrabold text-xl sm:text-2xl ">
      {domain.title}
      <div className="mt-2 text-gray-500 font-medium text-base sm:text-lg">
        {domain.description}
      </div>
    </div>
  </div>
))}
          </div>
        </div>
      </div>
    </section>
  );
};
