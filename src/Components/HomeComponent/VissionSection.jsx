import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Icon } from "@iconify/react";

gsap.registerPlugin(ScrollTrigger);

// --- SUBCOMPONENTE CLAVE: PASTILLA ANIMADA CON EFECTO WIPE ---
const AnimatedPill = ({ text, isItalic, isLast, iconName, isTitle }) => {
  const pillRef = useRef(null);

  const pillClasses = isTitle
    ? "border-2 border-amber-400 shadow-lg shadow-amber-500/50 "
    : "border-2 border-amber-400 shadow-md shadow-amber-400/40 bg-gray-900";

  const textClasses = `relative z-10 text-white lg:text-[32px] md:text-[26px] text-[20px] leading-none uppercase ${
    isItalic ? "italic" : "font-normal"
  } font-sans`;
  const iconSize = isTitle ? "size-6" : "size-5";

  const handleMouseEnter = () => {
    gsap.to(pillRef.current.querySelector(".wipe-overlay"), {
      scaleX: 1,
      duration: 0.8,
      ease: "power2.out",
    });
    gsap.to(pillRef.current.querySelector("p"), {
      color: "#1c1917",
      duration: 0.3,
    });
    gsap.to(pillRef.current.querySelector("svg"), {
      color: "#1c1917",
      duration: 0.3,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(pillRef.current.querySelector(".wipe-overlay"), {
      scaleX: 0,
      duration: 0.5,
      ease: "power2.out",
    });
    gsap.to(pillRef.current.querySelector("p"), {
      color: "white",
      duration: 0.3,
    });
    gsap.to(pillRef.current.querySelector("svg"), {
      color: "white",
      duration: 0.3,
    });
  };

  return (
    <>
      <div className="hidden xl:flex items-center gap-1.5">
        <div className="w-5 h-0.5 bg-amber-400" />
        <div className="size-1.5 rounded-full bg-amber-400" />
      </div>

      <div
        ref={pillRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={
          pillClasses +
          " relative flex items-center rounded-full px-3 py-1.5 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-amber-400/60"
        }
      >
        <div
          className="wipe-overlay absolute inset-0 rounded-full origin-right"
          style={{
            background: "linear-gradient(to right,  #e7490094, #d19900ff)",
            transform: "scaleX(0)",
          }}
        ></div>

        <Icon
          icon={iconName}
          className={
            iconSize +
            " mr-1.5 relative z-10 text-white transition-colors duration-300"
          }
        />
        <p className={textClasses}>{text}</p>
      </div>

      {!isLast && (
        <div className="hidden xl:flex items-center gap-1.5">
          <div className="size-1.5 rounded-full bg-amber-400" />
          <div className="w-5 h-0.5 bg-amber-400" />
        </div>
      )}
    </>
  );
};

const VisionMission = () => {
  useGSAP(() => {
    gsap.to("#title-service-1", {
      xPercent: 20,
      scrollTrigger: {
        trigger: "#title-service-1",
        scrub: true,
        start: "top 60%",
      },
    });
    gsap.to("#title-service-2", {
      xPercent: -30,
      scrollTrigger: {
        trigger: "#title-service-2",
        scrub: true,
        start: "top 60%",
      },
    });
    gsap.to("#title-service-3", {
      xPercent: 100,
      scrollTrigger: {
        trigger: "#title-service-3",
        scrub: true,
        start: "top 60%",
      },
    });
    gsap.to("#title-service-4", {
      xPercent: -100,
      scrollTrigger: {
        trigger: "#title-service-4",
        scrub: true,
        start: "top 60%",
      },
    });
    gsap.to("#title-service-5", {
      xPercent: 50,
      scrollTrigger: {
        trigger: "#title-service-5",
        scrub: true,
        start: "top 60%",
      },
    });
    gsap.to("#title-service-6", {
      xPercent: -50,
      scrollTrigger: {
        trigger: "#title-service-6",
        scrub: true,
        start: "top 60%",
      },
    });
  });

  return (
    <section className="mt-0 pt-50 overflow-hidden font-light leading-snug text-center mb-0 contact-text-responsive flex flex-col gap-y-8 bg-black py-16">
      {/* LÍNEA 1 */}
      <div id="title-service-1" className="flex justify-center items-center px-4">
        <AnimatedPill
          text="DRIVING INNOVATION BEYOND BOUNDARIES"
          iconName="material-symbols:rocket-launch-outline"
          isTitle={true}
          isLast={true}
        />
      </div>

      {/* LÍNEA 2 */}
      <div
        id="title-service-2"
        className="flex flex-wrap items-center justify-center gap-2"
      >
        <AnimatedPill
          text="WE'RE NOT JUST TECHNOLOGY"
          iconName="material-symbols:memory-outline"
          isLast={true}
        />
      </div>

      {/* LÍNEA 3 */}
      <div
        id="title-service-3"
        className="flex flex-wrap items-center justify-center gap-2"
      >
        <AnimatedPill
          text="WE'RE REDEFINING HOW BUSINESSES"
          iconName="mdi:domain"
        />
        <AnimatedPill
          text="AND INTERACT IN A"
          iconName="mdi:gesture-tap"
          isItalic={true}
          isLast={true}
        />
      </div>

      {/* LÍNEA 4 */}
      <div
        id="title-service-4"
        className="flex flex-wrap items-center justify-center gap-2"
      >
        <AnimatedPill
          text="DIGITAL-FIRST WORLD"
          iconName="mdi:earth"
          isLast={true}
        />
      </div>

      {/* LÍNEA 5 */}
      <div
        id="title-service-5"
        className="flex flex-wrap items-center justify-center gap-2"
      >
        <AnimatedPill
          text="EVERY SOLUTION WE CREATE MERGES"
          iconName="mdi:lightbulb-outline"
        />
        <AnimatedPill text="CREATIVITY, STRATEGY, AND" iconName="mdi:brain" />
      </div>

      {/* LÍNEA 6 */}
      <div
        id="title-service-6"
        className="flex flex-wrap items-center justify-center gap-2"
      >
        <AnimatedPill text="INNOVATION TO CREATE" iconName="mdi:rocket-launch" />
        <AnimatedPill
          text="MEANINGFUL IMPACT"
          iconName="mdi:handshake-outline"
          isLast={true}
        />
      </div>
    </section>
  );
};

export default VisionMission;