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
  ChevronDown,
  Smartphone,
  Tablet,
  Laptop,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CRMShowcase() {
  const linesRef = useRef([]);
  const sectionRef = useRef(null);
  const visualizationRef = useRef(null);
  const featureCardRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);

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

  // Calculate positions for feature cards based on platform positions
 const getFeatureCardPosition = (index, totalItems, radius, center) => {
  const angle = (index / totalItems) * Math.PI * 2;
  const x = center.x + radius * Math.cos(angle);
  const y = center.y + radius * Math.sin(angle);

  let cardX, cardY;

  // Custom manual offset for each card (to fine-tune layout)
  switch (index) {
    case 0: // Top-right
      cardX = x + 60;
      cardY = y - 40;
      break;
    case 1: // Right
      cardX = x + 50;
      cardY = y - 30;
      break;
    case 2: // Bottom-right
      cardX = x + -100;
      cardY = y + 50;
      break;
    case 3: // Bottom
      cardX = x - 340;
      cardY = y + -25;
      break;
    case 4: // Bottom-left
      cardX = x - 340;
      cardY = y + -30;
      break;
    case 5: // Left
      cardX = x - 350;
      cardY = y - 55;
      break;
    case 6: // Top-left
      cardX = x - -50;
      cardY = y - 50;
      break;
    default:
      cardX = x;
      cardY = y;
  }

  return { x: cardX, y: cardY };
};

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
      setIsLaptop(width >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  linesRef.current = [];
  const addLineRef = (el) => {
    if (el && !linesRef.current.includes(el)) linesRef.current.push(el);
  };

  // Laptop/Desktop Animation
  useEffect(() => {
    if (isMobile || isTablet) return;

    const totalItems = platforms.length;
    const scrollDistancePerItem = 450;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: visualizationRef.current,
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
  }, [isMobile, isTablet]);

  // Mobile & Tablet Animation
  useEffect(() => {
    if (!isMobile && !isTablet) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: visualizationRef.current,
        start: "top top",
        end: "+=3000",
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          const index = Math.min(
            platforms.length - 1,
            Math.floor(self.progress * platforms.length)
          );
          setActiveIndex(index);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile, isTablet]);

  useEffect(() => {
    if (isMobile || isTablet) return;

    linesRef.current.forEach((line, index) => {
      if (!line) return;
      
      // Show current and previous lines with different opacities
      if (index <= activeIndex) {
        const opacity = index === activeIndex ? 1 : 0.6 - (activeIndex - index) * 0.2;
        const strokeWidth = index === activeIndex ? 4 : 2;
        
        gsap.to(line, {
          strokeDashoffset: 0,
          strokeWidth: strokeWidth,
          opacity: Math.max(0.3, opacity),
          duration: 1,
          ease: "power2.out",
          attr: { filter: index === activeIndex ? "url(#glow)" : "none" },
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
  }, [activeIndex, isMobile, isTablet]);

  // Helper function to determine visibility for mobile/tablet
  const getMobileVisibility = (index) => {
    if (index <= activeIndex) {
      const distanceFromActive = activeIndex - index;
      if (distanceFromActive === 0) {
        return "opacity-100 scale-100 z-30"; // Current item
      } else if (distanceFromActive === 1) {
        return "opacity-80 scale-95 -translate-y-5 z-20"; // Previous item
      } else if (distanceFromActive === 2) {
        return "opacity-60 scale-90 -translate-y-10 z-10"; // Two items back
      } else {
        return "opacity-40 scale-85 -translate-y-15 z-0"; // Older items
      }
    } else {
      return "opacity-0 translate-y-10 scale-95"; // Future items
    }
  };

  // Helper function to determine visibility for desktop icons
  const getDesktopIconVisibility = (index) => {
    if (index <= activeIndex) {
      const distanceFromActive = activeIndex - index;
      if (distanceFromActive === 0) {
        return "scale-110 z-30"; // Current item
      } else if (distanceFromActive === 1) {
        return "scale-105 opacity-90 z-25"; // Previous item
      } else if (distanceFromActive === 2) {
        return "scale-100 opacity-80 z-20"; // Two items back
      } else {
        return "scale-95 opacity-70 z-15"; // Older items
      }
    } else {
      return "opacity-50 scale-90"; // Future items
    }
  };

  // Helper function to determine visibility for desktop cards
  const getDesktopCardVisibility = (index) => {
    if (index <= activeIndex) {
      const distanceFromActive = activeIndex - index;
      if (distanceFromActive === 0) {
        return "opacity-100 z-10"; // Current item
      } else if (distanceFromActive === 1) {
        return "opacity-100 z-9"; // Previous item
      } else if (distanceFromActive === 2) {
        return "opacity-100 z-8"; // Two items back
      } else {
        return "opacity-100 z-7"; // Older items
      }
    } else {
      return "opacity-0"; // Future items
    }
  };

  // Render Mobile View
  if (isMobile) {
    return (
      <section
        ref={sectionRef}
        className="relative w-full min-h-screen bg-gradient-to-b    from-[#020202] via-[#0A0A0A] to-[#050505] text-white overflow-hidden"
      >
        {/* Header - Not Pinned */}
        <div className="relative z-40 pt-20 px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#FF6467] mb-3"
              style={{ fontFamily: "Outfit, sans-serif" }}>
              Your CRM Universe
            </h2>
            <p className="text-white/60 text-xs max-w-sm mx-auto"
              style={{ fontFamily: "work-sans, sans-serif" }}>
              Swipe through to see how every platform connects into one powerful CRM hub.
            </p>
          </div>
        </div>

        {/* Mobile Carousel - Pinned Section */}
        <div ref={visualizationRef} className="relative w-full flex flex-col items-center justify-start px-4">
          <div className="relative w-full max-w-sm">
            {/* CRM Core */}
            <div className="relative mx-auto w-32 h-32 rounded-full bg-gradient-to-br from-[#FF6467] to-[#FF6467] flex items-center justify-center font-bold text-2xl shadow-[0_0_40px_rgba(255,100,103,0.6)] mb-12 z-20"
              style={{ fontFamily: "Outfit, sans-serif" }}>
              CRM
              <div className="absolute inset-0 rounded-full border-2 border-[#FF6467] animate-ping opacity-20"></div>
            </div>

            {/* Feature Cards Stack */}
            <div className="relative h-96">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-500 ${getMobileVisibility(index)}`}
                >
                  <div className="bg-[#FF646710] backdrop-blur-md border border-[#FF646740] rounded-2xl p-4 shadow-[0_0_20px_rgba(255,100,103,0.2)]">
                    {/* Platform Icon */}
                    <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full bg-[#FF6467] border border-[#FF6467] text-white shadow-[0_0_15px_rgba(255,100,103,0.6)]">
                      {platform.icon}
                    </div>
                    
                    <h3 className="text-center text-base font-bold text-[#FF6467] mb-2"
                      style={{ fontFamily: "Outfit, sans-serif" }}>
                      {platform.label}
                    </h3>
                    
                    <h4 className="text-center text-xs font-semibold text-white mb-1"
                      style={{ fontFamily: "Outfit, sans-serif" }}>
                      {cardData[index].title}
                    </h4>
                    
                    <p className="text-center text-xs text-white/70 leading-relaxed"
                      style={{ fontFamily: "work-sans, sans-serif" }}>
                      {cardData[index].desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {platforms.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-[#FF6467] w-6"
                      : index < activeIndex
                      ? "bg-[#FF6467] opacity-60"
                      : "bg-white/30"
                  }`}
                />
              ))}
            </div>

            {/* Scroll Hint */}
            <div className="text-center mt-6">
              <div className="flex items-center justify-center text-white/50 text-xs">
                <ChevronDown className="w-4 h-4 mr-1 animate-bounce" />
                Scroll to explore
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Render Tablet View
  if (isTablet) {
    const radius = 180;
    const center = { x: 380, y: 300 };

    return (
      <section
        ref={sectionRef}
        className="relative w-full min-h-screen bg-gradient-to-b from-[#020202] via-[#0A0A0A] to-[#050505] text-white overflow-hidden"
      >
        {/* Header - Not Pinned */}
        <div className="relative z-40 pt-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Tablet className="w-6 h-6 text-[#FF6467] mr-2" />
              <span className="text-sm text-[#FF6467] font-medium">Tablet View</span>
            </div>
            <h2 className="text-3xl font-bold text-[#FF6467] mb-3"
              style={{ fontFamily: "Outfit, sans-serif" }}>
              Your CRM Universe
            </h2>
            <p className="text-white/60 text-sm max-w-md mx-auto"
              style={{ fontFamily: "work-sans, sans-serif" }}>
              Scroll to see how every platform connects into one powerful CRM hub.
            </p>
          </div>
        </div>

        {/* Main Visualization - Pinned Section */}
        <div ref={visualizationRef} className="relative w-full flex items-center justify-center">
          <div className="relative w-full max-w-2xl h-[600px] flex items-center justify-center">
            {/* SVG Lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 760 600"
            >
              {platforms.map((_, i) => {
                const angle = (i / platforms.length) * Math.PI * 2;
                const x = center.x + radius * Math.cos(angle);
                const y = center.y + radius * Math.sin(angle);

                return (
                  <path
                    key={i}
                    d={`M${x},${y} Q${(x + center.x) / 2},${(y + center.y) / 2 - 30} ${center.x},${center.y}`}
                    stroke="#FF6467"
                    strokeWidth={i <= activeIndex ? (i === activeIndex ? "3" : "2") : "1.5"}
                    fill="none"
                    opacity={i <= activeIndex ? (i === activeIndex ? "1" : 0.6 - (activeIndex - i) * 0.2) : "0.15"}
                    strokeLinecap="round"
                  />
                );
              })}
              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            </svg>

            {/* CRM Core */}
            <div className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-[#FF6467] to-[#FF6467] flex items-center justify-center font-bold text-3xl shadow-[0_0_50px_rgba(255,100,103,0.7)] z-20"
              style={{ fontFamily: "Outfit, sans-serif" }}>
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
                  className={`absolute flex flex-col items-center justify-center transition-all duration-500 ${getDesktopIconVisibility(i)}`}
                  style={{
                    top: `${y - 20}px`,
                    left: `${x - 20}px`,
                  }}
                >
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300 ${
                      i <= activeIndex
                        ? i === activeIndex
                          ? "bg-[#FF6467] border-[#FF6467] text-white shadow-[0_0_20px_rgba(255,100,103,0.8)]"
                          : `bg-[#FF6467${Math.max(30, 80 - (activeIndex - i) * 15)}] border-[#FF6467${Math.max(50, 100 - (activeIndex - i) * 20)}] text-white`
                        : "bg-[#FF646710] border-[#FF646730] text-white/70"
                    }`}
                  >
                    {p.icon}
                  </div>
                  <span
                    className={`text-xs mt-1 font-medium ${
                      i <= activeIndex ? "text-[#FF6467]" : "text-white/50"
                    }`}
                  >
                    {p.label}
                  </span>
                </div>
              );
            })}

            {/* Feature Cards - Positioned near platform icons */}
            {platforms.map((_, i) => {
              const angle = (i / platforms.length) * Math.PI * 2;
              const x = center.x + radius * Math.cos(angle);
              const y = center.y + radius * Math.sin(angle);
              const cardPos = getFeatureCardPosition(i, platforms.length, radius, center);
              
              return (
                <div
                  key={i}
                  ref={i === activeIndex ? featureCardRef : null}
                  className={`absolute w-64 text-left bg-[#FF646710] backdrop-blur-md border border-[#FF646740] rounded-2xl p-4 shadow-[0_0_25px_rgba(255,100,103,0.2)] transition-all duration-500 ${getDesktopCardVisibility(i)}`}
                  style={{
                    top: `${cardPos.y}px`,
                    left: `${cardPos.x}px`,
                  }}
                >
                  <h3 className="text-sm font-bold text-[#FF6467] mb-2"
                    style={{ fontFamily: "Outfit, sans-serif" }}>
                    {cardData[i].title}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed"
                    style={{ fontFamily: "work-sans, sans-serif" }}>
                    {cardData[i].desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Scroll Hint */}
          <div className="absolute bottom-8 text-center w-full">
            <div className="flex items-center justify-center text-white/50 text-sm">
              <ChevronDown className="w-4 h-4 mr-1 animate-bounce" />
              Keep scrolling to explore
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Render Laptop View (1024px and above)
  if (isLaptop) {
    const radius = 230;
    const center = { x: 500, y: 380 };

    return (
      <section
        ref={sectionRef}
        className="relative w-full min-h-screen bg-gradient-to-b from-[#020202] via-[#0A0A0A] to-[#050505] text-white overflow-hidden"
      >
        {/* Header - Not Pinned */}
        <div className="relative z-40 pt-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#FF6467] mb-2"
                style={{ fontFamily: "Outfit, sans-serif" }} >
            Your CRM Universe
          </h2>
          <p className="text-white/60 text-xs md:text-sm max-w-xl mx-auto mt-1"
            style={{ fontFamily: "work-sans, sans-serif" }}>
            Scroll down to see how every platform connects into one powerful CRM hub.
          </p>
        </div>

        {/* Main Visualization - Pinned Section */}
        <div ref={visualizationRef} className="relative w-full flex items-center justify-center mt-12">
          <div className="relative w-[1000px] h-[740px] flex items-center justify-center">
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
            <div className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-[#FF6467] to-[#FF6467] flex items-center justify-center font-bold text-4xl shadow-[0_0_60px_rgba(255,100,103,0.8)] z-20"
              style={{ fontFamily: "Outfit, sans-serif" }}>
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
                  className={`absolute flex flex-col items-center justify-center transition-all duration-700 ${getDesktopIconVisibility(i)}`}
                  style={{
                    top: `${y - 25}px`,
                    left: `${x - 25}px`,
                  }}
                >
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-500 ${
                      i <= activeIndex
                        ? i === activeIndex
                          ? "bg-[#FF6467] border-[#FF6467] text-white shadow-[0_0_25px_rgba(255,100,103,0.8)]"
                          : `bg-[#FF6467${Math.max(20, 70 - (activeIndex - i) * 15)}] border-[#FF6467${Math.max(40, 90 - (activeIndex - i) * 20)}] text-white`
                        : "bg-[#FF646710] border-[#FF646730] text-white/70"
                    }`}
                  >
                    {p.icon}
                  </div>
                  <span
                    className={`text-xs mt-2 font-medium ${
                      i <= activeIndex ? "text-[#FF6467]" : "text-white/50"
                    }`}
                  >
                    {p.label}
                  </span>
                </div>
              );
            })}

            {/* Feature Cards - One for each platform positioned near the icon */}
            {platforms.map((_, i) => {
              const angle = (i / platforms.length) * Math.PI * 2;
              const x = center.x + radius * Math.cos(angle);
              const y = center.y + radius * Math.sin(angle);
              const cardPos = getFeatureCardPosition(i, platforms.length, radius, center);
              
              return (
                <div
                  key={i}
                  ref={i === activeIndex ? featureCardRef : null}
                  className={`absolute w-72 text-left p-5 transition-all duration-700 ${getDesktopCardVisibility(i)}`}
                  style={{
                    top: `${cardPos.y}px`,
                    left: `${cardPos.x}px`,
                  }}
                >
                  <h3 className="text-base font-bold text-[#FF6467] mb-2"
                    style={{ fontFamily: "Outfit, sans-serif" }}>
                    {cardData[i].title}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed"
                    style={{ fontFamily: "work-sans, sans-serif" }}>
                    {cardData[i].desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // Default Desktop View (for larger screens)
  const radius = 230;
  const center = { x: 500, y: 380 };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-gradient-to-b from-[#020202] via-[#0A0A0A] to-[#050505] text-white overflow-hidden"
    >
      {/* Header - Not Pinned */}
      <div className="relative z-40 pt-16 text-center">
        <div className="flex items-center justify-center mb-4">
          <Laptop className="w-6 h-6 text-[#FF6467] mr-2" />
          <span className="text-sm text-[#FF6467] font-medium">Desktop View</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#FF6467] mb-2"
          style={{ fontFamily: "Outfit, sans-serif" }}>
          Your CRM Universe
        </h2>
        <p className="text-white/60 text-xs md:text-sm max-w-xl mx-auto mt-1"
          style={{ fontFamily: "work-sans, sans-serif" }}>
          Scroll down to see how every platform connects into one powerful CRM hub.
        </p>
      </div>

      {/* Main Visualization - Pinned Section */}
      <div ref={visualizationRef} className="relative w-full flex items-center justify-center mt-14">
        <div className="relative w-[1000px] h-[740px] flex items-center justify-center">
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
          <div className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-[#FF6467] to-[#FF6467] flex items-center justify-center font-bold text-4xl shadow-[0_0_60px_rgba(255,100,103,0.8)] z-20"
            style={{ fontFamily: "Outfit, sans-serif" }}>
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
                className={`absolute flex flex-col items-center justify-center transition-all duration-700 ${getDesktopIconVisibility(i)}`}
                style={{
                  top: `${y - 25}px`,
                  left: `${x - 25}px`,
                }}
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-500 ${
                    i <= activeIndex
                      ? i === activeIndex
                        ? "bg-[#FF6467] border-[#FF6467] text-white shadow-[0_0_25px_rgba(255,100,103,0.8)]"
                        : `bg-[#FF6467${Math.max(20, 70 - (activeIndex - i) * 15)}] border-[#FF6467${Math.max(40, 90 - (activeIndex - i) * 20)}] text-white`
                      : "bg-[#FF646710] border-[#FF646730] text-white/70"
                  }`}
                >
                  {p.icon}
                </div>
                <span
                  className={`text-xs mt-2 font-medium ${
                    i <= activeIndex ? "text-[#FF6467]" : "text-white/50"
                  }`}
                >
                  {p.label}
                </span>
              </div>
            );
          })}

          {/* Feature Cards - Positioned near each platform icon */}
          {platforms.map((_, i) => {
            const angle = (i / platforms.length) * Math.PI * 2;
            const x = center.x + radius * Math.cos(angle);
            const y = center.y + radius * Math.sin(angle);
            const cardPos = getFeatureCardPosition(i, platforms.length, radius, center);
            
            return (
              <div
                key={i}
                ref={i === activeIndex ? featureCardRef : null}
                className={`absolute w-80 text-left bg-[#FF646710] backdrop-blur-md border border-[#FF646740] rounded-2xl p-5 shadow-[0_0_30px_rgba(255,100,103,0.15)] hover:shadow-[0_0_50px_rgba(255,100,103,0.3)] transition-all duration-700 ${getDesktopCardVisibility(i)}`}
                style={{
                  top: `${cardPos.y}px`,
                  left: `${cardPos.x}px`,
                }}
              >
                <h3 className="text-base font-bold text-[#FF6467] mb-2"
                  style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {cardData[i].title}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed"
                  style={{ fontFamily: 'work-sans, sans-serif' }}>
                  {cardData[i].desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}