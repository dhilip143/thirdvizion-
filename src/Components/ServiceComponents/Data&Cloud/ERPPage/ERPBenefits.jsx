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
    <section className="relative py-60 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-center bg-gradient-to-r from-white via-[#dfe1ff] to-[#a9afff] bg-clip-text text-transparent mb-12"
        >
          Benefits of Our ERP
        </motion.h2>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="p-6 rounded-2xl bg-[#7C86FF10] border border-[#7C86FF20] shadow-[0_0_30px_rgba(124,134,255,0.1)] hover:shadow-[0_0_40px_rgba(124,134,255,0.25)] hover:border-[#7C86FF60] hover:scale-105 transition-all duration-300 backdrop-blur-md"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{b.title}</h3>
              <p className="text-[#c7cbff] text-sm leading-relaxed">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
