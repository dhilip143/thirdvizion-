import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import TextReveal from "/src/Hooks/TextReveal.jsx";

const WebHero = () => {
  return (
    <section className="relative isolate min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glows (mild cyan) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-40 left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full blur-2xl"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(0, 211, 243, 0.15), transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-40 right-10 h-[50vh] w-[50vh] rounded-full blur-2xl"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(0, 211, 243, 0.15), transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center px-6">
        {/* Badge / Tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ amount: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#00d3f3]/30 bg-[#00d3f3]/10 px-3 py-1 text-xs text-white backdrop-blur-md"
        >
          <Sparkles className="h-4 w-4 text-[#00d3f3]" />
          Cutting-Edge Web Development
        </motion.div>

        {/* Main Heading */}
        <TextReveal>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ amount: 1 }}
            className="mt-6 font-inter-tight text-5xl font-black md:text-7xl text-white"
          >
            The easiest path to building your <span className="text-[#00d3f3]">dream website.</span>
          </motion.h1>
        </TextReveal>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ amount: 0.8 }}
          className="mt-5 max-w-2xl mx-auto text-white/70"
        >
          At <span className="font-semibold text-[#00d3f3]">ThirdVizion</span>, we
          craft scalable, performant, and visually stunning web experiences —
          tailored to your users.
        </motion.p>

        {/* CTA Button (mild cyan accent) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ amount: 1 }}
          className="mt-10"
        >
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#00d3f3]/40 bg-black px-8 py-4 font-semibold tracking-wide shadow-[0_0_10px_rgba(0,211,243,0.3)] backdrop-blur-md transition hover:shadow-[0_0_25px_rgba(0,211,243,0.5)] hover:scale-105 text-[#00d3f3]"
          >
            Let’s Build Something Together
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WebHero;
