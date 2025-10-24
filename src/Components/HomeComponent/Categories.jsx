// import { ArrowUpRight } from "lucide-react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// // ✅ Import images with clear names
// import DesignTool from "/src/assets/home/categories/Gemini_Generated_Image_nb1svjnb1svjnb1s.png";
// import Layout from "/src/assets/home/categories/Gemini_Generated_Image_prlzylprlzylprlz.png";
// import Component from "/src/assets/home/categories/Gemini_Generated_Image_udav5iudav5iudav.png";
// import UserFocus from "/src/assets/home/categories/Gemini_Generated_Image_n6yszmn6yszmn6ys.png";
// import Portal from "/src/assets/home/categories/Gemini_Generated_Image_tmihoitmihoitmih.png";
// import Dashboard from "/src/assets/home/categories/Gemini_Generated_Image_hafb71hafb71hafb.png";
// import Aws from "/src/assets/HomeImages/CategoryImages/aws.jpg";
// import Azure from "/src/assets/HomeImages/CategoryImages/azure.jpg";
// import GoogleCloud from "/src/assets/home/categories/Gemini_Generated_Image_qmsw01qmsw01qmsw.png";

// const capabilitiesData = [
//   {
//     id: "01/6",
//     title: "Immersive Tech",
//     desc: "Intuitive designs for seamless digital journeys.",
//     children: [
//       { name: "VIRTUAL REALITY", img: DesignTool, link: "/virtual_reality" },
//       { name: "AUGMENTED REALITY", img: Layout, link: "/augmented_reality" },
//       { name: "3D SERVICES", img: Component, link: "/3d_services" },
//     ],
//   },
//   {
//     id: "02/6",
//     title: "Data & Cloud",
//     desc: "Custom-built, scalable platforms.",
//     children: [
//       { name: "CRM SOLUTIONS", img: GoogleCloud, link: "/client_relationship_management" },
//       { name: "IAM SOLUTIONS", img: Portal, link: "/identity_and_access_management" },
//       { name: "ERP SOLUTIONS", img: Dashboard, link: "/enterprise_resource_planning" },
//       { name: "SERVER MANAGEMENT", img: UserFocus, link: "/server_management" },
//     ],
//   },
//   {
//     id: "03/6",
//     title: "Web Development & Software",
//     desc: "Transforming businesses with secure, scalable infrastructure.",
//     children: [
//       { name: "WEB DEVELOPMENT", img: Aws, link: "/web_development" },
//       { name: "MOBILE APPS", img: Azure, link: "/app_development" },
//       { name: "GAME DEVELOPMENT", img: GoogleCloud, link: "/game_development" },
//     ],
//   },
// ];

// // Define a constant for the card's estimated height for the replacement effect
// const CARD_HEIGHT_FOR_REPLACEMENT = 380;
// // Define a padding value to ensure the next category's cards start far enough down
// const CATEGORY_BUFFER_SPACE = 450;

// export default function Categories() {
//   return (
//     <section className="bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white min-h-screen px-6 md:px-12 py-16">
//       <div className="space-y-40">
//         {capabilitiesData.map((cap, index) => (
//           <div
//             key={index}
//             className="grid grid-cols-1 md:grid-cols-2 gap-10"
//             style={{
//               minHeight: `${(cap.children.length - 1) * CATEGORY_BUFFER_SPACE + CARD_HEIGHT_FOR_REPLACEMENT + CATEGORY_BUFFER_SPACE}px`
//             }}
//           >
//             {/* Left Sticky Section - Enhanced Design */}
//             <div className="md:sticky md:top-20 h-fit bg-gradient-to-br from-purple-900/80 to-indigo-900/80 p-8 rounded-3xl shadow-2xl border border-purple-500/30 backdrop-blur-sm">
//               <div className="flex items-baseline gap-4">
//                 <div className="text-5xl md:text-7xl text-white/10 font-bold select-none">
//                   {cap.id}
//                 </div>
//                 <div>
//                   <h3 className="text-3xl font-bold tracking-wide text-white mb-4">
//                     {cap.title}
//                   </h3>
//                   <p className="text-white/80 mt-3 max-w-md leading-relaxed text-lg">
//                     {cap.desc}
//                   </p>
//                 </div>
//               </div>
//               <div className="mt-8 flex items-center">
//                 <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse mr-3 shadow-lg shadow-green-500/25"></div>
//                 <span className="text-white/80 text-base font-medium">{cap.children.length} services available</span>
//               </div>
//             </div>

