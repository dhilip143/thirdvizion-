import { useEffect, useState } from "react";
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
    description:
      "Software installed on company servers, managed by internal IT team. Offers full control and customization but requires significant upfront investment.",
    live: "https://amsi-ngo.com/",
    tools: ["Wordpress"],
  },
  {
    id: 2,
    title: "Cloud-Based ERP (SaaS)",
    image: madras,
    description:
      "Hosted on vendor's servers, accessed via subscription. Features lower upfront costs, automatic updates, and scalability with reduced IT burden.",
    live: "https://madraskitchen.ca/",
    tools: ["Wordpress"],
  },
  {
    id: 3,
    title: "Hybrid ERP",
    image: scopik,
    description:
      "Combines on-premise and cloud solutions. Allows keeping sensitive data on-premise while leveraging cloud flexibility for other functions.",
    live: "https://scopik.com/",
    tools: ["React.js", "Tailwind", "PostgreSQL", "Django"],
  },
  {
    id: 4,
    title: "Industry-Specific ERP",
    image: spinz,
    description:
      "Specialized systems for particular industries with built-in features and best practices tailored to specific processes and compliance needs.",
    live: "https://spinzreward.site/",
    tools: ["MERN Stack"],
  },
];

export default function WebProject() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const mobileCheck = window.matchMedia("(max-width: 768px)").matches;
    setIsMobile(mobileCheck);

    // Skip GSAP for mobile
    if (mobileCheck) return;

    // Smooth scrolling setup
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const sections = gsap.utils.toArray("section");

    sections.forEach((section, index) => {
      const img = section.querySelector("img");
      const text = section.querySelector(".overlay-content");

      if (!img) return;

      gsap.set(img, { transformOrigin: "center center" });

      const fromX = index % 2 === 0 ? -800 : 400;
      const toX = index % 2 === 0 ? 400 : -400;
      const centerX = index % 2 === 0 ? -300 : 300;
      const textFromX = index % 2 === 0 ? 300 : -300;

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
          { opacity: 1, x: 0, ease: "power2.out" },
          0.1
        );
      }
    });

    ScrollTrigger.refresh();
  }, []);

  // 🔹 Mobile Layout (Completely Different)
  if (isMobile) {
    return (
      <div className="text-white px-4 py-10 flex flex-col gap-10 bg-[#0B0D24]">
        <motion.h2
          className="text-center text-3xl font-bold text-[#7C86FF]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          ERP Project Showcase
        </motion.h2>

        {ProjectsData.map((project, index) => (
          <motion.div
            key={project.id}
            className="rounded-2xl overflow-hidden shadow-lg bg-[#1A1D3A]/60 backdrop-blur-md border border-[#7C86FF30]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="w-full h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5 text-center">
              <h3
                className="text-2xl font-bold text-[#7C86FF] mb-3"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                {project.title}
              </h3>
              <p
                className="text-[#c7cbff] text-base leading-relaxed mb-4"
                style={{ fontFamily: "Work Sans, sans-serif" }}
              >
                {project.description}
              </p>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-5 py-2 rounded-lg bg-[#7C86FF] text-white font-medium text-sm"
              >
                Visit Site
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  // 🔹 Desktop Layout (Your Original Code)
  return (
    <>
      <motion.div
        className="mt-20 lg:mt-0 h-[20vh] bg-transparent text-[#7C86FF] flex flex-col justify-center items-center text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0 }}
      ></motion.div>

      <div className="h-[400vh] text-white">
        {ProjectsData.map((project, index) => (
          <section
            key={project.id}
            className="h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden relative px-4 sm:px-6 md:px-8"
          >
            {/* Image Container (Hidden on Mobile) */}
            <div className="hidden sm:block w-full lg:w-1/2 h-[10vh] sm:h-[10vh] md:h-[10vh] lg:h-[60vh] flex items-center justify-center">
              <img
                src={project.image}
                className="w-full h-full object-cover rounded-2xl shadow-[0_0_25px_rgba(124,134,255,0.2)]"
                alt={project.title}
              />
            </div>

            {/* Content Overlay */}
            <div
              className={`overlay-content backdrop-blur-md bg-[#7C86FF10] shadow-[0_8px_32px_rgba(124,134,255,0.3)] border border-[#7C86FF30] rounded-2xl 
                w-full max-w-2xl lg:max-w-none lg:absolute lg:top-1/2 lg:-translate-y-1/2 
                ${
                  index % 2 === 0
                    ? "lg:right-10 xl:right-24 2xl:right-28"
                    : "lg:left-10 xl:left-22 2xl:left-26"
                } 
                px-6 py-6 mt-6 lg:mt-0 text-center lg:text-inherit
                lg:w-96 xl:w-[28rem] 2xl:w-[32rem]`}
            >
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold text-[#7C86FF] drop-shadow-[0_0_10px_rgba(124,134,255,0.3)] mb-4"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                {project.title}
              </h2>

              <p
                className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl max-w-lg mx-auto mb-6 text-[#c7cbff] leading-relaxed"
                style={{ fontFamily: "Work Sans, sans-serif" }}
              >
                {project.description}
              </p>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
