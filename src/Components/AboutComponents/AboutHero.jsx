import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import threed from "/src/assets/AboutImages/team org.png";

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
          if (aboutText) {
            gsap.to(aboutText, {
              y: -200,
              opacity: 0,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: wrapper,
                start: "top top",
                end: "+=150%",
                scrub: true,
              },
            });
          }

          if (thirdText) {
            gsap.to(thirdText, {
              x: -window.innerWidth * 1.5,
              scale: 3,
              opacity: 0,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: wrapper,
                start: "top top",
                end: "+=150%",
                scrub: true,
              },
            });
          }

          if (vizionText) {
            gsap.to(vizionText, {
              x: window.innerWidth * 1.5,
              scale: 3,
              opacity: 0,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: wrapper,
                start: "top top",
                end: "+=150%",
                scrub: true,
              },
            });
          }

          gsap.fromTo(
            imgHolder,
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
              scrollTrigger: {
                trigger: wrapper,
                start: "top top",
                end: "+=200%",
                scrub: true,
                pin: imgHolder,
                anticipatePin: 1,
              },
            }
          );

          if (innerImg) {
            gsap.to(innerImg, {
              scale: 1, // Changed to 1 for full image
              y: 60,
              borderRadius: "5rem",
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: wrapper,
                start: "80% bottom",
                end: "bottom bottom",
                scrub: true,
              },
            });
          }
        },

        "(max-width: 1023px)": () => {
          // Mobile header scrolls away normally
          if (mobileHeader) {
            gsap.to(mobileHeader, {
              opacity: 0,
              y: -50,
              ease: "power2.out",
              scrollTrigger: {
                trigger: wrapper,
                start: "top top",
                end: "top+=100 top",
                scrub: true,
              },
            });
          }
        },
      });
    }, wrapperRef);

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
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
        <div className="hidden lg:block min-h-[300vh]">
          <div className="sticky top-0 w-full min-h-screen z-10">
            <div
              ref={imgHolderRef}
              className="sticky top-0 w-full h-screen bg-black flex items-center justify-center"
            >
              <img
                src={threed}
                alt="3d visual"
                className="w-full h-full object-contain" // Changed to object-contain and removed scale-[2]
              />
            </div>
          </div>
        </div>

        {/* Mobile simple section */}
        <div className="lg:hidden w-full bg-black flex items-center justify-center px-4 pb-20">
          <div className="w-full max-w-md">
            <img
              src={threed}
              alt="3d visual"
              className="w-full h-auto object-contain rounded-2xl shadow-lg" // Changed to object-contain
            />
          </div>
        </div>
      </div>
    </div>
  );
}