
// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import {
//   Calendar,
//   Mail,
//   Linkedin,
//   MessageCircle,
//   PhoneCall,
//   Users,
//   BarChart3,
// } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// export default function CRMChallenges() {
//   const linesRef = useRef([]);
//   const sectionRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const cardData = [
//     {
//       title: "Automated Meeting Scheduling",
//       desc: "Seamlessly sync all appointments with  CRM. Eliminate scheduling conflicts and ensure perfect follow-up timing.",
//     },
//     {
//       title: "Unified Email Management",
//       desc: "Centralize all customer communications with complete email tracking and response history within your CRM.",
//     },
//     {
//       title: "LinkedIn Sales Navigator",
//       desc: "Directly import LinkedIn prospects and conversations into your sales pipeline for efficient lead management.",
//     },
//     {
//       title: "Intelligent Call Management",
//       desc: "Automatically log all customer calls with detailed notes and performance analytics for better insights.",
//     },
//     {
//       title: "Multi-Channel Messaging",
//       desc: "Integrate SMS, WhatsApp, and live chat into a single CRM inbox for complete conversation history.",
//     },
//     {
//       title: "360° Customer View",
//       desc: "Access comprehensive customer profiles with complete interaction history and relationship insights.",
//     },
//     {
//       title: "Advanced Analytics Dashboard",
//       desc: "Generate real-time sales intelligence with AI-powered forecasting and performance metrics.",
//     },
//   ];

//   const platforms = [
//     { icon: <Calendar className="w-8 h-8" />, label: "Meetings" },
//     { icon: <Mail className="w-8 h-8" />, label: "Emails" },
//     { icon: <Linkedin className="w-8 h-8" />, label: "LinkedIn" },
//     { icon: <PhoneCall className="w-8 h-8" />, label: "Calls" },
//     { icon: <MessageCircle className="w-8 h-8" />, label: "Messages" },
//     { icon: <Users className="w-8 h-8" />, label: "Contacts" },
//     { icon: <BarChart3 className="w-8 h-8" />, label: "Reports" },
//   ];

//   linesRef.current = [];

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Animate SVG lines draw on load
//       linesRef.current.forEach((line) => {
//         const length = line.getTotalLength();
//         gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });
//         gsap.to(line, {
//           strokeDashoffset: 0,
//           duration: 1.4,
//           ease: "power2.out",
//         });
//       });

//       // ScrollTrigger logic — change activeIndex on scroll
//       const totalItems = platforms.length;

