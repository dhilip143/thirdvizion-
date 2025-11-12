import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import Hero from "/src/Components/HomeComponent/HeroSection/HeroSection.jsx";
import VisionMission from "/src/Components/HomeComponent/VissionSection.jsx";
import Industries from "/src/Components/HomeComponent/Industries.jsx";
import Newservice from "/src/Components/HomeComponent/Newservice.jsx";
import Indhu from "./Components/HomeComponent/Indhu.jsx";
import Partners from "/src/Components/AboutComponents/Partners.jsx";
import Testimonial from "/src/Components/HomeComponent/Testimonial.jsx";
import FAQ from "/src/Components/HomeComponent/FAQ.jsx";
import ContactSection from "/src/Components/HomeComponent/ContactSection.jsx";


export default function Home() {
  // useEffect(() => {
  //   // Initialize Lenis for smooth scrolling
  //   const lenis = new Lenis({
  //     duration: 1.2, // adjust scroll speed
  //     smooth: true,
  //     direction: "vertical",
  //     gestureDirection: "vertical",
  //     smoothTouch: false,
  //     touchMultiplier: 2,
  //   });

  //   // Request animation frame loop
  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);

  //   // Cleanup on unmount
  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);

  //   useEffect(() => {
  //   // ✅ Cleanup GSAP ScrollTriggers when Home unmounts
  //   return () => {
  //     try {
  //       ScrollTrigger.getAll().forEach((st) => st.kill());
  //       ScrollTrigger.refresh();
  //       console.log("✅ Cleaned all ScrollTriggers on Home unmount");
  //     } catch (e) {
  //       console.warn("⚠️ ScrollTrigger cleanup failed:", e);
  //     }
  //   };
  // }, []);

  return (
    <>
      <Hero />
      <VisionMission />
      <Industries />
      <Newservice />
      <Indhu />
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
