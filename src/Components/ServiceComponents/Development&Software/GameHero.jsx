import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  Sparkles,
  Stars,
  BadgeCheck,
  ArrowRight,
  Rocket,
  Cpu,
  Workflow,
  Gamepad2,
} from "lucide-react";

const tools = [
  { name: "Three.js", tag: "WebGL", hint: "3D in browser" },
  { name: "React", tag: "JSX", hint: "Component-driven UI" },
  { name: "Phaser", tag: "JS", hint: "2D game engine" },
  { name: "Babylon.js", tag: "WebGL", hint: "Realtime rendering" },
  { name: "Webpack/Vite", tag: "Tooling", hint: "Fast dev builds" },
  { name: "TypeScript", tag: "Typed JS", hint: "Safer code" },
  { name: "Blender", tag: "3D", hint: "Modeling & animation" },
  { name: "Tiled", tag: "Level", hint: "Tilemap editor" },
  { name: "A-Frame", tag: "VR", hint: "WebXR scenes" },
  { name: "Playwright", tag: "Testing", hint: "E2E automation" },
  { name: "GitHub Actions", tag: "CI", hint: "Auto builds & deploys" },
  { name: "Sentry", tag: "Monitoring", hint: "Crash reporting" },
];

const features = [
  {
    icon: <Rocket className="w-5 h-5" />,
    title: "Web First Prototypes",
    text: "Rapid React/Three prototypes you can share in minutes.",
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    title: "Performance Budgets",
    text: "Frame-budgeting, draw-call tuning and memory profiling.",
  },
  {
    icon: <Workflow className="w-5 h-5" />,
    title: "Iterative Pipeline",
    text: "Design -> Code -> Playtest -> Ship — iterate quickly.",
  },
  {
    icon: <Gamepad2 className="w-5 h-5" />,
    title: "Cross-Play Ready",
    text: "Browser, mobile, desktop — same game logic, multiple targets.",
  },
];

function MagneticButton({ children, className = "" }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-30, 30], [10, -10]);
  const rotateY = useTransform(x, [-30, 30], [-10, 10]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      x.set(Math.max(-30, Math.min(30, relX / 4)));
      y.set(Math.max(-30, Math.min(30, relY / 4)));
    };
    const reset = () => {
      x.set(0);
      y.set(0);
    };
    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, [x, y]);

  return (
    <motion.button
      ref={ref}
      style={{ x, y, rotateX, rotateY }}
      whileTap={{ scale: 0.98 }}
      className={`group inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 px-6 py-3 font-semibold tracking-wide shadow-[0_0_20px_rgba(255,255,255,0.08)] backdrop-blur-md transition ${className}`}
    >
      {children}
    </motion.button>
  );
}

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
      s: Math.random() * 0.6 + 0.2,
      a: Math.random() * Math.PI * 2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const d of dots) {
        d.a += 0.004 * d.s;
        d.x += Math.cos(d.a) * 0.2;
        d.y += Math.sin(d.a) * 0.2;
        if (d.x < 0) d.x = canvas.width;
        if (d.x > canvas.width) d.x = 0;
        if (d.y < 0) d.y = canvas.height;
        if (d.y > canvas.height) d.y = 0;
        ctx.globalAlpha = 0.8;
        const g = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r * 3);
        g.addColorStop(0, "rgba(255,255,255,0.7)");
        g.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r * 3, 0, Math.PI * 2);
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
    <canvas ref={canvasRef} className="absolute inset-0 -z-10 h-full w-full" />
  );
}

