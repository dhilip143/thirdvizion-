import React from "react";
import { motion } from "framer-motion";
import TextReveal from "/src/Hooks/TextReveal.jsx";

const AppStack = () => {
  const techs = Array.from({ length: 10 }, (_, i) => `Tech ${i + 1}`);

  return (
    <section className="py-24 px-6 bg-black w-full h-screen flex flex-col justify-center items-center text-white text-center">
      {/* Heading + Description */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.3 }}
        className="max-w-2xl mx-auto mb-12"
      >
        <TextReveal>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.3 }}
            className="text-3xl font-bold mb-4"
          >
            Our Tech Stack
          </motion.h2>
        </TextReveal>
        <TextReveal delay={0.2}>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.3 }}
            className="text-gray-400 text-base md:text-lg"
          >
            Explore the core technologies that power our web and mobile
            applications — ensuring performance, scalability, and a delightful
            user experience.
          </motion.p>
        </TextReveal>
      </motion.div>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="slider mt-10"
        style={{
          "--width": "8rem", // card width
          "--height": "8rem", // card height
          "--quantity": techs.length,
          "--time": "30s", // animation duration
        }}
      >
        <div className="list">
          {techs.map((tech, i) => (
            <div
              className="item flex items-center justify-center bg-neutral-900 border border-neutral-800 rounded-xl text-sm md:text-base"
              style={{ "--position": i + 1 }}
              key={i}
            >
              {tech}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AppStack;
