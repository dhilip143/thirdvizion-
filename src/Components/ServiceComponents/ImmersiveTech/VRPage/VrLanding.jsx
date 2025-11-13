import React from "react";
import { motion } from "framer-motion";

export default function VrLanding() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent text-white">
      {/* Background Grid Overlay */}
     

      {/* Neon Glow Blobs */}
     
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-center"
       style={{ fontFamily: "Outfit, sans-serif" }} >
        Transform Your World with{" "}
        
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-500 font-semibold  ">
          Virtual Reality
        </span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-6 text-xs md:text-lg text-gray-300 max-w-2xl text-center px-6 "
       style={{ fontFamily: "work-sans, sans-serif" }} >
At ThirdVizion Labs, we create immersive VR experiences that enhance learning, training, and engagement.   </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-10 flex gap-6"
      >
        {/* <button onClick={ContactPage} className="px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
         Explore us 
        </button> */}

        


        {/* <button className="px-6 py-3 border border-purple-400 text-purple-400 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300">
          View Solutions
        </button> */}
      </motion.div>
    </section>
  );
}