import React, { useEffect, useRef } from 'react';
import { FileText, DollarSign, LayoutGrid, MonitorCheck, FileCheck, ClipboardList, Code, Settings, Rocket, Users, Headset, Gift, Diamond } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Data structure for the 12 steps
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

// Helper component for rendering an individual step node in the timeline
const TimelineStep = ({ step, index }) => {
  const stepRef = useRef(null);
  const contentRef = useRef(null);
  const circleRef = useRef(null);
  const iconRef = useRef(null);
  const isLeft = step.side === 'left';

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation for the step entry
      gsap.fromTo(stepRef.current, 
        {
          opacity: 0,
          y: 100,
          x: isLeft ? -50 : 50
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: stepRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          }
        }
      );

      // Content card animation with glow effect
      gsap.fromTo(contentRef.current,
        {
          scale: 0.8,
          rotationY: isLeft ? -15 : 15,
        },
        {
          scale: 1,
          rotationY: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: stepRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          }
        }
      );

      // Circle animation with bounce effect
      gsap.fromTo(circleRef.current,
        {
          scale: 0,
          rotation: 180
        },
        {
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "elastic.out(1.2, 0.5)",
          scrollTrigger: {
            trigger: stepRef.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse",
          }
        }
      );

      // Icon animation
      gsap.fromTo(iconRef.current,
        {
          scale: 0,
          rotation: -90
        },
        {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          ease: "back.out(2)",
          delay: 0.3,
          scrollTrigger: {
            trigger: stepRef.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse",
          }
        }
      );

      // Hover animations
      const content = contentRef.current;
      const circle = circleRef.current;
      const icon = iconRef.current;

      const handleMouseEnter = () => {
        gsap.to(content, {
          scale: 1.05,
          boxShadow: "0 0 30px rgba(0, 211, 243, 0.6)",
          duration: 0.3,
          ease: "power2.out"
        });
        gsap.to(circle, {
          scale: 1.2,
          backgroundColor: "#00d3f3",
          borderColor: "#1f2937",
          duration: 0.3
        });
        gsap.to(icon, {
          scale: 1.2,
          color: "#00d3f3",
          duration: 0.3
        });
      };

      const handleMouseLeave = () => {
        gsap.to(content, {
          scale: 1,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
          duration: 0.3,
          ease: "power2.out"
        });
        gsap.to(circle, {
          scale: 1,
          backgroundColor: "#1f2937",
          borderColor: "#00d3f3",
          duration: 0.3
        });
        gsap.to(icon, {
          scale: 1,
          color: "#00d3f3",
          duration: 0.3
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
  }, [isLeft]);

  const Icon = step.icon;

  return (
    <div 
      ref={stepRef}
      className="relative mb-8 w-full md:w-1/2 p-4 opacity-0"
      style={!isLeft ? { left: '50%' } : {}}
    >
      {/* Connector Circle (Center of the Timeline) */}
      <div 
        ref={circleRef}
        className="absolute top-0 w-8 h-8 rounded-full z-10 -translate-x-1/2 bg-black/40 border-4 border-[#00d3f3] backdrop-blur-md"
        style={{ left: '50%' }}
      >
        {/* Number inside the circle */}
        <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-[#00d3f3] font-inter-tight">
          {step.id}
        </div>
      </div>
      
      {/* Content Card */}
      <div 
        ref={contentRef}
        className="p-6 rounded-xl border-t-4 bg-black/40 border-[#00d3f3] shadow-2xl transform-gpu backdrop-blur-md"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="flex items-center space-x-3">
          <div ref={iconRef}>
            <Icon className="w-6 h-6 text-[#00d3f3]" />
          </div>
          <h3 className="text-xl font-bold text-white font-inter-tight">
            {step.title}
          </h3>
        </div>
        
        {/* Pointer Arrow (Desktop Only) */}
        <div 
          className={`hidden md:block absolute top-4 w-0 h-0 border-y-[10px] border-y-transparent ${
            isLeft 
              ? 'border-l-[10px] border-l-black/40 right-0 translate-x-full' 
              : 'border-r-[10px] border-r-black/40 left-0 -translate-x-full'
          }`}
        ></div>
        
        <p className="mt-2 text-white/70 text-sm font-inter-tight">
          {isLeft 
            ? 'Focus on client interviews, functional specifications, and initial project scope definition.' 
            : 'Analyze architectural needs, select primary programming languages, frameworks, and deployment services.'}
        </p>
      </div>
    </div>
  );
};

const App = () => {
  const timelineRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const rocketRef = useRef(null);
  const centerLineRef = useRef(null);
  const timelineContainerRef = useRef(null);

  useEffect(() => {
    // Title animation
    gsap.fromTo(titleRef.current,
      {
        opacity: 0,
        y: -100,
        scale: 0.5
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: "elastic.out(1.2, 0.5)"
      }
    );

    // Subtitle animation
    gsap.fromTo(subtitleRef.current,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out"
      }
    );

    // Center line growth animation - synchronized with content
    gsap.fromTo(centerLineRef.current,
      {
        scaleY: 0,
        transformOrigin: "top center"
      },
      {
        scaleY: 1,
        duration: 3,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: timelineContainerRef.current,
          start: "top 60%",
          end: "bottom 20%",
          scrub: 1,
        }
      }
    );

    // Add progress markers to the center line that appear as you scroll
    const progressMarkers = gsap.utils.toArray('.timeline-step');
    
    progressMarkers.forEach((marker, index) => {
      gsap.fromTo(marker,
        {
          opacity: 0,
          scale: 0.5
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: marker,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Rocket launch animation at the end
    const rocketTL = gsap.timeline({
      scrollTrigger: {
        trigger: rocketRef.current,
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "play none none reverse",
      }
    });

    rocketTL
      .fromTo(rocketRef.current,
        {
          scale: 0,
          rotation: -45
        },
        {
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: "back.out(2)"
        }
      )
      .to(rocketRef.current, {
        y: -20,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      });

    // Enhanced parallax effect for the main container
    gsap.to(timelineRef.current, {
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: timelineRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    // Add a progress indicator that follows the center line
    const progressIndicator = document.createElement('div');
    progressIndicator.className = 'absolute top-0 left-1/2 w-1 bg-[#00d3f3] transform -translate-x-1/2 z-20';
    progressIndicator.style.height = '0%';
    centerLineRef.current.parentNode.appendChild(progressIndicator);

    gsap.to(progressIndicator, {
      height: '100%',
      ease: "none",
      scrollTrigger: {
        trigger: timelineContainerRef.current,
        start: "top 60%",
        end: "bottom 20%",
        scrub: 1,
      }
    });

  }, []);

  return (
    <div className="min-h-screen bg-transparent flex flex-col items-center p-8 font-inter-tight overflow-hidden">
      {/* Main Title Block */}
      <div className="w-full max-w-5xl mt-16 mb-16 text-center">
        <h1 
          ref={titleRef}
          className="text-6xl md:text-7xl font-extrabold pb-2 tracking-tight opacity-0 font-inter-tight"
          style={{
            background: 'linear-gradient(90deg, #00d3f3, #00a3cc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'transparent',
          }}
        >
          Website
        </h1>
        <h2 ref={subtitleRef} className="text-3xl md:text-5xl font-extrabold text-white flex items-center justify-center mt-2 opacity-0 font-inter-tight">
          Development Process
          <span className="text-[#00d3f3] ml-3">
            <Diamond className="w-6 h-6 md:w-8 md:h-8 fill-[#00d3f3] rotate-45" />
          </span>
        </h2>
      </div>

      {/* Timeline Container */}
      <div ref={timelineContainerRef} className="relative w-full max-w-4xl">
        <div ref={timelineRef} className="relative pt-10">
          
          {/* Central Vertical Line with gradient effect */}
          <div 
            ref={centerLineRef}
            className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-[#00d3f3] via-cyan-400 to-cyan-500 transform -translate-x-1/2 z-0 shadow-lg shadow-[#00d3f3]/50 scale-y-0"
          >
            {/* Animated glow pulse */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#00d3f3] to-cyan-400 opacity-70 animate-pulse"></div>
          </div>

          {/* Render all 12 step nodes */}
          {processSteps.map((step, index) => (
            <div key={step.id} className="timeline-step">
              <TimelineStep 
                step={step}
                index={index}
              />
            </div>
          ))}
          
        </div>
      </div>
      
      {/* Final Launch Rocket Icon */}
      <div 
        ref={rocketRef}
        className="relative w-8 h-8 flex items-center justify-center bg-[#00d3f3] rounded-full mt-4 z-10 shadow-2xl shadow-[#00d3f3]/80 backdrop-blur-md"
      >
        <Rocket className="w-6 h-6 text-gray-900" />
      </div>
    </div>
  );
}

export default App;