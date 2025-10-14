import React, { useEffect, useRef, useState } from "react";
import { Wrench, Settings, SlidersHorizontal, Database } from 'lucide-react';

const ERPFailureReasons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const reasons = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Mounting implementation costs",
      description:
        "Filled with hidden costs, business spending on traditional ERP systems often don't end with the purchase of the software. They instead begin here and grow with your customization, automation and maintenance needs, burning a massive hole in your pocket.",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Internal bias",
      description:
        "An understated, but high-impact, contributor to most ERP software implementation failures is the internal bias ERP vendors and system integrators have towards particular ERP solutions. Customers, as a result, end up with ERP software that isn't cut out to address their unique challenges, without expensive customizations and long implementation cycles.",
    },
    {
      icon: <SlidersHorizontal className="w-8 h-8" />,
      title: "Complex customizations",
      description:
        "According to FinancesOnline, the average time taken to get an ERP customized to suit your business and operations landscape has increased from 16.9 to 17.4 months. This stems from customizations needed for traditional ERP systems, which often requires technical expertise and niche skillsets.",
    },
    {
      icon: <Database className="w-8 h-8" />,
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
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Parallax scroll effect
    const handleScroll = () => {
      if (!sectionRef.current) return;

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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
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
      className="text-white py-20 px-4 min-h-screen font-inter overflow-hidden"
    >
      <script src="https://cdn.tailwindcss.com"></script>
      
      <div className="max-w-7xl mx-auto">
        {/* Header Section with Parallax */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-[50px] font-bold text-[#7C86FF] mb-6">
            Why Traditional ERP Projects Often Fail?
          </h3>
        </div>

        {/* Horizontal Timeline Container */}
        <div className="relative pt-10 pb-20 md:py-16">
          {/* Main Horizontal Connecting Line */}
          <div className={`absolute top-1/2 left-0 right-0 transform -translate-y-1/2 h-0.5 bg-[#7C86FF]/30 hidden md:block transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}></div>

          {/* The Reasons Wrapper */}
          <div 
            className="
              flex overflow-x-auto snap-x snap-mandatory space-x-8 md:space-x-0 pb-4 
              md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-10 md:overflow-x-visible
            "
          >
            {reasons.map((reason, index) => (
              <div 
                key={index} 
                className="
                  flex-shrink-0 w-[85vw] max-w-sm snap-center 
                  md:w-full md:flex-shrink relative
                "
              >
                {/* Connector Dot on the line */}
                <div className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block z-20 transition-all duration-700 delay-${500 + index * 200} ${
                  isVisible 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-0'
                }`}>
                </div>

                {/* The Reason Card with Parallax Effect */}
                <div 
                  ref={addToRefs}
                  className={`
                    bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 h-full flex flex-col justify-start
                    relative z-10 transition-all duration-500 border border-gray-700/50 
                    hover:border-[#7C86FF]/50 hover:shadow-xl hover:shadow-[#7C86FF]/10
                    transform-gpu will-change-transform
                    ${index % 2 === 0 ? 'md:mb-12' : 'md:mt-12'}
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
                  {/* Icon Area with Parallax */}
                  <div className="flex-shrink-0 mb-4">
                    <div className={`bg-[#7C86FF]/10 p-3 rounded-xl inline-block transition-all duration-700 delay-${400 + index * 150} ${
                      isVisible 
                        ? 'opacity-100 scale-100 rotate-0' 
                        : 'opacity-0 scale-50 rotate-45'
                    }`}>
                      <div className="text-[#7C86FF] transform-gpu">{reason.icon}</div>
                    </div>
                  </div>
                  
                  {/* Content Area */}
                  <div className="flex-1">
                    <h4 className={`text-xl font-bold mb-3 text-white transition-all duration-700 delay-${500 + index * 150} ${
                      isVisible 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 -translate-x-4'
                    }`}>
                      {reason.title}
                    </h4>
                    <p className={`text-gray-300 leading-relaxed text-base transition-all duration-700 delay-${600 + index * 150} ${
                      isVisible 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-4'
                    }`}>
                      {reason.description}
                    </p>
                  </div>

                  {/* Subtle background element for depth */}
                  <div 
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#7C86FF]/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10"
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