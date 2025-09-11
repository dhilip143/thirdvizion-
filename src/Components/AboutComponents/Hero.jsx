import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import threed from "/src/assets/home/3d.png";

gsap.registerPlugin(ScrollTrigger);

export default function Thirdblog() {
  const headerRef = useRef(null);
  const wrapperRef = useRef(null);
  const imgHolderRef = useRef(null);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const header = headerRef.current;
  //     const wrapper = wrapperRef.current;
  //     const imgHolder = imgHolderRef.current;
  //     if (!header || !wrapper || !imgHolder) return;

  //     const aboutText = header.querySelector(".about-text");
  //     const thirdText = header.querySelector(".third-text");
  //     const vizionText = header.querySelector(".vizion-text");

  //     // About moves UP
  //     if (aboutText) {
  //       gsap.to(aboutText, {
  //         y: -200,
  //         opacity: 0,
  //         ease: "power2.inOut",
  //         scrollTrigger: {
  //           trigger: wrapper,
  //           start: "top top",
  //           end: "+=150%",
  //           scrub: true,
  //         },
  //       });
  //     }

  //     // Third moves LEFT
  //     if (thirdText) {
  //       gsap.to(thirdText, {
  //         x: -window.innerWidth * 1.5,
  //         scale: 3,
  //         opacity: 0,
  //         ease: "power2.inOut",
  //         scrollTrigger: {
  //           trigger: wrapper,
  //           start: "top top",
  //           end: "+=150%",
  //           scrub: true,
  //         },
  //       });
  //     }

  //     // Vizion moves RIGHT
  //     if (vizionText) {
  //       gsap.to(vizionText, {
  //         x: window.innerWidth * 1.5,
  //         scale: 3,
  //         opacity: 0,
  //         ease: "power2.inOut",
  //         scrollTrigger: {
  //           trigger: wrapper,
  //           start: "top top",
  //           end: "+=150%",
  //           scrub: true,
  //         },
  //       });
  //     }

  //     // Image rotate + clip path expand
  //     gsap.fromTo(
  //       imgHolder,
  //       {
  //         rotate: 30,
  //         clipPath: "polygon(37.5% 20%, 62.5% 20%, 62.5% 80%, 37.5% 80%)",
  //       },
  //       {
  //         rotate: 0,
  //         clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  //         ease: "power2.inOut",
  //         scrollTrigger: {
  //           trigger: wrapper,
  //           start: "top top",
  //           end: "+=200%",
  //           scrub: true,
  //           pin: imgHolder,
  //           anticipatePin: 1,
  //         },
  //       }
  //     );

  //     // Image scale
  //     const innerImg = imgHolder.querySelector("img");
  //     if (innerImg) {
  //       gsap.to(innerImg, {
  //         scale: 0.8,
  //         y: 60, // larger so you see movement
  //         borderRadius: "5rem", // will work now
  //         ease: "power2.inOut",
  //         scrollTrigger: {
  //           trigger: wrapper,
  //           start: "80% bottom",
  //           end: "bottom bottom",
  //           scrub: true,
  //         },
  //       });
  //     }

  //     // Exit animation: scale down + border radius
  //     gsap.to(imgHolder, {
  //       ease: "power2.inOut",
  //       scrollTrigger: {
  //         trigger: wrapper,
  //         start: "80% bottom", // when scroll nears end
  //         end: "bottom bottom", // until wrapper leaves
  //         scrub: true,
  //       },
  //     });
  //   }, wrapperRef);

  //   const handleResize = () => ScrollTrigger.refresh();
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //     ctx.revert();
  //     ScrollTrigger.getAll().forEach((t) => t.kill());
  //   };
  // }, []);

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

      // 🔥 Responsive animations
      ScrollTrigger.matchMedia({
        // Desktop (>=1024px)
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

        // Mobile (<1024px)
        "(max-width: 1023px)": () => {
          // if (aboutText) {
          //   gsap.to(aboutText, {
          //     y: -1,
          //     opacity: 0,
          //     ease: "power2.inOut",
          //     scrollTrigger: {
          //       trigger: wrapper,
          //       start: "top top",
          //       end: "+=100%",
          //       scrub: true,
          //     },
          //   });
          // }

          // if (thirdText) {
          //   gsap.to(thirdText, {
          //     x: -window.innerWidth,
          //     scale: 2,
          //     opacity: 0,
          //     ease: "power2.inOut",
          //     scrollTrigger: {
          //       trigger: wrapper,
          //       start: "top top",
          //       end: "+=100%",
          //       scrub: true,
          //     },
          //   });
          // }

          // if (vizionText) {
          //   gsap.to(vizionText, {
          //     x: window.innerWidth,
          //     scale: 2,
          //     opacity: 0,
          //     ease: "power2.inOut",
          //     scrollTrigger: {
          //       trigger: wrapper,
          //       start: "top top",
          //       end: "+=100%",
          //       scrub: true,
          //     },
          //   });
          // }

          gsap.fromTo(
            imgHolder,
            {
              scale: 1,
              rotate: 0,
              clipPath: "polygon(40% 30%, 60% 30%, 60% 70%, 40% 70%)",
            },
            {
              scale: 0.95,
              rotate: 0,
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: wrapper,
                start: "top +=100",
                end: "bottom bottom ", // ✅ give more scroll room
                scrub: true,
                // pin: imgHolder,
                // pinSpacing: true,
                // anticipatePin: 1,
                markers: true,
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
                markers: true,
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
    <div className="relative w-full min-h-screen bg-black font-contrail overflow-hidden">
      {/* Header text */}
      <div
        ref={headerRef}
        className="absolute md:fixed  md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 flex flex-col justify-center md:h-screen items-center w-full z-30 pointer-events-none"
        aria-hidden
      >
        <div className="about-text text-md md:text-[5rem] font-medium text-white text-center uppercase transform md:translate-y-[90px] ">
          About
        </div>
        <div className="flex gap-6 mt-4">
          <div className="third-text md:text-[12rem] font-medium text-white text-center uppercase">
            Third
          </div>
          <div className="vizion-text md:text-[12rem] font-medium text-white text-center uppercase">
            Vizion
          </div>
        </div>
      </div>

      {/* Scroll wrapper */}
      <div ref={wrapperRef} className="relative min-h-[300vh]">
        <div className="website-content md:sticky md:top-0 w-full min-h-screen z-10">
          <div
            ref={imgHolderRef}
            className="sticky top-0 md:relative w-full h-screen bg-black flex items-center justify-center [clip-path:polygon(37.5%_20%,62.5%_20%,62.5%_80%,37.5%_80%)]  rotate-[30deg]"
          >
            <img
              src={threed}
              alt="3d visual"
              className="w-full md:h-full object-cover scale-[2]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
