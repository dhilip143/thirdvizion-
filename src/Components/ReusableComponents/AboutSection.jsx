
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { motion } from "framer-motion";

export default function About() {
  const containerRef = useRef(null);
  const capsuleRef = useRef(null);
  const brandRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ smooth: true, lerp: 0.08 });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Capsule subtle breathing animation
    gsap.to(capsuleRef.current, {
      scale: 1.05,
      rotate: 3,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Brand fade-in
    gsap.fromTo(
      brandRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: capsuleRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate highlights with counting numbers
    itemsRef.current.forEach((el) => {
      const numEl = el.querySelector(".highlight-num");
      const value = numEl.dataset.value;

      gsap.fromTo(
        numEl,
        { innerText: 0 },
        {
          innerText: value,
          duration: 2,
          ease: "power1.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      lenis.destroy();
    };
  }, []);

  const highlights = [
    { num: 50, text: "Immersive Tech Projects Delivered" },
    { num: 25, text: "Enterprise Systems Implemented" },
    { num: 15, text: "Custom Applications Developed" },
    { num: 8, text: "Technology Domains Mastered" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative bg-gradient-to-b from-black via-neutral-900 to-black text-white min-h-screen w-full overflow-hidden py-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {/* LEFT */}
        <div className="px-6 flex flex-col gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.3 }}
            className="text-4xl md:text-5xl xl:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-pink-400 to-orange-400 md:text-center lg:text-left font-inter-tight"
          >
Transforming Businesses with Innovative Digital Technology.          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ amount: 0.3 }}
            className="text-gray-300 md:text-center lg:text-left text-md xl:text-lg leading-snug"
          >
          We create innovative digital solutions that blend AR/VR, 3D design, cloud infrastructure, and custom software development. Our goal is to help businesses grow smarter, work faster, and lead through technology.
          </motion.p>

          <div className="flex lg:flex-col justify-center gap-4 mt-4">
            <motion.button
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ amount: 0.3 }}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold shadow-md hover:scale-105 transition"
            >
              Explore Our Services
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ amount: 0.3 }}
              className="px-5 py-3 rounded-xl border border-gray-600 text-gray-300 hover:bg-gray-800 transition"
            >
              View Case Studies
            </motion.button>
          </div>
        </div>

        {/* CENTER CAPSULE */}
        <div className="flex justify-center items-center">
          <div
            ref={capsuleRef}
            className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[45vw] lg:h-[50vh] xl:w-full xl:h-[70vh] 2xl:h-[55vh] rounded-full bg-gradient-to-tr from-indigo-500/20 via-pink-500/20 to-orange-500/20 backdrop-blur-md border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.1)] flex flex-col items-center justify-center"
          >
            <h3
              ref={brandRef}
              className="text-3xl md:text-5xl lg:text-4xl font-extrabold text-white z-10 drop-shadow-lg"
            >
              Thirdvizion
            </h3>
            <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500/10 to-orange-500/10 animate-pulse blur-3xl" />
          </div>
        </div>

        {/* RIGHT HIGHLIGHTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-12 px-6">
          {highlights.map((item, i) => (
            <div
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
              className="flex flex-col items-center gap-2"
            >
              <span
                className="highlight-num text-4xl md:text-5xl font-bold text-pink-400"
                data-value={item.num}
              >
                0
              </span>
              <p className="text-gray-300 text-lg text-center">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}