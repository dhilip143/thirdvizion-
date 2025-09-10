
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

// ✅ Import images with clear names
import DesignTool from "/src/assets/HomeImages/CatagoriesImges/DesignTool.jpg";
import Layout from "/src/assets/HomeImages/CatagoriesImges/layout.jpg";
import Component from "/src/assets/HomeImages/CatagoriesImges/component.jpg";
import UserFocus from "/src/assets/HomeImages/CatagoriesImges/UserFocus.jpg";

// import Ecommerce from "/src/assets/HomeImages/CatagoriesImges/Ecommerce.jpg";
import Portal from "/src/assets/HomeImages/CatagoriesImges/portals.jpg";
import Dashboard from "/src/assets/HomeImages/CatagoriesImges/dashboard.jpg";

import Aws from "/src/assets/HomeImages/CatagoriesImges/aws.jpg";
import Azure from "/src/assets/HomeImages/CatagoriesImges/azure.jpg";
import GoogleCloud from "/src/assets/HomeImages/CatagoriesImges/googlecloud.jpg";

const capabilitiesData = [
  {
    id: "01/6",
    title: "Immersive Tech",
    desc: "Intuitive designs for seamless digital journeys.",
    children: [
      { name: "VIRTUAL REALITY", img: DesignTool },
      { name: "AUGUMENTED REALITY", img: Layout },
      { name: "3D SERVICES", img: Component },
      // { name: "User Focus", img: UserFocus },
    ],
  },
  {
    id: "02/6",
    title: "Data & Cloud",
    desc: "Custom-built, scalable platforms.",
    children: [
      { name: "CRM SOLUTIONS", img: GoogleCloud },
      { name: "IAM SOLUTIONS", img: Portal },
      { name: "ERP SOLUTIONS", img: Dashboard },
       { name: "SERVER MANAGEMENT", img: UserFocus },
    ],
  },
  {
    id: "03/6",
    title: "Web Development & Software",
    desc: "Transforming businesses with secure, scalable infrastructure.",
    children: [
      { name: "WEB DEVOLOPEMENT", img: Aws },
      { name: "MOBILE APPS", img: Azure },
      { name: "GAME DEVOLOPEMENT", img: GoogleCloud },
    ],
  },
];

export default function Categories() {
  return (
    <section className="bg-black text-white min-h-screen px-6 md:px-12 py-16">
      <div className="space-y-40">
        {capabilitiesData.map((cap, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Sticky Section */}
            <div className="md:sticky md:top-20 h-fit bg-gray-300 p-6 rounded-lg">
              <div className="flex items-baseline gap-4">
                <div className="text-5xl md:text-6xl text-black/20 font-bold select-none">
                  {cap.id}
                </div>
                <div>
                  <h3 className="text-xl font-extrabold tracking-wide text-black">
                    {cap.title}
                  </h3>
                  <p className="text-gray-800 mt-1 max-w-sm leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side Cards with Animation */}
            <div className="space-y-6">
              {cap.children.map((child, i) => (
                <motion.div
                  key={i}
                  className="rounded-lg overflow-hidden shadow-lg cursor-pointer"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0px 8px 25px rgba(168, 85, 247, 0.5)", // purple glow
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  {/* Top Black Card */}
                  <div className="bg-black border border-gray-700 p-6 flex justify-between items-center rounded-t-lg">
                    <span className="font-medium text-white">{child.name}</span>
                    <div className="w-7 h-7 rounded-full bg-purple-400 flex items-center justify-center">
                      <ArrowUpRight className="text-black w-4 h-4" />
                    </div>
                  </div>

                  {/* Attached Grey Box with Image */}
                  <div className="bg-gray-300 h-40 rounded-b-lg overflow-hidden">
                    <img
                      src={child.img}
                      alt={child.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
