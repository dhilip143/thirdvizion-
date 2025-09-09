import React, { Suspense, useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Html, useGLTF } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

// Loader UI
function Loader() {
  return (
    <Html center>
      <div className="text-white flex flex-col items-center">
        <div className="w-8 h-8 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mb-2"></div>
        <span className="text-sm text-pink-400">Loading AR solutions...</span>
      </div>
    </Html>
  );
}

// ==================== Model Components ====================
function RetroCameraModel() {
  const { scene } = useGLTF('/models/canon_at-1_retro_camera/scene.gltf');
  return <primitive object={scene} scale={20} position={[0, -1.0, 0]} rotation={[0, 0.5, 0]} />;
}

function GameBoyModel() {
  const { scene } = useGLTF('/models/game_boy_classic/scene.gltf');
  return <primitive object={scene} scale={12} position={[0, -1.5, 0]} rotation={[0, 0.3, 0]} />;
}

function RetroComputerModel() {
  const { scene } = useGLTF('/models/retro_computer/scene.gltf');
  return <primitive object={scene} scale={1.5} position={[0, -0.1, 0]} rotation={[0, -0.5, 0]} />;
}

// Canvas wrapper for the main visual
function MainModelCanvas({ children }) {
  return (
    <div className="w-full h-[500px] md:h-[700px] lg:h-[800px] -mt-16 relative">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 3, 3]} intensity={1} />
        <Suspense fallback={<Loader />}>
          {children}
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={2}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-zinc-950 to-transparent"></div>
    </div>
  );
}

