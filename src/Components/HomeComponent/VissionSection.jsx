// src/Components/HomeComponent/VissionSection.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VisionMission = () => {
  const lineRefs = useRef([]);

  useEffect(() => {
    // Top 10 different animations
    lineRefs.current.forEach((el, i) => {
      if (!el) return;
      
      switch (i % 10) {
        case 0: // fade + float up
          gsap.from(el, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          });
          break;
        case 1: // scale pop
          gsap.from(el, {
            scale: 0.5,
            opacity: 0,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: { trigger: el, start: "top 85%" },
          });
          break;
        case 2: // float left-right
          gsap.from(el, {
            x: -50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          });
          break;
        case 3: // float right-left
          gsap.from(el, {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          });
          break;
        case 4: // rotate + fade
          gsap.from(el, {
            rotation: 10,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          });
          break;
        case 5: // yoyo float
          gsap.to(el, {
            y: -10,
            repeat: -1,
            yoyo: true,
            duration: 2,
            ease: "sine.inOut",
          });
          break;
        case 6: // staggered letters
          if (el.querySelectorAll("span").length > 0) {
            gsap.from(el.querySelectorAll("span"), {
              y: 20,
              opacity: 0,
              stagger: 0.05,
              duration: 0.8,
              ease: "back.out(1.7)",
              scrollTrigger: { trigger: el, start: "top 85%" },
            });
          }
          break;
        case 7: // scale + rotate
          gsap.from(el, {
            scale: 0.8,
            rotation: -5,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          });
          break;
        case 8: // fade in with delay
          gsap.from(el, {
            opacity: 0,
            duration: 1,
            delay: 0.2,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          });
          break;
        case 9: // pulse effect
          gsap.fromTo(
            el,
            { scale: 1 },
            { scale: 1.05, repeat: -1, yoyo: true, duration: 1 }
          );
          break;
        default:
          break;
      }
    });
  }, []);

  const lines = [
    <div className="text-6xl lg:text-8xl xl:text-9xl font-bold py-2">
      We're Not Just{" "}
      <span className="text-yellow-400">Technology</span>
    </div>,
    
    <div className="text-6xl lg:text-8xl xl:text-9xl font-bold py-2">
      We're Redefining How{" "}
      <span className="text-green-400">Businesses</span>
    </div>,
    
    <div className="text-6xl lg:text-8xl xl:text-9xl font-bold py-2">
      And <span className="text-blue-400">Interact</span> In a
    </div>,
    
    <div className="text-6xl lg:text-8xl xl:text-9xl font-bold py-2">
      <span className="text-purple-400">Digital-First</span> World
    </div>,
    
    <div className="text-6xl lg:text-8xl xl:text-9xl font-bold py-2">
      Every Solution We Create{" "}
      <span className="text-red-400">Merges</span>
    </div>,
    
    <div className="text-6xl lg:text-8xl xl:text-9xl font-bold py-2">
      <span className="text-cyan-400">Creativity</span>, Strategy, And
    </div>,
    
    <div className="text-6xl lg:text-8xl xl:text-9xl font-bold py-2">
      <span className="text-pink-400">Innovation</span> To Create
    </div>,
    
    <div className="text-6xl lg:text-8xl xl:text-9xl font-bold py-2">
      Meaningful <span className="text-yellow-400">Impact</span>
    </div>,
  ];

  return (
    <div className="bg-black w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="text-center text-white w-full max-w-7xl">
        {/* Vision & Mission Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-yellow-400 autoBlur mb-8 lg:mb-12">
          Vision & Mission
        </h2>
        
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold autoBlur mb-12 lg:mb-16 leading-tight">
          Driving Innovation<br />Beyond Boundaries
        </h1>

        {/* Content Lines */}
        <div className="text-left space-y-1 lg:space-y-2">
          {lines.map((line, idx) => (
            <div
              key={idx}
              ref={(el) => (lineRefs.current[idx] = el)}
              className="autoBlur leading-none"
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisionMission;