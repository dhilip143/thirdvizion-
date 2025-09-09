import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import erpImg from "/src/assets/ERPimage.jpg";
import Benifits from "/src/Components/ServiceComponents/Data&Cloud/ERPBenefits";

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

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

/* ========================= ERP Hero ========================= */
export default function ERPPage() {
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
