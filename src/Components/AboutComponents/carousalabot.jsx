// src/Components/HomeComponent/Carousalabot.jsx
import React from "react";

import slide1 from "/src/assets/AboutImages/aboutclient/salse.webp";
import slide2 from "/src/assets/AboutImages/aboutclient/react.jpeg";
import slide3 from "/src/assets/AboutImages/aboutclient/css.jpeg";
import slide4 from "/src/assets/AboutImages/aboutclient/html.png";
import slide5 from "/src/assets/AboutImages/aboutclient/java.jpeg";
import slide6 from "/src/assets/AboutImages/aboutclient/python.png";
import slide7 from "/src/assets/AboutImages/aboutclient/django.png";
import slide8 from "/src/assets/AboutImages/aboutclient/figma.png";
import slide9 from "/src/assets/AboutImages/aboutclient/Blender-.png";

const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9];

const CarousalRow = ({ reverse = false, duration = 14 }) => {
  return (
    <div className="relative w-full overflow-hidden my-4">
      {/* Left & Right Fade Overlay */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>

      {/* Sliding Row */}
      <div
        className="flex"
        style={{
          width: `${slides.length * 2 * 10}rem`,
          animation: `${reverse ? "reverseScroll" : "scroll"} ${duration}s linear infinite`,
        }}
      >
        {slides.concat(slides).map((img, idx) => (
          <div key={idx} className="flex-shrink-0 w-24 md:w-32 lg:w-40 mx-4">
            <img src={img} alt={`slide-${idx}`} className="w-full h-auto object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Carousalabot() {
  return (
    <div className="bg-black text-white py-12 relative">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Clients</h2>

      {/* Three Rows */}
      <CarousalRow duration={14} />
      <CarousalRow reverse={true} duration={14} />
      <CarousalRow duration={14} />

      {/* Tailwind animations */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes reverseScroll {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
