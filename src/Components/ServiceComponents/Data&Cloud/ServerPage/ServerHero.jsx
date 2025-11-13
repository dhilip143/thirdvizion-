import { motion } from "framer-motion";
import TextReveal from "/src/Hooks/TextReveal.jsx";
import { Link } from "react-router-dom";


const ServerHero = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center text-center px-6 max-w-6xl mx-auto min-h-screen">
        <TextReveal>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xltext-4xl md:text-5xl xl:text-6xl font-SEMIBOLD mb-6 text-[#05df72] tracking-wide"
         style={{ fontFamily: "Outfit, sans-serif" }}  >
            Your Servers Managed with Precision
          </motion.h1>
        </TextReveal>

        <TextReveal delay={0.2}>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-gray-300 max-w-3xl mb-8 leading-relaxed FONT-MEDIUM"
           style={{ fontFamily: "work-sans, sans-serif" }}>
            We provide comprehensive server management services, ensuring your
            servers are secure, reliable, and perform optimally. This includes
            proactive monitoring, regular maintenance, and swift troubleshooting
            to minimize downtime and protect your data.
          </motion.p>
        </TextReveal>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          <Link to="/contact">
          <button className=" border border-[#05df72]/30 px-6 py-3 font-semibold shadow-[0_0_20px_rgba(255,137,4,0.15)] backdrop-blur-md transition hover:shadow-[0_0_30px_rgba(5,223,114,0.5)] hover:scale-105 text-[#05df72] font-inter-tight inline-flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl bg-transparent sm:px-6 md:px-8  sm:font-semibold tracking-wide text-sm sm:text-base md:text-sm xl:text-xl duration-500">
            Get Started
          </button>
          </Link>
        </motion.div>
      </section>
    </>
  );
};

export default ServerHero;
