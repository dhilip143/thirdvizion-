// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import service1 from "/src/assets/service1.jpg";
// import service2 from "/src/assets/service2.jpg";
// import service3 from "/src/assets/service3.jpg";

// const services = [
//   { id: "01", title: "Immersive tech", img: service1 },
//   { id: "02", title: "Data&Cloud", img: service2 },
//   { id: "03", title: "Devolopement", img: service3 },
// ];

// export default function Services() {
//   const [active, setActive] = useState("01");
//   const activeService = services.find((s) => s.id === active);

//   return (
//     <section className="bg-black text-white px-6 md:px-20 py-16 relative">
//       {/* Heading */}
//       <motion.h2
//         className="text-purple-400 text-center text-4xl md:text-6xl font-bold font-serif mb-12"
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7, ease: "easeOut" }}
//       >
//         SERVICES
//       </motion.h2>

//       <div className="flex flex-col md:flex-row gap-10">
//         {/* Left side: image */}
//         <div className="flex-1 flex justify-center items-center">
//           <AnimatePresence mode="wait">
//             <motion.img
//               key={activeService.id}
//               src={activeService.img}
//               alt={activeService.title}
//               className="w-80 h-64 md:w-[400px] md:h-[300px] lg:w-[480px] lg:h-[360px] xl:w-[560px] xl:h-[420px] 
//                          object-cover rounded-xl shadow-lg"
//               initial={{ opacity: 0, scale: 0.9, x: 80 }}
//               animate={{ opacity: 1, scale: 1, x: 0 }}
//               exit={{ opacity: 0, scale: 0.95, x: -40 }}
//               transition={{ duration: 0.4, ease: "easeInOut" }}
//             />
//           </AnimatePresence>
//         </div>

//         {/* Right side: list */}
//         <motion.div
//           className="flex-1 flex flex-col gap-6"
//           initial={{ opacity: 0, x: 60 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           {services.map((service) => (
//             <div
//               key={service.id}
//               onMouseEnter={() => setActive(service.id)}
//               className={`flex items-center justify-between cursor-pointer border-b border-gray-800 pb-2 transition 
//                 ${active === service.id ? "text-white" : "text-gray-500"}`}
//             >
//               <span className=" text-xl md:text-2xl xl:text-4xl">
//                 {service.title}
//               </span>
//               <motion.span
//                 className={`text-[60px] md:text-[80px] font-bold ${
//                   active === service.id ? "text-yellow-400" : "text-gray-800"
//                 }`}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, ease: "easeOut" }}
//               >
//                 {service.id}
//               </motion.span>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/effect-cube';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Import your images
import service1a from "/src/assets/HomeImages/serviceimages/service1a.jpg";
import service1b from "/src/assets/HomeImages/serviceimages/service1b.jpg";
import service1c from "/src/assets/HomeImages/serviceimages/service1c.jpg";
import service2a from "/src/assets/HomeImages/serviceimages/service2a.jpg";
import service2b from "/src/assets/HomeImages/serviceimages/service2b.jpg";
import service2c from "/src/assets/HomeImages/serviceimages/service2c.jpg";
import service3a from "/src/assets/HomeImages/serviceimages/service3a.jpg";
import service3b from "/src/assets/HomeImages/serviceimages/service3b.jpg";
import service3c from "/src/assets/HomeImages/serviceimages/service3c.jpg";

const services = [
  {
    id: "01",
    title: "Immersive Tech Solutions",
    description: "Cutting-edge virtual and augmented reality experiences that transform how you interact with digital content.",
    images: [service1a, service1b, service1c],
    features: ["VR/AR Development", "3D Modeling", "Interactive Experiences"],
    slideTitles: ["Immersive Tech Solutions", "Virtual Reality", "Augmented Reality"],
    projectCounts: ["45 projects", "32 projects", "21 projects"]
  },
  {
    id: "02",
    title: "Data & Cloud Services",
    description: "Secure cloud infrastructure and data analytics solutions to drive your business intelligence and growth.",
    images: [service2a, service2b, service2c],
    features: ["Cloud Migration", "Data Analytics", "AI Integration"],
    slideTitles: ["Data & Cloud Services", "Cloud Infrastructure", "Data Analytics"],
    projectCounts: ["67 projects", "89 projects", "55 projects"]
  },
  {
    id: "03",
    title: "Custom Development",
    description: "Tailored software solutions and web applications designed to meet your unique business requirements.",
    images: [service3a, service3b, service3c],
    features: ["Web Development", "Mobile Apps", "API Integration"],
    slideTitles: ["Custom Development", "Web & Mobile", "API Integration"],
    projectCounts: ["124 projects", "156 projects", "98 projects"]
  },
];

// Helper to flatten service data for all 9 slides
const allSlidesData = services.flatMap(service =>
  service.images.map((img, index) => ({
    image: img,
    serviceId: service.id,
    mainTitle: service.title,
    slideTitle: service.slideTitles[index],
    projectCount: service.projectCounts[index],
  }))
);

