import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import SparkleBg from "/src/Components/ReusableComponents/SparkleBG.jsx";
import AppHero from "/src/Components/ServiceComponents/Development&Software/AppPage/AppHero.jsx";
import AppAbout from "/src/Components/ServiceComponents/Development&Software/AppPage/AppAbout.jsx";
import Appc from "/src/Components/ServiceComponents/Development&Software/AppPage/Appc.jsx";
import AppService from "/src/Components/ServiceComponents/Development&Software/AppPage/AppService.jsx";
import AppCTA from "/src/Components/ServiceComponents/Development&Software/AppPage/AppCTA.jsx";
import Appfollow from "/src/Components/ServiceComponents/Development&Software/AppPage/Appfollow.jsx";

function AppPage() {


  return (
    <div className="bg-black relative overflow-hidden">
      <SparkleBg count={20} color="255, 137, 4" speed={0.8} />
      <AppHero />
      <AppAbout />
      <Appc />
      <Appfollow />
      <AppService />
      <AppCTA />
    </div>
  );
}

export default AppPage;
