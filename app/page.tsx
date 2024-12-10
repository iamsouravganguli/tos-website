'use client'
import {
  AboutSection,
  Hero,
  
  ContactForm,
  TechnologiesSection,
  DiscoverSection,
  Services,
  ClientDomains,
  Teams,
} from "@/components";
import EmiCalculator from "@/components/emi-cal/emiCalculator";
import Chat from "@/components/chatBox/chat";
import { FAQSection } from "@/components/main/faq/faq";
import TeamColLarge from "@/components/main/teams/teamColLarge";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Experience } from "@/components/experience";

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <div className="overflow-hidden bg-white">
      <SectionWrapper>
        <Hero />
      </SectionWrapper>
      <SectionWrapper>
        <Services />
      </SectionWrapper>
      <SectionWrapper>
        <ClientDomains />
      </SectionWrapper>
      <SectionWrapper>
        <AboutSection />
      </SectionWrapper>
      <SectionWrapper>
        <Experience/>
      </SectionWrapper>
      <SectionWrapper>
        <DiscoverSection />
      </SectionWrapper>
      <SectionWrapper>
        <TechnologiesSection />
      </SectionWrapper>
      <SectionWrapper>
        <EmiCalculator />
      </SectionWrapper>
      <SectionWrapper>
        <FAQSection />
      </SectionWrapper>
      <SectionWrapper>
        <ContactForm />
      </SectionWrapper>
      <SectionWrapper>
        <Teams />
      </SectionWrapper>
      
        <Chat />
    
      {/* <TeamColLarge /> */}
    </div>
  );
}
