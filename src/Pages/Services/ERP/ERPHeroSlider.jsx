// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// // Neon Line Animation Component
// const NeonLine = ({ className }) => {
//   const pathRef = useRef(null);

//   useEffect(() => {
//     const path = pathRef.current;
//     if (path) {
//       const length = path.getTotalLength();
//       path.style.strokeDasharray = length;
//       path.style.strokeDashoffset = length;
//       gsap.to(path, {
//         strokeDashoffset: -length,
//         duration: 6,
//         ease: "linear",
//         repeat: -1,
//       });
//     }
//   }, []);

//   return (
//     <svg viewBox="0 0 800 200" preserveAspectRatio="none" className={className}>
//       <defs>
//         <linearGradient id="neonGrad" x1="0" x2="1">
//           <stop offset="0%" stopColor="#2dd4bf" />
//           <stop offset="100%" stopColor="#0d9488" />
//         </linearGradient>
//       </defs>
//       <path
//         ref={pathRef}
//         d="M 0 100 Q 200 40, 400 100 T 800 100"
//         fill="none"
//         stroke="url(#neonGrad)"
//         strokeWidth="3.5"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// };

// export default function ERPLanding() {
//   return (
//     <div className="bg-black text-white min-h-screen w-full overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative flex flex-col items-center justify-center text-center px-6 py-24">
//         {/* Neon lines at top & bottom */}
//         <NeonLine className="absolute top-0 left-0 w-full h-20 opacity-80" />
//         <NeonLine className="absolute bottom-0 left-0 w-full h-20 opacity-80" />

//         <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
//           Transform Your Business with ERP
//         </h1>
//         <p className="mt-4 max-w-2xl text-lg text-gray-300">
//           A unified ERP system that optimizes operations, enhances productivity,
//           and empowers decision-making with real-time insights.
//         </p>

//         <div className="mt-6 flex gap-4">
//           <button className="px-6 py-3 bg-teal-400 text-black font-semibold rounded-2xl shadow-lg hover:scale-105 transition">
//             Get Started
//           </button>
//           <button className="px-6 py-3 border border-teal-400 text-teal-400 rounded-2xl hover:bg-teal-400 hover:text-black transition">
//             Learn More
//           </button>
//         </div>
//       </section>

//       {/* Why ERP Section */}
//       <section className="relative px-8 py-20 bg-gradient-to-b from-black via-gray-900 to-black">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-teal-400">
//             Why Choose Our ERP?
//           </h2>
//           <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
//             Empowering businesses with intelligent tools designed to streamline
//             processes, improve collaboration, and drive sustainable growth.
//           </p>

//           {/* Features Grid */}
//           <div className="mt-12 grid md:grid-cols-3 gap-8">
//             <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-teal-400 transition">
//               <h3 className="text-xl font-semibold text-white">
//                 Unified Platform
//               </h3>
//               <p className="mt-2 text-gray-400">
//                 Manage finance, HR, and supply chain in one powerful platform.
//               </p>
//             </div>
//             <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-teal-400 transition">
//               <h3 className="text-xl font-semibold text-white">
//                 Real-Time Analytics
//               </h3>
//               <p className="mt-2 text-gray-400">
//                 Gain actionable insights with advanced reporting & dashboards.
//               </p>
//             </div>
//             <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-teal-400 transition">
//               <h3 className="text-xl font-semibold text-white">
//                 Scalable & Secure
//               </h3>
//               <p className="mt-2 text-gray-400">
//                 Built to grow with your business while ensuring security.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Process Section */}
//       <section className="relative px-8 py-20 bg-black">
//         <NeonLine className="absolute top-0 left-0 w-full h-20 opacity-70" />
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-teal-400">
//             Our ERP Process
//           </h2>
//           <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
//             A clear roadmap designed for seamless ERP adoption and maximum ROI.
//           </p>

//           <div className="mt-12 grid md:grid-cols-3 gap-8">
//             <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-teal-400 transition">
//               <h3 className="text-xl font-semibold text-white">Step 1</h3>
//               <p className="mt-2 text-gray-400">Assessment & Planning</p>
//             </div>
//             <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-teal-400 transition">
//               <h3 className="text-xl font-semibold text-white">Step 2</h3>
//               <p className="mt-2 text-gray-400">Implementation & Training</p>
//             </div>
//             <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-teal-400 transition">
//               <h3 className="text-xl font-semibold text-white">Step 3</h3>
//               <p className="mt-2 text-gray-400">Optimization & Support</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { motion } from "framer-motion";
// import erpImg from "/src/assets/erpIMAGE.jpg";


// /* ================= Sparkle Dots Background ================= */
// function SparkleField() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     let raf;
//     const DPR = Math.min(2, window.devicePixelRatio || 1);

