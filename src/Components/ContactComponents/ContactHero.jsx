
// import React from "react";
// import { motion } from "framer-motion";
// import ContactIllustration from "/src/assets/HomeImages/CategoryImages/ContactIllustrator/Contactillustration.png";

// const text = "Scale Smarter With Remote Teams";

// const HeroDark = () => {
//   return (
//     <section className="relative bg-neutral-900">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 min-h-72 px-3">
//         {/* Left: Illustration */}
//         <div className="flex items-center justify-center">
//           <img
//             src={ContactIllustration}
//             alt="Contact illustration"
//             className="w-[80%] max-w-lg object-contain"
//           />
//         </div>

//         {/* Right: Content */}
//         <div className="flex flex-col justify-center px-8 py-12 space-y-6 text-center md:text-left">
//           {/* Animated Heading */}
//           <motion.h1
//             className="text-4xl md:text-5xl font-extrabold leading-tight"
//             initial="hidden"
//             animate="visible"
//             variants={{
//               hidden: {},
//               visible: {
//                 transition: {
//                   staggerChildren: 0.05,
//                 },
//               },
//             }}
//           >
//             {text.split("").map((char, i) => (
//               <motion.span
//                 key={i}
//                 className={`${
//                   char === " "
//                     ? "inline-block w-2"
//                     : "bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 bg-clip-text text-transparent"
//                 }`}
//                 variants={{
//                   hidden: { opacity: 0, y: 20 },
//                   visible: { opacity: 1, y: 0 },
//                 }}
//               >
//                 {char}
//               </motion.span>
//             ))}
//           </motion.h1>

//           <p className="text-gray-300 text-lg max-w-md mx-auto md:mx-0">
//             Collaborate asynchronously, streamline workflows, and manage global
//             teams with confidence.
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//             <a
//               href="#contact-form"
//               className="px-6 py-3 bg-gradient-to-r from-yellow-400 via-blue-500 to-purple-600 text-black font-semibold rounded-xl shadow-lg hover:opacity-90"
//             >
//               Get Started
//             </a>
//             <a
//               href="#demo"
//               className="px-6 py-3 bg-neutral-800 border border-gray-700 text-white font-semibold rounded-xl hover:bg-neutral-700"
//             >
//               Request Demo
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroDark;
import React from "react";
import { motion } from "framer-motion";
import ContactIllustration from "/src/assets/HomeImages/CategoryImages/ContactIllustrator/Contactillustration.png";

const text = "Scale Smarter With Remote Teams";

const HeroDark = () => {
  return (
    <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[90vh] px-6">
        {/* Left: Illustration */}
        <div className="flex items-center justify-center">
          <motion.img
            src={ContactIllustration}
            alt="Contact illustration"
            className="w-[90%] max-w-xl object-contain drop-shadow-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-center px-6 py-12 space-y-6 text-center md:text-left">
          {/* Animated Heading */}
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.04,
                },
              },
            }}
          >
            {text.split("").map((char, i) => (
              <motion.span
                key={i}
                className={`${
                  char === " "
                    ? "inline-block w-2"
                    : "bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 bg-clip-text text-transparent"
                }`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <p className="text-gray-300 text-lg max-w-lg mx-auto md:mx-0">
            Collaborate asynchronously, streamline workflows, and manage global
            teams with confidence. Our platform makes remote collaboration feel
            natural, so your team stays productive, no matter where they are.
          </p>

          {/* ✨ Extra Content (Bullet Points) */}
          <div className="flex flex-col gap-3 text-gray-400 max-w-md mx-auto md:mx-0">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>Real-time messaging & file sharing</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              <span>Task management & progress tracking</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Seamless integrations with your tools</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroDark;
