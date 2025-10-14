// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { motion } from "framer-motion";

// import lap from "/src/assets/AboutImages/lap.png";
// import mow from "/src/assets/AboutImages/mou.png";
// import wow from "/src/assets/AboutImages/dhilip.jpg";
// import hav from "/src/assets/AboutImages/hav.png";
// import call from "/src/assets/AboutImages/call.png";
// import bow from "/src/assets/AboutImages/bow.png";
// import how from "/src/assets/AboutImages/how.png";
// import vow from "/src/assets/AboutImages/vow.png";
// import tow from "/src/assets/AboutImages/tow.png";
// import low from "/src/assets/AboutImages/low.png";

// function OurTeam() {
//   const images = [lap, mow, wow, hav, call, bow, how, vow, tow, low];

//   const teamData = [
//     { name: "Tharun Joel", role: "3D Graphic Designer", desc: "Specializes in crafting seamless user experiences and modern interfaces." },
//     { name: "Paazil Parvesh", role: "Web Developer", desc: "Expert in APIs, databases, and scalable architectures." },
//     { name: "Dhilip Kumar", role: "Web Developer", desc: "Focused on building dynamic and interactive React applications." },
//     { name: "Rajesh", role: "Unity Developer", desc: "Ensures timely delivery and smooth communication across teams." },
//     { name: "Shammi Kumar", role: "Full Stack Developer", desc: "Automates deployments and manages cloud infrastructure." },
//     { name: "Yeswanth", role: "Python Developer", desc: "Maintains product quality through testing and bug tracking." },
//     { name: "Sathiya Narayanan", role: "DevOps Engineer", desc: "Builds performant apps for Android and iOS using React Native." },
//     { name: "Santhosh Kumar", role: "UI/UX Designer", desc: "Bridges business needs with technical solutions." },
//     { name: "Vishnu Priya", role: "Frontend Developer", desc: "Develops intelligent models for data-driven applications." },
//     { name: "Saravana Priya", role: "Frontend Developer", desc: "Creates engaging content and manages digital communication." },
//     { name: "Jebamalai Jero ", role: "CRM Specialist", desc: "Creates engaging content and manages digital communication." },
//     { name: "Arulwin Rex", role: "Digital Alchemist", desc: "Creates engaging content and manages digital communication." },
//     { name: "Ragul", role: "Graphic Designer", desc: "Creates engaging content and manages digital communication." },
//     { name: "Akash", role: "Game Developer", desc: "Creates engaging content and manages digital communication." },
//     { name: "Rakesh", role: "3D Modular", desc: "Creates engaging content and manages digital communication." },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);
//   const circleRef = useRef(null);
//   const imageRefs = useRef([]);

//   // Rotate circle continuously
//   useEffect(() => {
//     gsap.to(circleRef.current, {
//       rotate: 360,
//       duration: 40,
//       repeat: -1,
//       ease: "linear",
//     });
//   }, []);

//   // Zoom animation when active image changes
//   useEffect(() => {
//     imageRefs.current.forEach((el, index) => {
//       if (!el) return;
//       if (index === activeIndex) {
//         gsap.to(el, { scale: 1.2, duration: 0.5, ease: "power3.out" });
//       } else {
//         gsap.to(el, { scale: 1, duration: 0.5, ease: "power3.out" });
//       }
//     });
//   }, [activeIndex]);

//   return (
//     <div className="bg-black min-h-screen flex items-center justify-center relative overflow-hidden">
//       {/* Circle Wrapper */}
//       <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px]">
//         {/* Rotating Circle */}
//         <div
//           ref={circleRef}
//           className="relative w-full h-full flex items-center justify-center"
//         >
//           {images.map((img, index) => {
//             const angle = (index / images.length) * 360;
//             const radius = 480;
//             const x = Math.cos((angle * Math.PI) / 180) * radius;
//             const y = Math.sin((angle * Math.PI) / 180) * radius;

