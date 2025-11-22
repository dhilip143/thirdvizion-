// src/components/Industries.jsx
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import threed from "/src/assets/indh/search.png";
import gam from "/src/assets/indh/second.png";
import are from "/src/assets/indh/tool.png";
import wih from "/src/assets/indh/dounload.png";
import bit from "/src/assets/indh/succes.png";
gsap.registerPlugin(ScrollTrigger);

export default function Indhu() {
  const [radius, setRadius] = useState(10);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const containerRef = useRef(null);
  const circleRefs = useRef([]);
  const textRefs = useRef([]);
  const descRefs = useRef([]);
  const imageRefs = useRef([]);
  const animationRefs = useRef([]);

  // Responsive detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 240) setRadius(30);
      else if (window.innerWidth < 1000) setRadius(15);
      else setRadius(80);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const svgWidth = 6500;
  const leftShift = 150;
  const circleSpacing = svgWidth / (5 + 1);

  const circles = [
    {
      id: 1,
      label: "DISCOVER",
      description:
        "We begin by understanding your business goals, vision, and challenges. Our team studies every detail to find the right digital strategy for your brand.",
      img: threed,
      cx: circleSpacing * 0.9 - leftShift,
      cy: 200,
      color: "#fb923c", // orange-400
    },
    {
      id: 2,
      label: "ARCHITECT",
      description:
        "We design robust and scalable system architectures using the latest technologies and best industry practices.",
      img: gam,
      cx: circleSpacing * 2 - leftShift,
      cy: 300,
      color: "#f472b6", // pink-400
    },
    {
      id: 3,
      label: "BUILD",
      description:
        "We build your solution with cutting-edge technologies and agile methodologies, ensuring code quality and maintainability.",
      img: are,
      cx: circleSpacing * 3.1 - leftShift,
      cy: 200,
      color: "#4ade80", // green-400
    },
    {
      id: 4,
      label: "ELEVATE",
      description:
        "We conduct comprehensive testing to ensure your solution is bug-free, performs optimally, and delivers exceptional user experience.",
      img: wih,
      cx: circleSpacing * 4.2 - leftShift,
      cy: 300,
      color: "#f87171", // red-400
    },
    {
      id: 5,
      label: "SUCCEES",
      description:
        "Success isn't a destination—it's a journey of constant growth. We empower your business to achieve measurable results through strategic execution, data-driven insights, and relentless improvement—ensuring your goals aren't just met, but exceeded.",
      img: bit,
      cx: circleSpacing * 5.35 - leftShift,
      cy: 200,
      color: "#FFC016", // yellow
    },
  ];

  // Get gradient colors from circles
  const gradientColors = circles.map(circle => circle.color);

  // --- MOBILE SIMPLE HORIZONTAL SCROLL VERSION ---
  if (isMobile) {
    return (
      <section className="bg-black text-white w-full py-16 px-4 flex flex-col items-center">
        {/* Heading */}
        <div
          className="text-center mb-10"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          <p className="text-sm uppercase tracking-wide text-[#FFC016]">
            Our Process
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white">
            how we <span className="text-[#FFC016]">deliver</span> excellence
          </h1>
        </div>

        {/* Horizontal scroll cards */}
        <div className="w-full flex overflow-x-auto space-x-5 scrollbar-hide snap-x snap-mandatory">
          {circles.map((c) => (
            <div
              key={c.id}
              className="min-w-[250px] max-w-[260px] bg-[#111] border border-[#222] rounded-2xl p-5 flex-shrink-0 snap-center text-center"
            >
              <div 
                className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#1a1a1a] border flex items-center justify-center"
                style={{ borderColor: c.color }}
              >
                <img
                  src={c.img}
                  alt={c.label}
                  className="w-12 h-12 object-contain"
                  loading="lazy"
                />
              </div>
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2"
                style={{ 
                  fontFamily: "Outfit, sans-serif",
                  color: c.color 
                }}
              >
                {c.label}
              </h2>
              <p
                className="text-xs md:text-lg text-gray-300 leading-relaxed"
                style={{ fontFamily: "Work Sans, sans-serif" }}
              >
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // --- DESKTOP ORIGINAL DESIGN ---
  const splitDescription = (description) => {
    const words = description.split(" ");
    const totalWords = words.length;
    const targetLines = 3;
    const wordsPerLine = Math.ceil(totalWords / targetLines);
    const lines = [];
    let currentLine = [];
    let currentWordCount = 0;

    words.forEach((word, index) => {
      currentLine.push(word);
      currentWordCount++;
      if (currentWordCount >= wordsPerLine || index === words.length - 1) {
        if (currentLine.length > 2 || index === words.length - 1) {
          lines.push(currentLine.join(" "));
          currentLine = [];
          currentWordCount = 0;
        }
      }
    });
    while (lines.length < targetLines) lines.push("");
    return lines.slice(0, targetLines);
  };

  const pathD = `
    M ${circles[0].cx} ${circles[0].cy}
    ${circles
      .slice(1)
      .map((circle, i) => {
        const prevCircle = circles[i];
        const controlPoint1 = {
          x: prevCircle.cx + (circle.cx - prevCircle.cx) * 0.25,
          y: prevCircle.cy,
        };
        const controlPoint2 = {
          x: circle.cx - (circle.cx - prevCircle.cx) * 0.25,
          y: circle.cy,
        };
        return `C ${controlPoint1.x} ${controlPoint1.y}, ${controlPoint2.x} ${controlPoint2.y}, ${circle.cx} ${circle.cy}`;
      })
      .join(" ")}
  `;

  useEffect(() => {
    if (isMobile) return;
    const section = containerRef.current;
    const svg = svgRef.current;
    const path = pathRef.current;
    if (!section || !svg || !path) return;

    ScrollTrigger.getAll().forEach((st) => {
      if (st.trigger === section || st.trigger === svg) st.kill();
    });

    const totalLength = path.getTotalLength();
    gsap.set(path, { strokeDasharray: totalLength, strokeDashoffset: totalLength });

    const scrollTween = gsap.to(svg, {
      x: () => -(svg.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${svg.scrollWidth * 1.65}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    const pathAnimation = gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${svg.scrollWidth * 1.5}`,
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      scrollTween.kill();
      pathAnimation.kill();
    };
  }, [isMobile]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden bg-black text-white flex items-center justify-start py-16 isolate"
    >
      <div className="absolute inset-0 bg-black" />
      <div
        className="absolute top-24 left-1/2 -translate-x-1/2 text-center z-10 w-full px-4"
        style={{ fontFamily: "Outfit, sans-serif" }}
      >
        <p className="text-xs sm:text-sm text-black tracking-wide uppercase mb-2">
          Our Process
        </p>
        <h1
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight text-[#ffffff] capitalize"
          style={{ textShadow: "none" }}
        >
          how we <span className="text-[#FFC016]">deliver</span> excellence
        </h1>
      </div>

      <div className="relative flex-shrink-0 w-[11000px] h-[600px] lg:h-[700px] 2xl:h-[800px] mx-auto z-10">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${svgWidth} 600`}
          className="w-[6000px] h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d={pathD}
            stroke="rgba(255, 242, 0, 0.05)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />

          <path
            ref={pathRef}
            d={pathD}
            stroke="url(#gradientGlow)"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />

          <defs>
            <linearGradient id="gradientGlow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={gradientColors[0]} />
              <stop offset="25%" stopColor={gradientColors[1]} />
              <stop offset="50%" stopColor={gradientColors[2]} />
              <stop offset="75%" stopColor={gradientColors[3]} />
              <stop offset="100%" stopColor={gradientColors[4]} />
            </linearGradient>
          </defs>

          {circles.map((c, idx) => {
            const labelY = c.cy + radius + 70;
            const descStartY = labelY + 50;
            const lineHeight = 28;
            const fontSize =
              window.innerWidth >= 1536
                ? 18 + radius / 7
                : window.innerWidth >= 1024
                ? 16 + radius / 9
                : 12;
            const descriptionLines = splitDescription(c.description);

            return (
              <g key={c.id}>
                <circle
                  cx={c.cx}
                  cy={c.cy}
                  r={radius}
                  fill="transparent"
                  stroke={c.color}
                  strokeWidth="2"
                />
                <clipPath id={`clip-${c.id}`}>
                  <circle cx={c.cx} cy={c.cy} r={radius} />
                </clipPath>
                <image
                  href={c.img}
                  x={c.cx - radius}
                  y={c.cy - radius}
                  width={radius * 2}
                  height={radius * 2}
                  preserveAspectRatio="xMidYMid slice"
                  clipPath={`url(#clip-${c.id})`}
                />
                <rect
                  x={c.cx - 220}
                  y={labelY - 25}
                  width="440"
                  height="130"
                  fill="rgba(0, 0, 0, 0.85)"
                  rx="15"
                />
                <text
                  x={c.cx}
                  y={labelY}
                  textAnchor="middle"
                  fill={c.color}
                  fontSize={fontSize * 1.7}
                  fontWeight={400}
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {c.label}
                </text>
                {descriptionLines.map((line, i) => (
                  <text
                    key={i}
                    x={c.cx}
                    y={descStartY + i * lineHeight}
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize={fontSize * 0.65}
                    fontWeight={400}
                    style={{
                      fontFamily: "Work Sans, sans-serif",
                    }}
                  >
                    {line}
                  </text>
                ))}
              </g>
            );
          })}
        </svg>
      </div>
    </section>
  );
}