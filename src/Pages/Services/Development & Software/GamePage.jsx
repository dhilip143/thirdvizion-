import { useEffect } from "react";
import GameHero from "/src/Components/ServiceComponents/Development&Software/GamePage/GameHero.jsx";
import CommingSoon from "/src/Components/ServiceComponents/Development&Software/GamePage/CommingSoon.jsx";
import KeyboardGame from "/src/Components/ServiceComponents/Development&Software/GamePage/KeyboardGame.jsx";
import SparkleBg from "/src/Components/ReusableComponents/SparkleBG.jsx";
import Lenis from "@studio-freight/lenis";

function GamePage() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      smoothTouch: false,
      touchMultiplier: 2,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-black">
      <SparkleBg count={20} speed={0.8} />
      <GameHero />
      <div className="hidden md:block">
        <KeyboardGame />
      </div>
      <CommingSoon />
    </div>
  );
}

export default GamePage;
