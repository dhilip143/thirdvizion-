// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import {
//   Calendar,
//   Mail,
//   Linkedin,
//   MessageCircle,
//   PhoneCall,
//   Users,
//   BarChart3,
// } from "lucide-react";

// export default function CRMChallenges() {
//   const linesRef = useRef([]);
//   const [activeIndex, setActiveIndex] = useState(null);

//   const cardData = [
//     {
//       title: "Meeting Scheduler",
//       desc: "Auto-sync all your meetings with CRM calendar. No missed follow-ups, no double booking.",
//     },
//     {
//       title: "Email Integration",
//       desc: "Track every customer email, log automatically, and respond faster without leaving CRM.",
//     },
//     {
//       title: "LinkedIn Sync",
//       desc: "Bring LinkedIn leads & conversations straight into CRM pipeline for smooth prospecting.",
//     },
//     {
//       title: "Call Tracking",
//       desc: "Log inbound & outbound calls, record notes instantly, and measure call performance.",
//     },
//     {
//       title: "Message Hub",
//       desc: "Unify SMS, WhatsApp & chat into one CRM inbox. Always know the full conversation history.",
//     },
//     {
//       title: "Contact Management",
//       desc: "360° view of every customer. All details, notes, and interactions at your fingertips.",
//     },
//     {
//       title: "Analytics & Reports",
//       desc: "Generate real-time reports. Track sales performance and improve forecasting accuracy.",
//     },
//   ];

//   linesRef.current = [];

//   useEffect(() => {
//     linesRef.current.forEach((line) => {
//       const length = line.getTotalLength();
//       gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });
//       gsap.to(line, {
//         strokeDashoffset: 0,
//         duration: 1.4,
//         ease: "power2.out",
//       });
//     });
//   }, []);

//   function addLineRef(el) {
//     if (el && !linesRef.current.includes(el)) {
//       linesRef.current.push(el);
//     }
//   }

//   function handleIconClick(index) {
//     setActiveIndex(index);

//     const line = linesRef.current[index];
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
//   }

//   const platforms = [
//     { icon: <Calendar className="w-8 h-8" />, label: "Meetings" },
//     { icon: <Mail className="w-8 h-8" />, label: "Emails" },
//     { icon: <Linkedin className="w-8 h-8" />, label: "LinkedIn" },
//     { icon: <PhoneCall className="w-8 h-8" />, label: "Calls" },
//     { icon: <MessageCircle className="w-8 h-8" />, label: "Messages" },
//     { icon: <Users className="w-8 h-8" />, label: "Contacts" },
//     { icon: <BarChart3 className="w-8 h-8" />, label: "Reports" },
//   ];

//   return (
//     <section className="relative overflow-hidden text-white px-8 md:px-16 py-28">


//       <div className="relative max-w-6xl mx-auto text-center mb-20">
//         <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
//           Connect to all platforms
//         </h2>
//         <p className="text-white/70 text-lg max-w-3xl mx-auto">
//           Every CRM channel integrated in one hub. Meetings, emails, calls and
//           deals — all synced so your team never misses an opportunity.
//         </p>
//       </div>

//       <div className="relative flex flex-col items-start">
//         {/* Icons Row */}
//         <div className="grid grid-cols-3 md:grid-cols-2 gap-1 mb-24 relative z-10">
//           {platforms.map((p, i) => (
//             <div
//               key={i}
//               onClick={() => handleIconClick(i)}
//               className={`flex flex-col items-center gap-3 group cursor-pointer transition-transform ${activeIndex === i ? "scale-80" : "scale-70"
//                 }`}
//             >
//               <div
//                 className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl border text-xl ${activeIndex === i
//                   ? "bg-gradient-to-br from-indigo-500 to-rose-500 border-transparent"
//                   : "bg-white/5 border-white/10"
//                   }`}
//               >
//                 {p.icon}
//               </div>
//               <span
//                 className={`text-sm md:text-base font-medium ${activeIndex === i ? "text-indigo-400" : "text-white/70"
//                   }`}
//               >
//                 {p.label}
//               </span>
//             </div>
//           ))}
//         </div>

