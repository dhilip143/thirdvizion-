
import React from "react";
import { motion } from "framer-motion";
import ContactIllustration from "/src/assets/HomeImages/CategoryImages/ContactIllustrator/Contactillustration.png";

const text = "Scale Smarter With Remote Teams";

const HeroDark = () => {
  return (
    <section className="relative ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 min-h-screen px-6 pt-20">
        {/* Left: Illustration */}
        <div className="flex items-center justify-center">
          <motion.img
            src={ContactIllustration}
            alt="Contact illustration"
            className="w-[90%] max-w-xl object-contain drop-shadow-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-center px-6 py-12 space-y-6 text-center md:text-left">
          {/* Animated Heading */}
          <motion.h1
            className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.04,
                },
              },
            }}
          >
            {text.split("").map((char, i) => (
              <motion.span
                key={i}
                className={`${char === " "
                    ? "inline-block w-2"
                    : "bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 bg-clip-text text-transparent"
                  }`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <p className="text-gray-300 text-sm max-w-lg mx-auto md:mx-0">
            Collaborate asynchronously, streamline workflows, and manage global
            teams with confidence. Our platform makes remote collaboration feel
            natural, so your team stays productive, no matter where they are.
          </p>

          {/* ✨ Extra Content (Bullet Points) */}
          <div className="flex flex-col gap-3 text-gray-400 max-w-md mx-auto md:mx-0">
            <div className="flex flex-col md:flex-row items-center gap-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>Real-time messaging & file sharing</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              <span>Task management & progress tracking</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Seamless integrations with your tools</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroDark;
