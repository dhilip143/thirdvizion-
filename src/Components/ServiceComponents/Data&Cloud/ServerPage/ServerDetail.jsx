// import React from "react";
// import { motion } from "framer-motion";
// import { FaCloud, FaHdd, FaNetworkWired, FaCogs } from "react-icons/fa";
// import TextReveal from "/src/Hooks/TextReveal.jsx";

// export default function ServerDetail() {
//   const sections = [
//     {
//       icon: <FaHdd className="text-2xl text-white" />,
//       title: "Storage Solutions",
//       desc: "Enterprise NAS & SAN systems (TrueNAS, Synology) with snapshots, redundancy, and offsite backups.",
//     },
//     {
//       icon: <FaCloud className="text-2xl text-white" />,
//       title: "Cloud Services",
//       desc: "Hybrid cloud integrations with AWS, Azure, and GCP — scalable, secure, and cost-optimized.",
//     },
//     {
//       icon: <FaCogs className="text-2xl text-white" />,
//       title: "VPS Hosting",
//       desc: "Dedicated resources, full root access, and blazing performance for web apps and databases.",
//     },
//     {
//       icon: <FaNetworkWired className="text-2xl text-white" />,
//       title: "NaaS",
//       desc: "Network-as-a-Service for secure, on-demand network infrastructure with flexible scalability.",
//     },
//   ];

//   return (
//     <div className="min-h-screen text-white px-6 py-20 relative">
//       {/* Background Glow */}
//       <div
//         className="absolute top-20 left-1/3 w-[50vh] h-[50vh] rounded-full blur-3xl -z-10"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
//         }}
//       />

//       {/* Hero Section */}
//       <section className="text-center mb-16">
//         <TextReveal>
//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="text-5xl md:text-6xl font-extrabold  tracking-tight"
//           >
//             Server Management
//           </motion.h1>
//         </TextReveal>
//         <TextReveal delay={0.2}>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.7 }}
//             className="mt-4 text-white/70 max-w-2xl mx-auto"
//           >
//             Secure • Scalable • Reliable <br /> Empowering your business with
//             next-gen server solutions.
//           </motion.p>
//         </TextReveal>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.7 }}
//           className="mt-8 flex justify-center gap-6 flex-wrap"
//         >
//           <button className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-white/80 transition">
//             Get Started
//           </button>
//           <button className="px-8 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-md transition">
//             Collaboration
//           </button>
//         </motion.div>
//       </section>

//       {/* Two-Column Layout */}
//       <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//         {sections.map((section, idx) => (
//           <motion.div
//             key={idx}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: idx * 0.1 }}
//             className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] backdrop-blur-md hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition"
//           >
//             <h3 className="flex items-center gap-3 text-lg font-semibold">
//               {section.icon}
//               {section.title}
//             </h3>
//             <p className="mt-2 text-sm text-white/70">{section.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }





import React from "react";
import { motion } from "framer-motion";
import { FaCloud, FaHdd, FaNetworkWired, FaCogs } from "react-icons/fa";
import TextReveal from "/src/Hooks/TextReveal.jsx";

export default function ServerDetail() {
  const sections = [
    {
      icon: <FaHdd className="text-2xl text-[#05df72]/80" />,
      title: "Storage Solutions",
      desc: "Enterprise NAS & SAN systems (TrueNAS, Synology) with snapshots, redundancy, and offsite backups.",
    },
    {
      icon: <FaCloud className="text-2xl text-[#05df72]/80" />,
      title: "Cloud Services",
      desc: "Hybrid cloud integrations with AWS, Azure, and GCP — scalable, secure, and cost-optimized.",
    },
    {
      icon: <FaCogs className="text-2xl text-[#05df72]/80" />,
      title: "VPS Hosting",
      desc: "Dedicated resources, full root access, and blazing performance for web apps and databases.",
    },
    {
      icon: <FaNetworkWired className="text-2xl text-[#05df72]/80" />,
      title: "NaaS",
      desc: "Network-as-a-Service for secure, on-demand network infrastructure with flexible scalability.",
    },
  ];

  return (
    <div className="min-h-screen px-6 py-20 relative font-inter-tight">

      {/* Hero Section */}
      <section className="text-center mb-16">
        <TextReveal>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold  text-[#05df72] drop-shadow-lg"
         style={{ fontFamily: "Outfit, sans-serif" }}  >
            Server{" "} Management
          </motion.h1>
        </TextReveal>
        <TextReveal delay={0.2}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-4 text-gray-300 max-w-2xl mx-auto"
        style={{ fontFamily: "work-sans, sans-serif" }}   >
            Secure • Scalable • Reliable <br /> Empowering your business with
            next-gen server solutions.
          </motion.p>
        </TextReveal>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-8 flex justify-center gap-6 flex-wrap"
        >
          {/* <button className=" border border-[#05df72]/30 px-6 py-3 font-semibold shadow-[0_0_20px_rgba(255,137,4,0.15)] backdrop-blur-md transition hover:shadow-[0_0_30px_rgba(5,223,114,0.5)] hover:scale-105 text-[#05df72] font-inter-tight inline-flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl bg-transparent sm:px-6 md:px-8  sm:font-semibold tracking-wide text-sm md:text-md lg:text-lg xl:text-xl duration-500">
            Get Started
          </button> */}
        </motion.div>
      </section>

      {/* Two-Column Layout */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-6 rounded-2xl bg-[#05df72]/5 border border-[#05df72]/30 shadow-[0_0_20px_rgba(5,223,114,0.05)] backdrop-blur-md hover:bg-[#05df72]/10 hover:shadow-[0_0_30px_rgba(5,223,114,0.15)] transition"
          >
            <h3 className="flex items-center gap-3 text-lg font-semibold text-[#05df72]" style={{ fontFamily: "Outfit, sans-serif" }}>
              {section.icon}
              {section.title}
            </h3>
            <p className="mt-2 text-sm text-white/70" style={{ fontFamily: "work-sans, sans-serif" }}>{section.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
