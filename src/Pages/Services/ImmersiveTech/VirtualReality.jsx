import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import VrLanding from "/src/Components/ServiceComponents/ImmersiveTech/VRPage/VrLanding.jsx";
import VRHeroSection from "/src/Components/ServiceComponents/ImmersiveTech/VRPage/VRHeroSection.jsx";
import Vrbike from "/src/Components/ServiceComponents/ImmersiveTech/VRPage/vrbike";
import Vrsol from "/src/Components/ServiceComponents/ImmersiveTech/VRPage/vrsol";
import SparkleBg from "/src/Components/ReusableComponents/SparkleBG.jsx";

function VirtualReality() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Animation loop
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-black">
      <SparkleBg count={20} speed={0.8} color="194, 122, 255" />
      <VrLanding />
      <VRHeroSection />
      {/* <Vrtwo /> */}
      <Vrbike />
      <Vrsol />
    </div>
  );
}

export default VirtualReality;
