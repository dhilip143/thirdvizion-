
import React from 'react';
import './Mission.css';

const ServicesVisionMission = () => {
  return (
    <section className="min-h-screen bg-black-900 text-center py-20 px-8 xl:px-0 flex flex-col justify-center">
      <span className="text-gray-400 text-lg max-w-lg mx-auto mb-2 capitalize flex items-center justify-center">
         
      </span>
      
      <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-semibold max-w-3xl mx-auto mb-36 leading-snug">
Innovative Services Crafted to Power Your Business.
      </h1>
      
      <div className="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
        
        {/* OUR VISION */}
        <div className="card bg-black-800 p-10 relative"  style={{ fontFamily: "Outfit, sans-serif" }}>
          <div className="circle ux-design-image"></div>
          <div className="relative lg:pr-52">
            <h2 className="capitalize text-white mb-4 text-2xl md:text-3xl lg:text-4xl"  style={{ fontFamily: "Outfit, sans-serif" }}>
              OUR <br />VISION 
            </h2>
            <p className="text-gray-400 text-xs md:text-lg">
      To become a global leader in digital transformation and creative innovation. We aim to build a future where technology and imagination come together to create new possibilities.
            </p>
          </div>
        </div>

        {/* OUR MISSION */}
        <div className="card bg-black-800 p-10 relative">
          <div className="circle graphic-design-image"></div>
          <div className="relative lg:pl-48">
            <h2 className="capitalize text-white mb-4 text-2xl md:text-3xl lg:text-4xl"  style={{ fontFamily: "Outfit, sans-serif" }}>
              OUR <br /> MISSION
            </h2>
            <p className="text-gray-400 text-xs md:text-lg">
            Our mission is to empower businesses and brands through innovative digital solutions that combine creativity, technology, and strategy. 
            </p>
          </div>
        </div>

        {/* OUR VALUES */}
        <div className="card bg-black-800 p-10 relative">
          <div className="circle vision-image"></div>
          <div className="relative lg:pr-44">
            <h2 className="capitalize text-white mb-4text-2xl md:text-3xl lg:text-4xl"  style={{ fontFamily: "Outfit, sans-serif" }}>
              OUR <br /> VALUES
            </h2>
            <p className="text-gray-400 text-xs md:text-lg">
              We stand for integrity, innovation, and excellence. Through collaboration and sustainable growth, we create lasting digital impact for our clients and communities.
            </p>
          </div>
        </div>

        {/* OUR GOALS */}
        <div className="card bg-black-800 p-10 relative">
          <div className="circle mission-image"></div>
          <div className="relative lg:pl-48">
            <h2 className="capitalize text-white mb-4 text-2xl md:text-3xl lg:text-4xl"  style={{ fontFamily: "Outfit, sans-serif" }}>
              OUR <br /> GOALS
            </h2>
            <p className="text-gray-400 text-xs md:text-lg">
             We strive to push the boundaries of technology and creativity to deliver real, measurable results. Our goal is to help businesses grow, innovate, and succeed.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesVisionMission;
