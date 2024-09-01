// components/AboutUs.tsx

import React from 'react';
import { AboutSection } from './about';
import { DiscoverSection } from './discovery';
import { TechnologiesSection } from './technology';

export function AboutUs() {
  return (
    <section className="bg-white text-black w-full p-2" id="about-us">
      <AboutSection />
      <DiscoverSection />
      <TechnologiesSection />
    </section>
  );
}
