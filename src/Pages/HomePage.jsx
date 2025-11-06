
import Hero from "/src/Components/HomeComponent/HeroSection/HeroSection.jsx";

// import Service from "/src/Components/HomeComponent/ServiceSection.jsx";
// import Categories from "/src/Components/HomeComponent/Categories";
import VisionMission from "/src/Components/HomeComponent/VissionSection";
// import Hovercard from "/src/Components/HomeComponent/HoverCard.jsx";
import FAQ from "/src/Components/HomeComponent/FAQ.jsx";
import Testimonial from "/src/Components/HomeComponent/Testimonial.jsx";
import Industries from "/src/Components/HomeComponent/Industries.jsx";
import ContactSection from "/src/Components/HomeComponent/ContactSection.jsx";
import Empover from "../Components/HomeComponent/Empover";
import Indhu from "../Components/HomeComponent/indhu";
import Partners from "/src/Components/AboutComponents/Partners.jsx";
import Newservice from "../Components/HomeComponent/Newservice";


export default function Home() {
  return (
    <>

      <Hero />
     
      
     
      <Industries />
      <VisionMission />
      <Newservice/>
       
     <Indhu/>
    
     <Partners className="bg-black" />
     <Testimonial />
     
      <FAQ />

      <div className="relative">
       

        <div className="relative z-20 -mt-10">
          <ContactSection />
        </div>
      </div>
    </>
  );
}
