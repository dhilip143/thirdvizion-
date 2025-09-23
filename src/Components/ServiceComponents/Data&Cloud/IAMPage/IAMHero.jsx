import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pb-16  text-white">
      {/* Heading Section */}
      <motion.div
        className=" flex flex-col justify-center items-center max-w-4xl text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight font-inter-tight">
          <span className="bg-gradient-to-r from-[#FDC700] to-[#ffd84c] bg-clip-text text-transparent">
            Empower Your Business with Smarter Access
          </span>
        </h1>
        <p className="mt-4 text-[#f5f5f5] text-base md:text-sm max-w-2xl mx-auto">
          Identity & Access Management solutions made secure, scalable, and
          future-ready.
        </p>

        {/* CTA Button */}
        <motion.button
          className="mt-6 px-8 py-3 rounded-full font-semibold tracking-wide bg-[#FDC700] text-black shadow-[0_0_25px_rgba(253,199,0,0.3)] hover:shadow-[0_0_40px_rgba(253,199,0,0.5)] hover:bg-[#ffe166] transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>

    </section>
  );
}
