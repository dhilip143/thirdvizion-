// import React, { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { gsap } from "gsap";
// import { VrData } from "/src/Data/Data.jsx";

// const Vrsol = () => {
//   const [activeService, setActiveService] = useState("enterpriseVR");
//   const activeServiceData = VrData.find((vr) => vr.id === activeService);

//   // Refs for GSAP animations
//   const headerRef = useRef(null);
//   const serviceCardsRef = useRef([]);
//   const detailsRef = useRef(null);
//   // const statsRef = useRef([]);
//   const backgroundElementsRef = useRef([]);
//   const containerRef = useRef(null);
//   const gridPatternRef = useRef(null);
//   const floatingParticlesRef = useRef([]);

//   // Initialize continuous animations
//   useEffect(() => {
//     // Create floating particles
//     const createParticles = () => {
//       const container = containerRef.current;
//       if (!container) return;

//       // Remove existing particles
//       floatingParticlesRef.current.forEach((particle) => {
//         if (particle && particle.parentNode) {
//           particle.parentNode.removeChild(particle);
//         }
//       });
//       floatingParticlesRef.current = [];

//       // Create new particles
//       for (let i = 0; i < 15; i++) {
//         const particle = document.createElement("div");
//         particle.className = "absolute rounded-full";

//         // Random properties
//         const size = Math.random() * 10 + 6;
//         const colors = ["bg-violet-500", "bg-indigo-400", "bg-purple-400"];
//         const color = colors[Math.floor(Math.random() * colors.length)];

//         particle.classList.add(color);
//         particle.style.width = `${size}px`;
//         particle.style.height = `${size}px`;
//         particle.style.left = `${Math.random() * 100}%`;
//         particle.style.top = `${Math.random() * 100}%`;
//         particle.style.opacity = Math.random() * 0.4 + 0.1;

//         container.appendChild(particle);
//         floatingParticlesRef.current.push(particle);

//         // Animate particle
//         gsap.to(particle, {
//           y: Math.random() * 100 - 50,
//           x: Math.random() * 80 - 40,
//           duration: Math.random() * 10 + 10,
//           repeat: -1,
//           yoyo: true,
//           ease: "sine.inOut",
//         });
//       }
//     };

//     // Animation for header elements with continuous pulsing
//     gsap.fromTo(
//       headerRef.current.children,
//       { opacity: 0, y: -50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1.5,
//         stagger: 0.2,
//         ease: "elastic.out(1, 0.5)",
//         onComplete: () => {
//           gsap.to(headerRef.current.querySelector("h1"), {
//             backgroundPosition: "100% 50%",
//             duration: 5,
//             repeat: -1,
//             ease: "none",
//             modifiers: {
//               backgroundPosition: (value) => `${value}% 50%`,
//             },
//           });
//         },
//       }
//     );

//     // Animation for service cards
//     serviceCardsRef.current.forEach((card, index) => {
//       if (card) {
//         gsap.fromTo(
//           card,
//           { opacity: 0, x: -50 },
//           {
//             opacity: 1,
//             x: 0,
//             duration: 0.8,
//             delay: index * 0.2,
//             onComplete: () => {
//               if (activeService === VrData[index].id) {
//                 gsap.to(card, {
//                   boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)",
//                   duration: 2,
//                   repeat: -1,
//                   yoyo: true,
//                   ease: "sine.inOut",
//                 });
//               }
//             },
//           }
//         );
//       }
//     });

