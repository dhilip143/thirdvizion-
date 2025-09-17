import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export default function About() {
  const containerRef = useRef(null);
  const capsuleRef = useRef(null);
  const leftRef = useRef(null);
  const itemsRef = useRef([]);
  const brandRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // ✅ Lenis Smooth Scroll
    const lenis = new Lenis({ smooth: true, lerp: 0.08 });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // ✅ Capsule animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=200%",
        scrub: 1,
        pin: capsuleRef.current,
        anticipatePin: 1,
      },
    });

    tl.to(
      capsuleRef.current,
      {
        scale: 1.15,
        rotate: 8,
        boxShadow: "0 0 60px rgba(99,102,241,0.5)",
        duration: 1,
        ease: "power2.inOut",
      },
      0
    );

    tl.to(
      capsuleRef.current,
      {
        scale: 1,
        rotate: -8,
        boxShadow: "0 0 40px rgba(236,72,153,0.4)",
        duration: 1,
        ease: "power2.inOut",
      },
      ">+0.5"
    );

    // ✅ Brand fade/scale inside capsule
    gsap.fromTo(
      brandRef.current,
      { autoAlpha: 0, scale: 0.8 },
      {
        autoAlpha: 1,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: capsuleRef.current,
          start: "top 90%",
          end: "top 60%",
          scrub: true,
        },
      }
    );

    // ✅ Right section fade/parallax
    itemsRef.current.forEach((el) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 60 },
        {
          autoAlpha: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 40%",
            scrub: true,
          },
        }
      );
    });

    // ✅ Left section interactive animation (fade + slide + scale)
    gsap.fromTo(
      leftRef.current,
      { autoAlpha: 0, x: -50, scale: 0.95 },
      {
        autoAlpha: 1,
        x: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 90%",
          end: "top 60%",
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      lenis.destroy();
    };
  }, []);

  // ✅ Right side highlights
  const highlights = [
    { num: "25M", text: "Users impacted globally in 2024." },
    { num: "250+", text: "Enterprise partners worldwide." },
    { num: "$500M", text: "Invested into future-ready platforms." },
    { num: "50%", text: "Increase in leadership diversity." },
    { num: "100+", text: "Patents filed in immersive tech." },
    { num: "150+", text: "XR training deployments worldwide." },
  ];

  return (
    <section
      ref={containerRef}
      className="relative bg-black text-white min-h-screen w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* LEFT - minimal height, interactive */}
        <div
          ref={leftRef}
          className="px-6 py-12 flex flex-col justify-start gap-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Thirdvizion — Building Immersive Digital Experiences
          </h2>
          <p className="text-gray-400 max-w-md">
            We combine Virtual & Augmented Reality, 3D design, and full-stack development to deliver enterprise-ready solutions from concept to launch — proudly based in Reteri.
          </p>

          <div className="flex flex-col gap-3 mt-4">
            <button className="bg-indigo-600 hover:bg-indigo-500 transition px-4 py-2 rounded font-semibold">
              Talk to our team
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 transition px-4 py-2 rounded font-semibold">
              See our services
            </button>
          </div>

          <p className="text-gray-500 mt-4 text-sm">
            Location: Reteri • Email: hello@thirdvizion.com
          </p>

          <div className="mt-6">
            <h3 className="text-xl md:text-2xl font-bold mb-2">About Thirdvizion</h3>
            <p className="text-gray-400 max-w-md">
              Thirdvizion is a service-led technology studio based in Reteri. We help organizations transform ideas into immersive products — from Virtual & Augmented Reality to cloud-powered enterprise systems. Our approach blends creative design, engineering excellence, and reliable operations so you can launch fast and scale securely.
            </p>
            <button className="mt-3 bg-indigo-600 hover:bg-indigo-500 transition px-4 py-2 rounded font-semibold">
              Read more
            </button>
          </div>
        </div>

        {/* CENTER CAPSULE */}
        <div className="flex justify-center items-center h-screen">
          <div
            ref={capsuleRef}
            className="relative bg-neutral-900 w-72 h-56 md:w-96 md:h-72 rounded-[3rem] shadow-2xl flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Brand inside capsule */}
            <h3
              ref={brandRef}
              className="text-3xl md:text-5xl font-extrabold text-white z-10"
            >
              Thirdvizion
            </h3>

            {/* ✅ 3D SVG-like Image inside capsule */}
            <img
              src="/src/assets/AboutImages/tird.png"
              alt="Thirdvizion Logo"
              className="absolute w-40 h-40 object-contain opacity-90 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transform perspective-1000 rotate-y-6"
            />

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-[3rem] pointer-events-none bg-gradient-to-r from-indigo-600/30 via-pink-600/20 to-purple-600/30 mix-blend-overlay" />
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div className="relative px-6 py-24 flex flex-col gap-16">
          {highlights.map((item, i) => (
            <div
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
              className="flex flex-col gap-2"
            >
              <span className="text-3xl md:text-4xl font-bold text-indigo-400">
                {item.num}
              </span>
              <p className="text-lg md:text-xl text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
