import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// ✅ Import your VR images
import VrImage1 from "/src/assets/vr/VrImage1.jpeg";
import VrImage2 from "/src/assets/vr/VrImage2.jpeg";
import VrImage3 from "/src/assets/vr/VrImage3.jpeg";
import VrImage4 from "/src/assets/vr/VrImage4.jpeg";

// ✅ VR Services Data — each with one image
const VrData = [
  {
    id: "vrDevelopment",
    title: "Next-Gen VR Development",
    description:
      "We create custom VR solutions that blend creativity and technology to deliver immersive experiences and boost user engagement.",
    icon: "🛠️",
    image: VrImage1,
  },
  {
    id: "trainingVR",
    title: "VR Training & Simulation",
    icon: "🎯",
    description:
      "Transform workforce learning with realistic, risk-free VR simulations that enhance skill development and improve training efficiency.",
    image: VrImage2,
  },
  {
    id: "architecturalVR",
    title: "Architectural Visualization",
    icon: "🏗️",
    description:
      "Bring designs to life with realistic 3D architectural visualization. Explore unbuilt spaces and experience your projects before construction begins",
    image: VrImage3,
  },
  {
    id: "entertainmentVR",
    title: "Entertainment & Gaming",
    icon: "🎮",
    description:
      "We design immersive VR games and experiences that combine creativity and technology to deliver interactive, unforgettable adventures.",
    image: VrImage4,
  },
];

const Vrsol = () => {
  const [activeService, setActiveService] = useState("vrDevelopment");
  const activeServiceData = VrData.find((vr) => vr.id === activeService);

  const headerRef = useRef(null);
  const serviceCardsRef = useRef([]);
  const detailsRef = useRef(null);
  const containerRef = useRef(null);
  const pinContainerRef = useRef(null);

  useEffect(() => {
    // Header animation
    gsap.fromTo(
      headerRef.current?.children || [],
      { opacity: 0, y: -50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.5, 
        stagger: 0.2, 
        ease: "elastic.out(1, 0.5)" 
      }
    );

    // Setup ScrollTrigger with pinning for the entire section
    const pinContainer = pinContainerRef.current;
    const serviceCards = serviceCardsRef.current;

    if (pinContainer && serviceCards.length === VrData.length) {
      // Calculate total height needed for pinning
      const totalHeight = VrData.length * 100; // 100vh per section

      const scrollTrigger = ScrollTrigger.create({
        trigger: pinContainer,
        start: "top top",
        end: `+=${totalHeight}vh`,
        pin: true,
        pinSpacing: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          const index = Math.min(
            Math.floor(progress * VrData.length),
            VrData.length - 1
          );
          
          if (VrData[index] && VrData[index].id !== activeService) {
            setActiveService(VrData[index].id);
          }
        },
        markers: false,
      });

      // Individual card triggers for precise activation
      VrData.forEach((service, index) => {
        const card = serviceCards[index];
        if (card) {
          ScrollTrigger.create({
            trigger: card,
            start: "top 30%",
            end: "bottom 30%",
            onEnter: () => setActiveService(service.id),
            onEnterBack: () => setActiveService(service.id),
            markers: false,
          });
        }
      });

      return () => {
        scrollTrigger.kill();
      };
    }
  }, []);

  const handleServiceClick = (serviceId) => {
    setActiveService(serviceId);
    
    // Native smooth scroll without external libraries
    const index = VrData.findIndex(vr => vr.id === serviceId);
    const card = serviceCardsRef.current[index];
    if (card) {
      const elementPosition = card.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 100;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div
      className="min-h-screen text-white px-4 md:px-8 py-12 relative overflow-hidden w-full"
      ref={containerRef}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto relative z-10 w-full" ref={pinContainerRef}>
        {/* Header - Only Title */}
        <div ref={headerRef} className="text-center mb-12 md:mb-16 w-full">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-500 tracking-tight w-full"  
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Complete VR Solutions
          </h1>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 w-full">
          {/* Left: Cards */}
          <div className="flex flex-col gap-6 w-full">
            {VrData.map((service, index) => (
              <motion.div
                key={service.id}
                ref={(el) => {
                  serviceCardsRef.current[index] = el;
                }}
                whileHover={{ scale: 1.02 }}
                onClick={() => handleServiceClick(service.id)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 transform border relative min-h-[180px] flex flex-col justify-center w-full
                  ${
                    activeService === service.id
                      ? "bg-violet-900/40 border-violet-600 shadow-xl shadow-violet-500/20"
                      : "bg-zinc-900/50 border-gray-700 hover:border-violet-500 hover:bg-zinc-800/50"
                  }`}
              >
                {/* Active indicator */}
                {activeService === service.id && (
                  <motion.div
                    className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1.5 h-16 bg-violet-500 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
                
                <div className="flex items-center mb-3">
                  <span className="text-3xl mr-3">{service.icon}</span>
                  <h3 
                    className="text-xl md:text-2xl font-bold"   
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {service.title}
                  </h3>
                </div>
                <p 
                  className="text-gray-300 text-base leading-relaxed"   
                  style={{ fontFamily: "work-sans, sans-serif" }}
                >
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right: Sticky Image & Details */}
          <div className="lg:sticky lg:top-4 self-start w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                ref={detailsRef}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="bg-zinc-900/60 rounded-2xl p-6 md:p-8 border border-violet-700/50 backdrop-blur-md relative overflow-hidden w-full"
              >
                {/* Service Header */}
                <div className="mb-6">
                  <h2 
                    className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent"   
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {activeServiceData.title}
                  </h2>
                  <p 
                    className="text-base text-gray-300 leading-relaxed"   
                    style={{ fontFamily: "work-sans, sans-serif" }}
                  >
                    {activeServiceData.description}
                  </p>
                </div>

                {/* Image with enhanced animation */}
                <motion.div
                  key={activeServiceData.image}
                  initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ 
                    duration: 0.7,
                    ease: "easeOut"
                  }}
                  className="relative overflow-hidden rounded-xl mb-6 w-full"
                >
                  <img
                    src={activeServiceData.image}
                    alt={activeServiceData.title}
                    className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                {/* Progress Indicator */}
                <div className="flex justify-center space-x-2 mb-4">
                  {VrData.map((service, index) => (
                    <button
                      key={service.id}
                      onClick={() => handleServiceClick(service.id)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeService === service.id
                          ? "bg-violet-500 scale-110 shadow-md shadow-violet-500/40"
                          : "bg-gray-600 hover:bg-gray-400 hover:scale-105"
                      }`}
                      aria-label={`Go to ${service.title}`}
                    />
                  ))}
                </div>

                {/* Scroll Hint */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-center"
                >
                  <p className="text-gray-400 text-xs flex items-center justify-center gap-2">
                    <span>Scroll to explore services</span>
                    <motion.span
                      animate={{ y: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      ↓
                    </motion.span>
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Additional Spacing for better scroll experience */}
        <div className="h-20"></div>
      </div>
    </div>
  );
};

export default Vrsol;