//     // Animation for stats
//     // statsRef.current.forEach((stat, index) => {
//     //   if (stat) {
//     //     if (stat.textContent.includes("+") || stat.textContent.includes("%")) {
//     //       const value = stat.textContent;
//     //       gsap.fromTo(
//     //         stat,
//     //         { textContent: "0" },
//     //         {
//     //           textContent: value,
//     //           duration: 3,
//     //           delay: index * 0.3,
//     //           snap: { textContent: 1 },
//     //           onStart: () => {
//     //             stat.textContent = "0";
//     //           },
//     //           onComplete: () => {
//     //             gsap.to(stat, {
//     //               scale: 1.05,
//     //               duration: 1.5,
//     //               repeat: -1,
//     //               yoyo: true,
//     //               ease: "sine.inOut",
//     //             });
//     //           },
//     //         }
//     //       );
//     //     }
//     //   }
//     // });

//     // Floating background elements
//     backgroundElementsRef.current.forEach((element, index) => {
//       if (element) {
//         gsap.to(element, {
//           y: index % 2 === 0 ? 40 : -40,
//           x: index % 3 === 0 ? 20 : -20,
//           duration: 8 + index * 2,
//           repeat: -1,
//           yoyo: true,
//           ease: "sine.inOut",
//         });
//       }
//     });

//     // Grid pattern animation
//     if (gridPatternRef.current) {
//       gsap.to(gridPatternRef.current, {
//         backgroundPosition: "4rem 4rem",
//         duration: 20,
//         repeat: -1,
//         ease: "none",
//       });
//     }

//     createParticles();