//             {/* Right Side Cards with Enhanced Design */}
//             <div className="flex flex-col pt-[450px]">
//               {cap.children.map((child, i) => (
//                 <Link
//                   to={child.link}
//                   key={i}
//                   className={`relative md:sticky md:top-20 ${i > 0 ? `mt-[-${CARD_HEIGHT_FOR_REPLACEMENT}px]` : ''} z-10`}
//                   style={{ zIndex: 10 + i }}
//                 >
//                   <motion.div
//                     className="rounded-3xl overflow-hidden shadow-2xl cursor-pointer border border-gray-600/30 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm"
//                     whileHover={{
//                       scale: 1.04,
//                       boxShadow: "0px 20px 40px rgba(168, 85, 247, 0.3)",
//                       borderColor: "rgba(168, 85, 247, 0.6)",
//                     }}
//                     transition={{ type: "spring", stiffness: 200, damping: 15 }}
//                   >
//                     {/* Top Card Header - Enhanced */}
//                     <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-600/40 p-7 flex justify-between items-center">
//                       <div>
//                         <span className="font-bold text-white text-xl tracking-wide block">
//                           {child.name}
//                         </span>
//                       </div>
//                       <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center shadow-2xl shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
//                         <ArrowUpRight className="text-white w-6 h-6" />
//                       </div>
//                     </div>

//                     {/* Image Box - Enhanced */}
//                     <div className="p-4 bg-gradient-to-br from-gray-900 to-black">
//                       <div className="h-64 rounded-xl overflow-hidden border border-gray-600/30 shadow-2xl relative group">
//                         <img
//                           src={child.img}
//                           alt={child.name}
//                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 group-hover:opacity-30 transition-all duration-500"></div>
//                         <div className="absolute bottom-4 left-4 right-4">
//                           <div className="bg-gradient-to-r from-purple-600/90 to-pink-600/90 backdrop-blur-sm rounded-lg p-3 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
//                             <span className="text-white font-medium text-sm">Discover {child.name.split(' ')[0]}</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Enhanced Bottom Section */}
//       <div className="text-center mt-40">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="max-w-4xl mx-auto"
//         >
          
//         </motion.div>
//       </div>
//     </section>
//   );
// }
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// export default function ServiceSection() {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const videoRef = useRef(null);
//   const contentRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "bottom+=200% top",
//           scrub: true,
//           pin: true,
//           anticipatePin: 1,
//         },
//       });

//       // Step 1: Title zoom out and fade away
//       tl.to(titleRef.current, {
//         scale: 0.5,
//         opacity: 0,
//         duration: 1.5,
//         ease: "power2.out",
//       });

//       // Step 2: Video fade in
//       tl.fromTo(
//         videoRef.current,
//         { opacity: 0, scale: 0.95 },
//         { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" },
//         ">-0.3"
//       );

//       // Step 3: Overlay text fade in inside the video
//       tl.fromTo(
//         contentRef.current,
//         { opacity: 0, y: 50 },
//         { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
//         "+=0.5"
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden text-white"
//     >
//       {/* Title */}
//       <h1
//         ref={titleRef}
//         className="text-6xl md:text-8xl font-extrabold text-center z-10 tracking-widest"
//       >
//         EFFECTIVE
//       </h1>

//       {/* Video Background */}
//       <div
//         ref={videoRef}
//         className="absolute inset-0 flex items-center justify-center opacity-0 scale-95"
//       >
//         <video
//           src="https://www.w3schools.com/html/mov_bbb.mp4"
//           autoPlay
//           muted
//           loop
//           className="w-full h-full object-cover"
//         ></video>

//         {/* Gradient overlay for cinematic contrast */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

