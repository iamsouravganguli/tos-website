import React from 'react';
import { ServiceCard } from './serviceCard';
import { servicesData } from '@/data';
import { ClientDomains } from './clientDomain'; 

export const Services: React.FC = () => {
  return (
    <>
      <section id="services">
      <div className='pt-16'>
      <section className="py-24 bg-white " >
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-bold text-center mb-12">Services we can help you with</h2>
          <div className="flex overflow-x-auto no-scrollbar">
            <div className="flex flex-nowrap space-x-6">
              {servicesData.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <ClientDomains />
        </div> 
      </section>
    </>
  );
};
