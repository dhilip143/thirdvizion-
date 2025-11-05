import React from 'react';
import { motion } from 'framer-motion';

// Component for the animated platform cards - UPDATED TO USE ONLY ORANGE THEME
const AnimatedPlatformCard = ({ title, description, buttonText, icon }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    },
  };

  return (
    <motion.div
      className="relative p-8 md:p-12 text-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden min-h-[25rem] flex flex-col justify-between transition-all duration-500 transform hover:scale-[1.02] border border-[#ff8904]/40 shadow-[0_0_20px_rgba(255,137,4,0.2)] backdrop-blur-md bg-black"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{
        boxShadow: '0 0 30px rgba(255, 137, 4, 0.4)',
        transition: { duration: 0.3 }
      }}
    >
      <div>
        <h3 className="text-4xl md:text-5xl font-inter-tight font-extrabold mb-6 tracking-tight text-[#ff8904]"  style={{ fontFamily: "Outfit, sans-serif" }} >
          {title}
        </h3>
        <p className="mb-8 text-lg text-gray-300 max-w-md leading-relaxed" style={{ fontFamily: "work-sans, sans-serif" }} >
          {description}
        </p>
      </div>
      
      {/* UPDATED BUTTON TO USE ORANGE THEME */}
      <motion.button 
        className="font-inter-tight inline-flex items-center justify-center gap-2 rounded-xl border border-[#ff8904]/40 px-6 py-3 font-medium tracking-wide text-base shadow-lg backdrop-blur-md transition-all duration-500 hover:scale-105 bg-black text-[#ff8904] shadow-[0_0_15px_rgba(255,137,4,0.3)] hover:shadow-[0_0_25px_rgba(255,137,4,0.5)]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
       style={{ fontFamily: "Outfit, sans-serif" }}  >
        {buttonText}
      </motion.button>
      
      {/* Large Icon Background - UPDATED TO ORANGE */}
      <div className="absolute right-4 bottom-4 text-[#ff8904]/10 text-[10rem] md:text-[12rem] pointer-events-none transition-transform duration-500 hover:scale-110">
        {icon}
      </div>
    </motion.div>
  );
};

const AppDevelopmentNewLayout = () => {
  // UPDATED ANIMATION VARIANTS
  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        staggerChildren: 0.2 
      } 
    },
  };
  
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    },
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      
      {/* ======================= UPDATED HERO SECTION ======================= */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 pt-32 pb-20">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8"
        >
          <div className="flex-1">
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-inter-tight font-extrabold tracking-tighter text-[#ff8904] leading-tight"
              variants={itemVariants}
             style={{ fontFamily: "Outfit, sans-serif" }} >
              App Development
            </motion.h1>
            <motion.h2 
              className="text-3xl md:text-5xl lg:text-6xl font-inter-tight font-bold tracking-tight text-white leading-tight flex items-center mt-4"
              variants={itemVariants}
           style={{ fontFamily: "Outfit, sans-serif" }}   >
              For All Platforms 
              <span className="text-[#ff8904] ml-4">◆</span>
            </motion.h2>
          </div>
          
          <motion.p 
            className="flex-1 max-w-lg text-lg text-gray-400 leading-relaxed"
            variants={textVariants}
          style={{ fontFamily: "work-sans, sans-serif" }}  >
            We specialize in making versatile and high-performance apps for <strong className="text-[#ff8904]">iOS and Android</strong> platforms, ensuring a <strong className="text-[#ff8904]">seamless and uniform</strong> experience across all devices.
          </motion.p>
        </motion.div>
      </header>

      {/* ======================= UPDATED PLATFORM CARDS SECTION ======================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          <AnimatedPlatformCard
            title="iOS"
            description="We help you utilize the full potential of the iOS platform, ensuring a seamless transition between iPhones and iPads. We prioritize the elegant and sleek design that defines the iOS ecosystem."
            buttonText="iOS App in Mind?"
            icon={<span role="img" aria-label="Apple logo"></span>}
          />

          <AnimatedPlatformCard
            title="Android"
            description="Our focus is optimizing the user experience for the diverse Android user base, whether they have a low-end or high-range phone. We provide a secure ecosystem following all Google Play Store guidelines."
            buttonText="Craft for Android"
            icon={<span role="img" aria-label="Android logo">🤖</span>}
          />

        </div>
      </section>
    </div>
  );
};

export default AppDevelopmentNewLayout;