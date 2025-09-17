import React from "react";
import { motion } from "framer-motion";
import TextReveal from "/src/Hooks/TextReveal.jsx";

const AppService = () => {
  const services = [
    "UI/UX Design",
    "iOS & Android Development",
    "QA & Testing",
    "Launch & Support",
  ];

  return (
    <section className="bg-neutral-950 py-24 px-6">
      {/* Title + Description */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.3 }}
        className="text-center max-w-2xl mx-auto mb-12"
      >
        <TextReveal>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.3 }}
            className="text-3xl font-bold text-white mb-4"
          >
            Our Services
          </motion.h2>
        </TextReveal>
        <TextReveal delay={0.2}>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-gray-400 text-base md:text-lg"
          >
            We provide end-to-end mobile and web solutions — from designing
            beautiful UI/UX, building high-performance apps, testing them for
            reliability, and supporting them post-launch.
          </motion.p>
        </TextReveal>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {services.map((title, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="bg-neutral-900 p-6 rounded-2xl shadow-lg border border-neutral-800 hover:border-white transition"
          >
            <h3 className="font-bold mb-2 text-white">{title}</h3>
            <p className="text-gray-400 text-sm">
              {i === 0 &&
                "Crafting intuitive and visually appealing interfaces."}
              {i === 1 && "Creating high-performance cross-platform apps."}
              {i === 2 &&
                "Ensuring quality and reliability through rigorous testing."}
              {i === 3 && "Providing ongoing support and maintenance."}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AppService;
