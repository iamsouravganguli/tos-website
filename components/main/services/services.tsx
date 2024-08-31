'use client';

import React from 'react';
import Link from 'next/link';
import { services } from '@/data/index'

export function Services() {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Our Services
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          We offer a comprehensive range of IT services tailored to meet your business needs. Discover how we can help you achieve your goals with our expert solutions.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm transition-transform transform hover:scale-105 hover:shadow-md"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-40 object-cover rounded-t-lg mb-6"
              />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link href={service.link} className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