function MarqueeRow({ items, reverse = false }) {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`flex whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]`}
      >
        <div
          className={`animate-marquee inline-flex gap-3 py-2 ${
            reverse ? "animate-direction-reverse" : ""
          }`}
        >
          {items.concat(items).map((t, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90"
            >
              <BadgeCheck className="h-4 w-4" />
              <b className="font-semibold">{t.name}</b>
              <em className="not-italic text-white/60">{t.tag}</em>
              <span className="text-white/40">• {t.hint}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function GameLanding() {
  return (
    <section className="relative isolate min-h-[100dvh] w-full overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div
          className="absolute -top-40 left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(50%_50%_at_50%_50%, rgba(120,119,198,0.25), transparent 60%)",
          }}
        />
        <div
          className="absolute -bottom-40 right-10 h-[50vh] w-[50vh] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(50%_50%_at_50%_50%, rgba(253,186,116,0.25), transparent 60%)",
          }}
        />
      </div>

      <SparkleField />

      {/* Nav simplified (no Services/Work/About/Contact) */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <Stars className="h-5 w-5" />
          <span className="font-inter-tight text-lg font-semibold tracking-tight">
            {" "}
            THIRDVIZION GAMES{" "}
          </span>
        </div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-8 md:grid-cols-2 md:py-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
          >
            <Sparkles className="h-4 w-4" />
            Premium Web-Game Services
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-4 font-inter-tight text-5xl font-black leading-[1.05] tracking-tight md:text-7xl"
          >
            Build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60">
              Interactive
            </span>
            <br /> JavaScript Games Players Love
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="mt-5 max-w-xl text-white/70"
          >
            From React + Three.js prototypes to full-engine WebGL titles — we
            deliver playable demos, polished visuals, and optimized builds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <MagneticButton className="font-inter-tight text-black bg-white text-base hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]">
              Explore Engine Demos{" "}
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-0.5" />
            </MagneticButton>
            <a
              href="#work"
              className="text-white/70 underline-offset-4 hover:text-white hover:underline"
            >
              See Builds
            </a>
          </motion.div>

          <div className="mt-10 space-y-2">
            <MarqueeRow items={tools.slice(0, Math.ceil(tools.length / 2))} />
            <MarqueeRow
              items={tools.slice(Math.ceil(tools.length / 2))}
              reverse
            />
          </div>
        </div>

        {/* Interactive Visual Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="relative"
        >
          <motion.div
            whileHover={{ scale: 1.02, rotate: -1 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4 shadow-[0_0_40px_rgba(255,255,255,0.06)] backdrop-blur-md"
          >
            <div className="relative h-[440px] overflow-hidden rounded-2xl">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute left-6 top-8 w-[70%]"
              >
                <div className="rounded-2xl border border-white/10 bg-black/60 p-4 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition">
                  <div className="flex items-center justify-between text-xs text-white/60">
                    <span>Web Demo A</span>
                    <span>90 FPS</span>
                  </div>
                  <div className="mt-2 h-32 rounded-lg bg-gradient-to-br from-white/10 to-white/0 flex items-center justify-center text-sm text-white/60">
                    Playable Prototype — Click to Launch
                  </div>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 7, repeat: Infinity }}
                className="absolute right-6 bottom-8 w-[60%]"
              >
                <div className="rounded-2xl border border-white/10 bg-black/60 p-4 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition">
                  <div className="flex items-center justify-between text-xs text-white/60">
                    <span>Web Demo B</span>
                    <span>GPU OK</span>
                  </div>
                  <div className="mt-2 h-28 rounded-lg bg-gradient-to-bl from-white/10 to-white/0 flex items-center justify-center text-sm text-white/60">
                    Multiplayer Lobby Mock — Live Preview
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <div className="pointer-events-none mt-3 text-center text-xs text-white/40">
            Interactive mock cards—replace with your gameplay shots
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/10">
                {f.icon}
              </div>
              <div className="font-inter-tight text-lg font-semibold">
                {f.title}
              </div>
              <p className="mt-1 text-sm text-white/70">{f.text}</p>
              <div className="mt-3 h-px w-full bg-gradient-to-r from-white/20 via-white/0 to-white/0 opacity-60" />
              <div className="mt-3 text-xs text-white/50">
                Included in all builds
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .animate-marquee { animation: marquee 20s linear infinite; }
        .animate-direction-reverse { animation-direction: reverse; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </section>
  );
}

// Extra helpers for future enhancements
export function attachGameAnalytics() {
  // placeholder for analytics hook — call from parent if needed
  return {
    trackEvent: (name, data) => {
      console.debug("trackEvent", name, data);
    },
  };
}
