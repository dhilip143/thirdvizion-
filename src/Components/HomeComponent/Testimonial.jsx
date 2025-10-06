// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const testimonials = [
//   {
//     name: "Sarah Johnson",
//     role: "Small Business Owner",
//     review:
//       "Third Vizion Labs transformed the way my business operates. Their innovative solutions helped us streamline processes and boost customer engagement like never before.",
//     img: "https://randomuser.me/api/portraits/women/68.jpg",
//   },
//   {
//     name: "David Patel",
//     role: "Project Manager",
//     review:
//       "The platforms developed by Third Vizion Labs are intuitive and scalable. Their team truly understands enterprise needs and delivers beyond expectations.",
//     img: "https://randomuser.me/api/portraits/men/32.jpg",
//   },
//   {
//     name: "Emily Carter",
//     role: "Operations Manager",
//     review:
//       "Partnering with Third Vizion Labs has been a game-changer. Their cloud-powered solutions gave us security, scalability, and seamless integration.",
//     img: "https://randomuser.me/api/portraits/women/45.jpg",
//   },
//   {
//     name: "Michael Lee",
//     role: "Tech Lead",
//     review:
//       "We needed a robust enterprise platform, and Third Vizion Labs delivered exactly that. Their architecture is future-ready and incredibly reliable.",
//     img: "https://randomuser.me/api/portraits/men/64.jpg",
//   },
//   {
//     name: "Sophia Martinez",
//     role: "Product Designer",
//     review:
//       "The design expertise from Third Vizion Labs is unmatched. They focus on user experience, and it shows in every product they deliver.",
//     img: "https://randomuser.me/api/portraits/women/29.jpg",
//   },
//   {
//     name: "James Anderson",
//     role: "CTO",
//     review:
//       "Innovation and reliability—Third Vizion Labs combines both. Their cloud-first strategy has helped us scale our infrastructure effortlessly.",
//     img: "https://randomuser.me/api/portraits/men/12.jpg",
//   },
// ];

// export default function TestimonialAnimation() {
//   const [current, setCurrent] = useState(0);
//   const len = testimonials.length;

//   // Auto-slide every 4s
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % len);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, [len]);

//   return (
//     <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-20 text-white">
//       <div className="max-w-5xl mx-auto text-center mb-12 px-6">
//         <h2 className="text-3xl md:text-4xl font-bold">What people say</h2>
//         <p className="text-gray-300 mt-3">
//           Discover what our clients say about their experience with Third Vizion Labs.
//         </p>
//       </div>

//       <div className="relative max-w-xl mx-auto h-80 overflow-hidden">
//         {/* <AnimatePresence mode="wait">
//           <motion.div
//             key={current}
//             initial={{ opacity: 0, x: 300 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -300 }}
//             transition={{ duration: 0.8 }}
//             className="absolute inset-0 bg-gradient-to-br from-indigo-950/70 to-indigo-800/40 
//                        backdrop-blur-xl rounded-2xl p-8 shadow-2xl text-center flex flex-col items-center justify-center"
//           >
//             <img
//               src={testimonials[current].img}
//               alt={testimonials[current].name}
//               className="w-16 h-16 rounded-full border-2 border-purple-400 mb-4"
//             />
//             <p className="text-gray-200 leading-relaxed text-sm md:text-base max-w-md mb-4">
//               {testimonials[current].review}
//             </p>
//             <div>
//               <h4 className="font-semibold text-lg">{testimonials[current].name}</h4>
//               <span className="text-purple-300 text-sm">{testimonials[current].role}</span>
//             </div>
//           </motion.div>

//         </AnimatePresence> */}
//         <AnimatePresence mode="wait">
//   <motion.div
//     key={current}
//     initial={{ opacity: 0, x: 100, scale: 0.95 }}
//     animate={{ opacity: 1, x: 0, scale: 1 }}
//     exit={{ opacity: 0, x: -100, scale: 0.9 }}
//     transition={{
//       type: "spring",
//       stiffness: 150,
//       damping: 15,
//       duration: 0.4, // ⏩ faster animation
//     }}
//     className="absolute inset-0 bg-gradient-to-br from-indigo-950/70 to-indigo-800/40 
//                backdrop-blur-xl rounded-2xl p-8 shadow-2xl text-center flex flex-col items-center justify-center"
//   >
//     <img
//       src={testimonials[current].img}
//       alt={testimonials[current].name}
//       className="w-16 h-16 rounded-full border-2 border-purple-400 mb-4"
//     />
//     <p className="text-gray-200 leading-relaxed text-sm md:text-base max-w-md mb-4">
//       {testimonials[current].review}
//     </p>
//     <div>
//       <h4 className="font-semibold text-lg">{testimonials[current].name}</h4>
//       <span className="text-purple-300 text-sm">{testimonials[current].role}</span>
//     </div>
//   </motion.div>
// </AnimatePresence>


