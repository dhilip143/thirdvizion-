import React from "react";

const IAMHero = () => {
  return (
    <>
      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center mt-20">
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-10 shadow-xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-teal-400 mb-6">
            Empower Your Business with Smarter Access
          </h1>
          <p className="text-gray-200 mb-8 text-lg">
            Identity & Access Management solutions made secure, scalable, and
            future-ready.
          </p>
          <button className="bg-teal-500 hover:bg-teal-600 text-black font-bold px-6 py-3 rounded-lg transition">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default IAMHero;
