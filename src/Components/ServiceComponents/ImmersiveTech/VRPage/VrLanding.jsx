import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
        style={{ fontFamily: "Outfit, sans-serif" }}
      >
        Transform Your World with{" "}
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-500 font-semibold">
          Virtual Reality
        </span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-6 text-xs md:text-lg text-gray-300 max-w-2xl text-center px-6"
        style={{ fontFamily: "work-sans, sans-serif" }}
      >
        At ThirdVizion Labs, we create immersive VR experiences that enhance learning, training, and engagement.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-10 flex gap-6"
      >
        <Link to="/contact">
          <motion.button
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            className="hover:bg-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] hover:scale-[1.02] transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-purple-500/50 
              border border-purple-400/30 px-5 py-2.5 sm:px-6 sm:py-3 font-semibold backdrop-blur-md hover:scale-105 font-inter-tight inline-flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl bg-transparent md:px-8 tracking-wide text-sm sm:text-base lg:text-lg xl:text-xl
              mb-6 lg:mb-8"
          >
            Request a demo
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}