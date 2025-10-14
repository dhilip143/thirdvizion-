
// import React from "react";
// import { motion } from "framer-motion";
// import ContactIllustration from "/src/assets/HomeImages/CategoryImages/ContactIllustrator/Contactillustration.png";

// const text = "Scale Smarter With Remote Teams";

// const HeroDark = () => {
//   return (
//     <section className="relative ">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 min-h-screen px-6 pt-20">
//         {/* Left: Illustration */}
//         <div className="flex items-center justify-center">
//           <motion.img
//             src={ContactIllustration}
//             alt="Contact illustration"
//             className="w-[90%] max-w-xl object-contain drop-shadow-2xl"
//             animate={{ y: [0, -10, 0] }}
//             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//           />
//         </div>

//         {/* Right: Content */}
//         <div className="flex flex-col justify-center px-6 py-12 space-y-6 text-center md:text-left">
//           {/* Animated Heading */}
//           <motion.h1
//             className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight"
//             initial="hidden"
//             animate="visible"
//             variants={{
//               hidden: {},
//               visible: {
//                 transition: {
//                   staggerChildren: 0.04,
//                 },
//               },
//             }}
//           >
//             {text.split("").map((char, i) => (
//               <motion.span
//                 key={i}
//                 className={`${char === " "
//                     ? "inline-block w-2"
//                     : "bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 bg-clip-text text-transparent"
//                   }`}
//                 variants={{
//                   hidden: { opacity: 0, y: 20 },
//                   visible: { opacity: 1, y: 0 },
//                 }}
//               >
//                 {char}
//               </motion.span>
//             ))}
//           </motion.h1>

//           <p className="text-gray-300 text-sm max-w-lg mx-auto md:mx-0">
//             Collaborate asynchronously, streamline workflows, and manage global
//             teams with confidence. Our platform makes remote collaboration feel
//             natural, so your team stays productive, no matter where they are.
//           </p>

//           {/* ✨ Extra Content (Bullet Points) */}
//           <div className="flex flex-col gap-3 text-gray-400 max-w-md mx-auto md:mx-0">
//             <div className="flex flex-col md:flex-row items-center gap-2">
//               <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
//               <span>Real-time messaging & file sharing</span>
//             </div>
//             <div className="flex flex-col md:flex-row items-center gap-2">
//               <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
//               <span>Task management & progress tracking</span>
//             </div>
//             <div className="flex flex-col md:flex-row items-center gap-2">
//               <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
//               <span>Seamless integrations with your tools</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroDark;
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { motion } from "framer-motion";
// import threed from "/src/assets/home/3d.png"; // ✅ using the same image from About page
// import ContactIllustration from "/src/assets/HomeImages/CategoryImages/ContactIllustrator/Contactillustration.png";

// gsap.registerPlugin(ScrollTrigger);

// const text = "Scale Smarter With Remote Teams";

// export default function ContactHero() {
//   const headerRef = useRef(null);
//   const wrapperRef = useRef(null);
//   const imgHolderRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const header = headerRef.current;
//       const wrapper = wrapperRef.current;
//       const imgHolder = imgHolderRef.current;
//       if (!header || !wrapper || !imgHolder) return;

//       const contactText = header.querySelector(".contact-text");
//       const getText = header.querySelector(".get-text");
//       const touchText = header.querySelector(".touch-text");
//       const innerImg = imgHolder.querySelector("img");

//       ScrollTrigger.matchMedia({
//         // 💻 Desktop animation
//         "(min-width: 1024px)": () => {
//           gsap.to(contactText, {
//             y: -200,
//             opacity: 0,
//             scrollTrigger: {
//               trigger: wrapper,
//               start: "top top",
//               end: "+=150%",
//               scrub: true,
//             },
//           });

