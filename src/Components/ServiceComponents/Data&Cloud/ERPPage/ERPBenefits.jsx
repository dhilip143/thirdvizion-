import { motion } from "framer-motion";

export default function ERPBenefits() {
  const benefits = [
    {
      title: "Streamlined Operations",
      text: "Integrate finance, HR, supply chain, and more in one unified system.",
    },
    {
      title: "Real-Time Insights",
      text: "Advanced analytics and dashboards empower smart decision-making.",
    },
    {
      title: "Scalable & Secure",
      text: "Grow your business confidently with enterprise-grade security.",
    },
    {
      title: "Cost Optimization",
      text: "Reduce manual tasks, increase efficiency, and cut overhead costs.",
    },
  ];

  return (
    <section className="relative isolate w-full py-60 overflow-hidden">
      {/* Subtle gradient overlay with soft glow - same as HeroSection */}
      <div className="absolute inset-0  to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading - same styling as HeroSection heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ amount: 0.3 }}
          className=" text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.05] tracking-tight text-center bg-gradient-to-r from-white via-[#dfe1ff] to-[#a9afff] bg-clip-text text-transparent mb-12"
        style={{ fontFamily: "Outfit, sans-serif" }} >
          Benefits of Our ERP
        </motion.h2>

        {/* Subtitle - same styling as HeroSection subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ amount: 0.8 }}
          className="mt-5 max-w-2xl mx-auto text-[#c7cbff] text-lg leading-relaxed text-center mb-16"
        style={{ fontFamily: "work-sans, sans-serif" }}>
          Discover how our next-generation ERP system transforms your business operations
          and drives sustainable growth.
        </motion.p>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-[#7C86FF10] border border-[#7C86FF30] shadow-[0_0_20px_rgba(124,134,255,0.15)] backdrop-blur-md hover:shadow-[0_0_40px_rgba(124,134,255,0.35)] hover:border-[#7C86FF40] hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>{b.title}</h3>
              <p className="text-[#c7cbff] text-sm leading-relaxed" style={{ fontFamily: "work-sans, sans-serif" }}>{b.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Optional CTA Button - matching HeroSection style */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          viewport={{ amount: 1 }}
          className="mt-16 text-center"
        >
          
        </motion.div>
      </div>
    </section>
  );
}