import Hero from "/src/Components/HomeComponent/HeroSection/HeroSection.jsx";
import About from "/src/Components/HomeComponent/AboutSection.jsx";
import Service from "/src/Components/HomeComponent/ServiceSection.jsx";
import Categories from "/src/Components/HomeComponent/Categories";
import VisionMission from "/src/Components/HomeComponent/VissionSection";
import Software from "../Components/HomeComponent/software";
import Hovercard from "../Components/HomeComponent/HoverCard.jsx";
import FAQ from "../Components/HomeComponent/FAQ.jsx";
import Industries from "/src/Components/HomeComponent/Industries.jsx";
import ContactSection from "../Components/HomeComponent/ContactSection.jsx";

export default function Home() {
  return (
    <>
    <div className="bg-white">
      <Hero />
      </div>
      <About />
      <Service />
      <Categories />
      <VisionMission />
      {/* <Software /> */}
      <Hovercard />
      <FAQ />
      <Industries />
      <ContactSection />
    </>
  );
}
