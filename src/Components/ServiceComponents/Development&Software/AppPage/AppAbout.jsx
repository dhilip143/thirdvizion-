import sampleImage from "/src/assets/MobileTransparent.png";
import { motion } from "framer-motion";

const AppAbout = () => {
  return (
    <section className=" w-full min-h-screen flex flex-col md:flex-row gap-10 lg:gap-16 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:pl-50 py-12 font-inter-tight">

      {/* Left Content */}
      <div className="w-full md:w-1/2">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.5 }}
          className="text-3xl md:text-4xl xl:text-5xl font-extrabold mb-6 text-[#ff8904] tracking-wide drop-shadow-[0_0_10px_rgba(255,137,4,0.4)]"
        >
          Building the Future of Mobile Experiences
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.5 }}
          className="text-gray-300 mb-6 text-base md:text-lg leading-relaxed"
        >
          At <span className="text-[#ff8904] font-semibold">ThirdVizion</span>, we craft
          cutting-edge mobile applications that feel premium, perform flawlessly,
          and keep your users coming back. Every app we build combines
          <span className="text-[#ff8904] font-semibold"> elegant design</span>,
          <span className="text-[#ff8904] font-semibold"> seamless interactions</span>,
          and <span className="text-[#ff8904] font-semibold">scalable technology</span>
          — giving your business a true digital advantage.
        </motion.p>

        <ul className="space-y-4 text-gray-300 text-sm md:text-base">
          <motion.li
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.5 }}
            className="flex items-start"
          >
            <span className="text-[#ff8904] font-bold mr-2">•</span>
            <span><span className="text-[#ff8904] font-semibold">Human-Centered Design</span> — We create apps that are intuitive, engaging, and loved by users.</span>
          </motion.li>

          <motion.li
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.5 }}
            className="flex items-start"
          >
            <span className="text-[#ff8904] font-bold mr-2">•</span>
            <span><span className="text-[#ff8904] font-semibold">Future-Ready Tech</span> — We leverage the latest frameworks to build apps that scale with your growth.</span>
          </motion.li>

          <motion.li
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.5 }}
            className="flex items-start"
          >
            <span className="text-[#ff8904] font-bold mr-2">•</span>
            <span><span className="text-[#ff8904] font-semibold">Collaborative Approach</span> — We work closely with your team to bring your vision to life.</span>
          </motion.li>
        </ul>
      </div>

      {/* Right Content - Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.5 }}
        className="w-full md:w-1/2 flex justify-center overflow-hidden"
      >
        <img
          src={sampleImage}
          alt="ThirdVizion Mobile Development"
          className="w-3/4 md:w-[22rem] lg:w-[20rem] 2xl:w-[22rem] p-4 sm:p-6 md:p-10 object-cover"
        />
      </motion.div>
    </section>
  );
};

export default AppAbout;
