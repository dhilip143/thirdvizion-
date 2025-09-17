import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TextReveal from "/src/Hooks/TextReveal.jsx";

const WebCTA = () => {
  return (
    <section className="w-full bg-black text-white py-24 px-6 flex flex-col items-center text-center">
      <TextReveal>
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ready to Elevate Your Business?
        </motion.h2>
      </TextReveal>
      <TextReveal delay={0.2}>
        <motion.p
          className="text-gray-300 text-lg max-w-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Join hundreds of professionals who are transforming their workflow
          with our innovative solutions. Take the next step toward efficiency
          and growth.
        </motion.p>
      </TextReveal>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link to={"/contact"}>
          <motion.a
            href=""
            className="bg-white text-black font-bold px-8 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200"
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
