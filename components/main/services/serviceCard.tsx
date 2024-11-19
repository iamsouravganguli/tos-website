import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  image?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image }) => {
  return (
    <div className="flex flex-col bg-gray-100 px-6 py-6 h-80 sm:py-8 rounded-xl shadow-md hover:shadow-xl transition duration-300">
      <div className="flex justify-center items-center mb-4">
        <div className="p-4 bg-white rounded-full">
          <img src={image} className="h-10 w-10" alt={title} />
        </div>
      </div>
      <div className="flex flex-col text-center">
        <h3 className="font-extrabold text-xl sm:text-2xl text-dark">{title}</h3>
        <p className="mt-3 text-gray-500 font-medium text-base sm:text-lg">{description}</p>
      </div>
    </div>
  );
};
