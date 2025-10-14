// // src/Components/HomeComponent/OurStory.jsx
// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const milestones = [
//   {
//     date: "Oct 14, 2024",
//     title: "Our Beginning",
//     description:
//       "Thirdvizion was founded with a vision to revolutionize immersive tech and IT solutions.",
//   },
//   {
//     date: "2024 - 2025",
//     title: "Key Achievements",
//     description:
//       "Completed 5 high-level enterprise projects and 10 low-level projects for startups & SMEs.",
//   },
//   {
//     date: "2025",
//     title: "Expanding Horizons",
//     description:
//       "Providing cutting-edge services in AR/VR, Game Development, Web Development, CRM, Data & Cloud Solutions.",
//   },
//   {
//     date: "Future",
//     title: "The Road Ahead",
//     description:
//       "We aim to become a global tech leader, delivering next-gen solutions for enterprises worldwide.",
//   },
// ];

// export default function JourneySection() {
//   const containerRef = useRef(null);
//   const scrollWrapperRef = useRef(null);
//   const itemsRef = useRef([]);
//   const pathRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     const scrollWrapper = scrollWrapperRef.current;
//     const path = pathRef.current;
//     const sections = itemsRef.current;

//     const totalScrollWidth = scrollWrapper.scrollWidth;
//     const viewportWidth = window.innerWidth;

//     const scrollDistance = totalScrollWidth - viewportWidth;
//     container.style.height = `${scrollDistance}px`;

//     // Horizontal scroll
//     gsap.to(scrollWrapper, {
//       x: () => `-${scrollDistance}px`,
//       ease: "none",
//       scrollTrigger: {
//         trigger: container,
//         start: "top top",
//         end: () => `+=${scrollDistance}`,
//         scrub: 1,
//         pin: true,
//         anticipatePin: 1,
//       },
//     });

//     // Animate milestones
//     sections.forEach((el) => {
//       gsap.fromTo(
//         el,
//         { y: 80, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: el,
//             start: "left center",
//             scrub: true,
//           },
//         }
//       );
//     });

//     // Animate SVG path drawing
//     const pathLength = path.getTotalLength();
//     gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });

//     gsap.to(path, {
//       strokeDashoffset: 0,
//       ease: "none",
//       scrollTrigger: {
//         trigger: container,
//         start: "top top",
//         end: () => `+=${scrollDistance}`,
//         scrub: 1,
//       },
//     });
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="relative w-full bg-black overflow-hidden"
//     >
//       {/* Heading */}
//       <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-600 to-yellow-400 z-20 absolute top-10 left-1/2 transform -translate-x-1/2">
//         Our Journey
//       </h2>

//       {/* SVG Path line above milestones */}
//       <svg
//         className="absolute top-32 left-0 z-10"
//         width="4000"
//         height="120"
//         viewBox="0 0 4000 120"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           ref={pathRef}
//           d="M 50 60 Q 300 10, 600 60 T 1200 60 T 1800 60 T 2400 60 T 3000 60 T 3600 60"
//           stroke="url(#gradLine)"
//           strokeWidth="4"
//           fill="none"
//         />
//         <defs>
//           <linearGradient id="gradLine" x1="0" y1="0" x2="4000" y2="0">
//             <stop offset="0%" stopColor="#FF9900" />
//             <stop offset="50%" stopColor="#FF1E56" />
//             <stop offset="100%" stopColor="#FFD700" />
//           </linearGradient>
//         </defs>
//       </svg>

//       {/* Scroll Wrapper */}
//       <div
//         ref={scrollWrapperRef}
//         className="flex items-center space-x-40 px-20 py-56 absolute top-0 left-0"
//       >
//         {milestones.map((milestone, index) => (
//           <div
//             key={index}
//             ref={(el) => (itemsRef.current[index] = el)}
//             className="relative flex flex-col items-center text-center w-80 md:w-96"
//           >
//             {/* Timeline Dot */}
//             <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 shadow-lg shadow-orange-500/40 flex items-center justify-center animate-pulse relative z-20">
//               <div className="w-3 h-3 bg-white rounded-full"></div>
//             </div>

//             {/* Content */}
//             <h3 className="mt-6 text-2xl md:text-3xl font-bold text-white">
//               {milestone.title}
//             </h3>
//             <span className="text-sm mt-1 text-orange-400">
//               {milestone.date}
//             </span>
//             <p className="mt-4 text-gray-300 leading-relaxed">
//               {milestone.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { motion } from "framer-motion";

// gsap.registerPlugin(ScrollTrigger);

// const milestones = [
//   { date: "Oct 14, 2024", title: "Our Beginning", description: "Thirdvizion was founded with a vision to revolutionize immersive tech and IT solutions." },
//   { date: "2024 - 2025", title: "Key Achievements", description: "Completed 5 high-level enterprise projects and 10 low-level projects for startups & SMEs." },
//   { date: "2025", title: "Expanding Horizons", description: "Providing cutting-edge services in AR/VR, Game Development, Web Development, CRM, Data & Cloud Solutions." },
//   { date: "Future", title: "The Road Ahead", description: "We aim to become a global tech leader, delivering next-gen solutions for enterprises worldwide." },
// ];

// export default function JourneySection() {
//   const circleRefs = useRef([]);
//   const itemsRef = useRef([]);

