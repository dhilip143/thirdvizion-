import React from "react";
import { motion } from "framer-motion";

const IAMBenefits = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-teal-400"
        >
          Benefits of IAM
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-400 mt-4 max-w-2xl mx-auto"
        >
          Identity & Access Management empowers organizations with stronger
          security, simplified user experiences, and improved compliance while
          reducing IT workload.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left Side */}
        <div className="grid grid-cols-1 gap-6">
          {/* Box 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 shadow-lg border border-white/10"
          >
            <h2 className="text-4xl font-extrabold text-teal-400 mb-3">10X</h2>
            <p className="text-lg font-semibold mb-4">Boost in Security Posture</p>
            <p className="text-gray-300">
              IAM reduced unauthorized access by 80% with zero-trust policies and
              advanced authentication methods.
            </p>
          </motion.div>

          {/* Box 2 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 shadow-lg border border-white/10"
          >
            <h2 className="text-4xl font-extrabold text-teal-400 mb-3">5X</h2>
            <p className="text-lg font-semibold mb-4">Faster User Onboarding</p>
            <p className="text-gray-300">
              Automated provisioning cut onboarding from days to minutes,
              improving efficiency across teams.
            </p>
          </motion.div>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-1 gap-6">
          {/* Box 3 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 shadow-lg border border-white/10"
          >
            <h2 className="text-4xl font-extrabold text-teal-400 mb-3">3X</h2>
            <p className="text-lg font-semibold mb-4">Improved Compliance</p>
            <p className="text-gray-300">
              IAM simplified audits and access reviews, helping achieve compliance
              milestones ahead of schedule.
            </p>
          </motion.div>

          {/* Box 4 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 shadow-lg border border-white/10"
          >
            <h2 className="text-4xl font-extrabold text-teal-400 mb-3">70%</h2>
            <p className="text-lg font-semibold mb-4">Reduction in IT Workload</p>
            <p className="text-gray-300">
              Centralized access management and SSO reduced password resets and
              manual admin tasks drastically.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IAMBenefits;
