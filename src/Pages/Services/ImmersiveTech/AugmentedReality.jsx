import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import ARone from "/src/Components/ServiceComponents/ImmersiveTech/ARPage/ARone";
import ARtwo from "/src/Components/ServiceComponents/ImmersiveTech/ARPage/ARtwo";
import ARthree from "/src/Components/ServiceComponents/ImmersiveTech/ARPage/ARthree";

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

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-black">
      <ARone />
      <ARtwo />
      <ARthree />
    </div>
  );
}

export default VirtualReality;