//     const handleResize = () => {
//       createParticles();
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       floatingParticlesRef.current.forEach((particle) => {
//         if (particle && particle.parentNode) {
//           particle.parentNode.removeChild(particle);
//         }
//       });
//     };
//   }, []);

//   // Handle service switch animations
//   useEffect(() => {
//     if (detailsRef.current) {
//       serviceCardsRef.current.forEach((card) => {
//         if (card) {
//           gsap.to(card, {
//             boxShadow: "0 0 0px rgba(139, 92, 246, 0)",
//             duration: 0.5,
//           });
//         }
//       });

//       const activeIndex = VrData.findIndex(
//         (service) => service.id === activeService
//       );
//       if (serviceCardsRef.current[activeIndex]) {
//         gsap.to(serviceCardsRef.current[activeIndex], {
//           boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)",
//           duration: 2,
//           repeat: -1,
//           yoyo: true,
//           ease: "sine.inOut",
//         });
//       }

//       gsap.fromTo(
//         detailsRef.current,
//         { opacity: 0, scale: 0.95, y: 20 },
//         {
//           opacity: 1,
//           scale: 1,
//           y: 0,
//           duration: 0.7,
//           ease: "back.out(1.7)",
//         }
//       );

//       gsap.fromTo(
//         detailsRef.current.querySelectorAll("li"),
//         { opacity: 0, x: 20 },
//         {
//           opacity: 1,
//           x: 0,
//           duration: 0.5,
//           stagger: 0.1,
//           ease: "power2.out",
//         }
//       );
//     }
//   }, [activeService]);

//   const handleServiceClick = (serviceId) => {
//     const clickedCardIndex = VrData.findIndex(
//       (service) => service.id === serviceId
//     );
//     const clickedCard = serviceCardsRef.current[clickedCardIndex];

//     if (clickedCard) {
//       gsap.to(clickedCard, {
//         scale: 0.97,
//         duration: 0.1,
//         yoyo: true,
//         repeat: 1,
//         ease: "power1.inOut",
//         onComplete: () => {
//           setActiveService(serviceId);
//         },
//       });
//     } else {
//       setActiveService(serviceId);
//     }
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   return (
//     <>

//       <div
//         className="min-h-screen text-white px-4 md:px-10 py-16 relative overflow-hidden"
//         ref={containerRef}
//       >
//         {/* ⬇️ VrVideo moved to the top */}


//         {/* Background elements */}
//         <div className="absolute inset-0 z-0 overflow-hidden">
//           <div
//             ref={(el) => (backgroundElementsRef.current[0] = el)}
//             className="absolute -top-40 -left-40 w-80 h-80 bg-violet-700 rounded-full mix-blend-soft-light filter blur-xl opacity-30"
//           ></div>
//           <div
//             ref={(el) => (backgroundElementsRef.current[1] = el)}
//             className="absolute top-1/4 -right-20 w-96 h-96 bg-indigo-600 rounded-full mix-blend-soft-light filter blur-xl opacity-20"
//           ></div>
//           <div
//             ref={(el) => (backgroundElementsRef.current[2] = el)}
//             className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-700 rounded-full mix-blend-soft-light filter blur-xl opacity-30"
//           ></div>

//           <div
//             ref={gridPatternRef}
//             className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"
//           ></div>
//         </div>

//         <div className="max-w-7xl mx-auto relative z-10">
//           {/* Header */}
//           <div ref={headerRef} className="text-center mb-12 md:mb-16">
//             <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-500 bg-[length:200%_100%] tracking-tight">
//               Virtual Reality Services
//             </h1>
//             <p className="text-lg text-gray-300 max-w-2xl mx-auto">
//               From groundbreaking simulations to captivating experiences, we build
//               the virtual worlds of tomorrow.
//             </p>
//           </div>

//           {/* Services & Details Grid */}
//           <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
//             {/* Left Column */}
//             <motion.div
//               initial="hidden"
//               animate="visible"
//               variants={containerVariants}
//               className="flex flex-col gap-6"
//             >
//               {VrData.map((service, index) => (
//                 <motion.div
//                   key={service.id}
//                   ref={(el) => (serviceCardsRef.current[index] = el)}
//                   variants={itemVariants}
//                   whileHover={{ scale: 1.02 }}
//                   onClick={() => handleServiceClick(service.id)}
//                   className={`p-8 rounded-3xl cursor-pointer transition-all duration-300 transform border
//                   ${activeService === service.id
//                       ? "bg-violet-900/40 border-violet-600"
//                       : "bg-zinc-900/50 border-gray-700 hover:border-violet-500"
//                     }`}
//                 >
//                   <div className="flex items-center mb-4">
//                     <span className="text-4xl mr-4">{service.icon}</span>
//                     <h3 className="text-2xl font-bold">{service.title}</h3>
//                   </div>
//                   <p className="text-gray-400">{service.description}</p>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* Right Column */}
//             <div className="lg:sticky lg:top-8 self-start">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeService}
//                   ref={detailsRef}
//                   initial={{ opacity: 0, y: 20, scale: 0.95 }}
//                   animate={{ opacity: 1, y: 0, scale: 1 }}
//                   exit={{ opacity: 0, y: -20, scale: 0.95 }}
//                   transition={{ duration: 0.5 }}
//                   className="bg-zinc-900/60 rounded-3xl p-8 md:p-12 border border-violet-700/50 backdrop-blur-md relative overflow-hidden"
//                 >
//                   <div className="absolute -right-20 -top-20 w-40 h-40 bg-violet-600 rounded-full mix-blend-soft-light filter blur-xl opacity-20 animate-pulse"></div>

//                   <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent relative z-10">
//                     {activeServiceData.title}
//                   </h2>
//                   <p className="text-lg text-gray-300 mb-8 leading-relaxed relative z-10">
//                     {activeServiceData.description}
//                   </p>
//                   <h3 className="text-xl font-semibold mb-4 text-violet-300 relative z-10">
//                     Key Features
//                   </h3>
//                   <ul className="grid grid-cols-1 gap-4 relative z-10">
//                     {activeServiceData.features.map((feature, index) => (
//                       <motion.li
//                         key={index}
//                         initial={{ opacity: 0, x: 20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: index * 0.1 }}
//                         className="flex items-center text-gray-200 p-3 bg-zinc-800/50 rounded-lg"
//                       >
//                         <div className="bg-violet-500/10 p-2 rounded-full mr-3 flex-shrink-0">
//                           <svg
//                             className="w-5 h-5 text-violet-400"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="2"
//                               d="M5 13l4 4L19 7"
//                             ></path>
//                           </svg>
//                         </div>
//                         <span className="text-gray-200">{feature}</span>
//                       </motion.li>
//                     ))}
//                   </ul>
//                   <div className="flex flex-wrap gap-4 mt-8 relative z-10">
//                     {/* <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg shadow-violet-500/20 transition-all relative overflow-hidden"
//                     >
//                       <span className="relative z-10">Request Demo</span>
//                       <div className="absolute inset-0 bg-gradient-to-r from-violet-700 to-indigo-700 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
//                     </motion.button>
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="border border-violet-500/50 hover:border-violet-400 text-violet-300 font-medium py-3 px-6 rounded-full transition-colors bg-black/30 relative overflow-hidden"
//                     >
//                       <span className="relative z-10">View Case Studies</span>
//                       <div className="absolute inset-0 bg-violet-900/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
//                     </motion.button> */}
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </div>

//           {/* Stats Section */}
//           {/* <motion.div
//             initial="hidden"
//             whileInView="visible"
//             variants={containerVariants}
//             viewport={{ once: true }}
//             className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
//           >
//             {StatsData.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 className="bg-zinc-900/50 rounded-2xl p-6 border border-violet-500/20 relative overflow-hidden"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-violet-900/10 to-indigo-900/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

//                 <div
//                   ref={(el) => (statsRef.current[index] = el)}
//                   className="text-4xl md:text-5xl font-extrabold text-violet-400 relative z-10"
//                 >
//                   {stat.value}
//                 </div>
//                 <div className="text-gray-300 mt-2 text-sm md:text-base relative z-10">
//                   {stat.label}
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div> */}

//         </div>

//         {/* Vr component at the bottom */}

//       </div>
//     </>
//   );
// };

// export default Vrsol;
// Vrsol.jsx
// import React, { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { gsap } from "gsap";

// // VR Services Data
// const VrData = [
//   // {
//   //   id: "enterpriseVR",
//   //   title: "Enterprise VR Solutions",
//   //   icon: "🏢",
//   //   description: "Transform your business operations with immersive virtual reality experiences tailored for enterprise needs.",
//   //   features: [
//   //     "Virtual Product Demonstrations",
//   //     "Immersive Training Simulations",
//   //     "Virtual Showrooms & Exhibitions",
//   //     "Collaborative VR Meetings",
//   //     "Data Visualization in 3D Space"
//   //   ]
//   // },
//    {
//     id: "vrDevelopment",
//     title: "Next-Gen VR Development",
//     description:
//       "We craft tailored VR experiences from the ground up — blending art, technology, and strategy to deliver next-generation virtual solutions that redefine user engagement.",
//     icon: "🛠️",
//     features: [
//       "Full-cycle VR app design & development",
//       "Cross-platform deployment (Meta, SteamVR, WebXR)",
//       "Realistic physics & spatial audio integration",
//       "Continuous optimization & live analytics support",
//     ],
//   },
//   {
//     id: "trainingVR",
//     title: "VR Training & Simulation",
//     icon: "🎯",
//     description: "Revolutionize employee training with realistic, risk-free virtual environments for skill development.",
//     features: [
//       "Safety Procedure Training",
//       "Equipment Operation Simulation",
//       "Emergency Response Drills",
//       "Soft Skills Development",
//       "Performance Tracking & Analytics"
//     ]
//   },
//   {
//     id: "architecturalVR",
//     title: "Architectural Visualization",
//     icon: "🏗️",
//     description: "Walk through unbuilt spaces and experience architectural designs before construction begins.",
//     features: [
//       "Virtual Property Tours",
//       "Real-time Design Modifications",
//       "Spatial Planning & Layout",
//       "Material & Lighting Simulation",
//       "Client Presentation Tools"
//     ]
//   },
//   {
//     id: "entertainmentVR",
//     title: "Entertainment & Gaming",
//     icon: "🎮",
//     description: "Create captivating VR experiences that transport users to new worlds and unforgettable adventures.",
//     features: [
//       "Interactive Storytelling",
//       "Multiplayer VR Experiences",
//       "Motion Capture Integration",
//       "Haptic Feedback Systems",
//       "Cross-platform Compatibility"
//     ]
//   }
// ];

// const Vrsol = () => {
//   const [activeService, setActiveService] = useState("vrDevelopment");
//   const activeServiceData = VrData.find((vr) => vr.id === activeService);

//   const headerRef = useRef(null);
//   const serviceCardsRef = useRef([]);
//   const detailsRef = useRef(null);
//   const backgroundElementsRef = useRef([]);
//   const containerRef = useRef(null);
//   const gridPatternRef = useRef(null);
//   const floatingParticlesRef = useRef([]);

//   useEffect(() => {
//     const createParticles = () => {
//       const container = containerRef.current;
//       if (!container) return;

//       floatingParticlesRef.current.forEach((particle) => {
//         if (particle && particle.parentNode) {
//           particle.parentNode.removeChild(particle);
//         }
//       });
//       floatingParticlesRef.current = [];

//       for (let i = 0; i < 15; i++) {
//         const particle = document.createElement("div");
//         particle.className = "absolute rounded-full";

//         const size = Math.random() * 10 + 6;
//         const colors = ["bg-violet-500", "bg-indigo-400", "bg-purple-400"];
//         const color = colors[Math.floor(Math.random() * colors.length)];

//         particle.classList.add(color);
//         particle.style.width = `${size}px`;
//         particle.style.height = `${size}px`;
//         particle.style.left = `${Math.random() * 100}%`;
//         particle.style.top = `${Math.random() * 100}%`;
//         particle.style.opacity = Math.random() * 0.4 + 0.1;

//         container.appendChild(particle);
//         floatingParticlesRef.current.push(particle);

//         gsap.to(particle, {
//           y: Math.random() * 100 - 50,
//           x: Math.random() * 80 - 40,
//           duration: Math.random() * 10 + 10,
//           repeat: -1,
//           yoyo: true,
//           ease: "sine.inOut",
//         });
//       }
//     };

//     gsap.fromTo(
//       headerRef.current?.children || [],
//       { opacity: 0, y: -50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1.5,
//         stagger: 0.2,
//         ease: "elastic.out(1, 0.5)",
//         onComplete: () => {
//           const h1 = headerRef.current?.querySelector("h1");
//           if (h1) {
//             gsap.to(h1, {
//               backgroundPosition: "100% 50%",
//               duration: 5,
//               repeat: -1,
//               ease: "none",
//               modifiers: {
//                 backgroundPosition: (value) => `${value}% 50%`,
//               },
//             });
//           }
//         },
//       }
//     );

//     serviceCardsRef.current.forEach((card, index) => {
//       if (card) {
//         gsap.fromTo(
//           card,
//           { opacity: 0, x: -50 },
//           {
//             opacity: 1,
//             x: 0,
//             duration: 0.8,
//             delay: index * 0.2,
//             onComplete: () => {
//               if (activeService === VrData[index].id) {
//                 gsap.to(card, {
//                   boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)",
//                   duration: 2,
//                   repeat: -1,
//                   yoyo: true,
//                   ease: "sine.inOut",
//                 });
//               }
//             },
//           }
//         );
//       }
//     });

//     backgroundElementsRef.current.forEach((element, index) => {
//       if (element) {
//         gsap.to(element, {
//           y: index % 2 === 0 ? 40 : -40,
//           x: index % 3 === 0 ? 20 : -20,
//           duration: 8 + index * 2,
//           repeat: -1,
//           yoyo: true,
//           ease: "sine.inOut",
//         });
//       }
//     });

//     if (gridPatternRef.current) {
//       gsap.to(gridPatternRef.current, {
//         backgroundPosition: "4rem 4rem",
//         duration: 20,
//         repeat: -1,
//         ease: "none",
//       });
//     }

//     createParticles();

//     const handleResize = () => {
//       createParticles();
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       floatingParticlesRef.current.forEach((particle) => {
//         if (particle && particle.parentNode) {
//           particle.parentNode.removeChild(particle);
//         }
//       });
//     };
//   }, []);

//   useEffect(() => {
//     if (detailsRef.current) {
//       serviceCardsRef.current.forEach((card) => {
//         if (card) {
//           gsap.to(card, {
//             boxShadow: "0 0 0px rgba(139, 92, 246, 0)",
//             duration: 0.5,
//           });
//         }
//       });

//       const activeIndex = VrData.findIndex(
//         (service) => service.id === activeService
//       );
//       if (serviceCardsRef.current[activeIndex]) {
//         gsap.to(serviceCardsRef.current[activeIndex], {
//           boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)",
//           duration: 2,
//           repeat: -1,
//           yoyo: true,
//           ease: "sine.inOut",
//         });
//       }

//       gsap.fromTo(
//         detailsRef.current,
//         { opacity: 0, scale: 0.95, y: 20 },
//         {
//           opacity: 1,
//           scale: 1,
//           y: 0,
//           duration: 0.7,
//           ease: "back.out(1.7)",
//         }
//       );

//       gsap.fromTo(
//         detailsRef.current.querySelectorAll("li"),
//         { opacity: 0, x: 20 },
//         {
//           opacity: 1,
//           x: 0,
//           duration: 0.5,
//           stagger: 0.1,
//           ease: "power2.out",
//         }
//       );
//     }
//   }, [activeService]);

//   const handleServiceClick = (serviceId) => {
//     const clickedCardIndex = VrData.findIndex(
//       (service) => service.id === serviceId
//     );
//     const clickedCard = serviceCardsRef.current[clickedCardIndex];

//     if (clickedCard) {
//       gsap.to(clickedCard, {
//         scale: 0.97,
//         duration: 0.1,
//         yoyo: true,
//         repeat: 1,
//         ease: "power1.inOut",
//         onComplete: () => {
//           setActiveService(serviceId);
//         },
//       });
//     } else {
//       setActiveService(serviceId);
//     }
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   return (
//     <div
//       className="min-h-screen text-white px-4 md:px-10 py-16 relative overflow-hidden"
//       ref={containerRef}
//     >
//       {/* Background elements */}
//       <div className="absolute inset-0 z-0 overflow-hidden">
//         <div
//           ref={(el) => (backgroundElementsRef.current[0] = el)}
//           className="absolute -top-40 -left-40 w-80 h-80 bg-violet-700 rounded-full mix-blend-soft-light filter blur-xl opacity-30"
//         ></div>
//         <div
//           ref={(el) => (backgroundElementsRef.current[1] = el)}
//           className="absolute top-1/4 -right-20 w-96 h-96 bg-indigo-600 rounded-full mix-blend-soft-light filter blur-xl opacity-20"
//         ></div>
//         <div
//           ref={(el) => (backgroundElementsRef.current[2] = el)}
//           className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-700 rounded-full mix-blend-soft-light filter blur-xl opacity-30"
//         ></div>

//         <div
//           ref={gridPatternRef}
//           className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"
//         ></div>
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header */}
//         <div ref={headerRef} className="text-center mb-12 md:mb-16">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-500 bg-[length:200%_100%] tracking-tight">
//             Complete VR Solutions
//           </h1>
//           <p className="text-lg text-gray-300 max-w-2xl mx-auto">
//             From enterprise training to immersive entertainment, we build comprehensive 
//             virtual reality experiences that push the boundaries of what's possible.
//           </p>
//         </div>

//         {/* Services & Details Grid */}
//         <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
//           {/* Left Column */}
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={containerVariants}
//             className="flex flex-col gap-6"
//           >
//             {VrData.map((service, index) => (
//               <motion.div
//                 key={service.id}
//                 ref={(el) => (serviceCardsRef.current[index] = el)}
//                 variants={itemVariants}
//                 whileHover={{ scale: 1.02 }}
//                 onClick={() => handleServiceClick(service.id)}
//                 className={`p-8 rounded-3xl cursor-pointer transition-all duration-300 transform border
//                 ${activeService === service.id
//                     ? "bg-violet-900/40 border-violet-600"
//                     : "bg-zinc-900/50 border-gray-700 hover:border-violet-500"
//                   }`}
//               >
//                 <div className="flex items-center mb-4">
//                   <span className="text-4xl mr-4">{service.icon}</span>
//                   <h3 className="text-2xl font-bold">{service.title}</h3>
//                 </div>
//                 <p className="text-gray-400">{service.description}</p>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Right Column */}
//           <div className="lg:sticky lg:top-8 self-start">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeService}
//                 ref={detailsRef}
//                 initial={{ opacity: 0, y: 20, scale: 0.95 }}
//                 animate={{ opacity: 1, y: 0, scale: 1 }}
//                 exit={{ opacity: 0, y: -20, scale: 0.95 }}
//                 transition={{ duration: 0.5 }}
//                 className="bg-zinc-900/60 rounded-3xl p-8 md:p-12 border border-violet-700/50 backdrop-blur-md relative overflow-hidden"
//               >
//                 <div className="absolute -right-20 -top-20 w-40 h-40 bg-violet-600 rounded-full mix-blend-soft-light filter blur-xl opacity-20 animate-pulse"></div>

//                 <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent relative z-10">
//                   {activeServiceData.title}
//                 </h2>
//                 <p className="text-lg text-gray-300 mb-8 leading-relaxed relative z-10">
//                   {activeServiceData.description}
//                 </p>
//                 <h3 className="text-xl font-semibold mb-4 text-violet-300 relative z-10">
//                   Key Features
//                 </h3>
//                 <ul className="grid grid-cols-1 gap-4 relative z-10">
//                   {activeServiceData.features.map((feature, index) => (
//                     <motion.li
//                       key={index}
//                       initial={{ opacity: 0, x: 20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                       className="flex items-center text-gray-200 p-3 bg-zinc-800/50 rounded-lg"
//                     >
//                       <div className="bg-violet-500/10 p-2 rounded-full mr-3 flex-shrink-0">
//                         <svg
//                           className="w-5 h-5 text-violet-400"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M5 13l4 4L19 7"
//                           ></path>
//                         </svg>
//                       </div>
//                       <span className="text-gray-200">{feature}</span>
//                     </motion.li>
//                   ))}
//                 </ul>
//                 <div className="flex flex-wrap gap-4 mt-8 relative z-10">
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg shadow-violet-500/20 transition-all relative overflow-hidden"
//                   >
//                     <span className="relative z-10">Get Started</span>
//                     <div className="absolute inset-0 bg-gradient-to-r from-violet-700 to-indigo-700 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
//                   </motion.button>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="border border-violet-500/50 hover:border-violet-400 text-violet-300 font-medium py-3 px-6 rounded-full transition-colors bg-black/30 relative overflow-hidden"
//                   >
//                     <span className="relative z-10">Learn More</span>
//                     <div className="absolute inset-0 bg-violet-900/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
//                   </motion.button>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Vrsol;
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

// ✅ Import your VR images
import VrImage1 from "/src/assets/vr/VrImage1.jpeg";
import VrImage2 from "/src/assets/vr/VrImage2.jpeg";
import VrImage3 from "/src/assets/vr/VrImage3.jpeg";
import VrImage4 from "/src/assets/vr/VrImage4.jpeg";

// ✅ VR Services Data — each with one image
const VrData = [
  {
    id: "vrDevelopment",
    title: "Next-Gen VR Development",
    description:
      "We craft tailored VR experiences from the ground up — blending art, technology, and strategy to deliver next-generation virtual solutions that redefine user engagement.",
    icon: "🛠️",
    image: VrImage1,
  },
  {
    id: "trainingVR",
    title: "VR Training & Simulation",
    icon: "🎯",
    description:
      "Revolutionize employee training with realistic, risk-free virtual environments for skill development.",
    image: VrImage2,
  },
  {
    id: "architecturalVR",
    title: "Architectural Visualization",
    icon: "🏗️",
    description:
      "Walk through unbuilt spaces and experience architectural designs before construction begins.",
    image: VrImage3,
  },
  {
    id: "entertainmentVR",
    title: "Entertainment & Gaming",
    icon: "🎮",
    description:
      "Create captivating VR experiences that transport users to new worlds and unforgettable adventures.",
    image: VrImage4,
  },
];

const Vrsol = () => {
  const [activeService, setActiveService] = useState("vrDevelopment");
  const activeServiceData = VrData.find((vr) => vr.id === activeService);

  const headerRef = useRef(null);
  const serviceCardsRef = useRef([]);
  const detailsRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current?.children || [],
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, stagger: 0.2, ease: "elastic.out(1, 0.5)" }
    );
  }, []);

  const handleServiceClick = (serviceId) => {
    setActiveService(serviceId);
  };

  return (
    <div
      className="min-h-screen text-white px-4 md:px-10 py-16 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-500 bg-[length:200%_100%] tracking-tight"  style={{ fontFamily: "Outfit, sans-serif" }}>
            Complete VR Solutions
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto"   style={{ fontFamily: "work-sans, sans-serif" }}>
            From enterprise training to immersive entertainment, we build comprehensive 
            virtual reality experiences that push the boundaries of what's possible.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
          {/* Left: Cards */}
          <div className="flex flex-col gap-6">
            {VrData.map((service, index) => (
              <motion.div
                key={service.id}
                ref={(el) => (serviceCardsRef.current[index] = el)}
                whileHover={{ scale: 1.02 }}
                onClick={() => handleServiceClick(service.id)}
                className={`p-8 rounded-3xl cursor-pointer transition-all duration-300 transform border
                  ${
                    activeService === service.id
                      ? "bg-violet-900/40 border-violet-600"
                      : "bg-zinc-900/50 border-gray-700 hover:border-violet-500"
                  }`}
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{service.icon}</span>
                  <h3 className="text-2xl font-bold"   style={{ fontFamily: "Outfit, sans-serif" }}>{service.title}</h3>
                </div>
                <p className="text-gray-400"   style={{ fontFamily: "work-sans, sans-serif" }}>{service.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Right: Image & Buttons */}
          <div className="lg:sticky lg:top-8 self-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                ref={detailsRef}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="bg-zinc-900/60 rounded-3xl p-8 md:p-12 border border-violet-700/50 backdrop-blur-md relative overflow-hidden"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent"   style={{ fontFamily: "Outfit, sans-serif" }}>
                  {activeServiceData.title}
                </h2>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed"   style={{ fontFamily: "work-sans, sans-serif" }}>
                  {activeServiceData.description}
                </p>

                {/* ✅ One Image per Service */}
                <motion.img
                  key={activeServiceData.image}
                  src={activeServiceData.image}
                  alt={activeServiceData.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-120 object-cover rounded-2xl shadow-lg mb-8 hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Buttons */}
                {/* <div className="flex flex-wrap gap-4 mt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg shadow-violet-500/20 transition-all"
                  >
                    Get Started
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-violet-500/50 hover:border-violet-400 text-violet-300 font-medium py-3 px-6 rounded-full transition-colors bg-black/30"
                  >
                    Learn More
                  </motion.button>
                </div> */}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vrsol;
