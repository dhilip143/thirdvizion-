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

  // 🔥 Responsive circle radius
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

  // 🔹 Circle positions
  const circles = [
    { id: 1, cx: 200, cy: 200, label: "Enterprise Solutions", img: threed },
    { id: 2, cx: 350, cy: 600, label: "Healthcare", img: gam },
    { id: 3, cx: 100, cy: 1000, label: "Education", img: are },
    { id: 4, cx: 300, cy: 1400, label: "Retail & E-commerce", img: wih },
    { id: 5, cx: 200, cy: 1800, label: "Manufacturing", img: extra },
  ];

  // 🔹 Path connecting circles
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

  // ✨ GSAP ScrollTrigger animations (path + circles open immediately)
  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const totalLength = path.getTotalLength();
    gsap.set(path, {
      strokeDasharray: totalLength,
      strokeDashoffset: totalLength,
    });

    // Animate the path as you scroll (whole)
    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: svgRef.current,
        start: "top 20%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    // Each circle animates when it enters viewport
    circles.forEach((c, i) => {
      gsap.fromTo(
        circleRefs.current[i],
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          ease: "back.out(1.7)",
          duration: 0.5,
          scrollTrigger: {
            trigger: circleRefs.current[i],
            start: "top 80%", // when circle comes into view
          },
        }
      );

      gsap.fromTo(
        imageRefs.current[i],
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          ease: "power2.out",
          duration: 0.4,
          scrollTrigger: {
            trigger: circleRefs.current[i],
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        textRefs.current[i],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          duration: 0.4,
          scrollTrigger: {
            trigger: circleRefs.current[i],
            start: "top 80%",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [circles]);

  return (
    <section className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-start py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* 🔥 Heading */}
      <div className="text-center mb-12 sm:mb-16 px-4">
        <p className="text-xs sm:text-sm text-gray-400 tracking-wide uppercase">
          Industry Applications
        </p>
        <h1 className="text-2xl sm:text-2xl md:text-5xl lg:text-4xl 2xl:text-7xl font-extrabold mt-2 leading-tight">
          INDUSTRIES <br className="hidden sm:block" /> WE EMPOWER
        </h1>
      </div>

      {/* 🔥 SVG Path + Circles */}
      <div className="relative w-full max-w-[95%] sm:max-w-[700px] lg:max-w-[900px] 2xl:max-w-[1100px] mx-auto">
        <svg
          ref={svgRef}
          viewBox="0 0 500 2000"
          className="w-full h-[1500px] sm:h-[1800px] lg:h-[2000px] 2xl:h-[2200px] mx-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMin meet"
        >
          {/* faint base path */}
          <path
            d={pathD}
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />

          {/* animated path */}
          <path
            ref={pathRef}
            d={pathD}
            stroke="url(#glow)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />

          {/* gradient + glow filter */}
          <defs>
            <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="50%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 🔥 Circles + Images + Labels */}
          {circles.map((c, idx) => {
            const textX = c.cx + (idx % 2 === 0 ? -(radius + 60) : radius + 60);
            const fontSize =
              window.innerWidth >= 1536
                ? 18 + radius / 8
                : window.innerWidth >= 1024
                ? 16 + radius / 10
                : window.innerWidth >= 640
                ? 14 + radius / 10
                : 12;

            return (
              <g key={c.id}>
                {/* circle */}
                <circle
                  ref={(el) => (circleRefs.current[idx] = el)}
                  cx={c.cx}
                  cy={c.cy}
                  r={radius}
                  fill="#111"
                />

                {/* image mask */}
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

                {/* glow ring */}
                <circle
                  cx={c.cx}
                  cy={c.cy}
                  r={radius + 20}
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  opacity="0.15"
                  style={{ filter: "url(#softGlow)" }}
                />

                {/* label */}
                <text
                  ref={(el) => (textRefs.current[idx] = el)}
                  x={textX}
                  y={c.cy + 8}
                  textAnchor={idx % 2 === 0 ? "end" : "start"}
                  fill="#E6E7E8"
                  fontSize={fontSize * 0.7}
                  fontWeight={700}
                  style={{ fontFamily: "inherit" }}
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
