import React from "react";
import { motion } from "framer-motion";
import {
  FaServer,
  FaCloud,
  FaHdd,
  FaNetworkWired,
  FaCogs,
} from "react-icons/fa";
import "./Curve.css";

function ServerManagementUI() {
  return (
    <div className="min-h-screen bg-black text-teal-400 p-10">
      {/* 🔹 Hero Section */}
      <section className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-extrabold tracking-widest text-teal-400 drop-shadow-[0_0_20px_rgba(45,212,191,0.7)]"
        >
          SERVER MANAGEMENT
        </motion.h1>
        <p className="mt-4 text-teal-500 max-w-2xl mx-auto">
          Secure • Scalable • Reliable <br /> Empowering your business with
          next-gen server solutions
        </p>
        <div className="mt-8 flex justify-center gap-6">
          <button className="px-8 py-3 rounded-full bg-teal-400 text-black font-bold hover:bg-teal-300 shadow-[0_0_20px_rgba(45,212,191,0.6)]">
            Get Started
          </button>
          <button className="px-8 py-3 rounded-full bg-neutral-900 text-teal-400 border border-teal-600 hover:bg-neutral-800">
            Collaboration
          </button>
        </div>
      </section>

      {/* 🔹 Vertical Timeline */}
      <div className="relative border-l-2 border-teal-600 ml-10 space-y-12">
        {/* Storage */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="ml-8 p-6 rounded-2xl bg-black/60 border border-teal-700 shadow-lg backdrop-blur-md"
        >
          <h3 className="flex items-center gap-3 text-xl font-bold">
            <FaHdd className="text-teal-400" /> Storage Solutions
          </h3>
          <p className="mt-2 text-sm text-teal-500">
            Enterprise NAS & SAN systems (TrueNAS, Synology) with snapshots,
            redundancy, and offsite backups.
          </p>
        </motion.div>

        {/* Virtualization */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="ml-8 p-6 rounded-2xl bg-black/60 border border-teal-700 shadow-lg backdrop-blur-md"
        >
          <h3 className="flex items-center gap-3 text-xl font-bold">
            <FaServer className="text-teal-400" /> Virtualization
          </h3>
          <p className="mt-2 text-sm text-teal-500">
            Proxmox, VMware & Hyper-V for workload consolidation, live
            migration, and zero downtime maintenance.
          </p>
        </motion.div>

        {/* Cloud */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="ml-8 p-6 rounded-2xl bg-black/60 border border-teal-700 shadow-lg backdrop-blur-md"
        >
          <h3 className="flex items-center gap-3 text-xl font-bold">
            <FaCloud className="text-teal-400" /> Cloud Services
          </h3>
          <p className="mt-2 text-sm text-teal-500">
            Hybrid cloud integrations with AWS, Azure, and GCP — scalable,
            secure, and cost-optimized.
          </p>
        </motion.div>

        {/* VPS */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="ml-8 p-6 rounded-2xl bg-black/60 border border-teal-700 shadow-lg backdrop-blur-md"
        >
          <h3 className="flex items-center gap-3 text-xl font-bold">
            <FaCogs className="text-teal-400" /> VPS Hosting
          </h3>
          <p className="mt-2 text-sm text-teal-500">
            Dedicated resources, full root access, and blazing performance for
            web apps and databases.
          </p>
        </motion.div>

        {/* NaaS */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="ml-8 p-6 rounded-2xl bg-black/60 border border-teal-700 shadow-lg backdrop-blur-md"
        >
          <h3 className="flex items-center gap-3 text-xl font-bold">
            <FaNetworkWired className="text-teal-400" /> NaaS
          </h3>
          <p className="mt-2 text-sm text-teal-500">
            Network-as-a-Service for secure, on-demand network infrastructure
            with flexible scalability.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default ServerManagementUI;