//         {/* Navigation bullets */}
//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
//           {testimonials.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => setCurrent(idx)}
//               className={`w-3 h-3 rounded-full ${
//                 current === idx ? "bg-purple-400" : "bg-gray-600"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// --- Testimonials Data ---
const testimonials = [
  {
    name: "Martin Goutry",
    role: "Back-end developer at MyDodow",
    review:
      "Dico is finally addressing a long time problem we had when building UIs. It’s ease of use and workflow seems really intuitive. Promising!",
    date: "2021.03.02",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Agnes Remi",
    role: "Product Designer at Stripe",
    review:
      "The level of detail and the speed of the workflow is incredible. Dico is a game-changer for our design system.",
    date: "2021.03.15",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Theo Champion",
    role: "Lead Developer at Vercel",
    review:
      "I've never seen a tool that integrates so seamlessly with our existing stack. The team loves it. It's fast, reliable, and just works.",
    date: "2021.04.20",
    avatar: "https://randomuser.me/api/portraits/men/40.jpg",
  },
  {
    name: "Roman Atwoods",
    role: "CTO at Tech Innovations",
    review:
      "The collaboration features are top-notch. Our entire team, from developers to marketers, can now work in sync. Highly recommended!",
    date: "2021.05.01",
    avatar: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    name: "Jessica Lyne",
    role: "UI/UX Specialist at Google",
    review:
      "Dico's intuitive interface allowed me to create stunning UIs in a fraction of the time. It has become an essential part of my toolkit.",
    date: "2021.06.11",
    avatar: "https://randomuser.me/api/portraits/women/60.jpg",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const cardCount = testimonials.length;
  const angle = 360 / cardCount;
  const radius = (250 / Math.tan((angle / 2) * Math.PI / 180)) + 50;

  // --- Auto Rotate ---
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cardCount);
    }, 2500); // rotation speed (ms)
    return () => clearInterval(interval);
  }, [paused, cardCount]);

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 py-24 text-center overflow-hidden">
      <div className="container mx-auto px-6 relative">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 drop-shadow-lg mb-6">
          Users Testimonials
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-20">
          Discover early user’s feedback on{" "}
          <span className="text-purple-400">Dico integration</span> within their workflows.
        </p>

        {/* --- 3D Carousel --- */}
        <div
          className="relative flex items-center justify-center h-[500px] w-full"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="w-full h-full" style={{ perspective: "1400px" }}>
            <motion.div
              className="relative w-full h-full"
              style={{ transformStyle: "preserve-3d" }}
              animate={{
                rotateY: -activeIndex * angle,
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              {testimonials.map((testimonial, i) => (
                <motion.div
                  key={i}
                  className="absolute w-[320px] h-[400px] left-1/2 top-1/2 
                  -ml-[160px] -mt-[200px] bg-gradient-to-br from-white via-gray-100 to-gray-200 
                  text-gray-800 p-6 rounded-2xl shadow-2xl border border-gray-200 
                  hover:shadow-[0_0_30px_5px_rgba(168,85,247,0.7)]
                  transition-all duration-500"
                  style={{
                    transform: `rotateY(${i * angle}deg) translateZ(${radius}px)`,
                  }}
                  whileHover={{ scale: 0.9 }}
                >
                  <div className="flex flex-col h-full">
                    {/* User Info */}
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-purple-400 shadow-lg"
                      />
                      <div>
                        <h4 className="font-bold text-xl text-left text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-500 text-left">{testimonial.role}</p>
                      </div>
                    </div>

                    {/* Review */}
                    <div className="flex-grow my-4">
                      <p className="text-gray-700 italic leading-relaxed text-left text-lg">
                        &laquo; {testimonial.review} &raquo;
                      </p>
                    </div>

                    {/* Date */}
                    <p className="text-xs text-gray-500 text-left mt-auto">
                      📅 Dico user, {testimonial.date}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
















