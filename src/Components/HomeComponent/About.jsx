import { motion } from "framer-motion";
import img from "/src/assets/AboutImages/about1.png";
import img2 from "/src/assets/AboutImages/about2.png";

export default function About() {
  return (
    <div className="w-full min-h-screen bg-black text-white py-16 px-6 lg:px-20 overflow-hidden font-worksans">
      {/* Top Title Section */}
      <div className="text-center mb-20">
        <h2
          className="text-4xl lg:text-6xl font-bold tracking-wide"
          style={{
            background:
              "linear-gradient(157deg, rgba(130,203,246,1) 0%, rgba(236,154,150,1) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          style={{ fontFamily: "Outfit, sans-serif" }}>
          WHO ARE WE
        </h2>
      </div>

      {/* First Row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24"
        style={{ fontFamily: "worksans, sans-serif" }}>
        {/* Content */}
        <motion.div
          className="flex-1 text-center md:text-left max-w-2xl"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 font-medium">
            At ThirdVizion, we're more than just a technology company—we're innovators
            shaping the future. Our mission is to deliver cutting-edge solutions that
            not only solve challenges but also create new opportunities across
            industries. With a dedicated team of experts, we bring ideas to life with
            seamless technology that transforms businesses.
          </p>
        </motion.div>

        {/* Floating Image */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative w-full max-w-xl"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src={img}
              alt="About Visual 1"
              className="rounded-xl shadow-2xl w-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Floating Image */}
        <motion.div
          className="flex-1 flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative w-full max-w-xl"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <img
              src={img2}
              alt="About Visual 2"
              className="rounded-xl shadow-2xl w-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="flex-1 text-center md:text-right max-w-2xl"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontFamily: "worksans, sans-serif" }} >
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 font-medium">
            We pride ourselves on being a dynamic team of forward-thinkers, dedicated
            to addressing complex challenges with innovative, tailor-made solutions.
            Our mission is not just to keep up with technological advancements but to
            drive them, creating opportunities for businesses to thrive in a
            fast-paced, digital-first world.
          </p>
        </motion.div>
      </div>
    </div>
  );
}