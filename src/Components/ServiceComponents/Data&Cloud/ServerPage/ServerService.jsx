import React from "react";
import { motion } from "framer-motion";
import TextReveal from "/src/Hooks/TextReveal.jsx";
import { Server, Cpu, Cloud } from "lucide-react";

const ServerService = () => {
  return (
    <>
      {/* Our Services */}
      <section className="max-w-6xl mx-auto text-center py-16 px-6">
        <TextReveal>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl  font-bold mb-2 text-[#05df72]" style={{ fontFamily: "Outfit, sans-serif" }}>
            Our Services
          </motion.h2>
        </TextReveal>

        {/* Section Description */}
        <TextReveal delay={0.2}>
          <motion.p
            className="text-white/70 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          style={{ fontFamily: "work-sans, sans-serif" }} >
            We provide end-to-end solutions to ensure your servers and cloud
            infrastructure are optimized, secure, and tailored to your business
            needs.
          </motion.p>
        </TextReveal>

        <div className="w-12 h-0.5 bg-[#05df72]/30 mx-auto mb-10" />

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Hardware Server Management",
              desc: "Ensure maximum uptime, proactive monitoring and performance tuning for your hardware servers.",
              icon: <Server className="h-8 w-8 text-[#05df72]/80" />,
            },
            {
              title: "Server Buying Guide",
              desc: "Receive expert hardware recommendations tailored to your specific needs and budget.",
              icon: <Cpu className="h-8 w-8 text-[#05df72]/80" />,
            },
            {
              title: "Cloud & Hybrid Setup",
              desc: "Seamlessly integrate cloud and hybrid solutions with secure configurations and scalable architecture.",
              icon: <Cloud className="h-8 w-8 text-[#05df72]/80" />,
            },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: idx * 0.2,
                duration: 0.6,
                type: "spring",
                stiffness: 120,
              }}
              viewport={{ once: true }}
              className="bg-white/5 p-6 rounded-2xl border border-[#05df72]/20 hover:bg-[#05df72]/10 transition-all duration-300 hover:scale-105 text-left backdrop-blur-md shadow-[0_0_20px_rgba(255,137,4,0.1)]"
            >
              {/* Icon Animation */}
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.2 + 0.1, duration: 0.5 }}
              >
                {service.icon}
              </motion.div>

              {/* Title Animation */}
              <motion.h3
                className="font-semibold text-lg mb-2 mt-4 text-[#05df72]"
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.2 + 0.2, duration: 0.5 }}
              style={{ fontFamily: "Outfit, sans-serif" }} >
                {service.title}
              </motion.h3>

              {/* Description Animation */}
              <motion.p
                className="text-white/70 text-sm"
                initial={{ x: 10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.2 + 0.3, duration: 0.5 }}
             style={{ fontFamily: "work-sans, sans-serif" }} >
                {service.desc}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServerService;
