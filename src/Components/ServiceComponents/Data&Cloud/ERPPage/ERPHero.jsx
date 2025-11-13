import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";


export default function HeroSection() {
  return (
    <section className="relative isolate w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Subtle gradient overlay with soft glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#7C86FF20] to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl h-screen text-center px-6 flex flex-col justify-center items-center">
        {/* Badge */}
       

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ amount: 0.3 }}
          className="mt-6 fotext-4xl md:text-5xl lg:text-6xl xl:text-7xl font-MEDIUM leading-[1.05] tracking-tight bg-gradient-to-r from-white via-[#dfe1ff] to-[#a9afff] bg-clip-text text-transparent"
        style={{ fontFamily: "Outfit, sans-serif" }} >
          The Operating system of the future, <br className="hidden xl:flex" />
          built for now.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ amount: 0.8 }}
          className="mt-5 max-w-2xl mx-auto text-[#c7cbff] text-lg leading-relaxed"
         style={{ fontFamily: "work-sans, sans-serif" }}>
          Streamline operations, enhance decision-making, and improve
          productivity with our next-gen ERP systems.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ amount: 1 }}
          className="mt-8"
        >
          <Link to="/contact">
          <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#7C86FF40] bg-gradient-to-br from-[#7C86FF40] to-[#7C86FF20] px-8 py-4 font-semibold tracking-wide shadow-[0_0_20px_rgba(124,134,255,0.15)] backdrop-blur-md transition-transform hover:shadow-[0_0_40px_rgba(124,134,255,0.35)] hover:scale-105 text-white">
            Get Started
          </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
