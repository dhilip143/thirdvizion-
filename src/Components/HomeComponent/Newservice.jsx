import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

// ✅ Import images with clear names
import DesignTool from "/src/assets/home/categories/qp.png";
import Layout from "/src/assets/home/categories/qpp.png";
import Component from "/src/assets/home/categories/qppp.png";
import Por from "/src/assets/home/categories/qppppppppp.png";
import Portal from "/src/assets/home/categories/qpppp.png";
import Dashboard from "/src/assets/home/categories/qppppp.png";
import Aws from "/src/assets/home/categories/qpppppp.png";
import Azure from "/src/assets/home/categories/qppppppp.png";
import GoogleCloud from "/src/assets/home/categories/qpppppppp.png";

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
          transform: "scale(1)",
          borderRadius: "18px"
        },
        size: "h-100",
        link: "/augmented_reality" // Added navigation link
      },
      { 
        name: "3D", 
        img: Layout, 
        imageSettings: {
          position: { objectPosition: "80% 60%" },
          transform: "scale(1)",
          borderRadius: "18px"
        },
        size: "h-100",
        link: "/3d_services" // Added navigation link
      },
      { 
        name: "VIRTUAL REALITY", 
        img: Component, 
        imageSettings: {
          position: { objectPosition: "30% 70%" },
          transform: "scale(1)",
          borderRadius: "18px"
        },
        size: "h-100",
        link: "/virtual_reality" // Added navigation link
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
        img: Portal, 
        imageSettings: {
          position: { objectPosition: "60% 10%" },
          transform: "scale(1)",
          borderRadius: "18px"
        },
        size: "h-100",
        link: "/client_relationship_management" // Added navigation link
      },
      { 
        name: "IAM", 
        img:Dashboard , 
        imageSettings: {
          position: { objectPosition: "20% 85%" },
          transform: "scale(1)",
          borderRadius: "18px"
        },
        size: "h-100",
        link: "/identity_and_access_management" // Added navigation link
      },
      { 
        name: "ERP", 
        img:Aws , 
        imageSettings: {
          position: { objectPosition: "75% 40%" },
          transform: "scale(1)",
          borderRadius: "18px"
        },
        size: "h-100",
        link: "/enterprise_resource_planning" // Added navigation link
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
        img: Azure, 
        imageSettings: {
          position: { objectPosition: "45% 90%" },
          transform: "scale(1)",
          borderRadius: "18px"
        },
        size: "h-100",
        link: "/web_development" // Added navigation link
      },
      { 
        name: "MOBILE", 
        img: GoogleCloud , 
        imageSettings: {
          position: { objectPosition: "15% 25%" },
          transform: "scale(1)",
          borderRadius: "18px"
        },
        size: "h-100",
        link: "/app_development" // Added navigation link
      },
      { 
        name: "GAME DEVELOPMENT", 
        img: Por, 
        imageSettings: {
          position: { objectPosition: "85% 75%" },
          transform: "scale(1.08)",
          borderRadius: "18px"
        },
        size: "h-100",
        link: "/game_development" // Added navigation link
      },
    ],
  },
];

export default function Categories() {
  const [activeCategoryId, setActiveCategoryId] = useState(capabilitiesData[0].id);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollContainerRef = useRef(null);
  const sectionRefs = useRef(capabilitiesData.map(() => useRef(null)));
  const scrollTimeoutRef = useRef(null);

  const activeCategory = capabilitiesData.find(cap => cap.id === activeCategoryId) || capabilitiesData[0];

  // Handle scroll detection for the entire window
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      
      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      // Set timeout to detect when scrolling stops
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 100);
    };

    // Add scroll event listener to the window
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

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

  // Function to get the tags for each category (including the additional "Server Management" for Data and Cloud)
  const getCategoryTags = (category) => {
    if (category.id === "data-cloud") {
      // For Data and Cloud category, add "Server Management" to the existing children names
      return [
        ...category.children.map(child => child.name),
        "SERVER MANAGEMENT"
      ];
    }
    // For other categories, just return the children names
    return category.children.map(child => child.name);
  };

  // Function to determine if a tag should have special styling
  const getTagStyle = (tag) => {
    const specialTags = [""];
    
    if (specialTags.includes(tag)) {
      return "px-4 py-2 border border-yellow-500 bg-yellow-500 rounded-full text-black text-sm font-medium hover:bg-black hover:text-yellow-500 transition-all duration-300";
    }
    
    return "px-4 py-2 border border-white rounded-full text-white text-sm font-medium hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300";
  };

  // Function to get navigation link for tags (for the left section)
  const getTagLink = (tag, category) => {
    // Find the child item that matches the tag name
    const childItem = category.children.find(child => 
      child.name.toUpperCase() === tag.toUpperCase()
    );
    
    // For "SERVER MANAGEMENT" which is not in children array
    if (tag === "SERVER MANAGEMENT" && category.id === "data-cloud") {
      return "/server_management";
    }
    
    return childItem?.link || "#";
  };

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
                <h3 
                  className="text-4xl md:text-5xl font-bold tracking-wider text-yellow-500 mb-6 uppercase"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {activeCategory.title}
                </h3>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-yellow-600 via-yellow-500/80 to-transparent"></div>
                <div className="relative">
                  <p 
                    className="text-white/90 mt-6 max-w-md leading-relaxed text-lg md:text-xl font-light tracking-wide"
                    style={{ fontFamily: "Work Sans, sans-serif" }}
                  >
                    {activeCategory.desc.split('. ')[0]}.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {getCategoryTags(activeCategory).map((tag, index) => (
                      <Link 
                        to={getTagLink(tag, activeCategory)}
                        key={index}
                      >
                        <span 
                          className={`${getTagStyle(tag)} cursor-pointer`}
                          style={{ fontFamily: "outfit, sans-serif" }}
                        >
                          {tag}
                        </span>
                      </Link>
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
                      {/* 🔥 ANIMATED YELLOW GLOW BACKGROUND BELOW IMAGE */}
                      <motion.div 
                        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[99%] h-[99px] bg-gradient-to-t from-yellow-500/80 via-yellow-400/50 to-transparent blur-xl rounded-full pointer-events-none z-0"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ 
                          opacity: isScrolling ? 1 : 0,
                          scale: isScrolling ? 1 : 0.9
                        }}
                        transition={{ 
                          duration: 0.4,
                          ease: "easeInOut"
                        }}
                      />

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
                          
                          {/* TITLE OVERLAY */}
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex items-center justify-between">
                             
                              
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