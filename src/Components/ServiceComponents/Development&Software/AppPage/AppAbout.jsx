import React from "react";
import sampleImage from "/src/assets/MobileTransparent.png"; // Replace with your image path

const AppAbout = () => {
  return (
    <section className="bg-black w-full h-screen pl-30 flex gap-12 items-center justify-center">
      {/* Left Content */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Crafting Exceptional Mobile Experiences
        </h2>
        <p className="text-gray-400 mb-6 text-base md:text-lg">
          At Stitch, we specialize in creating mobile applications that are not
          only visually stunning but also highly functional and user-centric.
          Our team of experienced developers and designers work collaboratively
          to bring your vision to life, ensuring a seamless and engaging
          experience for your users.
        </p>
        <ul className="space-y-4 text-gray-300 text-sm md:text-base">
          <li>
            <span className="font-bold">• Innovative Design</span> — We focus on
            creating intuitive and visually appealing designs.
          </li>
          <li>
            <span className="font-bold">• Robust Development</span> — We utilize
            the latest technologies to build scalable and reliable applications.
          </li>
        </ul>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={sampleImage}
          alt="App Development Illustration"
          className="rounded-2xl shadow-lg w-1/2 p-10 object-cover"
        />
      </div>
    </section>
  );
};

export default AppAbout;
