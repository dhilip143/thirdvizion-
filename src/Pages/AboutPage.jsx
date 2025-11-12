import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import Hero from "/src/Components/AboutComponents/AboutHero.jsx";
import Mission from "/src/Components/AboutComponents/MissionSection.jsx";
// import Journey from "/src/Components/AboutComponents/JourneySection.jsx";
import AboutSection from "/src/Components/ReusableComponents/AboutSection.jsx";
import OurTeam from "/src/Components/AboutComponents/OurTeam.jsx";
import Partners from "/src/Components/AboutComponents/Partners.jsx";

export default function About() {
  

  return (
    <div className="bg-black">
      <Hero />
      <AboutSection />
      <Mission />
      {/* <Journey /> */}
      <OurTeam />
      <Partners />
    </div>
  );
}
