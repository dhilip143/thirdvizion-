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
    title: "emerging tech",
    desc: " We deliver secure, scalable, and intelligent technology solutions that help businesses manage data efficiently, streamline operations, and enhance customer engagement.",
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
        link: "/augmented_reality"
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
        link: "/3d_services"
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
        imageSettings: {
          position: { objectPosition: "60% 10%" },
          transform: "scale(1)",
          borderRadius: "18px"
        },
        size: "h-100",
        link: "/client_relationship_management"
      },
      {
        name: "IAM",
        img: Dashboard,
        imageSettings: {
          position: { objectPosition: "20% 85%" },
          transform: "scale(1)",
          borderRadius: "18px"
        },
        size: "h-100",
        link: "/identity_and_access_management"
      },
      {
        name: "ERP",
        img: Aws,
        imageSettings: {
          position: { objectPosition: "75% 40%" },
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
        imageSettings: {
          position: { objectPosition: "45% 90%" },
          transform: "scale(1)",
          borderRadius: "18px"
        },
        size: "h-100",
        link: "/web_development"
      },
      {
        name: "MOBILE",
        img: GoogleCloud,
        imageSettings: {
          position: { objectPosition: "15% 25%" },
          transform: "scale(1)",
          borderRadius: "18px"
        },
        size: "h-100",
        link: "/app_development"
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

  // Function to render vertical lines - hidden on mobile
  const renderVerticalLines = (category, categoryIndex) => {
    const lineConfigs = [
      {
        id: 1,
        position: "-4.49%",
        color: "bg-black",
        width: "w-9",
        responsive: "hidden md:block"
      },
      {
        id: 2,
        position: "30.20%",
        color: "bg-black",
        width: "w-9",
        responsive: "hidden md:block"
      },
      {
        id: 3,
        position: "64.60%",
        color: "bg-black",
        width: "w-9",
        responsive: "hidden md:block lg:block"
      },
      {
        id: 4,
        position: "99.29%",
        color: "bg-black",
        width: "w-8",
        responsive: "hidden lg:block"
      }
    ];

    return (
      <>
        {lineConfigs.map((line) => (
          <div
            key={`${category.id}-line-${line.id}`}
            className={`absolute top-0 bottom-0 ${line.width} ${line.color} ${line.responsive} z-20 transition-all`}
            style={{
              left: line.position,
              height: '100%',
              top: '1.5rem',
            }}
          >
            <div className={`absolute inset-0 bg-black`}></div>
          </div>
        ))}
      </>
    );
  };

  return (
   <>
   <h1 className=" text-6xl bg-[#000000]  text-yellow-500 text-center upeercase"  style={{ fontFamily: "outfit, sans-serif" }}> SERVICE</h1>
    <section className="bg-black text-white min-h-screen px-4 sm:px-6 md:px-12 py-12 md:py-16" ref={scrollContainerRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

        {/* LEFT STICKY SECTION - Hidden on mobile, show only on desktop */}
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
                  className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-wider text-yellow-500 mb-4 md:mb-6 uppercase text-center md:text-left"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {activeCategory.title}
                </h3>
                <div className="mt-4 md:mt-6 h-px w-full bg-gradient-to-r from-yellow-600 via-yellow-500/80 to-transparent"></div>
                <div className="relative">
                  <p
                    className="text-white/90 mt-4 md:mt-6 max-w-md leading-relaxed text-base sm:text-lg md:text-xl font-light tracking-wide text-center md:text-left"
                    style={{ fontFamily: "Work Sans, sans-serif" }}
                  >
                    {activeCategory.desc.split('. ')[0]}.
                  </p>
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
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SCROLLING SECTION - Mobile optimized */}
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
                    className="text-2xl font-medium tracking-wider text-yellow-500 mb-3 uppercase"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {cap.title}
                  </h3>
                  <div className="h-px w-20 mx-auto bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 mb-4"></div>
                  <p
                    className="text-white/80 text-sm leading-relaxed font-light tracking-wide max-w-md mx-auto"
                    style={{ fontFamily: "Work Sans, sans-serif" }}
                  >
                    {cap.desc.split('. ')[0]}.
                  </p>
                </motion.div>

                {/* Services List for Mobile */}
                <div className="space-y-4">
                  {cap.children.map((child, i) => (
                    <Link
                      to={child.link}
                      key={i}
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
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-500/20 group-hover:bg-yellow-500/30 transition-all duration-300">
                            <ArrowUpRight className="text-yellow-500 w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>

                {/* Tags for Mobile */}
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
              </div>

              {/* DESKTOP VIEW - Grid with images (unchanged) */}
              <div className="hidden md:block relative">
                {renderVerticalLines(cap, index)}

                <div className={`hidden md:grid gap-6 ${cap.children.length === 3
                    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    : cap.children.length === 4
                      ? "grid-cols-1 md:grid-cols-2"
                      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
                  }`}>
                  {cap.children.map((child, i) => (
                    <Link
                      to={child.link}
                      key={i}
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
                      <motion.div
                        className="group cursor-pointer relative"
                        whileHover={{
                          scale: 1.03,
                        }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      >
                        {/* ANIMATED YELLOW GLOW BACKGROUND BELOW IMAGE */}
                        <motion.div
                          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[99%] h-[89px] bg-gradient-to-t from-yellow-500/80 via-yellow-400/50 to-transparent blur-xl rounded-full pointer-events-none z-0"
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

                        {/* FLOATING YELLOW PARTICLES - Only show when scrolling */}
                        <FloatingParticles isScrolling={isScrolling} />

                        {/* IMAGE BOX - Hidden on mobile */}
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
                                {/* Title content if needed */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
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
