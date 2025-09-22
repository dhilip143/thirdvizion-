import TextReveal from "/src/Hooks/TextReveal.jsx";
import { motion } from "framer-motion";

const AppCTA = () => {
  return (
    <section className="py-24 px-6 text-center bg-black text-white">
      <TextReveal>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.1 }}
          className="text-3xl md:text-4xl max-w-2xl mx-auto font-extrabold mb-6 text-[#ff8904] drop-shadow-[0_0_12px_rgba(255,137,4,0.35)] tracking-wide"
        >
          Ready to Build Your Next Big App with ThirdVizion?
        </motion.h2>
      </TextReveal>

      <TextReveal delay={0.2}>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.1 }}
          className="text-gray-300 mb-8 max-w-xl mx-auto text-base md:text-lg"
        >
          Let's collaborate and turn your vision into a reality. Our team
          specializes in crafting premium, scalable, and user-centric
          applications that stand out in the market.
        </motion.p>
      </TextReveal>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="font-inter-tight inline-flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl border border-[#ff8904]/40 bg-black px-5 sm:px-6 md:px-8 py-3 sm:py-4 font-medium sm:font-semibold tracking-wide text-sm sm:text-base md:text-lg shadow-[0_0_10px_rgba(0,211,243,0.3)] backdrop-blur-md transition-all duration-500 hover:shadow-[0_0_25px_rgba(255, 137, 4,0.5)] hover:scale-105 text-[#ff8904]"
      >
        Get in Touch
      </motion.button>
    </section>
  );
};

export default AppCTA;
