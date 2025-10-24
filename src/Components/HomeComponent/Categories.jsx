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

// Constants for layout calculations
const CARD_HEIGHT_FOR_REPLACEMENT = 380;
const CATEGORY_BUFFER_SPACE = 450;

export default function Categories() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 min-h-screen px-6 md:px-12 py-16">
      <div className="space-y-40">
        {capabilitiesData.map((cap, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            style={{
              minHeight: `${(cap.children.length - 1) * CATEGORY_BUFFER_SPACE + CARD_HEIGHT_FOR_REPLACEMENT + CATEGORY_BUFFER_SPACE}px`
            }}
          >
            {/* Left Sticky Section - Deep Navy Theme */}
            <div className="md:sticky md:top-24 h-fit bg-gradient-to-br from-slate-900 via-blue-900/50 to-emerald-900/30 p-10 rounded-3xl shadow-2xl border border-slate-700 relative overflow-hidden">
              {/* Animated Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent animate-pulse"></div>
              
              <div className="flex items-baseline gap-6 relative z-10">
                <div className="text-6xl md:text-8xl text-white/5 font-bold select-none tracking-tighter">
                  {cap.id}
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-bold tracking-tight text-white mb-6 leading-tight">
                    {cap.title}
                  </h3>
                  <p className="text-emerald-200/80 mt-4 max-w-md leading-relaxed text-lg font-light">
                    {cap.desc}
                  </p>
                </div>
              </div>
              
              <div className="mt-10 flex items-center relative z-10">
                <div className="w-5 h-5 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse mr-4 shadow-lg shadow-emerald-400/40 ring-2 ring-emerald-400/30"></div>
                <span className="text-emerald-200 text-base font-semibold tracking-wide">
                  {cap.children.length} premium services
                </span>
              </div>
            </div>

            {/* Right Side Cards - Glass Morphism Design */}
            <div className="flex flex-col pt-[450px] gap-8">
              {cap.children.map((child, i) => (
                <Link
                  to={child.link}
                  key={i}
                  className={`relative md:sticky md:top-24 ${i > 0 ? `mt-[-${CARD_HEIGHT_FOR_REPLACEMENT}px]` : ''} z-10 group`}
                  style={{ zIndex: 10 + i }}
                >
                  <motion.div
                    className="rounded-3xl overflow-hidden shadow-2xl cursor-pointer bg-slate-800/30 backdrop-blur-md border border-slate-600/50 relative"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(16, 185, 129, 0.25)",
                      y: -5,
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 20 
                    }}
                  >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                    
                    {/* Top Card Header */}
                    <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-8 flex justify-between items-center relative border-b border-slate-700">
                      <div className="flex-1">
                        <span className="font-bold text-white text-2xl tracking-tight block leading-tight">
                          {child.name}
                        </span>
                      </div>
                      <motion.div 
                        className="w-14 h-14 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 flex items-center justify-center shadow-2xl border border-emerald-300/50 group-hover:shadow-3xl transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <ArrowUpRight className="text-slate-900 w-7 h-7 font-bold" />
                      </motion.div>
                    </div>

                    {/* Image Container */}
                    <div className="p-6 bg-transparent">
                      <div className="h-72 rounded-2xl overflow-hidden border border-slate-600/50 shadow-lg relative group/image">
                        <motion.img
                          src={child.img}
                          alt={child.name}
                          className="w-full h-full object-cover"
                          whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.8, ease: "easeOut" }
                          }}
                        />
                        
                        {/* Enhanced Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-70 group-hover/image:opacity-30 transition-all duration-700"></div>
                        
                        {/* Hover Info Card */}
                        <motion.div 
                          className="absolute bottom-6 left-6 right-6"
                          initial={{ opacity: 0, y: 20 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          <div className="bg-slate-800/95 backdrop-blur-md rounded-xl p-5 border border-slate-600/50 shadow-2xl transform-gpu">
                            <div className="flex items-center justify-between">
                              <span className="text-white font-bold text-lg tracking-wide">
                                Explore {child.name.split(' ')[0]}
                              </span>
                              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                            </div>
                            <p className="text-slate-300 text-sm mt-2 font-medium">
                              Click to discover innovative solutions
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Subtle Border Glow */}
                    <div className="absolute inset-0 rounded-3xl border border-emerald-500/10 pointer-events-none"></div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-48">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-12 border border-slate-700 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
              Ready to Transform Your Vision?
            </h3>
            <p className="text-emerald-200/70 text-lg font-light max-w-2xl mx-auto leading-relaxed">
              Explore our premium services and discover how we can bring your ideas to life with cutting-edge technology and innovative solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}