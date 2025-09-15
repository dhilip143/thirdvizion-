import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

// ✅ Clean imports using alias
import amsi from "@/assets/HeroImages/amsi-go.png";
import madras from "@/assets/HeroImages/madraskitchen.png";
import scopik from "@/assets/HeroImages/scopik.png";
import spinz from "@/assets/HeroImages/spinz.png";

// ✅ Projects Array
const projects = [
  {
    title: "AMSI NGO",
    screenshot: amsi,
    live: "https://amsi-ngo.com/",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Madras Kitchen",
    screenshot: madras,
    live: "https://madraskitchen.ca/",
    tools: ["React", "Tailwind", "Firebase"],
  },
  {
    title: "Scopik",
    screenshot: scopik,
    live: "https://scopik.com/",
    tools: ["Next.js", "Tailwind", "Supabase"],
  },
  {
    title: "Spinz Reward",
    screenshot: spinz,
    live: "https://spinzreward.site/",
    tools: ["Next.js", "Tailwind", "Supabase"],
  },
];

export default function WebsiteGallery() {
  return (
    <section className="bg-black py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-blue-500 to-red-500 bg-clip-text text-transparent mb-6">
          OUR PROJECTS{" "}
        </h1>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative w-full h-80 rounded-xl overflow-hidden group cursor-pointer border-2 border-yellow-400"
            >
              {/* Image */}
              <img
                src={p.screenshot}
                alt={p.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center text-center p-6">
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                  {p.title}
                </h3>
                <p className="text-sm text-yellow-400 mb-2">
                  Tools & Technologies:
                </p>
                <ul className="text-sm text-yellow-400 space-y-1">
                  {p.tools.map((tool, idx) => (
                    <li key={idx}>• {tool}</li>
                  ))}
                </ul>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-4 py-2 bg-yellow-400 text-black font-semibold rounded-full shadow-md hover:scale-105 transition"
                >
                  Visit Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
