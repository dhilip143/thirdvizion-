import React, { useRef } from "react";
// Note: Icon is imported in your file but not used, I've left it.
import { Icon } from "@iconify/react/dist/iconify.js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import digitalEnterpriseImage from "/src/assets/HomeImages/m.jpg";
import healthcareImage from "/src/assets/HomeImages/mm.jpg";
import educationImage from "/src/assets/HomeImages/mmm.jpg";
import retailImage from "/src/assets/HomeImages/mmmm.jpg";
import manufacturingImage from "/src/assets/HomeImages/mmmmm.jpg"; // Note: This 5th image is not used as there are 4 industries

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    id: 1,
    number: "01/",
    name: "Digital Enterprise",
  },
  {
    id: 2,
    number: "02/",
    name: "Healthcare Innovation",
  },
  {
    id: 3,
    number: "03/",
    name: "Education Technology",
  },
  {
    id: 4,
    number: "04/",
    name: "Retail & E-commerce Solutions",
  },
];

// Array of images to match the industries array
const industryImages = [
  digitalEnterpriseImage,
  healthcareImage,
  educationImage,
  retailImage,
];

const Industries = () => {
  const overlayRefs = useRef([]);
  // *** MODIFIED REFS ***: We now need separate refs for the number and the name
  const numberTextRefs = useRef([]);
  const nameTextRefs = useRef([]);

  useGSAP(() => {
    // Scroll-in animation for the list (This is unchanged)
    gsap.from("#industry-item", {
      y: 80,
      opacity: 0,
      delay: 0.3,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: { trigger: "#industry-item" },
    });
  }, []);

  // *** UPDATED FUNCTION ***
  const handleMouseEnter = (index) => {
    if (window.innerWidth < 768) return;

    // Get all elements to animate
    const overlayEl = overlayRefs.current[index];
    const numberEl = numberTextRefs.current[index];
    const nameEl = nameTextRefs.current[index];
    if (!overlayEl || !numberEl || !nameEl) return;

    // Kill any existing tweens on all elements
    gsap.killTweensOf([overlayEl, numberEl, nameEl]);

    // 1. Animate the yellow bar in (Unchanged)
    gsap.fromTo(
      overlayEl,
      { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }, // Start
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", // End
        duration: 0.3,
        ease: "power2.out",
      }
    );

    // 2. Animate the Number (Fade Out)
    gsap.to(numberEl, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
    });

    // 3. Animate the Name (Slide Left)
    // We calculate the exact distance to move
    const distance =
      numberEl.getBoundingClientRect().left -
      nameEl.getBoundingClientRect().left;

    gsap.to(nameEl, {
      x: distance, // Move to the number's position
      duration: 0.3,
      ease: "power2.out",
    });
  };

  // *** UPDATED FUNCTION ***
  const handleMouseLeave = (index) => {
    if (window.innerWidth < 768) return;

    // Get all elements
    const overlayEl = overlayRefs.current[index];
    const numberEl = numberTextRefs.current[index];
    const nameEl = nameTextRefs.current[index];
    if (!overlayEl || !numberEl || !nameEl) return;

    // Kill any existing tweens
    gsap.killTweensOf([overlayEl, numberEl, nameEl]);

    // 1. Animate the yellow bar out (Unchanged)
    gsap.to(overlayEl, {
      clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", // End
      duration: 0.3,
      ease: "power2.in",
    });

    // 2. Bring the Number back (Fade In)
    gsap.to(numberEl, {
      opacity: 1, // Fade back in
      duration: 0.3,
      ease: "power2.in",
    });

    // 3. Bring the Name back (Slide Right)
    gsap.to(nameEl, {
      x: 0, // Back to original position
      duration: 0.3,
      ease: "power2.in",
    });
  };

  return (
    <section
      id="industries"
      className="bg-black text-white font-outfit py-24 px-6 md:px-20 lg:px-32 overflow-hidden"
    >
      {/* --- TOP CONTENT (Title + Paragraph) --- (Unchanged) */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
        <div className="flex-1">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Turning <span className="text-yellow-400">vision</span> into impact.
          </h2>
        </div>
        <div className="flex-1 font-work-sans text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">
          We partner with organizations to unlock new opportunities and strengthen
          workforce capabilities. Through technology, training, and strategic
          collaboration, we enable industries to thrive. Our goal is to bridge
          skill gaps and foster sustainable business ecosystems.
        </div>
      </div>

      {/* --- UPDATED LIST --- */}
      <div className="relative flex flex-col font-work-sans bg-black border-t border-gray-700">
        {industries.map((industry, index) => (
          <div
            key={industry.id}
            id="industry-item"
            className="relative flex justify-between items-center py-8 px-2 md:px-6 border-b border-gray-700 cursor-pointer group overflow-hidden"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {/* --- 1. Animated Overlay (Yellow + Image + HOVER TEXT) --- (Unchanged) */}
            <div
              ref={(el) => (overlayRefs.current[index] = el)}
              className="absolute inset-0 z-10 hidden md:block"
              style={{
                backgroundImage: `url(${industryImages[index]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
              }}
            >
              {/* Yellow Gradient Blend (matches your image) */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, #FFC016 45%, rgba(255, 192, 22, 0.7) 70%, transparent 90%)",
                }}
              />

              {/* --- 3. Hover Text (Black) --- (Unchanged) */}
              <div className="absolute inset-0 flex items-center py-8 px-2 md:px-6 z-30">
                <p className="text-xl md:text-2xl lg:text-[28px] font-outfit text-black font-medium">
                  {industry.name}
                </p>
              </div>
            </div>

            {/* --- 2. Default Text (White/Gray) --- */}
            {/* *** MODIFIED ***: Removed the ref from this container */}
            <div
              className="relative flex justify-between items-center w-full z-0"
            >
              <h3
                // *** ADDED REF ***
                ref={(el) => (numberTextRefs.current[index] = el)}
                className="text-2xl md:text-3xl font-outfit text-gray-300"
              >
                {industry.number}
              </h3>
              <p
                // *** ADDED REF ***
                ref={(el) => (nameTextRefs.current[index] = el)}
                className="text-xl md:text-2xl lg:text-[28px] font-outfit text-gray-100"
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