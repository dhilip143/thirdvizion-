import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import lap from "/src/assets/AboutImages/lap.png";
import mow from "/src/assets/AboutImages/mou.png";
import wow from "/src/assets/AboutImages/wow.png";
import hav from "/src/assets/AboutImages/hav.png";
import call from "/src/assets/AboutImages/call.png";
import bow from "/src/assets/AboutImages/bow.png";
import how from "/src/assets/AboutImages/how.png";
import vow from "/src/assets/AboutImages/vow.png";
import tow from "/src/assets/AboutImages/tow.png";
import low from "/src/assets/AboutImages/low.png";

function OurTeam() {
  const images = [lap, mow, wow, hav, call, bow, how, vow, tow, low];
  const circleRef = useRef(null);

  useEffect(() => {
    gsap.to(circleRef.current, {
      rotate: 360,
      duration: 40,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <div className="bg-[#fdf6ec] min-h-screen flex items-center justify-center relative overflow-x-visible overflow-y-clip">
      {/* Circle Wrapper */}
      <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px]">
        {/* Rotating Circle */}
        <div
          ref={circleRef}
          className="relative w-full h-full flex items-center justify-center"
        >
          {images.map((img, index) => {
            const angle = (index / images.length) * 360;
            const radius = 480; // bigger radius for proper spacing
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div
                key={index}
                className="absolute w-[160px] h-[160px] rounded-2xl shadow-xl border border-gray-200 overflow-hidden bg-white"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                <img
                  src={img}
                  alt={`circle-${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Center Content */}
      <div className="relative text-center max-w-xl px-6 z-10 top-[150px]">
        <p className="text-yellow-500 font-medium">⭐ 4.9 ratings</p>
        <p className="text-gray-500 text-sm mb-3">Trusted by 1000+ designers</p>
        <h2 className="text-black text-4xl md:text-5xl font-bold leading-snug">
          Ready to Power Up <br />
          <span className="text-gray-700 font-normal">Your Team?</span>
        </h2>
        <p className="text-gray-500 mt-4">
          Join thousands of teams boosting productivity with smarter tools,
          faster workflows, and better collaboration.
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded-full shadow-md hover:bg-gray-800 transition">
          Get started for Free
        </button>
      </div>
    </div>
  );
}

export default OurTeam;
