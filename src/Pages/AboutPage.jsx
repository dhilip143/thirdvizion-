import { useEffect } from "react";


import Hero from "/src/Components/AboutComponents/AboutHero.jsx";
import VisionMission from "/src/Components/HomeComponent/VissionSection.jsx";
// import Journey from "/src/Components/AboutComponents/JourneySection.jsx";
import AboutSection from "/src/Components/ReusableComponents/AboutSection.jsx";
import OurTeam from "/src/Components/AboutComponents/OurTeam.jsx";
import Partners from "/src/Components/AboutComponents/Partners.jsx";

export default function About() {
  

  return (
    <div className="bg-black">
      <Hero />
      <AboutSection />
     <VisionMission />
      {/* <Journey /> */}
      <OurTeam />
      <Partners />
    </div>
  );
}
