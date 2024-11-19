"use client";
import { faqData, FAQItem } from "@/data";
import React, { useState } from "react";
// Adjust the import path as necessary

export const FAQSection: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="text-gray-900 md:mx-10 xl:mx-10 lg:mx-10 px-4">
      <div className="max-w-screen-xl mx-auto" id="faq">
        <div className="flex flex-col justify-start px-4 sm:px-8 md:px-4 xl:px-0 pt-16 sm:pt-20 lg:pt-28 xl:pt-36 items-start">
          <div className="text-[#02077d] font-extrabold leading-none text-3xl sm:text-4xl md:text-5xl lg:text-title">
            FAQ’s
          </div>
          <div className="mt-2 sm:mt-10">
            <ul className="list-none w-full">
              {faqData.map((item: FAQItem) => (
                <li key={item.id} className="w-full border-b-2 last:border-none  border-gray-300">
                  <div
                    className={`flex justify-between items-center py-7 cursor-pointer transition duration-300 ease-in-out`}
                    onClick={() => handleToggle(item.id)}
                  >
                    <div className="text-light font-medium w-full md:text-2xl text-pera">
                      {item.question}
                    </div>
                    <span className="text-light text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-300 rounded-lg">
                      {activeId === item.id ? '-' : '+'}
                    </span>
                  </div>
                  <div
                    className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                      activeId === item.id ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="p-5 text-gray-800 font-medium text-base md:text-xl">
                      {item.answer}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
