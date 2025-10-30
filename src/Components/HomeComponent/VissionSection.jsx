import React from "react";

const MissionVision = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20 font-sans">
      {/* Outer border box */}
     
        {/* Two-column layout inside the box */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* --- MISSION --- */}
          <div className="relative">
            {/* Decorative left gold line */}
            <div className="absolute -left-14 top-4 hidden md:block">
              <div className="h-[3px] w-108 bg-yellow-500 relative">
                <div className="absolute -left-5 top-[5px] w-[3px] w-3 h-8 bg-yellow-500 rotate-45"></div>
              </div>
            </div>

            <h2 className="text-2xl ml-96 font-bold tracking-wider mb-6 flex items-center">
              MISSION
            </h2>

            <p className="text-gray-300 leading-relaxed max-w-md">
              At ThirdVizion, we’re more than just a technology company. Our
              mission is to deliver cutting-edge solutions that not only solve
              challenges but also create new opportunities across industries.
              With a dedicated team of experts, we bring ideas to life with
              seamless technology that transforms businesses.
            </p>
          </div>

          {/* --- VISION --- */}
          <div className="relative md:text-left text-right">
            {/* Decorative right gold line */}
            <div className="absolute -right-14 top-94 hidden md:block">
              <div className="h-[3px] w-153  bg-yellow-500 relative">
                <div className="absolute -right-5 top-[5px] w-[3px] h-10 bg-yellow-500 -rotate-45"></div>
              </div>
            </div>

            <h2 className="text-2xl pt-90 font-bold tracking-wider mb-6 flex justify-end md:justify-start">
              VISION
            </h2>

            <p className="text-gray-300 leading-relaxed max-w-md ml-auto md:ml-0">
              At ThirdVizion, we’re more than just a technology company. Our
              vision is to deliver cutting-edge solutions that not only solve
              challenges but also create new opportunities across industries.
              With a dedicated team of experts, we bring ideas to life with
              seamless technology that transforms businesses.
            </p>
          </div>

        </div>
    </section>
  );
};

export default MissionVision;