// ==================== Services Section ====================
export default function ARServices() {
  const [activeService, setActiveService] = useState('enterpriseAR');
  
  // Refs for GSAP animations
  const headerRef = useRef(null);
  const serviceButtonsRef = useRef([]);
  const detailsRef = useRef(null);
  const statsRef = useRef([]);
  const backgroundElementsRef = useRef([]);
  const containerRef = useRef(null);
  const gridPatternRef = useRef(null);
  const floatingParticlesRef = useRef([]);

  useEffect(() => {
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
        const colors = ['bg-pink-500', 'bg-fuchsia-400', 'bg-purple-400'];
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
    if (headerRef.current) {
      gsap.fromTo(headerRef.current.children, 
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.2,
          ease: "elastic.out(1, 0.5)",
          onComplete: () => {
            // Continuous pulsing animation for the header
            const headerText = headerRef.current.querySelector('h1');
            if (headerText) {
              gsap.to(headerText, {
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
        }
      );
    }

    // Animation for service buttons with continuous hover effects
    serviceButtonsRef.current.forEach((button, index) => {
      if (button && activeService === services[index].id) {
        gsap.to(button, {
          boxShadow: '0 0 20px rgba(236, 72, 153, 0.4)',
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }
    });

    // Animation for stats with continuous counting
    statsRef.current.forEach((stat, index) => {
      if (stat) {
        // Continuous subtle scaling animation
        gsap.to(stat, {
          scale: 1.05,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
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
      // Reset all button glows
      serviceButtonsRef.current.forEach((button, index) => {
        if (button) {
          gsap.to(button, {
            boxShadow: '0 0 0px rgba(236, 72, 153, 0)',
            duration: 0.5
          });
        }
      });

      // Apply glow to active button
      const activeIndex = services.findIndex(service => service.id === activeService);
      if (serviceButtonsRef.current[activeIndex]) {
        gsap.to(serviceButtonsRef.current[activeIndex], {
          boxShadow: '0 0 20px rgba(236, 72, 153, 0.4)',
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
      gsap.fromTo(detailsRef.current.querySelectorAll('.feature-item'),
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

  // Handle service button click with animation
  const handleServiceClick = (serviceId) => {
    // Find the clicked button
    const clickedButtonIndex = services.findIndex(service => service.id === serviceId);
    const clickedButton = serviceButtonsRef.current[clickedButtonIndex];
    
    // Animate the clicked button
    if (clickedButton) {
      gsap.to(clickedButton, {
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
      id: 'enterpriseAR',
      component: <RetroCameraModel />,
      name: 'Enterprise AR Solutions',
      descriptionTitle: 'Augment Your Business Operations',
      descriptionText:
        'We develop custom augmented reality applications to enhance workforce productivity, streamline maintenance, and provide interactive training. Overlay critical data onto the real world to make smart, informed decisions faster.',
      offer: 'Special offer: Free AR readiness assessment for first-time clients!',
      year: 'Since 2018',
      features: [
        'AR-guided assembly and repair',
        'Interactive data visualization',
        'Remote expert assistance',
        'Location-based AR experiences'
      ],
      icon: '🏢'
    },
    {
      id: 'immersiveMarketing',
      component: <GameBoyModel />,
      name: 'AR Marketing & Experiences',
      descriptionTitle: 'Create Engaging & Memorable Campaigns',
      descriptionText:
        'Transform static marketing materials into dynamic, interactive experiences. Our AR campaigns boost customer engagement, drive sales, and create a powerful brand connection that captivates your audience.',
      offer: 'Complimentary initial consultation to discuss your next AR campaign! 🎉',
      year: 'Since 2019',
      features: [
        'AR product try-ons',
        'Interactive print media',
        'AR retail and showroom experiences',
        'Gamified AR brand activations'
      ],
      icon: '✨'
    },
    {
      id: 'customARDev',
      component: <RetroComputerModel />,
      name: 'Custom AR Development',
      descriptionTitle: 'Bringing Your AR Vision to Life',
      descriptionText:
        'Our skilled team of developers and designers builds bespoke AR applications from the ground up. Whether for mobile, smart glasses, or other devices, we deliver high-performance, scalable, and intuitive AR solutions tailored to your needs.',
      offer: 'Free prototype development for qualified projects!',
      year: 'Since 2017',
      features: [
        'Mobile AR app development (iOS/Android)',
        'SDK integration (ARKit, ARCore)',
        'Object recognition & tracking',
        'Ongoing support & maintenance'
      ],
      icon: '⚙️'
    }
  ];

  const active = services.find((s) => s.id === activeService);

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans relative overflow-hidden" ref={containerRef}>
      {/* Background Gradients and Grid */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          ref={el => backgroundElementsRef.current[0] = el}
          className="absolute -top-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-soft-light filter blur-xl opacity-30"
        ></div>
        <div 
          ref={el => backgroundElementsRef.current[1] = el}
          className="absolute top-1/4 -right-20 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-soft-light filter blur-xl opacity-20"
        ></div>
        <div 
          ref={el => backgroundElementsRef.current[2] = el}
          className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-soft-light filter blur-xl opacity-30"
        ></div>
        <div 
          ref={gridPatternRef}
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"
        ></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center pt-16">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-10 md:mb-12">
          <h1 className="text-4xl md:text-6xl   font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-fuchsia-500 bg-[length:200%_100%] tracking-tight">
            Augmented Reality Services
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          </p>
        </div>

        {/* Main 3D Model Visual */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService + '-visual'}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <MainModelCanvas>{active.component}</MainModelCanvas>
          </motion.div>
        </AnimatePresence>

        {/* Services Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="container mx-auto px-4 mt-8 md:mt-12 mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                ref={el => serviceButtonsRef.current[index] = el}
                onClick={() => handleServiceClick(service.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`py-4 px-6 rounded-xl transition-all duration-300 transform font-medium text-lg text-center
                  ${activeService === service.id
                    ? 'bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white'
                    : 'bg-zinc-900/50 border border-gray-700 text-gray-300 hover:bg-zinc-800'
                  }`}
              >
                {service.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Detailed Service Description */}
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService + '-description'}
              ref={detailsRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-zinc-900/70 rounded-2xl p-6 md:p-10 backdrop-blur-sm border border-pink-500/20 shadow-xl shadow-pink-500/10 mb-16 relative overflow-hidden"
            >
              {/* Animated background element for details panel */}
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-pink-600 rounded-full mix-blend-soft-light filter blur-xl opacity-20"></div>
              
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <span className="text-pink-400 font-mono text-sm bg-black/40 px-2 py-1 rounded">{active.year}</span>
                <span className="w-8 h-px bg-pink-400/60"></span>
                <span className="text-xs text-pink-300 uppercase tracking-widest bg-black/30 px-2 py-1 rounded">Next-Gen Technology</span>
                <span className="text-2xl ml-2">{active.icon}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 bg-gradient-to-r from-pink-400 to-white bg-clip-text text-transparent relative z-10">
                {active.descriptionTitle}
              </h2>
              <p className="text-lg text-gray-200 leading-relaxed mb-6 relative z-10">
                {active.descriptionText}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 relative z-10">
                {active.features.map((feature, index) => (
                  <div key={index} className="flex items-center bg-black/30 p-3 rounded-lg border border-pink-500/10 feature-item">
                    <svg className="w-4 h-4 text-pink-400 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-200 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <p className="text-pink-300 font-medium flex items-center mb-6 relative z-10">
                <svg className="w-4 h-4 mr-2 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1z" clipRule="evenodd"></path>
                </svg>
                {active.offer}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(236, 72, 153, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white font-bold py-3 px-8 rounded-lg transition-all flex items-center justify-center shadow-lg relative overflow-hidden"
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-fuchsia-700 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-pink-500/50 hover:border-pink-400 text-pink-300 font-medium py-3 px-6 rounded-lg transition-colors bg-black/30 relative overflow-hidden"
                >
                  <span className="relative z-10">Learn More</span>
                  <div className="absolute inset-0 bg-pink-900/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { value: '150+', label: 'Projects Completed' },
            { value: '99%', label: 'Client Satisfaction' },
            { value: '40+', label: 'AR Experts' },
            { value: '7+', label: 'Years in AR' }
          ].map((stat, index) => (
            <div key={index} className="bg-zinc-900/50 rounded-lg p-4 text-center border border-pink-500/20 relative overflow-hidden">
              {/* Animated background for stats */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-900/10 to-fuchsia-900/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              
              <div 
                ref={el => statsRef.current[index] = el}
                className="text-2xl font-bold text-pink-400 relative z-10"
              >
                {stat.value}
              </div>
              <div className="text-sm text-gray-300 relative z-10">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}