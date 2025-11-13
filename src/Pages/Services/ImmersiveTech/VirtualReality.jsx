import { useEffect } from "react";

import VrLanding from "/src/Components/ServiceComponents/ImmersiveTech/VRPage/VrLanding.jsx";
import VRHeroSection from "/src/Components/ServiceComponents/ImmersiveTech/VRPage/VRHeroSection.jsx";
import Vrbike from "/src/Components/ServiceComponents/ImmersiveTech/VRPage/vrbike.jsx";
import Vrsol from "/src/Components/ServiceComponents/ImmersiveTech/VRPage/vrsol.jsx";
import SparkleBg from "/src/Components/ReusableComponents/SparkleBG.jsx";

function VirtualReality() {

  // ---------- AUTO RELOAD 2 TIMES WITH 100ms DELAY ----------
  useEffect(() => {
    const reloadCount = sessionStorage.getItem("vr_reload_count") || 0;

    if (reloadCount < 2) {
      sessionStorage.setItem("vr_reload_count", Number(reloadCount) + 1);

      setTimeout(() => {
        window.location.reload();
      }, 100); // 100ms delay
    }
  }, []);
  // -----------------------------------------------------------

  return (
    <div className="bg-black">
      <SparkleBg count={20} speed={0.8} color="194, 122, 255" />
      <VrLanding />
      <VRHeroSection />
      <Vrbike />
      <Vrsol />
    </div>
  );
}

export default VirtualReality;