//             return (
//               <div
//                 key={index}
//                 onClick={() => setActiveIndex(index)}
//                 ref={(el) => (imageRefs.current[index] = el)}
//                 className={`absolute w-[160px] h-[160px] rounded-full shadow-xl border border-gray-700 overflow-hidden bg-gray-900 cursor-pointer hover:ring-2 hover:ring-orange-500 transition-transform ${activeIndex === index ? "ring-4 ring-orange-500" : ""
//                   }`}
//                 style={{
//                   left: "50%",
//                   top: "50%",
//                   transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
//                 }}
//               >
//                 {/* Keep upright */}
//                 <div
//                   style={{
//                     transform: `rotate(${-angle}deg)`,
//                     width: "100%",
//                     height: "100%",
//                   }}
//                 >
//                   <img
//                     src={img}
//                     alt={`team-${index}`}
//                     className="w-full h-full object-cover rounded-full"
//                   />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Center Content */}
//       {/* Center Content */}
//       <motion.div
//         key={activeIndex} // 🔑 re-mounts and triggers animation on index change
//         className="relative text-center max-w-xl px-6 z-10 top-[150px]"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -40 }}
//         transition={{ duration: 0.5, ease: "easeOut" }}
//       >
//         <h2 className="text-white text-3xl md:text-5xl font-bold leading-snug">
//           {teamData[activeIndex].name}
//         </h2>
//         <p className="text-yellow-400 text-sm font-semibold mt-2">
//           {teamData[activeIndex].role}
//         </p>
//         <p className="text-gray-300 text-xs mt-4">{teamData[activeIndex].desc}</p>
//       </motion.div>


//     </div>
//   );
// }

// export default OurTeam;

// import React, { useState } from "react";
// import { motion } from "framer-motion";

// import lap from "/src/assets/AboutImages/lap.png";
// import mow from "/src/assets/AboutImages/mou.png";
// import wow from "/src/assets/AboutImages/dhilip.jpg";
// import hav from "/src/assets/AboutImages/hav.png";
// import call from "/src/assets/AboutImages/call.png";
// import bow from "/src/assets/AboutImages/bow.png";
// import how from "/src/assets/AboutImages/how.png";
// import vow from "/src/assets/AboutImages/vow.png";
// import tow from "/src/assets/AboutImages/tow.png";
// import low from "/src/assets/AboutImages/low.png";

// const teamData = [
//   { img: lap, name: "Tharun Joel", role: "3D Graphic Designer" },
//   { img: mow, name: "Paazil Parvesh", role: "Web Developer" },
//   { img: wow, name: "Dhilip Kumar", role: "Web Developer" },
//   { img: hav, name: "Rajesh", role: "Unity Developer" },
//   { img: call, name: "Shammi Kumar", role: "Full Stack Developer" },
//   { img: bow, name: "Yeswanth", role: "Python Developer" },
//   { img: how, name: "Sathiya Narayanan", role: "DevOps Engineer" },
//   { img: vow, name: "Santhosh Kumar", role: "UI/UX Designer" },
//   { img: tow, name: "Vishnu Priya", role: "Frontend Developer" },
//   { img: low, name: "Saravana Priya", role: "Frontend Developer" },
// ];

// export default function OurTeam() {
//   const [active, setActive] = useState(null);

//   return (
//     <section className="bg-black text-white relative min-h-screen py-20 flex items-center justify-center">
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl w-full px-6 md:px-10">
//         {/* Text Column (1/4 width) */}
//         <motion.div
//           className="col-span-1 flex flex-col justify-center space-y-6 text-left"
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-yellow-400 text-3xl md:text-5xl font-bold">
//             OUR TEAM
//           </h2>
//           <p className="text-white text-base md:text-lg leading-relaxed">
//             Meet the passionate innovators who power ThirdVizion with creativity
//             and expertise. Our team blends technology and vision to deliver
//             solutions that inspire and transform.
//           </p>
//           <div
//             className="h-1 w-2/3"
//             style={{
//               background:
//                 "linear-gradient(to right, rgba(255,255,255,0) 0%, white 20%, white 80%, rgba(255,255,255,0) 100%)",
//             }}
//           />
//         </motion.div>

//         {/* Cards Section (3/4 width) */}
//         <div className="col-span-3 flex flex-col md:flex-col lg:flex-row w-full lg:h-[600px] gap-3 overflow-hidden">
//           {teamData.map((member, index) => {
//             const isActive = active === index;

//             return (
//               <motion.div
//                 key={index}
//                 onMouseEnter={() => setActive(index)}
//                 onMouseLeave={() => setActive(null)}
//                 onClick={() =>
//                   setActive(isActive && window.innerWidth < 1024 ? null : index)
//                 }
//                 className={[
//                   "relative rounded-2xl border border-white/30 overflow-hidden cursor-pointer transition-all duration-700 ease-in-out flex flex-col",
//                   isActive ? "h-72" : "h-28",
//                   "lg:h-auto",
//                   isActive ? "lg:flex-[4]" : "lg:flex-[1]",
//                 ].join(" ")}
//                 style={{
//                   backgroundImage: `url(${member.img})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//               >
//                 {/* Overlay */}
//                 <div
//                   className={`absolute inset-0 rounded-2xl transition-all duration-700 ${
//                     isActive ? "bg-black/70" : "bg-black/40"
//                   }`}
//                 ></div>

