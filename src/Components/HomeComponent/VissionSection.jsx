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
      switch (i % 10) {
        case 0: // fade + float up
          gsap.from(el, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 80%" },
          });
          break;
        case 1: // scale pop
          gsap.from(el, {
            scale: 0.5,
            opacity: 0,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: { trigger: el, start: "top 80%" },
          });
          break;
        case 2: // float left-right
          gsap.from(el, {
            x: -50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 80%" },
          });
          break;
        case 3: // float right-left
          gsap.from(el, {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 80%" },
          });
          break;
        case 4: // rotate + fade
          gsap.from(el, {
            rotation: 10,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 80%" },
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
          gsap.from(el.querySelectorAll("span"), {
            y: 20,
            opacity: 0,
            stagger: 0.05,
            duration: 0.8,
            ease: "back.out(1.7)",
            scrollTrigger: { trigger: el, start: "top 80%" },
          });
          break;
        case 7: // scale + rotate
          gsap.from(el, {
            scale: 0.8,
            rotation: -5,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 80%" },
          });
          break;
        case 8: // fade in with delay
          gsap.from(el, {
            opacity: 0,
            duration: 1,
            delay: 0.2,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 80%" },
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
    <div className="ml-90 text-7xl py-10">
      We’re Not Just{" "}
      {/* <span className="inline-block align-middle"> */}
      {/* <img
          src="https://images.unsplash.com/photo-1581090464764-1c1ef6a60640?q=80&w=200&h=100&fit=crop"
          alt="technology"
          className="inline-block w-16 h-10 sm:w-20 sm:h-12 md:w-24 md:h-14 lg:w-28 lg:h-16 object-cover rounded-full"
        /> */}
      {/* </span>{" "} */}
      Technology
    </div>,
    <div className="text-7xl py-10">
      We’re Redefining How Businesses And{" "}
      {/* <span className="inline-block align-middle">
        <img
          src="https://images.unsplash.com/photo-1603791452906-bc3c37e62c5a?q=80&w=200&h=100&fit=crop"
          alt="interact"
          className="inline-block w-16 h-10 sm:w-20 sm:h-12 md:w-24 md:h-14 lg:w-28 lg:h-16 object-cover rounded-full"
        />
      </span>{" "} */}
      Interact
    </div>,
    <div className="ml-90 text-7xl py-10">
      In a Digital-First{" "}
      {/* <span className="inline-block align-middle">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"
          alt="earth"
          className="inline-block w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-cover rounded-full"
        />
      </span> */}
      . Every Solution We
    </div>,
    <div className="ml-50 text-7xl py-10">
      {/* <span className="inline-block align-middle">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
          alt="delivery"
          className="inline-block  w-14 h-10 sm:w-16 sm:h-12 md:w-18 md:h-14 lg:w-20 lg:h-16 object-contain bg-green-500 rounded-full p-2"
        />
      </span>{" "} */}
      Merges Creativity, Strategy, And
    </div>,
    <div className="text-7xl py-10">
      Innovation To Create Meaningfull{" "}
      {/* <span className="inline-block align-middle">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=200&h=100&fit=crop"
          alt="impact"
          className="inline-block w-16 h-10 sm:w-20 sm:h-12 md:w-24 md:h-14 lg:w-28 lg:h-16 object-cover rounded-full"
        />
      </span> */}
    </div>,
  ];

  return (
    <div className="bg-black w-full min-h-screen flex items-center px-4 sm:px-6 lg:px-12 xl:px-5">
      <div className="text-left text-white  space-y-6">
        <h2 className="text-xs sm:text-sm md:text-base xl:text-6xl text-center  text-yellow-400 autoBlur">
          Vision & Mission
        </h2>
        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-7xl py-10 font-normal  autoBlur">
          Driving Innovation Beyond Boundaries
        </h1>

        <p className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light leading-relaxed sm:leading-snug space-y-6">
          {lines.map((line, idx) => (
            <span
              key={idx}
              ref={(el) => (lineRefs.current[idx] = el)}
              className="block autoBlur"
            >
              {line}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default VisionMission;
