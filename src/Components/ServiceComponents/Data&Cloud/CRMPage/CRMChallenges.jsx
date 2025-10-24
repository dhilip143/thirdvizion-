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

export default function CRMShowcase() {
  const linesRef = useRef([]);
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cardData = [
    {
      title: "Automated Meeting Scheduling",
      desc: "Sync meetings automatically with your CRM to eliminate scheduling chaos and improve productivity.",
    },
    {
      title: "Unified Email Inbox",
      desc: "Track, reply, and automate email follow-ups—all within a centralized CRM dashboard.",
    },
    {
      title: "LinkedIn Lead Integration",
      desc: "Pull LinkedIn leads and conversations directly into your CRM for faster follow-ups.",
    },
    {
      title: "Call Intelligence",
      desc: "AI-driven call logging, sentiment analysis, and insights to improve customer communication.",
    },
    {
      title: "Omni-channel Messaging",
      desc: "Unify WhatsApp, SMS, and Live Chat in one CRM to maintain context-rich conversations.",
    },
    {
      title: "Complete Customer View",
      desc: "Instant access to every customer's interaction, journey, and engagement timeline.",
    },
    {
      title: "AI Analytics Dashboard",
      desc: "Visualize real-time trends, insights, and predictive sales analytics effortlessly.",
    },
  ];

  const platforms = [
    { icon: <Calendar className="w-5 h-5" />, label: "Meetings" },
    { icon: <Mail className="w-5 h-5" />, label: "Emails" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
    { icon: <PhoneCall className="w-5 h-5" />, label: "Calls" },
    { icon: <MessageCircle className="w-5 h-5" />, label: "Messages" },
    { icon: <Users className="w-5 h-5" />, label: "Contacts" },
    { icon: <BarChart3 className="w-5 h-5" />, label: "Reports" },
  ];

  linesRef.current = [];
  const addLineRef = (el) => {
    if (el && !linesRef.current.includes(el)) linesRef.current.push(el);
  };

  useEffect(() => {
    const totalItems = platforms.length;
    const scrollDistancePerItem = 450;

    const ctx = gsap.context(() => {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    linesRef.current.forEach((line, index) => {
      if (!line) return;
      if (index === activeIndex) {
        gsap.to(line, {
          strokeDashoffset: 0,
          strokeWidth: 4,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          attr: { filter: "url(#glow)" },
        });
      } else {
        gsap.to(line, {
          strokeWidth: 1.5,
          opacity: 0.15,
          duration: 0.6,
          attr: { filter: "none" },
        });
      }
    });
  }, [activeIndex]);

  const radius = 230;
  const center = { x: 500, y: 380 };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-gradient-to-b from-[#020202] via-[#0A0A0A] to-[#050505] text-white flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Header */}
      <div className="absolute top-16 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#FF6467] mb-3">
          Your CRM Universe
        </h2>
        <p className="text-white/60 text-xs md:text-sm max-w-xl mx-auto mt-1">
          Scroll down to see how every platform connects into one powerful CRM hub.
        </p>
      </div>

      {/* Main Visualization */}
      <div className="relative w-[1000px] h-[740px] flex items-center justify-center mt-12">
        {/* SVG Lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1000 720"
        >
          {platforms.map((_, i) => {
            const angle = (i / platforms.length) * Math.PI * 2;
            const x = center.x + radius * Math.cos(angle);
            const y = center.y + radius * Math.sin(angle);

            return (
              <path
                key={i}
                ref={addLineRef}
                d={`M${x},${y} Q${(x + center.x) / 2},${(y + center.y) / 2 - 40} ${center.x},${center.y}`}
                stroke="#FF6467"
                strokeWidth="1.5"
                fill="none"
                opacity="0.15"
                strokeLinecap="round"
              />
            );
          })}
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

        {/* CRM Core */}
        <div className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-[#FF6467] to-[#FF6467] flex items-center justify-center font-bold text-4xl shadow-[0_0_60px_rgba(255,100,103,0.8)] z-20">
          CRM
          <div className="absolute inset-0 rounded-full border-2 border-[#FF6467] animate-ping opacity-20"></div>
        </div>

        {/* Orbiting Icons */}
        {platforms.map((p, i) => {
          const angle = (i / platforms.length) * Math.PI * 2;
          const x = center.x + radius * Math.cos(angle);
          const y = center.y + radius * Math.sin(angle);
          return (
            <div
              key={i}
              className={`absolute flex flex-col items-center justify-center transition-all duration-700 ${
                activeIndex === i ? "scale-110 z-30" : "opacity-70"
              }`}
              style={{
                top: `${y - 25}px`,
                left: `${x - 25}px`,
              }}
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-500 ${
                  activeIndex === i
                    ? "bg-[#FF6467] border-[#FF6467] text-white shadow-[0_0_25px_rgba(255,100,103,0.8)]"
                    : "bg-[#FF646710] border-[#FF646730] text-white/70"
                }`}
              >
                {p.icon}
              </div>
              <span
                className={`text-xs mt-2 font-medium ${
                  activeIndex === i ? "text-[#FF6467]" : "text-white/50"
                }`}
              >
                {p.label}
              </span>
            </div>
          );
        })}

        {/* Feature Card */}
        <div className="absolute left-[-90px] top-1/2 -translate-y-1/2 w-[340px] text-left bg-[#FF646710] backdrop-blur-md border border-[#FF646740] rounded-2xl p-6 shadow-[0_0_30px_rgba(255,100,103,0.15)] hover:shadow-[0_0_50px_rgba(255,100,103,0.3)] transition-all duration-500">
          <h3 className="text-lg font-bold text-[#FF6467] mb-2">
            {cardData[activeIndex].title}
          </h3>
          <p className="text-xs text-white/70 leading-relaxed">
            {cardData[activeIndex].desc}
          </p>
        </div>
      </div>
    </section>
  );
}