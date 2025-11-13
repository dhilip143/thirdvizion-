
import { motion } from "framer-motion";
import video from "/src/assets/vr/vr.mp4";

export default function Vrbike() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 text-white">
      {/* Glow Blobs for Atmosphere */}
     

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center text-center capitalize ">
        {/* Heading with Neon Glow */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium mb-15 mt-1
                     bg-gradient-to-r from-violet-400 to-indigo-500 
                     bg-clip-text text-transparent 
                     tracking-wide transform translate-y-10"
          style={{ fontFamily: "Outfit, sans-serif" }} >
          Immersive VR <br /> Training
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-xs md:text-lg text-gray-300 mb-12 max-w-3xl"
         style={{ fontFamily: "work-sans, " }} >
         We design realistic VR training solutions that help teams learn safely and effectively. From industrial safety simulations to advanced skill development, our virtual training environments boost performance and reduce risk.
        </motion.p>

        {/* Foreground Video Box with Neon Glow Border */}
        <motion.div
          initial={{ rotateY: -15, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05, rotateY: 5 }}
          className="relative w-[90%] md:w-[70%] lg:w-[60%] rounded-2xl overflow-hidden 
                     border-2 border-purple-500 mb-40 shadow-[0_0_30px_rgba(139,92,246,0.8)]
                     bg-black/60 backdrop-blur"
          style={{ perspective: "1000px" }}
        >
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>

       
      </div>
    </section>
  );
}