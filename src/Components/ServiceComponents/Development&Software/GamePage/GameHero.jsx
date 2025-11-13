import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  BadgeCheck,
  ArrowRight,
  Rocket,
  Cpu,
  Workflow,
  Gamepad2,
} from "lucide-react";
import { Link } from "react-router-dom";

function MarqueeRow({ items, reverse = false }) {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div
          className={`animate-marquee inline-flex gap-3 py-2 ${
            reverse ? "animate-direction-reverse" : ""
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

  const blockScroll = () => (document.body.style.overflow = "hidden");
  const allowScroll = () => (document.body.style.overflow = "");

  const handlePointerDown = (e) => {
    blockScroll();
    if (e.pointerId && e.currentTarget?.setPointerCapture) {
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch {}
    }
  };
  const handlePointerUp = (e) => {
    if (e.pointerId && e.currentTarget?.releasePointerCapture) {
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {}
    }
    allowScroll();
  };
  const handleTouchStart = (e) => {
    e.preventDefault?.();
    blockScroll();
  };
  const handleTouchEnd = () => allowScroll();

  return (
    <div key={gameKey} className="relative flex flex-col items-center overscroll-none">
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
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onDrag={(e, info) => {
            cardAPosition.current = info.point;
          }}
          onDragStart={() => blockScroll()}
          onDragEnd={(event) => {
            allowScroll();
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
          style={{ touchAction: "none" }}
          className="absolute right-3 bottom-6 w-[80%] sm:w-[65%] md:w-[60%] cursor-grab active:cursor-grabbing touch-none"
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
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          whileDrag={{ scale: 1.1, zIndex: 10 }}
          onDrag={(e, info) => {
            cardBPosition.current = info.point;
          }}
          onDragStart={() => blockScroll()}
          onDragEnd={(event) => {
            allowScroll();
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
          style={{ touchAction: "none" }}
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
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-8 sm:px-6 md:grid-cols-2 md:gap-10 md:py-16">
        <div>
          <div className="w-full md:w-auto mt-12 mb-4 sm:mt-12 md:mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <Sparkles className="h-4 w-4 mr-2 inline" />
            <span>Premium Web-Game Services</span>
          </div>

          <h1 className=" text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center md:text-start font-medium leading-[1.05] tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
            Build Interactive WebSite Games Players  
          </h1>

          <p className="mt-5 max-w-xl text-center md:text-start text-sm text-white/70" style={{ fontFamily: "worksans, sans-serif" }}>
            From React + Three.js prototypes to full-engine WebGL titles — we
            deliver playable demos, polished visuals, and optimized builds.
          </p>

          <div className="group w-full h-full mt-8 flex items-center justify-center md:justify-start gap-4 md:gap-2">
            <Link to={"/contact"}>
              <button className="font-inter-tight inline-flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl border border-white/40 bg-transparent px-5 sm:px-6 md:px-8 py-4 font-medium sm:font-semibold tracking-wide text-sm sm:text-base md:text-sm backdrop-blur-md transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] hover:scale-105"style={{ fontFamily: "worksans, sans-serif" }}>
                Cast a Spell{" "}
                <ArrowRight className="h-5 w-5 transition-all duration-300 group-hover:translate-x-0.5" />
              </button>
            </Link>
            <a
              href="#work"
              className="text-white/70 underline-offset-4 hover:text-white hover:underline px-2 sm:px-6"
          style={{ fontFamily: "worksans, sans-serif" }}  >
              See Builds
            </a>
          </div>
        </div>

        <DragGame />
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
