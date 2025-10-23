import AppHero from "/src/Components/ServiceComponents/Development&Software/AppPage/AppHero";
import AppAbout from "/src/Components/ServiceComponents/Development&Software/AppPage/AppAbout";
import Appc from "/src/Components/ServiceComponents/Development&Software/AppPage/Appc";
import AppService from "/src/Components/ServiceComponents/Development&Software/AppPage/AppService";

import AppCTA from "/src/Components/ServiceComponents/Development&Software/AppPage/AppCTA";
import Appfollow from "/src/Components/ServiceComponents/Development&Software/AppPage/Appfollow";


import SparkleBg from "/src/Components/ReusableComponents/SparkleBG.jsx"

function AppPage() {
  return (
    <>
      <div className="bg-black">
        <SparkleBg count={20} color="255, 137, 4" speed={0.8} />
        <AppHero />
        <AppAbout />
        <Appc/>
        <Appfollow/>
        <AppService />
     
        <AppCTA />
      </div>
    </>
  );
}
export default AppPage;
