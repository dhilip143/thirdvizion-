import React, { useEffect, useRef, useState } from 'react';
import {
  FileText,
  DollarSign,
  LayoutGrid,
  MonitorCheck,
  FileCheck,
  ClipboardList,
  Code,
  Settings,
  Rocket,
  Users,
  Headset,
  Gift,
  Diamond,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Process steps data
const processSteps = [
  { id: '01', title: 'Understand Requirements', icon: FileText, side: 'left' },
  { id: '02', title: 'Cost Discussions', icon: DollarSign, side: 'right' },
  { id: '03', title: 'Project Planning', icon: LayoutGrid, side: 'left' },
  { id: '04', title: 'Technology Assessment', icon: MonitorCheck, side: 'right' },
  { id: '05', title: 'Mockups Design', icon: FileCheck, side: 'left' },
  { id: '06', title: 'Web Design', icon: ClipboardList, side: 'right' },
  { id: '07', title: 'Web Development', icon: Code, side: 'left' },
  { id: '08', title: 'Quality Assurance', icon: Settings, side: 'right' },
  { id: '09', title: 'Deployment', icon: Rocket, side: 'left' },
  { id: '10', title: 'Client Training', icon: Users, side: 'right' },
  { id: '11', title: 'Ongoing Support', icon: Headset, side: 'left' },
  { id: '12', title: 'Launch', icon: Gift, side: 'right' },
];

// Component for each timeline step
const TimelineStep = ({ step, index, isMobile }) => {
  const stepRef = useRef(null);
  const contentRef = useRef(null);
  const circleRef = useRef(null);
  const iconRef = useRef(null);
  const isLeft = step.side === 'left';

  useEffect(() => {
    if (isMobile) return; // Skip GSAP animations for mobile

    const ctx = gsap.context(() => {
      gsap.fromTo(
        stepRef.current,
        { opacity: 0, y: 100, x: isLeft ? -50 : 50 },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: stepRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { scale: 0.8, rotationY: isLeft ? -15 : 15 },
        {
          scale: 1,
          rotationY: 0,
          duration: 1.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: stepRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        circleRef.current,
        { scale: 0, rotation: 180 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: 'elastic.out(1.2, 0.5)',
          scrollTrigger: {
            trigger: stepRef.current,
            start: 'top 75%',
            end: 'bottom 25%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        iconRef.current,
        { scale: 0, rotation: -90 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          ease: 'back.out(2)',
          delay: 0.3,
          scrollTrigger: {
            trigger: stepRef.current,
            start: 'top 75%',
            end: 'bottom 25%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Hover animations (desktop only)
      const content = contentRef.current;
      const circle = circleRef.current;
      const icon = iconRef.current;

      const handleMouseEnter = () => {
        gsap.to(content, {
          scale: 1.05,
          boxShadow: '0 0 30px rgba(0, 211, 243, 0.6)',
          duration: 0.3,
          ease: 'power2.out',
        });
        gsap.to(circle, {
          scale: 1.2,
          backgroundColor: '#00d3f3',
          borderColor: '#1f2937',
          duration: 0.3,
        });
        gsap.to(icon, {
          scale: 1.2,
          color: '#00d3f3',
          duration: 0.3,
        });
      };

      const handleMouseLeave = () => {
        gsap.to(content, {
          scale: 1,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
          duration: 0.3,
          ease: 'power2.out',
        });
        gsap.to(circle, {
          scale: 1,
          backgroundColor: '#1f2937',
          borderColor: '#00d3f3',
          duration: 0.3,
        });
        gsap.to(icon, {
          scale: 1,
          color: '#00d3f3',
          duration: 0.3,
        });
      };

      content.addEventListener('mouseenter', handleMouseEnter);
      content.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        content.removeEventListener('mouseenter', handleMouseEnter);
        content.removeEventListener('mouseleave', handleMouseLeave);
      };
    }, stepRef);

    return () => ctx.revert();
  }, [isLeft, isMobile]);

  const Icon = step.icon;

  // ✅ Mobile Layout (no central line)
  if (isMobile) {
    return (
      <div ref={stepRef} className="relative mb-6 px-2 opacity-100">
        <div className="flex items-center mb-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00d3f3] to-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 z-10">
            <span className="text-white font-bold text-sm font-inter-tight">{step.id}</span>
          </div>
        </div>

        <div
          ref={contentRef}
          className="p-5 rounded-2xl bg-gradient-to-br from-black/60 to-gray-900/60 border-l-4 border-[#00d3f3] shadow-xl backdrop-blur-md"
        >
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2 bg-cyan-500/20 rounded-lg">
              <Icon className="w-6 h-6 text-[#00d3f3]" />
            </div>
            <h3 className="text-xl font-bold text-white font-inter-tight flex-1">{step.title}</h3>
          </div>

          <p className="text-white/80 text-sm font-inter-tight leading-relaxed">
            {isLeft
              ? 'Focus on client interviews, functional specifications, and initial project scope definition.'
              : 'Analyze architectural needs, select primary programming languages, frameworks, and deployment services.'}
          </p>
        </div>
      </div>
    );
  }

  // 🖥️ Desktop Layout (with central connector)
  return (
    <div
      ref={stepRef}
      className={`relative mb-8 w-full md:w-1/2 p-4 ${!isLeft ? 'md:left-1/2' : ''} opacity-0`}
    >
      <div
        ref={circleRef}
        className="absolute top-0 w-10 h-10 rounded-full z-10 -translate-x-1/2 bg-black/40 border-4 border-[#00d3f3] backdrop-blur-md"
        style={{ left: '50%' }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-[#00d3f3] font-inter-tight">
          {step.id}
        </div>
      </div>

      <div
        ref={contentRef}
        className="p-7 rounded-xl border-t-4 bg-black/40 border-[#00d3f3] shadow-2xl transform-gpu backdrop-blur-md transform-style-3d"
      >
        <div className="flex items-center space-x-4">
          <div ref={iconRef}>
            <Icon className="w-8 h-8 text-[#00d3f3]" />
          </div>
          <h3 className="text-2xl font-bold text-white font-inter-tight">{step.title}</h3>
        </div>

        <div
          className={`hidden md:block absolute top-4 w-0 h-0 border-y-[12px] border-y-transparent ${
            isLeft
              ? 'border-l-[12px] border-l-black/40 right-0 translate-x-full'
              : 'border-r-[12px] border-r-black/40 left-0 -translate-x-full'
          }`}
        ></div>

        <p className="mt-3 text-white/70 text-base font-inter-tight">
          {isLeft
            ? 'Focus on client interviews, functional specifications, and initial project scope definition.'
            : 'Analyze architectural needs, select primary programming languages, frameworks, and deployment services.'}
        </p>
      </div>
    </div>
  );
};

// 🧩 Main Component
const App = () => {
  const timelineRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const rocketRef = useRef(null);
  const centerLineRef = useRef(null);
  const timelineContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // skip GSAP for mobile

    // Title + subtitle
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -100, scale: 0.5 },
      { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: 'elastic.out(1.2, 0.5)' }
    );

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power3.out' }
    );

    // Center line animation
    gsap.fromTo(
      centerLineRef.current,
      { scaleY: 0, transformOrigin: 'top center' },
      {
        scaleY: 1,
        duration: 1.2,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: timelineContainerRef.current,
          start: 'top 190%',
          end: 'bottom -20%',
          scrub: 1,
        },
      }
    );

    // Parallax + rocket
    gsap.to(timelineRef.current, {
      y: -50,
      ease: 'none',
      scrollTrigger: { trigger: timelineRef.current, start: 'top bottom', end: 'bottom top', scrub: 1 },
    });

    const rocketTL = gsap.timeline({
      scrollTrigger: {
        trigger: rocketRef.current,
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: 'play none none reverse',
      },
    });

    rocketTL
      .fromTo(rocketRef.current, { scale: 0, rotation: -45 }, { scale: 1, rotation: 0, duration: 1, ease: 'back.out(2)' })
      .to(rocketRef.current, { y: -20, duration: 2, ease: 'power1.inOut', yoyo: true, repeat: -1 });
  }, [isMobile]);

  return (
    <div
      className="min-h-screen bg-transparent flex flex-col items-center p-4 md:p-8 font-inter-tight overflow-hidden"
      style={{ fontFamily: 'Outfit, sans-serif' }}
    >
      {/* Title */}
      <div className="w-full max-w-5xl mt-8 md:mt-16 mb-8 md:mb-16 text-center">
        <h1
          ref={titleRef}
          className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold pb-2 tracking-tight ${
            isMobile ? 'opacity-100' : 'opacity-0'
          } font-inter-tight`}
          style={{
            background: 'linear-gradient(90deg, #00d3f3, #00a3cc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'transparent',
          }}
        >
          Website
        </h1>
        <h2
          ref={subtitleRef}
          className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white flex items-center justify-center mt-2 md:mt-3 ${
            isMobile ? 'opacity-100' : 'opacity-0'
          } font-inter-tight`}
        >
          Development Process
          {!isMobile && (
            <span className="text-[#00d3f3] ml-4">
              <Diamond className="w-8 h-8 md:w-10 md:h-10 fill-[#00d3f3] rotate-45" />
            </span>
          )}
        </h2>

        {isMobile && (
          <div className="flex justify-center mt-4">
            <Diamond className="w-8 h-8 fill-[#00d3f3] rotate-45" />
          </div>
        )}
      </div>

      {/* Timeline Container */}
      <div ref={timelineContainerRef} className="relative w-full max-w-4xl">
        <div ref={timelineRef} className="relative pt-6 md:pt-10">
          {/* ❌ Central line removed for mobile */}
          {!isMobile && (
            <div
              ref={centerLineRef}
              className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-[#00d3f3] via-cyan-400 to-cyan-500 transform -translate-x-1/2 z-0 shadow-lg shadow-[#00d3f3]/50 scale-y-0"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#00d3f3] to-cyan-400 opacity-70 animate-pulse"></div>
            </div>
          )}

          {/* Steps */}
          {processSteps.map((step, index) => (
            <div key={step.id} className="timeline-step">
              <TimelineStep step={step} index={index} isMobile={isMobile} />
            </div>
          ))}
        </div>
      </div>

      {/* 🚀 Rocket or Completion */}
      {!isMobile && (
        <div ref={rocketRef} className="mt-16 text-center">
        </div>
      )}

      {isMobile && (
        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-2xl border border-cyan-500/30">
            <Gift className="w-8 h-8 text-[#00d3f3] mr-3" />
            <span className="text-white font-bold text-lg">Project Completed!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
