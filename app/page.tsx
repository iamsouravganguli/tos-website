import { Hero, Navbar, Services } from "@/components";
import { Footer } from "@/components/footer";


export default function Home() {
  return (
    <div>
      <Navbar/>
      
        <Hero/>
        <Services/>
        <Footer/>
      
    </div>    
  );
}
