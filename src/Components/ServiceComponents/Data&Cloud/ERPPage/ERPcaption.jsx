import React, { useEffect, useRef, useState } from "react";
import { Wrench, Settings, SlidersHorizontal, Database } from 'lucide-react';

const ERPFailureReasons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const reasons = [
    {
      icon: <Wrench className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Mounting implementation costs",
      description:
        "Filled with hidden costs, business spending on traditional ERP systems often don't end with the purchase of the software. They instead begin here and grow with your customization, automation and maintenance needs, burning a massive hole in your pocket.",
    },
    {
      icon: <Settings className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Internal bias",
      description:
        "An understated, but high-impact, contributor to most ERP software implementation failures is the internal bias ERP vendors and system integrators have towards particular ERP solutions. Customers, as a result, end up with ERP software that isn't cut out to address their unique challenges, without expensive customizations and long implementation cycles.",
    },
    {
      icon: <SlidersHorizontal className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Complex customizations",
      description:
        "According to FinancesOnline, the average time taken to get an ERP customized to suit your business and operations landscape has increased from 16.9 to 17.4 months. This stems from customizations needed for traditional ERP systems, which often requires technical expertise and niche skillsets.",
    },
    {
      icon: <Database className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Poor data quality",
      description:
        "Businesses usually underestimate the criticality and quality of the data migrated to their ERP software from old systems. Their assumption that ERP systems will improve the quality of information is often misplaced. Any ERP software is only as good as the data that gets pushed to it.",
    },
  ];

  // Initialize parallax effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Parallax scroll effect - only for desktop
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      // Only apply parallax on desktop screens (lg and above)
      if (window.innerWidth < 1024) return;

      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // Only apply parallax when section is in viewport
      if (sectionTop < windowHeight && sectionTop > -sectionHeight) {
        const scrollProgress = 1 - (sectionTop / windowHeight);
        
        cardsRef.current.forEach((card, index) => {
          if (card) {
            // Staggered parallax effect based on card position
            const speed = 0.1 + (index * 0.05); // Different speeds for each card
            const yOffset = scrollProgress * 100 * speed;
            
            // Apply parallax transform
            card.style.transform = `translateY(${yOffset}px)`;
            
            // Add subtle scale effect based on scroll
            const scale = 1 + (scrollProgress * 0.05);
            card.style.transform += ` scale(${scale})`;
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Add card to refs array
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative isolate w-full py-60 overflow-hidden"
    >
      {/* Subtle gradient overlay with soft glow - same as HeroSection */}
      <div className="absolute inset-0  pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-font-semibold leading-[1.05] tracking-tight bg-gradient-to-r from-white via-[#dfe1ff] to-[#a9afff] bg-clip-text text-transparent mb-6" style={{ fontFamily: "Outfit, sans-serif" }}>
            Why Traditional ERP Projects Often Fail?
          </h3>
          <p className="text-[#c7cbff] text-lg leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: "work-sans, sans-serif" }}>
            Understanding the common pitfalls in ERP implementation
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pt-16 pb-24">
          {/* Main Horizontal Connecting Line - Only show on laptop and big screens (lg and above) */}
          <div className={`absolute top-1/2 left-8 right-8 transform -translate-y-1/2 h-0.5 bg-[#7C86FF]/30 hidden lg:block transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}></div>

          {/* The Reasons Wrapper */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 xl:gap-12">
            {reasons.map((reason, index) => (
              <div 
                key={index} 
                className={`relative ${index % 2 === 0 ? 'lg:mb-16' : 'lg:mt-16'}`}
              >
                {/* The Reason Card with Parallax Effect */}
                <div 
                  ref={addToRefs}
                  className={`
                    rounded-2xl p-6 h-full flex flex-col justify-start
                    relative z-10 transition-all duration-500 
                    backdrop-blur-md border border-[#7C86FF30] bg-[#7C86FF10]
                    shadow-[0_0_20px_rgba(124,134,255,0.15)]
                    hover:shadow-[0_0_40px_rgba(124,134,255,0.35)] 
                    hover:border-[#7C86FF40] hover:scale-105
                    transform-gpu will-change-transform
                    ${isVisible 
                      ? 'opacity-100' 
                      : 'opacity-0 translate-y-10'
                    }
                  `}
                  style={{
                    transitionDelay: `${300 + index * 150}ms`,
                    transform: 'translateY(0px) scale(1)',
                    transition: 'transform 0.1s ease-out, opacity 0.5s ease, border 0.3s ease, box-shadow 0.3s ease'
                  }}
                >
                  {/* Icon Area */}
                  <div className="flex-shrink-0 mb-4">
                    <div className={`bg-[#7C86FF20] p-3 rounded-xl inline-block transition-all duration-700 ${
                      isVisible 
                        ? 'opacity-100 scale-100 rotate-0' 
                        : 'opacity-0 scale-50 rotate-45'
                    }`}>
                      <div className="text-[#7C86FF] transform-gpu">{reason.icon}</div>
                    </div>
                  </div>
                  
                  {/* Content Area */}
                  <div className="flex-1">
                    <h4 className={`text-xl font-semibold mb-3 text-white transition-all duration-700 ${
                      isVisible 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 -translate-x-4'
                    }`} >
                      {reason.title}
                    </h4>
                    <p className={`text-[#c7cbff] text-sm leading-relaxed transition-all duration-700 ${
                      isVisible 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-4'
                    }`} style={{ fontFamily: "work-sans, sans-serif" }}>
                      {reason.description}
                    </p>
                  </div>

                  {/* Subtle background element for depth */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#7C86FF10] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Optional CTA Button - matching HeroSection style */}
      
      </div>
    </section>
  );
};

export default ERPFailureReasons;