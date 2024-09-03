import { AboutSection, Hero, Navbar, Footer, ContactForm, TechnologiesSection, DiscoverSection, Services, ClientDomains } from "@/components";
import EmiCalculator from "@/components/emi-cal/emiCalculator";

import { FAQSection } from "@/components/main/faq/faq";


export default function Home() {
  return (
    <div className="overflow-x-hidden">
     
        <Hero/>
        <Services/>
        <ClientDomains/>
        <AboutSection/>
        <DiscoverSection/>
        <TechnologiesSection/>
        <EmiCalculator/>
        <FAQSection/>
        <ContactForm/>
       
      
    </div>    
  );
}
