import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Vision section sequential animation
      const visionTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: visionLineRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          markers: false, // Set to true for debugging
        },
      });

      visionTimeline
        .fromTo(
          visionLineRef.current,
          {
            scaleX: 0,
            transformOrigin: "left center",
          },
          {
            scaleX: 1,
            duration: 1,
            ease: "power2.out",
          }
        )
        .fromTo(
          visionHeadingRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .fromTo(
          visionTextRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.2"
        );

      // Mission section sequential animation
      const missionTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: missionLineRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          markers: false, // Set to true for debugging
        },
      });

      missionTimeline
        .fromTo(
          missionLineRef.current,
          {
            scaleX: 0,
            transformOrigin: "right center",
          },
          {
            scaleX: 1,
            duration: 1,
            ease: "power2.out",
          }
        )
        .fromTo(
          missionHeadingRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .fromTo(
          missionTextRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
            className="h-[2.5px] w-70 bg-yellow-500 ml-[58px]"
          >
            <div className="absolute -right-1 mt-[-2.3px] w-2 h-2 bg-yellow-500 rounded-full"></div>
            <div className="absolute -left-12 top-[-20.5px] w-[2px] w-3 h-34 bg-yellow-500 rotate-46"></div>
          </div>
        </div>

        <h2
          ref={visionHeadingRef}
          className="text-6xl ml-76 font-bold tracking-wider mb-6 flex text-[#FFC016] font-outfit"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          VISION
        </h2>

        <div ref={visionTextRef}>
          <p className="text-gray-300 text-[18px] ml-30 leading-relaxed max-w-4xl pr-[]">
            To redefine the boundaries of digital interaction by creating
            immersive, intelligent, and human<br />-centered 3D experiences that
            bridge the real and virtual worlds.
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
          className="text-6xl pt-86 pl-193 font-bold tracking-wider mb-6 flex justify-end md:justify-start text-[#FFC016] font-Outfit "
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          MISSION
        </h2>

        <div ref={missionTextRef} className="pl-[200px]">
          <p className="text-gray-300 text-[18px] leading-relaxed pl-[155px]">
            At ThirdVizion Labs, our mission is to empower businesses and
            creators through cutting-edge <br />
            Augmented Reality (AR), Virtual Reality (VR), and 3D web
            technologies.
          </p>

          <p className="text-gray-300 text-[18px] leading-relaxed pl-[155px] mt-2">
            <span className="text-yellow-500 font-semibold"
            style={{ fontFamily: "Outfit, sans-serif" }}>INNOVATE</span>{" "}
            immersive solutions that transform the way people learn, work, and
            connect.
          </p>

          <p className="text-gray-300 text-[18px] leading-relaxed pl-[155px] mt-2">
            <span className="text-yellow-500 font-semibold"style={{ fontFamily: "Outfit, sans-serif" }}>INTEGRATE</span>{" "}
            seamless 3D experiences across digital platforms for accessibility
            and engagement.
          </p>

          <p className="text-gray-300 text-[18px] leading-relaxed pl-[155px] mt-2">
            <span className="text-yellow-500 font-semibold"style={{ fontFamily: "Outfit, sans-serif" }}>INSPIRE</span>{" "}
            creativity and future-ready thinking by blending design, technology,
            and storytelling.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision; 