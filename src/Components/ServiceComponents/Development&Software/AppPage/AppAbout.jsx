import sampleImage from "/src/assets/Animations/iso.json";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

const AppAbout = () => {
  // Animation variants matching the first component
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="w-full min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 py-20 font-inter-tight">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-inter-tight font-extrabold tracking-tight text-[#ff8904] mb-6"   style={{ fontFamily: "outfit, sans-serif" }} >
            Building the Future of Mobile Experiences
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"    style={{ fontFamily: "work-sans, sans-serif" }}>
            Crafting premium mobile applications that combine elegant design, seamless interactions, 
            and scalable technology for your digital advantage.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left Content - Text */}
          <motion.div
            className="w-full lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 mb-8 leading-relaxed"
                style={{ fontFamily: "work-sans, sans-serif" }}>
              At <span className="text-[#ff8904] font-semibold"   style={{ fontFamily: "outfit, sans-serif" }}>ThirdVizion</span>, we specialize in creating 
              cutting-edge mobile applications that feel premium, perform flawlessly, and keep your users 
              engaged. Our approach combines innovative design with robust technology to deliver exceptional 
              digital experiences.
            </motion.p>

            {/* Features Grid */}
            <div className="space-y-6">
              <motion.div
                variants={itemVariants}
                className="p-6 rounded-2xl border border-[#ff8904]/20 bg-black/50 backdrop-blur-sm hover:border-[#ff8904]/40 hover:shadow-[0_0_20px_rgba(255,137,4,0.2)] transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#ff8904]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl text-[#ff8904] font-bold">◆</span>
                  </div>
                  <div>
                    <h3 className="text-[#ff8904] font-semibold text-xl mb-2"  style={{ fontFamily: "Outfit, sans-serif" }} >Human-Centered Design</h3>
                    <p className="text-gray-300"  style={{ fontFamily: "work-sans, sans-serif" }} >We create intuitive, engaging apps that users love to interact with.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="p-6 rounded-2xl border border-[#ff8904]/20 bg-black/50 backdrop-blur-sm hover:border-[#ff8904]/40 hover:shadow-[0_0_20px_rgba(255,137,4,0.2)] transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#ff8904]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl text-[#ff8904] font-bold">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-[#ff8904] font-semibold text-xl mb-2"  style={{ fontFamily: "Outfit, sans-serif" }} >Future-Ready Technology</h3>
                    <p className="text-gray-300"  style={{ fontFamily: "work-sans, sans-serif" }} >Leveraging the latest frameworks to build scalable, high-performance apps.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="p-6 rounded-2xl border border-[#ff8904]/20 bg-black/50 backdrop-blur-sm hover:border-[#ff8904]/40 hover:shadow-[0_0_20px_rgba(255,137,4,0.2)] transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#ff8904]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl text-[#ff8904] font-bold">🤝</span>
                  </div>
                  <div>
                    <h3 className="text-[#ff8904] font-semibold text-xl mb-2" style={{ fontFamily: "Outfit, sans-serif" }} >Collaborative Approach</h3>
                    <p className="text-gray-300"  style={{ fontFamily: "work-sans, sans-serif" }} >Working closely with your team to bring your vision to life effectively.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* CTA Button */}
            
          </motion.div>

          {/* Right Content - Lottie Animation */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="relative p-8 rounded-2xl border border-[#ff8904]/20 shadow-[0_0_30px_rgba(255,137,4,0.2)] bg-black/50 backdrop-blur-sm"
                whileHover={{
                  boxShadow: '0 0 40px rgba(255, 137, 4, 0.4)',
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <Lottie
                  animationData={sampleImage}
                  className="w-full max-w-md object-cover transform hover:scale-105 transition-transform duration-500"
                  loop={true}
                  autoplay={true}
                />
                
                {/* Floating decorative elements */}
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#ff8904] rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-[#ff8904] rounded-full opacity-30 animate-pulse delay-1000"></div>
              </motion.div>
              
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff8904]/10 to-transparent rounded-2xl blur-xl -z-10"></div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats/Highlights */}
        
      </div>
    </section>
  );
};

export default AppAbout;