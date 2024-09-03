import { AboutSection, Hero, Navbar, Footer, ContactForm, TechnologiesSection, DiscoverSection, Services, ClientDomains } from "@/components";

import { FAQSection } from "@/components/main/faq/faq";


export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
        <Hero/>
        <Services/>
        <ClientDomains/>
        <AboutSection/>
        <DiscoverSection/>
        <TechnologiesSection/>
        <FAQSection/>
        <ContactForm/>
        <Footer/>
      
    </div>    
  );
}
