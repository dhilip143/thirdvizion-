// src/components/BlogLandingSmartCards.jsx
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const services = [
  "Immersive Tech",
  "Virtual Reality",
  "Augmented Reality",
  "3D Services",
  "Data & Cloud",
  "CRM Solutions",
  "IAM Solutions",
  "ERP Solutions",
  "Server Management",
  "Development",
  "Web Development",
  "Mobile Apps",
  "Game Development",
];

const BlogLandingSmartCards = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const revealCard = (index) => {
      if (index >= services.length) return;
      setVisibleCards((prev) => {
        const newState = [...prev];
        newState[index] = true;
        return newState;
      });
      setTimeout(() => revealCard(index + 1), 300); // delay for next card
    };
    revealCard(0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-16 relative">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome to Our Blog
        </h1>
        <p className="text-gray-400 text-lg md:text-xl">
          Explore insights on immersive tech, VR, AR, 3D, cloud, development, and more.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 relative">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={visibleCards[i] ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="relative bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-700 cursor-pointer overflow-hidden hover:border-[#FF700A]"
          >
            <motion.h2
              className="text-xl md:text-2xl font-semibold mb-2 border-b border-[#FF700A] inline-block"
              initial={{ width: 0 }}
              animate={visibleCards[i] ? { width: "100%" } : {}}
              transition={{ duration: 0.6 }}
            >
              {service}
            </motion.h2>
            <p className="text-gray-400 text-sm md:text-base mt-2">
              Learn about {service} and how it can transform your business and projects.
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogLandingSmartCards;