//       ScrollTrigger.create({
//         trigger: sectionRef.current,
//         start: "top top",
//         end: "+=3000", // control scroll length
//         scrub: true,
//         pin: true,
//         onUpdate: (self) => {
//           const progress = self.progress; // 0 → 1
//           const index = Math.min(
//             totalItems - 1,
//             Math.floor(progress * totalItems)
//           );
//           setActiveIndex(index);
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   function addLineRef(el) {
//     if (el && !linesRef.current.includes(el)) linesRef.current.push(el);
//   }

//   // Highlight line animation for active platform
//   useEffect(() => {
//     const line = linesRef.current[activeIndex];
//     if (line) {
//       gsap.fromTo(
//         line,
//         { strokeWidth: 2, opacity: 0.6 },
//         {
//           strokeWidth: 5,
//           opacity: 1,
//           duration: 0.7,
//           yoyo: true,
//           repeat: 1,
//           ease: "power2.inOut",
//         }
//       );
//     }
//   }, [activeIndex]);

//   return (
//     // <section
//     //   ref={sectionRef}
//     //   className="relative overflow-hidden text-white px-6 md:px-16 py-24 bg-[#0B0B0B]"
//     // >
//     //   {/* Section Header */}
//     //   <div className="relative max-w-6xl mx-auto text-center mb-5 md:mb-10">
//     //     <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-[#FF6467]">
//     //       All your sales channels, unified
//     //     </h2>
//     //     <p className="text-white/70 text-md max-w-3xl mx-auto">
//     //       CRM integrates every customer touchpoint into one powerful platform. 
//     //       From initial contact to closed deal, maintain complete visibility across all channels.
//     //     </p>
//     //   </div>

//     //   {/* Main Content */}
//     //   <div className="relative flex flex-col items-center">
//     //     {/* Icons Row */}
//     //     <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-7 gap-6 md:gap-10 mb-5 md:mb-24 relative z-10">
//     //       {platforms.map((p, i) => (
//     //         <div
//     //           key={i}
//     //           className={`flex flex-col items-center justify-center gap-3 group transition-transform ${activeIndex === i ? "scale-100 md:scale-125" : "scale-75 md:scale-100"
//     //             }`}
//     //         >
//     //           <div
//     //             className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl border text-xl transition-all duration-300 ${activeIndex === i
//     //               ? "bg-[#FF6467] text-white shadow-[0_0_20px_rgba(255,100,103,0.5)] border-transparent"
//     //               : "bg-white/5 border-white/10"
//     //               }`}
//     //           >
//     //             {p.icon}
//     //           </div>
//     //           <span
//     //             className={`text-sm md:text-base font-medium transition-colors duration-300 ${activeIndex === i ? "text-[#FF6467]" : "text-white/70"
//     //               }`}
//     //           >
//     //             {p.label}
//     //           </span>
//     //         </div>
//     //       ))}
//     //     </div>

//     //     {/* SVG Connections */}
//     //     <svg
//     //       className="hidden md:flex absolute inset-0 md:-top-8 lg:-top-4 xl:-top-2 2xl:-top-4 md:left-3 lg:left-4 xl:left-4 w-full h-full pointer-events-none md:scale-130 lg:scale-120"
//     //       viewBox="0 0 1400 700"
//     //       preserveAspectRatio="xMidYMid meet"
//     //     >
//     //       {platforms.map((_, i) => {
//     //         const x = 200 + i * 160;
//     //         return (
//     //           <path
//     //             key={i}
//     //             ref={addLineRef}
//     //             d={`M${x},180 C${x},360 700,360 700,460`}
//     //             stroke={activeIndex === i ? "url(#lineGradient)" : "#444"}
//     //             strokeWidth="3"
//     //             fill="none"
//     //             opacity={activeIndex === i ? "1" : "0.3"}
//     //           />
//     //         );
//     //       })}
//     //       <defs>
//     //         <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
//     //           <stop offset="0%" stopColor="#FF6467" />
//     //           <stop offset="100%" stopColor="#FF8486" />
//     //         </linearGradient>
//     //       </defs>
//     //     </svg>

//     //     {/* Central CRM Card */}
//     //     <div
//     //       className={`relative z-20 w-full max-w-md sm:max-w-lg md:w-[420px] backdrop-blur-2xl rounded-3xl p-6 sm:p-8 shadow-2xl transition-all duration-500 ${activeIndex !== null
//     //         ? "border-2 border-[#FF6467] bg-[#FF646710]"
//     //         : "border border-white/10 bg-white/5"
//     //         }`}
//     //     >
//     //       <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
//     //         <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FF6467] flex items-center justify-center font-bold text-lg sm:text-xl shadow-[0_0_15px_rgba(255,100,103,0.5)]">
//     //           CRM
//     //         </div>
//     //         <div className="text-center sm:text-left">
//     //           <div className="font-semibold text-xl sm:text-2xl">
//     //             {cardData[activeIndex].title}
//     //           </div>
//     //           <div className="text-sm sm:text-base text-white/70 mt-1 sm:mt-2">
//     //             {platforms[activeIndex].label}
//     //           </div>
//     //         </div>
//     //       </div>

//     //       <div className="mt-4 sm:mt-6 text-sm sm:text-base text-white/80 leading-relaxed">
//     //         {cardData[activeIndex].desc}
//     //       </div>
//     //     </div>
//     //   </div>
//     // </section>
//     <section
//   ref={sectionRef}
//   className="relative w-full h-screen bg-[#0B0B0B] text-white overflow-hidden px-6 md:px-16 py-24 flex items-center"
// >
//   {/* Left Vertical Platforms */}
//   <div className="flex flex-col gap-8 absolute left-10 top-1/2 -translate-y-1/2 z-20">
//     {platforms.map((p, i) => {
//       // Only show connecting lines for these platforms
//       const showLine = ["LinkedIn", "Calls", "Messages", "Contacts", "Reports"].includes(p.label);

//       return (
//         <div
//           key={i}
//           className={`flex items-center gap-3 transition-transform ${
//             activeIndex === i ? "scale-105" : "scale-95"
//           }`}
//         >
//           <div
//             className={`w-12 h-12 rounded-full flex items-center justify-center border text-lg ${
//               activeIndex === i
//                 ? "bg-[#FF6467] text-white shadow-[0_0_15px_rgba(255,100,103,0.5)] border-transparent"
//                 : "bg-white/5 border-white/10 text-white/70"
//             }`}
//           >
//             {p.icon}
//           </div>
//           <span
//             className={`font-medium transition-colors ${
//               activeIndex === i ? "text-[#FF6467]" : "text-white/70"
//             }`}
//           >
//             {p.label}
//           </span>

//           {/* Optional dot to mark line connection */}
//           {showLine && (
//             <span className="w-2 h-2 bg-[#FF6467] rounded-full ml-1 hidden md:inline-block"></span>
//           )}
//         </div>
//       );
//     })}
//   </div>

//   {/* Central CRM Icon */}
//   <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
//     <div className="w-28 h-28 rounded-full bg-[#FF6467] flex items-center justify-center font-bold text-2xl shadow-[0_0_25px_rgba(255,100,103,0.5)]">
//       CRM
//     </div>

//     {/* Connecting Lines */}
//     <svg
//       className="absolute top-0 left-0 w-full h-full pointer-events-none"
//       viewBox="0 0 1400 800"
//       preserveAspectRatio="none"
//     >
//       {platforms.map((p, i) => {
//         // Only draw lines for specific platforms
//         if (!["LinkedIn", "Calls", "Messages", "Contacts", "Reports"].includes(p.label)) return null;

//         const y = 100 + i * 80; // vertical position of platform
//         return (
//           <path
//             key={i}
//             ref={addLineRef}
//             d={`M200,${y} C600,${y} 600,400 700,400`} // adjust curve
//             stroke={activeIndex === i ? "url(#lineGradient)" : "#444"}
//             strokeWidth="2.5"
//             fill="none"
//             opacity={activeIndex === i ? "1" : "0.5"}
//           />
//         );
//       })}
//       <defs>
//         <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
//           <stop offset="0%" stopColor="#FF6467" />
//           <stop offset="100%" stopColor="#FF8486" />
//         </linearGradient>
//       </defs>
//     </svg>
//   </div>

//   {/* Description Card */}
//   <div className="absolute right-10 top-1/2 -translate-y-1/2 z-20 w-96 sm:w-[420px] backdrop-blur-2xl rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-[#FF6467] bg-[#FF646710]">
//     <div className="font-semibold text-xl sm:text-2xl">
//       {cardData[activeIndex].title}
//     </div>
//     <div className="text-sm sm:text-base text-white/70 mt-2">
//       {platforms[activeIndex].label}
//     </div>
//     <div className="mt-4 sm:mt-6 text-sm sm:text-base text-white/80 leading-relaxed">
//       {cardData[activeIndex].desc}
//     </div>
//   </div>
// </section>

//   );
// }
// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import {
//   Calendar,
//   Mail,
//   Linkedin,
//   MessageCircle,
//   PhoneCall,
//   Users,
//   BarChart3,
// } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// export default function CRMChallenges() {
//   const linesRef = useRef([]);
//   const sectionRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const cardData = [
//     {
//       title: "Automated Meeting Scheduling",
//       desc: "Seamlessly sync all appointments with CRM. Eliminate scheduling conflicts and ensure perfect follow-up timing.",
//     },
//     {
//       title: "Unified Email Management",
//       desc: "Centralize all customer communications with complete email tracking and response history within your CRM.",
//     },
//     {
//       title: "LinkedIn Sales Navigator",
//       desc: "Directly import LinkedIn prospects and conversations into your sales pipeline for efficient lead management.",
//     },
//     {
//       title: "Intelligent Call Management",
//       desc: "Automatically log all customer calls with detailed notes and performance analytics for better insights.",
//     },
//     {
//       title: "Multi-Channel Messaging",
//       desc: "Integrate SMS, WhatsApp, and live chat into a single CRM inbox for complete conversation history.",
//     },
//     {
//       title: "360° Customer View",
//       desc: "Access comprehensive customer profiles with complete interaction history and relationship insights.",
//     },
//     {
//       title: "Advanced Analytics Dashboard",
//       desc: "Generate real-time sales intelligence with AI-powered forecasting and performance metrics.",
//     },
//   ];

//   const platforms = [
//     { icon: <Calendar className="w-4 h-4" />, label: "Meetings" },
//     { icon: <Mail className="w-4 h-4" />, label: "Emails" },
//     { icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn" },
//     { icon: <PhoneCall className="w-4 h-4" />, label: "Calls" },
//     { icon: <MessageCircle className="w-4 h-4" />, label: "Messages" },
//     { icon: <Users className="w-4 h-4" />, label: "Contacts" },
//     { icon: <BarChart3 className="w-4 h-4" />, label: "Reports" },
//   ];

//   linesRef.current = [];

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Animate SVG lines draw on load
//       linesRef.current.forEach((line) => {
//         const length = line.getTotalLength();
//         gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });
//         gsap.to(line, {
//           strokeDashoffset: 0,
//           duration: 1.4,
//           ease: "power2.out",
//         });
//       });

//       // Create scroll trigger for each platform
//       platforms.forEach((_, index) => {
//         ScrollTrigger.create({
//           trigger: sectionRef.current,
//           start: `top+=${index * 100} center`,
//           end: `top+=${(index + 1) * 100} center`,
//           onEnter: () => setActiveIndex(index),
//           onEnterBack: () => setActiveIndex(index),
//           onLeave: () => {
//             if (index < platforms.length - 1) setActiveIndex(index + 1);
//           },
//           onLeaveBack: () => {
//             if (index > 0) setActiveIndex(index - 1);
//           },
//         });
//       });

//       // Pin the section
//       ScrollTrigger.create({
//         trigger: sectionRef.current,
//         start: "top top",
//         end: "bottom bottom",
//         pin: true,
//         pinSpacing: false,
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   function addLineRef(el) {
//     if (el && !linesRef.current.includes(el)) linesRef.current.push(el);
//   }

//   // Highlight line animation for active platform
//   useEffect(() => {
//     linesRef.current.forEach((line, index) => {
//       if (line) {
//         if (index === activeIndex) {
//           gsap.to(line, {
//             strokeWidth: 4,
//             opacity: 1,
//             duration: 0.3,
//             ease: "power2.out",
//           });
//         } else {
//           gsap.to(line, {
//             strokeWidth: 1.5,
//             opacity: 0.15,
//             duration: 0.3,
//             ease: "power2.out",
//           });
//         }
//       }
//     });
//   }, [activeIndex]);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full min-h-screen bg-[#0B0B0B] text-white overflow-hidden px-6 md:px-16 py-24 flex items-center justify-center"
//     >
//       {/* Section Header */}
//       <div className="absolute top-8 left-0 right-0 text-center z-30">
//         <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 text-[#FF6467]">
//           All your sales channels, unified
//         </h2>
//         <p className="text-white/70 text-sm md:text-base max-w-2xl mx-auto">
//           CRM integrates every customer touchpoint into one powerful platform.
//         </p>
//       </div>

//       {/* Main Three-Column Layout */}
//       <div className="relative w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-center h-[500px] mt-12">
        
//         {/* Left Column - All Platforms (Compact) */}
//         <div className="flex flex-col items-start space-y-1 z-20">
//           <h3 className="text-lg font-bold text-[#FF6467] mb-2 ml-2">Sales Channels</h3>
//           <div className="space-y-1">
//             {platforms.map((p, i) => (
//               <div
//                 key={i}
//                 className={`flex items-center gap-2 p-2 rounded-lg transition-all duration-300 min-w-[160px] ${
//                   activeIndex === i 
//                     ? "bg-[#FF6467] bg-opacity-25 border border-[#FF6467] shadow-lg" 
//                     : "bg-white/5 border border-transparent opacity-80 hover:opacity-100"
//                 }`}
//               >
//                 <div
//                   className={`w-7 h-7 rounded-md flex items-center justify-center border transition-all duration-300 ${
//                     activeIndex === i
//                       ? "bg-[#FF6467] text-white shadow-[0_0_6px_rgba(255,100,103,0.6)] border-transparent"
//                       : "bg-white/5 border-white/20 text-white/60"
//                   }`}
//                 >
//                   {p.icon}
//                 </div>
//                 <span
//                   className={`text-xs font-medium transition-colors duration-300 ${
//                     activeIndex === i ? "text-[#FF6467] font-semibold" : "text-white/60"
//                   }`}
//                 >
//                   {p.label}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Center Column - Larger CRM Hub */}
//         <div className="flex flex-col items-center justify-center z-20">
//           <div className="text-center">
//             <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#FF6467] to-[#FF8486] flex items-center justify-center font-bold text-3xl shadow-[0_0_40px_rgba(255,100,103,0.8)] relative">
//               CRM
//               {/* Animated pulse effect */}
//               <div className="absolute inset-0 rounded-full border-2 border-[#FF6467] animate-ping opacity-20"></div>
//             </div>
//             <p className="text-white/60 text-sm mt-3 font-medium">
//               Central Hub
//             </p>
//           </div>
//         </div>

//         {/* Right Column - Feature Card */}
//         <div className="flex flex-col items-center justify-center z-20">
//           <div className="w-full max-w-sm backdrop-blur-2xl rounded-xl p-6 border border-[#FF6467] bg-[#FF646715] shadow-lg">
//             <div className="text-center">
//               <div className="font-semibold text-lg text-[#FF6467] mb-2">
//                 {cardData[activeIndex].title}
//               </div>
//               <div className="text-white/70 text-xs mb-3 font-medium uppercase tracking-wide">
//                 {platforms[activeIndex].label}
//               </div>
//               <div className="text-white/80 text-xs leading-relaxed">
//                 {cardData[activeIndex].desc}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* SVG Connecting Lines - Adjusted for larger CRM hub */}
//         <svg
//           className="absolute inset-0 w-full h-full pointer-events-none z-10"
//           viewBox="0 0 1000 500"
//           preserveAspectRatio="xMidYMid meet"
//         >
//           {/* Lines from Left Icons to CRM Center - Adjusted for larger CRM */}
//           {platforms.map((_, i) => {
//             // Calculate positions to precisely target each icon
//             const startY = 60 + i * 36; // Matches the compact icon spacing
//             const endY = 250; // Center of CRM circle
            
//             return (
//               <path
//                 key={`line-${i}`}
//                 ref={addLineRef}
//                 d={`M160,${startY} C300,${startY} 350,${endY} 400,${endY}`}
//                 stroke={activeIndex === i ? "url(#lineGradient)" : "#333"}
//                 strokeWidth={activeIndex === i ? "3" : "1.5"}
//                 fill="none"
//                 opacity={activeIndex === i ? "1" : "0.1"}
//                 strokeLinecap="round"
//               />
//             );
//           })}

//           {/* Single permanent line from CRM to Description */}
//           <path
//             d="M600,250 C700,250 700,250 750,250"
//             stroke="url(#lineGradient)"
//             strokeWidth="2.5"
//             fill="none"
//             opacity="0.8"
//             strokeLinecap="round"
//           />

//           <defs>
//             <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
//               <stop offset="0%" stopColor="#FF6467" />
//               <stop offset="50%" stopColor="#FF8486" />
//               <stop offset="100%" stopColor="#FF6467" />
//             </linearGradient>
//           </defs>
//         </svg>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
//         <div className="flex items-center gap-2 text-white/50 text-xs">
//           {platforms.map((_, index) => (
//             <div 
//               key={index}
//               className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
//                 activeIndex === index ? 'bg-[#FF6467] scale-125' : 'bg-white/30'
//               }`}
//             ></div>
//           ))}
//         </div>
//         <p className="text-white/40 text-xs mt-2 text-center">
//           Scroll to explore features
//         </p>
//       </div>
//     </section>
//   );
// }
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Calendar,
  Mail,
  Linkedin,
  MessageCircle,
  PhoneCall,
  Users,
  BarChart3,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CRMChallenges() {
  const linesRef = useRef([]);
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cardData = [
    {
      title: "Automated Meeting Scheduling",
      desc: "Seamlessly sync all appointments with CRM. Eliminate scheduling conflicts and ensure perfect follow-up timing.",
    },
    {
      title: "Unified Email Management",
      desc: "Centralize all customer communications with complete email tracking and response history within your CRM.",
    },
    {
      title: "LinkedIn Sales Navigator",
      desc: "Directly import LinkedIn prospects and conversations into your sales pipeline for efficient lead management.",
    },
    {
      title: "Intelligent Call Management",
      desc: "Automatically log all customer calls with detailed notes and performance analytics for better insights.",
    },
    {
      title: "Multi-Channel Messaging",
      desc: "Integrate SMS, WhatsApp, and live chat into a single CRM inbox for complete conversation history.",
    },
    {
      title: "360° Customer View",
      desc: "Access comprehensive customer profiles with complete interaction history and relationship insights.",
    },
    {
      title: "Advanced Analytics Dashboard",
      desc: "Generate real-time sales intelligence with AI-powered forecasting and performance metrics.",
    },
  ];

  const platforms = [
    { icon: <Calendar className="w-4 h-4" />, label: "Meetings" },
    { icon: <Mail className="w-4 h-4" />, label: "Emails" },
    { icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn" },
    { icon: <PhoneCall className="w-4 h-4" />, label: "Calls" },
    { icon: <MessageCircle className="w-4 h-4" />, label: "Messages" },
    { icon: <Users className="w-4 h-4" />, label: "Contacts" },
    { icon: <BarChart3 className="w-4 h-4" />, label: "Reports" },
  ];

  linesRef.current = [];

  function addLineRef(el) {
    if (el && !linesRef.current.includes(el)) linesRef.current.push(el);
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate SVG lines draw on load
      linesRef.current.forEach((line) => {
        const length = line.getTotalLength();
        gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(line, {
          strokeDashoffset: 0,
          duration: 1.4,
          ease: "power2.out",
        });
      });

      const totalItems = platforms.length;
      const scrollDistancePerItem = 400;

      // ScrollTrigger with smooth transitions
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${totalItems * scrollDistancePerItem}`,
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          const index = Math.min(
            totalItems - 1,
            Math.floor(self.progress * totalItems)
          );
          setActiveIndex(index);
        },
      });

      // Snap trigger for each platform
      platforms.forEach((_, index) => {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: `top+=${index * scrollDistancePerItem} top`,
          end: `top+=${(index + 1) * scrollDistancePerItem} top`,
          onEnter: () => gsap.delayedCall(0.2, () => setActiveIndex(index)),
          onEnterBack: () => gsap.delayedCall(0.2, () => setActiveIndex(index)),
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Highlight active line with glow
  useEffect(() => {
    const timer = setTimeout(() => {
      linesRef.current.forEach((line, index) => {
        if (line) {
          if (index === activeIndex) {
            gsap.to(line, {
              strokeWidth: 5,
              opacity: 1,
              attr: { filter: "url(#glow)" },
              duration: 0.5,
              ease: "power2.out",
            });
          } else {
            gsap.to(line, {
              strokeWidth: 1.5,
              opacity: 0.15,
              attr: { filter: "none" },
              duration: 0.5,
              ease: "power2.out",
            });
          }
        }
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#0B0B0B] text-white overflow-hidden px-6 md:px-16 py-24 flex items-center justify-center"
    >
      {/* Section Header */}
      <div className="absolute top-8 left-0 right-0 text-center z-30">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 text-[#FF6467]">
          All your sales channels, unified
        </h2>
        <p className="text-white/70 text-sm md:text-base max-w-2xl mx-auto">
          CRM integrates every customer touchpoint into one powerful platform.
        </p>
      </div>

      {/* Main Layout */}
      <div className="relative w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-center h-[500px] mt-12">
        
        {/* Left Column - Sales Channels */}
        {/* <div className="flex flex-col items-start space-y-1 z-20 -mt-8">
          <h3 className="text-lg font-bold text-[#FF6467] mb-2 ml-2">Sales Channels</h3>
          <div className="space-y-1">
            {platforms.map((p, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 p-2 rounded-lg transition-all duration-500 min-w-[160px] ${
                  activeIndex === i 
                    ? "bg-[#FF6467] border border-[#FF6467] shadow-lg" 
                    : "bg-white/5 border border-transparent opacity-80 hover:opacity-100"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-md flex items-center justify-center border transition-all duration-500 ${
                    activeIndex === i
                      ? "bg-white text-[#FF6467] shadow-[0_0_6px_rgba(255,255,255,0.6)] border-transparent"
                      : "bg-white/5 border-white/20 text-white/60"
                  }`}
                >
                  {p.icon}
                </div>
                <span
                  className={`text-xs font-medium transition-colors duration-500 ${
                    activeIndex === i ? "text-white font-semibold" : "text-white/60"
                  }`}
                >
                  {p.label}
                </span>
              </div>
            ))}
          </div>
        </div> */}
        {/* Left Column - Sales Channels */}
