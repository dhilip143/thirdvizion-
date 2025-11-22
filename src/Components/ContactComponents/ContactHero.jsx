import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactHeroimg from "/src/assets/home/pex.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function ContactHero() {
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

      const contactText = header.querySelector(".contact-text");
      const getText = header.querySelector(".get-text");
      const touchText = header.querySelector(".touch-text");
      const innerImg = imgHolder.querySelector("img");

      ScrollTrigger.matchMedia({
        // Desktop - Keep original animations
        "(min-width: 1024px)": () => {
          if (contactText) {
            gsap.to(contactText, {
              y: -200,
              opacity: 0,
              ease: "power2.inOut",
              scrollTrigger: { trigger: wrapper, start: "top top", end: "+=150%", scrub: true },
            });
          }
          if (getText) {
            gsap.to(getText, {
              x: -window.innerWidth * 1.5,
              scale: 3,
              opacity: 0,
              rotation: -10,
              ease: "power2.inOut",
              scrollTrigger: { trigger: wrapper, start: "top top", end: "+=150%", scrub: true },
            });
          }
          if (touchText) {
            gsap.to(touchText, {
              x: window.innerWidth * 1.5,
              scale: 3,
              opacity: 0,
              rotation: 10,
              ease: "power2.inOut",
              scrollTrigger: { trigger: wrapper, start: "top top", end: "+=150%", scrub: true },
            });
          }

          gsap.fromTo(
            imgHolder,
            { scale: 0, rotate: 30, clipPath: "polygon(37.5% 20%, 62.5% 20%, 62.5% 80%, 37.5% 80%)" },
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
              scale: 0.8,
              y: 60,
              borderRadius: "5rem",
              ease: "power2.inOut",
              scrollTrigger: { trigger: wrapper, start: "80% bottom", end: "bottom bottom", scrub: true },
            });
          }
        },

        // Mobile - Simple scroll away animation
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
    <div className="relative w-full min-h-screen bg-black font-contrail overflow-hidden text-white">
      {/* Desktop Header - Fixed position for laptops */}
      <div
        ref={headerRef}
        className="hidden lg:flex fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col justify-center items-center w-full z-30 pointer-events-none"
        aria-hidden
      >
        <div className="contact-text text-md xl:text-2xl mb-4 font-bold text-center uppercase font-[Inter_Tight]"  style={{ fontFamily: "Outfit, sans-serif" }}>
          Contact
        </div>
        <div className="flex gap-3 xl:gap-8 mt-2 font-[Inter_Tight] "  style={{ fontFamily: "Outfit, sans-serif" }}>
         <div 
  className="get-text text-5xl md:text-[6rem] xl:text-[12rem] font-medium uppercase bg-clip-text text-transparent"
  style={{
    backgroundImage:
      "linear-gradient(135deg, #FFD700 0%, #FFB700 25%, #FFAA00 50%, #FF9900 75%, #E5C100 100%)"
  }}
>
  Get in
</div>

<div 
  className="touch-text text-5xl md:text-[6rem] xl:text-[12rem] font-medium uppercase bg-clip-text text-transparent"
  style={{
    backgroundImage:
      "linear-gradient(135deg, #FFD700 0%, #FFB700 25%, #FFAA00 50%, #FF9900 75%, #E5C100 100%)"
  }}
>
  Touch
</div>

        </div>
      </div>

      {/* Mobile Header - Normal scroll position (not fixed) */}
      <div 
        ref={mobileHeaderRef}
        className="lg:hidden relative z-30 w-full pt-20 pb-10 flex flex-col justify-center items-center px-4"
        style={{ fontFamily: "Outfit, sans-serif" }}
      >
        <div className="text-lg mb-4 font-semibold text-center uppercase">
          Contact
        </div>
        <div className="flex flex-col items-center gap-1">
          <div 
            className="text-5xl font-bold uppercase bg-clip-text text-transparent text-center"
            style={{
              backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%,  #4facfe 100%)"
            }}
          >
            Get in
          </div>
          <div 
            className="text-5xl font-bold uppercase bg-clip-text text-transparent text-center"
            style={{
              backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)"
            }}
          >
            Touch
          </div>
        </div>
      </div>

      <div ref={wrapperRef} className="w-full relative">
        {/* Desktop scroll section */}
        <div className="hidden lg:block min-h-[300vh]">
          <div className="sticky top-0 w-full min-h-screen z-10">
            <div
              ref={imgHolderRef}
              className="sticky top-0 w-full h-screen bg-black flex items-center justify-center [clip-path:polygon(37.5%_20%,62.5%_20%,62.5%_80%,37.5%_80%)]"
            >
              <img
                src={ContactHeroimg}
                alt="Contact Visual"
                className="w-full h-[50vh] md:h-[60vh] lg:h-[80vh] xl:h-full object-fill scale-[2]"
              />
            </div>
          </div>
        </div>

        {/* Mobile simple section */}
        <div className="lg:hidden w-full bg-black flex items-center justify-center px-4 pb-20">
          <div className="w-full max-w-md">
            <img
              src={ContactHeroimg}
              alt="Contact Visual"
              className="w-full h-auto object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}