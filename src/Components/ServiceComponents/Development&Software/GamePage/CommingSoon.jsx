import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import TextReveal from "/src/Hooks/TextReveal.jsx";
import { Link } from "react-router-dom";

export default function ComingSoon() {
  return (
    <section className="relative isolate w-full overflow-hidden text-white py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute top-1/2 left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(50%_50%_at_50%_50%, rgba(255,255,255,0.05), transparent 70%)",
          }}
        />
      </div>

      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center text-center px-6">
        {/* Small badge */}
        <TextReveal>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-white/70 backdrop-blur-md"
          >
            <Sparkles className="h-4 w-4 text-white/60" />
            New Experience Loading...
          </motion.div>
        </TextReveal>

        {/* Main headline */}
        <TextReveal delay={0.2}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-6 font-inter-tight text-5xl font-black leading-[1.1] tracking-tight md:text-7xl"
          >
            Coming{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
              Soon
            </span>
          </motion.h2>
        </TextReveal>

        {/* Supporting text */}
        <TextReveal delay={0.4}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-4 max-w-xl text-white/70"
          >
            We’re crafting something special. Stay tuned for the launch and be
            the first to experience our next-gen web games.
          </motion.p>
        </TextReveal>

        {/* Notify me button */}
        <TextReveal delay={0.5}>
          <Link to={"/contact"}>
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 hover:bg-white hover:text-black transition-all duration-500 px-6 py-3 text-sm font-semibold shadow-[0_0_20px_rgba(255,255,255,0.08)] backdrop-blur-md hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              Notify Me
            </motion.button>
          </Link>
        </TextReveal>
      </div>
    </section>
  );
}
