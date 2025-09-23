import Hero from "/src/Components/AboutComponents/Hero";
import Mission from "/src/Components/AboutComponents/Mission";
import OurTeam from "/src/Components/AboutComponents/OurTeam";
import Dummy from "/src/Components/AboutComponents/DummyAbout.jsx"
import Journey from "/src/Components/AboutComponents/JourneySection.jsx";
import Partners from "/src/Components/AboutComponents/Partners.jsx";

export default function About() {
  return (
    <>
      <div className="bg-black">
        <Hero />
        <Mission />
        <Journey />

        <Dummy />
        <OurTeam />

        <Partners />
      </div>
    </>
  );
}
