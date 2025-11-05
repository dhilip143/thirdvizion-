import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import digitalEnterpriseImage from "/src/assets/home/digital.png";
import healthcareImage from "/src/assets/home/helth.png";
import educationImage from "/src/assets/home/vrser.png";
import retailImage from "/src/assets/home/retail.png";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  { id: 1, number: "01/", name: "Digital Enterprise" },
  { id: 2, number: "02/", name: "Healthcare Innovation" },
  { id: 3, number: "03/", name: "Education Technology" },
  { id: 4, number: "04/", name: "Retail & E-commerce Solutions" },
];

const industryImages = [
  digitalEnterpriseImage,
  healthcareImage,
  educationImage,
  retailImage,
];

const Industries = () => {
  const overlayRefs = useRef([]);
  const numberTextRefs = useRef([]);
  const nameTextRefs = useRef([]);
  const imageOverlayRefs = useRef([]);

  // Different x-values for each industry item
  const hoverXValues = ["-262%", "-205%", "-205%", "-145%"];

  useGSAP(() => {
    gsap.from("#industry-item", {
      y: 80,
      opacity: 0,
      delay: 0.3,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: { trigger: "#industries" },
    });
  }, []);

  const handleMouseEnter = (index) => {
    if (window.innerWidth < 768) return;

    const overlayEl = overlayRefs.current[index];
    const imageOverlayEl = imageOverlayRefs.current[index];
    const numberEl = numberTextRefs.current[index];
    const nameEl = nameTextRefs.current[index];
    if (!overlayEl || !imageOverlayEl || !numberEl || !nameEl) return;

    gsap.killTweensOf([overlayEl, imageOverlayEl, numberEl, nameEl]);

    gsap.to(overlayEl, {
      width: "50%",
      x: "0%",
      duration: 0.8,
      ease: "power2.out",
    });

    gsap.to(imageOverlayEl, {
      x: "0%",
      duration: 0.8,
      ease: "power2.out",
    });

    gsap.to(numberEl, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    });

    const currentFontSize = window.getComputedStyle(nameEl).fontSize;
    const fontSizeValue = parseFloat(currentFontSize);
    const scaleValue = (fontSizeValue + 4) / fontSizeValue;

    gsap.to(nameEl, {
      x: hoverXValues[index],
      color: "#ffffff",
      scale: scaleValue,
      duration: 0.8,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    if (window.innerWidth < 768) return;

    const overlayEl = overlayRefs.current[index];
    const imageOverlayEl = imageOverlayRefs.current[index];
    const numberEl = numberTextRefs.current[index];
    const nameEl = nameTextRefs.current[index];
    if (!overlayEl || !imageOverlayEl || !numberEl || !nameEl) return;

    gsap.killTweensOf([overlayEl, imageOverlayEl, numberEl, nameEl]);

    gsap.to(overlayEl, {
      width: "100%",
      x: "100%",
      duration: 0.8,
      ease: "power2.inOut",
    });

    gsap.to(imageOverlayEl, {
      x: "100%",
      duration: 0.8,
      ease: "power2.inOut",
    });

    gsap.to(numberEl, {
      opacity: 1,
      duration: 0.6,
      delay: 0.2,
      ease: "power2.inOut",
    });

    gsap.to(nameEl, {
      x: 0,
      color: "#E5E7EB",
      scale: 1,
      duration: 0.8,
      ease: "power2.inOut",
    });
  };

  return (
    <section
      id="industries"
      className="bg-black text-white font-outfit py-24 px-6 md:px-20 lg:px-32 overflow-hidden"
    >
      {/* --- TOP SECTION --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
        <div className="flex-1">
          <h2
            className="text-[52px] md:text-6xl lg:text-[54px] font-medium leading-tight font-Outfit"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Turning <span className="text-yellow-400">vision</span> into impact.
          </h2>
        </div>
        <div className="flex-1 font-worksans text-gray-300 text-sm md:text-base leading-relaxed">
          We partner with organizations to unlock new opportunities and
          strengthen workforce capabilities. Through technology, training, and
          strategic collaboration, we enable industries to thrive. Our goal is
          to bridge skill gaps and foster sustainable business ecosystems.
        </div>
      </div>

      {/* --- LIST (ALIGNED TO HEADING + DESCRIPTION) --- */}
      <div className="relative flex flex-col font-work-sans bg-black border-t border-gray-700">
        {industries.map((industry, index) => (
          <div
            key={industry.id}
            id="industry-item"
            className="relative grid grid-cols-1 md:grid-cols-2 items-center py-8 px-2 md:px-6 border-b border-gray-700 cursor-pointer group overflow-hidden"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {/* Yellow overlay */}
            <div
              ref={(el) => (overlayRefs.current[index] = el)}
              className="absolute inset-0 z-10 hidden md:block"
              style={{
                width: "0%",
                transform: "translateX(0%)",
                left: 0,
                backgroundImage:
                  "linear-gradient(to right, #facc15 80%, transparent 100%)", // yellow-400 fade right
              }}
            ></div>

            {/* Right image overlay with left fade effect */}
            <div
              ref={(el) => (imageOverlayRefs.current[index] = el)}
              className="absolute top-0 right-0 h-full w-1/2 z-20 hidden md:block"
              style={{
                backgroundImage: `url(${industryImages[index]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                transform: "translateX(100%)",
                // fade effect on the left side of the image
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 15%, black 100%)",
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 15%, black 100%)",
              }}
            ></div>

            {/* Left column (number) */}
            <div className="relative z-30 flex justify-start md:justify-start">
              <h3
                ref={(el) => (numberTextRefs.current[index] = el)}
                className="text-2xl md:text-3xl font-outfit text-gray-300"
              >
                {industry.number}
              </h3>
            </div>

            {/* Right column (name) */}
            <div className="relative z-30 flex justify-start md:justify-start">
              <p
                ref={(el) => (nameTextRefs.current[index] = el)}
                className="text-xl md:text-2xl lg:text-[28px] font-outfit text-gray-100 transition-colors duration-300 transform origin-left"
              >
                {industry.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;
