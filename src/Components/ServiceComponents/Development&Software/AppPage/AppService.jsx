import { motion } from "framer-motion";
import TextReveal from "/src/Hooks/TextReveal.jsx";

const AppService = () => {
  const services = [
    {
      title: "UI/UX Design",
      description: "Crafting premium, intuitive, and visually striking interfaces that users love to interact with."
    },
    {
      title: "iOS & Android Development",
      description: "Building high-performance, cross-platform mobile solutions that work seamlessly on all devices."
    },
    {
      title: "QA & Testing",
      description: "Ensuring quality and reliability with world-class testing for flawless app performance."
    },
    {
      title: "Launch & Support",
      description: "Providing continuous updates, monitoring, and support for long-term success."
    }
  ];

  // Animation variants matching the theme
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 0 40px rgba(255, 137, 4, 0.4)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="w-full min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 py-20 font-inter-tight relative overflow-hidden">
      {/* Background gradient for glass morphism effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff8904]/5 via-transparent to-[#ff7300]/5 pointer-events-none" />
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#ff8904]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff7300]/5 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <TextReveal>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-inter-tight font-extrabold tracking-tight text-[#ff8904] mb-6 leading-tight"
            >
              Our Services
            </motion.h2>
          </TextReveal>

          <TextReveal delay={0.2}>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              At <span className="text-[#ff8904] font-semibold">ThirdVizion</span>, we deliver premium end-to-end solutions from designing stunning interfaces to providing long-term support for your growth.
            </motion.p>
          </TextReveal>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="relative p-8 rounded-2xl border border-[#ff8904]/20 bg-black/40 backdrop-blur-2xl min-h-[280px] flex flex-col transition-all duration-500 hover:border-[#ff8904]/40 hover:shadow-[0_0_30px_rgba(255,137,4,0.3)] group"
              style={{
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                backgroundColor: 'rgba(0, 0, 0, 0.4)'
              }}
            >
              {/* Enhanced glass morphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff8904]/10 via-transparent to-[#ff7300]/5 opacity-60 group-hover:opacity-80 transition-opacity duration-500 rounded-2xl" />
              
              {/* Background blur enhancement */}
              <div className="absolute inset-0 bg-black/20 backdrop-blur-3xl rounded-2xl" />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Orange dot indicator */}
                <div className="flex items-center mb-6">
                  <div className="w-4 h-4 bg-[#ff8904] rounded-full mr-4 group-hover:scale-125 transition-transform duration-500" />
                  <div className="w-12 h-1 bg-[#ff8904]/30 rounded-full group-hover:bg-[#ff8904]/60 transition-colors duration-500" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-inter-tight font-bold text-[#ff8904] mb-4 tracking-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed flex-1">
                  {service.description}
                </p>
              </div>

              {/* Decorative corners */}
              <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-[#ff8904]/40 group-hover:border-[#ff8904] transition-colors duration-500" />
              <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-[#ff8904]/40 group-hover:border-[#ff8904] transition-colors duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AppService;