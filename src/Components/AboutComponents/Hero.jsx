import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center text-center py-20 px-6 bg-black">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="border-4 border-yellow-400 rounded-2xl p-10 shadow-[0_0_30px_rgba(255,255,0,0.5)] max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-blue-500 via-green-500 to-red-500 bg-clip-text text-transparent">
            About ThirdVizion
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-300 mx-auto">
            At{" "}
            <span className="font-semibold text-yellow-400">ThirdVizion</span>,
            we are more than just a technology company. Our mission is to
            deliver cutting-edge solutions that not only solve challenges but
            also create new opportunities across industries.
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