//         {/* Content inside video */}
//         <div
//           ref={contentRef}
//           className="absolute inset-0 flex items-center justify-center opacity-0"
//         >
//           {/* <h1 className="text-4xl md:text-6xl font-bold text-center px-6 md:px-12">EFFECTIVE</h1> */}
//           <p className="text-xl md:text-3xl font-medium text-center px-8 max-w-3xl bg-black/50 backdrop-blur-sm rounded-2xl p-6 leading-relaxed shadow-lg">
//             We start by deeply understanding your business vision, challenges,
//             and aspirations. Our team dives into every detail to uncover
//             insights that guide us in crafting tailored technology solutions
//             designed to transform your goals into measurable outcomes.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// export default function ServiceSection() {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const videoRef = useRef(null);
//   const contentRef = useRef(null);
//   const lineRef = useRef(null);
//   const circleRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "bottom+=250% top",
//           scrub: true,
//           pin: true,
//           anticipatePin: 1,
//         },
//       });

//       // Step 1: Title zooms out and fades away
//       tl.to(titleRef.current, {
//         scale: 0.5,
//         opacity: 0,
//         duration: 1.5,
//         ease: "power2.out",
//       });

//       // Step 2: Video fades in
//       tl.fromTo(
//         videoRef.current,
//         { opacity: 0, scale: 0.95 },
//         { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" },
//         ">-0.3"
//       );

//       // Step 3: Show the line and circle (yellow indicator)
//       tl.fromTo(
//         [lineRef.current, circleRef.current],
//         { opacity: 0 },
//         { opacity: 1, duration: 0.5, ease: "power2.out" },
//         "+=0.2"
//       );

//       // Step 4: Animate the line and circle position as you scroll
//       tl.fromTo(
//         lineRef.current,
//         { width: "30%" },
//         { width: "70%", duration: 1, ease: "power2.inOut" },
//         "+=0.2"
//       );

//       tl.fromTo(
//         circleRef.current,
//         { left: "30%" },
//         { left: "70%", duration: 1, ease: "power2.inOut" },
//         "<"
//       );

//       // Step 5: Fade in content inside the video
//       tl.fromTo(
//         contentRef.current,
//         { opacity: 0, y: 50 },
//         { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
//         "+=0.5"
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden"
//     >
//       {/* Title */}
//       <h1
//         ref={titleRef}
//         className="text-6xl md:text-8xl font-extrabold text-center z-10 tracking-widest"
//       >
//         EFFECTIVE
//       </h1>

//       {/* Video Background */}
//       <div
//         ref={videoRef}
//         className="absolute inset-0 flex items-center justify-center opacity-0 scale-95"
//       >
//         <video
//           src="https://www.w3schools.com/html/mov_bbb.mp4"
//           autoPlay
//           muted
//           loop
//           className="w-full h-full object-cover"
//         ></video>

//         {/* Gradient overlay for cinematic contrast */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

//         {/* Yellow Line + Circle */}
//         <div className="absolute bottom-1/2 left-0 w-full flex justify-center items-center">
//           <div
//             ref={lineRef}
//             className="absolute h-[2px] bg-gray-400 transition-all duration-500"
//             style={{ width: "30%" }}
//           ></div>
//           <div
//             ref={circleRef}
//             className="absolute w-5 h-5 rounded-full bg-yellow-500 shadow-lg"
//             style={{ left: "30%", transform: "translateY(-50%)" }}
//           ></div>
//         </div>

