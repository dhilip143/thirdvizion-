import React from "react";

const AppStack = () => {
  return (
    <>
      <section className="py-24 px-6 text-center bg-black text-white">
        <h2 className="text-3xl font-bold mb-12">Our Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-neutral-900 rounded-xl border border-neutral-800"
            >
              {/* <img src={mobile} alt="" /> */}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AppStack;
