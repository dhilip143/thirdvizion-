// import React from "react";
// import { motion } from "framer-motion";

// const WebHero = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
//       {/* Floating animated circles (for depth) */}
//       <motion.div
//         className="absolute w-72 h-72 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full blur-3xl opacity-20 top-10 left-10"
//         animate={{ x: [0, 30, -30, 0], y: [0, 20, -20, 0] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20 bottom-10 right-10"
//         animate={{ x: [0, -40, 40, 0], y: [0, -30, 30, 0] }}
//         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <div className="relative z-10 text-center max-w-4xl px-6">
//         {/* Animated Heading */}
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-orange-500 bg-[length:400%_auto] animate-gradient bg-clip-text text-transparent drop-shadow-lg"
//         >
//           We Build Digital Experiences
//         </motion.h1>

//         {/* Subtitle */}
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 1 }}
//           className="text-lg md:text-2xl text-gray-300 mt-6 leading-relaxed"
//         >
//           At <span className="font-semibold text-yellow-400">ThirdVizion</span>,
//           we design and develop modern, scalable, and user-friendly websites to
//           bring your vision to life.
//         </motion.p>

//         {/* CTA Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//           className="mt-10"
//         >
//           <a
//             href="/contact"
//             className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-pink-500 text-black font-semibold rounded-full shadow-lg hover:scale-105 transition transform"
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

const WebHero = () => {
  return (
    <section className="relative isolate min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
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
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center px-6">
        {/* Badge / Tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md"
        >
          <Sparkles className="h-4 w-4" />
          Cutting-Edge Web Development
        </motion.div>

        {/* Animated Gradient Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-6 font-inter-tight text-5xl font-black leading-[1.05] tracking-tight md:text-7xl bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent"
        >
          We Build <span className="text-white/80">Digital Experiences</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-5 max-w-2xl mx-auto text-white/70"
        >
          At <span className="font-semibold text-white">ThirdVizion</span>, we
          craft scalable, performant, and visually stunning web experiences —
          tailored to your users.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-10"
        >
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 px-8 py-4 font-semibold tracking-wide shadow-[0_0_20px_rgba(255,255,255,0.08)] backdrop-blur-md transition hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:scale-105"
          >
            Let’s Build Something Together 🚀
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WebHero;
