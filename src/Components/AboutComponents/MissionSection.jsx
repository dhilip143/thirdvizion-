// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { motion } from "framer-motion";

// import Logo from "/src/assets/New_Logo.png"

// gsap.registerPlugin(ScrollTrigger);

// export default function Mission() {
//   const sectionRef = useRef(null);
//   const contentRef = useRef(null);
//   const canvasWrapperRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {

//       gsap.from(contentRef.current.querySelectorAll(".fade-up"), {
//         y: 30,
//         opacity: 0,
//         duration: 0.9,
//         stagger: 0.12,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 75%",
//         },
//       });

//       gsap.fromTo(
//         canvasWrapperRef.current,
//         { scale: 0.88, opacity: 0 },
//         {
//           scale: 1,
//           opacity: 1,
//           duration: 1.0,
//           ease: "elastic.out(1, 0.6)",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 80%",
//           },
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="w-full min-h-screen flex items-center justify-center bg-black text-white py-20 px-6"
//     >
//       <div className="max-w-7xl w-full flex flex-col md:flex-row  gap-10 items-center">
//         {/* Left: Text content */}
//         <div className="w-full space-y-6 px-2 md:px-6">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ amount: 0.3 }}
//             className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-extrabold leading-tight">
//             Our Mission & Vision
//           </motion.h2>

//           <div ref={contentRef} className="text-gray-300 space-y-4">
//             <motion.p
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.6 }}
//               viewport={{ amount: 0.3 }}
//               className="fade-up text-sm lg:text-lg xl:text-xl">
//               We are a service company that blends creativity, technology and
//               strategy — delivering immersive digital experiences that shift
//               perspectives. We call it{" "}
//               <span className="font-semibold text-white">ThirdVizion</span>.
//             </motion.p>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div className="fade-up bg-gray-900/40 md:p-4 rounded-2xl">
//                 <motion.h4
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3, duration: 0.6 }}
//                   viewport={{ amount: 0.3 }}
//                   className="text-sm lg:text-lg xl:text-xl font-semibold uppercase text-emerald-300">
//                   Vision
//                 </motion.h4>
//                 <motion.p
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.4, duration: 0.6 }}
//                   viewport={{ amount: 0.3 }}
//                   className="mt-2 text-sm xl:text-lg text-gray-300">
//                   To be the third eye for brands — revealing new angles through
//                   bold design and 3D-driven storytelling.
//                 </motion.p>
//               </div>

//               <div className="fade-up bg-gray-900/40 md:p-4 rounded-2xl">
//                 <motion.h4
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.5, duration: 0.6 }}
//                   viewport={{ amount: 0.3 }}
//                   className="text-sm lg:text-lg xl:text-xl font-semibold uppercase text-amber-300">
//                   Mission
//                 </motion.h4>
//                 <motion.p
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.6, duration: 0.6 }}
//                   viewport={{ amount: 0.3 }}
//                   className="mt-2 text-sm xl:text-lg text-gray-300">
//                   Deliver high-impact digital solutions using React, GSAP & WebGL
//                   to make complex ideas tangible and playful.
//                 </motion.p>
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* Right*/}
//         <div className="w-full md:w-1/2 flex items-center justify-center">
//           <img src={Logo} alt="" className="w-full" />
//         </div>
//       </div>
//     </section>
//   );
// }
import React from 'react';
import './Mission.css';

const ServicesVisionMission = () => {
  return (
    <section className="min-h-screen bg-black-900 text-center py-20 px-8 xl:px-0 flex flex-col justify-center">
      <span className="text-gray-400 text-lg max-w-lg mx-auto mb-2 capitalize flex items-center justify-center">
        what we're offering 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-indigo-600 ml-3 w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>
      </span>
      
      <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-semibold max-w-3xl mx-auto mb-16 leading-snug">
        Services Built Specifically for your Business
      </h1>
      
      <div className="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
        {/* UI/UX Creative Design - Original First Card */}
        <div className="card bg-black-800 p-10 relative">
          <div className="circle ux-design-image"></div>
          <div className="relative lg:pr-52">
            <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">
             OUR <br />VISION 
            </h2>
            <p className="text-gray-400">
           To become a global leader in creative innovation and digital transformation.

We envision a future where technology and imagination work hand in hand to shape possibilities.


            </p>
          </div>
        </div>

        {/* Visual Graphic Design - Original Second Card */}
        <div className="card bg-black-800 p-10 relative">
          <div className="circle graphic-design-image"></div>
          <div className="relative lg:pl-48">
            <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">
             OUR <br /> MISSION
            </h2>
            <p className="text-gray-400">
             To empower brands with innovative digital solutions that blend creativity and technology.

We aim to transform ideas into immersive experiences that inspire and engage.
            </p>
          </div>
        </div>

        {/* Our Vision - New Third Card */}
        <div className="card bg-black-800 p-10 relative">
          <div className="circle vision-image"></div>
          <div className="relative lg:pr-44">
            <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">
             OUR <br />VISION
            </h2>
            <p className="text-gray-400">
              To be the leading innovator in our industry, creating sustainable solutions 
              that transform businesses and enrich communities worldwide through cutting-edge 
              technology and forward-thinking strategies.
            </p>
          </div>
        </div>

        {/* Our Mission - New Fourth Card */}
        <div className="card bg-black-800 p-10 relative">
          <div className="circle mission-image"></div>
          <div className="relative lg:pl-48">
            <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">
              OUR<br />MISSION
            </h2>
            <p className="text-gray-400">
              To empower businesses with innovative solutions that drive growth, foster 
              meaningful connections, and create lasting value for all stakeholders through 
              excellence, integrity, and continuous improvement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesVisionMission;
