import { motion } from "framer-motion";
import TextReveal from "/src/Hooks/TextReveal.jsx";

const AppStack = () => {
  const techs = Array.from({ length: 10 }, (_, i) => `Tech ${i + 1}`);

  return (
    <section className="py-24 px-6 bg-black w-full min-h-screen flex flex-col justify-center items-center text-white text-center">
      {/* Heading + Description */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.3 }}
        className="max-w-3xl mx-auto mb-12"
      >
        <TextReveal>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.3 }}
            className="text-4xl md:text-5xl xl:text-6xl font-extrabold mb-4 text-[#ff8904] drop-shadow-[0_0_12px_rgba(255,137,4,0.35)] tracking-wide"
          >
            Our Tech Stack
          </motion.h2>
        </TextReveal>

        <TextReveal delay={0.2}>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.3 }}
            className="text-gray-300 text-base md:text-lg xl:text-xl"
          >
            At <span className="text-[#ff8904] font-semibold">ThirdVizion</span>,
            we build with cutting-edge technologies ensuring performance,
            scalability, and premium user experiences across every platform.
          </motion.p>
        </TextReveal>
      </motion.div>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="slider mt-10"
        style={{
          "--width": "8rem", // card width
          "--height": "8rem", // card height
          "--quantity": techs.length,
          "--time": "30s", // animation duration
        }}
      >
        <div className="list">
          {techs.map((tech, i) => (
            <div
              className="item flex items-center justify-center bg-neutral-900 border border-neutral-800 hover:border-[#ff8904] hover:shadow-[0_0_15px_rgba(255,137,4,0.35)] transition rounded-xl text-sm md:text-base text-[#ff8904] font-semibold"
              style={{ "--position": i + 1 }}
              key={i}
            >
              {tech}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AppStack;
