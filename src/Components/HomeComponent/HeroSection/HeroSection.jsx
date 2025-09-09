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
    { class: "twitter", src: service },
    { class: "reddit", src: service1 },
    { class: "whatsapp", src: service2 },
    { class: "facebook", src: service3 },
    { class: "instagram", src: service4 },
    { class: "twitter", src: service5 },
    { class: "reddit", src: service6 },
    { class: "whatsapp", src: service7 },
    { class: "facebook", src: service8 },
    { class: "instagram", src: service9 },
  ];

  // const createDynamicLists = (totalULs, totalLIsPerUL) => {
  //   const shuffledIcons = [...icons].sort(() => Math.random() - 0.5);
  //   const lists = [];

  //   for (let ulIndex = 0; ulIndex < totalULs; ulIndex++) {
  //     const listItems = [];
  //     for (let liIndex = 1; liIndex < totalLIsPerUL; liIndex++) {
  //       const currentIcon =
  //         shuffledIcons[(liIndex + ulIndex) % shuffledIcons.length];
  //       listItems.push(
  //         <li className={currentIcon.class} key={liIndex}>
  //           <a>
  //             <div>
  //               {[...Array(4)].map((_, idx) => (
  //                 <span key={idx}></span>
  //               ))}
  //               <span>
  //                 <img
  //                   src={currentIcon.src}
  //                   alt={`${currentIcon.class} icon`}
  //                   style={{ width: "60px", height: "60px" }}
  //                 />
  //               </span>
  //             </div>
  //           </a>
  //           <span id="hexa"></span>
  //         </li>
  //       );
  //     }
  //     lists.push(<ul key={ulIndex}>{listItems}</ul>);
  //   }
  //   return lists;
  // };

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

      // wrap UL and optional SVG below
      lists.push(
        <ul key={ulIndex} className="relative ml-55">
          {listItems}

          {/* ✅ Insert zigzag only between rows
          {ulIndex < totalULs - 1 && (
            <svg
              className="w-full absolute -top-30 left-0 rotate-29"
              viewBox="0 0 710 345"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 344.5L20.5 311L76.5 308.5L97 273L156 270L175 235L234.5 231.5L254.5 196.5L312.5 194L333 158L391 155L411.5 120L469.5 116.5L489.5 82.5L549.5 78.5L569 44L627.5 40L648 5L709 1"
                stroke="white"
                stroke-width="2"
              />
            </svg>
          )} */}
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

      {/* ✅ Centered text + button */}
      <div className="flex flex-col items-center justify-center gap-5 z-20 text-white">
        <h2 className="w-full absolute top-160 md:top-140 lg:top-128 xl:top-115  left-1/2 -translate-x-1/2 z-50  leading-snug text-center text-3xl md:text-3xl lg:text-3xl xl:text-4xl xl:max-w-4xl  font-michroma font-extrabold px-5 ">
          Transform Your Ideas Into Stunning, High Performing Websites.
        </h2>

        <p className="w-full absolute top-200 md:top-168 lg:top-155 xl:top-147 2xl:top-145 left-1/2 -translate-x-1/2 xl:max-w-4xl 2xl:max-w-2xl text-xl md:text-base lg:text-lg 2xl:text-xs text-center text-gray-200 px-20">
          We combine cutting-edge technology with visionary ideas to deliver
          solutions that shape tomorrow while empowering businesses today.
        </p>

        <Link
          to={"/contact"}
          className="absolute top-235 md:top-190 lg:top-175 xl:top-168 2xl:top-160 left-1/2 -translate-x-1/2 bg-violet-500 text-white px-8 py-3 text-2xl rounded-full pointer-events-auto hover:scale-110 duration-300"
        >
          Book A Free Demo
        </Link>
      </div>
    </div>
  );
};

export default Landing;
