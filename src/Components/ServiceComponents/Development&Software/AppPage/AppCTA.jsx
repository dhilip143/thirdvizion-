import TextReveal from "/src/Hooks/TextReveal.jsx";
import { motion } from "framer-motion";

const AppCTA = () => {
  return (
    <section className="w-full  flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 py-24 font-inter-tight relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff8904]/5 via-transparent to-[#ff7300]/5 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#ff8904]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#ff7300]/5 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12"
        >
          <TextReveal>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-inter-tight font-extrabold tracking-tight text-[#ff8904] mb-8 leading-tight"
            >
              Ready to Build Your Next Big App?
            </motion.h2>
          </TextReveal>

          <TextReveal delay={0.2}>
            <motion.p
              className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
            >
              Let's collaborate and turn your vision into reality. Our team specializes in crafting premium, scalable, and user-centric applications that stand out in the market.
            </motion.p>
          </TextReveal>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-inter-tight inline-flex items-center justify-center gap-3 rounded-xl border border-[#ff8904]/40 px-10 py-5 font-medium tracking-wide text-lg shadow-2xl backdrop-blur-xl transition-all duration-500 bg-black text-[#ff8904] shadow-[0_0_15px_rgba(255,137,4,0.3)] hover:shadow-[0_0_30px_rgba(255,137,4,0.5)] hover:border-[#ff8904]/60"
            style={{
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)'
            }}
          >
            Get in Touch
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-500" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-gray-400 text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#ff8904] rounded-full"></div>
            <span>No upfront costs</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#ff8904] rounded-full"></div>
            <span>Free consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#ff8904] rounded-full"></div>
            <span>24/7 support</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppCTA;