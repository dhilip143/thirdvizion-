// src/components/Industries.jsx
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import threed from "/src/assets/HomeImages/3d development.webp";
import gam from "/src/assets/HomeImages/gam.png";
import are from "/src/assets/HomeImages/ar.png";
import wih from "/src/assets/HomeImages/hiw.png";
import extra from "/src/assets/HomeImages/pon.png";

gsap.registerPlugin(ScrollTrigger);

export default function Industries() {
  const [radius, setRadius] = useState(120);
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const circleRefs = useRef([]);
  const textRefs = useRef([]);
  const imageRefs = useRef([]);

  // Responsive circle radius
  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 640) setRadius(70);
      else if (window.innerWidth < 1024) setRadius(100);
      else if (window.innerWidth < 1536) setRadius(120);
      else setRadius(140);
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  const circles = [
    { id: 1, cx: 200, cy: 200, label: "Digital Enterprise", img: threed },
    { id: 2, cx: 350, cy: 600, label: "Healthcare", img: gam },
    { id: 3, cx: 100, cy: 1000, label: "Education", img: are },
    { id: 4, cx: 300, cy: 1400, label: "Retail & E-commerce", img: wih },
    { id: 5, cx: 200, cy: 1800, label: "Manufacturing", img: extra },
  ];

  const pathD = `
    M ${circles[0].cx} ${circles[0].cy - 200}
    ${circles
      .map((c, i) =>
        i > 0
          ? `C ${circles[i - 1].cx - 100} ${circles[i - 1].cy + 150}, ${
              c.cx + 100
            } ${c.cy - 150}, ${c.cx} ${c.cy}`
          : ""
      )
      .join(" ")}
  `;

  // GSAP Animations
  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const totalLength = path.getTotalLength();
    gsap.set(path, { strokeDasharray: totalLength, strokeDashoffset: totalLength });

    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: { trigger: svgRef.current, start: "top 20%", end: "bottom 80%", scrub: true },
    });

    circles.forEach((c, i) => {
      // Floating circle animation
      gsap.fromTo(
        circleRefs.current[i],
        { scale: 0.3, opacity: 0, y: 50 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          ease: "elastic.out(1,0.5)",
          duration: 1,
          scrollTrigger: { trigger: circleRefs.current[i], start: "top 85%" },
        }
      );

      // Image fade in
      gsap.fromTo(
        imageRefs.current[i],
        { opacity: 0, scale: 0.7, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          ease: "power2.out",
          duration: 0.8,
          scrollTrigger: { trigger: circleRefs.current[i], start: "top 85%" },
        }
      );

      // Floating labels
      gsap.fromTo(
        textRefs.current[i],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          duration: 0.6,
          scrollTrigger: { trigger: circleRefs.current[i], start: "top 85%" },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, [circles]);

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white flex flex-col items-center justify-start py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Floating Glow Backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[200px] animate-pulse-slow"></div>
        <div className="absolute top-1/3 -left-40 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[180px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-cyan-700/15 rounded-full blur-[220px] animate-pulse-slow"></div>
      </div>

      {/* Heading */}
      <div className="relative text-center mb-12 sm:mb-16 px-4 z-10">
        <p className="text-xs sm:text-sm text-gray-400 tracking-wide uppercase">Industry Applications</p>
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-4xl 2xl:text-6xl font-extrabold mt-2 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 drop-shadow-[0_0_25px_rgba(200,200,255,0.3)]">
          INDUSTRIES <br className="hidden sm:block" /> WE EMPOWER
        </h1>
      </div>

      {/* SVG Path + Circles */}
      <div className="relative w-full max-w-[95%] sm:max-w-[700px] lg:max-w-[900px] 2xl:max-w-[1100px] mx-auto z-10">
        <svg
          ref={svgRef}
          viewBox="0 0 500 2000"
          className="w-full h-[1500px] sm:h-[1800px] lg:h-[2000px] 2xl:h-[2200px] mx-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMin meet"
        >
          {/* Base path */}
          <path d={pathD} stroke="rgba(255,255,255,0.05)" strokeWidth="3" fill="none" strokeLinecap="round" />

          {/* Animated glowing path */}
          <path
            ref={pathRef}
            d={pathD}
            stroke="url(#gradientGlow)"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
            style={{ filter: "url(#softGlow)" }}
          />

          {/* Gradient + Glow */}
          <defs>
            <linearGradient id="gradientGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00ffff" />
              <stop offset="50%" stopColor="#ff00ff" />
              <stop offset="100%" stopColor="#ff0080" />
            </linearGradient>
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="20" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Circles, Images, Labels */}
          {circles.map((c, idx) => {
            const textX = c.cx + (idx % 2 === 0 ? -(radius + 70) : radius + 70);
            const fontSize =
              window.innerWidth >= 1536
                ? 18 + radius / 7
                : window.innerWidth >= 1024
                ? 16 + radius / 9
                : window.innerWidth >= 640
                ? 14 + radius / 10
                : 12;

            return (
              <g key={c.id}>
                {/* Circle */}
                <circle
                  ref={(el) => (circleRefs.current[idx] = el)}
                  cx={c.cx}
                  cy={c.cy}
                  r={radius}
                  fill="url(#gradientGlow)"
                  stroke="#00ffff"
                  strokeWidth="3"
                  opacity="0.95"
                  style={{ filter: "url(#softGlow)" }}
                />

                {/* Image */}
                <clipPath id={`clip-${c.id}`}>
                  <circle cx={c.cx} cy={c.cy} r={radius} />
                </clipPath>
                <image
                  ref={(el) => (imageRefs.current[idx] = el)}
                  href={c.img}
                  x={c.cx - radius}
                  y={c.cy - radius}
                  width={radius * 2}
                  height={radius * 2}
                  preserveAspectRatio="xMidYMid slice"
                  clipPath={`url(#clip-${c.id})`}
                />

                {/* Floating outer rings */}
                <circle
                  cx={c.cx}
                  cy={c.cy}
                  r={radius + 15}
                  fill="none"
                  stroke="rgba(0,255,255,0.5)"
                  strokeWidth="2"
                  style={{ filter: "url(#softGlow)" }}
                />
                <circle
                  cx={c.cx}
                  cy={c.cy}
                  r={radius + 30}
                  fill="none"
                  stroke="rgba(255,0,255,0.3)"
                  strokeWidth="1.5"
                  style={{ filter: "url(#softGlow)" }}
                />

                {/* Label */}
                <text
                  ref={(el) => (textRefs.current[idx] = el)}
                  x={textX}
                  y={c.cy + 10}
                  textAnchor={idx % 2 === 0 ? "end" : "start"}
                  fill="#fff"
                  fontSize={fontSize * 0.75}
                  fontWeight={700}
                  style={{
                    fontFamily: "inherit",
                    textShadow: "0 0 15px rgba(0,255,255,0.5), 0 0 15px rgba(255,0,255,0.3)",
                    letterSpacing: "0.5px",
                  }}
                >
                  {c.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </section>
  );
}
