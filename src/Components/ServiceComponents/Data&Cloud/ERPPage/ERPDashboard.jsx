import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import DashBoardimage from "/src/assets/HeroImages/HeroHeader.webp";

const ERPDashboard = () => {
  const { scrollYProgress } = useScroll();
  
  // Optional: Slight scale or parallax effect while scrolling
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.2, 0.5]);

  return (
    <section className="relative h-[300vh] bg-black">
      {/* This section is twice the viewport height so you can scroll */}
      
      {/* Pinned Container */}
      <div className="sticky top-0 flex justify-center items-center h-screen">
        <motion.div className="w-full md:w-1/2">

        </motion.div>
        <motion.div
          style={{ scale }}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center items-center"
        >
          <motion.img
            src={DashBoardimage}
            alt="Dashboard preview"
            className="rounded-4xl shadow-2xl hover:shadow-blue-500/40 transition-all duration-500 ease-out z-20"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ERPDashboard;
