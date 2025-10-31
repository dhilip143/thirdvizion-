import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Martin Goutry",
    role: "Back-end Developer at MyDodow",
    review:
      "Work Sans has changed how we structure our UI documentation. The flow feels natural and productive!",
    date: "2021.03.02",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Agnes Remi",
    role: "Product Designer at Stripe",
    review:
      "Outfit and Work Sans together bring such clarity and confidence to the interface. Clean and inspiring!",
    date: "2021.03.15",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Theo Champion",
    role: "Lead Developer at Vercel",
    review:
      "The experience feels smooth and minimalistic. It's a true showcase of thoughtful design execution.",
    date: "2021.04.20",
    avatar: "https://randomuser.me/api/portraits/men/40.jpg",
  },
  {
    name: "Jessica Lyne",
    role: "UI/UX Specialist at Google",
    review:
      "I love the motion balance and typography choice. Feels futuristic yet human. Absolutely stunning.",
    date: "2021.06.11",
    avatar: "https://randomuser.me/api/portraits/women/60.jpg",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % testimonials.length),
      4000
    );
    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section className="relative bg-black text-white py-28 overflow-hidden">
      {/* Soft glowing background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="font-outfit text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 text-transparent bg-clip-text">
          User Testimonials
        </h2>
        <p className="font-work-sans text-gray-400 text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
          See what creators and developers are saying about{" "}
          <span className="text-purple-400 font-semibold">Dico</span> — a new way
          to craft immersive digital experiences.
        </p>

        {/* Testimonial Card */}
        <div className="flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700 
                         shadow-[0_0_25px_rgba(168,85,247,0.3)] rounded-3xl 
                         p-8 w-full max-w-md backdrop-blur-lg"
            >
              {/* Avatar */}
              <div className="flex flex-col items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full border-4 border-purple-500 shadow-lg object-cover"
                />
                <h4 className="font-outfit text-2xl font-semibold mt-4">
                  {testimonial.name}
                </h4>
                <p className="text-gray-400 font-work-sans text-sm">
                  {testimonial.role}
                </p>
              </div>

              {/* Review */}
              <p className="font-work-sans text-gray-300 italic leading-relaxed text-[17px] mb-6">
                “{testimonial.review}”
              </p>

              {/* Date */}
              <p className="text-xs text-gray-500 font-work-sans">
                📅 Dico user, {testimonial.date}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-10 gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index ? "bg-purple-400 w-6" : "bg-gray-600"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
