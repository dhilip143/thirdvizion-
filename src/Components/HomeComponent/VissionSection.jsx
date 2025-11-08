import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger only in browser
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const MissionVision = () => {
  const sectionRef = useRef(null);
  const visionHeadingRef = useRef(null);
  const visionLineRef = useRef(null);
  const visionTextRef = useRef(null);
  const missionHeadingRef = useRef(null);
  const missionLineRef = useRef(null);
  const missionTextRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile view
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Only run GSAP if not mobile
  useEffect(() => {
    if (isMobile) return;

    const ctx = gsap.context(() => {
      // Vision Animation
      const visionTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: visionLineRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          markers: false,
        },
      });

      visionTimeline
        .fromTo(
          visionLineRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 1, ease: "power2.out" }
        )
        .fromTo(
          visionHeadingRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(
          visionTextRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.2"
        );

      // Mission Animation
      const missionTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: missionLineRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          markers: false,
        },
      });

      missionTimeline
        .fromTo(
          missionLineRef.current,
          { scaleX: 0, transformOrigin: "right center" },
          { scaleX: 1, duration: 1, ease: "power2.out" }
        )
        .fromTo(
          missionHeadingRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(
          missionTextRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  // ---------- MOBILE VIEW (NO ANIMATIONS) ----------
  if (isMobile) {
    return (
      <section
        className="bg-black text-white py-16 px-6 flex flex-col space-y-16"
        style={{ fontFamily: "'Work Sans', sans-serif" }}
      >
        {/* Vision */}
        <div className="text-center">
          <h2
            className="text-4xl font-bold mb-4 text-[#FFC016]"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            VISION
          </h2>
          <p className="text-gray-300 text-base leading-relaxed max-w-md mx-auto">
            To become a global leader in immersive 3D and digital innovation,
            creating experiences that inspire, connect, and transform the way
            people and businesses interact with technology.
          </p>
        </div>

        {/* Mission */}
        <div className="text-center">
          <h2
            className="text-4xl font-bold mb-4 text-[#FFC016]"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            MISSION
          </h2>
          <p className="text-gray-300 text-base leading-relaxed max-w-md mx-auto mb-2">
            At ThirdVizion Labs, our mission is to empower brands and creators
            with AR, VR, and 3D web technologies that make digital experiences
            more interactive and impactful.
          </p>

          <p className="text-gray-300 text-base leading-relaxed max-w-md mx-auto mb-2">
            <span
              className="text-[#FFC016] font-medium"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              INNOVATE
            </span>{" "}
            immersive solutions that change how people learn, work, and connect.
          </p>

          <p className="text-gray-300 text-base leading-relaxed max-w-md mx-auto mb-2">
            <span
              className="text-[#FFC016] font-medium"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              INTEGRATE
            </span>{" "}
            smooth 3D experiences across platforms for better access and
            engagement.
          </p>

          <p className="text-gray-300 text-base leading-relaxed max-w-md mx-auto">
            <span
              className="text-[#FFC016] font-medium"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              INSPIRE
            </span>{" "}
            creativity by combining design, technology, and storytelling to
            build a future driven by imagination.
          </p>
        </div>
      </section>
    );
  }

  // ---------- DESKTOP VIEW (WITH ANIMATIONS) ----------
  return (
    <section
      ref={sectionRef}
      className="bg-black pt-50 text-white py-16 px-6 md:px-20"
      style={{ fontFamily: "'Work Sans', sans-serif" }}
    >
      {/* Vision section */}
      <div className="relative">
        {/* Decorative left gold line */}
        <div className="absolute -left-14 top-7 hidden md:block">
          <div
            ref={visionLineRef}
            className="h-[2.5px] w-70 bg-yellow-500 ml-[58px] relative"
          >
            <div className="absolute -right-1 mt-[-2.3px] w-2 h-2 bg-yellow-500 rounded-full"></div>
            <div className="absolute -left-12 top-[-20.5px] w-[2px] h-34 bg-yellow-500 rotate-46"></div>
          </div>
        </div>

        <h2
          ref={visionHeadingRef}
          className="text-6xl ml-76 font-bold tracking-wider mb-6 flex text-[#FFC016]"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          VISION
        </h2>

        <div ref={visionTextRef}>
          <p className="text-gray-300 text-[18px] ml-30 leading-relaxed max-w-4xl">
            To become a global leader in immersive 3D and digital innovation,
            creating experiences that inspire, connect, and transform the way
            people and businesses interact with technology.
          </p>
        </div>
      </div>

      {/* Mission section */}
      <div className="relative md:text-left text-right -mt-38 mb-40">
        {/* Decorative right gold line */}
        <div className="absolute -right-[-17px] h-9 top-94 hidden md:block">
          <div
            ref={missionLineRef}
            className="h-[2.5px] w-70 bg-yellow-500 relative ml-[-15px]"
          >
            <div className="absolute -left-2 mt-[-3px] w-2 h-2 bg-yellow-500 rounded-full"></div>
            <div className="absolute -right-[49px] top-[-18.8px] w-[2px] h-34 bg-yellow-500 -rotate-45"></div>
          </div>
        </div>

        <h2
          ref={missionHeadingRef}
          className="text-6xl pt-86 pl-193 font-bold tracking-wider mb-6 flex justify-end md:justify-start text-[#FFC016]"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          MISSION
        </h2>

        <div ref={missionTextRef} className="pl-[200px]">
          <p className="text-gray-300 text-[18px] leading-relaxed pl-[155px]">
            At ThirdVizion Labs, our mission is to empower brands and creators
            with AR, VR, and 3D web technologies that make digital experiences
            more interactive and impactful.
          </p>

          <p className="text-gray-300 text-[18px] leading-relaxed pl-[155px] mt-2">
            <span
              className="text-yellow-500 font-light"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              INNOVATE
            </span>{" "}
            immersive solutions that change how people learn, work, and connect.
          </p>

          <p className="text-gray-300 text-[18px] leading-relaxed pl-[155px] mt-2">
            <span
              className="text-yellow-500 font-light"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              INTEGRATE
            </span>{" "}
            smooth 3D experiences across platforms for better access and
            engagement.
          </p>

          <p className="text-gray-300 text-[18px] leading-relaxed pl-[155px] mt-2">
            <span
              className="text-yellow-500 font-light"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              INSPIRE
            </span>{" "}
            creativity by combining design, technology, and storytelling to
            build a future driven by imagination.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
