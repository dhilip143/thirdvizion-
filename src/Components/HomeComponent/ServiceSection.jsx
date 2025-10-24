import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";

gsap.registerPlugin(ScrollTrigger);

// ✅ Import 4 images
import service1a from "/src/assets/HomeImages/serviceimages/service1a.jpg";
import service1b from "/src/assets/HomeImages/serviceimages/service1b.jpg";
import service1c from "/src/assets/HomeImages/serviceimages/service1c.jpg";
import service2a from "/src/assets/HomeImages/serviceimages/service2a.jpg";

const slidesData = [
  {
    image: service1a,
    title: "Immersive Tech Solutions",
    description:
      "Transform your digital presence with our cutting-edge VR and AR experiences.",
    projectCount: "45 projects",
  },
  {
    image: service1b,
    title: "Data & Cloud Services",
    description:
      "Secure cloud infrastructure and advanced data analytics for business intelligence.",
    projectCount: "67 projects",
  },
  {
    image: service1c,
    title: "Custom Development",
    description:
      "Tailored software solutions designed to meet your unique business requirements.",
    projectCount: "124 projects",
  },
  {
    image: service2a,
    title: "Digital Strategy & Branding",
    description:
      "Expert strategic planning and branding to dominate your digital market.",
    projectCount: "78 projects",
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const swiperRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper;
      const totalSlides = slidesData.length;

      // ✅ Make scroll longer so final slide fully displays
      gsap.to(swiperRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=500%",
          pin: true,
          scrub: 2,
          onUpdate: (self) => {
            const progress = self.progress;
            const targetIndex = Math.round(progress * (totalSlides - 1));

            if (swiperInstance.realIndex !== targetIndex) {
              swiperInstance.slideToLoop(targetIndex, 1000);
            }
          },
        },
      });
    }

    // ✅ Fade & enter animations
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // ✅ Puzzle-like animation for swiper
    gsap.fromTo(
      ".swiper-container",
      {
        opacity: 0,
        scale: 0.8,
        rotation: -10,
        transformPerspective: 1000
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // ✅ Create puzzle piece animations for each slide
    const createPuzzleAnimation = (slideIndex) => {
      const slide = document.querySelector(`.swiper-slide:nth-child(${slideIndex + 1})`);
      if (!slide) return;

      const img = slide.querySelector('img');
      const content = slide.querySelector('.slide-content');

      // Reset styles
      gsap.set([img, content], { clearProps: "all" });

      // Puzzle piece animation
      gsap.fromTo(img,
        {
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          scale: 1.2,
          rotation: -5
        },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          scale: 1,
          rotation: 0,
          duration: 1.2,
          ease: "power2.out",
          delay: 0.2
        }
      );

      // Content slides in like puzzle piece
      gsap.fromTo(content,
        {
          y: 100,
          opacity: 0,
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
        },
        {
          y: 0,
          opacity: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1,
          ease: "power2.out",
          delay: 0.5
        }
      );
    };

    // ✅ Button hover animations
    const buttons = document.querySelectorAll(".button");
    buttons.forEach((button) => {
      const enter = () =>
        gsap.to(button, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
          backgroundColor: "#4F46E5",
          color: "white",
        });
      const leave = () =>
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
          backgroundColor: "white",
          color: "#111827",
        });
      button.addEventListener("mouseenter", enter);
      button.addEventListener("mouseleave", leave);
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Floating Particles */}
      <div ref={particlesRef} className="absolute inset-0 z-0 opacity-40">
        {[
          "bg-blue-500",
          "bg-green-500",
          "bg-purple-500",
          "bg-yellow-500",
          "bg-red-500",
        ].map((color, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 ${color} rounded-full animate-pulse`}
            style={{
              top: `${20 + i * 10}%`,
              left: `${30 + (i % 3) * 15}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Puzzle Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute border-2 border-white/20 rounded-lg"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 45}deg)`,
              animation: `float ${Math.random() * 10 + 5}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <section className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center h-screen px-4 py-8 lg:px-16 lg:py-16">
        <div ref={contentRef} className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Innovative Tech Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            We deliver cutting-edge technology services designed to transform your
            business operations and drive digital growth.
          </p>
          <button className="button bg-white text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/30 relative overflow-hidden group">
            <span className="relative z-10">Contact Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>

        Swiper with Puzzle Effect
        <div className="swiper-container w-full max-w-md mx-auto lg:max-w-lg relative">
          {/* Puzzle Frame */}
          <div className="absolute inset-0 border-4 border-white/20 rounded-2xl pointer-events-none z-30 transform rotate-1 scale-105"></div>
          <div className="absolute inset-2 border-2 border-white/10 rounded-xl pointer-events-none z-30 transform -rotate-1"></div>
         
          <Swiper
            ref={swiperRef}
            grabCursor={true}
            loop={true}
            speed={1200}
            effect="creative"
            creativeEffect={{
              prev: {
                shadow: true,
                translate: ["-120%", 0, -500],
                rotate: [0, 0, -90],
              },
              next: {
                shadow: true,
                translate: ["120%", 0, -500],
                rotate: [0, 0, 90],
              },
            }}
            modules={[EffectCreative]}
            className="h-96 md:h-[500px] rounded-2xl shadow-2xl shadow-indigo-500/20 relative z-20"
            onSlideChangeTransitionStart={(swiper) => {
              // Add puzzle animation on slide change
              const slides = document.querySelectorAll('.swiper-slide');
              slides.forEach((slide, index) => {
                if (index === swiper.realIndex) {
                  const img = slide.querySelector('img');
                  const content = slide.querySelector('.slide-content');
                 
                  // Puzzle piece animation
                  gsap.fromTo(img,
                    {
                      clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
                      scale: 1.1,
                    },
                    {
                      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                      scale: 1,
                      duration: 0.8,
                      ease: "power2.out",
                    }
                  );

                  // Content puzzle reveal
                  gsap.fromTo(content,
                    {
                      y: 50,
                      opacity: 0,
                      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
                    },
                    {
                      y: 0,
                      opacity: 1,
                      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                      duration: 0.6,
                      ease: "power2.out",
                      delay: 0.3
                    }
                  );
                }
              });
            }}
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide
                key={index}
                className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="slide-content absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent text-white z-20 rounded-b-2xl">
                  <h3 className="text-2xl font-bold mb-2 transform transition-transform duration-500">
                    {slide.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 transform transition-transform duration-500 delay-100">
                    {slide.description}
                  </p>
                  <div className="flex items-center gap-2 transform transition-transform duration-500 delay-200">
                    <div className="flex text-yellow-400">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm">
                      {slide.projectCount}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
       
        .swiper-slide {
          background: linear-gradient(45deg, #1f2937, #111827);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
       
        .swiper-slide::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent 50%, rgba(99, 102, 241, 0.1) 50%);
          background-size: 4px 4px;
          z-index: 1;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default Services;