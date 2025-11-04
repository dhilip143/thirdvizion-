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
    <section className="relative bg-black text-white py-24 font-['Work_Sans'] overflow-hidden">
      {/* ✅ Removed glow background — solid black theme only */}

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* ✅ Heading & Paragraph Style */}
        <h2 className=" text-5xl font-bold mb-4 text-[#ffffff]
        " style={{ fontFamily: "Outfit, sans-serif" }}>
          What People Say <spam className="text-[#FFC016] " style={{ fontFamily: "Outfit, sans-serif" }}>us</spam>
        </h2>
        <p className="text-white text-lg mb-16 max-w-2xl mx-auto font-['Work_Sans']">
          Hear from creators and developers using our services to craft
          immersive digital experiences.
        </p>

        {/* --- Carousel Container --- */}
        <div className="relative max-w-6xl mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Main Featured Card */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="w-full bg-black border border-gray-800 rounded-2xl shadow-lg p-8 h-full"
                >
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={testimonials[activeIndex].avatar}
                      alt={testimonials[activeIndex].name}
                      className="w-24 h-24 rounded-full border-2 border-gray-600 object-cover shadow-md mb-6"
                    />
                    <h4 className="font-['Outfit'] text-2xl font-semibold text-white mb-2">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-gray-400 text-base mb-6 font-['Work_Sans']">
                      {testimonials[activeIndex].role}
                    </p>
                    <p className="text-gray-300 italic leading-relaxed text-lg max-w-md font-['Work_Sans']">
                      “{testimonials[activeIndex].review}”
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Side Cards */}
            <div className="space-y-6">
              {testimonials
                .filter((_, index) => index !== activeIndex)
                .slice(0, 2)
                .map((testimonial, index) => (
                  <motion.div
                    key={testimonial.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-black border border-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    onClick={() => setActiveIndex(testimonials.indexOf(testimonial))}
                  >
                    <div className="flex items-start space-x-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full border border-gray-600 object-cover flex-shrink-0"
                      />
                      <div className="text-left">
                        <h5 className="font-['Outfit'] font-semibold text-white text-sm">
                          {testimonial.name}
                        </h5>
                        <p className="text-gray-400 text-xs mb-2 font-['Work_Sans']">
                          {testimonial.role}
                        </p>
                        <p className="text-gray-300 text-sm italic font-['Work_Sans'] line-clamp-3">
                          “{testimonial.review}”
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-12 space-x-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-gray-900 hover:bg-gray-700 border border-gray-700 flex items-center justify-center text-white text-xl transition-all duration-300 hover:scale-110 font-['Work_Sans']"
            >
              ‹
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "bg-yellow-400 w-8"
                      : "bg-gray-600 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-gray-900 hover:bg-gray-700 border border-gray-700 flex items-center justify-center text-white text-xl transition-all duration-300 hover:scale-110 font-['Work_Sans']"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
