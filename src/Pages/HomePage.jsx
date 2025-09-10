import Hero from "/src/Components/HomeComponent/HeroSection/HeroSection.jsx";
import About from "/src/Components/HomeComponent/AboutSection.jsx";
import Service from "/src/Components/HomeComponent/ServiceSection.jsx";
import Categories from "/src/Components/HomeComponent/Categories";
import VisionMission from "/src/Components/HomeComponent/VissionSection";
import Hovercard from "/src/Components/HomeComponent/HoverCard.jsx";
import FAQ from "/src/Components/HomeComponent/FAQ.jsx";
import Testimonial from "/src/Components/HomeComponent/Testimonial.jsx";
import Industries from "/src/Components/HomeComponent/Industries.jsx";
import ContactSection from "/src/Components/HomeComponent/ContactSection.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Categories />
      <VisionMission />
      <Hovercard />
      <FAQ />
      <Testimonial />
      <Industries />
      <ContactSection />
    </>
  );
}
