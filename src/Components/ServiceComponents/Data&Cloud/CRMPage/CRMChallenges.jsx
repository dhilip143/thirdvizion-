

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

export default function CRMChallenges() {
  const linesRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const cardData = [
    {
      title: "Automated Meeting Scheduling",
      desc: "Seamlessly sync all appointments with  CRM. Eliminate scheduling conflicts and ensure perfect follow-up timing.",
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
    if (el && !linesRef.current.includes(el)) linesRef.current.push(el);
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
    { icon: <Calendar className="w-8 h-8" />, label: "Calendar" },
    { icon: <Mail className="w-8 h-8" />, label: "Email" },
    { icon: <Linkedin className="w-8 h-8" />, label: "LinkedIn" },
    { icon: <PhoneCall className="w-8 h-8" />, label: "Phone" },
    { icon: <MessageCircle className="w-8 h-8" />, label: "Messaging" },
    { icon: <Users className="w-8 h-8" />, label: "Contacts" },
    { icon: <BarChart3 className="w-8 h-8" />, label: "Analytics" },
  ];

  return (
    <section className="relative overflow-hidden text-white px-6 md:px-16 py-24 ">
      {/* Section Header */}
      <div className="relative max-w-6xl mx-auto text-center mb-5 md:mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-[#FF6467]">
          All your sales channels, unified
        </h2>
        <p className="text-white/70 text-md max-w-3xl mx-auto">
          CRM integrates every customer touchpoint into one powerful platform. 
          From initial contact to closed deal, maintain complete visibility across all channels.
        </p>
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col items-center">
        {/* Icons Row */}
        <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-7 gap-6 md:gap-10 mb-5 md:mb-24 relative z-10">
          {platforms.map((p, i) => (
            <div
              key={i}
              onClick={() => handleIconClick(i)}
              className={`flex flex-col items-center justify-center gap-3 group cursor-pointer transition-transform ${activeIndex === i ? "scale-100 md:scale-125" : "scale-75 md:scale-100"
                }`}
            >
              <div
                className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl border text-xl transition-all duration-300 ${activeIndex === i
                  ? "bg-[#FF6467] text-white shadow-[0_0_20px_rgba(255,100,103,0.5)] border-transparent"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
                  }`}
              >
                {p.icon}
              </div>
              <span
                className={`text-sm md:text-base font-medium transition-colors duration-300 ${activeIndex === i ? "text-[#FF6467]" : "text-white/70"
                  }`}
              >
                {p.label}
              </span>
            </div>
          ))}
        </div>

        {/* SVG Connections */}
        <svg
          className="hidden md:flex absolute inset-0 md:-top-8 lg:-top-4 xl:-top-2 2xl:-top-4 md:left-3 lg:left-4 xl:left-4 w-full h-full pointer-events-none md:scale-130 lg:scale-120"
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
                stroke={activeIndex === i ? "url(#lineGradient)" : "#444"}
                strokeWidth="3"
                fill="none"
                opacity={activeIndex === i ? "1" : "0.3"}
              />
            );
          })}
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FF6467" />
              <stop offset="100%" stopColor="#FF8486" />
            </linearGradient>
          </defs>
        </svg>

        {/* Central CRM Card */}
        <div
          className={`relative z-20 w-full max-w-md sm:max-w-lg md:w-[420px] backdrop-blur-2xl rounded-3xl p-6 sm:p-8 shadow-2xl transition-all duration-500 ${activeIndex !== null
            ? "border-2 border-[#FF6467] bg-[#FF646710]"
            : "border border-white/10 bg-white/5"
            }`}
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FF6467] flex items-center justify-center font-bold text-lg sm:text-xl shadow-[0_0_15px_rgba(255,100,103,0.5)]">
              CRM
            </div>
            <div className="text-center sm:text-left">
              <div className="font-semibold text-xl sm:text-2xl">
                {activeIndex !== null
                  ? cardData[activeIndex].title
                  : " CRM Platform"}
              </div>
              <div className="text-sm sm:text-base text-white/70 mt-1 sm:mt-2">
                {activeIndex !== null
                  ? platforms[activeIndex].label
                  : "Complete customer relationship management"}
              </div>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 text-sm sm:text-base text-white/80 leading-relaxed">
            {activeIndex !== null
              ? cardData[activeIndex].desc
              : "Connect every aspect of your customer journey in one intelligent platform.  CRM brings together all your sales, marketing, and service channels for unparalleled customer insight."}
          </div>
        </div>
      </div>
    </section>
  );
}