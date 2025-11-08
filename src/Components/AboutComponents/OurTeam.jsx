import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import lap from "/src/assets/AboutImages/bbbb.jpg";
import mow from "/src/assets/AboutImages/aaaaa.jpg";
import wow from "/src/assets/AboutImages/aaa.jpg";
import hav from "/src/assets/AboutImages/bbbbb.jpg";
import call from "/src/assets/AboutImages/aa.jpg"; 
import bow from "/src/assets/AboutImages/b.jpg";
import how from "/src/assets/AboutImages/bb.jpg";
import vow from "/src/assets/AboutImages/bbb.jpg";
import tow from "/src/assets/AboutImages/a.jpg";
import low from "/src/assets/AboutImages/aaaa.jpg";

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
        <h2 className="text-yellow-400 text-3xl md:text-5xl font-bold mb-6"  style={{ fontFamily: "Outfit, sans-serif" }}>
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
                      <AnimatePresence>
                        {isActive && (
                          <>
                            <motion.p
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 20 }}
                              transition={{ duration: 0.4 }}
                              className="text-lg md:text-xl font-bold text-yellow-400 mb-1"
                            >
                              {member.name}
                            </motion.p>
                            
                            <motion.p
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 20 }}
                              transition={{ duration: 0.4, delay: 0.1 }}
                              className="text-gray-200 text-sm md:text-base leading-relaxed"
                            >
                              {member.role}
                            </motion.p>
                          </>
                        )}
                      </AnimatePresence>
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