//         {/* Content inside video */}
//         <div
//           ref={contentRef}
//           className="absolute inset-0 flex items-center justify-center opacity-0"
//         >
//           <p className="text-xl md:text-3xl font-medium text-center px-8 max-w-3xl bg-black/50 backdrop-blur-sm rounded-2xl p-6 leading-relaxed shadow-lg">
//             We start by deeply understanding your business vision, challenges,
//             and aspirations. Our team dives into every detail to uncover
//             insights that guide us in crafting tailored technology solutions
//             designed to transform your goals into measurable outcomes.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const slides = [
//   {
//     video: "https://cdn.videvo.net/videvo_files/video/free/2017-05/large_watermarked/170419_B_030_preview.mp4", // Discover
//     content:
//       "Discover new possibilities. We analyze, research, and strategize to uncover opportunities that align with your vision.",
//   },
//   {
//     video: "https://cdn.videvo.net/videvo_files/video/free/2016-05/large_watermarked/160422_01_City_Timelapse_1080p_preview.mp4", // Architect
//     content:
//       "Architect your solutions with precision. Our team designs robust frameworks and scalable infrastructures tailored for growth.",
//   },
//   {
//     video: "https://cdn.videvo.net/videvo_files/video/free/2017-12/large_watermarked/171124_01_Corporate_Workplace_4k_019_preview.mp4", // Build
//     content:
//       "Build and implement with excellence. From development to deployment, we ensure every solution performs seamlessly.",
//   },
//   {
//     video: "https://cdn.videvo.net/videvo_files/video/free/2018-02/large_watermarked/180116_06_Building_Timelapse_4k_preview.mp4", // Elevate
//     content:
//       "Elevate your business to new heights. We optimize, innovate, and enhance your systems to stay ahead of the curve.",
//   },
//   {
//     video: "https://cdn.videvo.net/videvo_files/video/free/2017-11/large_watermarked/171024_04_Helpdesk_preview.mp4", // Support
//     content:
//       "Support every step of the way. Our dedicated team ensures your solutions remain efficient, secure, and continuously evolving.",
//   },
// ];

// export default function ServiceSection() {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const videoRef = useRef([]);
//   const contentRef = useRef([]);
//   const circleRef = useRef(null);

//   videoRef.current = [];
//   contentRef.current = [];

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: `bottom+=${slides.length * 400}% top`,
//           scrub: 2,
//           pin: true,
//           anticipatePin: 1,
//         },
//       });

//       // Title zoom out and fade
//       tl.to(titleRef.current, {
//         scale: 0.5,
//         opacity: 0,
//         duration: 1.5,
//         ease: "power2.out",
//       });

//       // Calculate circle positions (5 slides = 0%, 25%, 50%, 75%, 100%)
//       const positions = ["0%", "20%", "40%", "60%", "80%"];

//       slides.forEach((slide, i) => {
//         // Fade in current video
//         tl.fromTo(
//           videoRef.current[i],
//           { opacity: 0, scale: 0.95 },
//           { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" },
//           i === 0 ? ">-0.3" : ">0"
//         );

//         // Fade in current content
//         tl.fromTo(
//           contentRef.current[i],
//           { opacity: 0, y: 50 },
//           { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
//           "<"
//         );

//         // Snap yellow circle to position
//         tl.to(
//           circleRef.current,
//           { left: positions[i], duration: 0.5, ease: "power2.out" },
//           "<"
//         );

//         // Fade out previous slide
//         if (i > 0) {
//           tl.to(videoRef.current[i - 1], { opacity: 0, duration: 1 }, "<");
//           tl.to(contentRef.current[i - 1], { opacity: 0, y: 50, duration: 1 }, "<");
//         }
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden"
//     >
//       {/* Title */}
//       <h1
//         ref={titleRef}
//         className="text-6xl md:text-8xl font-extrabold text-center z-10 tracking-widest"
//       >
//         EFFECTIVE
//       </h1>

//       {/* Videos and content */}
//       {slides.map((slide, i) => (
//         <div
//           key={i}
//           ref={(el) => {
//             if (el) videoRef.current[i] = el;
//           }}
//           className="absolute inset-0 flex items-center justify-center opacity-0 scale-95"
//         >
//           <video
//             src={slide.video}
//             autoPlay
//             muted
//             loop
//             className="w-full h-full object-cover"
//           ></video>

//           {/* Gradient overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

//           {/* Content inside video */}
//           <div
//             ref={(el) => {
//               if (el) contentRef.current[i] = el;
//             }}
//             className="absolute inset-0 flex items-center justify-center opacity-0 px-8"
//           >
//             <p className="text-xl md:text-3xl font-medium text-center px-8 max-w-3xl bg-black/50 backdrop-blur-sm rounded-2xl p-6 leading-relaxed shadow-lg">
//               {slide.content}
//             </p>
//           </div>
//         </div>
//       ))}

