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
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col justify-center items-center text-center py-16 lg:py-24">
          <h2 className="text-dark font-extrabold leading-none text-3xl sm:text-4xl lg:text-5xl">
            Serving the Clients
          </h2>
          <h2 className="text-dark font-extrabold leading-none text-3xl sm:text-4xl lg:text-5xl mt-2">
            Across Multiple Domains
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-10 mt-12 ">
            {clientDomains.map((domain, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row bg-white py-6 px-5 sm:px-8 lg:px-6 rounded-xl shadow-md hover:shadow-xl transition duration-500"
              >
                <div className="flex justify-center items-center mr-4 sm:mr-7 md:min-w-[3/4] lg:min-w-[1/2] min-h-[98px]">
                  <div className="p-5 border rounded-xl">
                    <img
                      src={domain.icon}
                      alt={domain.title}
                      className="h-10 sm:h-14 w-10 md:w-80 lg:w-[3/4] xl:w-60 sm:w-14 object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center font-extrabold text-xl sm:text-2xl">
                  {domain.title}
                  <p className="mt-2 text-gray-500 font-medium text-base sm:text-lg">
                    {domain.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