//         {/* SVG Connections */}
//         <svg
//           className="absolute inset-0 w-full h-full pointer-events-none rotate-270"
//           viewBox="0 0 1100 1200"
//           preserveAspectRatio="xMidYMid meet"
//         >
//           {platforms.map((_, i) => {
//             const x = 100 + i * 160;
//             return (
//               <path
//                 key={i}
//                 ref={addLineRef}
//                 d={`M${x},0 C${x},360 700,30 700,460`}
//                 stroke={
//                   activeIndex === i
//                     ? "url(#lineGradient)" // purple gradient
//                     : "#555" // grey default
//                 }
//                 strokeWidth="3"
//                 fill="none"
//                 opacity={activeIndex === i ? "1" : "0.4"}
//               />
//             );
//           })}

//           <defs>
//             <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
//               <stop offset="0%" stopColor="#6366f1" />
//               <stop offset="100%" stopColor="#ec4899" />
//             </linearGradient>
//           </defs>
//         </svg>

//         {/* Central CRM Card */}
//         <div className="relative ">
//           <div
//             className={`absolute bottom-60 left-200 z-20 w-[520px] backdrop-blur-2xl rounded-3xl p-8 shadow-2xl transition-all duration-500 ${activeIndex !== null
//               ? "border-2 border-indigo-500 bg-gradient-to-br from-white/10 to-white/5"
//               : "border border-white/10 bg-gradient-to-br from-white/10 to-white/5"
//               }`}
//           >
//             <div className="flex items-center gap-6">
//               <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-rose-500 flex items-center justify-center font-bold text-xl">
//                 CRM
//               </div>
//               <div>
//                 <div className="font-semibold text-2xl">
//                   {activeIndex !== null
//                     ? cardData[activeIndex].title
//                     : "Unified CRM Hub"}
//                 </div>
//                 <div className="text-base text-white/70">
//                   {activeIndex !== null
//                     ? platforms[activeIndex].label
//                     : "All customer data in one place"}
//                 </div>
//               </div>
//             </div>
//             <div className="mt-6 text-base text-white/80 leading-relaxed">
//               {activeIndex !== null
//                 ? cardData[activeIndex].desc
//                 : "Every lead, meeting, email, and deal automatically captured and connected — making sure nothing falls through the cracks."}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }








import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  Calendar,
  Mail,
  Linkedin,
  MessageCircle,
  PhoneCall,
  Users,
  BarChart3,
} from "lucide-react";

