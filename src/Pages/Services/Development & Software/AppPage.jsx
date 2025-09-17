import AppHero from "/src/Components/ServiceComponents/Development&Software/AppPage/AppHero";
import AppAbout from "/src/Components/ServiceComponents/Development&Software/AppPage/AppAbout";
import AppService from "/src/Components/ServiceComponents/Development&Software/AppPage/AppService";
import AppStack from "/src/Components/ServiceComponents/Development&Software/AppPage/AppStack";
import AppCTA from "/src/Components/ServiceComponents/Development&Software/AppPage/AppCTA";

function AppPage() {
  return (
    <>
      <AppHero />
      <AppAbout />
      <AppService />
      <AppStack />
      <AppCTA />
    </>
  );
}
export default AppPage;
