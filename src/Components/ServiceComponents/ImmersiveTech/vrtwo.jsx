// src/components/Vrtwo.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import vrone from "/src/assets/vr/vrn.jpg";

import vrtwo from "/src/assets/vr/vrman.jpg";  

gsap.registerPlugin(ScrollTrigger);

export default function Vrtwo() {
  const sectionRef = useRef(null);
  const vrHeadsetRef = useRef(null);
  const vrManRef = useRef(null);
  const textLeftRef = useRef(null);
  const textRightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(vrHeadsetRef.current, {
        y: -25,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      gsap.to(vrManRef.current, {
        y: 25,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      gsap.from(textLeftRef.current, {
        x: -150,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: textLeftRef.current,
          start: "top 80%",
        },
      });

      gsap.from(textRightRef.current, {
        x: 150,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: textRightRef.current,
          start: "top 80%",
        },
      });

      gsap.from([vrHeadsetRef.current, vrManRef.current], {
        scale: 0.7,
        opacity: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.6)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      gsap.to(".particle", {
        y: (i) => (i % 2 === 0 ? 30 : -30),
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-zinc-950 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background neon blobs */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-violet-700/30 rounded-full blur-[180px]"></div>
      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-indigo-600/30 rounded-full blur-[180px]"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor:
                i % 3 === 0
                  ? "rgba(168,85,247,0.7)"
                  : i % 3 === 1
                  ? "rgba(99,102,241,0.7)"
                  : "rgba(147,51,234,0.7)",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 px-10 py-20 w-full max-w-7xl relative z-10">
        {/* Left: Text + VR Man */}
        <div className="flex flex-col items-center md:items-start gap-12">
          <div ref={textLeftRef} className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">
              Easy to Wear <br /> and Comfortable
            </h2>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Pellentesque dictum sem non nibh egestas mattis. Vivamus vel
              scelerisque ex. Ut varius sollicitudin libero, sed finibus lectus
              ultrices vitae. Nam aliquam eu magna ac facilisis.
            </p>
          </div>

          <div
            ref={vrManRef}
            className="relative w-80 h-80 rounded-3xl overflow-hidden backdrop-blur-md bg-zinc-900/40 border border-violet-500/30 shadow-[0_0_50px_rgba(168,85,247,0.5)]"
          >
            <img
              src={vrtwo}
              alt="VR Man"
              className="w-full h-full "
              onError={(e) =>
                (e.currentTarget.src =
                  "https://via.placeholder.com/300x300?text=VR+Man")
              }
            />
            <div className="absolute inset-0 "></div>
          </div>
        </div>

        {/* Right: VR Headset + Text */}
        <div className="flex flex-col items-center md:items-end gap-12">
          <div
            ref={vrHeadsetRef}
            className="relative w-80 h-80 rounded-3xl overflow-hidden backdrop-blur-md bg-zinc-900/40 border border-indigo-500/30 shadow-[0_0_50px_rgba(59,130,246,0.5)]"
          >
            <img
              src={vrone}
              alt="VR Headset"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          <div ref={textRightRef} className="space-y-6 text-right">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">
              Control Comes <br /> Naturally
            </h2>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Pellentesque dictum sem non nibh egestas mattis. Vivamus vel
              scelerisque ex. Ut varius sollicitudin libero, sed finibus lectus
              ultrices vitae. Nam aliquam eu magna ac facilisis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
