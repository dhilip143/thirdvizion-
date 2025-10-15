// src/Components/HomeComponent/VissionSection.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VisionMission = () => {
  const sectionRef = useRef(null);
  const linesContainerRef = useRef(null);
  const lineRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create master timeline for scroll-triggered animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=4000", // Extended scroll for cinematic flow
          pin: true, // keep background static
          scrub: 1.5, // smooth scroll syncing
          anticipatePin: 1,
        },
      });

      // Animate each line one by one sequentially
      lineRefs.current.forEach((el, i) => {
        if (!el) return;

        // Small animation variations
        const animations = [
          { opacity: 0, y: 80, duration: 1.2, ease: "power3.out" },
          { opacity: 0, x: -100, duration: 1.2, ease: "power3.out" },
          { opacity: 0, x: 100, duration: 1.2, ease: "power3.out" },
          { opacity: 0, rotation: 5, y: 50, duration: 1.2, ease: "power2.out" },
          { opacity: 0, scale: 0.8, duration: 1.2, ease: "back.out(1.7)" },
          { opacity: 0, y: -80, duration: 1.2, ease: "power3.out" },
        ];

        const anim = animations[i % animations.length];

        tl.fromTo(
          el,
          anim,
          {
            opacity: 1,
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            duration: 1.5,
            ease: "power2.out",
          },
          "+=0.5" // gap between each line
        );

        // Fade out before next appears (smooth transition)
        tl.to(
          el,
          { opacity: 0, duration: 0.8, ease: "power1.out" },
          "+=0.6"
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const lines = [
    <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold py-2">
      We're Not Just{" "}
      <span className="text-yellow-400">Technology</span>
    </div>,

    <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold py-2">
      We're Redefining How{" "}
      <span className="text-green-400">Businesses</span>
    </div>,

    <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold py-2">
      And <span className="text-blue-400">Interact</span> In a
    </div>,

    <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold py-2">
      <span className="text-purple-400">Digital-First</span> World
    </div>,

    <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold py-2">
      Every Solution We Create{" "}
      <span className="text-red-400">Merges</span>
    </div>,

    <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold py-2">
      <span className="text-cyan-400">Creativity</span>, Strategy, And
    </div>,

    <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold py-2">
      <span className="text-pink-400">Innovation</span> To Create
    </div>,

    <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold py-2">
      Meaningful <span className="text-yellow-400">Impact</span>
    </div>,
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-black via-gray-900 to-black w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Static Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black opacity-70"></div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-yellow-500/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/10 blur-3xl rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Vision & Mission Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-yellow-400 mb-6 lg:mb-10 tracking-wide">
          Vision & Mission
        </h2>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-16 lg:mb-24 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-yellow-400">
          Driving Innovation<br />Beyond Boundaries
        </h1>

        {/* Scroll Lines Section */}
        <div
          ref={linesContainerRef}
          className="text-left space-y-6 md:space-y-8 lg:space-y-10 overflow-hidden h-[70vh] flex flex-col items-start justify-center"
        >
          {lines.map((line, idx) => (
            <div
              key={idx}
              ref={(el) => (lineRefs.current[idx] = el)}
              className="opacity-0 leading-tight"
            >
              {line}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient Fade for Visual Depth */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </section>
  );
};

export default VisionMission;
