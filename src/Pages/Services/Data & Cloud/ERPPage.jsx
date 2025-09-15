import ERPHero from "/src/Components/ServiceComponents/Data&Cloud/ERPPage/ERPHero.jsx";
import Benifits from "/src/Components/ServiceComponents/Data&Cloud/ERPPage/ERPBenefits";
import ERPAnalytics from "/src/Components/ServiceComponents/Data&Cloud/ERPPage/ERPAnalytics.jsx";
// import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import erpImg from "/src/assets/ERPimage.jpg";
import Benefits from "/src/Components/ServiceComponents/Data&Cloud/ERPPage/ERPBenefits.jsx";

/* ========================= ERP Hero ========================= */
export default function ERPPage() {
  return (
    <>
      <section className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden">
        {/* Foreground Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-400 mb-6">
              ERP Solutions
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Streamline operations, enhance decision-making, and improve
              productivity with our next-gen ERP systems.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:scale-105 transition">
                Get Started
              </button>
              <button className="px-6 py-3 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transition">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <img
              src={erpImg}
              alt="ERP Dashboard"
              className="max-w-md rounded-xl shadow-lg shadow-cyan-500/30"
            />
          </motion.div>
        </div>
      </section>
      <ERPHero />
      <Benefits />
      <ERPAnalytics />
    </>
  );
}
