import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import VR from "/src/assets/VR.png";

const VRHero = () => {
  // Get scroll progress (0 to 1)
  const { scrollY } = useScroll();

  // Parallax transforms
  const imageY = useTransform(scrollY, [0, 500], [0, 100]); // image moves slower
  const textY = useTransform(scrollY, [0, 1500], [0, 200]); // text moves down
  const textScale = useTransform(scrollY, [0, 500], [1, 0.8]); // scales up

  return (
    <div className="relative flex justify-center items-center w-full h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          // ref={(el) => (backgroundElementsRef.current[0] = el)}
          className="absolute -top-40 -left-40 w-80 h-80 bg-violet-700 rounded-full mix-blend-soft-light filter blur-xl opacity-30"
        ></div>
        <div
          // ref={(el) => (backgroundElementsRef.current[1] = el)}
          className="absolute top-1/4 -right-20 w-96 h-96 bg-indigo-600 rounded-full mix-blend-soft-light filter blur-xl opacity-20"
        ></div>
        <div
          // ref={(el) => (backgroundElementsRef.current[2] = el)}
          className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-700 rounded-full mix-blend-soft-light filter blur-xl opacity-30"
        ></div>

        {/* Grid pattern overlay */}
        <div
          // ref={gridPatternRef}
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"
        ></div>
      </div>
      {/* Background Image with Parallax */}
      <motion.img
        src={VR}
        alt="VR"
        style={{ y: imageY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-24 z-10"
      />

      {/* Transparent Text with Parallax */}
      <motion.h1
        style={{ y: textY, scale: textScale }}
        className="absolute top-50 left-1/2 -translate-x-1/2 -translate-y-1/2 
        text-8xl scale-400 font-extrabold z-0 text-white mix-blend-difference"
      >
        3RDVIZ
      </motion.h1>
    </div>
  );
};

export default VRHero;
