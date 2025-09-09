import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import threed from "/src/assets/home/3d.png";

gsap.registerPlugin(ScrollTrigger);

export default function Thirdblog() {
  const headerRef = useRef(null);
  const wrapperRef = useRef(null);
  const imgHolderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const header = headerRef.current;
      const wrapper = wrapperRef.current;
      const imgHolder = imgHolderRef.current;
      if (!header || !wrapper || !imgHolder) return;

      const aboutText = header.querySelector(".about-text");
      const thirdText = header.querySelector(".third-text");
      const vizionText = header.querySelector(".vizion-text");

      // About moves UP
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

      // Third moves LEFT
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

      // Vizion moves RIGHT
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

      // Image rotate + clip path expand
      gsap.fromTo(
        imgHolder,
        {
          rotate: 30,
          clipPath: "polygon(37.5% 20%, 62.5% 20%, 62.5% 80%, 37.5% 80%)",
        },
        {
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

      // Image scale
      const innerImg = imgHolder.querySelector("img");
      if (innerImg) {
        gsap.fromTo(
          innerImg,
          { scale: 2 },
          {
            scale: 1,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: wrapper,
              start: "top top",
              end: "+=200%",
              scrub: true,
            },
          }
        );
      }
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
    <div className="relative w-full min-h-screen bg-black font-contrail  overflow-hidden">
      {/* Small logo */}
      <div className="fixed top-0 right-0 m-8 w-[18px] h-[18px] bg-red-500 rounded-sm z-40" />

      {/* Header text */}
      <div
        ref={headerRef}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-full z-30 pointer-events-none"
        aria-hidden
      >
        <div className="about-text text-[5rem] font-medium text-white text-center uppercase transform translate-y-[90px] ">
          About
        </div>
        <div className="flex gap-6 mt-4">
          <div className="third-text text-[12rem] font-medium text-white text-center uppercase">
            Third
          </div>
          <div className="vizion-text text-[12rem] font-medium text-white text-center uppercase">
            Vizion
          </div>
        </div>
      </div>

      {/* Scroll wrapper */}
      <div ref={wrapperRef} className="relative min-h-[300vh]">
        <div className="website-content sticky top-0 w-full min-h-screen z-10">
          <div
            ref={imgHolderRef}
            className="relative w-full h-screen bg-gray-200 flex items-center justify-center [clip-path:polygon(37.5%_20%,62.5%_20%,62.5%_80%,37.5%_80%)] rotate-[30deg]"
          >
            <img
              src={threed}
              alt="3d visual"
              className="w-full h-full object-cover scale-[2]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
