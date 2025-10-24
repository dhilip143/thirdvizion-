import Hero from "/src/Components/HomeComponent/HeroSection/HeroSection.jsx";

// import Service from "/src/Components/HomeComponent/ServiceSection.jsx";
import Categories from "/src/Components/HomeComponent/Categories";
import VisionMission from "/src/Components/HomeComponent/VissionSection";
// import Hovercard from "/src/Components/HomeComponent/HoverCard.jsx";
import FAQ from "/src/Components/HomeComponent/FAQ.jsx";
// import Testimonial from "/src/Components/HomeComponent/Testimonial.jsx";
import Industries from "/src/Components/HomeComponent/Industries.jsx";
import ContactSection from "/src/Components/HomeComponent/ContactSection.jsx";
import Empover from "../Components/HomeComponent/Empover";



export default function Home() {
  return (
    <>

      <Hero />
      {/* <About /> */}
      
    
      {/* <Service/> */}
      
      <Categories />
      <VisionMission />
      {/* <Hovercard /> */}
      
      {/* <Testimonial /> */}
      <Industries />
      <Empover/>
      <FAQ />

      {/* FAQ sticky container */}
      <div className="relative">
        {/* FAQ stays fixed at top while scrolling */}
        {/* <div className="sticky top-0 z-10">
          <FAQ />
        </div> */}

        {/* Contact section comes after FAQ, appears above it */}
        <div className="relative z-20 -mt-10">
          <ContactSection />
        </div>
      </div>
    </>
  );
}
