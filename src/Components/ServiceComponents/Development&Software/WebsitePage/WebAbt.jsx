import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// === Inline SVG Icons (Enhanced with animation-ready props) ===

const IconCommunication = ({ className = "w-12 h-12" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="6" r="3" />
    <path d="M12 18h6M6 6h6" />
    <path d="M18 9l-2-2m2 2l-2 2M16 7l2 2m-2 2l2-2" />
  </svg>
);

const IconDelivery = ({ className = "w-12 h-12" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13l-4 4 1.5 1.5L13 10m-3 3l-2-2M13 10l2 2m-2 2l2-2" />
    <path d="M13 10l5-5 4 4-5 5-4-4z" />
    <path d="M15 9l3-3M2 22l20-20" />
  </svg>
);

const IconQuality = ({ className = "w-12 h-12" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="15" rx="2" ry="2" />
    <line x1="12" y1="21" x2="12" y2="18" />
    <line x1="16" y1="21" x2="8" y2="21" />
    <path d="M8 9l2 2 4-4" />
  </svg>
);

const IconSecurity = ({ className = "w-12 h-12" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <rect x="10" y="9" width="4" height="6" rx="1" ry="1" />
    <path d="M12 9V7a2 2 0 0 0-4 0v2" />
  </svg>
);

const IconDesign = ({ className = "w-12 h-12" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="15" rx="2" ry="2" />
    <path d="M12 21h0" />
    <path d="M16 21l-4-3-4 3" />
    <path d="M12 7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
    <path d="M12 11v-2" />
  </svg>
);

const IconScalability = ({ className = "w-12 h-12" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.4 1.4 0 0 0 0-2.8L16.2 12l.3-.4a9.4 9.4 0 0 0 1-2.6 1.4 1.4 0 0 0-1.4-1.6l-2.4-.4-.3-2.6a1.4 1.4 0 0 0-2.8 0L12 4.2l-2.6-.3a1.4 1.4 0 0 0-1.6 1.4 9.4 9.4 0 0 0-2.6 1l-.4.3-2.8-.2a1.4 1.4 0 0 0 0 2.8l2.6.3-.3 2.6a9.4 9.4 0 0 0 1 2.6 1.4 1.4 0 0 0 1.6 1.4l2.4.4.3 2.6a1.4 1.4 0 0 0 2.8 0L12 19.8l2.6.3a1.4 1.4 0 0 0 1.6-1.4 9.4 9.4 0 0 0 2.6-1l.4-.3 2.8.2z" />
  </svg>
);

const features = [
  {
    icon: IconCommunication,
    title: "Transparent Communication",
    description: "We listen, discuss, and keep you informed, every step of the way. From start to finish, ensuring clarity, alignment, and trust throughout your entire project journey.",
  },
  {
    icon: IconDelivery,
    title: "Timely Delivery",
    description: "Your projects will be ready ahead of schedule. Your business can't wait, and neither do we. We value deadlines and prioritize efficiency with precision and accountability.",
  },
  {
    icon: IconQuality,
    title: "Quality Assurance",
    description: "Zero compromises on your website's performance; every detail is meticulously crafted for a flawless user experience. Every test ensures excellence, reliability, and consistency across platforms and devices.",
  },
  {
    icon: IconSecurity,
    title: "Robust Security",
    description: "Top security measures ensure thorough website protection. Our team excels in effective protection measures. We use modern encryption, threat detection, and continuous monitoring for peace of mind.",
  },
  {
    icon: IconDesign,
    title: "User-Focused Design",
    description: "Perfection in every pixel, every line of code, and every feature to create a lasting impression. Designed thoughtfully to engage, inspire, and convert users effortlessly and efficiently.",
  },
  {
    icon: IconScalability,
    title: "Scalability",
    description: "Start small, go global—our solutions guarantee your seamless website growth every step of the way. We ensure flexible architecture, easy updates, and sustainable performance for future expansion.",
  },
];


// Enhanced Visual Element with GSAP animations
const VisualElement = ({ icon: Icon, isReversed, index }) => {
  const iconRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Container animation
      gsap.fromTo(containerRef.current,
        {
          opacity: 0,
          x: isReversed ? 100 : -100,
          rotationY: isReversed ? -10 : 10,
        },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          }
        }
      );

      // Icon animation with floating effect
      gsap.to(iconRef.current, {
        y: -10,
        rotation: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2
      });

      // Hover animation
      const hoverAnimation = gsap.to(containerRef.current, {
        scale: 1.05,
        boxShadow: "0 0 30px rgba(0, 211, 243, 0.4)",
        duration: 0.3,
        paused: true
      });

      containerRef.current.addEventListener("mouseenter", () => hoverAnimation.play());
      containerRef.current.addEventListener("mouseleave", () => hoverAnimation.reverse());

    }, containerRef);

    return () => ctx.revert();
  }, [isReversed, index]);

  return (
    <div className={`order-1 lg:order-2 ${isReversed ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
      <div className={`w-full flex ${isReversed ? 'lg:justify-start' : 'lg:justify-end'} justify-center`}>
        <div 
          ref={containerRef}
          className="
            p-8 md:p-12 rounded-2xl bg-black/40 border border-[#00d3f3]/30 shadow-2xl cursor-pointer
            relative overflow-hidden group backdrop-blur-md
          "
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00d3f3]/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-[#00d3f3]/40 rounded-full"
                style={{
                  top: `${20 + i * 30}%`,
                  left: `${10 + i * 40}%`,
                  animation: `float ${3 + i}s ease-in-out infinite ${i * 0.5}s`
                }}
              />
            ))}
          </div>

          <div ref={iconRef}>
            <Icon className="w-24 h-24 text-[#00d3f3] stroke-1 relative z-10" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
};

// Floating background elements for parallax effect
const FloatingBackground = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".floating-bg-1", {
        y: -20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(".floating-bg-2", {
        y: 20,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1
      });

      gsap.to(".floating-bg-3", {
        x: 15,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="floating-bg-1 absolute top-1/4 left-10 w-4 h-4 bg-[#00d3f3]/30 rounded-full blur-sm" />
      <div className="floating-bg-2 absolute top-3/4 right-20 w-6 h-6 bg-[#00d3f3]/20 rounded-full blur-sm" />
      <div className="floating-bg-3 absolute bottom-1/3 left-1/4 w-3 h-3 bg-[#00d3f3]/40 rounded-full blur-sm" />
    </>
  );
};

const App = () => {
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const featureRefs = useRef([]);

  // Header animation with GSAP
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main title animation
      gsap.fromTo(titleRef.current?.children || [],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.5
        }
      );

      // Description animation
      gsap.fromTo(descriptionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: 1.2
        }
      );

      // Background elements animation
      gsap.fromTo(".bg-element",
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          stagger: 0.2,
          ease: "back.out(1.7)",
          delay: 0.8
        }
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  // Features text animation with GSAP ScrollTrigger
  useEffect(() => {
    const ctx = gsap.context(() => {
      featureRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const textElements = ref.querySelectorAll('.feature-text-animate');
        
        gsap.fromTo(textElements,
          {
            opacity: 0,
            y: 60,
            rotationX: 45
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 1.2,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: ref,
              start: "top 70%",
              end: "bottom 30%",
              toggleActions: "play none none reverse",
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const titleContent = {
    title: (
      <>
        Why- <span className="text-[#00d3f3]">Choose Us</span>  -to 
        <br className="hidden sm:block" />
        Develop Your Web 
      </>
    ),
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 sm:p-8 font-inter-tight relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <FloatingBackground />
      
      {/* Outer Container */}
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
        
        {/* === Header Section with GSAP Animations === */}
        <div ref={headerRef} className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            ref={titleRef}
            className="mb-8"
            initial={false}
          >
            <h1 className="text-7xl md:text-8xl font-inter-tight font-extrabold tracking-tight text-white leading-tight">
              {React.Children.map(titleContent.title.props.children, (child, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  initial={false}
                >
                  {child}
                </motion.span>
              ))}
            </h1>
          </motion.div>
          
          <motion.p 
            ref={descriptionRef}
            initial={false}
            className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-inter-tight"
          >
            {titleContent.description}
          </motion.p>
        </div>

        {/* === Features with Advanced Animations === */}
        <div className="space-y-20">
          {features.map((feature, index) => {
            const isReversed = index % 2 !== 0;
            
            return (
              <motion.div 
                key={index}
                ref={(el) => (featureRefs.current[index] = el)}
                className={`
                  grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center 
                  ${isReversed ? 'lg:flex-row-reverse' : ''}
                `}
                initial={false}
              >
                {/* Text Content with 3D transform animation */}
                <div 
                  className={`order-2 lg:order-1 feature-text-animate 
                    ${isReversed ? 'lg:col-start-2' : ''}`}
                >
                  <motion.h3 
                    className="text-3xl font-inter-tight font-bold text-[#00d3f3] mb-4 tracking-tight feature-text-animate"
                    initial={false}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                    className="text-xl text-gray-300 leading-relaxed feature-text-animate font-inter-tight"
                    initial={false}
                  >
                    {feature.description}
                  </motion.p>
                </div>
                
                {/* Enhanced Visual Element */}
                <VisualElement 
                  icon={feature.icon} 
                  isReversed={isReversed} 
                  index={index}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;