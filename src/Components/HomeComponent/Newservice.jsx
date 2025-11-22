import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

// ✅ Import images with clear names
import DesignTool from "/src/assets/newserviceehome/ar.png";
import Layout from "/src/assets/newserviceehome/3d.png";
import Component from "/src/assets/newserviceehome/vr.png";
import Por from "/src/assets/home/mobileapp.jpg";
import Portal from "/src/assets/newserviceehome/erp.png";
import Dashboard from "/src/assets/newserviceehome/server.png";
import Aws from "/src/assets/newserviceehome/crm.png";
import Azure from "/src/assets/home/game.jpg";
import GoogleCloud from "/src/assets/home/web.jpg";

const capabilitiesData = [
  {
    id: "emerging-tech",
    title: "emerging tech",
    desc: " We deliver secure, scalable, and intelligent technology solutions that help businesses manage data efficiently, streamline operations, and enhance customer engagement.",
    children: [
      {
        name: "AR",
        img: DesignTool,
        emojis: ["👓"], // AR-related emojis
        imageSettings: {
          position: { objectPosition: "center" },
          transform: "scale(1)",
          borderRadius: "18px"
        },
        size: "h-100",
        link: "/augmented_reality"
      },
      {
        name: "3D",
        img: Layout,
        emojis: ["📐"], // 3D-related emojis
        imageSettings: {
          position: { objectPosition: "center" },
          transform: "scale(1)",
          borderRadius: "18px"
        },
        size: "h-100",
        link: "/3d_services"
      },
      {
        name: "VIRTUAL REALITY",
        img: Component,
        emojis: ["🥽", ], // VR-related emojis
        imageSettings: {
          position: { objectPosition: "center" },
          transform: "scale(1)",
          borderRadius: "18px"
        },
        size: "h-100",
        link: "/virtual_reality"
      },
    ],
  },
  {
    id: "data-cloud",
    title: "data and  Cloud",
    desc: "Empower your business with secure, scalable, and data-driven cloud solutions designed to boost performance and reliability. At ThirdVizion Labs, we create innovative digital applications that help brands manage data smarter, automate workflows, and drive growth.",
    children: [
      {
        name: "CRM",
        img: Portal,
        emojis: [ "📊",], // CRM-related emojis
        imageSettings: {
          position: { objectPosition: "center" },
          transform: "scale(1)",
          borderRadius: "18px"
        },
        size: "h-100",
        link: "/client_relationship_management"
      },
      {
        name: "IAM",
        img: Dashboard,
        emojis: ["🔒"], // IAM-related emojis
        imageSettings: {
          position: { objectPosition: "center" },
          transform: "scale(1)",
          borderRadius: "18px"
        },
        size: "h-100",
        link: "/identity_and_access_management"
      },
      {
        name: "ERP",
        img: Aws,
        emojis: [ "📈"], // ERP-related emojis
        imageSettings: {
          position: { objectPosition: "center" },
          transform: "scale(1)",
          borderRadius: "18px"
        },
        size: "h-100",
        link: "/enterprise_resource_planning"
      },
    ],
  },
  {
    id: "software-dev",
    title: "software development",
    desc: "We create innovative software solutions that help businesses grow in the digital era. From custom websites to mobile apps and interactive games, our team combines creativity, technology, and strategy to turn ideas into reality",
    children: [
      {
        name: "WEBSITE",
        img: Azure,
        emojis: ["💻"], // Website-related emojis
        imageSettings: {
          position: { objectPosition: "center" },
          transform: "scale(1)",
          borderRadius: "18px"
        },
        size: "h-100",
        link: "/web_development"
      },
      {
        name: "MOBILE",
        img: GoogleCloud,
        emojis: ["📱"], // Mobile-related emojis
        imageSettings: {
          position: { objectPosition: "center" },
          transform: "scale(1)",
          borderRadius: "18px"
        },
        size: "h-100",
        link: "/app_development"
      },
      {
        name: "GAME DEVELOPMENT",
        img: Por,
        emojis: ["🎮"], // Game development-related emojis
        imageSettings: {
          position: { objectPosition: "center" },
          transform: "scale(1)",
          borderRadius: "18px"
        },
        size: "h-100",
        link: "/game_development"
      },
    ],
  },
];

