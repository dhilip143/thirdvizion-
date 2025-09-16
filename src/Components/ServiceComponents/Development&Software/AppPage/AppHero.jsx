import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import mobile from "/src/assets/MobileTransparent.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "/src/Hooks/TextReveal.jsx";

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
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 -mt-15 -mb-40 relative z-10">
        {/* <TextReveal> */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ amount: 0 }} // ✅ better viewport setting
          className="text-4xl md:text-6xl font-extrabold mb-4 text-white"
        >
          We Craft Seamless Mobile Experiences
        </motion.h1>
        {/* </TextReveal> */}

        {/* <TextReveal delay={0.2}> */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }} // ✅ triggers earlier
          className="text-gray-400 max-w-xl mb-6"
        >
          Transforming ideas into intuitive and engaging mobile applications
          that drive success.
        </motion.p>
        {/* </TextReveal> */}

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
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
            className="w-80 md:w-[19rem] mt-20 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
