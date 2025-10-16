import { motion } from "framer-motion";
import { Shield, Zap, Target, Users } from "lucide-react";
import Lottie from "lottie-react";
import Forgot from "../../../../assets/Animations/Forgot.json";
import { useEffect, useState } from "react";

const IAMBenefits = () => {
  const benefits = [
    {
      icon: Shield,
      metric: "10X",
      title: "Boost in Security Posture",
      description:
        "IAM reduced unauthorized access by 80% with zero-trust policies and advanced authentication methods.",
      gradient: "from-yellow-500 to-amber-400",
      delay: 0,
    },
    {
      icon: Zap,
      metric: "5X",
      title: "Faster User Onboarding",
      description:
        "Automated provisioning cut onboarding from days to minutes, improving efficiency across teams.",
      gradient: "from-orange-500 to-yellow-400",
      delay: 0.1,
    },
    {
      icon: Target,
      metric: "3X",
      title: "Improved Compliance",
      description:
        "IAM simplified audits and access reviews, helping achieve compliance milestones ahead of schedule.",
      gradient: "from-amber-500 to-yellow-300",
      delay: 0.2,
    },
    {
      icon: Users,
      metric: "70%",
      title: "Reduction in IT Workload",
      description:
        "Centralized access management and SSO reduced password resets and manual admin tasks drastically.",
      gradient: "from-lime-500 to-yellow-300",
      delay: 0.3,
    },
  ];

  const LAYOUT_RADIUS = 350;
  const ORB_RADIUS = 128;
  const SVG_SIZE = LAYOUT_RADIUS * 2;
  const SVG_CENTER = SVG_SIZE / 2;

  const [currentPositions, setCurrentPositions] = useState([0, 1, 2, 3]);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive detection
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024); // mobile + tablet below 1024px
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Animation logic only for desktop
  useEffect(() => {
    if (isMobile) return;
    const interval = setInterval(() => {
      setCurrentPositions((prev) => {
        const newPositions = [...prev];
        const first = newPositions.shift();
        newPositions.push(first);
        return newPositions;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [isMobile]);

  const getLinePath = (index) => {
    const originalIndex = index;
    const angle = originalIndex * 90 * (Math.PI / 180);
    const R_start = ORB_RADIUS + 10;
    const R_end = LAYOUT_RADIUS - 160;
    const startX = SVG_CENTER + R_start * Math.cos(angle);
    const startY = SVG_CENTER + R_start * Math.sin(angle);
    const endX = SVG_CENTER + R_end * Math.cos(angle);
    const endY = SVG_CENTER + R_end * Math.sin(angle);
    return `M ${startX} ${startY} L ${endX} ${endY}`;
  };

  const getCardPosition = (positionIndex) => {
    const angle = positionIndex * 90 * (Math.PI / 180);
    const x = Math.cos(angle) * LAYOUT_RADIUS;
    const y = Math.sin(angle) * LAYOUT_RADIUS;
    return { x, y };
  };

  // ✅ MOBILE + TABLET (simple scroll layout)
  if (isMobile) {
    return (
      <section className="min-h-screen  text-white py-20 px-6 relative overflow-hidden font-sans">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl opacity-70"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-10 relative z-10">
          <h2 className="text-center text-3xl font-bold mb-10 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            IAM Benefits
          </h2>

          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-xl backdrop-blur-md hover:scale-[1.02] transition-transform duration-300"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-4 shadow-xl`}
              >
                <benefit.icon className="w-7 h-7 text-white" />
              </div>

              <div className="text-4xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-3">
                {benefit.metric}
              </div>

              <h3 className="text-xl font-semibold text-white mb-2 leading-tight">
                {benefit.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {benefit.description}
              </p>

              <div
                className={`h-1 bg-gradient-to-r ${benefit.gradient} rounded-full mt-4`}
              ></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // ✅ DESKTOP + LAPTOP (full animation version)
  return (
    <section className="min-h-screen from-slate-900 via-gray-950 to-slate-900 text-white py-20 px-6 relative overflow-hidden font-sans">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-40 bg-amber-500/10 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto pt-60 pb-60 relative z-10">
        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-0"
        >
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            whileInView={{ scale: 1.1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="w-48 h-48 md:w-56 md:h-56"
            style={{
              position: "absolute",
              top: "520px",
              left: "530px",
            }}
          >
            <Lottie
              animationData={Forgot}
              loop={true}
              autoplay={true}
              className="w-full h-full"
            />
          </motion.div>
        </motion.div>

        {/* Circular Animation Layout */}
        <div className="relative h-[700px] flex items-center justify-center">
          <motion.svg
            className="absolute pointer-events-none z-10"
            width={SVG_SIZE}
            height={SVG_SIZE}
            viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
            style={{
              transform: `translate(-50%, -50%)`,
              left: "50%",
              top: "50%",
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
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              />
            ))}
            <defs>
              <linearGradient
                id="line-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#374151" />
                <stop offset="50%" stopColor="#4B5563" />
                <stop offset="100%" stopColor="#9CA3AF" />
              </linearGradient>
            </defs>
          </motion.svg>

          {/* Cards in Circular Layout */}
          {benefits.map((benefit, index) => {
            const positionIndex = currentPositions[index];
            const { x, y } = getCardPosition(positionIndex);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                animate={{
                  x,
                  y,
                  transition: { type: "spring", stiffness: 100, damping: 15 },
                }}
                transition={{
                  delay: benefit.delay,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                className="absolute w-72 p-6 rounded-2xl backdrop-blur-md shadow-2xl hover:shadow-yellow-500/30 transition-all duration-500 hover:scale-[1.02] cursor-default z-30"
                style={{
                  transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
                }}
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-4 shadow-xl`}
                >
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    delay: benefit.delay + 0.3,
                    type: "spring",
                  }}
                  className="text-4xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-3"
                >
                  {benefit.metric}
                </motion.div>

                <h3 className="text-xl font-semibold text-white mb-2 leading-tight">
                  {benefit.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{
                    delay: benefit.delay + 0.5,
                    duration: 0.8,
                  }}
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
