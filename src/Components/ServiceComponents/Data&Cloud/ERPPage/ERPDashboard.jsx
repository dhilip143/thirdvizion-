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
        className="mt-20 lg:mt-0 h-[20vh] bg-transparent text-cyan-300 flex flex-col justify-center items-center text-center"
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
            {/* Image Container */}
            <div className="w-full lg:w-1/2 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-screen flex items-center justify-center">
              <img
                src={project.image}
                className="w-full h-full object-cover rounded-2xl shadow-[0_0_25px_rgba(0,255,255,0.2)]"
                alt={project.title}
              />
            </div>

            {/* Content Overlay - Responsive for Mobile & Tablet */}
            <div
              className={`overlay-content backdrop-blur-md bg-cyan-950/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-cyan-400/30 rounded-2xl 
                w-full max-w-2xl lg:max-w-none lg:absolute lg:top-1/2 lg:-translate-y-1/2 
                ${index % 2 === 0 ? "lg:right-10 xl:right-24 2xl:right-28" : "lg:left-10 xl:left-22 2xl:left-26"} 
                px-6 py-6 mt-6 lg:mt-0 text-center lg:text-inherit
                lg:w-96 xl:w-[28rem] 2xl:w-[32rem]`}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold text-cyan-300 drop-shadow-[0_0_10px_rgba(0,255,255,0.3)] mb-4">
                {project.title}
              </h2>

              <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl max-w-lg mx-auto mb-6 text-cyan-100/90 leading-relaxed">
                {project.description}
              </p>

             

             
            </div>
          </section>
        ))}
      </div>
    </>
  );
}