
// export default Vrsol;
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

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

  useEffect(() => {
    gsap.fromTo(
      headerRef.current?.children || [],
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, stagger: 0.2, ease: "elastic.out(1, 0.5)" }
    );
  }, []);

  const handleServiceClick = (serviceId) => {
    setActiveService(serviceId);
  };

  return (
    <div
      className="min-h-screen text-white px-4 md:px-10 py-16 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-500 bg-[length:200%_100%] tracking-tight"  style={{ fontFamily: "Outfit, sans-serif" }}>
            Complete VR Solutions
          </h1>
          <p className="text-xs md:text-lg text-gray-300 max-w-2xl mx-auto"   style={{ fontFamily: "work-sans, sans-serif" }}>
            From enterprise training to immersive entertainment, we build comprehensive 
            virtual reality experiences that push the boundaries of what's possible.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
          {/* Left: Cards */}
          <div className="flex flex-col gap-6">
            {VrData.map((service, index) => (
              <motion.div
                key={service.id}
                ref={(el) => (serviceCardsRef.current[index] = el)}
                whileHover={{ scale: 1.02 }}
                onClick={() => handleServiceClick(service.id)}
                className={`p-8 rounded-3xl cursor-pointer transition-all duration-300 transform border
                  ${
                    activeService === service.id
                      ? "bg-violet-900/40 border-violet-600"
                      : "bg-zinc-900/50 border-gray-700 hover:border-violet-500"
                  }`}
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{service.icon}</span>
                  <h3 className="text-2xl font-bold"   style={{ fontFamily: "Outfit, sans-serif" }}>{service.title}</h3>
                </div>
                <p className="text-gray-400"   style={{ fontFamily: "work-sans, sans-serif" }}>{service.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Right: Image & Buttons */}
          <div className="lg:sticky lg:top-8 self-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                ref={detailsRef}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="bg-zinc-900/60 rounded-3xl p-8 md:p-12 border border-violet-700/50 backdrop-blur-md relative overflow-hidden"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent"   style={{ fontFamily: "Outfit, sans-serif" }}>
                  {activeServiceData.title}
                </h2>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed"   style={{ fontFamily: "work-sans, sans-serif" }}>
                  {activeServiceData.description}
                </p>

                {/* ✅ One Image per Service */}
                <motion.img
                  key={activeServiceData.image}
                  src={activeServiceData.image}
                  alt={activeServiceData.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-120 object-cover rounded-2xl shadow-lg mb-8 hover:scale-[1.02] transition-transform duration-500"
                />

               
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vrsol;
