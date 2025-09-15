import DashBoardimage from "/src/assets/HeroImages/HeroHeader.webp";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 py-16">
      {/* Heading */}
      <motion.div
        className="max-w-4xl text-center mt-50"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-8xl md:text-5xl font-bold">The operating system of the future, <br/>built for now.</h1>
        <p className="mt-4 text-neutral-400 text-lg">
          Streamline operations, enhance decision-making, and improve
          productivity with our next-gen ERP systems.
        </p>
        <motion.button
          className="mt-6 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get started
        </motion.button>
      </motion.div>
{/* Image Section */}
<motion.div
  className="mt-20 max-w-4xl w-full flex justify-center"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
>
 <motion.img
  src={DashBoardimage}
  alt="Dashboard preview"
  className="rounded-2xl shadow-2xl  
             hover:shadow-2xl hover:shadow-blue-500/40
             hover:scale-105 transition-all duration-500 ease-out"
  initial={{ scale: 0.95, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
/>
</motion.div>


    </div>
  );
}
