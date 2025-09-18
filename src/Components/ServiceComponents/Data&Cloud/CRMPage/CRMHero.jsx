import { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import TextReveal from "/src/Hooks/TextReveal.jsx"
import { Sparkles } from "lucide-react";

export default function CrmHero() {
  const rootRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const badgesRef = useRef([]);

  badgesRef.current = [];

  const titleControls = useAnimation();
  const subtitleControls = useAnimation();
  const ctaControls = useAnimation();
  const badgesControls = useAnimation();

  const inView = useInView(rootRef, { once: true, margin: "-100px" });

  if (inView) {
    titleControls.start({ opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8 } });
    subtitleControls.start({ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } });
    ctaControls.start({ opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, delay: 0.5 } });
    badgesControls.start({ opacity: 1, y: 0, rotateX: 0, transition: { staggerChildren: 0.08, delay: 0.4 } });
  }

  function setBadgeRef(el) {
    if (el && !badgesRef.current.includes(el)) badgesRef.current.push(el);
  }

  const heading = (
    <>
      
    </>
  );

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden px-6 py-20 lg:py-28 text-white"
      aria-label="CRM Hero - Black & White edition"
    >
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left: Text */}
        <div className="w-full lg:w-6/12 text-center lg:text-left">
          <div className="max-w-2xl mx-auto lg:ml-0">
            <p className="inline-flex items-center gap-3 text-sm font-medium text-white/70 bg-white/10 rounded-full px-3 py-1 mb-4">
              <Sparkles className="size-4" />
              Built for growth
            </p>
            <TextReveal>
              <motion.h1
                // ref={titleRef}
                initial={{ opacity: 0, y: 30, }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ amount: 0 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-4"
              >
                Enterprise-grade CRM for revenue & relationships
              </motion.h1>
            </TextReveal>
            <TextReveal>
              <motion.p
                ref={subtitleRef}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ amount: 0 }}
                className="text-lg text-white/70 mb-6"
              >
                A modern CRM that combines pipeline management, automation, and AI-driven insights.
                Connect your sales, support and marketing teams with a single truth-of-customer —
                flexible, scalable, and designed for real teams to move faster.
              </motion.p>
            </TextReveal>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start">
              <motion.a
                ref={ctaRef}
                whileInView={ctaControls}
                initial={{ opacity: 0, y: 18, scale: 0.96 }}
                href="#get-started"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold bg-white text-black shadow-lg hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-white/30"
              >
                Request a demo
              </motion.a>

              <a
                href="#learn"
                className="text-sm text-white/70 hover:underline"
                aria-label="See integrations and comparisons"
              >
                Integrations & comparisons
              </a>
            </div>

            <motion.div
              whileInView={badgesControls}
              initial={{ opacity: 0, y: 50, rotateX: -8 }}
              className="mt-8 flex flex-wrap gap-3 items-center"
              aria-hidden
            >
              {["Enterprise-ready security", "99.99% uptime SLA", "1000+ integrations"].map((b) => (
                <span
                  key={b}
                  ref={setBadgeRef}
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium bg-white/10 text-white shadow-md"
                >
                  {b}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Right: Card */}
        <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">

          <div className="relative w-full max-w-sm rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 shadow-2xl">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="text-sm text-white/70">Quarterly impact</h3>
                <p className="mt-1 text-2xl font-bold">+38% Pipeline Velocity</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xs text-white/70">Avg. Win Rate</span>
                <strong className="text-lg">+28%</strong>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-white/10">
                <p className="text-xs text-white/70">Active leads</p>
                <p className="text-lg font-semibold">18,400</p>
              </div>
              <div className="p-3 rounded-lg bg-white/10">
                <p className="text-xs text-white/70">Avg. deal size</p>
                <p className="text-lg font-semibold">$9.6k</p>
              </div>
            </div>

            <div className="mt-5 text-xs text-white/70">Enterprise-ready CRM: secure, scalable, extensible.</div>
          </div>
          {/* SVG */}
          <div className="absolute inset-0">
            {/* <>
              <svg className="backbone" viewBox="0 0 749 288" fill="none" xmlns="http://www.w3.org/2000/svg">
                // Static backbone
                <path
                  d="M13 11.5V130C13 147.673 27.3269 162 45 162H360.5H736M736 162V11.5M736 162V277"
                  className="backboneStatic"
                  stroke="white"
                  strokeOpacity="0.15"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                // Glowing draw layer (moving dash)\
                <path
                  d="M13 11.5V130C13 147.673 27.3269 162 45 162H360.5H736M736 162V11.5M736 162V277"
                  className="glowDraw"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />

                // Pulse layer (width pulse)
                <path
                  d="M13 11.5V130C13 147.673 27.3269 162 45 162H360.5H736M736 162V11.5M736 162V277"
                  className="glowPulse"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />

                <defs>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
              </svg>

              // Add this CSS to your stylesheet (e.g. global.css or component CSS module)
              <style>{`
    .backbone { width:100%; height:auto; }

    // moving/draw animation
    .backbone .glowDraw {
      stroke-width: 1;
      stroke-dasharray: 1500;
      stroke-dashoffset: 1500;
      filter: url(#glow);
      animation: draw 3s linear infinite;
    }
    @keyframes draw {
      to { stroke-dashoffset: 0; }
    }

    /* ---- pulse animation with initial delay (only delay first start) ----
       animation-delay delays only the very first iteration
    .backbone .glowPulse {
      stroke-width: 0.4;
      animation: pulseOnce 10s ease-in-out infinite;
      animation-delay: 3s; // initial delay before first iteration
    }
    @keyframes pulseOnce {
      0%   { stroke-width: 0.4; opacity: 1; }
      50%  { stroke-width: 1.5; opacity: 1; }
      100% { stroke-width: 0.4; opacity: 1; }
    }

    /* ---- OR: pulse every cycle but offset inside each cycle ----
       If you want the pulse to happen later in each draw cycle, use same duration as draw (3s)
       and push the pulse into the later % of the keyframes (per-cycle delay)
    .backbone .glowPulsePerCycle {
      stroke-width: 0.4;
      animation: pulsePerCycle 3s ease-in-out infinite;
      /* no animation-delay, this delays inside each loop
    }
    @keyframes pulsePerCycle {
      0%   { stroke-width: 0.4; }
      60%  { stroke-width: 0.4; }  /* first 60% = "delay"
      80%  { stroke-width: 1.5; }  /* quick pulse
      100% { stroke-width: 0.4; }
    }
  `}</style>
            </> */}

          </div>

        </div>
      </div>
    </section>
  );
}
