import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBullseye, FaLightbulb, FaHandsHelping } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function Mission() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;

    // Scroll-triggered fade-in and slide-up animation
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const handleCardClick = (index) => {
    const card = cardsRef.current[index];
    gsap.fromTo(
      card,
      { scale: 1 },
      {
        scale: 1.05,
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
      }
    );
  };

  const data = [
    {
      icon: <FaBullseye className="text-6xl text-yellow-400" />,
      title: "Third Vision",
      desc: "Pioneering service excellence with innovation at the core.",
    },
    {
      icon: <FaLightbulb className="text-6xl text-green-400" />,
      title: "Vision",
      desc: "To be the most reliable and creative service-based company globally.",
    },
    {
      icon: <FaHandsHelping className="text-6xl text-blue-400" />,
      title: "Mission",
      desc: "Deliver solutions that empower businesses with efficiency and trust.",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-20 px-4"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        About Us
      </h2>

      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
        {data.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            onClick={() => handleCardClick(index)}
            className="bg-gray-900 p-8 rounded-2xl shadow-lg cursor-pointer transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="mb-6 flex justify-center">{item.icon}</div>
            <h3 className="text-2xl font-semibold mb-4 text-center">
              {item.title}
            </h3>
            <p className="text-gray-300 text-center">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