//                 {/* Content */}
//                 <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center">
//                   <p className="text-lg md:text-xl lg:text-2xl font-bold text-yellow-400 mb-2">
//                     {member.name}
//                   </p>
//                   <p
//                     className={`text-gray-200 text-sm md:text-base lg:text-lg leading-relaxed transition-all duration-700 ${
//                       isActive
//                         ? "opacity-100 translate-y-0"
//                         : "opacity-0 lg:translate-y-4"
//                     }`}
//                   >
//                     {member.role}
//                   </p>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useState } from "react";
import { motion } from "framer-motion";

import lap from "/src/assets/AboutImages/lap.png";
import mow from "/src/assets/AboutImages/mou.png";
import wow from "/src/assets/AboutImages/dhilip.jpg";
import hav from "/src/assets/AboutImages/hav.png";
import call from "/src/assets/AboutImages/call.png";
import bow from "/src/assets/AboutImages/bow.png";
import how from "/src/assets/AboutImages/how.png";
import vow from "/src/assets/AboutImages/vow.png";
import tow from "/src/assets/AboutImages/tow.png";
import low from "/src/assets/AboutImages/low.png";

const teamData = [
  { img: lap, name: "Tharun Joel", role: "3D Graphic Designer" },
  { img: mow, name: "Paazil Parvesh", role: "Web Developer" },
  { img: wow, name: "Dhilip Kumar", role: "Web Developer" },
  { img: hav, name: "Rajesh", role: "Unity Developer" },
  { img: call, name: "Shammi Kumar", role: "Full Stack Developer" },
  { img: bow, name: "Yeswanth", role: "Python Developer" },
  { img: how, name: "Sathiya Narayanan", role: "DevOps Engineer" },
  { img: vow, name: "Santhosh Kumar", role: "UI/UX Designer" },
  { img: tow, name: "Vishnu Priya", role: "Frontend Developer" },
  { img: low, name: "Saravana Priya", role: "Frontend Developer" },
];

export default function OurTeam() {
  const [active, setActive] = useState(null);

  return (
    <section className="bg-black text-white relative min-h-screen py-20 flex flex-col items-center justify-center">
      {/* Text Section */}
      <div className="text-center mb-16 px-6 max-w-3xl">
        <h2 className="text-yellow-400 text-3xl md:text-5xl font-bold mb-6">
          OUR TEAM
        </h2>
        <p className="text-white text-base md:text-lg leading-relaxed">
          Meet the passionate innovators who power ThirdVizion with creativity
          and expertise. Our team blends technology and vision to deliver
          solutions that inspire and transform.
        </p>
        <div
          className="h-1 w-2/3 mx-auto mt-6"
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,0) 0%, white 20%, white 80%, rgba(255,255,255,0) 100%)",
          }}
        />
      </div>

      {/* Cards in Two Rows */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl px-6">
        {[0, 1].map((row) => (
          <div
            key={row}
            className="flex flex-row w-full h-[350px] lg:h-[400px] gap-3 overflow-hidden"
          >
            {teamData
              .slice(row * 5, row * 5 + 5)
              .map((member, index) => {
                const actualIndex = row * 5 + index;
                const isActive = active === actualIndex;

                return (
                  <motion.div
                    key={actualIndex}
                    onMouseEnter={() => setActive(actualIndex)}
                    onMouseLeave={() => setActive(null)}
                    className={`relative rounded-2xl border border-white/30 overflow-hidden cursor-pointer transition-all duration-700 ease-in-out flex flex-col justify-end
                    ${isActive ? "flex-[3]" : "flex-[1]"}`}
                    style={{
                      backgroundImage: `url(${member.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* Overlay */}
                    <div
                      className={`absolute inset-0 transition-all duration-700 ${
                        isActive ? "bg-black/70" : "bg-black/40"
                      }`}
                    ></div>

                    {/* Content */}
                    <div className="relative z-10 p-4 text-center">
                      <p className="text-lg md:text-xl font-bold text-yellow-400 mb-1">
                        {member.name}
                      </p>
                      <motion.p
                        className={`text-gray-200 text-sm md:text-base leading-relaxed transition-all duration-500 ${
                          isActive
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                        }`}
                      >
                        {member.role}
                      </motion.p>
                    </div>
                  </motion.div>
                );
              })}
          </div>
        ))}
      </div>
    </section>
  );
}
