import React from "react";
import { motion } from "framer-motion";

const WebHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Floating animated circles (for depth) */}
      <motion.div
        className="absolute w-72 h-72 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full blur-3xl opacity-20 top-10 left-10"
        animate={{ x: [0, 30, -30, 0], y: [0, 20, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20 bottom-10 right-10"
        animate={{ x: [0, -40, 40, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 text-center max-w-4xl px-6">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg"
        >
          We Build Digital Experiences
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-2xl text-gray-300 mt-6 leading-relaxed"
        >
          At <span className="font-semibold text-yellow-400">ThirdVizion</span>,
          we design and develop modern, scalable, and user-friendly websites to
          bring your vision to life.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10"
        >
          <a
            href="/contact"
            className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-pink-500 text-black font-semibold rounded-full shadow-lg hover:scale-105 transition transform"
          >
            Let’s Build Something Together 🚀
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WebHero;
