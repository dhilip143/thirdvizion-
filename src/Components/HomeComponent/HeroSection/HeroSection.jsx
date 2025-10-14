import { useEffect } from "react";
import "/src/Components/HomeComponent/HeroSection/Hero_Section.css";
import service from "/src/assets/HeroImages/1.png";
import service1 from "/src/assets/HeroImages/2.png";
import service2 from "/src/assets/HeroImages/3.png";
import service3 from "/src/assets/HeroImages/4.png";
import service4 from "/src/assets/HeroImages/5.png";
import service5 from "/src/assets/HeroImages/6.png";
import service6 from "/src/assets/HeroImages/7.png";
import service7 from "/src/assets/HeroImages/8.png";
import service8 from "/src/assets/HeroImages/9.png";
import service9 from "/src/assets/HeroImages/10.png";
import { Link } from "react-router-dom";

const Landing = () => {
  const icons = [
    { class: "custom1", src: service },
    { class: "custom2", src: service1 },
    { class: "custom3", src: service2 },
    { class: "custom4", src: service3 },
    { class: "custom5", src: service4 },
    { class: "custom6", src: service5 },
    { class: "custom7", src: service6 },
    { class: "custom8", src: service7 },
    { class: "custom9", src: service8 },
    { class: "custom10", src: service9 },
  ];

  const createDynamicLists = (totalULs, totalLIsPerUL) => {
    const shuffledIcons = [...icons].sort(() => Math.random() - 0.5);
    const lists = [];

    for (let ulIndex = 0; ulIndex < totalULs; ulIndex++) {
      const listItems = [];
      for (let liIndex = 1; liIndex < totalLIsPerUL; liIndex++) {
        const currentIcon =
          shuffledIcons[(liIndex + ulIndex) % shuffledIcons.length];
        listItems.push(
          <li className={currentIcon.class} key={liIndex}>
            <a>
              <div>
                {[...Array(4)].map((_, idx) => (
                  <span key={idx}></span>
                ))}
                <span>
                  <img
                    src={currentIcon.src}
                    alt={`${currentIcon.class} icon`}
                    style={{ width: "60px", height: "60px" }}
                  />
                </span>
              </div>
            </a>
            <span id="hexa"></span>
          </li>
        );
      }

      lists.push(
        <ul key={ulIndex} className="relative ml-55">
          {listItems}
        </ul>
      );
    }

    return lists;
  };

  useEffect(() => {
    createDynamicLists(10, 10);
  });

  return (
    <div
      id="pattern"
      className="pattern 2xl:h-[112vh] overflow-hidden relative z-0"
    >
      {/* This section contains the background pattern */}
      {createDynamicLists(10, 10)}

      {/* ✅ Centered Content - Improved Alignment */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-50 text-white px-4  ">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-michroma font-bold text-center mb-6 max-w-6xl leading-tight">
          Engineering the Future,<br />Innovating the Present
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 text-center mb-10 max-w-4xl leading-relaxed">
          We combine cutting-edge technology with visionary ideas to deliver
          solutions that shape tomorrow while empowering businesses today.
        </p>

        {/* Animated Contact Button */}
        <Link
          to={"/contact"}
          className="contact-btn relative bg-gradient-to-r from-purple-600 to-indigo-700 text-white px-10 py-4 text-xl font-semibold rounded-full overflow-hidden group hover:scale-105 transition-all duration-500 shadow-2xl"
        >
          <span className="relative z-10">CONTACT US</span>
          
          {/* Button Animation Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Pulse Animation */}
          <div className="absolute inset-0 rounded-full bg-white opacity-20 group-hover:animate-ping"></div>
          
          {/* Shine Effect */}
          <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine"></div>
        </Link>
      </div>
    </div>
  );
};

export default Landing;