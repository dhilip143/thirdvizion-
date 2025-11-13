import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Threelanding() {
  const rootRef = useRef(null);
  const heroTextRef = useRef(null);
  const planetRefs = useRef([]);
  const ringsRef = useRef([]);
  const svgMaskRef = useRef(null);

  const addPlanetRef = (el) => {
    if (el && !planetRefs.current.includes(el)) planetRefs.current.push(el);
  };
  const addRingRef = (el) => {
    if (el && !ringsRef.current.includes(el)) ringsRef.current.push(el);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        rootRef.current,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );

      gsap.fromTo(
        heroTextRef.current.querySelectorAll(".word"),
        { y: 60, autoAlpha: 0, rotateX: 20 },
        {
          y: 0,
          autoAlpha: 1,
          rotateX: 0,
          duration: 1,
          ease: "expo.out",
          stagger: { each: 0.08, from: "start" },
          delay: 0.2,
        }
      );

      planetRefs.current.forEach((p, i) => {
        const dir = i % 2 === 0 ? 1 : -1;
        gsap.to(p, {
          y: `+=${20 + i * 6}`,
          x: dir * (10 + i * 4),
          duration: 6 + i,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.2,
        });
      });

      ringsRef.current.forEach((r, i) => {
        gsap.to(r, {
          rotation: i % 2 === 0 ? 90 : -90,
          duration: 20 + i * 5,
          repeat: -1,
          ease: "linear",
        });
      });

      gsap.to(".parallax-layer", {
        y: (i) => `-${50 + i * 30}`,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom+=400 top",
          scrub: 0.8,
        },
      });

      gsap.from(".feature-card", {
        y: 30,
        autoAlpha: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".features-grid",
          start: "top 80%",
        },
      });

      gsap.to(".cta-btn", {
        scale: 1.03,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 1.2,
      });

      gsap.to(".bg-blob", {
        scale: 1.06,
        rotation: 8,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const Planet = ({ id, size = 160, color = "#ff4d6d", stroke = "#ffffff22", rings = true }) => {
    const viewBox = `0 0 ${size} ${size}`;
    return (
      <svg
        className="planet w-auto h-auto drop-shadow-2xl"
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id={`grad-${id}`} cx="30%" cy="25%">
            <stop offset="0%" stopColor={color} stopOpacity="1" />
            <stop offset="50%" stopColor={color} stopOpacity="0.85" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.18" />
          </radialGradient>
          <filter id={`glow-${id}`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g filter={`url(#glow-${id})`}>
          <circle cx={size / 2} cy={size / 2} r={size * 0.42} fill={`url(#grad-${id})`} />
        </g>

        <g opacity="0.16" transform={`translate(${size * 0.08}, ${size * 0.06})`}>
          <path d={`M10 ${size * 0.2} C ${size * 0.15} 10, ${size * 0.5} 10, ${size * 0.7} ${size * 0.2}`} stroke={stroke} strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <path d={`M8 ${size * 0.45} C ${size * 0.25} ${size * 0.4}, ${size * 0.6} ${size * 0.55}, ${size * 0.86} ${size * 0.48}`} stroke={stroke} strokeWidth="1.6" fill="none" strokeLinecap="round" />
        </g>

        {rings && (
          <g className="planet-ring" transform={`translate(${size * 0.06}, ${size * 0.52})`}>
            <ellipse
              ref={addRingRef}
              cx={size * 0.44}
              cy={size * 0.04}
              rx={size * 0.48}
              ry={size * 0.12}
              fill="none"
              stroke="#ffffff10"
              strokeWidth="2"
            />
            <ellipse
              cx={size * 0.44}
              cy={size * 0.04}
              rx={size * 0.36}
              ry={size * 0.08}
              fill="none"
              stroke="#ffffff08"
              strokeWidth="1"
            />
          </g>
        )}
      </svg>
    );
  };

  const CosmicBackdrop = () => (
    <svg
      ref={svgMaskRef}
      className="pointer-events-none absolute inset-0 w-full h-full -z-10"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1920 1080"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="cosmic-grad" cx="40%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#000000" />
          <stop offset="40%" stopColor="#0a0014" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>

        <filter id="grain">
          <feTurbulence baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" />
          <feBlend in="SourceGraphic" in2="noise" mode="overlay" />
        </filter>
      </defs>

      <rect width="100%" height="100%" fill="url(#cosmic-grad)" />

      <g className="parallax-layer">
        {Array.from({ length: 60 }).map((_, i) => (
          <circle
            key={`s-${i}`}
            cx={Math.random() * 1920}
            cy={Math.random() * 1080}
            r={Math.random() * 1.8 + 0.4}
            fill={`rgba(255,255,255,${Math.random() * 0.9})`}
            opacity={Math.random() * 0.9}
          />
        ))}
      </g>

      {/* Updated bottom floating blobs to dark neon tones instead of brown */}
      <g className="bg-blob opacity-70 mix-blend-screen">
        <ellipse cx="300" cy="200" rx="420" ry="140" fill="#3b0066a0" />
        <ellipse cx="1500" cy="420" rx="520" ry="180" fill="#001f66a0" />
        <ellipse cx="1000" cy="820" rx="680" ry="200" fill="#6600ffaa" />
      </g>

      <rect width="100%" height="100%" fill="url(#cosmic-grad)" opacity="0.08" />
    </svg>
  );

  return (
    <div
      ref={rootRef}
      className="relative min-h-screen overflow-x-hidden bg-black text-white font-sans leading-relaxed antialiased"
    >
      {/* Cosmic backdrop */}
      <CosmicBackdrop />

      {/* HERO (no header) */}
      <section className="relative z-20 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          {/* Left column — text */}
          <div className="w-full lg:w-1/2">
            <div className="mb-6 text-sm uppercase tracking-widest text-pink-400 "   style={{ fontFamily: "Outfit, sans-serif" }}>ThirdVizion 3D Service</div>
            <h1 ref={heroTextRef} className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-semibold extrabold tracking-tight"   style={{ fontFamily: "Outfit, sans-serif" }}>
              <span className="block overflow-hidden">
                <span className="word block transform translate-y-0">ThirdVizion</span>
              </span>
              <span className="block overflow-hidden">
                <span className="word block text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-300">3D</span>
              </span>
              <span className="block overflow-hidden">
                <span className="word block text-6xl md:text-8xl text-white">Service</span>
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-300 max-w-2xl"   style={{ fontFamily: "worksans, sans-serif" }}>ThirdVizion delivers cinematic 3D assets, product visualizations and immersive scenes — modelled and textured for realtime and offline rendering. We craft optimized models, bake realistic materials, and export production-ready assets for web, games, and film.</p>

            <div className="mt-8 flex items-center gap-4">
              <button className="cta-btn px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-black font-semibold shadow-lg">Discover our work</button>
              <a className="text-sm text-slate-400 hover:text-white transition">Request a quote →</a>
            </div>

            {/* tiny stats */}
            {/* <div className="mt-10 flex gap-6 flex-wrap">
              <Stat label="Models" value="500+" />
              <Stat label="PBR Materials" value="1200+" />
              <Stat label="Formats" value="FBX / GLB / USDZ" />
            </div> */}
          </div>

          {/* Right column — 3D-ish assembled planets */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center">
            <div className="relative w-[420px] h-[420px] lg:w-[520px] lg:h-[520px]">
              {/* shadowed orb */}
              <div className="absolute -left-10 -top-6 parallax-layer" style={{ zIndex: 5 }}>
                <div ref={addPlanetRef} className="transform-gpu">
                  <Planet id="a" size={220} color="#ff6b6b" rings={true} />
                </div>
              </div>

              <div className="absolute right-0 top-12 parallax-layer" style={{ zIndex: 6 }}>
                <div ref={addPlanetRef} className="transform-gpu scale-[0.86]">
                  <Planet id="b" size={160} color="#6b9bff" rings={false} />
                </div>
              </div>

              <div className="absolute left-6 bottom-4 parallax-layer" style={{ zIndex: 4 }}>
                <div ref={addPlanetRef} className="transform-gpu scale-[0.72]">
                  <Planet id="c" size={120} color="#9b6bff" rings={true} />
                </div>
              </div>

              {/* central core — stylized */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-white/6 to-transparent border border-white/6 flex items-center justify-center backdrop-blur-sm">
                  <svg width="140" height="140" viewBox="0 0 140 140" aria-hidden>
                    <defs>
                      <linearGradient id="coreg" x1="0" x2="1">
                        <stop offset="0%" stopColor="#fff" stopOpacity="0.12" />
                        <stop offset="100%" stopColor="#ff9ac2" stopOpacity="0.06" />
                      </linearGradient>
                    </defs>
                    <circle cx="70" cy="70" r="38" fill="url(#coreg)" />
                    <g opacity="0.07">
                      <path d="M30 80 C 55 110, 85 110, 110 80" stroke="#fff" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                    </g>
                  </svg>
                </div>
              </div>

              {/* orbit lines for extra drama */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 520 520" aria-hidden>
                <g stroke="#ffffff12" strokeWidth="1" fill="none">
                  <ellipse cx="260" cy="260" rx="210" ry="60" />
                  <ellipse cx="260" cy="260" rx="160" ry="40" />
                  <ellipse cx="260" cy="260" rx="120" ry="30" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative z-20 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-xl font-semibold text-pink-300 mb-6">What ThirdVizion provides</h3>

          <div className="features-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard title="Photoreal Models" desc="High-detail PBR models for film and product viz." icon={IconPlanet} />
            <FeatureCard title="Real-time Ready" desc="Optimized meshes and LODs for web / game engines." icon={IconLayers} />
            <FeatureCard title="Texturing & Baking" desc="Substance and hand-painted workflows; normal, AO and curvature bakes." icon={IconHeadline} />
            <FeatureCard title="AR / USDZ export" desc="Prepared exports for AR Quick Look and mobile preview." icon={IconCTA} />
            <FeatureCard title="Rigging & Animation" desc="Skeletons, simple rigs and demonstration animations." icon={IconA11y} />
            <FeatureCard title="Consulting" desc="Workflows, asset pipelines and performance audits." icon={IconTailwind} />
          </div>
        </div>
      </section>

      {/* Tools section — lists common 3D tools used */}
      {/* <section className="relative z-20 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-xl font-semibold text-pink-300 mb-6">Tools & formats we use</h3>

          <div className="tools-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <ToolCard name="Blender" desc="Modeling, retopology, export (FBX, GLB)" />
            <ToolCard name="Autodesk Maya" desc="Animation, rigging, complex scene export" />
            <ToolCard name="ZBrush" desc="High-res sculpting and displacement maps" />
            <ToolCard name="Substance 3D Painter" desc="PBR texturing & material authoring" />
            <ToolCard name="Photoshop" desc="Texture tweaks, masks and composition" />
            <ToolCard name="Three.js / GLTF" desc="Realtime web integration (glTF/GLB)" />
          </div>

          <p className="mt-6 text-sm text-slate-400">Common export formats: <strong>FBX, OBJ, GLB/GLTF, USDZ</strong>. We optimize for target platforms — mobile, web or film.</p>
        </div>
      </section> */}

      {/* Showcases / code samples */}
      {/* <section className="relative z-20 py-12 bg-gradient-to-b from-transparent to-white/2">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h4 className="text-2xl font-bold">Tiny code sample</h4>
            <p className="mt-3 text-slate-300">How to init a small stagger animation using GSAP.</p>

            <pre className="mt-4 bg-[#0b0b0b] p-4 rounded-lg text-sm overflow-auto border border-white/6">
{`// small example
useEffect(() => {
  const tl = gsap.timeline();
  tl.from('.item', { y: 40, autoAlpha: 0, stagger: 0.08 });
}, []);
`}
            </pre>
          </div>

          <div>
            <h4 className="text-2xl font-bold">Design notes</h4>
            <ul className="list-disc pl-6 mt-3 text-slate-300 space-y-2">
              <li>Black themed base with neon accents to create depth and contrast.</li>
              <li>Prefer vector SVGs — crisp on any screen, easy to animate with transform.</li>
              <li>Keep heavy animations optional for lower-end devices.</li>
            </ul>
          </div>
        </div>
      </section> */}

      {/* LARGE CTA section */}
      <section className="relative z-20 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-4xl font-extrabold"style={{ fontFamily: "Outfit, sans-serif" }}>Work with ThirdVizion</h2>
            <p className="mt-4 text-slate-300">Send us references, target platform and budgets — we'll reply with a scoped plan and asset pipeline.</p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <button className="cta-btn px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-black font-semibold shadow-2xl">Start a project</button>
              <button className="px-6 py-3 rounded-full border border-white/10 text-sm">View portfolio</button>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center">
            <svg className="w-[560px] h-[140px]" viewBox="0 0 560 140" aria-hidden>
              <g stroke="#ffffff10" strokeWidth="1.6" fill="none">
                <path d="M10 80 C 120 10, 220 120, 330 40 C 410 -10, 520 70, 550 50" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* No footer as requested */}
    </div>
  );
}


/* ----------------------- Helper components & icons ----------------------- */

function Stat({ label, value }) {
  return (
    <div className="flex items-start gap-3 bg-white/2 rounded-xl px-4 py-3 border border-white/6">
      <div className="w-12 h-12 rounded-md bg-gradient-to-br from-white/6 to-transparent flex items-center justify-center text-lg font-semibold">#</div>
      <div>
        <div className="text-sm text-slate-300">{label}</div>
        <div className="text-lg font-bold">{value}</div>
      </div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <article className="feature-card relative p-6 rounded-2xl bg-white/2 border border-white/6">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-700 to-pink-500 flex items-center justify-center">
          <Icon />
        </div>
        <div>
          <h5 className="font-semibold">{title}</h5>
          <p className="mt-1 text-sm text-slate-300">{desc}</p>
        </div>
      </div>
    </article>
  );
}

function ToolCard({ name, desc }) {
  return (
    <div className="p-4 rounded-xl bg-white/3 border border-white/6">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-slate-300 mt-1">{desc}</div>
        </div>
        <div className="ml-4 w-10 h-10 rounded-md bg-white/5 flex items-center justify-center text-xs">{name[0]}</div>
      </div>
    </div>
  );
}

/* ----------------------- Simple inline SVG icons ----------------------- */
function IconLayers() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3 L2 9 L12 15 L22 9 L12 3 Z" stroke="#fff" strokeWidth="1.2" />
    </svg>
  );
}

function IconPlanet() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="6" stroke="#fff" strokeWidth="1.2" />
      <path d="M3 12 C7 4, 17 4, 21 12" stroke="#fff" strokeWidth="1" opacity="0.7" />
    </svg>
  );
}

function IconHeadline() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="3" rx="1" stroke="#fff" strokeWidth="1.2" />
      <rect x="3" y="11" width="18" height="3" rx="1" stroke="#fff" strokeWidth="1.2" />
    </svg>
  );
}

function IconCTA() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 12 H21" stroke="#fff" strokeWidth="1.4" />
      <path d="M15 6 L21 12 L15 18" stroke="#fff" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconA11y() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="2" stroke="#fff" strokeWidth="1.2" />
      <path d="M5 20 C7 16, 17 16, 19 20" stroke="#fff" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

function IconTailwind() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M2 12 C6 6, 18 6, 22 12" stroke="#fff" strokeWidth="1.2" />
      <path d="M2 16 C6 10, 18 10, 22 16" stroke="#fff" strokeWidth="1.2" opacity="0.8" />
    </svg>
  );
}