//           gsap.to(getText, {
//             x: -window.innerWidth * 1.5,
//             scale: 3,
//             opacity: 0,
//             scrollTrigger: {
//               trigger: wrapper,
//               start: "top top",
//               end: "+=150%",
//               scrub: true,
//             },
//           });

//           gsap.to(touchText, {
//             x: window.innerWidth * 1.5,
//             scale: 3,
//             opacity: 0,
//             scrollTrigger: {
//               trigger: wrapper,
//               start: "top top",
//               end: "+=150%",
//               scrub: true,
//             },
//           });

//           gsap.fromTo(
//             imgHolder,
//             {
//               scale: 0,
//               rotate: 30,
//               clipPath: "polygon(37.5% 20%, 62.5% 20%, 62.5% 80%, 37.5% 80%)",
//             },
//             {
//               scale: 1,
//               rotate: 0,
//               clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//               scrollTrigger: {
//                 trigger: wrapper,
//                 start: "top top",
//                 end: "+=200%",
//                 scrub: true,
//                 pin: imgHolder,
//                 anticipatePin: 1,
//               },
//             }
//           );

//           gsap.to(innerImg, {
//             scale: 0.8,
//             y: 60,
//             borderRadius: "5rem",
//             scrollTrigger: {
//               trigger: wrapper,
//               start: "80% bottom",
//               end: "bottom bottom",
//               scrub: true,
//             },
//           });
//         },

//         // 📱 Mobile animation
//         "(max-width: 1023px)": () => {
//           gsap.to(contactText, {
//             y: -200,
//             opacity: 0,
//             scrollTrigger: {
//               trigger: wrapper,
//               start: "top top",
//               end: "+=100%",
//               scrub: true,
//             },
//           });

//           gsap.to(getText, {
//             x: -window.innerWidth,
//             scale: 2,
//             opacity: 0,
//             scrollTrigger: {
//               trigger: wrapper,
//               start: "top top",
//               end: "+=100%",
//               scrub: true,
//             },
//           });

//           gsap.to(touchText, {
//             x: window.innerWidth,
//             scale: 2,
//             opacity: 0,
//             scrollTrigger: {
//               trigger: wrapper,
//               start: "top top",
//               end: "+=100%",
//               scrub: true,
//             },
//           });

//           gsap.fromTo(
//             imgHolder,
//             {
//               scale: 0,
//               rotate: 0,
//               clipPath: "polygon(40% 30%, 60% 30%, 60% 70%, 40% 70%)",
//             },
//             {
//               scale: 1,
//               rotate: 0,
//               clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//               scrollTrigger: {
//                 trigger: wrapper,
//                 start: "top top",
//                 end: "bottom center",
//                 scrub: true,
//                 pin: imgHolder,
//                 pinSpacing: true,
//                 anticipatePin: 1,
//               },
//             }
//           );

//           gsap.to(innerImg, {
//             scale: 0.9,
//             y: 30,
//             borderRadius: "2rem",
//             scrollTrigger: {
//               trigger: wrapper,
//               start: "top top",
//               end: "bottom bottom",
//               scrub: true,
//             },
//           });
//         },
//       });
//     }, wrapperRef);

