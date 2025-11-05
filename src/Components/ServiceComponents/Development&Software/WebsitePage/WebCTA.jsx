import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TextReveal from "/src/Hooks/TextReveal.jsx";

const WebCTA = () => {
  return (
    <section className="w-full py-24 px-6 flex flex-col items-center text-center">
      <TextReveal>
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-4 text-[#00d3f3]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
         style={{ fontFamily: "Outfit, sans-serif" }}>
          Ready to Elevate Your Business?
        </motion.h2>
      </TextReveal>
      <TextReveal delay={0.2}>
        <motion.p
          className="text-gray-300 text-lg max-w-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
      style={{ fontFamily: "work-sans, sans-serif" }}  >
          Join hundreds of professionals who are transforming their workflow
          with our innovative solutions. Take the next step toward efficiency
          and growth.
        </motion.p>
      </TextReveal>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link to={"/contact"}>
          <motion.a
            href=""
            className="font-inter-tight inline-flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl border border-[#00d3f3]/40 bg-black px-5 sm:px-6 md:px-8 py-3 sm:py-4 font-medium sm:font-semibold tracking-wide text-sm sm:text-base md:text-lg shadow-[0_0_10px_rgba(0,211,243,0.3)] backdrop-blur-md transition-all duration-500 hover:shadow-[0_0_25px_rgba(0,211,243,0.5)] hover:scale-105 text-[#00d3f3]"
            whileHover={{ scale: 1.05 }}
          >
            Get Started
          </motion.a>
        </Link>
      </div>
    </section>
  );
};

export default WebCTA;
