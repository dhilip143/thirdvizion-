import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import mobile from "/src/assets/MobileTransparent.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden mb-[-100vh]">
      {/* Hero text section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 -mt-15 -mb-40">
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          We Craft Seamless Mobile Experiences
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.3 }}
          className="text-gray-400 max-w-xl mb-6"
        >
          Transforming ideas into intuitive and engaging mobile applications
          that drive success.
        </motion.p>
        <motion.button
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.6 }}
          className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition"
        >
          Get Started
        </motion.button>
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
            className="w-80 md:w-[20rem] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
