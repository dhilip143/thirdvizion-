import React from "react";
import { motion } from "framer-motion";
import { FaCloud, FaShieldAlt, FaHeadset } from "react-icons/fa";

const services = [
  {
    title: "Cloud Solutions",
    desc: "Leverage scalable cloud infrastructure to optimize performance, cut costs, and innovate faster.",
    icon: <FaCloud className="text-5xl text-teal-400" />,
  },
  {
    title: "Cybersecurity Services",
    desc: "Protect your data, apps, and users with advanced security measures and compliance-driven frameworks.",
    icon: <FaShieldAlt className="text-5xl text-teal-400" />,
  },
  {
    title: "Managed IT Support",
    desc: "From troubleshooting to full-scale IT management, we keep your systems running reliably and securely.",
    icon: <FaHeadset className="text-5xl text-teal-400" />,
  },
];

const ITServices = () => {
  return (
    <section className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-between px-10 lg:px-20 py-24">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-teal-400 leading-tight mb-6">
            Transform Your Business <br /> with IT Services
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            From cloud to cybersecurity, we deliver innovative, scalable, and
            secure IT solutions that empower your business to thrive in the
            digital era.
          </p>
          <button className="bg-teal-500 hover:bg-teal-600 text-black font-bold px-8 py-3 rounded-xl shadow-lg shadow-teal-500/40 transition">
            Get Started
          </button>
        </motion.div>

        {/* Hero Illustration (placeholder box you can replace with SVG/IMG) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 md:mt-0 w-full md:w-1/2 flex justify-center"
        >
          <div className="w-80 h-80 bg-gradient-to-br from-teal-600/30 to-black rounded-3xl flex items-center justify-center border border-teal-400/30">
            <span className="text-gray-500">[ Illustration ]</span>
          </div>
        </motion.div>
      </div>

      {/* Service Highlights */}
      <div className="mt-20 overflow-x-auto px-6">
        <div className="flex space-x-8 w-max mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="min-w-[280px] bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl shadow-md hover:shadow-teal-400/40 transition flex flex-col items-center text-center"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-teal-400 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Glassmorphism Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6 mt-28">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-white/5 border border-teal-400/20 rounded-2xl p-8 shadow-lg hover:shadow-teal-400/30 transition"
          >
            <div className="mb-5">{service.icon}</div>
            <h3 className="text-xl font-bold text-teal-400 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-300">{service.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        className="relative mt-28 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-teal-700/20 to-teal-400/10 rounded-2xl p-12 max-w-3xl mx-auto shadow-lg">
          <h3 className="text-3xl font-bold text-teal-400 mb-4">
            Empower Your Business with Next-Gen IT Services
          </h3>
          <p className="text-gray-300 mb-6">
            Discover how our IT solutions transform challenges into
            opportunities with innovation, scalability, and security.
          </p>
          <button className="bg-teal-500 hover:bg-teal-600 text-black font-bold px-8 py-3 rounded-xl transition shadow-lg shadow-teal-500/30">
            Contact Us
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default ITServices;