//     const handleResize = () => ScrollTrigger.refresh();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       ctx.revert();
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   return (
//     <div className="relative w-full bg-black font-contrail overflow-hidden text-white">
//       {/* === Intro Scroll Animation === */}
//       <div
//         ref={headerRef}
//         className="fixed md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 flex flex-col justify-center items-center w-full z-30 pointer-events-none"
//         aria-hidden
//       >
//         <div className="contact-text text-md xl:text-2xl -mb-5 md:-mb-8 xl:-mb-10 font-medium text-center uppercase font-[Inter_Tight]">
//           Contact
//         </div>
//         <div className="flex gap-2 xl:gap-6 mt-4 font-[Inter_Tight]">
//           <div className="get-text text-4xl md:text-[5rem] xl:text-[12rem] font-medium text-center uppercase">
//             Get
//           </div>
//           <div className="touch-text text-4xl md:text-[5rem] xl:text-[12rem] font-medium text-center uppercase">
//             Touch
//           </div>
//         </div>
//       </div>

//       {/* Scroll wrapper */}
//       <div ref={wrapperRef} className="w-full relative min-h-[300vh]">
//         <div className="sticky top-0 w-full h-screen z-10">
//           <div
//             ref={imgHolderRef}
//             className="sticky top-0 w-full h-screen flex items-center justify-center [clip-path:polygon(37.5%_20%,62.5%_20%,62.5%_80%,37.5%_80%)] md:rotate-[30deg]"
//           >
//             <img
//               src={threed}
//               alt="Contact Visual"
//               className="w-full h-[50vh] md:h-[60vh] lg:h-[80vh] xl:h-full object-cover scale-[2]"
//             />
//           </div>
//         </div>
//       </div>

//       {/* === Hero Section === */}
//       <section className="relative bg-black z-20">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 min-h-screen px-6 pt-20">
//           {/* Left: Illustration */}
//           <div className="flex items-center justify-center">
//             <motion.img
//               src={ContactIllustration}
//               alt="Contact illustration"
//               className="w-[90%] max-w-xl object-contain drop-shadow-2xl"
//               animate={{ y: [0, -10, 0] }}
//               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//             />
//           </div>

//           {/* Right: Text */}
//           <div className="flex flex-col justify-center px-6 py-12 space-y-6 text-center md:text-left">
//             <motion.h1
//               className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight"
//               initial="hidden"
//               animate="visible"
//               variants={{
//                 hidden: {},
//                 visible: { transition: { staggerChildren: 0.04 } },
//               }}
//             >
//               {text.split("").map((char, i) => (
//                 <motion.span
//                   key={i}
//                   className={`${
//                     char === " "
//                       ? "inline-block w-2"
//                       : "bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 bg-clip-text text-transparent"
//                   }`}
//                   variants={{
//                     hidden: { opacity: 0, y: 20 },
//                     visible: { opacity: 1, y: 0 },
//                   }}
//                 >
//                   {char}
//                 </motion.span>
//               ))}
//             </motion.h1>

//             <p className="text-gray-300 text-sm max-w-lg mx-auto md:mx-0">
//               Collaborate asynchronously, streamline workflows, and manage global
//               teams with confidence. Our platform makes remote collaboration feel
//               natural, so your team stays productive, no matter where they are.
//             </p>

//             <div className="flex flex-col gap-3 text-gray-400 max-w-md mx-auto md:mx-0">
//               <div className="flex flex-col md:flex-row items-center gap-2">
//                 <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
//                 <span>Real-time messaging & file sharing</span>
//               </div>
//               <div className="flex flex-col md:flex-row items-center gap-2">
//                 <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
//                 <span>Task management & progress tracking</span>
//               </div>
//               <div className="flex flex-col md:flex-row items-center gap-2">
//                 <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
//                 <span>Seamless integrations with your tools</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { motion } from "framer-motion";
// import ContactHeroimg from "/src/assets/home/ContactHeroimg.png";
// // import ContactIllustration from "/src/assets/HomeImages/CategoryImages/ContactIllustrator/Contactillustration.png";

// gsap.registerPlugin(ScrollTrigger);

// // const text = "Scale Smarter With Remote Teams";

// export default function ContactHero() {
//   const headerRef = useRef(null);
//   const wrapperRef = useRef(null);
//   const imgHolderRef = useRef(null);
//   const bgRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const header = headerRef.current;
//       const wrapper = wrapperRef.current;
//       const imgHolder = imgHolderRef.current;
//       const bg = bgRef.current;
//       if (!header || !wrapper || !imgHolder) return;

//       const contactText = header.querySelector(".contact-text");
//       const getText = header.querySelector(".get-text");
//       const touchText = header.querySelector(".touch-text");
//       const innerImg = imgHolder.querySelector("img");

//       ScrollTrigger.matchMedia({
//         "(min-width: 1024px)": () => {
//           // 💫 Animate background glow
//           gsap.to(bg, {
//             background:
//               "radial-gradient(circle at 50% 50%, rgba(255,215,0,0.2), rgba(0,0,0,1))",
//             scale: 1.2,
//             opacity: 0.8,
//             scrollTrigger: {
//               trigger: wrapper,
//               start: "top top",
//               end: "+=200%",
//               scrub: true,
//             },
//           });

//           // ✨ Contact word rotates and fades upward
//           gsap.to(contactText, {
//             y: -200,
//             rotate: -20,
//             opacity: 0,
//             scrollTrigger: {
//               trigger: wrapper,
//               start: "top top",
//               end: "+=120%",
//               scrub: true,
//             },
//           });

//           // ⚡ "Get" moves left and expands
//           gsap.to(getText, {
//             x: -window.innerWidth * 1.2,
//             scale: 2.5,
//             rotation: -10,
//             opacity: 0,
//             scrollTrigger: {
//               trigger: wrapper,
//               start: "top top",
//               end: "+=150%",
//               scrub: true,
//             },
//           });

//           // ⚡ "in Touch" moves right and expands
//           gsap.to(touchText, {
//             x: window.innerWidth * 1.2,
//             scale: 2.5,
//             rotation: 10,
//             opacity: 0,
//             scrollTrigger: {
//               trigger: wrapper,
//               start: "top top",
//               end: "+=150%",
//               scrub: true,
//             },
//           });

//           // 🌀 3D image morph and zoom
//           gsap.fromTo(
//             imgHolder,
//             {
//               scale: 0.4,
//               rotate: 20,
//               filter: "blur(10px)",
//               clipPath:
//                 "polygon(40% 30%, 60% 30%, 60% 70%, 40% 70%)",
//             },
//             {
//               scale: 1,
//               rotate: 0,
//               filter: "blur(0px)",
//               clipPath:
//                 "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//               scrollTrigger: {
//                 trigger: wrapper,
//                 start: "top top",
//                 end: "+=200%",
//                 scrub: true,
//                 pin: imgHolder,
//                 anticipatePin: 1,
//               },
//             }
//           );

//           // 🪄 Image depth motion
//           gsap.to(innerImg, {
//             scale: 0.85,
//             y: 100,
//             borderRadius: "6rem",
//             scrollTrigger: {
//               trigger: wrapper,
//               start: "70% bottom",
//               end: "bottom top",
//               scrub: true,
//             },
//           });
//         },

//         // 📱 Mobile animation
//         "(max-width: 1023px)": () => {
//           gsap.to(contactText, {
//             y: -150,
//             opacity: 0,
//             scrollTrigger: {
//               trigger: wrapper,
//               start: "top top",
//               end: "+=100%",
//               scrub: true,
//             },
//           });

//           gsap.to(getText, {
//             x: -window.innerWidth,
//             scale: 1.8,
//             opacity: 0,
//             scrollTrigger: {
//               trigger: wrapper,
//               start: "top top",
//               end: "+=100%",
//               scrub: true,
//             },
//           });

//           gsap.to(touchText, {
//             x: window.innerWidth,
//             scale: 1.8,
//             opacity: 0,
//             scrollTrigger: {
//               trigger: wrapper,
//               start: "top top",
//               end: "+=100%",
//               scrub: true,
//             },
//           });

//           gsap.fromTo(
//             imgHolder,
//             {
//               scale: 0.6,
//               rotate: 0,
//             },
//             {
//               scale: 1,
//               rotate: 0,
//               scrollTrigger: {
//                 trigger: wrapper,
//                 start: "top top",
//                 end: "+=150%",
//                 scrub: true,
//                 pin: imgHolder,
//                 anticipatePin: 1,
//               },
//             }
//           );
//         },
//       });
//     }, wrapperRef);

//     const handleResize = () => ScrollTrigger.refresh();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       ctx.revert();
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   return (
//     <div className="relative w-full bg-black font-contrail overflow-hidden text-white">
//       {/* Glowing animated background */}
//       <div
//         ref={bgRef}
//         className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-70 transition-all duration-1000"
//       ></div>

//       {/* Floating Contact + Get in Touch */}
//       <div
//         ref={headerRef}
//         className="fixed md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 flex flex-col justify-center items-center w-full z-30 pointer-events-none"
//       >
//         <motion.div
//           className="contact-text text-md xl:text-2xl mb-4 font-semibold text-center uppercase font-[Inter_Tight]"
//           // animate={{ opacity: [1, 0.8, 1], y: [0, -5, 0] }}
//           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//         >
//           Contact
//         </motion.div>

//         <div className="flex gap-3 xl:gap-8 mt-2 font-[Inter_Tight]">
//           <motion.div
//             className="get-text text-5xl md:text-[6rem] xl:text-[12rem] font-bold uppercase bg-white bg-clip-text text-transparent"
//             // animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
//             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//           >
//             Get
//           </motion.div>
//           <motion.div
//             className="touch-text text-5xl md:text-[6rem] xl:text-[12rem] font-bold uppercase bg-white bg-clip-text text-transparent"
//             // animate={{ y: [0, 10, 0], scale: [1, 1.05, 1] }}
//             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//           >
//             in Touch
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll wrapper */}
//       <div ref={wrapperRef} className="w-full relative min-h-[300vh]">
//         <div className="sticky top-0 w-full h-screen z-10">
//           <div
//             ref={imgHolderRef}
//             className="sticky top-0 w-full h-screen flex items-center justify-center"
//           >
//             <img
//               src={ContactHeroimg}
//               alt="Contact Visual"
//               className="w-full h-[50vh] md:h-[70vh] lg:h-[80vh] object-cover"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Hero Content */}
      
//     </div>
//   );
// }
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import ContactHeroimg from "/src/assets/home/ContactHeroimg.png";

gsap.registerPlugin(ScrollTrigger);

export default function ContactHero() {
  const headerRef = useRef(null);
  const wrapperRef = useRef(null);
  const imgHolderRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const header = headerRef.current;
      const wrapper = wrapperRef.current;
      const imgHolder = imgHolderRef.current;
      if (!header || !wrapper || !imgHolder) return;

      const contactText = header.querySelector(".contact-text");
      const getText = header.querySelector(".get-text");
      const touchText = header.querySelector(".touch-text");
      const innerImg = imgHolder.querySelector("img");

      // Responsive Animations
      ScrollTrigger.matchMedia({
        // 🌍 Desktop Animations
        "(min-width: 1024px)": () => {
          // ✨ Fade out texts
          gsap.to(contactText, {
            y: -200,
            opacity: 0,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: wrapper,
              start: "top top",
              end: "+=150%",
              scrub: true,
            },
          });

          gsap.to(getText, {
            x: -window.innerWidth * 1.5,
            scale: 3,
            opacity: 0,
            rotation: -10,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: wrapper,
              start: "top top",
              end: "+=150%",
              scrub: true,
            },
          });

          gsap.to(touchText, {
            x: window.innerWidth * 1.5,
            scale: 3,
            opacity: 0,
            rotation: 10,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: wrapper,
              start: "top top",
              end: "+=150%",
              scrub: true,
            },
          });

          // 🌀 Image scroll reveal (based on your AboutHero)
          gsap.fromTo(
            imgHolder,
            {
              scale: 0,
              rotate: 30,
              clipPath: "polygon(40% 30%, 60% 30%, 60% 70%, 40% 70%)",
              opacity: 0,
            },
            {
              scale: 1,
              rotate: 0,
              opacity: 1,
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: wrapper,
                start: "top top",
                end: "+=200%",
                scrub: true,
                pin: imgHolder,
                anticipatePin: 1,
              },
            }
          );

          // 🎬 Subtle depth effect for image
          gsap.to(innerImg, {
            scale: 0.85,
            y: 80,
            borderRadius: "5rem",
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: wrapper,
              start: "80% bottom",
              end: "bottom top",
              scrub: true,
            },
          });

          // 🌈 Background glow movement
          gsap.to(bgRef.current, {
            background:
              "radial-gradient(circle at 50% 50%, rgba(255,215,0,0.25), rgba(0,0,0,1))",
            scale: 1.3,
            opacity: 0.8,
            scrollTrigger: {
              trigger: wrapper,
              start: "top top",
              end: "+=200%",
              scrub: true,
            },
          });
        },

        // 📱 Mobile Animations
        "(max-width: 1023px)": () => {
          gsap.to(contactText, {
            y: -150,
            opacity: 0,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: wrapper,
              start: "top top",
              end: "+=100%",
              scrub: true,
            },
          });

          gsap.to(getText, {
            x: -window.innerWidth,
            scale: 2,
            opacity: 0,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: wrapper,
              start: "top top",
              end: "+=100%",
              scrub: true,
            },
          });

          gsap.to(touchText, {
            x: window.innerWidth,
            scale: 2,
            opacity: 0,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: wrapper,
              start: "top top",
              end: "+=100%",
              scrub: true,
            },
          });

          // 🌀 Mobile image reveal
          gsap.fromTo(
            imgHolder,
            {
              scale: 0,
              rotate: 0,
              clipPath: "polygon(40% 30%, 60% 30%, 60% 70%, 40% 70%)",
              opacity: 0,
            },
            {
              scale: 1,
              rotate: 0,
              opacity: 1,
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: wrapper,
                start: "top top",
                end: "bottom center",
                scrub: true,
                pin: imgHolder,
                anticipatePin: 1,
              },
            }
          );

          gsap.to(innerImg, {
            scale: 0.9,
            y: 30,
            borderRadius: "2rem",
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: wrapper,
              start: "top top",
              end: "bottom bottom",
              scrub: true,
            },
          });
        },
      });
    }, wrapperRef);

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black font-contrail overflow-hidden text-white">
      {/* 🌌 Animated Glow Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-70 transition-all duration-1000"
      ></div>

      {/* 📝 Header Text */}
      <div
        ref={headerRef}
        className="fixed md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 flex flex-col justify-center items-center w-full z-30 pointer-events-none"
      >
        <motion.div
          className="contact-text text-md xl:text-2xl mb-4 font-semibold text-center uppercase font-[Inter_Tight]"
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          Contact
        </motion.div>

        <div className="flex gap-3 xl:gap-8 mt-2 font-[Inter_Tight]">
          <motion.div
            className="get-text text-5xl md:text-[6rem] xl:text-[12rem] font-bold uppercase bg-white bg-clip-text text-transparent"
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            Get
          </motion.div>
          <motion.div
            className="touch-text text-5xl md:text-[6rem] xl:text-[12rem] font-bold uppercase bg-white bg-clip-text text-transparent"
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            in Touch
          </motion.div>
        </div>
      </div>

      {/* 🌠 Scroll Wrapper */}
      <div ref={wrapperRef} className="w-full relative min-h-[300vh]">
        <div className="sticky top-0 w-full h-screen z-10">
          <div
            ref={imgHolderRef}
            className="sticky top-0 w-full h-screen bg-black flex items-center justify-center [clip-path:polygon(40%_30%,60%_30%,60%_70%,40%_70%)]"
          >
            <img
              src={ContactHeroimg}
              alt="Contact Visual"
              className="w-full h-[50vh] md:h-[70vh] lg:h-[80vh] object-cover scale-[2]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
