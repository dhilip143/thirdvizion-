import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Testimonials Data ---
const testimonials = [
  {
    name: "Santhosh Kumar",
    role: "Kanakavali • Manager",
    review:
      "ThirdVizion helped us modernize our entire digital presence. Their attention to detail and clean UI execution gave our brand a premium identity.",
  },
  {
    name: "Rajesh",
    role: "Asmi • Team Leader",
    review:
      "The design and development support from ThirdVizion was exceptional. Our platform feels smoother, faster and far more user-friendly now.",
  },
  {
    name: "Sivaganga",
    role: "Madras Kitchen • Software Developer",
    review:
      "ThirdVizion created a visually stunning and highly functional website for us. Our online orders increased just because of their clean UI and fast UX.",
  },
  {
    name: "Priya Nandakumar",
    role: "TourSup • Human Resource",
    review:
      "From planning to delivery, ThirdVizion maintained complete clarity and professionalism. Their work improved our customer engagement drastically.",
  },
  {
    name: "Arun Prakash",
    role: "KombaMela • Manager",
    review:
      "ThirdVizion built a fast, scalable platform that handles our event traffic smoothly. The team truly understands performance and great UI.",
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
    <section className="relative bg-black text-white py-24 overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
          What People Say <span className="text-[#FFC016]" style={{ fontFamily: "Outfit, sans-serif" }}> About Us</span>
        </h2>

        <p className="text-white text-xs md:text-lg mb-16 max-w-2xl mx-auto" style={{ fontFamily: "Work Sans, sans-serif" }}>
          Hear from companies and developers who trust ThirdVizion for premium digital solutions.
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full  border border-gray-800 rounded-2xl shadow-2xl p-10 h-full relative"
                >
                  {/* Quote Icon */}
                  <div className="absolute top-6 left-8 text-[#FFC016] text-6xl opacity-20">"</div>
                  
                  <div className="flex flex-col items-center text-center relative z-10">
                    <div className="mb-8">
                      <h4 className="text-2xl font-semibold text-white mb-2" style={{ fontFamily: "Work Sans, sans-serif" }}>
                        {testimonials[activeIndex].name}
                      </h4>
                      <p className="text-[#FFC016] text-base font-medium" style={{ fontFamily: "Work Sans, sans-serif" }}>
                        {testimonials[activeIndex].role}
                      </p>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-xl max-w-2xl" style={{ fontFamily: "Work Sans, sans-serif" }}>
                      "{testimonials[activeIndex].review}"
                    </p>
                    
                    {/* Rating Stars */}
                    <div className="flex space-x-1 mt-8">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-6 h-6 text-[#FFC016]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
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
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className=" border border-gray-800 rounded-xl shadow-lg p-6 hover:border-[#FFC016] transition-all duration-300 cursor-pointer group"
                    onClick={() => setActiveIndex(testimonials.indexOf(testimonial))}
                  >
                    <div className="text-left">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h5 className="font-semibold text-white text-lg group-hover:text-[#FFC016] transition-colors" style={{ fontFamily: "Work Sans, sans-serif" }}>
                            {testimonial.name}
                          </h5>
                          <p className="text-gray-400 text-sm" style={{ fontFamily: "Work Sans, sans-serif" }}>
                            {testimonial.role}
                          </p>
                        </div>
                        <div className="flex space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} className="w-4 h-4 text-[#FFC016]" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed line-clamp-4" style={{ fontFamily: "Work Sans, sans-serif" }}>
                        "{testimonial.review}"
                      </p>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-16 space-x-8">
            <button
              onClick={prev}
              className="w-14 h-14 rounded-full bg-black border border-gray-700 flex items-center justify-center text-white text-2xl transition-all duration-300 hover:scale-110 hover:border-[#FFC016] hover:bg-[#FFC016] group"
            >
              <span className="group-hover:text-black">‹</span>
            </button>

            {/* Dots */}
            <div className="flex space-x-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === activeIndex ? "bg-[#FFC016] w-8" : "bg-gray-600 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-14 h-14 rounded-full bg-black border border-gray-700 flex items-center justify-center text-white text-2xl transition-all duration-300 hover:scale-110 hover:border-[#FFC016] hover:bg-[#FFC016] group"
            >
              <span className="group-hover:text-black">›</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}