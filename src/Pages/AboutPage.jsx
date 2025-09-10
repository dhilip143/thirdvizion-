import Hero from "/src/Components/AboutComponents/Hero";
import Mission from "/src/Components/AboutComponents/Mission";
import OurTeam from "/src/Components/AboutComponents/OurTeam";
import Dummy from "/src/Components/AboutComponents/DummyAbout.jsx"
import Ourstory from "../Components/AboutComponents/ourstory";
import Carousalabot from "../Components/AboutComponents/carousalabot";

export default function About() {
  return (
    <>
      <Hero />
      <Mission />
      <OurTeam />
      <Dummy />
      <Ourstory/>
      <Carousalabot/>
    </>
  );
}
