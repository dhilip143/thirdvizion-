import { motion } from "framer-motion";
import { Shield, Zap, Target, Users } from "lucide-react";

// IAMBenefits Component: Visualizes core benefits in a circular, animated layout.
const IAMBenefits = () => {
  const benefits = [
    {
      icon: Shield,
      metric: "10X",
      title: "Boost in Security Posture",
      description: "IAM reduced unauthorized access by 80% with zero-trust policies and advanced authentication methods.",
      // CHANGED: Blue/Cyan -> Yellow/Amber
      gradient: "from-yellow-500 to-amber-400", 
      delay: 0
    },
    {
      icon: Zap,
      metric: "5X",
      title: "Faster User Onboarding",
      description: "Automated provisioning cut onboarding from days to minutes, improving efficiency across teams.",
      // CHANGED: Green/Emerald -> Orange/Yellow
      gradient: "from-orange-500 to-yellow-400", 
      delay: 0.1
    },
    {
      icon: Target,
      metric: "3X",
      title: "Improved Compliance",
      description: "IAM simplified audits and access reviews, helping achieve compliance milestones ahead of schedule.",
      // CHANGED: Purple/Pink -> Amber/Yellow
      gradient: "from-amber-500 to-yellow-300", 
      delay: 0.2
    },
    {
      icon: Users,
      metric: "70%",
      title: "Reduction in IT Workload",
      description: "Centralized access management and SSO reduced password resets and manual admin tasks drastically.",
      // CHANGED: Orange/Red -> Yellow/Lime
      gradient: "from-lime-500 to-yellow-300", 
      delay: 0.3
    }
  ];

  // Constants for geometry
  const LAYOUT_RADIUS = 350; // Radius for card positioning (in px) - Increased for better spacing
  const ORB_RADIUS = 128; // Half of central orb size (w-64)
  const SVG_SIZE = LAYOUT_RADIUS * 2; // 700px
  const SVG_CENTER = SVG_SIZE / 2; // 350px

  /**
   * Calculates the SVG path string for a connecting line
   * that starts outside the central orb and ends just before the orbiting card.
   * @param {number} index - Index of the benefit (0 to 3).
   * @returns {string} The 'd' attribute string for the SVG path.
   */
  const getLinePath = (index) => {
    const angle = (index * 90) * (Math.PI / 180); // 0, 90, 180, 270 degrees in radians

    // Start radius: just outside the central orb (128px radius + 10px buffer)
    const R_start = ORB_RADIUS + 10; // 138px
    
    // End radius: Calculated to stop just before the card's nearest edge (206px from center). 
    // We choose 190px for clean separation.
    const R_end = LAYOUT_RADIUS - 160; // 350 - 160 = 190px

    // Calculate coordinates for the start point relative to SVG center (350, 350)
    const startX = SVG_CENTER + R_start * Math.cos(angle);
    const startY = SVG_CENTER + R_start * Math.sin(angle);

    // Calculate coordinates for the end point relative to SVG center (350, 350)
    const endX = SVG_CENTER + R_end * Math.cos(angle);
    const endY = SVG_CENTER + R_end * Math.sin(angle);

    return `M ${startX} ${startY} L ${endX} ${endY}`;
  };

  return (
    // Background remains dark for contrast
    <section className="min-h-screen from-slate-900 via-gray-950 to-slate-900 text-white py-20 px-6 relative overflow-hidden font-sans">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* CHANGED: blue-500/10 -> amber-500/10 */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl opacity-70"></div>
        {/* CHANGED: purple-500/10 -> yellow-500/10 */}
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl opacity-70"></div>
        {/* CHANGED: cyan-500/5 -> orange-500/5 */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto pt-60 pb-60 relative z-10">
        
        
        {/* Circular Layout Benefits Container */}
        <div className="relative h-[700px] flex items-center justify-center">

          {/* 1. Connecting Lines (Single SVG) */}
          <motion.svg
            className="absolute pointer-events-none z-10"
            width={SVG_SIZE}
            height={SVG_SIZE}
            viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
            style={{ 
              transform: `translate(-50%, -50%)`,
              left: "50%",
              top: "50%"
            }}
          >
            {benefits.map((benefit, index) => (
              <motion.path
                key={`line-${index}`}
                d={getLinePath(index)}
                stroke="url(#line-gradient)"
                strokeWidth="2"
                strokeDasharray="8 8"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ 
                  delay: benefit.delay + 0.5, 
                  duration: 1.5, 
                  ease: "easeOut" 
                }}
                viewport={{ once: true }}
              />
            ))}
            {/* Keeping the line gradient muted gray for contrast against the dark background */}
            <defs>
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#374151" /> {/* Slate-700 */}
                <stop offset="50%" stopColor="#4B5563" /> {/* Slate-600 */}
                <stop offset="100%" stopColor="#9CA3AF" /> {/* Gray-400 */}
              </linearGradient>
            </defs>
          </motion.svg>
          
          {/* 2. Central Orb */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full from-slate-800 to-slate-900 border border-slate-700 shadow-2xl flex items-center justify-center z-20"
          >
            <div className="text-center">
              {/* CHANGED: text-cyan-400 -> text-amber-400 */}
              <div className="text-5xl md:text-5xl font-bold text-amber-400">IAM</div>
              <div className="text-base text-gray-400 mt-2 font-medium">The Core</div>
            </div>
          </motion.div>

          {/* 3. Benefit Cards arranged in circle */}
          {benefits.map((benefit, index) => {
            const angle = (index * 90) * (Math.PI / 180);
            const x = Math.cos(angle) * LAYOUT_RADIUS;
            const y = Math.sin(angle) * LAYOUT_RADIUS;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                whileInView={{ opacity: 1, scale: 1, x, y }}
                transition={{ 
                  delay: benefit.delay, 
                  duration: 0.8, 
                  type: "spring",
                  stiffness: 100 
                }}
                viewport={{ once: true }}
                // REMOVED: background color and border from cards
                className="absolute w-72 p-6 rounded-2xl backdrop-blur-md shadow-2xl hover:shadow-yellow-500/30 transition-all duration-500 hover:scale-[1.02] cursor-default z-30"
                style={{ 
                  // Position the card using translate(x, y) relative to the center
                  transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))` 
                }}
              >
                {/* Icon with gradient background - uses the new yellow/amber gradients */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-4 shadow-xl`}>
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>

                {/* Metric - uses the same white-to-gray gradient for legibility */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: benefit.delay + 0.3, type: "spring" }}
                  className="text-4xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-3"
                >
                  {benefit.metric}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-2 leading-tight">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>

                {/* Animated underline - uses the new yellow/amber gradients */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: benefit.delay + 0.5, duration: 0.8 }}
                  className={`h-1 bg-gradient-to-r ${benefit.gradient} rounded-full mt-4`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IAMBenefits;