//       {/* White Line + Yellow Circle at Bottom */}
//       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-3/4 flex items-center justify-center">
//         <div className="absolute h-[2px] bg-white w-full"></div>
//         <div
//           ref={circleRef}
//           className="absolute w-5 h-5 rounded-full bg-yellow-500 shadow-lg"
//           style={{ left: "0%", transform: "translateY(-50%)" }}
//         ></div>
//       </div>
//     </section>
//   );
// }
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// import video1 from "/src/assets/CategoriesVedio/vedio1.mp4";
// import video2 from "/src/assets/CategoriesVedio/vedio2.mp4";
// import video3 from "/src/assets/CategoriesVedio/vedio3.mp4";
// import video4 from "/src/assets/CategoriesVedio/vedio4.mp4";
// import video5 from "/src/assets/CategoriesVedio/vedio5.mp4";

// const slides = [
//   { video: video1, content: "Discover new possibilities..." },
//   { video: video2, content: "Architect your solutions..." },
//   { video: video3, content: "Build and implement..." },
//   { video: video4, content: "Elevate your business..." },
//   { video: video5, content: "Support every step..." },
// ];

// export default function ServiceSection() {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const videoRef = useRef([]);
//   const contentRef = useRef([]);
//   const progressLineRef = useRef(null);

//   videoRef.current = [];
//   contentRef.current = [];

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: `bottom+=${slides.length * 400}% top`,
//           scrub: 2,
//           pin: true,
//           anticipatePin: 1,
//           onUpdate: (self) => {
//             // Animate left half of the line
//             const progress = self.progress.toFixed(3); // 0-1
//             if (progressLineRef.current) {
//               progressLineRef.current.style.width = `${progress * 50}%`; // left half grows
//             }
//           },
//         },
//       });

//       // Title zoom out
//       tl.to(titleRef.current, {
//         scale: 0.5,
//         opacity: 0,
//         duration: 1.5,
//         ease: "power2.out",
//       });

//       slides.forEach((slide, i) => {
//         tl.fromTo(
//           videoRef.current[i],
//           { opacity: 0, scale: 0.95 },
//           { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" },
//           i === 0 ? ">-0.3" : ">0"
//         );

//         tl.fromTo(
//           contentRef.current[i],
//           { opacity: 0, y: 50 },
//           { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
//           "<"
//         );

//         if (i > 0) {
//           tl.to(videoRef.current[i - 1], { opacity: 0, duration: 1 }, "<");
//           tl.to(contentRef.current[i - 1], { opacity: 0, y: 50, duration: 1 }, "<");
//         }
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden"
//     >
//       {/* Title */}
//       <h1
//         ref={titleRef}
//         className="text-6xl md:text-8xl font-extrabold text-center z-10 tracking-widest"
//       >
//         EFFECTIVE
//       </h1>

//       {/* Videos */}
//       {slides.map((slide, i) => (
//         <div
//           key={i}
//           ref={(el) => {
//             if (el) videoRef.current[i] = el;
//           }}
//           className="absolute inset-0 flex items-center justify-center opacity-0 scale-95"
//         >
//           <video src={slide.video} autoPlay muted loop className="w-full h-full object-cover" />
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

//           <div
//             ref={(el) => {
//               if (el) contentRef.current[i] = el;
//             }}
//             className="absolute inset-0 flex items-center justify-center opacity-0 px-8"
//           >
//             <p className="text-xl md:text-3xl font-medium text-center px-8 max-w-3xl bg-black/50 backdrop-blur-sm rounded-2xl p-6 leading-relaxed shadow-lg">
//               {slide.content}
//             </p>
//           </div>
//         </div>
//       ))}

//       {/* Progress Line + Circle */}
//       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center w-3/4 h-5">
//         {/* Left half: grows */}
//         <div
//           ref={progressLineRef}
//           className="h-[4px] bg-yellow-500 origin-left transition-all duration-200"
//           style={{ width: "0%" }}
//         ></div>

//         {/* Right half: fixed */}
//         <div className="h-[4px] bg-white flex-1"></div>