<div className="flex flex-col items-start space-y-1 z-20 -mt-[200px]">
  <h3 className="text-lg font-bold text-[#FF6467] mb-2 ml-2">Sales Channels</h3>
  <div className="space-y-1">
    {platforms.map((p, i) => (
      <div
        key={i}
        className={`flex items-center gap-2 p-2 rounded-lg transition-all duration-500 min-w-[160px] ${
          activeIndex === i 
            ? "bg-[#FF6467] border border-[#FF6467] shadow-lg" 
            : "bg-white/5 border border-transparent opacity-80 hover:opacity-100"
        }`}
      >
        <div
          className={`w-7 h-7 rounded-md flex items-center justify-center border transition-all duration-500 ${
            activeIndex === i
              ? "bg-white text-[#FF6467] shadow-[0_0_6px_rgba(255,255,255,0.6)] border-transparent"
              : "bg-white/5 border-white/20 text-white/60"
          }`}
        >
          {p.icon}
        </div>
        <span
          className={`text-xs font-medium transition-colors duration-500 ${
            activeIndex === i ? "text-white font-semibold" : "text-white/60"
          }`}
        >
          {p.label}
        </span>
      </div>
    ))}
  </div>
</div>


        {/* Center Column - CRM Hub */}
        <div className="flex flex-col items-center justify-center z-20">
          <div className="text-center">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#FF6467] to-[#FF8486] flex items-center justify-center font-bold text-3xl shadow-[0_0_40px_rgba(255,100,103,0.8)] relative">
              CRM
              <div className="absolute inset-0 rounded-full border-2 border-[#FF6467] animate-ping opacity-20"></div>
            </div>
            <p className="text-white/60 text-sm mt-3 font-medium">
              Central Hub
            </p>
          </div>
        </div>

        {/* Right Column - Feature Card */}
        <div className="flex flex-col items-center justify-center z-20">
          <div className="w-full max-w-sm backdrop-blur-2xl rounded-xl p-6 border border-[#FF6467] bg-[#FF646715] shadow-lg transition-all duration-500">
            <div className="text-center">
              <div className="font-semibold text-lg text-[#FF6467] mb-2">
                {cardData[activeIndex].title}
              </div>
              <div className="text-white/70 text-xs mb-3 font-medium uppercase tracking-wide">
                {platforms[activeIndex].label}
              </div>
              <div className="text-white/80 text-xs leading-relaxed">
                {cardData[activeIndex].desc}
              </div>
            </div>
          </div>
        </div>

        {/* SVG Connecting Lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          viewBox="0 0 1000 500"
          preserveAspectRatio="xMidYMid meet"
        >
          {platforms.map((_, i) => {
            const startY = 45 + i * 36;
            const endY = 250;

            return (
              <path
                key={`line-left-${i}`}
                ref={addLineRef}
                d={`M160,${startY} C300,${startY} 350,${endY} 400,${endY}`}
                stroke="#FF6467"
                strokeWidth={activeIndex === i ? 5 : 1.5}
                fill="none"
                opacity={activeIndex === i ? 1 : 0.15}
                strokeLinecap="round"
                filter={activeIndex === i ? "url(#glow)" : "none"}
              />
            );
          })}

          <path
            d="M600,250 C650,250 650,250 700,250"
            stroke="#FF6467"
            strokeWidth="2.5"
            fill="none"
            opacity="0.8"
            strokeLinecap="round"
          />

          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-2 text-white/50 text-xs">
          {platforms.map((_, index) => (
            <div 
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                activeIndex === index ? 'bg-[#FF6467] scale-125' : 'bg-white/30'
              }`}
            ></div>
          ))}
        </div>
        {/* <p className="text-white/40 text-xs mt-2 text-center">
          Scroll to explore features
        </p> */}
      </div>
    </section>
  );
}
