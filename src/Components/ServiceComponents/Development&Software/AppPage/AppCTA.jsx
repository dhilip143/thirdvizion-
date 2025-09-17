import React from "react";
import TextReveal from "/src/Hooks/TextReveal.jsx";
import { motion } from "framer-motion";

const AppCTA = () => {
  return (
    <>
      <section className="py-24 px-6 text-center bg-black text-white">
        <TextReveal>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.1 }}
            className="text-3xl font-bold mb-6"
          >
            Ready to Bring Your App Idea to Life?
          </motion.h2>
        </TextReveal>
        <TextReveal delay={0.2}>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.1 }}
            className="text-gray-400 mb-6 max-w-xl mx-auto"
          >
            Contact us today for a free consultation and let’s discuss how we
            can help you create a successful mobile application.
          </motion.p>
        </TextReveal>
        <button className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition">
          Get in Touch
        </button>
      </section>
    </>
  );
};

export default AppCTA;
