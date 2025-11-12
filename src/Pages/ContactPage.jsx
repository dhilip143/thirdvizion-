import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import ContactHero from "/src/Components/ContactComponents/ContactHero.jsx";
import ContactForm from "/src/Components/ContactComponents/ContactForm.jsx";
import Map from "/src/Components/ContactComponents/Map.jsx";

const ContactPage = () => {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling on this page
    const lenis = new Lenis({
      duration: 1.2, // smooth scroll duration
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      smoothTouch: false,
      touchMultiplier: 2,
    });

    // Run Lenis animation frame loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-black">
      <ContactHero />
      <ContactForm />
      <Map />
    </div>
  );
};

export default ContactPage;