// -----------------------------------------------------------------------------
// CRMChallenges
// -----------------------------------------------------------------------------
export default function CRMChallenges() {
  const linesRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const cardData = [
    {
      title: "Meeting Scheduler",
      desc: "Auto-sync all your meetings with CRM calendar. No missed follow-ups, no double booking.",
    },
    {
      title: "Email Integration",
      desc: "Track every customer email, log automatically, and respond faster without leaving CRM.",
    },
    {
      title: "LinkedIn Sync",
      desc: "Bring LinkedIn leads & conversations straight into CRM pipeline for smooth prospecting.",
    },
    {
      title: "Call Tracking",
      desc: "Log inbound & outbound calls, record notes instantly, and measure call performance.",
    },
    {
      title: "Message Hub",
      desc: "Unify SMS, WhatsApp & chat into one CRM inbox. Always know the full conversation history.",
    },
    {
      title: "Contact Management",
      desc: "360° view of every customer. All details, notes, and interactions at your fingertips.",
    },
    {
      title: "Analytics & Reports",
      desc: "Generate real-time reports. Track sales performance and improve forecasting accuracy.",
    },
  ];

  linesRef.current = [];

  useEffect(() => {
    linesRef.current.forEach((line) => {
      const length = line.getTotalLength();
      gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });
      gsap.to(line, {
        strokeDashoffset: 0,
        duration: 1.4,
        ease: "power2.out",
      });
    });
  }, []);

  function addLineRef(el) {
    if (el && !linesRef.current.includes(el)) {
      linesRef.current.push(el);
    }
  }

  function handleIconClick(index) {
    setActiveIndex(index);

    const line = linesRef.current[index];
    if (line) {
      gsap.fromTo(
        line,
        { strokeWidth: 2, opacity: 0.6 },
        {
          strokeWidth: 5,
          opacity: 1,
          duration: 0.7,
          yoyo: true,
          repeat: 1,
          ease: "power2.inOut",
        }
      );
    }
  }

  const platforms = [
    { icon: <Calendar className="w-8 h-8" />, label: "Meetings" },
    { icon: <Mail className="w-8 h-8" />, label: "Emails" },
    { icon: <Linkedin className="w-8 h-8" />, label: "LinkedIn" },
    { icon: <PhoneCall className="w-8 h-8" />, label: "Calls" },
    { icon: <MessageCircle className="w-8 h-8" />, label: "Messages" },
    { icon: <Users className="w-8 h-8" />, label: "Contacts" },
    { icon: <BarChart3 className="w-8 h-8" />, label: "Reports" },
  ];

  return (
    <section className="relative overflow-hidden text-white px-8 md:px-16 py-28">


      <div className="relative max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Connect to all platforms
        </h2>
        <p className="text-white/70 text-lg max-w-3xl mx-auto">
          Every CRM channel integrated in one hub. Meetings, emails, calls and
          deals — all synced so your team never misses an opportunity.
        </p>
      </div>

      <div className="relative flex flex-col items-center">
        {/* Icons Row */}
        <div className="grid grid-cols-3 md:grid-cols-7 gap-10 mb-24 relative z-10">
          {platforms.map((p, i) => (
            <div
              key={i}
              onClick={() => handleIconClick(i)}
              className={`flex flex-col items-center gap-3 group cursor-pointer transition-transform ${activeIndex === i ? "scale-125" : "scale-100"
                }`}
            >
              <div
                className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl border text-xl ${activeIndex === i
                  ? "bg-gradient-to-br from-indigo-500 to-rose-500 border-transparent"
                  : "bg-white/5 border-white/10"
                  }`}
              >
                {p.icon}
              </div>
              <span
                className={`text-sm md:text-base font-medium ${activeIndex === i ? "text-indigo-400" : "text-white/70"
                  }`}
              >
                {p.label}
              </span>
            </div>
          ))}
        </div>

        {/* SVG Connections */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1400 700"
          preserveAspectRatio="xMidYMid meet"
        >
          {platforms.map((_, i) => {
            const x = 200 + i * 160;
            return (
              <path
                key={i}
                ref={addLineRef}
                d={`M${x},180 C${x},360 700,360 700,460`}
                stroke={
                  activeIndex === i
                    ? "url(#lineGradient)" // purple gradient
                    : "#555" // grey default
                }
                strokeWidth="3"
                fill="none"
                opacity={activeIndex === i ? "1" : "0.4"}
              />
            );
          })}

          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>

        {/* Central CRM Card */}
        <div
          className={`relative z-20 w-[420px] backdrop-blur-2xl rounded-3xl p-8 shadow-2xl transition-all duration-500 ${activeIndex !== null
            ? "border-2 border-indigo-500 bg-gradient-to-br from-white/10 to-white/5"
            : "border border-white/10 bg-gradient-to-br from-white/10 to-white/5"
            }`}
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-rose-500 flex items-center justify-center font-bold text-xl">
              CRM
            </div>
            <div>
              <div className="font-semibold text-2xl">
                {activeIndex !== null
                  ? cardData[activeIndex].title
                  : "Unified CRM Hub"}
              </div>
              <div className="text-base text-white/70">
                {activeIndex !== null
                  ? platforms[activeIndex].label
                  : "All customer data in one place"}
              </div>
            </div>
          </div>
          <div className="mt-6 text-base text-white/80 leading-relaxed">
            {activeIndex !== null
              ? cardData[activeIndex].desc
              : "Every lead, meeting, email, and deal automatically captured and connected — making sure nothing falls through the cracks."}
          </div>
        </div>
      </div>
    </section>
  );
}