const Services = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const swiperRef = useRef(null);
  const particlesRef = useRef(null);
 

  // Register ScrollTrigger plugin
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    // Ensure the Swiper instance is available before creating the scroll-controlled animation
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper;
      const totalSlides = allSlidesData.length;
      
      // GSAP ScrollTrigger to control the Swiper's Cube Effect with SLOWER animation
      gsap.to(swiperRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=500%", // Increased from 300% to 500% for slower scrolling
          pin: true,
          scrub: 2, // Increased from 1 to 2 for slower, smoother scrubbing
          onUpdate: (self) => {
            const progress = self.progress;
            const targetIndex = Math.min(
              Math.floor(progress * (totalSlides - 1) + 0.05), // More precise targeting
              totalSlides - 1
            );

            if (swiperInstance.realIndex !== targetIndex) {
              // Increased slide transition speed from 800 to 1200 for slower animation
              swiperInstance.slideToLoop(targetIndex, 1200);
            }
          },
        },
      });
    }

    // Content animations
    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Swiper container animation with slower entrance
    gsap.fromTo('.swiper-container',
      { opacity: 0, x: 100, rotationY: 30 },
      {
        opacity: 1,
        x: 0,
        rotationY: 0,
        duration: 2, // Increased from 1.5 to 2 for slower animation
        ease: "power2.out", // Changed to power2 for smoother easing
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Title animation
    gsap.fromTo('.service-title',
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Description animation
    gsap.fromTo('.service-description',
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Button animation
    gsap.fromTo('.cta-button',
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Enhanced particle animation with slower movement
    if (particlesRef.current) {
      const particles = particlesRef.current.querySelectorAll('div');
      particles.forEach((particle, index) => {
        gsap.to(particle, {
          y: '+=300',
          x: index % 2 === 0 ? '+=80' : '-=80',
          rotation: 360,
          opacity: 0.8,
          duration: 3, // Increased from 2 to 3 for slower particle movement
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 2, // Increased scrub value for slower particle animation
          }
        });
      });
    }
    
    // Hover animations for buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, { 
          scale: 1.05, 
          duration: 0.3, 
          ease: "power2.out",
          backgroundColor: "#4F46E5",
          color: "white"
        });
      });
      button.addEventListener('mouseleave', () => {
        gsap.to(button, { 
          scale: 1, 
          duration: 0.3, 
          ease: "power2.out",
          backgroundColor: "white",
          color: "#111827"
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 relative overflow-hidden">
      {/* Particle Background */}
      <div ref={particlesRef} className="absolute inset-0 z-0">
        <div className="absolute w-2 h-2 bg-blue-400 rounded-full top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute w-3 h-3 bg-green-400 rounded-full top-1/3 right-1/4 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute w-2 h-2 bg-purple-400 rounded-full bottom-1/4 left-1/3 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute w-3 h-3 bg-yellow-400 rounded-full bottom-1/3 right-1/3 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute w-2 h-2 bg-red-400 rounded-full top-2/3 left-1/2 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <section className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen px-4 py-8 lg:px-16 lg:py-16">
        {/* Content Section */}
        <div ref={contentRef} className="text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Innovative Tech Solutions for Your Business
          </h1>
          <p className="service-description text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            We deliver cutting-edge technology services designed to transform your business operations and drive digital growth. Our solutions help you stay ahead in the competitive landscape with innovative approaches and reliable implementations.
          </p>
          <button className="cta-button bg-white text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/30">
            contact us
          </button>
        </div>

        {/* Swiper Section */}
        <div className="w-full max-w-md mx-auto lg:max-w-lg">
          <Swiper
            effect="cube"
            grabCursor={true}
            loop={true}
            speed={1200} // Increased from 0 to 1200 for slower cube transitions
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            modules={[EffectCube]}
            className="h-96 md:h-[500px] rounded-2xl shadow-2xl shadow-indigo-500/20"
            // Additional parameters for smoother, slower control
            touchRatio={0.7} // Reduced touch sensitivity for slower control
            resistanceRatio={0.7} // More resistance for slower movement
            longSwipesRatio={0.3} // Reduced long swipe ratio for more control
            followFinger={false} // Disable follow finger for programmatic control only
          >
            {allSlidesData.map((slide, index) => (
              <SwiperSlide key={index} className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <img
                  src={slide.image}
                  alt={slide.slideTitle}
                  className="w-full h-full object-cover transition-transform duration-1000" // Added transition for smoother image appearance
                />
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm font-semibold z-20 border border-white/20">
                  {slide.serviceId === "01" ? "Service 01" : 
                   slide.serviceId === "02" ? "Service 02" : "Service 03"}
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent text-white z-20 rounded-b-2xl">
                  <h3 className="text-2xl font-bold mb-2">{slide.slideTitle}</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {slide.mainTitle === "Immersive Tech Solutions" ? "Transform your digital presence with our cutting-edge VR and AR experiences." :
                     slide.mainTitle === "Data & Cloud Services" ? "Secure cloud infrastructure and advanced data analytics for business intelligence." :
                     "Tailored software solutions designed to meet your unique business requirements."}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span key={i}>
                          {i < 4.5 ? '★' : '½'}
                        </span>
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm">{slide.projectCount}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Services;