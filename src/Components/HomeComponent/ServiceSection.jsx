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
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';

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

const services= [
  { 
    id: "01", 
    title: "Immersive Tech Solutions", 
    description: "Cutting-edge virtual and augmented reality experiences that transform how you interact with digital content.",
    images: [service1a, service1b, service1c],
    features: ["VR/AR Development", "3D Modeling", "Interactive Experiences"]
  },
  { 
    id: "02", 
    title: "Data & Cloud Services", 
    description: "Secure cloud infrastructure and data analytics solutions to drive your business intelligence and growth.",
    images: [service2a, service2b, service2c],
    features: ["Cloud Migration", "Data Analytics", "AI Integration"]
  },
  { 
    id: "03", 
    title: "Custom Development", 
    description: "Tailored software solutions and web applications designed to meet your unique business requirements.",
    images: [service3a, service3b, service3c],
    features: ["Web Development", "Mobile Apps", "API Integration"]
  },
];

const Services = () => {
  const contentRef = useRef(null);
  const swiperRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    // GSAP animations
    const tl = gsap.timeline();
    
    tl.fromTo(contentRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
    
    tl.fromTo('.swiper-slide', 
      { opacity: 0, scale: 0.8 }, 
      { opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)" }, 
      "-=0.5"
    );

    // Particle animation
    if (particlesRef.current) {
      gsap.fromTo(particlesRef.current, 
        { opacity: 0 }, 
        { opacity: 1, duration: 1.5, ease: "power2.inOut" }
      );
    }

    // Hover animations for buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, { scale: 1.05, duration: 0.3, ease: "power2.out" });
      });
      button.addEventListener('mouseleave', () => {
        gsap.to(button, { scale: 1, duration: 0.3, ease: "power2.out" });
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
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            We deliver cutting-edge technology services designed to transform your business operations and drive digital growth. Our solutions help you stay ahead in the competitive landscape with innovative approaches and reliable implementations.
          </p>
          <button className="bg-white text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:bg-indigo-500 hover:text-white transform hover:scale-105">
            Explore Services
          </button>
        </div>

        {/* Swiper Section */}
        <div className="w-full max-w-md mx-auto lg:max-w-lg">
          <Swiper
            ref={swiperRef}
            effect="cube"
            grabCursor={true}
            loop={true}
            speed={1000}
            cubeEffect={{
              shadow: false,
              slideShadows: true,
              shadowOffset: 10,
              shadowScale: 0.94,
            }}
            autoplay={{
              delay: 2600,
              pauseOnMouseEnter: true,
            }}
            modules={[EffectCube, Autoplay]}
            className="h-96 md:h-[490px] rounded-2xl shadow-2xl"
          >
            {/* Service 1 Slides */}
            <SwiperSlide className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <img 
                src={service1a} 
                alt="Immersive Tech Solutions" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-black/30 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm font-semibold z-20">
                Service 01
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white z-20 rounded-b-2xl">
                <h3 className="text-xl font-bold mb-2">Immersive Tech Solutions</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Transform your digital presence with our cutting-edge VR and AR experiences.
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★½</span>
                  </div>
                  <span className="text-gray-400 text-sm">45 projects</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <img 
                src={service1b} 
                alt="VR Development" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-black/30 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm font-semibold z-20">
                VR/AR Tech
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white z-20 rounded-b-2xl">
                <h3 className="text-xl font-bold mb-2">Virtual Reality Development</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Create immersive virtual environments that engage and captivate your audience.
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <span className="text-gray-400 text-sm">32 projects</span>
                </div>
              </div>
            </SwiperSlide>

            {/* Service 2 Slides */}
            <SwiperSlide className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <img 
                src={service2a} 
                alt="Data & Cloud Services" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-md rounded-full px-4 py-2 text-gray-900 text-sm font-semibold z-20">
                Service 02
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white z-20 rounded-b-2xl">
                <h3 className="text-xl font-bold mb-2">Data & Cloud Services</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Secure cloud infrastructure and advanced data analytics for business intelligence.
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★½</span>
                  </div>
                  <span className="text-gray-400 text-sm">67 projects</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <img 
                src={service2b} 
                alt="Cloud Infrastructure" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-md rounded-full px-4 py-2 text-gray-900 text-sm font-semibold z-20">
                Cloud Solutions
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white z-20 rounded-b-2xl">
                <h3 className="text-xl font-bold mb-2">Cloud Infrastructure</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Scalable and secure cloud solutions tailored to your business needs.
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>☆</span>
                  </div>
                  <span className="text-gray-400 text-sm">89 projects</span>
                </div>
              </div>
            </SwiperSlide>

            {/* Service 3 Slides */}
            <SwiperSlide className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <img 
                src={service3a} 
                alt="Custom Development" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-black/30 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm font-semibold z-20">
                Service 03
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white z-20 rounded-b-2xl">
                <h3 className="text-xl font-bold mb-2">Custom Development</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Tailored software solutions designed to meet your unique business requirements.
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★½</span>
                  </div>
                  <span className="text-gray-400 text-sm">124 projects</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <img 
                src={service3b} 
                alt="Web Development" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-black/30 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm font-semibold z-20">
                Web & Mobile
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white z-20 rounded-b-2xl">
                <h3 className="text-xl font-bold mb-2">Web & Mobile Development</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Responsive web applications and mobile solutions for modern businesses.
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <span className="text-gray-400 text-sm">156 projects</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Services;