//     const resize = () => {
//       canvas.width = canvas.clientWidth * DPR;
//       canvas.height = canvas.clientHeight * DPR;
//     };
//     resize();
//     window.addEventListener("resize", resize);

//     const dots = Array.from({ length: 80 }).map(() => ({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       r: (Math.random() * 1.5 + 0.5) * DPR,
//       s: Math.random() * 0.8 + 0.3,
//       a: Math.random() * Math.PI * 2,
//     }));

//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       for (const d of dots) {
//         d.a += 0.004 * d.s;
//         d.x += Math.cos(d.a) * 0.3;
//         d.y += Math.sin(d.a) * 0.3;
//         if (d.x < 0) d.x = canvas.width;
//         if (d.x > canvas.width) d.x = 0;
//         if (d.y < 0) d.y = canvas.height;
//         if (d.y > canvas.height) d.y = 0;

//         ctx.globalAlpha = 0.8;
//         const g = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r * 3);
//         g.addColorStop(0, "rgba(0,255,255,0.9)");
//         g.addColorStop(1, "rgba(0,255,255,0)");
//         ctx.fillStyle = g;
//         ctx.beginPath();
//         ctx.arc(d.x, d.y, d.r * 3, 0, Math.PI * 2);
//         ctx.fill();
//       }
//       raf = requestAnimationFrame(draw);
//     };
//     draw();
//     return () => {
//       cancelAnimationFrame(raf);
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="absolute inset-0 -z-10 w-full h-full"
//     />
//   );
// }

// /* ================= ERP Landing ================= */
// export default function ERPLanding() {
//   return (
//     <div className="relative bg-black text-white min-h-screen overflow-hidden">
//       <SparkleField />

//       {/* Hero Section */}
//       <section className="relative flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left px-6 py-24">
//         {/* Left Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="flex-1"
//         >
//           <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
//             Transform Your Business with ERP
//           </h1>
//           <p className="mt-4 max-w-xl text-lg text-gray-300">
//             A unified ERP system that optimizes operations, enhances
//             productivity, and empowers decision-making with real-time insights.
//           </p>

//           <div className="mt-6 flex gap-4 justify-center md:justify-start">
//             <button className="px-6 py-3 bg-teal-400 text-black font-semibold rounded-2xl shadow-lg hover:scale-105 transition">
//               Get Started
//             </button>
//             <button className="px-6 py-3 border border-teal-400 text-teal-400 rounded-2xl hover:bg-teal-400 hover:text-black transition">
//               Learn More
//             </button>
//           </div>
//         </motion.div>

//         {/* Right ERP Image */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="flex-1 flex justify-center"
//         >
//           <img
//             src={erpImg}
//             alt="ERP Dashboard"
//             className="max-w-md rounded-xl shadow-lg shadow-cyan-500/30"
//           />
//         </motion.div>
//       </section>
//     </div>
//   );
// }
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { motion } from "framer-motion";
// import erpImg from "/src/assets/ERPimage.jpg"; // make sure this path is correct
// import SparkeleField from "../../components/SparkleField";

// /* ================= Sparkle Dots Background ================= */
// function SparkleField() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     let raf;
//     const DPR = Math.min(2, window.devicePixelRatio || 1);

//     const resize = () => {
//       canvas.width = canvas.clientWidth * DPR;
//       canvas.height = canvas.clientHeight * DPR;
//     };
//     resize();
//     window.addEventListener("resize", resize);

//     const dots = Array.from({ length: 80 }).map(() => ({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       r: (Math.random() * 1.5 + 0.5) * DPR,
//       s: Math.random() * 0.8 + 0.3,
//       a: Math.random() * Math.PI * 2,
//     }));

//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       for (const d of dots) {
//         d.a += 0.004 * d.s;
//         d.x += Math.cos(d.a) * 0.3;
//         d.y += Math.sin(d.a) * 0.3;
//         if (d.x < 0) d.x = canvas.width;
//         if (d.x > canvas.width) d.x = 0;
//         if (d.y < 0) d.y = canvas.height;
//         if (d.y > canvas.height) d.y = 0;

