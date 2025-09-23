import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import DashBoardimage from "/src/assets/HeroImages/HeroHeader.webp";

const ERPDashboard = () => {
  const { scrollYProgress } = useScroll();

  // Parallax scale effect while scrolling
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.3, 1]);

  return (
    <section className="relative h-[120vh] md:h-[180vh] ">
      {/* Sticky Container */}
      <div className="sticky top-30 md:top-0 flex justify-center items-center md:h-screen px-4">
        <motion.div
          style={{ scale }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center items-center max-w-6xl w-full"
        >
          <motion.img
            src={DashBoardimage}
            alt="Dashboard preview"
            className="w-full md:w-4/5 lg:w-3/4 rounded-3xl shadow-[0_0_40px_rgba(124,134,255,0.15)] hover:shadow-[0_0_60px_rgba(124,134,255,0.35)] transition-all duration-500 ease-out"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ERPDashboard;
