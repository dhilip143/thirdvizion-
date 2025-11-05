import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import TextReveal from "/src/Hooks/TextReveal.jsx";

const WebHero = () => {
  return (
    <section className="relative isolate pt-40 md:pt-0 md:min-h-screen flex items-center justify-center overflow-hidden text-white px-4 sm:px-6 md:px-8">
      <div className="relative z-10 mx-auto max-w-6xl text-center">
        {/* Badge / Tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ amount: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] sm:text-xs md:text-sm text-[#00d3f3] backdrop-blur-md"
        >
          <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-[#00d3f3]" />
          Cutting-Edge Web Development
        </motion.div>

        {/* Main Heading */}
        <TextReveal>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ amount: 1 }}
            className="mt-6 font-inter-tight text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-[1.15] sm:leading-[1.1] tracking-wide text-white"
          style={{ fontFamily: "Outfit, sans-serif" }} >
            The easiest path to build your <span className="text-[#00d3f3]">dream website.</span>
          </motion.h1>
        </TextReveal>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ amount: 0.8 }}
          className="mt-4 sm:mt-5 max-w-lg md:max-w-1xl lg:max-w-xl  mx-auto text-sm sm:text-base md:text-lg text-white/70 px-2 font-inter-tight"
        >
          At <span className="font-semibold text-[#00d3f3]" style={{ fontFamily: "work-sans, sans-serif" }}>ThirdVizion</span>, we
          craft scalable, performant, and visually stunning web experiences
          tailored to the users.
        </motion.p>

        {/* CTA Button (mild cyan accent) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ amount: 1 }}
          className="mt-8 sm:mt-10"
        >
          <a
            href="/contact"
            className="font-inter-tight inline-flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl border border-[#00d3f3]/40 bg-black px-5 sm:px-6 md:px-8 py-3 sm:py-4 font-medium sm:font-semibold tracking-wide text-sm sm:text-base md:text-lg shadow-[0_0_10px_rgba(0,211,243,0.3)] backdrop-blur-md transition-all duration-500 hover:shadow-[0_0_25px_rgba(0,211,243,0.5)] hover:scale-105 text-[#00d3f3]"
          >
            Let’s Build Something Together
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WebHero;

