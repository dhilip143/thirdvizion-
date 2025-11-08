import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { motion } from "framer-motion";
import TextReveal from "/src/Hooks/TextReveal.jsx";

// /src/data/ProjectsData.js
import amsi from "/src/assets/HeroImages/HeroHeader.webp";
import madras from "/src/assets/HeroImages/dashh.png";
import scopik from "/src/assets/HeroImages/dashhh.png";
import spinz from "/src/assets/HeroImages/dashhhh.png";

gsap.registerPlugin(ScrollTrigger);

const ProjectsData = [
  {
    id: 1,
    title: "On-Premise ERP",
    image: amsi,
    description: "Software installed on company servers, managed by internal IT team. Offers full control and customization but requires significant upfront investment.",
    live: "https://amsi-ngo.com/",
    tools: ["Wordpress"],
  },
  {
    id: 2,  
    title: "Cloud-Based ERP (SaaS)",
    image: madras,
    description: "Hosted on vendor's servers, accessed via subscription. Features lower upfront costs, automatic updates, and scalability with reduced IT burden.",
    live: "https://madraskitchen.ca/",
    tools: ["Wordpress"],
  },
  {
    id: 3,
    title: "Hybrid ERP",
    image: scopik,
    description: "Combines on-premise and cloud solutions. Allows keeping sensitive data on-premise while leveraging cloud flexibility for other functions.",
    live: "https://scopik.com/",
    tools: ["React.js", "Tailwind", "PostgreSQL", "Django"],
  },
  {
    id: 4,
    title: "Industry-Specific ERP",
    image: spinz,
    description: "Specialized systems for particular industries with built-in features and best practices tailored to specific processes and compliance needs.",
    live: "https://spinzreward.site/",
    tools: ["MERN Stack"],
  },
];

export default function WebProject() {
  useEffect(() => {
    function raf() {
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const isTablet = window.matchMedia("(min-width: 769px) and (max-width: 1023px)").matches;
    
    // Only apply animations for desktop (laptop and bigger screens)
    if (isMobile || isTablet) {
      return; // No animations for mobile and tablet
    }
    
    const sections = gsap.utils.toArray("section");

    sections.forEach((section, index) => {
      const img = section.querySelector("img");
      const text = section.querySelector(".overlay-content");
      
      if (!img) return;
      
      gsap.set(img, { transformOrigin: "center center" });

      // Desktop only animation
      const fromX = index % 2 === 0 ? -800 : 400;
      const toX = index % 2 === 0 ? 400 : -400;
      const centerX = index % 2 === 0 ? -300 : 300;

      const textFromX = index % 2 === 0 ? 300 : -300;
      const textToX = 0;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "clamp(top bottom-=100)",
          end: "clamp(bottom top+=200)",
          scrub: true,
        },
      });

      tl.fromTo(
        img,
        { scale: 0.2, x: fromX },
        { scale: 0.7, x: centerX, ease: "power2.out" }
      ).to(img, { scale: 0.3, x: toX, ease: "power2.in" });

      if (text) {
        tl.fromTo(
          text,
          { opacity: 0, x: textFromX },
          { opacity: 1, x: textToX, ease: "power2.out" },
          0.1
        );
      }
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      {/* Portfolio Heading */}
      <motion.div
        className="mt-20 lg:mt-0 h-[20vh] bg-transparent text-[#7C86FF] flex flex-col justify-center items-center text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0 }}
      >
        {/* Small Description Below Portfolio */}
      </motion.div>

      <div className="h-[400vh] text-white">
        {ProjectsData.map((project, index) => (
          <section
            key={project.id}
            className="h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden relative px-4 sm:px-6 md:px-8"
          >
            {/* Image Container - Mobile Responsive */}
            <div className="w-full lg:w-1/2 h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[150vh] flex items-center justify-center mb-4 lg:mb-0">
              <img
                src={project.image}
                className="w-full h-full object-cover rounded-2xl shadow-[0_0_25px_rgba(124,134,255,0.2)]"
                alt={project.title}
              />
            </div>

            {/* Content Overlay - Mobile Responsive */}
            <div
              className={`overlay-content backdrop-blur-md bg-[#7C86FF10] shadow-[0_8px_32px_rgba(124,134,255,0.3)] border border-[#7C86FF30] rounded-2xl 
                w-full max-w-2xl lg:max-w-none 
                px-4 sm:px-6 py-4 sm:py-6 
                lg:absolute lg:top-1/2 lg:-translate-y-1/2 
                ${index % 2 === 0 ? "lg:right-10 xl:right-24 2xl:right-28" : "lg:left-10 xl:left-22 2xl:left-26"} 
                text-center lg:text-inherit
                lg:w-96 xl:w-[28rem] 2xl:w-[32rem]`}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-[#7C86FF] drop-shadow-[0_0_10px_rgba(124,134,255,0.3)] mb-3 sm:mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>
                {project.title}
              </h2>

              <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl max-w-lg mx-auto mb-4 sm:mb-6 text-[#c7cbff] leading-relaxed" style={{ fontFamily: "work-sans, sans-serif" }}>
                {project.description}
              </p>

              {/* Tools Section - Mobile Responsive */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                {project.tools.map((tool, toolIndex) => (
                  <span
                    key={toolIndex}
                    className="px-3 py-1 sm:px-4 sm:py-2 bg-[#7C86FF20] border border-[#7C86FF40] rounded-full text-xs sm:text-sm text-[#7C86FF] backdrop-blur-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Live Demo Button - Mobile Responsive */}
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#7C86FF] to-[#5A67D8] text-white rounded-lg font-semibold text-sm sm:text-base hover:shadow-[0_0_20px_rgba(124,134,255,0.5)] transition-all duration-300 transform hover:scale-105"
              >
                Live Demo
              </a>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}