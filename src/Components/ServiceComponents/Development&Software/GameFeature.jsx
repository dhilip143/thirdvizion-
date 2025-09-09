import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import {
  Rocket,
  Cpu,
  Workflow,
  Gamepad2,
  Stars,
  Sparkles,
  BadgeCheck,
  Code,
  Globe,
  Zap,
} from "lucide-react";

/* ========================= Particle Background ========================= */
function SparkleField() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;
    const DPR = Math.min(2, window.devicePixelRatio || 1);

    const resize = () => {
      canvas.width = canvas.clientWidth * DPR;
      canvas.height = canvas.clientHeight * DPR;
    };
    resize();
    window.addEventListener("resize", resize);

    const dots = Array.from({ length: 90 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: (Math.random() * 1.5 + 0.5) * DPR,
      s: Math.random() * 0.8 + 0.3,
      a: Math.random() * Math.PI * 2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const d of dots) {
        d.a += 0.004 * d.s;
        d.x += Math.cos(d.a) * 0.3;
        d.y += Math.sin(d.a) * 0.3;
        if (d.x < 0) d.x = canvas.width;
        if (d.x > canvas.width) d.x = 0;
        if (d.y < 0) d.y = canvas.height;
        if (d.y > canvas.height) d.y = 0;
        ctx.globalAlpha = 0.9;
        const g = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r * 4);
        g.addColorStop(0, "rgba(0,255,255,0.8)");
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
  return <canvas ref={canvasRef} className="absolute inset-0 -z-10 h-full w-full" />;
}

/* ========================= Section 1: Hero ========================= */
function GameHero() {
  return (
    <section className="relative isolate min-h-[100vh] flex flex-col justify-center items-center text-center overflow-hidden bg-black text-white">
      <SparkleField />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10"
      >
        <div className="flex justify-center items-center gap-3 mb-6">
          <Stars className="h-6 w-6 text-cyan-400 animate-pulse" />
          <span className="tracking-widest text-cyan-300/80">
            JAVASCRIPT GAME LAB
          </span>
        </div>
        <h1 className="font-extrabold text-5xl md:text-7xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
          CREATE PLAYABLE WEB WORLDS
        </h1>
        <p className="mt-4 text-lg max-w-xl mx-auto text-white/70">
          From Three.js to Phaser, we craft interactive browser-based games that
          run at lightning speed across all platforms.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:scale-105 transition">
            Build a Web Game
          </button>
          <button className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">
            See Demos
          </button>
        </div>
      </motion.div>
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent_95%,rgba(255,255,255,0.05)_100%)] bg-[length:100%_3px]" />
    </section>
  );
}

/* ========================= Section 2: Animated Gamepad ========================= */
function GameThreeScene() {
  const containerRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".ring", {
        rotate: 360,
        duration: 15,
        repeat: -1,
        ease: "linear",
      });
      gsap.fromTo(
        ".orb",
        { scale: 0.8, opacity: 0.6 },
        { scale: 1.2, opacity: 1, duration: 2, yoyo: true, repeat: -1, stagger: 0.3 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={containerRef}
      className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-black to-purple-950 overflow-hidden"
    >
      <div className="ring relative w-[340px] h-[340px] border-4 border-cyan-400/40 rounded-full flex items-center justify-center">
        <Gamepad2 className="w-20 h-20 text-cyan-400 animate-bounce" />
        <div className="orb absolute -top-4 -right-4 w-8 h-8 bg-pink-500 rounded-full shadow-lg shadow-pink-500/40" />
        <div className="orb absolute -bottom-6 left-8 w-6 h-6 bg-purple-400 rounded-full shadow-lg shadow-purple-400/40" />
        <div className="orb absolute top-10 -left-8 w-10 h-10 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/40" />
      </div>
    </section>
  );
}

/* ========================= Section 3: Web Game Services ========================= */
const services = [
  {
    icon: <Code className="w-6 h-6 text-pink-400" />,
    title: "Prototype → Launch",
    text: "Rapid prototyping, JavaScript game loops, and WebGL-ready builds.",
  },
  {
    icon: <Zap className="w-6 h-6 text-cyan-400" />,
    title: "Performance First",
    text: "Optimized Three.js assets, shaders, and smooth 60FPS browser play.",
  },
  {
    icon: <Workflow className="w-6 h-6 text-purple-400" />,
    title: "Full Pipeline",
    text: "Graphics → Code → Testing → Deploy. We handle every step.",
  },
  {
    icon: <Globe className="w-6 h-6 text-green-400" />,
    title: "Cross-Platform",
    text: "Ship games for Web, Mobile Browsers, PWA, and Desktop Electron apps.",
  },
];

function GameServices() {
  return (
    <section className="relative py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Our <span className="text-cyan-400">JavaScript Game</span> Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 hover:scale-[1.03] transition"
            >
              <div className="flex items-center gap-3 mb-3">
                {s.icon}
                <h3 className="font-semibold text-xl">{s.title}</h3>
              </div>
              <p className="text-white/70">{s.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Interactive Chat */}
        <div className="mt-16 max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6">
          <p className="text-sm text-white/60 mb-3">Console Log</p>
          <div className="space-y-3 text-left">
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-cyan-400/10 border border-cyan-400/20 p-3 rounded-xl"
            >
              <b>Player:</b> Can you build cross-platform JS games?
            </motion.div>
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-purple-400/10 border border-purple-400/20 p-3 rounded-xl"
            >
              <b>Dev Console:</b> Yes, we deploy to Web, Mobile Browsers, PWA, and Desktop.
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================= Page (default) ========================= */
export default function GameShowcasePage() {
  return (
    <main className="w-full min-h-screen bg-black text-white">
      <GameHero />
      <GameThreeScene />
      <GameServices />
    </main>
  );
}
