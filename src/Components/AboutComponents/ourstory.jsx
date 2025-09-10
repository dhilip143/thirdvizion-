// src/Components/HomeComponent/OurStory.jsx
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    date: "Oct 14, 2024",
    title: "Our Beginning",
    description:
      "Thirdvizion was founded with a vision to revolutionize immersive tech and IT solutions.",
  },
  {
    date: "2024 - 2025",
    title: "Key Achievements",
    description:
      "Completed 5 high-level enterprise projects and 10 low-level projects for startups & SMEs.",
  },
  {
    date: "2025",
    title: "Expanding Horizons",
    description:
      "Providing cutting-edge services in AR/VR, Game Development, Web Development, CRM, Data & Cloud Solutions.",
  },
  {
    date: "Future",
    title: "The Road Ahead",
    description:
      "We aim to become a global tech leader, delivering next-gen solutions for enterprises worldwide.",
  },
];

export default function OurStory() {
  const containerRef = useRef(null);
  const scrollWrapperRef = useRef(null);
  const itemsRef = useRef([]);
  const pathRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollWrapper = scrollWrapperRef.current;
    const path = pathRef.current;
    const sections = itemsRef.current;

    const totalScrollWidth = scrollWrapper.scrollWidth;
    const viewportWidth = window.innerWidth;

    const scrollDistance = totalScrollWidth - viewportWidth;
    container.style.height = `${scrollDistance}px`;

    // Horizontal scroll
    gsap.to(scrollWrapper, {
      x: () => `-${scrollDistance}px`,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${scrollDistance}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Animate milestones
    sections.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "left center",
            scrub: true,
          },
        }
      );
    });

    // Animate SVG path drawing
    const pathLength = path.getTotalLength();
    gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });

    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${scrollDistance}`,
        scrub: 1,
      },
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-black overflow-hidden"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-600 to-yellow-400 z-20 absolute top-10 left-1/2 transform -translate-x-1/2">
        Our Journey
      </h2>

      {/* SVG Path line above milestones */}
      <svg
        className="absolute top-32 left-0 z-10"
        width="4000"
        height="120"
        viewBox="0 0 4000 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={pathRef}
          d="M 50 60 Q 300 10, 600 60 T 1200 60 T 1800 60 T 2400 60 T 3000 60 T 3600 60"
          stroke="url(#gradLine)"
          strokeWidth="4"
          fill="none"
        />
        <defs>
          <linearGradient id="gradLine" x1="0" y1="0" x2="4000" y2="0">
            <stop offset="0%" stopColor="#FF9900" />
            <stop offset="50%" stopColor="#FF1E56" />
            <stop offset="100%" stopColor="#FFD700" />
          </linearGradient>
        </defs>
      </svg>

      {/* Scroll Wrapper */}
      <div
        ref={scrollWrapperRef}
        className="flex items-center space-x-40 px-20 py-56 absolute top-0 left-0"
      >
        {milestones.map((milestone, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className="relative flex flex-col items-center text-center w-80 md:w-96"
          >
            {/* Timeline Dot */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 shadow-lg shadow-orange-500/40 flex items-center justify-center animate-pulse relative z-20">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>

            {/* Content */}
            <h3 className="mt-6 text-2xl md:text-3xl font-bold text-white">
              {milestone.title}
            </h3>
            <span className="text-sm mt-1 text-orange-400">
              {milestone.date}
            </span>
            <p className="mt-4 text-gray-300 leading-relaxed">
              {milestone.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