//         {/* Circle at center */}
//         <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-yellow-500 rounded-full shadow-lg z-10"></div>
//       </div>
//     </section>
//   );
// }
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// import video1 from "/src/assets/CategoriesVedio/vedio1.mp4";
// import video2 from "/src/assets/CategoriesVedio/vedio2.mp4";
// import video3 from "/src/assets/CategoriesVedio/vedio3.mp4";
// import video4 from "/src/assets/CategoriesVedio/vedio4.mp4";
// import video5 from "/src/assets/CategoriesVedio/vedio5.mp4";

// const slides = [
//   { video: video1, content: "Discover new possibilities. We analyze, research, and strategize to uncover opportunities that align with your vision." },
//   { video: video2, content: "With clarity and purpose, we design a robust strategy that aligns innovation with your objectives. Whether it’s AR/VR experiences, cloud infrastructure, or identity management systems, we architect scalable, secure, and future-ready solutions that drive sustainable growth." },
//   { video: video3, content: "Our engineers and designers bring your ideas to life with precision and creativity. From mobile and web app development to immersive 3D experiences, we ensure every product is crafted to perform seamlessly and deliver exceptional user experiences." },
//   { video: video4, content: "Innovation doesn’t stop at launch. We continuously optimize, enhance, and adapt your solutions to keep pace with evolving technologies and market needs—ensuring your business stays ahead of the curve." },
//   { video: video5, content: "At ThirdVizion Labs, our partnership doesn’t end when the project is delivered. Our dedicated support team ensures your systems remain efficient, secure, and optimized—every hour of every da" },
// ];

// export default function ServiceSection() {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const videoRef = useRef([]);
//   const contentRef = useRef([]);
//   const progressLineRef = useRef(null);

//   videoRef.current = [];
//   contentRef.current = [];

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: `bottom+=${slides.length * 400}% top`,
//           scrub: 2,
//           pin: true,
//           anticipatePin: 1,
//           onUpdate: (self) => {
//             // Animate progress from right to left
//             const progress = self.progress.toFixed(3); // 0-1
//             if (progressLineRef.current) {
//               progressLineRef.current.style.width = `${progress * 50}%`; // right half grows toward center
//             }
//           },
//         },
//       });

//       // Title zoom out
//       tl.to(titleRef.current, {
//         scale: 0.5,
//         opacity: 0,
//         duration: 1.5,
//         ease: "power2.out",
//       });

//       slides.forEach((slide, i) => {
//         tl.fromTo(
//           videoRef.current[i],
//           { opacity: 0, scale: 0.95 },
//           { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" },
//           i === 0 ? ">-0.3" : ">0"
//         );

//         tl.fromTo(
//           contentRef.current[i],
//           { opacity: 0, y: 50 },
//           { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
//           "<"
//         );

//         if (i > 0) {
//           tl.to(videoRef.current[i - 1], { opacity: 0, duration: 1 }, "<");
//           tl.to(contentRef.current[i - 1], { opacity: 0, y: 50, duration: 1 }, "<");
//         }
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden"
//     >
//       {/* Title */}
//       <h1
//         ref={titleRef}
//         className="text-6xl md:text-8xl font-extrabold text-center z-10 tracking-widest"
//       >
//         EFFECTIVE
//       </h1>

//       {/* Videos */}
//       {slides.map((slide, i) => (
//         <div
//           key={i}
//           ref={(el) => {
//             if (el) videoRef.current[i] = el;
//           }}
//           className="absolute inset-0 flex items-center justify-center opacity-0 scale-95"
//         >
//           <video src={slide.video} autoPlay muted loop className="w-full h-full object-cover" />
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

//           <div
//             ref={(el) => {
//               if (el) contentRef.current[i] = el;
//             }}
//             className="absolute inset-0 flex items-center justify-center opacity-0 px-8"
//           >
//             <p className="text-xl md:text-3xl font-medium text-center px-8 max-w-3xl  backdrop-blur-sm rounded-2xl p-6 leading-relaxed shadow-lg">
//               {slide.content}
//             </p>
//           </div>
//         </div>
//       ))}

//       {/* Progress Line + Yellow Circle */}
//       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-white/30">
//         {/* Right-to-left growing line */}
//         <div
//           ref={progressLineRef}
//           className="h-1 bg-white origin-right transition-all duration-200"
//           style={{ width: "0%" }}
//         ></div>

