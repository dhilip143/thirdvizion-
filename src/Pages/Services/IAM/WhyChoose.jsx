
// import React from "react";
// import { FaChartBar, FaSearch, FaCogs, FaLock } from "react-icons/fa";
// import DownloadImage from "../../../assets/HeroImages/DownloadImage.jpg"; // ✅ fixed path

// const WhyChooseIAM = () => {
//   const steps = [
//     {
//       id: 1,
//       title: "Stronger Security",
//       description:
//         "Ensure only the right people have access to the right resources with intelligent authentication.",
//       icon: <FaChartBar className="text-4xl text-teal-400" />,
//     },
//     {
//       id: 2,
//       title: "Seamless Access",
//       description:
//         "Single sign-on and adaptive login provide users a smooth experience without compromising safety.",
//       icon: <FaSearch className="text-4xl text-teal-400" />,
//     },
//     {
//       id: 3,
//       title: "Scalability",
//       description:
//         "IAM grows with your organization, adapting to workforce and customer needs with ease.",
//       icon: <FaCogs className="text-4xl text-teal-400" />,
//     },
//     {
//       id: 4,
//       title: "Compliance Ready",
//       description:
//         "Meet regulations like GDPR, HIPAA, and ISO with automated audit trails and access controls.",
//       icon: <FaLock className="text-4xl text-teal-400" />,
//     },
//   ];

//   return (
//     <section className="relative min-h-screen bg-black text-white flex items-center justify-center px-6 py-16">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center opacity-30"
//         style={{
//           backgroundImage: `url(${DownloadImage})`,
//         }}
//       >
//           <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">CHALLENGES BEFORE CRM
     
//       </h2>
//       </div>
      

//       {/* Timeline Steps */}
//       <div className="relative max-w-3xl w-full space-y-6">
//         {steps.map((step) => (
//           <div
//             key={step.id}
//             className="relative flex items-center bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-white/20"
//           >
//             {/* Icon + Number */}
//             <div className="flex-shrink-0 flex flex-col items-center justify-center mr-4">
//               <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/20">
//                 {step.icon}
//               </div>
//               <span className="mt-2 text-teal-400 font-bold text-xl">
//                 {String(step.id).padStart(2, "0")}
//               </span>
//             </div>

//             {/* Content */}
//             <div>
//               <h3 className="text-lg font-semibold text-teal-400">
//                 {step.title}
//               </h3>
//               <p className="text-sm text-gray-300 mt-1">{step.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WhyChooseIAM;
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { FaChartBar, FaSearch, FaCogs, FaLock } from "react-icons/fa";

/* ================= Sparkle Particle Network Background ================= */
function SparkleField() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const dotsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const DPR = Math.min(2, window.devicePixelRatio || 1);

    const resize = () => {
      canvas.width = canvas.clientWidth * DPR;
      canvas.height = canvas.clientHeight * DPR;
      const w = canvas.width;
      const h = canvas.height;

      // regenerate dots
      dotsRef.current = Array.from({ length: 90 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.5 + 0.5,
        s: Math.random() * 1.2 + 0.2,
        a: Math.random() * Math.PI * 2,
      }));
    };

    resize();
    window.addEventListener("resize", resize);

    function draw() {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const dots = dotsRef.current;

      dots.forEach((d) => {
        d.a += 0.004 * d.s;
        d.x += Math.cos(d.a) * 0.2;
        d.y += Math.sin(d.a) * 0.2;

        // wrap edges
        if (d.x < 0) d.x = w;
        if (d.x > w) d.x = 0;
        if (d.y < 0) d.y = h;
        if (d.y > h) d.y = 0;

        // 🌟 sparkle glow effect
        const g = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r * 10);
        g.addColorStop(0, "rgba(45,212,191,1)"); // bright teal
        g.addColorStop(0.3, "rgba(45,212,191,0.6)");
        g.addColorStop(1, "rgba(45,212,191,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r * 10, 0, Math.PI * 2);
        ctx.fill();
      });

      // ✨ connections
      ctx.globalAlpha = 0.25;
      ctx.strokeStyle = "rgba(45,212,191,0.6)";
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1; // reset

      rafRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10 pointer-events-none"
    />
  );
}

/* ================= IAM Section ================= */
export default function WhyChooseIAM() {
  const containerRef = useRef(null);

  const steps = [
    {
      id: 1,
      title: "Stronger Security",
      description:
        "Ensure only the right people have access to the right resources with intelligent authentication.",
      icon: <FaChartBar className="text-4xl text-teal-400" />,
    },
    {
      id: 2,
      title: "Seamless Access",
      description:
        "Single sign-on and adaptive login provide users a smooth experience without compromising safety.",
      icon: <FaSearch className="text-4xl text-teal-400" />,
    },
    {
      id: 3,
      title: "Scalability",
      description:
        "IAM grows with your organization, adapting to workforce and customer needs with ease.",
      icon: <FaCogs className="text-4xl text-teal-400" />,
    },
    {
      id: 4,
      title: "Compliance Ready",
      description:
        "Meet regulations like GDPR, HIPAA, and ISO with automated audit trails and access controls.",
      icon: <FaLock className="text-4xl text-teal-400" />,
    },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".iam-card",
        { opacity: 0, y: 60, rotate: 6 },
        { opacity: 1, y: 0, rotate: 0, duration: 0.9, stagger: 0.25, ease: "back.out(1.6)" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-16 overflow-hidden"
    >
      {/* Sparkle + Network Background */}
      <SparkleField />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-4xl md:text-5xl font-bold text-teal-400 mb-12 z-10 text-center"
      >
        Why Choose <span className="text-white">IAM?</span>
      </motion.h2>

      {/* Steps */}
      <div className="relative max-w-3xl w-full space-y-6 z-10">
        {steps.map((step) => (
          <div
            key={step.id}
            className="iam-card relative flex items-center bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-white/20"
          >
            <div className="flex-shrink-0 flex flex-col items-center justify-center mr-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/20">
                {step.icon}
              </div>
              <span className="mt-2 text-teal-400 font-bold text-xl">
                {String(step.id).padStart(2, "0")}
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-teal-300">
                {step.title}
              </h3>
              <p className="text-sm text-gray-300 mt-1">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
