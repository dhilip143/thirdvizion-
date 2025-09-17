import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

/* ========================= Neon Line ========================= */
function NeonLine({ className }) {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    if (path) {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;

      const animate = () => {
        let start = null;
        function step(timestamp) {
          if (!start) start = timestamp;
          const progress = (timestamp - start) / 6000; // 6s loop
          path.style.strokeDashoffset = length * (1 - progress % 1);
          requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      };
      animate();
    }
  }, []);

  return (
    <svg
      viewBox="0 0 800 200"
      preserveAspectRatio="none"
      className={className}
    >
      <defs>
        <linearGradient id="neonGrad" x1="0" x2="1">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <path
        ref={pathRef}
        d="M 0 100 Q 200 40, 400 100 T 800 100"
        fill="none"
        stroke="url(#neonGrad)"
        strokeWidth="4"
        strokeLinecap="round"
        filter="url(#glow)"
      />
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
       <defs>
        <filter id="glow" x="50%" y="50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}

/* ========================= Benefits ========================= */
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
    <section className="relative bg-black text-white py-20 overflow-hidden">
      {/* Neon Line at top */}
      {/* <NeonLine className="absolute top-0 left-0 w-full h-20 opacity-80" /> */}

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-cyan-400 mb-12"
        >
          Benefits of Our ERP
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="p-6 rounded-2xl bg-gray-900/40 border border-gray-800 hover:border-cyan-400 hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {b.title}
              </h3>
              <p className="text-gray-400 text-sm">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
