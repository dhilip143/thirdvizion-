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
      className="text-white py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 min-h-screen font-inter overflow-hidden"
    >
      <script src="https://cdn.tailwindcss.com"></script>
      
      <div className="max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
        {/* Header Section with Parallax */}
        <div 
          className={`text-center mb-12 sm:mb-14 lg:mb-16 xl:mb-20 transition-all duration-1000 transform ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold text-[#7C86FF] mb-4 sm:mb-6 leading-tight">
            Why Traditional ERP Projects Often Fail?
          </h3>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Understanding the common pitfalls in ERP implementation
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pt-8 sm:pt-10 lg:pt-12 xl:pt-16 pb-16 sm:pb-20 lg:pb-24 xl:pb-28">
          {/* Main Horizontal Connecting Line - Only show on laptop and big screens (lg and above) */}
          <div className={`absolute top-1/2 left-4 right-4 lg:left-8 lg:right-8 transform -translate-y-1/2 h-0.5 bg-[#7C86FF]/30 hidden lg:block transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}></div>

          {/* The Reasons Wrapper */}
          <div 
            className="
              relative
              grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 xl:gap-12
            "
          >
            {reasons.map((reason, index) => (
              <div 
                key={index} 
                className={`
                  relative
                  md:flex md:flex-col
                  ${index % 2 === 0 ? 'lg:mb-12 xl:mb-16' : 'lg:mt-12 xl:mt-16'}
                `}
              >
                {/* Connector Dot on horizontal line - Only for laptop and big screens */}
                
                 

                {/* The Reason Card with Parallax Effect */}
                <div 
                  ref={addToRefs}
                  className={`
                    bg-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 xl:p-7 
                    h-full flex flex-col justify-start
                    relative z-10 transition-all duration-500 border border-gray-700/50 
                    hover:border-[#7C86FF]/50 hover:shadow-xl hover:shadow-[#7C86FF]/10
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
                  <div className="flex-shrink-0 mb-3 sm:mb-4">
                    <div className={`bg-[#7C86FF]/10 p-2 sm:p-3 rounded-lg sm:rounded-xl inline-block transition-all duration-700 ${
                      isVisible 
                        ? 'opacity-100 scale-100 rotate-0' 
                        : 'opacity-0 scale-50 rotate-45'
                    }`}>
                      <div className="text-[#7C86FF] transform-gpu">{reason.icon}</div>
                    </div>
                  </div>
                  
                  {/* Content Area */}
                  <div className="flex-1">
                    <h4 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-white transition-all duration-700 ${
                      isVisible 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 -translate-x-4'
                    }`}>
                      {reason.title}
                    </h4>
                    <p className={`text-sm sm:text-base text-gray-300 leading-relaxed transition-all duration-700 ${
                      isVisible 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-4'
                    }`}>
                      {reason.description}
                    </p>
                  </div>

                  {/* Subtle background element for depth */}
                  <div 
                    className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#7C86FF]/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default ERPFailureReasons;