import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import Hero from "/src/Components/AboutComponents/AboutHero.jsx";
import Mission from "/src/Components/AboutComponents/MissionSection.jsx";
// import Journey from "/src/Components/AboutComponents/JourneySection.jsx";
import AboutSection from "/src/Components/ReusableComponents/AboutSection.jsx";
import OurTeam from "/src/Components/AboutComponents/OurTeam.jsx";
import Partners from "/src/Components/AboutComponents/Partners.jsx";

export default function About() {
  useEffect(() => {
    // Initialize Lenis for smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      smoothTouch: false,
      touchMultiplier: 2,
    });

    // Animation frame loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup when component unmounts
    return () => {
      lenis.destroy();
    };
  }, []);

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
