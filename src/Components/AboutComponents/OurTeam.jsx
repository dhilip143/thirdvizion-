import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

import lap from "/src/assets/AboutImages/lap.png";
import mow from "/src/assets/AboutImages/mou.png";
import wow from "/src/assets/AboutImages/dhilip.jpg";
import hav from "/src/assets/AboutImages/hav.png";
import call from "/src/assets/AboutImages/call.png";
import bow from "/src/assets/AboutImages/bow.png";
import how from "/src/assets/AboutImages/how.png";
import vow from "/src/assets/AboutImages/vow.png";
import tow from "/src/assets/AboutImages/tow.png";
import low from "/src/assets/AboutImages/low.png";

function OurTeam() {
  const images = [lap, mow, wow, hav, call, bow, how, vow, tow, low];

  const teamData = [
    { name: "Tharun Joel", role: "3D Graphic Designer", desc: "Specializes in crafting seamless user experiences and modern interfaces." },
    { name: "Paazil Parvesh", role: "Web Developer", desc: "Expert in APIs, databases, and scalable architectures." },
    { name: "Dhilip Kumar", role: "Web Developer", desc: "Focused on building dynamic and interactive React applications." },
    { name: "Rajesh", role: "Unity Developer", desc: "Ensures timely delivery and smooth communication across teams." },
    { name: "Shammi Kumar", role: "Full Stack Developer", desc: "Automates deployments and manages cloud infrastructure." },
    { name: "Yeswanth", role: "Python Developer", desc: "Maintains product quality through testing and bug tracking." },
    { name: "Sathiya Narayanan", role: "DevOps Engineer", desc: "Builds performant apps for Android and iOS using React Native." },
    { name: "Santhosh Kumar", role: "UI/UX Designer", desc: "Bridges business needs with technical solutions." },
    { name: "Vishnu Priya", role: "Frontend Developer", desc: "Develops intelligent models for data-driven applications." },
    { name: "Saravana Priya", role: "Frontend Developer", desc: "Creates engaging content and manages digital communication." },
    { name: "Jebamalai Jero ", role: "CRM Specialist", desc: "Creates engaging content and manages digital communication." },
    { name: "Arulwin Rex", role: "Digital Alchemist", desc: "Creates engaging content and manages digital communication." },
    { name: "Ragul", role: "Graphic Designer", desc: "Creates engaging content and manages digital communication." },
    { name: "Akash", role: "Game Developer", desc: "Creates engaging content and manages digital communication." },
    { name: "Rakesh", role: "3D Modular", desc: "Creates engaging content and manages digital communication." },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const circleRef = useRef(null);
  const imageRefs = useRef([]);

  // Rotate circle continuously
  useEffect(() => {
    gsap.to(circleRef.current, {
      rotate: 360,
      duration: 40,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  // Zoom animation when active image changes
  useEffect(() => {
    imageRefs.current.forEach((el, index) => {
      if (!el) return;
      if (index === activeIndex) {
        gsap.to(el, { scale: 1.2, duration: 0.5, ease: "power3.out" });
      } else {
        gsap.to(el, { scale: 1, duration: 0.5, ease: "power3.out" });
      }
    });
  }, [activeIndex]);

  return (
    <div className="bg-black min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Circle Wrapper */}
      <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px]">
        {/* Rotating Circle */}
        <div
          ref={circleRef}
          className="relative w-full h-full flex items-center justify-center"
        >
          {images.map((img, index) => {
            const angle = (index / images.length) * 360;
            const radius = 480;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                ref={(el) => (imageRefs.current[index] = el)}
                className={`absolute w-[160px] h-[160px] rounded-full shadow-xl border border-gray-700 overflow-hidden bg-gray-900 cursor-pointer hover:ring-2 hover:ring-orange-500 transition-transform ${activeIndex === index ? "ring-4 ring-orange-500" : ""
                  }`}
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                }}
              >
                {/* Keep upright */}
                <div
                  style={{
                    transform: `rotate(${-angle}deg)`,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <img
                    src={img}
                    alt={`team-${index}`}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Center Content */}
      {/* Center Content */}
      <motion.div
        key={activeIndex} // 🔑 re-mounts and triggers animation on index change
        className="relative text-center max-w-xl px-6 z-10 top-[150px]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-white text-3xl md:text-5xl font-bold leading-snug">
          {teamData[activeIndex].name}
        </h2>
        <p className="text-yellow-400 text-sm font-semibold mt-2">
          {teamData[activeIndex].role}
        </p>
        <p className="text-gray-300 text-xs mt-4">{teamData[activeIndex].desc}</p>
      </motion.div>


    </div>
  );
}

export default OurTeam;
