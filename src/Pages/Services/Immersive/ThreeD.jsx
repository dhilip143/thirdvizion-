import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

const DigitalArtServices = () => {
  const [activeService, setActiveService] = useState('digitalIllustration');
  const [isVisible, setIsVisible] = useState(false);
  
  // Refs for GSAP animations
  const headerRef = useRef(null);
  const serviceCardsRef = useRef([]);
  const detailsRef = useRef(null);
  const statsRef = useRef([]);
  const backgroundElementsRef = useRef([]);
  const containerRef = useRef(null);
  const gridPatternRef = useRef(null);
  const floatingParticlesRef = useRef([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Create floating particles
    const createParticles = () => {
      const container = containerRef.current;
      if (!container) return;
      
      // Remove existing particles
      floatingParticlesRef.current.forEach(particle => {
        if (particle && particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
      floatingParticlesRef.current = [];
      
      // Create new particles
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute rounded-full';
        
        // Random properties
        const size = Math.random() * 10 + 2;
        const colors = ['bg-fuchsia-500', 'bg-violet-400', 'bg-purple-400'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.classList.add(color);
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.opacity = Math.random() * 0.4 + 0.1;
        
        container.appendChild(particle);
        floatingParticlesRef.current.push(particle);
        
        // Animate particle
        gsap.to(particle, {
          y: Math.random() * 100 - 50,
          x: Math.random() * 80 - 40,
          duration: Math.random() * 10 + 10,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }
    };

    // Animation for header elements with continuous pulsing
    gsap.fromTo(headerRef.current.children, 
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "elastic.out(1, 0.5)",
        onComplete: () => {
          // Continuous pulsing animation for the header
          gsap.to(headerRef.current.querySelector('h1'), {
            backgroundPosition: '100% 50%',
            duration: 5,
            repeat: -1,
            ease: "none",
            modifiers: {
              backgroundPosition: value => `${value}% 50%`
            }
          });
        }
      }
    );

    // Animation for service cards with continuous hover effects
    serviceCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.2,
            onComplete: () => {
              // Continuous subtle glow animation
              if (activeService === services[index].id) {
                gsap.to(card, {
                  boxShadow: '0 0 30px rgba(217, 70, 239, 0.3)',
                  duration: 2,
                  repeat: -1,
                  yoyo: true,
                  ease: "sine.inOut"
                });
              }
            }
          }
        );
      }
    });

    // Animation for stats with continuous counting
    statsRef.current.forEach((stat, index) => {
      if (stat) {
        // Animate counting up for numbers
        if (stat.textContent.includes('+') || stat.textContent.includes('%')) {
          const value = stat.textContent;
          const num = parseInt(value.replace(/[^0-9]/g, ''));
          
          gsap.fromTo(stat,
            { textContent: "0" },
            {
              textContent: value,
              duration: 3,
              delay: index * 0.3,
              snap: { textContent: 1 },
              onStart: () => {
                stat.textContent = "0";
              },
              onComplete: () => {
                // Continuous subtle scaling animation
                gsap.to(stat, {
                  scale: 1.05,
                  duration: 1.5,
                  repeat: -1,
                  yoyo: true,
                  ease: "sine.inOut"
                });
              }
            }
          );
        }
      }
    });

    // Continuous floating animation for background elements
    backgroundElementsRef.current.forEach((element, index) => {
      if (element) {
        gsap.to(element, {
          y: index % 2 === 0 ? 40 : -40,
          x: index % 3 === 0 ? 20 : -20,
          duration: 8 + index * 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }
    });

    // Continuous grid pattern animation
    if (gridPatternRef.current) {
      gsap.to(gridPatternRef.current, {
        backgroundPosition: '4rem 4rem',
        duration: 20,
        repeat: -1,
        ease: "none"
      });
    }

    // Create floating particles
    createParticles();

    // Reinitialize animations when window resizes
    const handleResize = () => {
      createParticles();
    };

    window.addEventListener('resize', handleResize);

    // Clean up on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      floatingParticlesRef.current.forEach(particle => {
        if (particle && particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, []);

  // Animation for service details when active service changes
  useEffect(() => {
    if (detailsRef.current) {
      // Reset all card glows
      serviceCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.to(card, {
            boxShadow: '0 0 0px rgba(217, 70, 239, 0)',
            duration: 0.5
          });
        }
      });

      // Apply glow to active card
      const activeIndex = services.findIndex(service => service.id === activeService);
      if (serviceCardsRef.current[activeIndex]) {
        gsap.to(serviceCardsRef.current[activeIndex], {
          boxShadow: '0 0 30px rgba(217, 70, 239, 0.3)',
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }

      // Animate details panel
      gsap.fromTo(detailsRef.current,
        { opacity: 0, scale: 0.95, y: 20 },
        { 
          opacity: 1, 
          scale: 1, 
          y: 0, 
          duration: 0.7, 
          ease: "back.out(1.7)" 
        }
      );

      // Animate features list
      gsap.fromTo(detailsRef.current.querySelectorAll('li'),
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out"
        }
      );
    }
  }, [activeService]);

  // Handle service card click with animation
  const handleServiceClick = (serviceId) => {
    // Find the clicked card
    const clickedCardIndex = services.findIndex(service => service.id === serviceId);
    const clickedCard = serviceCardsRef.current[clickedCardIndex];
    
    // Animate the clicked card
    if (clickedCard) {
      gsap.to(clickedCard, {
        scale: 0.97,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
        onComplete: () => {
          setActiveService(serviceId);
        }
      });
    } else {
      setActiveService(serviceId);
    }
  };

  const services = [
    {
      id: 'digitalIllustration',
      title: 'Digital Illustration',
      description: 'We create stunning digital illustrations for books, websites, marketing materials, and more. Our artists bring your ideas to life with unique styles and vibrant colors.',
      visualIcon: '🎨',
      features: ['Custom character design', 'Background & environment art', 'Storyboarding and concept art', 'High-resolution digital files'],
      color: 'from-fuchsia-500 to-pink-500'
    },
    {
      id: 'graphicDesign',
      title: 'Graphic Design',
      description: 'From logos and branding to posters and social media assets, our graphic design services ensure your brand looks professional and stands out from the crowd.',
      visualIcon: '✒️',
      features: ['Brand identity packages', 'Marketing & advertising design', 'UI/UX design for apps', 'Print and digital layouts'],
      color: 'from-violet-500 to-purple-500'
    },
    {
      id: 'motionGraphics',
      title: 'Motion Graphics',
      description: 'Add dynamic movement to your visuals. We produce captivating motion graphics for video explainers, intros, and animated logos that grab attention and tell a story.',
      visualIcon: '🎬',
      features: ['2D motion graphics', 'Animated logos & typography', 'Explainer video production', 'Visual effects for video'],
      color: 'from-purple-500 to-fuchsia-500'
    },
  ];

  const activeData = services.find(s => s.id === activeService);

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans relative overflow-hidden" ref={containerRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          ref={el => backgroundElementsRef.current[0] = el}
          className="absolute -top-40 -left-40 w-80 h-80 bg-fuchsia-500 rounded-full mix-blend-soft-light filter blur-xl opacity-30"
        ></div>
        <div 
          ref={el => backgroundElementsRef.current[1] = el}
          className="absolute top-1/4 -right-20 w-96 h-96 bg-violet-500 rounded-full mix-blend-soft-light filter blur-xl opacity-20"
        ></div>
        <div 
          ref={el => backgroundElementsRef.current[2] = el}
          className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-soft-light filter blur-xl opacity-30"
        ></div>
        
        {/* Grid pattern overlay */}
        <div 
          ref={gridPatternRef}
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"
        ></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 mb-8">
            <span className="text-fuchsia-400 mr-2">✦</span>
            <span className="text-sm font-medium text-gray-300">Creative Services</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-[length:200%_100%]">Digital Art</span>
            <span className="block text-gray-300 mt-2">& Illustration Studio</span>
          </h1>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-gray-400 mb-6">
              Where creativity meets technology. We craft beautiful and compelling visual stories that resonate with your audience.
            </p>
            
            <motion.div 
              className="h-1 w-24 bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-full mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            ></motion.div>
          </div>
        </div>

        {/* Service Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              ref={el => serviceCardsRef.current[index] = el}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className={`relative overflow-hidden rounded-2xl p-6 cursor-pointer group
                ${activeService === service.id 
                  ? 'bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700' 
                  : 'bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700'
                }`}
              onClick={() => handleServiceClick(service.id)}
            >
              {/* Background gradient accent */}
              <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${service.color}`}></div>
              
              <div className="relative z-10">
                <div className={`text-4xl mb-4 transition-transform duration-300 group-hover:scale-110 ${activeService === service.id ? 'scale-110' : ''}`}>
                  {service.visualIcon}
                </div>
                
                <h3 className={`text-xl font-semibold mb-2 ${activeService === service.id ? 'text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-violet-400' : 'text-gray-300'}`}>
                  {service.title}
                </h3>
                
                <p className="text-sm text-gray-400 line-clamp-2">
                  {service.description}
                </p>
                
                <div className="mt-4 flex items-center text-sm text-fuchsia-400">
                  <span>View details</span>
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Active Service Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            ref={detailsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mb-20"
          >
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Visual Representation */}
              <div className="lg:w-2/5">
                <div className="relative rounded-3xl overflow-hidden aspect-square bg-zinc-900 border border-zinc-800 shadow-xl shadow-purple-500/5">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      className="text-8xl"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {activeData.visualIcon}
                    </motion.div>
                  </div>
                  
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/70"></div>
                  <div className={`absolute inset-0 bg-gradient-to-t ${activeData.color} opacity-5`}></div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-fuchsia-500/10 backdrop-blur-sm border border-fuchsia-500/20"></div>
                  <div className="absolute bottom-8 right-8 w-16 h-16 rounded-full bg-violet-500/10 backdrop-blur-sm border border-violet-500/20"></div>
                </div>
              </div>
              
              {/* Content */}
              <div className="lg:w-3/5">
                <div className="bg-zinc-900/50 backdrop-blur-md rounded-3xl border border-zinc-800 p-8 md:p-10 h-full relative overflow-hidden">
                  {/* Animated background element for details panel */}
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-fuchsia-600 rounded-full mix-blend-soft-light filter blur-xl opacity-20"></div>
                  
                  <div className="flex items-start mb-8 relative z-10">
                    <span className="text-5xl mr-5 text-fuchsia-400">{activeData.visualIcon}</span>
                    <div>
                      <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-violet-400">
                        {activeData.title}
                      </h2>
                      <div className="h-1 w-16 bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-full mt-2"></div>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-300 mb-10 leading-relaxed relative z-10">
                    {activeData.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                    {activeData.features.map((feature, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start p-4 rounded-xl bg-zinc-800/30 border border-zinc-700/30"
                      >
                        <svg className="w-5 h-5 text-fuchsia-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-gray-200">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-20"
        >
          {[
            { value: '12+', label: 'Years of Expertise' },
            { value: '750+', label: 'Projects Completed' },
            { value: '97%', label: 'Client Satisfaction' },
            { value: '25+', label: 'Creative Artists' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 relative overflow-hidden">
              {/* Animated background for stats */}
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/10 to-violet-900/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 
                ref={el => statsRef.current[index] = el}
                className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-violet-400 relative z-10"
              >
                {stat.value}
              </h3>
              <p className="text-sm text-gray-400 mt-2 relative z-10">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-3xl p-10 md:p-16 border border-zinc-700/30 relative overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-fuchsia-500/10 rounded-full mix-blend-soft-light filter blur-lg"></div>
          <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-violet-500/10 rounded-full mix-blend-soft-light filter blur-lg"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">
            Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-violet-400">bring your vision</span> to life?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 relative z-10">
            Let's collaborate to create something extraordinary that captures your brand's essence and captivates your audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white font-semibold shadow-lg shadow-fuchsia-500/20 relative overflow-hidden"
            >
              <span className="relative z-10">Start a Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-violet-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full bg-zinc-800 text-gray-300 font-semibold border border-zinc-700 relative overflow-hidden"
            >
              <span className="relative z-10">View Portfolio</span>
              <div className="absolute inset-0 bg-zinc-700/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DigitalArtServices;