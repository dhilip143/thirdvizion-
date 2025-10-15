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

// Define a constant for the card's estimated height for the replacement effect
const CARD_HEIGHT_FOR_REPLACEMENT = 380;
// Define a padding value to ensure the next category's cards start far enough down
const CATEGORY_BUFFER_SPACE = 450;

export default function Categories() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white min-h-screen px-6 md:px-12 py-16">
      <div className="space-y-40">
        {capabilitiesData.map((cap, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
            style={{
              minHeight: `${(cap.children.length - 1) * CATEGORY_BUFFER_SPACE + CARD_HEIGHT_FOR_REPLACEMENT + CATEGORY_BUFFER_SPACE}px`
            }}
          >
            {/* Left Sticky Section - Enhanced Design */}
            <div className="md:sticky md:top-20 h-fit bg-gradient-to-br from-purple-900/80 to-indigo-900/80 p-8 rounded-3xl shadow-2xl border border-purple-500/30 backdrop-blur-sm">
              <div className="flex items-baseline gap-4">
                <div className="text-5xl md:text-7xl text-white/10 font-bold select-none">
                  {cap.id}
                </div>
                <div>
                  <h3 className="text-3xl font-bold tracking-wide text-white mb-4">
                    {cap.title}
                  </h3>
                  <p className="text-white/80 mt-3 max-w-md leading-relaxed text-lg">
                    {cap.desc}
                  </p>
                </div>
              </div>
              <div className="mt-8 flex items-center">
                <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse mr-3 shadow-lg shadow-green-500/25"></div>
                <span className="text-white/80 text-base font-medium">{cap.children.length} services available</span>
              </div>
            </div>

            {/* Right Side Cards with Enhanced Design */}
            <div className="flex flex-col pt-[450px]">
              {cap.children.map((child, i) => (
                <Link
                  to={child.link}
                  key={i}
                  className={`relative md:sticky md:top-20 ${i > 0 ? `mt-[-${CARD_HEIGHT_FOR_REPLACEMENT}px]` : ''} z-10`}
                  style={{ zIndex: 10 + i }}
                >
                  <motion.div
                    className="rounded-3xl overflow-hidden shadow-2xl cursor-pointer border border-gray-600/30 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm"
                    whileHover={{
                      scale: 1.04,
                      boxShadow: "0px 20px 40px rgba(168, 85, 247, 0.3)",
                      borderColor: "rgba(168, 85, 247, 0.6)",
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    {/* Top Card Header - Enhanced */}
                    <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-600/40 p-7 flex justify-between items-center">
                      <div>
                        <span className="font-bold text-white text-xl tracking-wide block">
                          {child.name}
                        </span>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center shadow-2xl shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                        <ArrowUpRight className="text-white w-6 h-6" />
                      </div>
                    </div>

                    {/* Image Box - Enhanced */}
                    <div className="p-4 bg-gradient-to-br from-gray-900 to-black">
                      <div className="h-64 rounded-xl overflow-hidden border border-gray-600/30 shadow-2xl relative group">
                        <img
                          src={child.img}
                          alt={child.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 group-hover:opacity-30 transition-all duration-500"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-gradient-to-r from-purple-600/90 to-pink-600/90 backdrop-blur-sm rounded-lg p-3 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <span className="text-white font-medium text-sm">Discover {child.name.split(' ')[0]}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Bottom Section */}
      <div className="text-center mt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          
        </motion.div>
      </div>
    </section>
  );
}