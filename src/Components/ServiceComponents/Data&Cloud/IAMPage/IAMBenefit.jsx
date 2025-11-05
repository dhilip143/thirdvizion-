import { motion } from "framer-motion";
import { Shield, Zap, Target, Users } from "lucide-react";

const IAMBenefits = () => {
  const benefits = [
    {
      icon: Shield,
      metric: "10X",
      title: "Boost in Security Posture",
      description: "IAM reduced unauthorized access by 80% with zero-trust policies and advanced authentication methods.",
      gradient: "from-yellow-500 to-amber-400",
    },
    {
      icon: Zap,
      metric: "5X",
      title: "Faster User Onboarding",
      description: "Automated provisioning cut onboarding from days to minutes, improving efficiency across teams.",
      gradient: "from-orange-500 to-yellow-400",
    },
    {
      icon: Target,
      metric: "3X",
      title: "Improved Compliance",
      description: "IAM simplified audits and access reviews, helping achieve compliance milestones ahead of schedule.",
      gradient: "from-amber-500 to-yellow-300",
    },
    {
      icon: Users,
      metric: "70%",
      title: "Reduction in IT Workload",
      description: "Centralized access management and SSO reduced password resets and manual admin tasks drastically.",
      gradient: "from-lime-500 to-yellow-300",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 py-20 font-inter-tight relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-amber-500/5 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-7xl md:text-8xl font-inter-tight font-extrabold tracking-tight text-yellow-500 mb-6 leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
            IAM Benefits
          </h2>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "work-sans, sans-serif" }}>
            Discover how Identity and Access Management transforms security, efficiency, and compliance for your organization.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative p-8 rounded-2xl border border-yellow-500/20 bg-black/40 backdrop-blur-2xl min-h-[320px] flex flex-col transition-all duration-500 hover:border-yellow-500/40 hover:shadow-[0_0_25px_rgba(234,179,8,0.3)] group"
              style={{
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)'
              }}
            >
              {/* Glass morphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-amber-500/5 opacity-50 group-hover:opacity-70 transition-opacity duration-500 rounded-2xl" />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>

                {/* Metric */}
                <div className="text-5xl font-inter-tight font-black text-yellow-500 mb-4 group-hover:drop-shadow-[0_0_10px_rgba(234,179,8,0.3)] transition-all duration-500">
                  {benefit.metric}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-inter-tight font-bold text-white mb-4 tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-lg text-gray-300 leading-relaxed flex-1" style={{ fontFamily: "work-sans, sans-serif" }}>
                  {benefit.description}
                </p>

                {/* Progress bar */}
                <div className="mt-6 w-full h-1 bg-yellow-500/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                    className={`h-full bg-gradient-to-r ${benefit.gradient} rounded-full`}
                  />
                </div>
              </div>

              {/* Decorative corners */}
              <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-yellow-500/40 group-hover:border-yellow-500 transition-colors duration-500" />
              <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-yellow-500/40 group-hover:border-yellow-500 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.button
            className="font-inter-tight inline-flex items-center justify-center gap-3 rounded-xl border border-yellow-500/40 px-10 py-5 font-medium tracking-wide text-lg shadow-2xl backdrop-blur-xl transition-all duration-500 hover:scale-105 bg-black text-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] hover:border-yellow-500/60"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)'
            }}
          >
            <span>Learn More About IAM</span>
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-500" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default IAMBenefits;