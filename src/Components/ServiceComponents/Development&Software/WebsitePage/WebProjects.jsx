import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { motion } from "framer-motion";
import TextReveal from "/src/Hooks/TextReveal.jsx";

// /src/data/ProjectsData.js
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
    live: "https://amsi-ngo.com/",
    tools: ["Wordpress"],
  },
  {
    id: 2,
    title: "Madras Kitchen",
    image: madras,
    description:
      "An online restaurant site with menu listing, reservations, and smooth animations.",
    live: "https://madraskitchen.ca/",
    tools: ["Wordpress"],
  },
  {
    id: 3,
    title: "Scopik",
    image: scopik,
    description:
      "A Next.js powered platform with seamless Supabase integration.",
    live: "https://scopik.com/",
    tools: ["React.js", "Tailwind", "PostresSQL", "Django"],
  },
  {
    id: 4,
    title: "Spinz Reward",
    image: spinz,
    description:
      "A reward-based platform for gamified interactions and user engagement.",
    live: "https://spinzreward.site/",
    tools: ["Mern Stack"],
  },
];

export default function WebProject() {
  useEffect(() => {
    function raf() {
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    const isMobile = window.matchMedia("(max-width: 768px)").matches; // ✅ detect mobile
    const isLapScreen = window.matchMedia("(min-width: 1024px) and (max-width: 1440px)").matches;
    const sections = gsap.utils.toArray("section");

    sections.forEach((section, index) => {
      const img = section.querySelector("img");
      const text = section.querySelector(".overlay-content"); // ✅ select text container
      gsap.set(img, { transformOrigin: "center center" });

      // Alternate direction: even index = left → right, odd index = right → left
      const fromX = index % 2 === 0 ? -800 : 400;
      const toX = index % 2 === 0 ? 400 : -400;
      const centerX = isMobile ? 0 : index % 2 === 0 ? -300 : 300;

      const textFromX = isLapScreen
        ? (index % 2 === 0 ? 300 : 300) // ✅ laptop screens (custom values)
        : (index % 2 === 0 ? 300 : -300); // ✅ default screens
      const textToX = 0;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: isMobile ? "clamp(top bottom-=300)" : "clamp(top bottom-=100)", // ✅ start sooner
          end: isMobile ? "clamp(bottom top+=200)" : "clamp(bottom top+=200)", // ✅ end earlier
          scrub: true,
        },
      });

      tl.fromTo(
        img,
        { scale: 0.2, x: fromX },
        { scale: 0.7, x: centerX, ease: "power2.out" }
      ).to(img, { scale: 0.3, x: toX, ease: "power2.in" });

      // Animate Text (slides from opposite side)
      if (text) {
        tl.fromTo(
          text,
          { opacity: 0, x: textFromX },
          { opacity: 1, x: textToX, ease: "power2.out" },
          0.1 // slightly delayed so it feels smooth
        );
      }
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      {/* Portfolio Heading */}
      <motion.div
        className="mt-20 lg:mt-0 h-[20vh] bg-transparent text-white flex flex-col justify-center items-center text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0 }}
      >
        <TextReveal>
          <motion.h1 className="text-4xl md:text-6xl font-extrabold font-inter-tight tracking-wide overflow-hidden text-white drop-shadow-lg">
            Our Portfolio
          </motion.h1>
        </TextReveal>

        {/* Small Description Below Portfolio */}
        <TextReveal delay={0.2}>
          <motion.p
            className="mt-4 text-md md:text-xl text-gray-300 leading-relaxed max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0 }}
          >
            A curated collection of our favorite projects — each one crafted
            with passion, precision, and modern web technologies.
          </motion.p>
        </TextReveal>
      </motion.div>

      <div className="h-[400vh] bg-transparent text-white">
        {ProjectsData.map((project, index) => (
          <section
            key={project.id}
            id="section"
            className="h-screen flex flex-col xl:flex-row items-center justify-center overflow-hidden relative"
          >
            {/* Image */}
            <img
              src={project.image}
              className="w-full lg:w-1/2 h-[50vh] lg:h-screen object-cover"
            />

            {/* Overlay Content */}
            <div
              className={`overlay-content lg:absolute lg:top-1/2 lg:-translate-y-1/2 
      ${index % 2 === 0
                  ? "lg:right-40 lg:text-left"
                  : "lg:left-40 lg:text-right"
                } 
      w-full lg:w-auto px-6 mt-6 lg:mt-0 text-center lg:text-inherit`}
            >
              <h2 className="text-2xl md:text-5xl lg:text-3xl font-bold">
                {project.title}
              </h2>

              <p className="text-base md:text-md lg:text-lg max-w-lg mx-auto mb-3">
                {project.description}
              </p>

              {/* Tools */}
              <div
                className={`flex ${index % 2 === 0
                  ? "justify-center lg:justify-start"
                  : "justify-center lg:justify-end"
                  } gap-3 flex-wrap text-xs lg:text-sm text-gray-300 mb-3`}
              >
                {project.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 border border-gray-500 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Live Link */}
              {/* {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition"
                >
                  View Live
                </a>
              )} */}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
