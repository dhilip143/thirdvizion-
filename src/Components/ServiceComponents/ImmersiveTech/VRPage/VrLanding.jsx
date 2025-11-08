// import React from "react";
// import { motion } from "framer-motion";

// export default function VRLandingPage() {
//   return (
//     <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white">
//       {/* Background Grid Overlay */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(140,0,255,0.1),transparent_70%)]">
//         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/squared-metal.png')] opacity-20"></div>
//       </div>

//       {/* Neon Glow Blobs */}
//       <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-600 rounded-full blur-[160px] opacity-40"></div>
//       <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-blue-600 rounded-full blur-[160px] opacity-40"></div>

//       {/* Animated Title */}
//       <motion.h1
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="text-5xl md:text-6xl font-extrabold text-center"
//       >
//         Unlock the{" "}
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
//           Power
//         </span>{" "}
//         of <br />
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-400">
//           Virtual Reality
//         </span>
//       </motion.h1>

//       {/* Subtext */}
//       <motion.p
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3, duration: 1 }}
//         className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl text-center px-6"
//       >
//         Step into immersive experiences that redefine the way you learn,
//         explore, and interact. Discover how VR can transform your world today.
//       </motion.p>

//       {/* CTA Buttons */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.5, duration: 1 }}
//         className="mt-10 flex gap-6"
//       >
//         <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
//           Explore Now
//         </button>
//         <button className="px-6 py-3 border border-blue-400 text-blue-400 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300">
//           Learn More
//         </button>
//       </motion.div>
//     </section>
//   );
// }
// VrLanding.jsx
import React from "react";
import { motion } from "framer-motion";
import ContactPage from "../../../../Pages/ContactPage";
import { Link } from "react-router-dom";

export default function VrLanding() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(140,0,255,0.1),transparent_70%)]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/squared-metal.png')] opacity-20"></div>
      </div>

      {/* Neon Glow Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-600 rounded-full blur-[160px] opacity-40"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-blue-600 rounded-full blur-[160px] opacity-40"></div>

      {/* Animated Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold text-center"
       style={{ fontFamily: "Outfit, sans-serif" }} >
        Transform Your World with{" "}
        
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-400">
          Virtual Reality
        </span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl text-center px-6"
       style={{ fontFamily: "work-sans, sans-serif" }} >
At ThirdVizion Labs, we create immersive VR experiences that enhance learning, training, and engagement. Our custom virtual solutions help businesses boost productivity and drive innovation.      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-10 flex gap-6"
      >
        {/* <button onClick={ContactPage} className="px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
         Explore us 
        </button> */}

        


        {/* <button className="px-6 py-3 border border-purple-400 text-purple-400 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300">
          View Solutions
        </button> */}
      </motion.div>
    </section>
  );
}