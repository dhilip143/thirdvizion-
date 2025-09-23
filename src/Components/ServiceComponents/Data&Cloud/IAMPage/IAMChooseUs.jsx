import { motion } from "framer-motion";
import { FaShieldAlt, FaUserCheck, FaUsersCog, FaClipboardCheck } from "react-icons/fa";

export default function WhyChooseIAM() {
  const steps = [
    {
      title: "Stronger Security",
      description:
        "Ensure only authorized users access resources with intelligent authentication, multi-factor login, and zero-trust principles.",
      icon: <FaShieldAlt className="text-4xl sm:text-5xl text-[#FDC700]" />,
    },
    {
      title: "Seamless Access",
      description:
        "Provide employees and customers with single sign-on, adaptive authentication, and a frictionless login experience.",
      icon: <FaUserCheck className="text-4xl sm:text-5xl text-[#FDC700]" />,
    },
    {
      title: "Scalable & Flexible",
      description:
        "IAM scales with your business — whether you have 10 users or 10,000 — without sacrificing performance or security.",
      icon: <FaUsersCog className="text-4xl sm:text-5xl text-[#FDC700]" />,
    },
    {
      title: "Compliance Ready",
      description:
        "Meet GDPR, HIPAA, and ISO requirements with built-in auditing, reporting, and automated access policies.",
      icon: <FaClipboardCheck className="text-4xl sm:text-5xl text-[#FDC700]" />,
    },
  ];

  return (
    <section className="relative min-h-screen text-white py-12 sm:py-20 px-4 sm:px-6 md:px-8">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-[#FDC700] mb-12 sm:mb-16 leading-tight"
      >
        Why Choose IAM?
      </motion.h2>

      {/* Steps */}
      <div className="space-y-16 sm:space-y-20 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className={`flex flex-col md:flex-row items-center gap-6 sm:gap-10 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
          >
            {/* Icon Section */}
            <div className="flex-shrink-0 w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center rounded-full bg-[#FDC70010] border border-[#FDC70030] shadow-[0_0_15px_rgba(253,199,0,0.15)]">
              {step.icon}
            </div>

            {/* Content Section */}
            <div className="text-center md:text-left max-w-md">
              <h3 className="text-xl md:text-2xl xl:text-3xl font-semibold text-[#FDC700] mb-2 sm:mb-3">
                {step.title}
              </h3>
              <p className="text-gray-300 text-base md:text-sm xl:text-lg leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

