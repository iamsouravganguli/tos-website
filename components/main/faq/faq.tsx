'use client'
import React, { useState } from 'react';
import { faqData, FAQItem } from '@/data';

export const FAQSection: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="flex flex-col py-12 px-4 md:px-8 min-h-screen w-full " id="faq">
      <div className="container mx-auto md:py-32 pt-6 m-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-left text-black">
          FAQ&apos;s
        </h1>
        <div id="accordion-flush" className="accordion mx-auto w-full max-w-7xl">
          {faqData.map((item: FAQItem) => (
            <div key={item.id} className="mb-4">
              <h2 id={`accordion-flush-heading-${item.id}`}>
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-4 text-md md:text-xl lg:text-2xl font-medium text-black border-b border-gray-300 text-left"
                  onClick={() => handleToggle(item.id)}
                  aria-expanded={activeId === item.id}
                  aria-controls={`accordion-flush-body-${item.id}`}
                >
                  <span>{item.question}</span>
                  <svg
                    className={`w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 ${activeId === item.id ? 'rotate-180' : ''} shrink-0`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id={`accordion-flush-body-${item.id}`}
                className={`transition-all duration-300 ${activeId === item.id ? 'block' : 'hidden'}`}
                aria-labelledby={`accordion-flush-heading-${item.id}`}
              >
                <div className="py-4 border-b border-gray-300 text-left">
                  <p className="text-sm md:text-lg lg:text-xl text-gray-500">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
