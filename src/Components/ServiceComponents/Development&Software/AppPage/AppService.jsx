import { motion } from "framer-motion";
import TextReveal from "/src/Hooks/TextReveal.jsx";

const AppService = () => {
  const services = [
    "UI/UX Design",
    "iOS & Android Development",
    "QA & Testing",
    "Launch & Support",
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-black">
      {/* Title + Description */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.3 }}
        className="text-center mb-12"
      >
        <TextReveal>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.3 }}
            className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-[#ff8904] mb-4 drop-shadow-[0_0_12px_rgba(255,137,4,0.35)] tracking-wide"
          >
            Our Services
          </motion.h2>
        </TextReveal>

        <TextReveal delay={0.2}>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.3 }}
            className="w-full mx-auto max-w-xl lg:max-w-3xl text-gray-300 text-sm md:text-lg leading-relaxed"
          >
            At <span className="text-[#ff8904] font-semibold">ThirdVizion</span>,
            we deliver premium end-to-end solutions from designing stunning
            UI/UX, building lightning-fast apps, testing for flawless performance,
            and providing long-term support for your growth.
          </motion.p>
        </TextReveal>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
        {services.map((title, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ amount: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="bg-neutral-900 p-6 sm:p-8 rounded-2xl shadow-lg border border-neutral-800 hover:border-[#ff8904] hover:shadow-[0_0_20px_rgba(255,137,4,0.4)] transition"
          >
            <h3 className="font-bold mb-2 text-lg sm:text-xl text-[#ff8904]">
              {title}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {i === 0 &&
                "Crafting premium, intuitive, and visually striking interfaces."}
              {i === 1 &&
                "Building high-performance, cross-platform mobile solutions."}
              {i === 2 &&
                "Ensuring quality and reliability with world-class QA testing."}
              {i === 3 &&
                "Providing continuous updates, monitoring, and support."}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AppService;
