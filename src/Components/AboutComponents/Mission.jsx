import React from "react";

const Mission = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center bg-black  px-6 md:px-10 xl:px-14">
      <div className=" flex flex-col items-left">
        {/* Top Section */}
        <div>
          <h2 className="w-full text-white font-michroma max-w-md text-2xl md:text-6xl lg:text-7xl xl:text-8xl text-center md:text-left font-medium tracking-wider">
            ABOUT US
          </h2>
        </div>

        {/* Bottom Section */}
        <div className=" flex flex-col md:flex-row gap-5">
          {/* Left Text Section */}
          <div className="w-full md:w-1/3 flex flex-col justify-start md:mt-10 2xl:mt-0 ">
            <p className="text-xs lg:text-sm text-center md:text-left uppercase tracking-wide mt-4 text-gray-600 ">
              Luxurious Interior and Industrial Design
            </p>
            <p className="mt-3 md:mt-6 text-[12px] lg:text-sm text-center md:text-left text-gray-700  leading-relaxed">
              Modern Elegance: Designs featuring clean lines, neutral palettes,
              and high-quality materials.
            </p>
          </div>
          {/* Main Image */}
          <div className="w-full -mt-10 lg:-mt-18">
            <img
              src="https://i.ibb.co/Vj3P5wX/interior1.jpg"
              alt="Interior design"
              className="w-full h-[40vh] xl:h-[50vh] object-cover rounded-4xl"
            />
          </div>
          {/* Philosophy Section */}
          <div className="w-full md:w-1/2 flex gap-5 flex-col items-start -mt-8">
            <div className="rounded-2xl overflow-hidden shadow-md  w-full">
              <img
                src="https://i.ibb.co/R23x2Zh/interior2.jpg"
                alt="Interior philosophy"
                className="w-full h-[18vh] xl:h-[25vh] object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-xl text-white font-semibold mb-2">
                Our Mission
              </h3>
              <p className="text-gray-700 text-sm  leading-relaxed max-w-sm">
                At Britto Charette, we believe in creating luxurious,
                personalized environments that reflect our clients’ tastes and
                lifestyles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
