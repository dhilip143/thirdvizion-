import React from "react";
import { motion } from "framer-motion";

const AppService = () => {
  return (
    <>
      <section className="bg-neutral-950 py-24 px-6">
        <h2 className="text-center text-3xl font-bold text-white mb-12">
          Our Services
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            "UI/UX Design",
            "iOS & Android Development",
            "QA & Testing",
            "Launch & Support",
          ].map((title, i) => (
            <motion.div
              key={i}
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
    </>
  );
};

export default AppService;
