// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import service1 from "/src/assets/service1.jpg";
// import service2 from "/src/assets/service2.jpg";
// import service3 from "/src/assets/service3.jpg";

// const services = [
//   { id: "01", title: "Immersive tech", img: service1 },
//   { id: "02", title: "Data&Cloud", img: service2 },
//   { id: "03", title: "Devolopement", img: service3 },
// ];

// export default function Services() {
//   const [active, setActive] = useState("01");
//   const activeService = services.find((s) => s.id === active);

//   return (
//     <section className="bg-black text-white px-6 md:px-20 py-16 relative">
//       {/* Heading */}
//       <motion.h2
//         className="text-purple-400 text-center text-4xl md:text-6xl font-bold font-serif mb-12"
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7, ease: "easeOut" }}
//       >
//         SERVICES
//       </motion.h2>

//       <div className="flex flex-col md:flex-row gap-10">
//         {/* Left side: image */}
//         <div className="flex-1 flex justify-center items-center">
//           <AnimatePresence mode="wait">
//             <motion.img
//               key={activeService.id}
//               src={activeService.img}
//               alt={activeService.title}
//               className="w-80 h-64 md:w-[400px] md:h-[300px] lg:w-[480px] lg:h-[360px] xl:w-[560px] xl:h-[420px] 
//                          object-cover rounded-xl shadow-lg"
//               initial={{ opacity: 0, scale: 0.9, x: 80 }}
//               animate={{ opacity: 1, scale: 1, x: 0 }}
//               exit={{ opacity: 0, scale: 0.95, x: -40 }}
//               transition={{ duration: 0.4, ease: "easeInOut" }}
//             />
//           </AnimatePresence>
//         </div>

//         {/* Right side: list */}
//         <motion.div
//           className="flex-1 flex flex-col gap-6"
//           initial={{ opacity: 0, x: 60 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           {services.map((service) => (
//             <div
//               key={service.id}
//               onMouseEnter={() => setActive(service.id)}
//               className={`flex items-center justify-between cursor-pointer border-b border-gray-800 pb-2 transition 
//                 ${active === service.id ? "text-white" : "text-gray-500"}`}
//             >
//               <span className=" text-xl md:text-2xl xl:text-4xl">
//                 {service.title}
//               </span>
//               <motion.span
//                 className={`text-[60px] md:text-[80px] font-bold ${
//                   active === service.id ? "text-yellow-400" : "text-gray-800"
//                 }`}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, ease: "easeOut" }}
//               >
//                 {service.id}
//               </motion.span>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import service1a from "/src/assets/HomeImages/serviceimages/service1a.jpg";
import service1b from "/src/assets/HomeImages/serviceimages/service1b.jpg";
import service1c from "/src/assets/HomeImages/serviceimages/service1c.jpg";
import service2a from "/src/assets/HomeImages/serviceimages/service2a.jpg";
import service2b from "/src/assets/HomeImages/serviceimages/service2b.jpg";
import service2c from "/src/assets/HomeImages/serviceimages/service2c.jpg";
import service3a from "/src/assets/HomeImages/serviceimages/service3a.jpg";
import service3b from "/src/assets/HomeImages/serviceimages/service3b.jpg";
import service3c from "/src/assets/HomeImages/serviceimages/service3c.jpg";

const services = [
  { id: "01", title: "Immersive tech", images: [service1a, service1b, service1c] },
  { id: "02", title: "Data & Cloud", images: [service2a, service2b, service2c] },
  { id: "03", title: "Development", images: [service3a, service3b, service3c] },
];

export default function Services() {
  const [active, setActive] = useState("01");
  const [imageIndex, setImageIndex] = useState(0);

  const activeService = services.find((s) => s.id === active);

  // Auto-slide images every second
  useEffect(() => {
    setImageIndex(0); // reset when service changes
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % activeService.images.length);
    }, 1600);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <section className="bg-black text-white px-6 md:px-20 py-16 relative">
      {/* Heading */}
      <motion.h2
        className="text-purple-400 text-center text-4xl md:text-6xl font-bold font-serif mb-12"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        SERVICES
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Left side: rotating images */}
        <div className="flex-1 flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeService.images[imageIndex]} // key forces AnimatePresence transition
              src={activeService.images[imageIndex]}
              alt={activeService.title}
              className="w-80 h-64 md:w-[400px] md:h-[300px] lg:w-[480px] lg:h-[360px] xl:w-[560px] xl:h-[420px] 
                         object-cover rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0.9, x: 80 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: -40 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>

        {/* Right side: service list */}
        <motion.div
          className="flex-1 flex flex-col gap-6"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {services.map((service) => (
            <div
              key={service.id}
              onMouseEnter={() => setActive(service.id)}
              className={`flex items-center justify-between cursor-pointer border-b border-gray-800 pb-2 transition 
                ${active === service.id ? "text-white" : "text-gray-500"}`}
            >
              <span className=" text-xl md:text-2xl xl:text-4xl">
                {service.title}
              </span>
              <motion.span
                className={`text-[60px] md:text-[80px] font-bold ${
                  active === service.id ? "text-yellow-400" : "text-gray-800"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {service.id}
              </motion.span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
