import { useEffect, useRef, useState, useCallback } from "react";
import edu from "/src/assets/ERPimage.jpg";
import sd from "/src/assets/BlogGiff.jpg";
import nd from "/src/assets/bg-data.jpg";
import yd from "/src/assets/BlogGiff.jpg";
import bd from "/src/assets/image3.jpg";
import vr from "/src/assets/VR.png";

function Empover() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef();

  const handleScroll = useCallback(() => {
    if (rafRef.current) return;

    rafRef.current = requestAnimationFrame(() => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress based on visibility in viewport
      const progress = 1 - (rect.top / (windowHeight + rect.height));
      const clampedProgress = Math.max(0, Math.min(1, progress));
      
      setScrollProgress(clampedProgress);
      rafRef.current = null;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleScroll]);

  const industries = [
    { name: "Education Technology", image: edu, description: "edu tect" },
    { name: "Shipping & Logistics", image: sd, description: "shipping" },
    { name: "Data Analytics", image: nd, description: "gaming" },
    { name: "Blogging Platform", image: yd, description: "content creation" },
    { name: "Business Development", image: bd, description: "business growth" },
    { name: "Virtual Reality", image: vr, description: "immersive experiences" }
  ];

  const getImageStyle = (index) => {
    const staggerDelay = index * 0.12;
    const individualProgress = Math.max(0, Math.min(1, (scrollProgress - staggerDelay) * 4));
    
    if (individualProgress > 0 && individualProgress < 1) {
      // Smooth easing function for more natural motion
      const easeOut = 1 - Math.pow(1 - individualProgress, 3);
      const scale = Math.sin(easeOut * Math.PI);
      const opacity = Math.sin(easeOut * Math.PI);
      const blur = Math.max(0, (1 - scale) * 4);
      const translateY = (1 - scale) * 30;
      const rotate = (individualProgress - 0.5) * 10;

      return {
        transform: `scale(${scale}) translateY(${translateY}px) rotate(${rotate}deg)`,
        opacity: opacity,
        filter: `blur(${blur}px)`,
      };
    } else {
      return {
        transform: 'scale(0) translateY(30px) rotate(-5deg)',
        opacity: 0,
        filter: 'blur(4px)',
      };
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="min-h-[200vh] py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full -top-400 -left-400 animate-pulse"
          style={{ animationDuration: '8s' }}
        ></div>
        <div 
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-full -bottom-300 -right-300 animate-pulse"
          style={{ animationDuration: '6s', animationDelay: '1s' }}
        ></div>
      </div>

      {/* Sticky title */}
      <div className="sticky top-0 pt-20 pb-10 z-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white text-center mb-8 leading-tight">
          Industries We<br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Empower
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 text-center max-w-2xl mx-auto">
          Scroll to discover the industries we're transforming with innovative solutions
        </p>
      </div>

      {/* Industries grid */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 lg:gap-20">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center group cursor-pointer transform transition-all duration-500 hover:scale-105"
            >
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <img 
                  src={industry.image} 
                  alt={industry.name}
                  className="relative w-48 h-48 sm:w-56 sm:h-56 object-cover rounded-2xl shadow-2xl border-2 border-white/10 transition-all duration-500 ease-out backdrop-blur-sm"
                  style={getImageStyle(index)}
                />
              </div>
              
              <div className="text-center space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                  {industry.name}
                </h3>
                <p className="text-lg text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 z-50">
        ⬆️ Scroll slowly to see the magic ⬇️
      </div>
    </section>
  );
}

export default Empover;