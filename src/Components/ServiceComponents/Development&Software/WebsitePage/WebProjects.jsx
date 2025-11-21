import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

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
    description:
      "A modern NGO website designed for awareness campaigns and online donations.",
    tools: ["Wordpress"],
  },
  {
    id: 2,
    title: "Madras Kitchen",
    image: madras,
    description:
      "An online restaurant site with menu listing, reservations, and smooth animations.",
    tools: ["Wordpress"],
  },
  {
    id: 3,
    title: "Scopik",
    image: scopik,
    description:
      "A Next.js powered platform with seamless Supabase integration.",
    tools: ["React.js", "Tailwind", "PostresSQL", "Django"],
  },
  {
    id: 4,
    title: "Spinz Reward",
    image: spinz,
    description:
      "A reward-based platform for gamified interactions and user engagement.",
    tools: ["Mern Stack"],
  },
];

export default function WebProject() {
  useEffect(() => {
    const sections = gsap.utils.toArray(".project-section");

    sections.forEach((section, index) => {
      const img = section.querySelector("img");
      const text = section.querySelector(".overlay-content");

      const fromImg = index % 2 === 0 ? -300 : 300;
      const fromText = index % 2 === 0 ? 300 : -300;

      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      })
        .fromTo(
          img,
          { opacity: 0, x: fromImg, scale: 0.7 },
          { opacity: 1, x: 0, scale: 1, ease: "power2.out" }
        )
        .fromTo(
          text,
          { opacity: 0, x: fromText },
          { opacity: 1, x: 0, ease: "power2.out" },
          "-=0.6"
        );
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
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-60 font-medium tracking-wide bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          Our Portfolio
        </motion.h1>
      </motion.div>

      {/* Project Sections */}
      <div className="text-white">
        {ProjectsData.map((project, index) => (
          <section
            key={project.id}
            className={`
              project-section h-screen w-full flex flex-col 
              ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} 
              items-center justify-center gap-10 px-5 lg:px-20
            `}
          >
            {/* Image */}
            <img
              src={project.image}
              className="w-[30vh] lg:w-[50vh] h-[35vh] lg:h-[50vh] object-cover rounded-2xl shadow-[0_0_25px_rgba(0,255,255,0.3)]"
            />

            {/* Text */}
            <div
              className="overlay-content w-full lg:w-[55vh] backdrop-blur-lg bg-cyan-950/20 border border-cyan-400/30 rounded-2xl p-8 shadow-xl"
            >
              <h2
                className="text-3xl md:text-4xl font-bold text-cyan-300 mb-4"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                {project.title}
              </h2>

              <p
                className="text-lg text-cyan-100/90 mb-5 leading-relaxed"
                style={{ fontFamily: "Work Sans, sans-serif" }}
              >
                {project.description}
              </p>

              {/* Tools */}
              <div className="flex gap-3 flex-wrap text-sm text-cyan-200">
                {project.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 border border-cyan-500/50 rounded-full bg-cyan-900/40"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
