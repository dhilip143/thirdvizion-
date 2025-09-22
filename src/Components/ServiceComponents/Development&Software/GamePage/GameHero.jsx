import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  Sparkles,
  BadgeCheck,
  ArrowRight,
  Rocket,
  Cpu,
  Workflow,
  Gamepad2,
} from "lucide-react";
import TextReveal from "/src/Hooks/TextReveal.jsx";
import { Link } from "react-router-dom";

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
  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

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

function MarqueeRow({ items, reverse = false }) {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div
          className={`animate-marquee inline-flex gap-3 py-2 ${reverse ? "animate-direction-reverse" : ""
            }`}
        >
          {items.concat(items).map((t, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm text-white/90"
            >
              <BadgeCheck className="h-4 w-4" />
              <b className="font-semibold">{t.name}</b>
              <em className="not-italic text-white/60">{t.tag}</em>
              <span className="text-white/40 hidden sm:inline">• {t.hint}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function DragGame() {
  const [placed, setPlaced] = useState({ A: false, B: false });
  const [gameKey, setGameKey] = useState(0);
  const cardAPosition = useRef({ x: 0, y: 0 });
  const cardBPosition = useRef({ x: 0, y: 0 });
  const gameCompleted = placed.A && placed.B;

  return (
    <div key={gameKey} className="relative flex flex-col items-center">
      <div className="relative h-[360px] sm:h-[400px] md:h-[440px] w-full max-w-lg rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4 shadow-lg backdrop-blur-md">
        {/* Target Zones */}
        <div
          id="targetA"
          className="absolute left-3 top-6 h-28 sm:h-36 md:h-40 w-[80%] sm:w-[70%] rounded-xl border border-dashed border-green-400/40"
        />
        <div
          id="targetB"
          className="absolute right-3 bottom-6 h-28 sm:h-32 md:h-32 w-[70%] sm:w-[60%] rounded-xl border border-dashed border-blue-400/40"
        />

        {/* Card A */}
        <motion.div
          drag
          dragElastic={0.3}
          dragMomentum={false}
          whileDrag={{ scale: 1.1, zIndex: 10 }}
          onDragStart={() => {
    // Disable body scroll on drag start
    document.body.style.overflow = "hidden";
  }}
          onDrag={(e, info) => {
            cardAPosition.current = info.point;
          }}
          onDragEnd={(event) => {

            // Re-enable body scroll on drag end
    document.body.style.overflow = "";

            const card = event.target.getBoundingClientRect();
            const targetZone = document
              .querySelector("#targetA")
              .getBoundingClientRect();
            const isInZone =
              card.left < targetZone.right &&
              card.right > targetZone.left &&
              card.top < targetZone.bottom &&
              card.bottom > targetZone.top;
            if (isInZone) setPlaced((p) => ({ ...p, A: true }));
            else cardAPosition.current = { x: 0, y: 0 };
          }}
          animate={
            placed.A
              ? { x: 0, y: 0, scale: 1, rotate: 0 }
              : { x: cardAPosition.current.x, y: cardAPosition.current.y }
          }
          className="absolute right-3 bottom-6 w-[80%] sm:w-[65%] md:w-[60%] cursor-grab active:cursor-grabbing"
        >
          <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
            <div className="flex items-center justify-between text-xs text-white/60">
              <span>Web Demo A</span>
              <span>90 FPS</span>
            </div>
            <div className="mt-2 h-24 sm:h-28 rounded-lg bg-gradient-to-br from-white/10 to-white/0 flex items-center justify-center text-xs sm:text-sm text-white/60">
              Drag Me To Green Zone ✅
            </div>
          </div>
        </motion.div>

        {/* Card B */}
        <motion.div
          drag
          dragElastic={0.3}
          dragMomentum={false}
          whileDrag={{ scale: 1.1, zIndex: 10 }}
          onDragStart={() => {
    // Disable body scroll on drag start
    document.body.style.overflow = "hidden";
  }}
          onDrag={(e, info) => {
            cardBPosition.current = info.point;
          }}
          onDragEnd={(event) => {

            // Re-enable body scroll on drag end
    document.body.style.overflow = "";

            const card = event.target.getBoundingClientRect();
            const targetZone = document
              .querySelector("#targetB")
              .getBoundingClientRect();
            const isInZone =
              card.left < targetZone.right &&
              card.right > targetZone.left &&
              card.top < targetZone.bottom &&
              card.bottom > targetZone.top;
            if (isInZone) setPlaced((p) => ({ ...p, B: true }));
            else cardBPosition.current = { x: 0, y: 0 };
          }}
          animate={
            placed.B
              ? { x: 0, y: 0, scale: 1, rotate: 0 }
              : { x: cardBPosition.current.x, y: cardBPosition.current.y }
          }
          className="absolute left-3 top-6 w-[80%] sm:w-[70%] md:w-[70%] cursor-grab active:cursor-grabbing"
        >
          <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
            <div className="flex items-center justify-between text-xs text-white/60">
              <span>Web Demo B</span>
              <span>GPU OK</span>
            </div>
            <div className="mt-2 h-28 sm:h-32 rounded-lg bg-gradient-to-bl from-white/10 to-white/0 flex items-center justify-center text-xs sm:text-sm text-white/60">
              Drag Me To Blue Zone 🎯
            </div>
          </div>
        </motion.div>
      </div>

      {gameCompleted && (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="mt-4 text-center text-green-400 text-lg sm:text-xl font-bold"
          >
            🎉 You did it! Game Complete!
          </motion.div>
          <button
            onClick={() => {
              setPlaced({ A: false, B: false });
              cardAPosition.current = { x: 0, y: 0 };
              cardBPosition.current = { x: 0, y: 0 };
              setGameKey((k) => k + 1);
            }}
            className="mt-2 rounded-xl bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition"
          >
            🔄 Play Again
          </button>
        </>
      )}
    </div>
  );
}

export default function GameLanding() {
  return (
    <section className="relative isolate min-h-[100dvh] w-full overflow-hidden text-white font-inter-tight">
      {/* Background glows */}
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

      {/* Main Grid */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-8 sm:px-6 md:grid-cols-2 md:gap-10 md:py-16">
        <div>
          <TextReveal delay={0}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ amount: 0.8 }}
              className="w-full md:w-auto mt-12 mb-4 sm:mt-12 md:mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
            >
              <Sparkles className="h-4 w-4 mr-2 inline" />
              <span >Premium Web-Game Services</span>
            </motion.div>
          </TextReveal>

          <TextReveal delay={0.5}>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ amount: 0.8 }}
              className="font-inter-tight text-4xl lg:text-6xl text-center md:text-start font-black leading-[1.05] tracking-tight"
            >
              Build Interactive WebSite Games Players Love
            </motion.h1>
          </TextReveal>

          <TextReveal delay={1}>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ amount: 0.8 }}
              className="mt-5 max-w-xl text-center md:text-start text-sm text-white/70"
            >
              From React + Three.js prototypes to full-engine WebGL titles — we
              deliver playable demos, polished visuals, and optimized builds.
            </motion.p>
          </TextReveal>

          {/* <TextReveal delay={1}> */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ amount: 0.8 }}
            className="group w-full h-full mt-8 flex  items-center justify-center md:justify-start gap-4 md:gap-2"
          >
            <Link to={"/contact"}>
              <button className="font-inter-tight inline-flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl border border-white/40 bg-transparent px-5 sm:px-6 md:px-8 py-4 font-medium sm:font-semibold tracking-wide text-sm sm:text-base md:text-sm backdrop-blur-md transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] hover:scale-105">
                Cast a Spell{" "}
                <ArrowRight className="h-5 w-5 transition-all duration-300 group-hover:translate-x-0.5" />
              </button>
            </Link>
            <a
              href="#work"
              className="text-white/70 underline-offset-4 hover:text-white hover:underline px-2 sm:px-6"
            >
              See Builds
            </a>
          </motion.div>
          {/* </TextReveal> */}

          {/* Marquee Rows */}
          <div className="mt-10 space-y-2">
            <MarqueeRow items={tools.slice(0, Math.ceil(tools.length / 2))} />
            <MarqueeRow
              items={tools.slice(Math.ceil(tools.length / 2))}
              reverse
            />
          </div>
        </div>

        <DragGame />
      </div>

      {/* Features */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm hover:scale-[1.03] hover:bg-white/10 transition-transform"
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
        </motion.div>
      </div>

      <style>{`
        .animate-marquee { animation: marquee 20s linear infinite; }
        .animate-direction-reverse { animation-direction: reverse; }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
