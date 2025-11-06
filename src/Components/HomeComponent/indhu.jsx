// src/components/Industries.jsx
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import threed from "/src/assets/HomeImages/g11.svg";  
import gam from "/src/assets/HomeImages/g22.svg";  
import are from "/src/assets/HomeImages/g33.svg";  
import wih from "/src/assets/HomeImages/g44.svg";  

gsap.registerPlugin(ScrollTrigger);

export default function Indhu() {
  const [radius, setRadius] = useState(10);
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const containerRef = useRef(null);
  const circleRefs = useRef([]);
  const textRefs = useRef([]);
  const descRefs = useRef([]);
  const imageRefs = useRef([]);
  const animationRefs = useRef([]);

  // Responsive circle radius
  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 240) setRadius(30);
      else if (window.innerWidth < 1000) setRadius(15);
      else setRadius(80);
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  // SVG dimensions and circle positioning
  const svgWidth = 5000;
  const leftShift = 150;
  const circleSpacing = svgWidth / (4 + 1);

  const circles = [
    {
      id: 1,
      cx: circleSpacing * 0.92 - leftShift,
      cy: 200,
      label: "DISCOVER",
      description:
        "We start by deeply understanding your business vision, challenges, and aspirations. Our team dives into every detail to uncover insights that guide us in crafting tailored technology solutions designed to transform your goals into measurable outcomes.",
      img: threed,
    },
    {
      id: 2,
      cx: circleSpacing * 2.1 - leftShift,
      cy: 300,
      label: "ARCHITECT",
      description:
        "We design robust, scalable system architectures using cutting-edge technologies and best practices, ensuring your solution remains future-proof, efficient, and capable of delivering optimal performance under any scale or load conditions.",
      img: gam,
    },
    {
      id: 3,
      cx: circleSpacing * 3.3 - leftShift,
      cy: 200,
      label: "BUILD",
      description:
        "Develop with precision and excellence using agile methodologies and continuous integration maintainable code that exceeds expectations.",
      img: are,
    },
    {
      id: 4,
      cx: circleSpacing * 4.7 - leftShift,
      cy: 300,
      label: "ELEVATE",
      description:
        "Scale your business to new heights with optimized performance, enhanced user experiences, and data-driven insights that propel your growth and competitive advantage in the market.",
      img: wih,
    },
  ];

  // Function to split description into balanced lines
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

    while (lines.length < targetLines) {
      lines.push("");
    }

    return lines.slice(0, targetLines);
  };

  // Create smooth connecting path
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
    const section = containerRef.current;
    const svg = svgRef.current;
    const path = pathRef.current;

    if (!section || !svg || !path) return;

    if (animationRefs.current.length > 0) {
      animationRefs.current.forEach((ref) => ref?.kill?.());
      animationRefs.current = [];
    }

    ScrollTrigger.getAll().forEach((st) => {
      if (st.trigger === section || st.trigger === svg) {
        st.kill();
      }
    });

    const totalLength = path.getTotalLength();
    gsap.set(path, { strokeDasharray: totalLength, strokeDashoffset: totalLength });

    const scrollTween = gsap.to(svg, {
      x: () => -(svg.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${svg.scrollWidth * 1.2}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        markers: false,
      },
    });
    animationRefs.current.push(scrollTween);

    const pathAnimation = gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${svg.scrollWidth * 1.2}`,
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
    animationRefs.current.push(pathAnimation);

    circles.forEach((c, i) => {
      const circleAnimation = gsap.fromTo(
        circleRefs.current[i],
        { scale: 0.3, opacity: 0, y: 50 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          ease: "elastic.out(1,0.5)",
          duration: 1,
          scrollTrigger: {
            trigger: svg,
            start: () => `${(c.cx / svg.scrollWidth) * 100}% center`,
            end: "+=300",
            invalidateOnRefresh: true,
          },
        }
      );
      animationRefs.current.push(circleAnimation);

      const imageAnimation = gsap.fromTo(
        imageRefs.current[i],
        { opacity: 0, scale: 0.7, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          ease: "power2.out",
          duration: 0.8,
          scrollTrigger: {
            trigger: svg,
            start: () => `${(c.cx / svg.scrollWidth) * 100}% center`,
            end: "+=300",
            invalidateOnRefresh: true,
          },
        }
      );
      animationRefs.current.push(imageAnimation);

      const textAnimation = gsap.fromTo(
        textRefs.current[i],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          duration: 0.6,
          scrollTrigger: {
            trigger: svg,
            start: () => `${(c.cx / svg.scrollWidth) * 100}% center`,
            end: "+=300",
            invalidateOnRefresh: true,
          },
        }
      );
      animationRefs.current.push(textAnimation);

      const descLines = descRefs.current[i] || [];
      descLines.forEach((descLine, lineIndex) => {
        if (descLine) {
          const descAnimation = gsap.fromTo(
            descLine,
            { opacity: 0, y: 30 + lineIndex * 8 },
            {
              opacity: 1,
              y: 0,
              ease: "power2.out",
              duration: 0.6,
              delay: lineIndex * 0.08,
              scrollTrigger: {
                trigger: svg,
                start: () => `${(c.cx / svg.scrollWidth) * 100}% center`,
                end: "+=300",
                invalidateOnRefresh: true,
              },
            }
          );
          animationRefs.current.push(descAnimation);
        }
      });
    });

    return () => {
      animationRefs.current.forEach((ref) => ref?.kill?.());
      animationRefs.current = [];

      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === section || st.trigger === svg) {
          st.kill();
        }
      });
    };
  }, [circles, radius]);

  useEffect(() => {
    circleRefs.current = circleRefs.current.slice(0, circles.length);
    textRefs.current = textRefs.current.slice(0, circles.length);
    descRefs.current = descRefs.current.slice(0, circles.length);
    imageRefs.current = imageRefs.current.slice(0, circles.length);
  }, [circles.length]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden bg-black text-white flex items-center justify-start py-16 isolate"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      {/* Heading */}
      <div
        className="absolute top-24 left-1/2 -translate-x-1/2 text-center z-10 w-full px-4"
        style={{ fontFamily: "Outfit, sans-serif" }}
      >
        <p className="text-xs sm:text-sm text-black tracking-wide uppercase mb-2">
          Our Process
        </p>
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight text-[#ffffff] capitalize"
          style={{
            textShadow: "none",
          }}
        >
          how we <span className="text-[#FFC016]">deliver</span> excellence
        </h1>
      </div>

      <div className="relative flex-shrink-0 w-[9000px] h-[600px] lg:h-[700px] 2xl:h-[800px] mx-auto z-10">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${svgWidth} 600`}
          className="w-[5000px] h-full"
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
              <stop offset="0%" stopColor="#ffb200" />
              <stop offset="50%" stopColor="#ffb200" />
              <stop offset="100%" stopColor="#ffb200" />
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
                : window.innerWidth >= 640
                ? 14 + radius / 10
                : 12;

            const descriptionLines = splitDescription(c.description);

            return (
              <g key={c.id}>
                {/* Circle outline */}
                <circle
                  ref={(el) => (circleRefs.current[idx] = el)}
                  cx={c.cx}
                  cy={c.cy}
                  r={radius}
                  fill="transparent"
                  stroke="#FFC016"
                  strokeWidth="2"
                />

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

                {/* Background rectangle for text */}
                <rect
                  x={c.cx - 220}
                  y={labelY - 25}
                  width="440"
                  height="130"
                  fill="rgba(0, 0, 0, 0.85)"
                  rx="15"
                />

                {/* Label text */}
                <text
                  ref={(el) => (textRefs.current[idx] = el)}
                  x={c.cx}
                  y={labelY}
                  textAnchor="middle"
                  fill="#FFC016"
                  fontSize={fontSize * 1.7}
                  fontWeight={400}
                  style={{
                    fontFamily: "Outfit, sans-serif",
                    letterSpacing: "1.5px",
                    textShadow: "none",
                  }}
                >
                  {c.label}
                </text>

                {/* Description text */}
                {descriptionLines.map((line, lineIndex) => (
                  <text
                    key={lineIndex}
                    ref={(el) => {
                      if (!descRefs.current[idx]) descRefs.current[idx] = [];
                      descRefs.current[idx][lineIndex] = el;
                    }}
                    x={c.cx}
                    y={descStartY + lineIndex * lineHeight}
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize={fontSize * 0.65}
                    fontWeight={400}
                    style={{
                      fontFamily: "Work Sans, sans-serif",
                      letterSpacing: "0.0px",
                      textShadow: "none",
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