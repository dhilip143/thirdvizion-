import React, { useState, useEffect, useRef } from "react";
import lap from "/src/assets/about/lap.png";
import mow from "/src/assets/about/mou.png";
import wow from "/src/assets/about/wow.png";
import hav from "/src/assets/about/hav.png";
import call from "/src/assets/about/call.png";

function Carousal() {
  const images = [lap, mow, wow, hav, call];
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const itemsPerSlide = 3; // show 3 images at once
  const totalSlides = images.length;

  // Reset timeout helper
  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  // Auto sliding effect
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) =>
        prev === totalSlides ? 0 : prev + 1
      );
    }, 2500); // slide every 2.5 sec

    return () => resetTimeout();
  }, [current, totalSlides]);

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center p-6">
      {/* Carousel wrapper */}
      <div className="relative w-[840px] h-[280px] overflow-hidden rounded-xl shadow-2xl border border-gray-700">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * (100 / itemsPerSlide)}%)`,
          }}
        >
          {/* duplicate first 3 images at end for infinite loop */}
          {images.concat(images.slice(0, itemsPerSlide)).map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] h-[280px]"
            >
              <img
                src={img}
                alt={`slide-${index}`}
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousal;
