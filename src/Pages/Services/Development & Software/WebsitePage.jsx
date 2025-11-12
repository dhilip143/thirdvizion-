import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import WebProjects from "/src/Components/ServiceComponents/Development&Software/WebsitePage/WebProjects.jsx";
import WebHero from "/src/Components/ServiceComponents/Development&Software/WebsitePage/WebHero";
import WebDesignScroll from "/src/Components/ServiceComponents/Development&Software/WebsitePage/WebDesignScroll.jsx";
import WebCTA from "/src/Components/ServiceComponents/Development&Software/WebsitePage/WebCTA";
import WebAbt from "/src/Components/ServiceComponents/Development&Software/WebsitePage/WebAbt.jsx";
import WebProc from "/src/Components/ServiceComponents/Development&Software/WebsitePage/WebProc.jsx";
import WebSer from "/src/Components/ServiceComponents/Development&Software/WebsitePage/WebSer.jsx";
import SparkleBg from "/src/Components/ReusableComponents/SparkleBG.jsx";

const WebsitePage = () => {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Request animation frame loop
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Cleanup when component unmounts
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-black">
      <SparkleBg count={20} color="0, 211, 243" speed={0.8} />
      <WebHero />
      <WebDesignScroll />
      <WebAbt />
      <WebSer />
      <WebProc />
      <WebProjects />
      <WebCTA />
    </div>
  );
};

export default WebsitePage;
