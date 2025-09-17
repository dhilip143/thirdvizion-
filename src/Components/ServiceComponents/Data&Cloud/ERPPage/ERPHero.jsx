import DashBoardimage from "/src/assets/HeroImages/HeroHeader.webp";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative isolate w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white -mt-10">
      {/* Background Glows */}
      {/* <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-40 left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(50%_50%_at_50%_50%, rgba(120,119,198,0.25), transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-40 right-10 h-[50vh] w-[50vh] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(50%_50%_at_50%_50%, rgba(253,186,116,0.25), transparent 70%)",
          }}
        />
      </div> */}

      {/* Content */}
      <div className="relative inset-0 z-10 mx-auto max-w-6xl h-screen text-center px-6 flex flex-col justify-center items-center ">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ amount: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md"
        >
          <Sparkles className="h-4 w-4" />
          Next-Gen ERP System
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ amount: 1 }}
          className="mt-6 font-inter-tight text-5xl font-black leading-[1.05] tracking-tight md:text-6xl text-white"
        >
          The operating system of the future, <br />
          built for now.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ amount: 0.8 }}
          className="mt-5 max-w-2xl mx-auto text-white/70"
        >
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
          <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 px-8 py-4 font-semibold tracking-wide shadow-[0_0_20px_rgba(255,255,255,0.08)] backdrop-blur-md transition hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:scale-105">
            Get Started
          </button>
        </motion.div>

        {/* Image Section */}
        {/* <motion.div
          className="mt-16 max-w-4xl w-full flex justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.img
            src={DashBoardimage}
            alt="Dashboard preview"
            className="rounded-2xl shadow-2xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-500 ease-out"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div> */}
      </div>
    </section>
  );
}