//         ctx.globalAlpha = 0.8;
//         const g = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r * 3);
//         g.addColorStop(0, "rgba(0,255,255,0.9)");
//         g.addColorStop(1, "rgba(0,255,255,0)");
//         ctx.fillStyle = g;
//         ctx.beginPath();
//         ctx.arc(d.x, d.y, d.r * 3, 0, Math.PI * 2);
//         ctx.fill();
//       }
//       raf = requestAnimationFrame(draw);
//     };
//     draw();
//     return () => {
//       cancelAnimationFrame(raf);
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   return (
    
//     <canvas
//       ref={canvasRef}
//       className="absolute inset-0 -z-10 w-full h-full"
//     />
//   );
// }

// /* ================= Neon Line Animation ================= */
// const NeonLine = ({ className }) => {
//   const pathRef = useRef(null);

//   useEffect(() => {
//     const path = pathRef.current;
//     if (path) {
//       const length = path.getTotalLength();
//       path.style.strokeDasharray = length;
//       path.style.strokeDashoffset = length;
//       gsap.to(path, {
//         strokeDashoffset: -length,
//         duration: 6,
//         ease: "linear",
//         repeat: -1,
//       });
//     }
//   }, []);

//   return (
//     <svg viewBox="0 0 800 200" preserveAspectRatio="none" className={className}>
//       <defs>
//         <linearGradient id="neonGrad" x1="0" x2="1">
//           <stop offset="0%" stopColor="#2dd4bf" />
//           <stop offset="100%" stopColor="#0d9488" />
//         </linearGradient>
//       </defs>
//       <path
//         ref={pathRef}
//         d="M 0 100 Q 200 40, 400 100 T 800 100"
//         fill="none"
//         stroke="url(#neonGrad)"
//         strokeWidth="3.5"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// };

// /* ================= ERP Landing Page ================= */
// export default function ERPLanding() {
//   return (
//     <div className="relative bg-black text-white min-h-screen overflow-hidden">
//       {/* Sparkles background */}
//       <SparkleField />

//       {/* Neon lines top & bottom */}
//       <NeonLine className="absolute top-0 left-0 w-full h-20 opacity-80" />
//       <NeonLine className="absolute bottom-0 left-0 w-full h-20 opacity-80" />

//       {/* Hero Section */}
//       <section className="relative flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left px-6 py-24">
//         {/* Left Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="flex-1"
//         >
//           <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
//             Transform Your Business with ERP
//           </h1>
//           <p className="mt-4 max-w-xl text-lg text-gray-300">
//             A unified ERP system that optimizes operations, enhances
//             productivity, and empowers decision-making with real-time insights.
//           </p>

//           <div className="mt-6 flex gap-4 justify-center md:justify-start">
//             <button className="px-6 py-3 bg-teal-400 text-black font-semibold rounded-2xl shadow-lg hover:scale-105 transition">
//               Get Started
//             </button>
//             <button className="px-6 py-3 border border-teal-400 text-teal-400 rounded-2xl hover:bg-teal-400 hover:text-black transition">
//               Learn More
//             </button>
//           </div>
//         </motion.div>

//         {/* Right ERP Image */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="flex-1 flex justify-center"
//         >
//           <img
//             src={erpImg}
//             alt="ERP Dashboard"
//             className="max-w-md rounded-xl shadow-lg shadow-cyan-500/30"
//           />
//         </motion.div>
//       </section>
//       <SparkleField />
     
//     </div>
//   );
// }
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import erpImg from "/src/assets/ERPimage.jpg"; 
import Benifits from "./Benifits"

/* ========================= Sparkle Background ========================= */
function SparkleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const DPR = window.devicePixelRatio || 1;

    const resize = () => {
      canvas.width = canvas.clientWidth * DPR;
      canvas.height = canvas.clientHeight * DPR;
    };
    resize();
    window.addEventListener("resize", resize);

    const dots = Array.from({ length: 100 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: (Math.random() * 2 + 1) * DPR,
      s: Math.random() * 1 + 0.5,
      a: Math.random() * Math.PI * 2,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const d of dots) {
        d.a += 0.004 * d.s;
        d.x += Math.cos(d.a) * 0.5;
        d.y += Math.sin(d.a) * 0.5;

        // Wrap around edges
        if (d.x < 0) d.x = canvas.width;
        if (d.x > canvas.width) d.x = 0;
        if (d.y < 0) d.y = canvas.height;
        if (d.y > canvas.height) d.y = 0;

        ctx.globalAlpha = 0.9;
        const g = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r * 4);
        g.addColorStop(0, "rgba(0,255,255,1)"); // neon teal
        g.addColorStop(1, "rgba(0,255,255,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r * 4, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
}

/* ========================= ERP Hero ========================= */
export default function ERPHeroSlider() {
  return (
    <>
    <section className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* Sparkles */}
      <SparkleField />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-400 mb-6">
            ERP Solutions
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Streamline operations, enhance decision-making, and improve
            productivity with our next-gen ERP systems.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:scale-105 transition">
              Get Started
            </button>
            <button className="px-6 py-3 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transition">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src={erpImg}
            alt="ERP Dashboard"
            className="max-w-md rounded-xl shadow-lg shadow-cyan-500/30"
          />
        </motion.div>
      </div>
      
    </section>
    <Benifits />
    </>
  );
}
