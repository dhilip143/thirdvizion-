import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import VrLanding from "/src/Components/ServiceComponents/ImmersiveTech/VRPage/VrLanding.jsx";
import VRHeroSection from "/src/Components/ServiceComponents/ImmersiveTech/VRPage/VRHeroSection.jsx";
import Vrbike from "/src/Components/ServiceComponents/ImmersiveTech/VRPage/vrbike";
import Vrsol from "/src/Components/ServiceComponents/ImmersiveTech/VRPage/vrsol";
import SparkleBg from "/src/Components/ReusableComponents/SparkleBG.jsx";

function VirtualReality() {
  

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
