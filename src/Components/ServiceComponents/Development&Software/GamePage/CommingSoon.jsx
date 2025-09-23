import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import TextReveal from "/src/Hooks/TextReveal.jsx";
import { Link } from "react-router-dom";

export default function ComingSoon() {
  return (
    <section className="relative isolate w-full overflow-hidden text-white py-20">

      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center text-center px-6">
        {/* Small badge */}
        <TextReveal>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-white/70 backdrop-blur-md"
          >
            <Sparkles className="h-4 w-4 text-white/60 inline mr-2" />
            New Experience Loading...
          </motion.div>
        </TextReveal>

        {/* Main headline */}
        <TextReveal delay={0.2}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-6 font-inter-tight text-4xl font-black leading-[1.1] tracking-tight md:text-7xl"
          >
            Coming Soon
          </motion.h2>
        </TextReveal>

        {/* Supporting text */}
        <TextReveal delay={0.4}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-4 max-w-xl text-white/70"
          >
            We’re crafting something special. Stay tuned for the launch and be
            the first to experience our next-gen web games.
          </motion.p>
        </TextReveal>

        {/* Notify me button */}
        <Link to={"/contact"}>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-10 font-inter-tight inline-flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl border border-white/40 bg-transparent px-5 sm:px-6 md:px-8 py-4 font-medium sm:font-semibold tracking-wide text-sm sm:text-base md:text-sm backdrop-blur-md transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] hover:scale-105"
          >
            Notify Me
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
