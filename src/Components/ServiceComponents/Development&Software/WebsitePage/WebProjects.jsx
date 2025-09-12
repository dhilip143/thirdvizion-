import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

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
    const lenis = new Lenis({
      lerp: 0.02,
      smoothWheel: true,
      smoothtouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    const sections = gsap.utils.toArray("section");

    sections.forEach((section, index) => {
      const img = section.querySelector("img");
      const text = section.querySelector(".overlay-content"); // ✅ select text container
      gsap.set(img, { transformOrigin: "center center" });

      // Alternate direction: even index = left → right, odd index = right → left
      const fromX = index % 2 === 0 ? -800 : 400;
      const toX = index % 2 === 0 ? 400 : -400;
      const centerX = index % 2 === 0 ? -300 : 300;

      const textFromX = index % 2 === 0 ? 300 : -300; // opposite for text
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
      <div className="h-[20vh] bg-transparent text-white flex justify-center items-center font-mono text-5xl">
        <h1>Our Portfolio</h1>
      </div>

      <div className="h-[400vh] bg-transparent text-white">
        {ProjectsData.map((project, index) => (
          <section
            key={project.id}
            className="h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden relative"
          >
            {/* Image */}
            <img
              src={project.image}
              className="w-full lg:w-1/2 h-[50vh] lg:h-screen object-cover"
            />

            {/* Overlay Content */}
            <div
              className={`overlay-content lg:absolute lg:top-1/2 lg:-translate-y-1/2 
      ${
        index % 2 === 0
          ? "lg:right-40 lg:text-left"
          : "lg:left-40 lg:text-right"
      } 
      w-full lg:w-auto px-6 mt-6 lg:mt-0 text-center lg:text-inherit`}
            >
              <h2 className="text-2xl lg:text-3xl font-bold">
                {project.title}
              </h2>

              <p className="text-base lg:text-lg max-w-md mx-auto mb-3">
                {project.description}
              </p>

              {/* Tools */}
              <div
                className={`flex ${
                  index % 2 === 0
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
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition"
                >
                  View Live
                </a>
              )}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
