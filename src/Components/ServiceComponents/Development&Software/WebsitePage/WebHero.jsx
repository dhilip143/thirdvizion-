// import React from "react";
// import { motion } from "framer-motion";
// import { Sparkles } from "lucide-react";
// import TextReveal from "/src/Hooks/TextReveal.jsx";

// const WebHero = () => {
//   return (
//     <section className="relative isolate min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
//       {/* Background glows */}
//       <div className="pointer-events-none absolute inset-0 -z-10">
//         <div
//           className="absolute -top-40 left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full blur-3xl"
//           style={{
//             background:
//               "radial-gradient(50%_50%_at_50%_50%, rgba(120,119,198,0.25), transparent 70%)",
//           }}
//         />
//         <div
//           className="absolute -bottom-40 right-10 h-[50vh] w-[50vh] rounded-full blur-3xl"
//           style={{
//             background:
//               "radial-gradient(50%_50%_at_50%_50%, rgba(253,186,116,0.25), transparent 70%)",
//           }}
//         />
//       </div>

//       <div className="relative z-10 mx-auto max-w-4xl text-center px-6">
//         {/* Badge / Tag */}

//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 0.6 }}
//           viewport={{ amount: 0 }}
//           className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1  text-xs text-white/70 backdrop-blur-md"
//         >
//           <Sparkles className="h-4 w-4" />
//           Cutting-Edge Web Development
//         </motion.div>

//         {/* Animated Gradient Heading */}
//         <TextReveal>
//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9 }}
//             viewport={{ amount: 1 }}
//             className="mt-6 font-inter-tight text-5xl font-black leading-[1.05] tracking-tight md:text-7xl text-white"
//           >
//             We Build Digital Experiences
//           </motion.h1>
//         </TextReveal>

//         {/* Subtitle */}
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.7 }}
//           viewport={{ amount: 0.8 }}
//           className="mt-5 max-w-2xl mx-auto text-white/70"
//         >
//           At <span className="font-semibold text-white">ThirdVizion</span>, we
//           craft scalable, performant, and visually stunning web experiences —
//           tailored to your users.
//         </motion.p>

//         {/* CTA Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.7 }}
//           viewport={{ amount: 1 }}
//           className="mt-10"
//         >
//           <a
//             href="/contact"
//             className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 px-8 py-4 font-semibold tracking-wide shadow-[0_0_20px_rgba(255,255,255,0.08)] backdrop-blur-md transition hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:scale-105"
//           >
//             Let’s Build Something Together 🚀
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default WebHero;
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import TextReveal from "/src/Hooks/TextReveal.jsx";

const WebHero = () => {
  return (
    <section className="relative isolate min-h-screen flex items-center justify-center overflow-hidden bg-black text-white px-4 sm:px-6 md:px-8">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-40 left-1/2 h-[40vh] w-[40vh] sm:h-[50vh] sm:w-[50vh] lg:h-[60vh] lg:w-[60vh] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(50%_50%_at_50%_50%, rgba(120,119,198,0.25), transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-40 right-5 h-[35vh] w-[35vh] sm:h-[45vh] sm:w-[45vh] lg:h-[50vh] lg:w-[50vh] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(50%_50%_at_50%_50%, rgba(253,186,116,0.25), transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        {/* Badge / Tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ amount: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] sm:text-xs md:text-sm text-white/70 backdrop-blur-md"
        >
          <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
          Cutting-Edge Web Development
        </motion.div>

        {/* Animated Gradient Heading */}
        <TextReveal>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ amount: 1 }}
            className="mt-6 font-inter-tight text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-[1.15] sm:leading-[1.1] tracking-tight text-white"
          >
            We Build Digital Experiences
          </motion.h1>
        </TextReveal>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ amount: 0.8 }}
          className="mt-4 sm:mt-5 max-w-lg sm:max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-white/70 px-2"
        >
          At <span className="font-semibold text-white">ThirdVizion</span>, we
          craft scalable, performant, and visually stunning web experiences — 
          tailored to your users.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ amount: 1 }}
          className="mt-8 sm:mt-10"
        >
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 px-5 sm:px-6 md:px-8 py-3 sm:py-4 font-medium sm:font-semibold tracking-wide text-sm sm:text-base md:text-lg shadow-[0_0_20px_rgba(255,255,255,0.08)] backdrop-blur-md transition hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:scale-105"
          >
            Let’s Build Something Together 🚀
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WebHero;
