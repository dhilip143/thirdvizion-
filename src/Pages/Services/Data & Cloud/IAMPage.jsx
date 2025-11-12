import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import SparkleBg from "/src/Components/ReusableComponents/SparkleBG.jsx";
import IAMHero from "/src/Components/ServiceComponents/Data&Cloud/IAMPage/IAMHero.jsx";
import IAMDashboard from "/src/Components/ServiceComponents/Data&Cloud/IAMPage/IAMDashboard.jsx";
import WhyChoose from "/src/Components/ServiceComponents/Data&Cloud/IAMPage/IAMChooseUs.jsx";
import IAMBenefits from "/src/Components/ServiceComponents/Data&Cloud/IAMPage/IAMBenefit.jsx";

const IAMPage = () => {
  useEffect(() => {
    // Initialize Lenis smooth scroll for this page
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

    // Cleanup on component unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-black relative overflow-hidden">
      <SparkleBg count={20} speed={0.8} color="253, 199, 0" />
      <IAMHero />
      <IAMDashboard />
      <WhyChoose />
      <IAMBenefits />
    </div>
  );
};

export default IAMPage;
