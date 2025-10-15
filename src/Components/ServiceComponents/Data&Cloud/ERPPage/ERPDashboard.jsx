import { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import DashBoardimage from "/src/assets/HeroImages/HeroHeader.webp";
import Dashhimage from "/src/assets/HeroImages/dashh.png";
import Dashhhimage from "/src/assets/HeroImages/dashhh.png";
import Dashhhhimage from "/src/assets/HeroImages/dashhhh.png";

const IAMDashboard = () => {
  const { scrollYProgress } = useScroll();

  // Smooth parallax scale effect
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.3, 1]);

  // Button animation based on scroll
  const buttonOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const buttonScale = useTransform(scrollYProgress, [0.3, 0.4], [0.8, 1]);

  // Dashboard images and ERP types array
  const dashboardData = [
    { 
      image: DashBoardimage, 
      name: "On-Premise ERP",
      description: "Traditional ERP systems installed on company's own servers and infrastructure."
    },
    { 
      image: Dashhimage, 
      name: "Cloud-Based ERP",
      description: "ERP solutions hosted in the cloud for scalability and remote accessibility."
    },
    { 
      image: Dashhhimage, 
      name: "Hybrid ERP",
      description: "Combines on-premise and cloud solutions for flexible deployment options."
    },
    { 
      image: Dashhhhimage, 
      name: "Industry-Specific ERP",
      description: "Tailored ERP systems designed for specific industry requirements and workflows."
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % dashboardData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? dashboardData.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative h-[120vh] md:h-[180vh]">
      {/* Sticky Container */}
      <div className="sticky top-24 md:top-0 flex flex-col justify-center items-center md:h-screen px-4">
        <motion.div
          style={{ scale }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col justify-center items-center max-w-6xl w-full relative"
        >
          {/* Image + Buttons */}
          <div className="flex justify-center items-center w-full relative">
            {/* Left Arrow Button */}
            <motion.button
              onClick={handlePrev}
              style={{
                opacity: buttonOpacity,
                scale: buttonScale,
              }}
              className="absolute left-0 md:-left-10 lg:-left-16 z-10 bg-white/80 hover:bg-white 
                rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <svg
                className="w-6 h-6 md:w-8 md:h-8 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Image Transition */}
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={dashboardData[currentIndex].image}
                alt={dashboardData[currentIndex].name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="w-full md:w-4/5 lg:w-3/4 rounded-3xl 
                  shadow-[0_0_40px_rgba(253,199,0,0.15)]
                  hover:shadow-[0_0_60px_rgba(253,199,0,0.35)]
                  transition-all duration-500 ease-out"
              />
            </AnimatePresence>

            {/* Right Arrow Button */}
            <motion.button
              onClick={handleNext}
              style={{
                opacity: buttonOpacity,
                scale: buttonScale,
              }}
              className="absolute right-0 md:-right-10 lg:-right-16 z-10 bg-white/80 hover:bg-white 
                rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <svg
                className="w-6 h-6 md:w-8 md:h-8  font-inter-tight text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* ERP Type Text */}
          <div className="mt-6 md:mt-10 text-center font-inter-tight text-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={dashboardData[currentIndex].name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <h2 className="text-5xl font-semibold">
                  {dashboardData[currentIndex].name}
                </h2>
                <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
                  {dashboardData[currentIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IAMDashboard;
