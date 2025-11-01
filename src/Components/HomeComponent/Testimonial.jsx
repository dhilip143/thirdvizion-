import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Testimonials Data ---
const testimonials = [
  {
    name: "Martin Goutry",
    role: "Back-end Developer at MyDodow",
    review:
      "Work Sans has changed how we structure our UI documentation. The flow feels natural and productive!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Agnes Remi",
    role: "Product Designer at Stripe",
    review:
      "Outfit and Work Sans together bring such clarity and confidence to the interface. Clean and inspiring!",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Theo Champion",
    role: "Lead Developer at Vercel",
    review:
      "The experience feels smooth and minimalistic. It's a true showcase of thoughtful design execution.",
    avatar: "https://randomuser.me/api/portraits/men/40.jpg",
  },
  {
    name: "Roman Atwoods",
    role: "CTO at Tech Innovations",
    review:
      "A refreshing approach to UI presentation — clean visuals, soft motion, and a premium black theme.",
    avatar: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    name: "Jessica Lyne",
    role: "UI/UX Specialist at Google",
    review:
      "I love the motion balance and typography choice. Feels futuristic yet human. Absolutely stunning.",
    avatar: "https://randomuser.me/api/portraits/women/60.jpg",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto change every 3s
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [paused]);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative bg-black text-white py-24 font-work-sans overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="font-outfit text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 text-transparent bg-clip-text">
          What People Say
        </h2>
        <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
          Hear from creators and developers using{" "}
          <span className="text-purple-400 font-semibold">Dico</span> to craft
          immersive digital experiences.
        </p>

        {/* --- Carousel --- */}
        <div
          className="relative max-w-xl mx-auto h-[400px] flex items-center justify-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute w-full bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700 rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.2)] p-8"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].name}
                  className="w-20 h-20 rounded-full border-2 border-purple-500 object-cover shadow-lg mb-4"
                />
                <h4 className="font-outfit text-xl font-semibold text-white">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  {testimonials[activeIndex].role}
                </p>
                <p className="text-gray-300 italic leading-relaxed text-lg max-w-md">
                  “{testimonials[activeIndex].review}”
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4">
            <button
              onClick={prev}
              className="text-gray-400 hover:text-purple-400 text-3xl transition"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="text-gray-400 hover:text-purple-400 text-3xl transition"
            >
              ›
            </button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-10 gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === activeIndex ? "bg-purple-400 w-6" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
