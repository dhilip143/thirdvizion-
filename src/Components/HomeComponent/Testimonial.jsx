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
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    review:
      "Third Vizion Labs transformed the way my business operates. Their innovative solutions helped us streamline processes and boost customer engagement like never before.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "David Patel",
    role: "Project Manager",
    review:
      "The platforms developed by Third Vizion Labs are intuitive and scalable. Their team truly understands enterprise needs and delivers beyond expectations.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Emily Carter",
    role: "Operations Manager",
    review:
      "Partnering with Third Vizion Labs has been a game-changer. Their cloud-powered solutions gave us security, scalability, and seamless integration.",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Michael Lee",
    role: "Tech Lead",
    review:
      "We needed a robust enterprise platform, and Third Vizion Labs delivered exactly that. Their architecture is future-ready and incredibly reliable.",
    img: "https://randomuser.me/api/portraits/men/64.jpg",
  },
  {
    name: "Sophia Martinez",
    role: "Product Designer",
    review:
      "The design expertise from Third Vizion Labs is unmatched. They focus on user experience, and it shows in every product they deliver.",
    img: "https://randomuser.me/api/portraits/women/29.jpg",
  },
  {
    name: "James Anderson",
    role: "CTO",
    review:
      "Innovation and reliability—Third Vizion Labs combines both. Their cloud-first strategy has helped us scale our infrastructure effortlessly.",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
  },
];

export default function TestimonialAnimation() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const len = testimonials.length;

  // ⏩ Faster Auto-slide: every 3 seconds
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % len);
    }, 3000); // ⏩ faster (was 4000)
    return () => clearInterval(timer);
  }, [len, paused]);

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-20 text-white">
      {/* Background Glow Effects */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/30 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-5xl mx-auto text-center mb-12 px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold">What People Say</h2>
        <p className="text-gray-300 mt-3 max-w-lg mx-auto">
          See how Third Vizion Labs is helping businesses transform and innovate.
        </p>
      </div>

      <div
        className="relative max-w-xl mx-auto h-96 overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 200, // ⏩ snappier spring
              damping: 12,
              duration: 0.3, // ⏩ faster transition
            }}
            className="absolute inset-0 bg-gradient-to-br from-indigo-950/70 to-indigo-800/40 
                       backdrop-blur-xl rounded-2xl p-8 shadow-2xl text-center flex flex-col items-center justify-center"
          >
            <motion.img
              src={testimonials[current].img}
              alt={testimonials[current].name}
              className="w-16 h-16 rounded-full border-2 border-purple-400 mb-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 }}
            />

            {/* ⭐ Rating */}
            <motion.div
              className="flex gap-1 justify-center mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {Array(5)
                .fill()
                .map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
            </motion.div>

            {/* Review */}
            <motion.p
              className="text-gray-200 leading-relaxed text-sm md:text-base max-w-md mb-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              {testimonials[current].review}
            </motion.p>

            {/* Name + Role */}
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-semibold text-lg">{testimonials[current].name}</h4>
              <span className="text-purple-300 text-sm">{testimonials[current].role}</span>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Left/Right Arrows */}
        <button
          onClick={() => setCurrent((prev) => (prev - 1 + len) % len)}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-purple-500/30 hover:bg-purple-500/50 text-white p-2 rounded-full"
        >
          ‹
        </button>
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % len)}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-500/30 hover:bg-purple-500/50 text-white p-2 rounded-full"
        >
          ›
        </button>

        {/* Navigation Bullets */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                current === idx
                  ? "bg-purple-400 scale-125"
                  : "bg-gray-600 scale-100"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
