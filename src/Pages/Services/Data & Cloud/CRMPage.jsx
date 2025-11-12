import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import SparkleBg from "/src/Components/ReusableComponents/SparkleBG.jsx";
import CrmHero from "/src/Components/ServiceComponents/Data&Cloud/CRMPage/CRMHero.jsx";
import CRMChallenges from "/src/Components/ServiceComponents/Data&Cloud/CRMPage/CRMChallenges.jsx";
import CrmVideo from "/src/Components/ServiceComponents/Data&Cloud/CRMPage/Crmvideo.jsx";

const CRMPage = () => {
  
  return (
    <div className="bg-black relative overflow-hidden">
      <SparkleBg count={20} speed={0.8} color="255, 100, 103" />
      <CrmHero />
      <CRMChallenges />
      <CrmVideo />
    </div>
  );
};

export default CRMPage;
