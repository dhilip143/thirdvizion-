import React from "react";
import { motion } from "framer-motion";
import { Server, Cpu, Cloud, Shield } from "lucide-react";
import TextReveal from "/src/Hooks/TextReveal.jsx";

const ServerHero = () => {
  return (
    <div className=" text-white min-h-screen font-sans relative overflow-hidden">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-40 left-1/3 h-[60vh] w-[60vh] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-40 right-1/4 h-[50vh] w-[50vh] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 max-w-6xl mx-auto min-h-screen">
        <TextReveal>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl 2xl:text-6xl font-extrabold mb-6 "
          >
            Your Servers, <br /> Managed with Precision
          </motion.h1>
        </TextReveal>
        <TextReveal delay={0.2}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-white/70 max-w-3xl mb-8 leading-relaxed"
          >
            We provide comprehensive server management services, ensuring your
            servers are secure, reliable, and perform optimally. This includes
            proactive monitoring, regular maintenance, and swift troubleshooting
            to minimize downtime and protect your data.
          </motion.p>
        </TextReveal>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          <button className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-semibold shadow-[0_0_20px_rgba(255,255,255,0.05)] backdrop-blur-md transition hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-105">
            Get Started
          </button>
          <button className="rounded-2xl border border-white/20 px-6 py-3 font-semibold text-white/70 hover:bg-white/10 hover:text-white backdrop-blur-md transition">
            Request a Free Consultation
          </button>
        </motion.div>
      </section>

      {/* Our Services */}
      <section className="max-w-6xl mx-auto text-center py-16 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-2 bg-gradient-to-r from-white via-white/80 to-white/50 bg-clip-text text-transparent"
        >
          Our Services
        </motion.h2>

        {/* Section Description */}
        <motion.p
          className="text-white/70 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We provide end-to-end solutions to ensure your servers and cloud
          infrastructure are optimized, secure, and tailored to your business
          needs.
        </motion.p>

        <div className="w-12 h-0.5 bg-white/20 mx-auto mb-10" />

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Hardware Server Management",
              desc: "Ensure maximum uptime, proactive monitoring and performance tuning for your hardware servers.",
              icon: <Server className="h-8 w-8 text-white/80" />,
            },
            {
              title: "Server Buying Guide",
              desc: "Receive expert hardware recommendations tailored to your specific needs and budget.",
              icon: <Cpu className="h-8 w-8 text-white/80" />,
            },
            {
              title: "Cloud & Hybrid Setup",
              desc: "Seamlessly integrate cloud and hybrid solutions with secure configurations and scalable architecture.",
              icon: <Cloud className="h-8 w-8 text-white/80" />,
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
              className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 text-left backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]"
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
                className="font-semibold text-lg mb-2 mt-4"
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.2 + 0.2, duration: 0.5 }}
              >
                {service.title}
              </motion.h3>

              {/* Description Animation */}
              <motion.p
                className="text-white/70 text-sm"
                initial={{ x: 10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.2 + 0.3, duration: 0.5 }}
              >
                {service.desc}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServerHero;
