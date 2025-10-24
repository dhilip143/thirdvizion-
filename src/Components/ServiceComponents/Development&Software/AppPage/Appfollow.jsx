import React, { useRef } from 'react';
import { RefreshCcw, Layout, Code, Zap, Rocket, LifeBuoy } from 'lucide-react';
import { motion } from 'framer-motion';

// Data structure for the process steps
const processSteps = [
  {
    id: ">",
    title: "Brainstorming and Strategy",
    description: "In the beginning, we explore the market and understand the trends in the target area, understand your requirements and build a strategy around these aspects.",
    icon: RefreshCcw,
  },
  {
    id: ">",
    title: "Planning and Designing",
    description: "These two processes go hand in hand as we outline milestones, choose platforms and design user-friendly intuitive architecture while concentrating on its aesthetic appeal.",
    icon: Layout,
  },
  {
    id: ">",
    title: "Developing the Ecosystem",
    description: "This is the most exciting phase as we present a library of tools for you to select from that will define the front-end and back-end coding along with the various functionalities as we integrate APIs.",
    icon: Code,
  },
  {
    id: ">",
    title: "Pre-Launch Testing",
    description: "This is the stage where we run all the processes to find any errors in the source code, test app stability, and potential security threats and give it to a small group of users for UI/UX testing.",
    icon: Zap,
  },
  {
   id: ">",
    title: "Launching and Marketing",
    description: "While we submit the app to the app stores and manage the launch process our marketing team starts its campaigns to generate the interest of the potential users.",
    icon: Rocket,
  },
  {
   id: ">",
    title: "Support and Maintenance",
    description: "We keep a close eye on the performance of your app and keep updating it with bug fixes and incorporating the feedback obtained from the user experience data.",
    icon: LifeBuoy,
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2
    }
  }
};

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
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: "0 0 30px rgba(255, 137, 4, 0.4)",
    transition: { duration: 0.3 }
  }
};

// Component for a single process card
const ProcessCard = ({ step }) => {
  const IconComponent = step.icon;

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="relative p-8 rounded-2xl border border-[#ff8904]/20 bg-black/40 backdrop-blur-2xl min-h-[280px] flex flex-col transition-all duration-500 hover:border-[#ff8904]/40 hover:shadow-[0_0_25px_rgba(255,137,4,0.3)] group"
      style={{
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)'
      }}
    >
      {/* Glass morphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff8904]/10 via-transparent to-[#ff7300]/5 opacity-50 group-hover:opacity-70 transition-opacity duration-500 rounded-2xl" />
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Header with number and icon */}
        <div className="flex items-center mb-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#ff8904]/20 flex items-center justify-center border border-[#ff8904]/30 group-hover:bg-[#ff8904]/30 group-hover:border-[#ff8904]/50 transition-all duration-500">
              <span className="text-lg font-bold text-[#ff8904]">
                {step.id}
              </span>
            </div>
            <div className="w-12 h-0.5 bg-[#ff8904]/30 group-hover:bg-[#ff8904]/60 transition-colors duration-500" />
            <IconComponent className="w-8 h-8 text-[#ff8904] group-hover:scale-110 transition-transform duration-500" />
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-inter-tight font-bold text-[#ff8904] mb-4 tracking-tight group-hover:drop-shadow-[0_0_8px_rgba(255,137,4,0.3)] transition-all duration-500">
          {step.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-300 leading-relaxed text-lg flex-1 group-hover:text-gray-200 transition-colors duration-500">
          {step.description}
        </p>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-[#ff8904]/40 group-hover:border-[#ff8904] transition-colors duration-500" />
      <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-[#ff8904]/40 group-hover:border-[#ff8904] transition-colors duration-500" />
    </motion.div>
  );
};

// Main component
const App = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      
      {/* Header Section */}
      <motion.header 
        className="relative py-32 px-4 sm:px-6 md:px-10 lg:px-16 border-b border-[#ff8904]/20"
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #1a0f00 50%, #000000 100%)',
        }}
      >
        {/* Background elements */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#ff8904]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff7300]/5 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="relative max-w-7xl mt-50 mb-20 mx-auto text-center z-10">
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-inter-tight font-extrabold tracking-tighter text-[#ff8904] leading-tight mb-6"
          >
            How We Build
          </motion.h1>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-inter-tight font-bold tracking-tight text-white leading-tight mb-8"
          >
            Your Mobile 
            <span className="text-[#ff8904] ml-4">App</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 leading-relaxed font-medium mb-12 max-w-3xl mx-auto"
          >
            Mobile App Development with us is like sculpting dreams into code. We blend your concepts, infuse technological magic, and voila – an app that's your digital masterpiece, poised to dazzle the mobile world!
          </motion.p>
          
          <motion.button 
            variants={itemVariants}
            className="font-inter-tight inline-flex items-center justify-center gap-2 rounded-xl border border-[#ff8904]/40 px-8 py-4 font-medium tracking-wide text-lg shadow-lg backdrop-blur-md transition-all duration-500 hover:scale-105 bg-black text-[#ff8904] shadow-[0_0_15px_rgba(255,137,4,0.3)] hover:shadow-[0_0_25px_rgba(255,137,4,0.5)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Work With Us
          </motion.button>
        </div>
      </motion.header>

      {/* Process Section */}
      <main className="relative bg-black py-20 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-inter-tight font-extrabold text-center text-[#ff8904] mb-20 tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our <span className="text-white">6-Step Digital Mastery</span> Process
          </motion.h2>

          {/* Process Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {processSteps.map((step) => (
              <ProcessCard key={step.id} step={step} />
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default App;