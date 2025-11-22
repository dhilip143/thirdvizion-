import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import threed from "/src/assets/AboutImages/group.png";

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {
  const headerRef = useRef(null);
  const wrapperRef = useRef(null);
  const imgHolderRef = useRef(null);
  const mobileHeaderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const header = headerRef.current;
      const wrapper = wrapperRef.current;
      const imgHolder = imgHolderRef.current;
      const mobileHeader = mobileHeaderRef.current;
      
      if (!header || !wrapper || !imgHolder) return;

      const aboutText = header.querySelector(".about-text");
      const thirdText = header.querySelector(".third-text");
      const vizionText = header.querySelector(".vizion-text");
      const innerImg = imgHolder.querySelector("img");

      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          // Reset all transforms before animation
          gsap.set([aboutText, thirdText, vizionText, imgHolder, innerImg], {
            clearProps: "transform,opacity,clipPath,borderRadius"
          });

          // Create a master timeline for smoother sequencing
          const masterTL = gsap.timeline({
            scrollTrigger: {
              trigger: wrapper,
              start: "top top",
              end: "+=300%",
              scrub: 1.5,
              pin: imgHolder,
              anticipatePin: 1,
              markers: false,
            }
          });

          // Text animations with better timing
          if (aboutText) {
            masterTL.to(aboutText, {
              y: -200,
              opacity: 0,
              ease: "power2.inOut",
            }, 0);
          }

          if (thirdText) {
            masterTL.to(thirdText, {
              x: -window.innerWidth * 1.5,
              scale: 3,
              opacity: 0,
              ease: "power2.inOut",
            }, 0);
          }

          if (vizionText) {
            masterTL.to(vizionText, {
              x: window.innerWidth * 1.5,
              scale: 3,
              opacity: 0,
              ease: "power2.inOut",
            }, 0);
          }

          // Image holder animation
          masterTL.fromTo(imgHolder, 
            {
              scale: 0,
              rotate: 30,
              clipPath: "polygon(37.5% 20%, 62.5% 20%, 62.5% 80%, 37.5% 80%)",
            },
            {
              scale: 1,
              rotate: 0,
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              ease: "power2.inOut",
              duration: 1,
            },
            0
          );

          // Inner image animation with better timing - FULL WIDTH
          if (innerImg) {
            masterTL.fromTo(innerImg, 
              {
                scale: 2, // Start with zoomed in
                width: "100%", // Full width
              },
              {
                scale: 1, // End with normal scale
                width: "90%", // Maintain full width
                y: 60,
                borderRadius: "10rem",
                ease: "power2.inOut",
              }, 
              0.5
            );
          }
        },

        "(max-width: 1023px)": () => {
          // Mobile animations
          if (mobileHeader) {
            gsap.to(mobileHeader, {
              opacity: 0,
              y: -50,
              ease: "power2.out",
              scrollTrigger: {
                trigger: wrapper,
                start: "top top",
                end: "top+=150 top",
                scrub: 1,
              },
            });
          }

          // Mobile image animation - FULL WIDTH
          const mobileImg = document.querySelector('.lg\\:hidden img');
          if (mobileImg) {
            gsap.fromTo(mobileImg, 
              {
                scale: 0.8,
                opacity: 0.8,
                width: "100%", // Full width on mobile
              },
              {
                scale: 1,
                opacity: 1,
                width: "100%", // Maintain full width
                ease: "power2.out",
                scrollTrigger: {
                  trigger: mobileImg,
                  start: "top bottom",
                  end: "top center",
                  scrub: 1,
                }
              }
            );
          }
        },
      });
    }, wrapperRef);

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    // Debounced resize handler for better performance
    let resizeTimeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 250);
    };

    window.addEventListener("resize", debouncedResize);

    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(resizeTimeout);
      ctx.revert();
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">

      {/* Desktop Header - Fixed position for laptops */}
      <div
        ref={headerRef}
        className="hidden lg:flex fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col justify-center items-center w-full z-30 pointer-events-none"
        style={{ fontFamily: "Outfit, sans-serif" }}
      >
        <div className="about-text font-inter-tight text-md xl:text-2xl md:mr-6 xl:mr-10 -mb-5 md:-mb-8 xl:-mb-10 font-medium text-white text-center uppercase">
          About
        </div>

        <div className="flex gap-2 xl:gap-6 mt-4">
          <div className="third-text font-inter-tight text-4xl md:text-[5rem] xl:text-[12rem] font-medium uppercase bg-gradient-to-r from-yellow-400 via-green-500 to-red-500 bg-clip-text text-transparent">
            Third
          </div>
          <div className="vizion-text font-inter-tight text-4xl md:text-[5rem] xl:text-[12rem] font-medium uppercase bg-gradient-to-r from-yellow-400 via-green-500 to-red-500 bg-clip-text text-transparent">
            Vizion
          </div>
        </div>
      </div>

      {/* Mobile Header - Normal scroll position (not fixed) */}
      <div 
        ref={mobileHeaderRef}
        className="lg:hidden relative z-30 w-full pt-20 pb-10 flex flex-col justify-center items-center px-4"
        style={{ fontFamily: "Outfit, sans-serif" }}
      >
        <div className="font-inter-tight text-lg mb-3 font-medium text-white text-center uppercase">
          About
        </div>

        <div className="flex flex-col items-center gap-0">
          <div className="font-inter-tight text-6xl font-bold uppercase bg-gradient-to-r from-yellow-400 via-green-500 to-red-500 bg-clip-text text-transparent text-center">
            Third
          </div>
          <div className="font-inter-tight text-6xl font-bold uppercase bg-gradient-to-r from-yellow-400 via-green-500 to-red-500 bg-clip-text text-transparent text-center">
            Vizion
          </div>
        </div>
      </div>

      <div ref={wrapperRef} className="w-full relative">
        {/* Desktop scroll section */}
        <div className="hidden lg:block min-h-[100vh]">
          <div className="sticky top-0 w-full min-h-screen z-10">
            <div
              ref={imgHolderRef}
              className="sticky top-0 w-full h-screen bg-black flex items-center justify-center overflow-hidden"
            >
              <img
                src={threed}
                alt="3d visual"
                className="w-full h-full object-contain transform-gpu" // Full width and height
              />
            </div>
          </div>
        </div>

        {/* Mobile simple section - FULL WIDTH */}
        <div className="lg:hidden w-full bg-black flex items-center justify-center px-0 pb-20 pt-10"> {/* Removed horizontal padding */}
          <div className="w-full"> {/* Full width container */}
            <img
              src={threed}
              alt="3d visual"
              className="w-full h-auto object-cover transform-gpu" // Full width image
            />
          </div>
        </div>
      </div>
    </div>
  );
}