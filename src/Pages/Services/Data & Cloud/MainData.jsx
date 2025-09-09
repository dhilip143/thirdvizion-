
import React from "react";
import OurServices from "/src/Pages/Services/Immersive/ourServices.jsx";

// ✅ Import local image correctly
import Data from "/src/assets/HeroImages/Data.jpeg";

const DataCloudHero = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-8">
        {/* Background subtle vertical lines */}
        <div className="absolute inset-0 flex justify-center">
          <div className="w-[2px] h-full bg-gray-800/30 mx-20"></div>
          <div className="w-[2px] h-full bg-gray-800/30 mx-20"></div>
        </div>

        <div className="relative max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <span className="uppercase tracking-widest text-teal-400 text-sm font-semibold">
              Data & Cloud
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white mt-4">
              WE ARE{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">
                CLOUD
              </span>{" "}
              EXPERTS
            </h1>

            <p className="text-gray-400 mt-6 max-w-md leading-relaxed">
              We deliver scalable cloud solutions and resilient data platforms.
              Our expertise ensures automation, security, and performance—
              empowering your teams to innovate without limits.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_0_90px_20px_rgba(20,220,200,0.45)]">
              <img
                src={Data}   // ✅ use imported local image
                alt="Data & Cloud"
                className="w-[350px] h-[450px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section Below */}
      <OurServices />
    </>
  );
};

export default DataCloudHero;
