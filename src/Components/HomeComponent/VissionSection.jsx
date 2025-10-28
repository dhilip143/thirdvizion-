// // src/Components/HomeComponent/VissionSection.jsx
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const VisionMission = () => {
//   const sectionRef = useRef(null);
//   const linesContainerRef = useRef(null);
//   const lineRefs = useRef([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Create master timeline for scroll-triggered animation
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "+=4000", // Extended scroll for cinematic flow
//           pin: true, // keep background static
//           scrub: 1.5, // smooth scroll syncing
//           anticipatePin: 1,
//         },
//       });

//       // Animate each line one by one sequentially
//       lineRefs.current.forEach((el, i) => {
//         if (!el) return;

//         // Small animation variations
//         const animations = [
//           { opacity: 0, y: 80, duration: 1.2, ease: "power3.out" },
//           { opacity: 0, x: -100, duration: 1.2, ease: "power3.out" },
//           { opacity: 0, x: 100, duration: 1.2, ease: "power3.out" },
//           { opacity: 0, rotation: 5, y: 50, duration: 1.2, ease: "power2.out" },
//           { opacity: 0, scale: 0.8, duration: 1.2, ease: "back.out(1.7)" },
//           { opacity: 0, y: -80, duration: 1.2, ease: "power3.out" },
//         ];

//         const anim = animations[i % animations.length];

//         tl.fromTo(
//           el,
//           anim,
//           {
//             opacity: 1,
//             x: 0,
//             y: 0,
//             rotation: 0,
//             scale: 1,
//             duration: 1.5,
//             ease: "power2.out",
//           },
//           "+=0.5" // gap between each line
//         );

//         // Fade out before next appears (smooth transition)
//         tl.to(
//           el,
//           { opacity: 0, duration: 0.8, ease: "power1.out" },
//           "+=0.6"
//         );
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   const lines = [
//     <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold py-2">
//       We're Not Just{" "}
//       <span className="text-yellow-400">Technology</span>
//     </div>,

//     <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold py-2">
//       We're Redefining How{" "}
//       <span className="text-green-400">Businesses</span>
//     </div>,

//     <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold py-2">
//       And <span className="text-blue-400">Interact</span> In a
//     </div>,

//     <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold py-2">
//       <span className="text-purple-400">Digital-First</span> World
//     </div>,

//     <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold py-2">
//       Every Solution We Create{" "}
//       <span className="text-red-400">Merges</span>
//     </div>,

//     <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold py-2">
//       <span className="text-cyan-400">Creativity</span>, Strategy, And
//     </div>,

//     <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold py-2">
//       <span className="text-pink-400">Innovation</span> To Create
//     </div>,

//     <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold py-2">
//       Meaningful <span className="text-yellow-400">Impact</span>
//     </div>,
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       className="relative bg-gradient-to-br from-black via-gray-900 to-black w-full min-h-screen flex items-center justify-center overflow-hidden"
//     >
//       {/* Static Background Glow */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black opacity-70"></div>
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-yellow-500/10 blur-3xl rounded-full"></div>
//         <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/10 blur-3xl rounded-full"></div>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 text-center text-white w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
//         {/* Vision & Mission Title */}
//         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-yellow-400 mb-6 lg:mb-10 tracking-wide">
//           Vision & Mission
//         </h2>

//         {/* Main Heading */}
//         <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-16 lg:mb-24 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-yellow-400">
//           Driving Innovation<br />Beyond Boundaries
//         </h1>

//         {/* Scroll Lines Section */}
//         <div
//           ref={linesContainerRef}
//           className="text-left space-y-6 md:space-y-8 lg:space-y-10 overflow-hidden h-[70vh] flex flex-col items-start justify-center"
//         >
//           {lines.map((line, idx) => (
//             <div
//               key={idx}
//               ref={(el) => (lineRefs.current[idx] = el)}
//               className="opacity-0 leading-tight"
//             >
//               {line}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom Gradient Fade for Visual Depth */}
//       <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
//     </section>
//   );
// };

// export default VisionMission;
// src/Components/HomeComponent/VissionSection.jsx
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const VisionMission = () => {
//   const sectionRef = useRef(null);
//   const linesContainerRef = useRef(null);
//   const lineRefs = useRef([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Create master timeline for scroll-triggered animation
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "+=4000", // Extended scroll for cinematic flow
//           pin: true, // keep background static
//           scrub: 1.5, // smooth scroll syncing
//           anticipatePin: 1,
//         },
//       });

//       // Animate each line one by one sequentially
//       lineRefs.current.forEach((el, i) => {
//         if (!el) return;

//         // Small animation variations
//         const animations = [
//           { opacity: 0, y: 80, duration: 1.2, ease: "power3.out" },
//           { opacity: 0, x: -100, duration: 1.2, ease: "power3.out" },
//           { opacity: 0, x: 100, duration: 1.2, ease: "power3.out" },
//           { opacity: 0, rotation: 5, y: 50, duration: 1.2, ease: "power2.out" },
//           { opacity: 0, scale: 0.8, duration: 1.2, ease: "back.out(1.7)" },
//           { opacity: 0, y: -80, duration: 1.2, ease: "power3.out" },
//         ];

//         const anim = animations[i % animations.length];

//         tl.fromTo(
//           el,
//           anim,
//           {
//             opacity: 1,
//             x: 0,
//             y: 0,
//             rotation: 0,
//             scale: 1,
//             duration: 1.5,
//             ease: "power2.out",
//           },
//           "+=0.5" // gap between each line
//         );

//         // Fade out before next appears (smooth transition)
//         tl.to(
//           el,
//           { opacity: 0, duration: 0.8, ease: "power1.out" },
//           "+=0.6"
//         );
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   const lines = [
//     <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold py-2">
//       We're Not Just{" "}
//       <span className="text-yellow-400">Technology</span>
//     </div>,

//     <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold py-2">
//       We're Redefining How{" "}
//       <span className="text-green-400">Businesses</span>
//     </div>,

//     <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold py-2">
//       And <span className="text-blue-400">Interact</span> In a
//     </div>,

//     <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold py-2">
//       <span className="text-purple-400">Digital-First</span> World
//     </div>,

//     <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold py-2">
//       Every Solution We Create{" "}
//       <span className="text-red-400">Merges</span>
//     </div>,

//     <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold py-2">
//       <span className="text-cyan-400">Creativity</span>, Strategy, And
//     </div>,

//     <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold py-2">
//       <span className="text-pink-400">Innovation</span> To Create
//     </div>,

//     <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold py-2">
//       Meaningful <span className="text-yellow-400">Impact</span>
//     </div>,
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       className="relative bg-gradient-to-br from-black via-gray-900 to-black w-full min-h-screen flex items-center justify-center overflow-hidden"
//     >
//       {/* Static Background Glow */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black opacity-70"></div>
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-yellow-500/10 blur-3xl rounded-full"></div>
//         <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/10 blur-3xl rounded-full"></div>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 text-center text-white w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
//         {/* Vision & Mission Title */}
//         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-yellow-400 mb-6 lg:mb-10 tracking-wide">
//           Vision & Mission
//         </h2>

//         {/* Main Heading */}
//         <h1 className="text-2xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-16 lg:mb-24 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-yellow-400">
//           Driving Innovation<br />Beyond Boundaries
//         </h1>

//         {/* Scroll Lines Section */}
//         <div
//           ref={linesContainerRef}
//           className="text-left space-y-6 md:space-y-8 lg:space-y-10 overflow-hidden h-[70vh] flex flex-col items-start justify-center"
//         >
//           {lines.map((line, idx) => (
//             <div
//               key={idx}
//               ref={(el) => (lineRefs.current[idx] = el)}
//               className="opacity-0 leading-tight"
//             >
//               {line}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom Gradient Fade for Visual Depth */}
//       <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
//     </section>
//   );
// };

// export default VisionMission;
// src/Components/HomeComponent/VissionSection.jsx
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const VisionMission = () => {
//   const lineRefs = useRef([]);

//   useEffect(() => {
//     // Clear and initialize refs array
//     lineRefs.current = [];
    
//     // Top 10 different animations
//     lineRefs.current.forEach((el, i) => {
//       if (!el) return;
      
//       switch (i % 10) {
//         case 0: // fade + float up
//           gsap.from(el, {
//             opacity: 0,
//             y: 50,
//             duration: 1,
//             ease: "power2.out",
//             scrollTrigger: { trigger: el, start: "top 85%" },
//           });
//           break;
//         case 1: // scale pop
//           gsap.from(el, {
//             scale: 0.5,
//             opacity: 0,
//             duration: 1,
//             ease: "back.out(1.7)",
//             scrollTrigger: { trigger: el, start: "top 85%" },
//           });
//           break;
//         case 2: // float left-right
//           gsap.from(el, {
//             x: -50,
//             opacity: 0,
//             duration: 1,
//             ease: "power2.out",
//             scrollTrigger: { trigger: el, start: "top 85%" },
//           });
//           break;
//         case 3: // float right-left
//           gsap.from(el, {
//             x: 50,
//             opacity: 0,
//             duration: 1,
//             ease: "power2.out",
//             scrollTrigger: { trigger: el, start: "top 85%" },
//           });
//           break;
//         case 4: // rotate + fade
//           gsap.from(el, {
//             rotation: 10,
//             opacity: 0,
//             duration: 1,
//             ease: "power2.out",
//             scrollTrigger: { trigger: el, start: "top 85%" },
//           });
//           break;
//         case 5: // yoyo float
//           gsap.to(el, {
//             y: -10,
//             repeat: -1,
//             yoyo: true,
//             duration: 2,
//             ease: "sine.inOut",
//           });
//           break;
//         case 6: // staggered letters
//           if (el.querySelectorAll("span").length > 0) {
//             gsap.from(el.querySelectorAll("span"), {
//               y: 20,
//               opacity: 0,
//               stagger: 0.05,
//               duration: 0.8,
//               ease: "back.out(1.7)",
//               scrollTrigger: { trigger: el, start: "top 85%" },
//             });
//           }
//           break;
//         case 7: // scale + rotate
//           gsap.from(el, {
//             scale: 0.8,
//             rotation: -5,
//             opacity: 0,
//             duration: 1,
//             ease: "power2.out",
//             scrollTrigger: { trigger: el, start: "top 85%" },
//           });
//           break;
//         case 8: // fade in with delay
//           gsap.from(el, {
//             opacity: 0,
//             duration: 1,
//             delay: 0.2,
//             ease: "power2.out",
//             scrollTrigger: { trigger: el, start: "top 85%" },
//           });
//           break;
//         case 9: // pulse effect
//           gsap.fromTo(
//             el,
//             { scale: 1 },
//             { scale: 1.05, repeat: -1, yoyo: true, duration: 1 }
//           );
//           break;
//         default:
//           break;
//       }
//     });
//   }, []);

//   const lines = [
//     <div className="text-2xl lg:text-4xl xl:text-5xl font-bold py-2">
//       We're Not Just{" "}
//       <span className="text-yellow-400">Technology</span>
//     </div>,
    
//     <div className="text-2xl lg:text-4xl xl:text-5xl font-bold py-2">
//       We're Redefining How{" "}
//       <span className="text-green-400">Businesses</span>
//     </div>,
    
//     <div className="text-2xl lg:text-4xl xl:text-5xl font-bold py-2">
//       And <span className="text-blue-400">Interact</span> In a
//     </div>,
    
//     <div className="text-2xl lg:text-4xl xl:text-5xl font-bold py-2">
//       <span className="text-purple-400">Digital-First</span> World
//     </div>,
    
//     <div className="text-2xl lg:text-4xl xl:text-5xl font-bold py-2">
//       Every Solution We Create{" "}
//       <span className="text-red-400">Merges</span>
//     </div>,
    
//     <div className="text-2xl lg:text-4xl xl:text-5xl font-bold py-2">
//       <span className="text-cyan-400">Creativity</span>, Strategy, And
//     </div>,
    
//     <div className="text-2xl lg:text-4xl xl:text-5xl font-bold py-2">
//       <span className="text-pink-400">Innovation</span> To Create
//     </div>,
    
//     <div className="text-2xl lg:text-4xl xl:text-5xl font-bold py-2">
//       Meaningful <span className="text-yellow-400">Impact</span>
//     </div>,
//   ];

//   return (
//     <div className="bg-black w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-12">
//       <div className="text-center text-white w-full max-w-7xl">
//         {/* Vision & Mission Title */}
//         <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-yellow-400 autoBlur mb-8 lg:mb-12">
//           Vision & Mission
//         </h2>
        
//         {/* Main Heading */}
//         <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold autoBlur mb-12 lg:mb-16 leading-tight">
//           Driving Innovation<br />Beyond Boundaries
//         </h1>

//         {/* Content Lines */}
//         <div className="text-left space-y-1 lg:space-y-2">
//           {lines.map((line, idx) => (
//             <div
//               key={idx}
//               ref={(el) => (lineRefs.current[idx] = el)}
//               className="autoBlur leading-none"
//             >
//               {line}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VisionMission;
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const VisionMission = () => {
//   const lineRefs = useRef([]);

//   useEffect(() => {
//     lineRefs.current = [];
    
//     lineRefs.current.forEach((el, i) => {
//       if (!el) return;
      
//       switch (i % 10) {
//         case 0: // fade + float up
//           gsap.from(el, { opacity: 0, y: 50, duration: 1, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 85%" } });
//           break;
//         case 1: // scale pop
//           gsap.from(el, { scale: 0.5, opacity: 0, duration: 1, ease: "back.out(1.7)", scrollTrigger: { trigger: el, start: "top 85%" } });
//           break;
//         case 2: // float left-right
//           gsap.from(el, { x: -50, opacity: 0, duration: 1, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 85%" } });
//           break;
//         case 3: // float right-left
//           gsap.from(el, { x: 50, opacity: 0, duration: 1, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 85%" } });
//           break;
//         case 4: // rotate + fade
//           gsap.from(el, { rotation: 10, opacity: 0, duration: 1, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 85%" } });
//           break;
//         case 5: // yoyo float
//           gsap.to(el, { y: -10, repeat: -1, yoyo: true, duration: 2, ease: "sine.inOut" });
//           break;
//         case 6: // staggered letters
//           if (el.querySelectorAll("span").length > 0) {
//             gsap.from(el.querySelectorAll("span"), { y: 20, opacity: 0, stagger: 0.05, duration: 0.8, ease: "back.out(1.7)", scrollTrigger: { trigger: el, start: "top 85%" } });
//           }
//           break;
//         case 7: // scale + rotate
//           gsap.from(el, { scale: 0.8, rotation: -5, opacity: 0, duration: 1, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 85%" } });
//           break;
//         case 8: // fade in with delay
//           gsap.from(el, { opacity: 0, duration: 1, delay: 0.2, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 85%" } });
//           break;
//         case 9: // pulse effect
//           gsap.fromTo(el, { scale: 1 }, { scale: 1.05, repeat: -1, yoyo: true, duration: 1 });
//           break;
//         default:
//           break;
//       }
//     });
//   }, []);

//   const lines = [
//     <div className="text-2xl lg:text-4xl xl:text-5xl font-bold py-2">We're Not Just <span className="text-yellow-400">Technology</span></div>,
//     <div className="text-2xl lg:text-4xl xl:text-5xl font-bold py-2">We're Redefining How <span className="text-green-400">Businesses</span></div>,
//     <div className="text-2xl lg:text-4xl xl:text-5xl font-bold py-2">And <span className="text-blue-400">Interact</span> In a</div>,
//     <div className="text-2xl lg:text-4xl xl:text-5xl font-bold py-2"><span className="text-purple-400">Digital-First</span> World</div>,
//     <div className="text-2xl lg:text-4xl xl:text-5xl font-bold py-2">Every Solution We Create <span className="text-red-400">Merges</span></div>,
//     <div className="text-2xl lg:text-4xl xl:text-5xl font-bold py-2"><span className="text-cyan-400">Creativity</span>, Strategy, And</div>,
//     <div className="text-2xl lg:text-4xl xl:text-5xl font-bold py-2"><span className="text-pink-400">Innovation</span> To Create</div>,
//     <div className="text-2xl lg:text-4xl xl:text-5xl font-bold py-2">Meaningful <span className="text-yellow-400">Impact</span></div>,
//   ];

//   return (
//     // Reduced min-height from [200vh] back to min-h-screen for less extra scroll space
//     <div className="bg-black w-full min-h-screen flex items-start justify-center px-4 sm:px-6 lg:px-8 xl:px-12 pt-20">
//       <div className="text-center text-white w-full max-w-7xl">
//         {/* Sticky Header */}
//         <div className="sticky top-12 z-10 pt-4 pb-8">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-yellow-400 autoBlur mb-2 lg:mb-4">
//             Vision & Mission
//           </h2>
//           <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold autoBlur leading-tight">
//             Driving Innovation<br />Beyond Boundaries
//           </h1>
//         </div>
        
//         {/* Content Lines */}
//         <div className="text-left space-y-1 lg:space-y-2 mt-12">
//           {lines.map((line, idx) => (
//             <div
//               key={idx}
//               ref={(el) => (lineRefs.current[idx] = el)}
//               className="autoBlur leading-none"
//             >
//               {line}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VisionMission;
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const VisionMission = () => {
//   const lineRefs = useRef([]);
//   // Ref for the main container to control its height
//   const containerRef = useRef(null);

//   useEffect(() => {
//     lineRefs.current = [];
    
//     // --- Setup for Content Lines Animation ---
//     lineRefs.current.forEach((el, i) => {
//       if (!el) return;
      
//       // We will keep the scrollTrigger logic mostly the same, 
//       // but ensure 'el' is what drives the scroll position.
//       const baseScrollTrigger = {
//         trigger: el, 
//         // Start the animation when the top of the element hits 85% of the viewport.
//         start: "top 85%",
//         // We might need to add markers for debugging: markers: true,
//       };

//       switch (i % 10) {
//         case 0: // fade + float up
//           gsap.from(el, { opacity: 0, y: 50, duration: 1, ease: "power2.out", scrollTrigger: baseScrollTrigger });
//           break;
//         case 1: // scale pop
//           gsap.from(el, { scale: 0.5, opacity: 0, duration: 1, ease: "back.out(1.7)", scrollTrigger: baseScrollTrigger });
//           break;
//         case 2: // float left-right
//           gsap.from(el, { x: -50, opacity: 0, duration: 1, ease: "power2.out", scrollTrigger: baseScrollTrigger });
//           break;
//         case 3: // float right-left
//           gsap.from(el, { x: 50, opacity: 0, duration: 1, ease: "power2.out", scrollTrigger: baseScrollTrigger });
//           break;
//         case 4: // rotate + fade
//           gsap.from(el, { rotation: 10, opacity: 0, duration: 1, ease: "power2.out", scrollTrigger: baseScrollTrigger });
//           break;
//         case 5: // yoyo float (continuous)
//           gsap.to(el, { y: -10, repeat: -1, yoyo: true, duration: 2, ease: "sine.inOut" });
//           break;
//         case 6: // staggered letters
//           // This requires the child <span>s to be available in the DOM when this runs
//           if (el.querySelectorAll("span").length > 0) {
//             gsap.from(el.querySelectorAll("span"), { y: 20, opacity: 0, stagger: 0.05, duration: 0.8, ease: "back.out(1.7)", scrollTrigger: baseScrollTrigger });
//           }
//           break;
//         case 7: // scale + rotate
//           gsap.from(el, { scale: 0.8, rotation: -5, opacity: 0, duration: 1, ease: "power2.out", scrollTrigger: baseScrollTrigger });
//           break;
//         case 8: // fade in with delay
//           gsap.from(el, { opacity: 0, duration: 1, delay: 0.2, ease: "power2.out", scrollTrigger: baseScrollTrigger });
//           break;
//         case 9: // pulse effect (continuous)
//           gsap.fromTo(el, { scale: 1 }, { scale: 1.05, repeat: -1, yoyo: true, duration: 1 });
//           break;
//         default:
//           break;
//       }
//     });
//     // --- End of Content Lines Animation Setup ---

//   }, []); // Re-run effect when component mounts

//   const lines = [
      
//     <div className="text-2xl lg:text-4xl xl:text-5xl font-bold py-2">  Driving Innovation <span className="text-yellow-400">Beyond Boundaries</span></div>,      
//     <div className="text-2xl lg:text-4xl xl:text-5xl font-bold py-2">We're Not Just <span className="text-yellow-400">Technology</span></div>,
//     <div className="text-2xl lg:text-4xl xl:text-5xl font-bold py-2">We're Redefining How <span className="text-green-400">Businesses</span></div>,
//     <div className="text-2xl lg:text-4xl xl:text-5xl font-bold py-2">And <span className="text-blue-400">Interact</span> In a</div>,
//     <div className="text-2xl lg:text-4xl xl:text-5xl font-bold py-2"><span className="text-purple-400">Digital-First</span> World</div>,
//     <div className="text-2xl lg:text-4xl xl:text-5xl font-bold py-2">Every Solution We Create <span className="text-red-400">Merges</span></div>,
//     <div className="text-2xl lg:text-4xl xl:text-5xl font-bold py-2"><span className="text-cyan-400">Creativity</span>, Strategy, And</div>,
//     <div className="text-2xl lg:text-4xl xl:text-5xl font-bold py-2"><span className="text-pink-400">Innovation</span> To Create</div>,
//     <div className="text-2xl lg:text-4xl xl:text-5xl font-bold py-2">Meaningful <span className="text-yellow-400">Impact</span></div>,
//   ];

//   return (
//     // CHANGE 1: Use a custom class 'full-height-section' and set its height property.
//     // CHANGE 2: Removed min-h-screen from the main div.
//     <div 
//       ref={containerRef}
//       className="bg-black w-full flex items-start justify-center px-4 sm:px-6 lg:px-8 xl:px-12 pt-20"
//       style={{ minHeight: '100vh', paddingBottom: '20vh' }} // Added extra padding to give initial room for scrolling the lines
//     >
//       <div className="text-center text-white w-full max-w-7xl">
//         {/* Sticky Header */}
       
//         <div className="sticky top-12 z-10 pt-4 pb-8 bg-black/80 w-full backdrop-blur-sm">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-yellow-400 autoBlur mb-2 lg:mb-4">
//             Vision & Mission
//           </h2>
        
//         </div>
        
//         {/* Content Lines */}
//         {/* CHANGE 4: Added mt-12 back to push the content below the header */}
//         <div className="text-left space-y-1 lg:space-y-2 mt-12">
//           {lines.map((line, idx) => (
//             <div
//               key={idx}
//               ref={(el) => (lineRefs.current[idx] = el)}
//               className="autoBlur leading-none"
//             >
//               {line}
//             </div>
//           ))}
//         </div>

//         {/* This is a spacer to ensure the last lines can scroll into view */}
//         <div style={{ height: '50vh' }}></div> 
        
//       </div>
//     </div>
//   );
// };

// export default VisionMission;

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Icon } from "@iconify/react";

gsap.registerPlugin(ScrollTrigger);

// --- SUBCOMPONENTE CLAVE: PASTILLA ANIMADA CON EFECTO WIPE ---
const AnimatedPill = ({ text, isItalic, isLast, iconName, isTitle }) => {
  const pillRef = useRef(null);

  const pillClasses = isTitle
    ? "border-2 border-cyan-400 shadow-lg shadow-cyan-500/50 "
    : "border-2 border-cyan-400 shadow-md shadow-cyan-400/40 bg-gray-900";

  const textClasses = `relative z-10 text-white lg:text-[32px] md:text-[26px] text-[20px] leading-none uppercase ${
    isItalic ? "italic" : "font-normal"
  }`;
  const iconSize = isTitle ? "size-6" : "size-5";

  const handleMouseEnter = () => {
    gsap.to(pillRef.current.querySelector(".wipe-overlay"), {
      scaleX: 1,
      duration: 0.8,
      ease: "power2.out",
    });
    gsap.to(pillRef.current.querySelector("p"), {
      color: "black",
      duration: 0.3,
    });
    gsap.to(pillRef.current.querySelector("svg"), {
      color: "black",
      duration: 0.3,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(pillRef.current.querySelector(".wipe-overlay"), {
      scaleX: 0,
      duration: 0.5,
      ease: "power2.out",
    });
    gsap.to(pillRef.current.querySelector("p"), {
      color: "white",
      duration: 0.3,
    });
    gsap.to(pillRef.current.querySelector("svg"), {
      color: "white",
      duration: 0.3,
    });
  };

  return (
    <>
      <div className="hidden xl:flex items-center gap-1.5">
        <div className="w-5 h-0.5 bg-cyan-400" />
        <div className="size-1.5 rounded-full bg-cyan-400" />
      </div>

      <div
        ref={pillRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={
          pillClasses +
          " relative flex items-center rounded-full px-3 py-1.5 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-cyan-400/60"
        }
      >
        <div
          className="wipe-overlay absolute inset-0 rounded-full origin-right"
          style={{
            background: "linear-gradient(to right, #040505ff, #0099b4ff)",
            transform: "scaleX(0)",
          }}
        ></div>

        <Icon
          icon={iconName}
          className={
            iconSize +
            " mr-1.5 relative z-10 text-white transition-colors duration-300"
          }
        />
        <p className={textClasses}>{text}</p>
      </div>

      {!isLast && (
        <div className="hidden xl:flex items-center gap-1.5">
          <div className="size-1.5 rounded-full bg-cyan-400" />
          <div className="w-5 h-0.5 bg-cyan-400" />
        </div>
      )}
    </>
  );
};

const VisionMission = () => {
  useGSAP(() => {
    gsap.to("#title-service-1", {
      xPercent: 20,
      scrollTrigger: {
        trigger: "#title-service-1",
        scrub: true,
        start: "top 60%",
      },
    });
    gsap.to("#title-service-2", {
      xPercent: -30,
      scrollTrigger: {
        trigger: "#title-service-2",
        scrub: true,
        start: "top 60%",
      },
    });
    gsap.to("#title-service-3", {
      xPercent: 100,
      scrollTrigger: {
        trigger: "#title-service-3",
        scrub: true,
        start: "top 60%",
      },
    });
    gsap.to("#title-service-4", {
      xPercent: -100,
      scrollTrigger: {
        trigger: "#title-service-4",
        scrub: true,
        start: "top 60%",
      },
    });
    gsap.to("#title-service-5", {
      xPercent: 50,
      scrollTrigger: {
        trigger: "#title-service-5",
        scrub: true,
        start: "top 60%",
      },
    });
    gsap.to("#title-service-6", {
      xPercent: -50,
      scrollTrigger: {
        trigger: "#title-service-6",
        scrub: true,
        start: "top 60%",
      },
    });
  });

  return (
    <section className="mt-0 pt-50 overflow-hidden font-light leading-snug text-center mb-0 contact-text-responsive flex flex-col gap-y-8 bg-black py-16">
      {/* LÍNEA 1 */}
      <div id="title-service-1" className="flex justify-center items-center px-4">
        <AnimatedPill
          text="DRIVING INNOVATION BEYOND BOUNDARIES"
          iconName="material-symbols:rocket-launch-outline"
          isTitle={true}
          isLast={true}
        />
      </div>

      {/* LÍNEA 2 */}
      <div
        id="title-service-2"
        className="flex flex-wrap items-center justify-center gap-2"
      >
        <AnimatedPill
          text="WE'RE NOT JUST TECHNOLOGY"
          iconName="material-symbols:memory-outline"
          isLast={true}
        />
      </div>

      {/* LÍNEA 3 */}
      <div
        id="title-service-3"
        className="flex flex-wrap items-center justify-center gap-2"
      >
        <AnimatedPill
          text="WE'RE REDEFINING HOW BUSINESSES"
          iconName="mdi:domain"
        />
        <AnimatedPill
          text="AND INTERACT IN A"
          iconName="mdi:gesture-tap"
          isItalic={true}
          isLast={true}
        />
      </div>

      {/* LÍNEA 4 */}
      <div
        id="title-service-4"
        className="flex flex-wrap items-center justify-center gap-2"
      >
        <AnimatedPill
          text="DIGITAL-FIRST WORLD"
          iconName="mdi:earth"
          isLast={true}
        />
      </div>

      {/* LÍNEA 5 */}
      <div
        id="title-service-5"
        className="flex flex-wrap items-center justify-center gap-2"
      >
        <AnimatedPill
          text="EVERY SOLUTION WE CREATE MERGES"
          iconName="mdi:lightbulb-outline"
        />
        <AnimatedPill text="CREATIVITY, STRATEGY, AND" iconName="mdi:brain" />
      </div>

      {/* LÍNEA 6 */}
      <div
        id="title-service-6"
        className="flex flex-wrap items-center justify-center gap-2"
      >
        <AnimatedPill text="INNOVATION TO CREATE" iconName="mdi:rocket-launch" />
        <AnimatedPill
          text="MEANINGFUL IMPACT"
          iconName="mdi:handshake-outline"
          isLast={true}
        />
      </div>
    </section>
  );
};

export default VisionMission;