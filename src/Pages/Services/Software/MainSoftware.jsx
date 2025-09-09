

import React from "react";

import {
  FaReact,
  FaWordpress,
  FaPython,
  FaPhp,
} from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { motion } from "framer-motion";
import ProjectGallery from "./ProjectGallery"; // ✅ relative import

const techStack = [
  {
    name: "React",
    icon: FaReact,
    desc: "Modern UI development with reusable components.",
    bg: "https://wallpapercave.com/wp/wp4923992.png",
  },
  {
    name: "WordPress",
    icon: FaWordpress,
    desc: "Custom CMS solutions for flexible websites.",
    bg: "https://wallpaperaccess.com/full/1556666.jpg",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    desc: "Fast and scalable backend APIs.",
    bg: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*eUOH3D33A9tN7E1J9N2g8A.png",
  },
  {
    name: "Python",
    icon: FaPython,
    desc: "Reliable backend, AI, and automation solutions.",
    bg: "https://wallpapercave.com/wp/wp6600388.jpg",
  },
  {
    name: "PHP",
    icon: FaPhp,
    desc: "Dynamic server-side applications.",
    bg: "https://wallpapercave.com/wp/wp6600386.jpg",
  },
];

const OurWorkAnimated = () => {
  return (
    <>
      {/* First Section */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-blue-500 to-red-500 bg-clip-text text-transparent mb-6">
            About ThirdVizion
          </h1>

          {/* Gradient colored description */}
          <p className="bg-gradient-to-r from-yellow-400 via-green-400 to-blue-400 bg-clip-text text-transparent mb-12 max-w-3xl mx-auto text-lg leading-relaxed">
            At <span className="font-semibold">ThirdVizion</span>, we specialize in
            creating next-gen digital experiences. Our team blends design,
            development, and innovation to deliver modern, scalable, and
            user-friendly websites and applications.
          </p>

          {/* Animated Tech Stack Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {techStack.map((tech, index) => {
              const Icon = tech.icon; // dynamic icon component
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, rotateY: 90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.3,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="relative rounded-2xl shadow-lg overflow-hidden group cursor-pointer h-56 flex items-end justify-center transform-gpu"
                  style={{
                    backgroundImage: `url(${tech.bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-70 group-hover:bg-yellow-400 transition duration-500"></div>

                  {/* Content */}
                  <div className="relative p-4 text-center z-10 transition duration-500 group-hover:text-black">
                    {/* Icon with hover effect */}
                    <Icon className="text-yellow-400 text-6xl mx-auto mb-4 transition duration-500 group-hover:text-black" />
                    <h3 className="text-lg font-bold text-yellow-200 group-hover:text-black transition">
                      {tech.name}
                    </h3>
                    <p className="text-sm mt-1 text-yellow-200 group-hover:text-black transition">
                      {tech.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-16"
          >
            <a
              href="/contact"
              className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-red-400 text-black font-semibold rounded-full shadow-lg hover:scale-105 transition"
            >
              Let’s Build Something Together 🚀
            </a>
          </motion.div>
        </div>
      </section>

      {/* ✅ Second Section (Projects) */}
      <ProjectGallery />
    </>
  );
};

export default OurWorkAnimated;
