import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import SparkleBg from "/src/Components/ReusableComponents/SparkleBG.jsx";
import ServerHero from "/src/Components/ServiceComponents/Data&Cloud/ServerPage/ServerHero.jsx";
import ServerService from "/src/Components/ServiceComponents/Data&Cloud/ServerPage/ServerService.jsx";
import ChooseUs from "/src/Components/ServiceComponents/Data&Cloud/ServerPage/ServerChoose.jsx";
import Details from "/src/Components/ServiceComponents/Data&Cloud/ServerPage/ServerDetail.jsx";

function ServerPage() {
  useEffect(() => {
    // Initialize Lenis for smooth scroll on this page
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

    // Cleanup when leaving the page
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-black relative overflow-hidden">
      <SparkleBg count={20} color="5, 223, 114" speed={0.8} />
      <ServerHero />
      <ServerService />
      <ChooseUs />
      <Details />
    </div>
  );
}

export default ServerPage;
