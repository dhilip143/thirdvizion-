import React, { useState, useEffect, useRef } from 'react';
import { RefreshCcw, Layout, Code, Zap, Rocket, LifeBuoy } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Data structure for the process steps - UPDATED TO USE ONLY ORANGE THEME
const processSteps = [
  {
    id: 1,
    title: "Brainstorming and Strategy",
    description: "In the beginning, we explore the market and understand the trends in the target area, understand your requirements and build a strategy around these aspects.",
    icon: RefreshCcw,
    color: 'border-[#ff8904] text-[#ff8904]',
    gradient: 'from-[#ff8904] to-[#ff7300]',
  },
  {
    id: 2,
    title: "Planning and Designing",
    description: "These two processes go hand in hand as we outline milestones, choose platforms and design user-friendly intuitive architecture while concentrating on its aesthetic appeal.",
    icon: Layout,
    color: 'border-[#ff8904] text-[#ff8904]',
    gradient: 'from-[#ff8904] to-[#ff7300]',
  },
  {
    id: 3,
    title: "Developing the Ecosystem",
    description: "This is the most exciting phase as we present a library of tools for you to select from that will define the front-end and back-end coding along with the various functionalities as we integrate APIs.",
    icon: Code,
    color: 'border-[#ff8904] text-[#ff8904]',
    gradient: 'from-[#ff8904] to-[#ff7300]',
  },
  {
    id: 4,
    title: "Pre-Launch Testing",
    description: "This is the stage where we run all the processes to find any errors in the source code, test app stability, and potential security threats and give it to a small group of users for UI/UX testing.",
    icon: Zap,
    color: 'border-[#ff8904] text-[#ff8904]',
    gradient: 'from-[#ff8904] to-[#ff7300]',
  },
  {
    id: 5,
    title: "Launching and Marketing",
    description: "While we submit the app to the app stores and manage the launch process our marketing team starts its campaigns to generate the interest of the potential users.",
    icon: Rocket,
    color: 'border-[#ff8904] text-[#ff8904]',
    gradient: 'from-[#ff8904] to-[#ff7300]',
  },
  {
    id: 6,
    title: "Support and Maintenance",
    description: "We keep a close eye on the performance of your app and keep updating it with bug fixes and incorporating the feedback obtained from the user experience data.",
    icon: LifeBuoy,
    color: 'border-[#ff8904] text-[#ff8904]',
    gradient: 'from-[#ff8904] to-[#ff7300]',
  },
];

// Floating particles component
const FloatingParticles = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    const particles = particlesRef.current;
    if (!particles) return;

    // Create floating particles
    for (let i = 0; i < 15; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full bg-[#ff8904]/20';
      particle.style.width = `${Math.random() * 6 + 2}px`;
      particle.style.height = particle.style.width;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particles.appendChild(particle);

      // Animate particle
      gsap.to(particle, {
        y: Math.random() * 100 - 50,
        x: Math.random() * 100 - 50,
        duration: Math.random() * 3 + 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  }, []);

  return <div ref={particlesRef} className="absolute inset-0 overflow-hidden" />;
};

// Component for a single process card
const ProcessCard = ({ step, index }) => {
  const cardRef = useRef(null);
  const IconComponent = step.icon;

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.fromTo(card,
      {
        opacity: 0,
        y: 60,
        rotationY: 15,
      },
      {
        opacity: 1,
        y: 0,
        rotationY: 0,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Hover animation
    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -10,
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative bg-white p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 border-t-4 ${step.color} overflow-hidden group`}
    >
      {/* Animated gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <span className={`text-4xl font-black mr-4 text-[#ff8904] drop-shadow-sm`}>
            {step.id}
          </span>
          <div className="relative">
            <IconComponent className={`w-10 h-10 mr-3 text-[#ff8904] drop-shadow-sm`} />
            <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300`} />
          </div>
          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
        </div>
        <p className="text-gray-700 leading-relaxed">{step.description}</p>
      </div>
    </div>
  );
};

// Main application component
const App = () => {
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const mainTitleRef = useRef(null);

  // Initialize all animations
  useEffect(() => {
    // Header animations
    const tl = gsap.timeline();
    
    tl.fromTo(headerRef.current,
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
    )
    .fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "back.out(1.7)" }, "-=0.5"
    )
    .fromTo(subtitleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.3"
    )
    .fromTo(buttonRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }, "-=0.2"
    );

    // Main title animation
    gsap.fromTo(mainTitleRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: mainTitleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Continuous header background animation - UPDATED TO ORANGE THEME
    gsap.to(headerRef.current, {
      backgroundPosition: '0% 50%',
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, []);

  return (
    <div className=" min-h-screen overflow-x-hidden">
      
      {/* Enhanced Header with Parallax and Animated Gradient - UPDATED TO ORANGE THEME */}
      <header 
        ref={headerRef}
        className="relative sticky top-0 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 shadow-2xl z-10 overflow-hidden"
        style={{
          
          backgroundSize: '400% 400%',
        }}
      >
        <FloatingParticles />
        
        {/* Animated overlay */}
        <div className="absolute inset-0 bg-black/10" />
        
        <div className="relative max-w-4xl mx-auto text-center z-20">
          <h1 
            ref={titleRef}
            className="text-5xl font-black text-white sm:text-6xl mb-6 drop-shadow-2xl"
          >
            How We Build Your <span className="bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">Mobile App</span>
          </h1>
          <p 
            ref={subtitleRef}
            className="text-xl text-white/90 leading-relaxed font-medium mb-8 drop-shadow-lg"
          >
            Mobile App Development with us is like sculpting dreams into code. We blend your concepts, infuse technological magic, and voila – an app that's your digital masterpiece, poised to dazzle the mobile world!
          </p>
          <button 
            ref={buttonRef}
            className="group relative px-10 py-4 border-2 border-white text-lg font-bold rounded-full text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-[#ff8904] transition-all duration-500 shadow-2xl overflow-hidden"
          >
            <span className="relative z-10">Work With Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </button>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </header>

      {/* Main Content: Development Process Section */}
      <main className="relative z-20 bg-transparent pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 
            ref={mainTitleRef}
            className="text-4xl font-black text-center text-gray-900 mb-16"
          >
            Our <span className="bg-gradient-to-r from-[#ff7300] to-[#ff8904] bg-clip-text text-transparent">6-Step Digital Mastery</span> Process
          </h2>

          {/* Process Grid Container with Staggered Animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <ProcessCard key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;