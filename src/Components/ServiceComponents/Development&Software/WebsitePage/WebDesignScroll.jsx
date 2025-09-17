import { motion } from "framer-motion";
import TextReveal from "/src/Hooks/TextReveal.jsx";

// import image1 from "/src/assets/DesignImages/DesignImage1.jpg";
// import image2 from "/src/assets/DesignImages/DesignImage2.jpg";
// import image3 from "/src/assets/DesignImages/DesignImage3.jpg";
// import image4 from "/src/assets/DesignImages/DesignImage4.jpg";
// import image5 from "/src/assets/DesignImages/DesignImage5.jpg";
// import image6 from "/src/assets/DesignImages/DesignImage6.jpg";
// import image7 from "/src/assets/DesignImages/DesignImage7.jpg";
// import image8 from "/src/assets/DesignImages/DesignImage8.jpg";
// import image9 from "/src/assets/DesignImages/DesignImage9.jpg";
// import image10 from "/src/assets/DesignImages/DesignImage10.jpg";

import image1 from "/src/assets/AboutImages/wow.png";
import image2 from "/src/assets/AboutImages/vow.png";
import image3 from "/src/assets/AboutImages/tow.png";
import image4 from "/src/assets/AboutImages/wow.png";
import image5 from "/src/assets/AboutImages/vow.png";
import image6 from "/src/assets/AboutImages/tow.png";
import image7 from "/src/assets/AboutImages/wow.png";
import image8 from "/src/assets/AboutImages/vow.png";
import image9 from "/src/assets/AboutImages/tow.png";
import image10 from "/src/assets/AboutImages/tow.png";

const WebStack = () => {
  return (
    <motion.div
      className="w-full h-[calc(100vh-40px)] flex overflow-hidden bg-black"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0 }} // ✅ triggers when center hits viewport
    >
      {/* Left Section */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-10"
        // initial={{ x: -50, opacity: 0 }}
        // whileInView={{ x: 0, opacity: 1 }}
        // transition={{ duration: 0.8, delay: 0.2 }}
        // viewport={{ once: true, amount: 0.1 }}
      >
        <TextReveal animateOnScroll={true} scrub={true}>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            Stunning Designs for Modern Web
          </h1>
        </TextReveal>
        <TextReveal delay={0.5} animateOnScroll={true} scrub={true}>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
            This section is all about the design work we craft with passion. The
            right side showcases real designs created by our designers,
            reflecting creativity, detail, and a modern approach to UI/UX.
          </p>
        </TextReveal>
        <motion.a
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          href="/contact"
          className="border-white border-1 hover:bg-white hover:text-black text-white text-lg px-6 py-3 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 w-fit"
        >
          Contact Us
        </motion.a>
      </motion.div>

      {/* Right Section - Animates from Right */}
      <motion.div
        className="w-full md:w-1/2 h-full flex flex-col justify-center items-center -rotate-75 ml-30"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Row 1 */}
        <div
          className="slider"
          style={{
            "--width": "250px",
            "--height": "250px",
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
            "--width": "250px",
            "--height": "250px",
            "--quantity": 10,
            "--time": "58s",
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

        {/* Row 3 */}
        <div
          className="slider"
          style={{
            "--width": "250px",
            "--height": "250px",
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
      </motion.div>
    </motion.div>
  );
};

export default WebStack;
