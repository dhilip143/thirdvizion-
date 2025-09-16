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
