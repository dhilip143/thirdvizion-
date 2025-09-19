import React from "react";
import sampleImage from "/src/assets/MobileTransparent.png"; // Replace with your image path
import TextReveal from "/src/Hooks/TextReveal.jsx";
import { motion, scale } from "framer-motion";

const AppAbout = () => {
  return (
    // <section className="bg-black w-full h-screen pl-30 flex gap-12 items-center justify-center">
    <section className="bg-black w-full min-h-screen flex flex-col md:flex-row gap-10 lg:gap-16 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 py-12">


      {/* Left Content */}
      <div className="w-full md:w-1/2">
        <TextReveal>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Crafting Exceptional Mobile Experiences
          </motion.h2>
        </TextReveal>
        <TextReveal delay={0.2}>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.5 }}
            className="text-gray-400 mb-6 text-base md:text-lg"
          >
            At Stitch, we specialize in creating mobile applications that are
            not only visually stunning but also highly functional and
            user-centric. Our team of experienced developers and designers work
            collaboratively to bring your vision to life, ensuring a seamless
            and engaging experience for your users.
          </motion.p>
        </TextReveal>
        <ul className="space-y-4 text-gray-300 text-sm md:text-base">
          <TextReveal delay={0.4}>
            <motion.li
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.5 }}
            >
              <span className="font-bold">• Innovative Design</span> — We focus
              on creating intuitive and visually appealing designs.
            </motion.li>
          </TextReveal>
          <TextReveal delay={0.5}>
            <motion.li
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.5 }}
            >
              <span className="font-bold">• Robust Development</span> — We
              utilize the latest technologies to build scalable and reliable
              applications.
            </motion.li>
          </TextReveal>
        </ul>
      </div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: -50 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.5 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <img
          src={sampleImage}
          alt="App Development Illustration"
          className="rounded-2xl shadow-lg w-3/4 sm:w-2/3 md:w-full max-w-md p-4 sm:p-6 md:p-10 object-cover"
        />
      </motion.div>
    </section>
  );
};

export default AppAbout;