//         {/* Yellow circle at center */}
//         <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-yellow-500 rounded-full shadow-lg"></div>
//       </div>
//     </section>
//   );
// }


import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import video1 from "/src/assets/CategoriesVedio/vedio1.mp4";
import video2 from "/src/assets/CategoriesVedio/vedio2.mp4";
import video3 from "/src/assets/CategoriesVedio/vedio3.mp4";
import video4 from "/src/assets/CategoriesVedio/vedio4.mp4";
import video5 from "/src/assets/CategoriesVedio/vedio5.mp4";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  { video: video1, content: "Discover new possibilities. We analyze, research, and strategize to uncover opportunities that align with your vision." },
  { video: video2, content: "With clarity and purpose, we design a robust strategy that aligns innovation with your objectives. Whether it’s AR/VR experiences, cloud infrastructure, or identity management systems, we architect scalable, secure, and future-ready solutions that drive sustainable growth." },
  { video: video3, content: "Our engineers and designers bring your ideas to life with precision and creativity. From mobile and web app development to immersive 3D experiences, we ensure every product is crafted to perform seamlessly and deliver exceptional user experiences." },
  { video: video4, content: "Innovation doesn’t stop at launch. We continuously optimize, enhance, and adapt your solutions to keep pace with evolving technologies and market needs—ensuring your business stays ahead of the curve." },
  { video: video5, content: "At ThirdVizion Labs, our partnership doesn’t end when the project is delivered. Our dedicated support team ensures your systems remain efficient, secure, and optimized—every hour of every day." },
];

export default function ServiceSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const videoRefs = useRef([]);
  const contentRefs = useRef([]);
  const lineRefs = useRef([]);

  videoRefs.current = [];
  contentRefs.current = [];
  lineRefs.current = [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title zoom out first
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${slides.length * 500}%`,
          scrub: 2,
          pin: true,
        },
      });

      mainTl.to(titleRef.current, {
        scale: 0.5,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
      });

      slides.forEach((slide, i) => {
        const tl = gsap.timeline();

        // Show video and content
        tl.fromTo(
          videoRefs.current[i],
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
        );
        tl.fromTo(
          contentRefs.current[i],
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
          "<"
        );

        // Animate the white line from the center to right
        tl.fromTo(
          lineRefs.current[i],
          { scaleX: 0 },
          { scaleX: 1, transformOrigin: "left", duration: 1.5, ease: "none" },
          "<"
        );

        // Hide video, content, and line
        tl.to(
          [videoRefs.current[i], contentRefs.current[i]],
          { opacity: 0, duration: 1, ease: "power1.inOut" },
          ">0.3"
        );
        tl.to(
          lineRefs.current[i],
          { scaleX: 0, transformOrigin: "right", duration: 1.5, ease: "none" },
          "<"
        );

        mainTl.add(tl, i * 2);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden"
    >
      {/* Title */}
      <h1
        ref={titleRef}
        className="text-6xl md:text-8xl font-extrabold text-center z-10 tracking-widest"
      >
        EFFECTIVE
      </h1>

      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          ref={(el) => (videoRefs.current[i] = el)}
          className="absolute inset-0 flex items-center justify-center opacity-0"
        >
          <video
            src={slide.video}
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

          <div
            ref={(el) => (contentRefs.current[i] = el)}
            className="absolute bottom-24 flex items-center justify-center w-full opacity-0"
          >
            <p className="text-xl md:text-3xl font-medium text-center px-8 max-w-3xl backdrop-blur-sm  rounded-2xl p-6 leading-relaxed shadow-lg">
              {slide.content}
            </p>
          </div>

          {/* Line animation for each video */}
          <div className="absolute bottom-10 left-1/2 w-3/4 h-1  transform -translate-x-1/2">
            <div
              ref={(el) => (lineRefs.current[i] = el)}
              className="h-1 bg-white origin-left scale-x-0"
            ></div>
          </div>
        </div>
      ))}

      {/* Fixed Yellow Circle */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 w-6 h-6 bg-yellow-500 rounded-full shadow-lg z-50"></div>
    </section>
  );
}