// Floating Particles Component
const FloatingParticles = ({ isScrolling }) => {
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2, // Random size between 2-6px
    left: Math.random() * 80 + 10, // Random position between 10-90%
    delay: Math.random() * 0.5  , // Random delay
    duration: Math.random() * 1 + 2, // Random duration between 2-5s
    opacity: Math.random() * 0.7 + 0.3, // Random opacity between 0.3-1
  }));

  return (
    <div className="absolute -bottom-4 left-0 right-0 h-20 pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-yellow-400"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            bottom: '0%',
            opacity: 0,
            filter: 'blur(0.5px)',
            boxShadow: '0 0 8px 2px rgba(255, 255, 0, 0.6)',
          }}
          animate={isScrolling ? {
            y: [0, -40, 0],
            opacity: [0, particle.opacity, 0],
            scale: [0.8, 1.2, 0.8],
          } : {
            opacity: 0,
            scale: 0
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: isScrolling ? Infinity : 0,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Emoji Animation Component - Rolling from left
const RollingEmojis = ({ emojis, isInView }) => {
  return (
    <div className="flex space-x-3 mt-4 justify-start flex-wrap">
      {emojis.map((emoji, index) => (
        <motion.span
          key={index}
          className="text-[40px]"
          initial={{ 
            opacity: 0, 
            x: -80,
            rotate: -360,
            scale: 0.3
          }}
          animate={isInView ? { 
            opacity: 1, 
            x: 0,
            rotate: 0,
            scale: 1
          } : {
            opacity: 0,
            x: -80,
            rotate: -360,
            scale: 0.3
          }}
          transition={{
            duration: 0.9,
            delay: index * 0.2,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          whileHover={{
            scale: 1.4,
            rotate: 15,
            transition: { duration: 0.3 }
          }}
        >
          {emoji}
        </motion.span>
      ))}
    </div>
  );
};

export default function Categories() {
  const [activeCategoryId, setActiveCategoryId] = useState(capabilitiesData[0].id);
  const [isScrolling, setIsScrolling] = useState(false);
  const [inViewItems, setInViewItems] = useState({});
  const scrollContainerRef = useRef(null);
  const sectionRefs = useRef(capabilitiesData.map(() => useRef(null)));
  const itemRefs = useRef({});
  const scrollTimeoutRef = useRef(null);

  const activeCategory = capabilitiesData.find(cap => cap.id === activeCategoryId) || capabilitiesData[0];

  // Handle scroll detection for the entire window
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Intersection Observer for categories
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

  // Intersection Observer for individual items (emojis)
  useEffect(() => {
    const itemObserver = new IntersectionObserver(
      (entries) => {
        const updates = {};
        entries.forEach(entry => {
          updates[entry.target.dataset.categoryId] = entry.isIntersecting;
        });
        setInViewItems(prev => ({ ...prev, ...updates }));
      },
      {
        root: null,
        rootMargin: '0px 0px -20% 0px',
        threshold: 0.4
      }
    );

    // Observe all category sections
    capabilitiesData.forEach(category => {
      const ref = sectionRefs.current[capabilitiesData.indexOf(category)];
      if (ref.current) {
        ref.current.dataset.categoryId = category.id;
        itemObserver.observe(ref.current);
      }
    });

    return () => {
      capabilitiesData.forEach(category => {
        const ref = sectionRefs.current[capabilitiesData.indexOf(category)];
        if (ref.current) itemObserver.unobserve(ref.current);
      });
    };
  }, []);

  const getCategoryTags = (category) => {
    if (category.id === "data-cloud") {
      return [
        ...category.children.map(child => child.name),
        "SERVER MANAGEMENT"
      ];
    }
    return category.children.map(child => child.name);
  };

  const getTagStyle = (tag) => {
    const specialTags = [""];

    if (specialTags.includes(tag)) {
      return "px-4 py-2 border border-yellow-500 bg-yellow-500 rounded-full text-black text-sm font-medium hover:bg-black hover:text-yellow-500 transition-all duration-300";
    }

    return "px-4 py-3 border border-white rounded-full text-white text-sm font-medium hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300";
  };

  const getTagLink = (tag, category) => {
    const childItem = category.children.find(child =>
      child.name.toUpperCase() === tag.toUpperCase()
    );

    if (tag === "SERVER MANAGEMENT" && category.id === "data-cloud") {
      return "/server_management";
    }

    return childItem?.link || "#";
  };

  return (
    <>
      <h1
        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-[#000000] text-center uppercase"
        style={{ fontFamily: "Outfit, sans-serif" }}
      >
        <span className="text-white">OUR</span>{" "}
        <span className="text-yellow-500">SERVICE</span>
      </h1>
      <section className="bg-black text-white min-h-screen px-4 sm:px-6 md:px-12 py-12 md:py-16" ref={scrollContainerRef}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

          {/* LEFT STICKY SECTION - With Emojis below buttons */}
          <div className="hidden md:block md:sticky md:top-60 h-fit mt-8 md:mt-16">
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
                    className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-wider text-yellow-500 mb-4 md:mb-6 uppercase text-center md:text-left"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {activeCategory.title}
                  </h3>
                  
                  <div className="mt-4 md:mt-6 h-px w-full bg-gradient-to-r from-yellow-600 via-yellow-500/80 to-transparent"></div>
                  <div className="relative">
                    <p
                      className="text-white/90 mt-4 md:mt-6 max-w-md leading-relaxed text-xs md:text-lg font-light tracking-wide text-center md:text-left"
                      style={{ fontFamily: "Work Sans, sans-serif" }}
                    >
                      {activeCategory.desc.split('. ')[0]}.
                    </p>
                    
                    {/* BUTTONS SECTION */}
                    <div className="mt-6 md:mt-8 flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
                      {getCategoryTags(activeCategory).map((tag, index) => (
                        <Link
                          to={getTagLink(tag, activeCategory)}
                          key={index}
                        >
                          <span
                            className={`${getTagStyle(tag)} cursor-pointer inline-block text-xs sm:text-sm`}
                            style={{ fontFamily: "outfit, sans-serif" }}
                          >
                            {tag}
                          </span>
                        </Link>
                      ))}
                    </div>

                    {/* EMOJIS BELOW BUTTONS on LEFT SIDE */}
                    <div className="mt-6 md:mt-8">
                      <RollingEmojis 
                        emojis={activeCategory.children.flatMap(child => child.emojis).slice(0, 6)} 
                        isInView={inViewItems[activeCategory.id]} 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SCROLLING SECTION - Mobile optimized (NO EMOJIS HERE) */}
          <div className="flex flex-col">
            {capabilitiesData.map((cap, index) => (
              <div
                key={cap.id}
                ref={sectionRefs.current[index]}
                data-category-id={cap.id}
                className={`relative ${index < capabilitiesData.length - 1 ? 'mb-20 md:mb-92' : ''}`}
              >
                {/* MOBILE VIEW - Show category title and services without images */}
                <div className="block md:hidden mb-8">
                  {/* Category Title for Mobile */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-6"
                  >
                    <h3 
                      className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-wider text-yellow-500 mb-3 uppercase"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      {cap.title}
                    </h3>
                    
                    <div className="h-px w-20 mx-auto bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 mb-4"></div>
                    <p
                      className="text-white/80 text-xs md:text-lg leading-relaxed font-light tracking-wide max-w-md mx-auto"
                      style={{ fontFamily: "Work Sans, sans-serif" }}
                    >
                      {cap.desc.split('. ')[0]}.
                    </p>

                    {/* BUTTONS FOR MOBILE */}
                    <div className="mt-6 flex flex-wrap gap-2 justify-center">
                      {getCategoryTags(cap).map((tag, tagIndex) => (
                        <Link
                          to={getTagLink(tag, cap)}
                          key={tagIndex}
                        >
                          <span
                            className="px-3 py-2 border border-white/50 rounded-full text-white text-xs font-medium hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300"
                            style={{ fontFamily: "outfit, sans-serif" }}
                          >
                            {tag}
                          </span>
                        </Link>
                      ))}
                    </div>

                    {/* EMOJIS FOR MOBILE below buttons */}
                    <div className="mt-6">
                      <RollingEmojis 
                        emojis={cap.children.flatMap(child => child.emojis).slice(0, 6)} 
                        isInView={inViewItems[cap.id]} 
                      />
                    </div>
                  </motion.div>

                  {/* Services List for Mobile */}
                  <div className="space-y-4">
                    {cap.children.map((child, i) => {
                      const itemId = `${cap.id}-${child.name}`;
                      return (
                        <div
                          key={i}
                          ref={el => itemRefs.current[itemId] = el}
                          data-item-id={itemId}
                        >
                          <Link
                            to={child.link}
                            className="block"
                          >
                            <motion.div
                              className="group cursor-pointer relative bg-gray-900/70 border border-gray-600 rounded-xl p-5 hover:bg-gray-800/70 hover:border-yellow-500/30 transition-all duration-300"
                              whileHover={{
                                scale: 1.02,
                              }}
                              whileTap={{ scale: 0.98 }}
                              transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            >
                              {/* Mobile service content without image */}
                              <div className="flex items-center justify-between">
                                <div className="flex-1">
                                  <h4 
                                    className="text-white text-base font-medium tracking-wide mb-1"
                                    style={{ fontFamily: "Outfit, sans-serif" }}
                                  >
                                    {child.name}
                                  </h4>
                                  <div className="h-px w-12 bg-gradient-to-r from-yellow-500 to-transparent mb-2"></div>
                                  <p className="text-white/60 text-xs font-light">
                                    Click to explore {child.name.toLowerCase()} services
                                  </p>
                                </div>
                                
                              </div>
                            </motion.div>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* DESKTOP VIEW - Grid with images (NO EMOJIS HERE) */}
                <div className="hidden md:block relative">
                  <div className={`hidden md:grid gap-6 ${cap.children.length === 3
                      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                      : cap.children.length === 4
                        ? "grid-cols-1 md:grid-cols-2"
                        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
                    }`}>
                    {cap.children.map((child, i) => {
                      const itemId = `${cap.id}-${child.name}`;
                      return (
                        <div
                          key={i}
                          ref={el => itemRefs.current[itemId] = el}
                          data-item-id={itemId}
                          className={`block relative ${index === 0 && i === 0 ? 'mt-16' :
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
                          <Link
                            to={child.link}
                          >
                            <motion.div
                              className="group cursor-pointer relative"
                              whileHover={{
                                scale: 1.03,
                              }}
                              transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            >
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
                                      objectFit: 'fill',
                                      transition: 'transform 0.7s ease-in-out'
                                    }}
                                    className="group-hover:scale-110"
                                  />
                                  <div className="absolute inset-0 bg-black/40 opacity-70 group-hover:opacity-30 transition-all duration-500"></div>

                                  {/* TITLE OVERLAY - NO EMOJIS HERE */}
                                  <div className="absolute bottom-4 left-4 right-4">
                                    <div className="flex items-center justify-between">
                                      <div className="flex-1">
                                        <h4 className="text-white text-lg font-semibold mb-1">
                                          {child.name}
                                        </h4>
                                      </div>
                                    
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-20 md:mt-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Additional content if needed */}
          </motion.div>
        </div>
      </section>
    </>
  );
}