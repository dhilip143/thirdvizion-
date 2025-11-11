import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import mobile from "/src/assets/MobileTransparent.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";


gsap.registerPlugin(ScrollTrigger);

export default function AppHero() {
  const wrapperRef = useRef(null);
  const imgHolderRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const imgHolder = imgHolderRef.current;

    if (!wrapper || !imgHolder) return;

    const innerImg = imgHolder.querySelector("img");

    // Kill existing triggers if re-rendered
    ScrollTrigger.getAll().forEach((t) => t.kill());

    // Pin and scale
    gsap.fromTo(
      imgHolder,
      { scale: 1, opacity: 1 },
      {
        scale: 5.5,
        ease: "power2.inOut",
        transformOrigin: "center center",
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          // markers: true, // remove later
        },
      }
    );

    // Fade out image near the end
    gsap.to(imgHolder, {
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: wrapper,
        start: "bottom-=40% bottom", // fade starts near the end
        end: "bottom bottom", // fully invisible at end
        scrub: true,
      },
    });

    if (innerImg) {
      gsap.fromTo(
        innerImg,
        { borderRadius: "3rem" },
        {
          borderRadius: "0rem",
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: wrapper,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden mb-[-100vh]">
      {/* Hero text section */}
      <section className="mt-40 lg:mt-0 lg:h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ amount: 0 }} // ✅ better viewport setting
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-inter-tight font-extrabold mb-4 text-[#ff8904]"
       style={{ fontFamily: "Outfit, sans-serif" }} >
          We Craft Seamless Mobile Experiences
        </motion.h1>

        {/* <TextReveal delay={0.2}> */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }} // ✅ triggers earlier
          className="text-gray-400 text-sm sm:text-base md:text-lg max-w-md sm:max-w-xl lg:max-w-2xl mb-6"
       style={{ fontFamily: "work-sans, sans-serif" }} >
          Transforming ideas into intuitive and engaging mobile applications
          that drive success.
        </motion.p>
        {/* </TextReveal> */}
          <Link to="/contact">
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="font-inter-tight inline-flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl border border-[#ff8904]/40 bg-black px-5 sm:px-6 md:px-8 py-3 sm:py-4 font-medium sm:font-semibold tracking-wide text-sm sm:text-base md:text-lg shadow-[0_0_10px_rgba(0,211,243,0.3)] backdrop-blur-md transition-all duration-500 hover:shadow-[0_0_25px_rgba(255, 137, 4,0.5)] hover:scale-105 text-[#ff8904]"
        >
          Get Started
        </motion.button>
        </Link>
      </section>

      {/* Scroll-through section */}
      <div
        ref={wrapperRef}
        className="relative w-full min-h-[200vh] flex justify-center items-start overflow-hidden"
      >
        <div
          ref={imgHolderRef}
          className="w-full flex items-center justify-center"
        >
          <img
            src={mobile}
            alt=""
            className="w-56 sm:w-64 md:w-80 lg:w-[20rem] xl:w-[22rem] 2xl:w-[20rem] mt-40 md:mt-20 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
