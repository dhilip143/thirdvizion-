import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export default function MobileThird() {
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Animate heading
    gsap.fromTo(
      headingRef.current,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // Animate subtitle
    gsap.fromTo(
      subtitleRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.3 }
    );

    // Animate cards with stagger
    gsap.fromTo(
      cardRefs.current,
      { y: 30, scale: 0.95, opacity: 0 },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.5)",
        delay: 0.5,
      }
    );
  }, []);

  const services = [
    {
      name: "React Native",
      tagline: "Build sleek cross-platform apps",
      color: "from-cyan-400 to-blue-500",
    },
    {
      name: "Flutter",
      tagline: "Fast UI, native performance",
      color: "from-indigo-400 to-sky-500",
    },
    {
      name: "Firebase",
      tagline: "Realtime backend & analytics",
      color: "from-yellow-400 to-orange-500",
    },
    {
      name: "Swift",
      tagline: "iOS apps with style & speed",
      color: "from-pink-400 to-red-500",
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center px-6 py-12 text-white">
      {/* Heading */}
      <h1
        ref={headingRef}
        className="text-4xl md:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400"
      >
        Innovate Mobile Experiences
      </h1>

      {/* Subtitle */}
      <p
        ref={subtitleRef}
        className="mt-4 text-gray-300 max-w-3xl text-center text-base md:text-lg"
      >
        Elevate your mobile apps with cutting-edge technologies. Fast, reliable,
        and user-focused solutions for React Native, Flutter, Firebase & Swift.
      </p>

      {/* Service Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {services.map((service, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className={`bg-gradient-to-br ${service.color} rounded-2xl p-6 shadow-xl text-center cursor-pointer transform transition-transform duration-300 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl`}
          >
            <h2 className="text-xl md:text-2xl font-bold">{service.name}</h2>
            <p className="mt-2 text-gray-100 text-sm">{service.tagline}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
