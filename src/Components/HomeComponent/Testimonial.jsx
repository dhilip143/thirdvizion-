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

  // Auto-slide every 3s
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % len);
    }, 3000);
    return () => clearInterval(timer);
  }, [len, paused]);

  return (
    <section className="relative bg-black py-24 text-white overflow-hidden">
      {/* Background Glow Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-pink-600/30 rounded-full blur-[180px] animate-pulse-slow"></div>
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-purple-600/20 rounded-full blur-[150px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-1/3 w-[700px] h-[700px] bg-red-700/15 rounded-full blur-[200px] animate-pulse-slow"></div>
      </div>

      {/* Heading */}
      <div className="relative max-w-3xl mx-auto text-center mb-16 px-6 z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent 
                       bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 
                       drop-shadow-[0_0_30px_rgba(255,0,128,0.7)]">
          What People Say
        </h2>
        <p className="text-gray-400 mt-3 max-w-lg mx-auto text-lg">
          See how Third Vizion Labs is helping businesses transform and innovate.
        </p>
      </div>

      {/* Testimonial Carousel */}
      <div
        className="relative max-w-xl mx-auto h-96 overflow-hidden z-10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 120, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -120, scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 14,
              duration: 0.35,
            }}
            className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/60 to-gray-950/80
                       backdrop-blur-xl rounded-3xl p-8 shadow-[0_0_50px_rgba(255,0,128,0.4)]
                       flex flex-col items-center justify-center text-center border border-pink-700/40"
          >
            {/* User Image */}
            <motion.img
              src={testimonials[current].img}
              alt={testimonials[current].name}
              className="w-20 h-20 rounded-full border-4 border-pink-500 mb-4 shadow-[0_0_20px_rgba(255,0,128,0.6)]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 }}
            />

            {/* Rating Stars */}
            <motion.div
              className="flex gap-1 justify-center mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {Array(5)
                .fill()
                .map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl drop-shadow-[0_0_6px_rgba(255,255,0,0.8)]">
                    ★
                  </span>
                ))}
            </motion.div>

            {/* Review Text */}
            <motion.p
              className="text-gray-300 leading-relaxed text-base md:text-lg max-w-md mb-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              {testimonials[current].review}
            </motion.p>

            {/* Name & Role */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-semibold text-xl text-pink-400 drop-shadow-[0_0_8px_rgba(255,0,128,0.7)]">
                {testimonials[current].name}
              </h4>
              <span className="text-purple-300 text-sm">{testimonials[current].role}</span>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Left/Right Arrows */}
        <button
          onClick={() => setCurrent((prev) => (prev - 1 + len) % len)}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-pink-600/40 hover:bg-pink-500/60 text-white p-3 rounded-full shadow-lg"
        >
          ‹
        </button>
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % len)}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-pink-600/40 hover:bg-pink-500/60 text-white p-3 rounded-full shadow-lg"
        >
          ›
        </button>

        {/* Navigation Bullets */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                current === idx
                  ? "bg-pink-400 scale-125 shadow-[0_0_10px_rgba(255,0,128,0.7)]"
                  : "bg-gray-600 scale-100"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

