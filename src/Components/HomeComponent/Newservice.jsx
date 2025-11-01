import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

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
    id: "emerging-tech",
    title: "EMERGING TECH",
    desc: "Secure, scalable, and intelligent solutions to manage data, streamline operations, and enhance customer relationships.",
    children: [
      { 
        name: "AR", 
        img: DesignTool, 
        imageSettings: {
          position: { objectPosition: "50% 20%" },
          transform: "scale(1.1)",
          borderRadius: "18px"
        },
        size: "h-100" ,
      },
      { 
        name: "VR", 
        img: Layout, 
        imageSettings: {
          position: { objectPosition: "80% 60%" },
          transform: "scale(1.2)",
          borderRadius: "18px"
        },
        size: "h-100"
      },
      { 
        name: "3D", 
        img: Component, 
        imageSettings: {
          position: { objectPosition: "30% 70%" },
          transform: "scale(1.15)",
          borderRadius: "18px"
        },
        size: "h-100"
      },
    ],
  },
  {
    id: "data-cloud",
    title: "DATA AND CLOUD",
    desc: "Crafting innovative applications, immersive experiences, and engaging digital solutions that bring ideas to life.",
    children: [
      { 
        name: "CRM", 
        img: GoogleCloud, 
        imageSettings: {
          position: { objectPosition: "60% 10%" },
          transform: "scale(1.3)",
          borderRadius: "18px"
        },
        size: "h-100"
      },
      { 
        name: "IAM", 
        img: Portal, 
        imageSettings: {
          position: { objectPosition: "20% 85%" },
          transform: "scale(1.05)",
          borderRadius: "18px"
        },
        size: "h-100"
      },
      { 
        name: "ERP", 
        img: Dashboard, 
        imageSettings: {
          position: { objectPosition: "75% 40%" },
          transform: "scale(1.25)",
          borderRadius: "18px"
        },
        size: "h-100"
      },
      
    ],
  },
  {
    id: "software-dev",
    title: "SOFTWARE DEVELOPMENT",
    desc: "Crafting innovative applications, immersive experiences, and engaging digital solutions that bring ideas to life.",
    children: [
      { 
        name: "WEBSITE", 
        img: Aws, 
        imageSettings: {
          position: { objectPosition: "45% 90%" },
          transform: "scale(1.18)",
          borderRadius: "18px"
        },
        size: "h-100"
      },
      { 
        name: "APPLICATION", 
        img: Azure, 
        imageSettings: {
          position: { objectPosition: "15% 25%" },
          transform: "scale(1.12)",
          borderRadius: "18px"
        },
        size: "h-100"
      },
      { 
        name: "GAME", 
        img: GoogleCloud, 
        imageSettings: {
          position: { objectPosition: "85% 75%" },
          transform: "scale(1.08)",
          borderRadius: "18px"
        },
        size: "h-100"
      },
    ],
  },
];

export default function Categories() {
  const [activeCategoryId, setActiveCategoryId] = useState(capabilitiesData[0].id);
  const scrollContainerRef = useRef(null);
  const sectionRefs = useRef(capabilitiesData.map(() => useRef(null)));

  const activeCategory = capabilitiesData.find(cap => cap.id === activeCategoryId) || capabilitiesData[0];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveCategoryId(entry.target.dataset.categoryId);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -50% 0px',
        threshold: 0.01
      }
    );

    sectionRefs.current.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      sectionRefs.current.forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <section className="bg-black text-white min-h-screen px-6 md:px-12 py-16" ref={scrollContainerRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* LEFT STICKY SECTION */}
        <div className="md:sticky md:top-60 h-fit mt-10 md:mt-16">
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold tracking-wider text-yellow-500 mb-6 uppercase">
                  {activeCategory.title}
                </h3>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-yellow-600 via-yellow-500/80 to-transparent"></div>
                <div className="relative">
                  <p className="text-white/90 mt-6 max-w-md leading-relaxed text-lg md:text-xl font-light tracking-wide">
                    {activeCategory.desc.split('. ')[0]}.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {activeCategory.children.map((child, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-white backdrop-white rounded-full text-black text-sm font-medium "
                      >
                        {child.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SCROLLING SECTION */}
        <div className="flex flex-col">
          {capabilitiesData.map((cap, index) => (
            <div
              key={cap.id}
              ref={sectionRefs.current[index]}
              data-category-id={cap.id}
              className={`relative ${index < capabilitiesData.length - 1 ? 'mb-92' : ''}`}
            >
              <div className={`grid gap-6 ${
                cap.children.length === 3 
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
                  : cap.children.length === 4
                  ? "grid-cols-1 md:grid-cols-2"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
              }`}>
                {cap.children.map((child, i) => (
                  <Link
                    to={child.link}
                    key={i}
                    className={`block ${
                      index === 0 && i === 0 ? 'mt-16' :
                      index === 0 && i === 1 ? 'mt-25' :
                      index === 0 && i === 2 ? 'mt-35' :
                      index === 1 && i === 0 ? 'mt-20' :
                      index === 1 && i === 1 ? 'mt-30' :
                      index === 1 && i === 2 ? 'mt-40' :
                      index === 2 && i === 0 ? 'mt-12' :
                      index === 2 && i === 1 ? 'mt-20' :
                      index === 2 && i === 2 ? 'mt-30' : ''
                    }`}
                  >
                    <motion.div
                      className="group cursor-pointer relative"
                      whileHover={{
                        scale: 1.03,
                     
                      }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    >
                      {/* 🔥 YELLOW GLOW BACKGROUND BELOW IMAGE */}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[99%] h-[99px] bg-gradient-to-t from-yellow-500/60 via-yellow-400/30 to-transparent blur-2xl rounded-full pointer-events-none z-0"></div>

                      {/* IMAGE BOX */}
                      <div className="p-1 relative z-10">
                        <div 
                          className={`${child.size} overflow-hidden border border-gray-600/30 shadow-2xl relative group`}
                          style={{ borderRadius: child.imageSettings.borderRadius }}
                        >
                          <img
                            src={child.img}
                            alt={child.name}
                            style={{
                              ...child.imageSettings.position,
                              transform: child.imageSettings.transform,
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              transition: 'transform 0.7s ease-in-out'
                            }}
                            className="group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-70 group-hover:opacity-30 transition-all duration-500"></div>
                            <div className="rounded-full p-3">
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
      </div>

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
