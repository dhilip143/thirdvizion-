import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import Threelanding from "/src/Components/3dservicecomp/Threelanding.jsx";

const ThreeDServices = () => {
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
      <Threelanding />
    </div>
  );
};

export default ThreeDServices;