//   useEffect(() => {
//     circleRefs.current.forEach((circle, index) => {
//       const length = circle.getTotalLength();
//       gsap.set(circle, { strokeDasharray: length, strokeDashoffset: length });

//       gsap.to(circle, {
//         strokeDashoffset: 0,
//         scrollTrigger: {
//           trigger: itemsRef.current[index],
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//         duration: 3,
//         ease: "power2.out",
//       });
//     });

//     itemsRef.current.forEach((el) => {
//       gsap.fromTo(
//         el,
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 2,
//           delay: 0.2,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: el,
//             start: "top 75%",
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <section className="relative w-full bg-black py-24">
//       {/* Heading */}
//       <motion.h2
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ amount: 0.3 }}
//         className="text-4xl md:text-5xl font-extrabold text-white text-center mb-20">
//         Our Journey
//       </motion.h2>

//       {/* Timeline */}
//       <div className="relative max-w-4xl mx-auto">
//         {/* Vertical Line */}
//         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-orange-500 to-pink-600 h-full"></div>

//         {/* Cards */}
//         <div className="space-y-20 lg:space-y-20 xl:space-y-28 px-10">
//           {milestones.map((milestone, index) => (
//             <div
//               key={index}
//               ref={(el) => (itemsRef.current[index] = el)}
//               className={`relative flex flex-col md:flex-row items-center md:items-start ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//                 }`}
//             >
//               {/* Circle with stroke animation */}
//               <svg
//                 className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//                 width="80"
//                 height="80"
//                 viewBox="0 0 80 80"
//                 fill="none"
//               >
//                 <circle
//                   ref={(el) => (circleRefs.current[index] = el)}
//                   cx="40"
//                   cy="40"
//                   r="36"
//                   stroke="url(#grad)"
//                   strokeWidth="4"
//                   fill="none"
//                 />
//                 <defs>
//                   <linearGradient id="grad" x1="0" y1="0" x2="80" y2="0">
//                     <stop offset="0%" stopColor="#FF9900" />
//                     <stop offset="50%" stopColor="#FF1E56" />
//                     <stop offset="100%" stopColor="#FFD700" />
//                   </linearGradient>
//                 </defs>
//               </svg>

//               {/* Card Content */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ amount: 0.3 }}
//                 className={`bg-gray-900 p-6 rounded-2xl shadow-lg z-20 w-72 md:w-80 lg:w-96 ${index % 2 === 0 ? "md:ml-5 " : "md:mr-5"
//                   }`}
//               >
//                 <h3 className="text-2xl font-bold text-white">{milestone.title}</h3>
//                 <span className="text-sm text-orange-400">{milestone.date}</span>
//                 <p className="mt-3 text-gray-300 leading-relaxed">
//                   {milestone.description}
//                 </p>
//               </motion.div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    date: "2024",
    title: "Company Launch",
    description:
      "Thirdvizion officially launched, bringing together a passionate team of developers, designers, and innovators to build futuristic digital solutions.",
  },
  {
    date: "2024 - 2025",
    title: "Successful Deliveries",
    description:
      "Delivered 15+ projects across Web, AR/VR, Game, and Cloud solutions — earning recognition for reliability, creativity, and excellence.",
  },
  {
    date: "2025",
    title: "Industry Recognition",
    description:
      "Recognized as one of the fastest-growing tech startups in immersive technology and enterprise software development.",
  },
  {
    date: "Future Goals",
    title: "Shaping Tomorrow",
    description:
      "Aiming to expand globally, innovate continuously, and empower businesses with intelligent, experience-driven technology solutions.",
  },
];

export default function AchievementsSection() {
  const circleRefs = useRef([]);
  const itemsRef = useRef([]);

  useEffect(() => {
    circleRefs.current.forEach((circle, index) => {
      const length = circle.getTotalLength();
      gsap.set(circle, { strokeDasharray: length, strokeDashoffset: length });

      gsap.to(circle, {
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: itemsRef.current[index],
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        duration: 3,
        ease: "power2.out",
      });
    });

    itemsRef.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative w-full bg-black py-24">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.3 }}
        className="text-4xl md:text-5xl font-extrabold text-white text-center mb-20"
      >
        Our Achievements
      </motion.h2>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-orange-500 to-pink-600 h-full"></div>

        {/* Cards */}
        <div className="space-y-20 lg:space-y-20 xl:space-y-28 px-10">
          {achievements.map((item, index) => (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className={`relative flex flex-col md:flex-row items-center md:items-start ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Circle Animation */}
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
              >
                <circle
                  ref={(el) => (circleRefs.current[index] = el)}
                  cx="40"
                  cy="40"
                  r="36"
                  stroke="url(#grad)"
                  strokeWidth="4"
                  fill="none"
                />
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="80" y2="0">
                    <stop offset="0%" stopColor="#FF9900" />
                    <stop offset="50%" stopColor="#FF1E56" />
                    <stop offset="100%" stopColor="#FFD700" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Card Content */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ amount: 0.3 }}
                className={`bg-gray-900 p-6 rounded-2xl shadow-lg z-20 w-72 md:w-80 lg:w-96 ${
                  index % 2 === 0 ? "md:ml-5 " : "md:mr-5"
                }`}
              >
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <span className="text-sm text-orange-400">{item.date}</span>
                <p className="mt-3 text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
