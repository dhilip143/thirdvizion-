import { motion } from "framer-motion";
import TextReveal from "/src/Hooks/TextReveal.jsx";

import image1 from "/src/assets/AboutImages/we.png";
import image2 from "/src/assets/AboutImages/wee.png";
import image3 from "/src/assets/AboutImages/weee.png";
import image4 from "/src/assets/AboutImages/weeee.png";
import image5 from "/src/assets/AboutImages/weeeee.png";
import image6 from "/src/assets/AboutImages/weeeeee.png";
import image7 from "/src/assets/AboutImages/weeeeeee.png";
import image8 from "/src/assets/AboutImages/weeeeeeee.png";
import image9 from "/src/assets/AboutImages/weeeeeeeee.png";
import image10 from "/src/assets/AboutImages/weeeeeeeeee.png";

const WebDesignScroll = () => {
  return (
    <motion.div
      className="w-full lg:min-h-screen flex flex-col-reverse md:flex-row justify-center items-center overflow-hidden gap-15"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ amount: 0 }}
    >
      {/* Left Section */}
      <div
        className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 md:px-8 lg:px-10 text-white text-center md:text-start"
      >
        <TextReveal>
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ amount: 0 }}
            className="w-full text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xlfont-bold leading-tight mb-6 "
          style={{ fontFamily: "Outfit, sans-serif" }} >
            Stunning Designs for <span className="text-[#00d3f3]">Modern Web</span>
          </motion.h1>
        </TextReveal>
        {/* <TextReveal delay={0.1}> */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.8 }}
          className="text-gray-300 text-sm md:text-lg leading-relaxed mb-8 md:max-w-lg "
       style={{ fontFamily: "work-sans, sans-serif" }} >
          This section is all about the design work we craft with passion. The
          right side showcases real designs created by our designers,
          reflecting creativity, detail, and a modern approach to UI/UX.
        </motion.p>
        {/* </TextReveal> */}
        <motion.a
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ amount: 0 }}
          href="/contact"
          className="font-inter-tight flex items-center justify-center md:mr-9 lg:mr-36 xl:mr-50 2xl:mr-60 gap-2 rounded-xl md:rounded-2xl border border-[#00d3f3]/40 bg-black px-5 md:px-6 xl:px-10 py-3 sm:py-4 font-medium sm:font-semibold tracking-wide text-sm sm:text-base md:text-lg shadow-[0_0_10px_rgba(0,211,243,0.3)] backdrop-blur-md transition-all duration-500 hover:shadow-[0_0_25px_rgba(0,211,243,0.5)] hover:scale-105 text-[#00d3f3] w-fit"
        >
          Let's Craft Together
        </motion.a>
      </div>

      {/* Right Section - Animates from Right */}
      <motion.div
        className="w-full md:w-1/2 h-full flex flex-col justify-center items-center md:-rotate-75 xl:ml-30 gap-3 lg:gap-5"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ amount: 0 }}
      >
        {/* Row 1 */}
        <div
          className="slider"
          style={{
            "--width": "clamp(180px, 25vw, 250px)",
            "--height": "clamp(80px, 20vw, 200px)",
            "--quantity": 10,
            "--time": "48s",
          }}
        >
          <div className="list">
            {[
              image1,
              image2,
              image3,
              image4,
              image5,
              image6,
              image7,
              image8,
              image9,
              image10,
            ].map((img, index) => (
              <div
                key={index}
                className="item"
                style={{ "--position": index + 1 }}
              >
                <img src={img} alt="" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Reverse Animation */}
        <div
          className="slider"
          reverse="true"
          style={{
            "--width": "clamp(180px, 25vw, 250px)",
            "--height": "clamp(80px, 20vw, 200px)",
            "--quantity": 10,
            "--time": "58s",
          }}
        >
          <div className="list">
            {[
              image10,
              image6,
              image7,
              image8,
              image9,
              image5,
              image4,
              image3,
              image2,
              image1,
            ].map((img, index) => (
              <div
                key={index}
                className="item"
                style={{ "--position": index + 1 }}
              >
                <img src={img} alt="" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 3 */}
        <div
          className="slider"
          style={{
            "--width": "clamp(180px, 25vw, 250px)",
            "--height": "clamp(80px, 20vw, 200px)",
            "--quantity": 10,
            "--time": "48s",
          }}
        >
          <div className="list">
            {[
              image1,
              image6,
              image2,
              image7,
              image3,
              image8,
              image4,
              image9,
              image5,
              image10,
            ].map((img, index) => (
              <div
                key={index}
                className="item"
                style={{ "--position": index + 1 }}
              >
                <img src={img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WebDesignScroll;
