import React from "react";
import { motion } from "framer-motion";
import { FaCloud, FaHdd, FaNetworkWired, FaCogs } from "react-icons/fa";

export default function ServerDetail() {
  const sections = [
    {
      icon: <FaHdd className="text-2xl text-white" />,
      title: "Storage Solutions",
      desc: "Enterprise NAS & SAN systems (TrueNAS, Synology) with snapshots, redundancy, and offsite backups.",
    },
    {
      icon: <FaCloud className="text-2xl text-white" />,
      title: "Cloud Services",
      desc: "Hybrid cloud integrations with AWS, Azure, and GCP — scalable, secure, and cost-optimized.",
    },
    {
      icon: <FaCogs className="text-2xl text-white" />,
      title: "VPS Hosting",
      desc: "Dedicated resources, full root access, and blazing performance for web apps and databases.",
    },
    {
      icon: <FaNetworkWired className="text-2xl text-white" />,
      title: "NaaS",
      desc: "Network-as-a-Service for secure, on-demand network infrastructure with flexible scalability.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20 relative">
      {/* Background Glow */}
      <div
        className="absolute top-20 left-1/3 w-[50vh] h-[50vh] rounded-full blur-3xl -z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Hero Section */}
      <section className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-white/80 to-white/60 bg-clip-text text-transparent tracking-tight"
        >
          Server Management
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-4 text-white/70 max-w-2xl mx-auto"
        >
          Secure • Scalable • Reliable <br /> Empowering your business with
          next-gen server solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-8 flex justify-center gap-6 flex-wrap"
        >
          <button className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-white/80 transition">
            Get Started
          </button>
          <button className="px-8 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-md transition">
            Collaboration
          </button>
        </motion.div>
      </section>

      {/* Two-Column Layout */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] backdrop-blur-md hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition"
          >
            <h3 className="flex items-center gap-3 text-lg font-semibold">
              {section.icon}
              {section.title}
            </h3>
            <p className="mt-2 text-sm text-white/70">{section.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
