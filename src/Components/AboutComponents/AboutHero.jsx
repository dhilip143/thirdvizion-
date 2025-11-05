import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import threed from "/src/assets/home/Clients/wsx.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {
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
              scale: 0.8,
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
          if (aboutText) {
            gsap.to(aboutText, {
              y: -200,
              opacity: 0,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: wrapper,
                start: "top top",
                end: "+=100%",
                scrub: true,
              },
            });
          }

          if (thirdText) {
            gsap.to(thirdText, {
              x: -window.innerWidth,
              scale: 2,
              opacity: 0,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: wrapper,
                start: "top top",
                end: "+=100%",
                scrub: true,
              },
            });
          }

          if (vizionText) {
            gsap.to(vizionText, {
              x: window.innerWidth,
              scale: 2,
              opacity: 0,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: wrapper,
                start: "top top",
                end: "+=100%",
                scrub: true,
              },
            });
          }

          gsap.fromTo(
            imgHolder,
            {
              scale: 0,
              rotate: 0,
              clipPath: "polygon(40% 30%, 60% 30%, 60% 70%, 40% 70%)",
            },
            {
              scale: 1,
              rotate: 0,
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: wrapper,
                start: "top top",
                end: "bottom center",
                scrub: true,
                pin: imgHolder,
                pinSpacing: true,
                anticipatePin: 1,
              },
            }
          );

          if (innerImg) {
            gsap.to(innerImg, {
              scale: 0.9,
              y: 30,
              borderRadius: "2rem",
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: wrapper,
                start: "top top",
                end: "bottom bottom",
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

      <div
        ref={headerRef}
        className="fixed md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 flex flex-col justify-center items-center w-full z-30 pointer-events-none"
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

      <div ref={wrapperRef} className="w-full relative min-h-[300vh]">
        <div className="sticky top-0 w-full min-h-screen z-10">
          <div
            ref={imgHolderRef}
            className="sticky top-0 w-full h-screen bg-black flex items-center justify-center"
          >
            <img
              src={threed}
              alt="3d visual"
              className="w-full h-[50vh] md:h-[60vh] lg:h-[80vh] xl:h-full object-cover scale-[2]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
