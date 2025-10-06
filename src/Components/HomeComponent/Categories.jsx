import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ✅ Import images with clear names
import DesignTool from "/src/assets/home/categories/Gemini_Generated_Image_nb1svjnb1svjnb1s.png";
import Layout from "/src/assets/home/categories/Gemini_Generated_Image_prlzylprlzylprlz.png";
import Component from "/src/assets/home/categories/Gemini_Generated_Image_udav5iudav5iudav.png";
import UserFocus from "/src/assets/home/categories/Gemini_Generated_Image_n6yszmn6yszmn6ys.png";

import Portal from "/src/assets/home/categories/Gemini_Generated_Image_tmihoitmihoitmih.png";
import Dashboard from "/src/assets/home/categories/Gemini_Generated_Image_hafb71hafb71hafb.png";

import Aws from "/src/assets/HomeImages/CategoryImages/aws.jpg";
import Azure from "/src/assets/HomeImages/CategoryImages/azure.jpg";
import GoogleCloud from "/src/assets/home/categories/Gemini_Generated_Image_qmsw01qmsw01qmsw.png";

const capabilitiesData = [
  {
    id: "01/6",
    title: "Immersive Tech",
    desc: "Intuitive designs for seamless digital journeys.",
    children: [
      { name: "VIRTUAL REALITY", img: DesignTool, link: "/virtual_reality" },
      { name: "AUGMENTED REALITY", img: Layout, link: "/augmented_reality" },
      { name: "3D SERVICES", img: Component, link: "/3d_services" },
    ],
  },
  {
    id: "02/6",
    title: "Data & Cloud",
    desc: "Custom-built, scalable platforms.",
    children: [
      { name: "CRM SOLUTIONS", img: GoogleCloud, link: "/client_relationship_management" },
      { name: "IAM SOLUTIONS", img: Portal, link: "/identity_and_access_management" },
      { name: "ERP SOLUTIONS", img: Dashboard, link: "/enterprise_resource_planning" },
      { name: "SERVER MANAGEMENT", img: UserFocus, link: "/server_management" },
    ],
  },
  {
    id: "03/6",
    title: "Web Development & Software",
    desc: "Transforming businesses with secure, scalable infrastructure.",
    children: [
      { name: "WEB DEVELOPMENT", img: Aws, link: "/web_development" },
      { name: "MOBILE APPS", img: Azure, link: "/app_development" },
      { name: "GAME DEVELOPMENT", img: GoogleCloud, link: "/game_development" },
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
            <div className="flex flex-col gap-8">
              {cap.children.map((child, i) => (
                <Link to={child.link} key={i}>
                  <motion.div
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

                    {/* Gap between top card and image */}
                    <div className="mt-3">
                      {/* Attached Grey Box with Image */}
                      <div className="bg-gray-300 h-40 rounded-b-lg overflow-hidden">
                        <img
                          src={child.img}
                          alt={child.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
