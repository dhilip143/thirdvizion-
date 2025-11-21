import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { motion } from "framer-motion";
import TextReveal from "/src/Hooks/TextReveal.jsx";

import amsi from "/src/assets/HeroImages/amsi-go.png";
import madras from "/src/assets/HeroImages/madraskitchen.png";
import scopik from "/src/assets/HeroImages/scopik.png";
import spinz from "/src/assets/HeroImages/spinz.png";

gsap.registerPlugin(ScrollTrigger);

const ProjectsData = [
  {
    id: 1,
    title: "AMSI NGO",
    image: amsi,
    description: "A modern NGO website designed for awareness campaigns and online donations.",
    live: "https://amsi-ngo.com/",
    tools: ["Wordpress"],
  },
  {
    id: 2,
    title: "Madras Kitchen",
    image: madras,
    description: "An online restaurant site with menu listing, reservations, and smooth animations.",
    live: "https://madraskitchen.ca/",
    tools: ["Wordpress"],
  },
  {
    id: 3,
    title: "Scopik",
    image: scopik,
    description: "A Next.js powered platform with seamless Supabase integration.",
    live: "https://scopik.com/",
    tools: ["React.js", "Tailwind", "PostresSQL", "Django"],
  },
  {
    id: 4,
    title: "Spinz Reward",
    image: spinz,
    description: "A reward-based platform for gamified interactions and user engagement.",
    live: "https://spinzreward.site/",
    tools: ["Mern Stack"],
  },
];

export default function WebProject() {
  const containerRef = useRef(null);

  // Smooth scroll (Lenis)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // GSAP animations
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".project-section");

      sections.forEach((section, index) => {
        const img = section.querySelector("img");
        const text = section.querySelector(".overlay-content");

        gsap.set(img, { transformOrigin: "center center" });

        // FIXED — correct left/right direction
        const fromX = index % 2 === 0 ? -400 : 400;  // Img enters opposite
        const toX = index % 2 === 0 ? 400 : -400;    // Exit opposite
        const centerX = 0;

        const textFromX = index % 2 === 0 ? 200 : -200; // Text opposite
        const textToX = 0;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });

        // IMAGE Animation
        tl.fromTo(
          img,
          { scale: 0.3, x: fromX },
          { scale: 0.8, x: centerX, ease: "power2.out", duration: 1 }
        ).to(img, {
          scale: 0.4,
          x: toX,
          ease: "power2.in",
          duration: 1,
        });

        // TEXT Animation
        if (text) {
          tl.fromTo(
            text,
            { opacity: 0, x: textFromX },
            { opacity: 1, x: textToX, ease: "power2.out" },
            0.1
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {/* Heading */}
      <motion.div
        className="mt-20 lg:mt-0 h-[20vh] text-cyan-300 flex flex-col justify-center items-center text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <TextReveal>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-60 font-medium tracking-wide bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Our Portfolio
          </motion.h1>
        </TextReveal>
      </motion.div>

      {/* Projects Section */}
      <div className="min-h-screen text-white flex flex-col">
        {ProjectsData.map((project, index) => (
          <section
            key={project.id}
            className={`project-section h-screen flex flex-col 
              ${index % 2 === 0 ? "xl:flex-row" : "xl:flex-row-reverse"}
              items-center justify-center overflow-hidden w-full gap-10 px-6`}
          >
            {/* IMAGE */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full xl:w-1/2 h-[50vh] xl:h-screen object-cover rounded-2xl shadow-[0_0_25px_rgba(0,255,255,0.2)]"
            />

            {/* CONTENT */}
            <div
              className="overlay-content backdrop-blur-md bg-cyan-950/20 
              shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-cyan-400/30 
              rounded-2xl px-10 py-8 w-full xl:w-1/2 text-center"
            >
              <h2
                className="text-3xl md:text-5xl font-bold text-cyan-300"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                {project.title}
              </h2>

              <p
                className="text-base md:text-lg text-cyan-100/90 max-w-xl mx-auto mb-4"
                style={{ fontFamily: "Work Sans, sans-serif" }}
              >
                {project.description}
              </p>

              {/* Tools */}
              <div className="flex justify-center gap-3 flex-wrap text-xs md:text-sm text-cyan-200/90">
                {project.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 border border-cyan-500/50 rounded-full bg-cyan-900/30"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
