import React, { useState } from 'react';
import Lottie from "lottie-react";
import aiBrain from "../../../../assets/Animations/Digitalmedia3d.json";

const App = () => {
  const [showForm, setShowForm] = useState(false);

  // Split text for character-by-character animation
  const splitText = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
        {char}
      </span>
    ));
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-black to-pink-950 text-white mb-0 flex p-2 xs:p-3 sm:p-4 md:p-6 lg:p-8 overflow-hidden relative">
      <div className="absolute inset-0 ">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-black to-fuchsia-800/10 animate-pulse-slow"></div>
        
        {/* Grid pattern with pink glow */}
        <div className="absolute inset-0 z-0">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ec489955" strokeWidth="0.5" />
              </pattern>
              <radialGradient id="glow-gradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ec4899" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#be185d" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            <circle cx="20%" cy="30%" r="200" fill="url(#glow-gradient)" />
            <circle cx="80%" cy="70%" r="150" fill="url(#glow-gradient)" />
          </svg>
        </div>

        {/* Responsive Animated glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 bg-pink-500 rounded-full filter blur-[60px] xs:blur-[70px] sm:blur-[80px] md:blur-[90px] lg:blur-[100px] opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-fuchsia-400 rounded-full filter blur-[70px] xs:blur-[80px] sm:blur-[90px] md:blur-[100px] lg:blur-[110px] xl:blur-[120px] opacity-15 animate-float-slow"></div>
        
        {/* Circuit pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,20 Q40,0 80,20 T160,20" stroke="white" fill="none" strokeWidth="0.5"/>
            <path d="M0,60 Q40,40 80,60 T160,60" stroke="white" fill="none" strokeWidth="0.5"/>
            <path d="M0,100 Q40,80 80,100 T160,100" stroke="white" fill="none" strokeWidth="0.5"/>
            <path d="M0,140 Q40,120 80,140 T160,140" stroke="white" fill="none" strokeWidth="0.5"/>
          </svg>
        </div>
      </div>

      {/* 🔹 Responsive AI Brain Animation */}
      <div className="absolute bottom-[-110px]   lg:-bottom-52 xl:-bottom-47  2xl:-bottom-60 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full md:bottom-[-160px] xl:w-[78vh] md:w-[70vw]  lg:w-[70vw] z-20">
        <Lottie animationData={aiBrain} loop={true} />
      </div>

      {/* Responsive Centered Hero Text with Advanced Animations */}
      <div className="relative z-10 flex flex-col  pt-25 mb-0  pt-4 xs:pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-36 2xl:pt-40 items-center text-center w-full min-h-screen">
        {/* First Line with Typing Animation */}
        <div className="overflow-hidden mb-0 xs:mb-3 sm:mb-4 md:mb-5 lg:mb-6 px-2 xs:px-3 sm:px-4">
          <h1 className="text-3xl  md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-sans font-bold leading-tight xs:leading-tight sm:leading-tight md:leading-tight lg:leading-tight animate-gradient-typing">
            Transform your project
          </h1>
        </div>
        
        {/* Second Line with Character Stagger Animation */}
        <div className="overflow-hidden mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8 px-2 xs:px-3 sm:px-4">
          <h1 className="text-3xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-sans font-light leading-tight xs:leading-tight sm:leading-tight md:leading-tight">
            <span className="animate-stagger-chars">
              {splitText("into AR reality")}
            </span>
          </h1>
        </div>

        {/* Get in Touch Button */}
        {!showForm && (
          <div className="mb-6 xs:mb-7 sm:mb-8 md:mb-10 lg:mb-12 animate-fade-in-up px-2 xs:px-3 sm:px-4">
            <button 
              onClick={() => setShowForm(true)}
              className="bg-gradient-to-r from-pink-600 to-fuchsia-600 hover:from-pink-700 hover:to-fuchsia-700 text-white font-semibold text-sm xs:text-base sm:text-lg md:text-xl py-2 xs:py-3 sm:py-4 px-6 xs:px-8 sm:px-10 md:px-12 lg:px-14 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-pink-500/25 animate-float-glow"
            >
              Get in Touch
            </button>
          </div>
        )}

        {/* Responsive Subtle glow behind text */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-32 xs:w-3/4 xs:h-36 sm:h-40 md:h-48 lg:h-56 xl:h-64 2xl:h-72 bg-pink-500/10 blur-2xl xs:blur-3xl -z-10 animate-glow-move"></div>
      </div>

      {/* Custom styles for animations and effects */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(10px) scale(1.02); }
        }
        
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Advanced Text Animations */
        @keyframes gradientTyping {
          0% {
            width: 0;
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            width: 100%;
            background-position: 0% 50%;
          }
        }
        
        @keyframes charStagger {
          0% {
            transform: translateY(30px) rotateX(-90deg);
            opacity: 0;
            text-shadow: 0 0 10px rgba(236, 72, 214, 0.5);
          }
          100% {
            transform: translateY(0px) rotateX(0deg);
            opacity: 1;
            text-shadow: 0 0 20px rgba(236, 72, 236, 0.8);
          }
        }
        
        @keyframes floatGlow {
          0%, 100% {
            transform: translateY(0px);
            text-shadow: 0 0 10px rgba(232, 121, 249, 0.5);
          }
          50% {
            transform: translateY(-3px);
            text-shadow: 0 0 15px rgba(232, 121, 249, 0.8),
                         0 0 25px rgba(232, 121, 249, 0.4);
          }
        }
        
        @keyframes glowMove {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.1;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.15;
          }
        }
        
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 6s cubic-bezier(2, 0, 0.6, 1) infinite;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
          animation-delay: 1.5s;
          opacity: 0;
        }
        
        /* Text Animation Classes */
        .animate-gradient-typing {
          background: linear-gradient(-45deg, #9e07daff, #be18b6ff, #f472b6, #ec4899, #f9a8d4);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          white-space: nowrap;
          overflow: hidden;
          display: inline-block;
          animation: gradientTyping 3s ease-in-out forwards,
                     gradientShift 4s ease infinite 2s;
        }
        
        .animate-stagger-chars span {
          display: inline-block;
          opacity: 0;
          transform-origin: center;
          animation: charStagger 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          background: linear-gradient(45deg, #fbcfe8, #ec4899, #fbcfe8);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .animate-float-glow {
          animation: floatGlow 3s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-glow-move {
          animation: glowMove 8s ease-in-out infinite;
        }
        
        /* Character delay for staggered effect */
        .animate-stagger-chars span:nth-child(1) { animation-delay: 0.1s; }
        .animate-stagger-chars span:nth-child(2) { animation-delay: 0.15s; }
        .animate-stagger-chars span:nth-child(3) { animation-delay: 0.2s; }
        .animate-stagger-chars span:nth-child(4) { animation-delay: 0.25s; }
        .animate-stagger-chars span:nth-child(5) { animation-delay: 0.3s; }
        .animate-stagger-chars span:nth-child(6) { animation-delay: 0.35s; }
        .animate-stagger-chars span:nth-child(7) { animation-delay: 0.4s; }
        .animate-stagger-chars span:nth-child(8) { animation-delay: 0.45s; }
        .animate-stagger-chars span:nth-child(9) { animation-delay: 0.5s; }
        .animate-stagger-chars span:nth-child(10) { animation-delay: 0.55s; }
        .animate-stagger-chars span:nth-child(11) { animation-delay: 0.6s; }
        .animate-stagger-chars span:nth-child(12) { animation-delay: 0.65s; }
        .animate-stagger-chars span:nth-child(13) { animation-delay: 0.7s; }
        .animate-stagger-chars span:nth-child(14) { animation-delay: 0.75s; }

        /* Responsive text animation adjustments */
        @media (max-width: 480px) {
          .animate-gradient-typing {
            animation: gradientTyping 2.5s ease-in-out forwards,
                       gradientShift 4s ease infinite 2s;
          }
          
          .animate-stagger-chars span {
            animation: charStagger 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }
        }

        @media (max-width: 320px) {
          .animate-gradient-typing {
            animation: gradientTyping 2s ease-in-out forwards,
                       gradientShift 4s ease infinite 2s;
          }
          
          .animate-stagger-chars span {
            animation: charStagger 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }
        }
      `}</style>
    </div>
  );
};

export default App;