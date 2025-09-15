import React, { useEffect, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// -----------------------------------------------------------------------------
// CrmHero
// - Single-file React component meant to be dropped into a Tailwind + React app.
// - Uses GSAP for entrance & micro animations, ScrollTrigger for small scroll-tied
//   motion, and react-three-fiber + drei for a lightweight particle background.
// - Export default component name: CrmHero
// - Focus: CRM-style hero (in the spirit of enterprise CRMs like Salesforce / Zoho)
// -----------------------------------------------------------------------------

// ------------------------------
// Helper: Particle field (Three.js)
// ------------------------------
function ParticleField({ count = 800, radius = 12 }) {
  const ref = React.useRef();

  const positions = React.useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const phi = Math.random() * Math.PI * 2;
      const cost = (Math.random() - 0.5) * 2;
      const r = radius * (0.2 + Math.random() * 0.9);
      const x = Math.cos(phi) * Math.sqrt(1 - cost * cost) * r;
      const y = Math.sin(phi) * Math.sqrt(1 - cost * cost) * r;
      const z = (Math.random() - 0.5) * radius * 0.6;
      arr[i * 3 + 0] = x;
      arr[i * 3 + 1] = y;
      arr[i * 3 + 2] = z;
    }
    return arr;
  }, [count, radius]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.0006;
    ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.02;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial size={0.06} sizeAttenuation={true} />
    </Points>
  );
}

// ------------------------------
// Decorative 3D Logo / Trophy (simple geometry)
// ------------------------------
function TrophyModel({ spin = 0.002 }) {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y += spin;
    ref.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.6) * 0.08;
  });

  return (
    <group ref={ref} dispose={null}>
      <mesh position={[0, 0.6, 0]} castShadow receiveShadow>
        <coneGeometry args={[0.32, 0.6, 16]} />
        <meshStandardMaterial metalness={0.9} roughness={0.2} envMapIntensity={0.8} />
      </mesh>
      <mesh position={[0, 0.1, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.24, 0.24, 0.18, 16]} />
        <meshStandardMaterial metalness={0.95} roughness={0.18} envMapIntensity={0.9} />
      </mesh>
      <mesh position={[0, -0.18, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.5, 0.1, 0.5]} />
        <meshStandardMaterial metalness={0.9} roughness={0.3} envMapIntensity={0.9} />
      </mesh>
    </group>
  );
}

// ------------------------------
// Main React component
// ------------------------------
export default function CrmHero() {
  const rootRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const badgesRef = useRef([]);

  // Clear badgesRef on rerender
  badgesRef.current = [];

  useEffect(() => {
    if (!rootRef.current) return;

    // Master timeline
    const tl = gsap.timeline({ defaults: { duration: 0.8, ease: "power3.out" } });

    // Staggered entrance for title, subtitle, cta
    tl.fromTo(
      titleRef.current,
      { y: 30, autoAlpha: 0, filter: "blur(8px)" },
      { y: 0, autoAlpha: 1, filter: "blur(0px)" }
    )
      .fromTo(
        subtitleRef.current,
        { y: 18, autoAlpha: 0 },
        { y: 0, autoAlpha: 1 },
        "-=_0.45"
      )
      .fromTo(
        ctaRef.current,
        { y: 18, autoAlpha: 0, scale: 0.96 },
        { y: 0, autoAlpha: 1, scale: 1, duration: 0.6 },
        "-=_0.4"
      )
      .fromTo(
        badgesRef.current,
        { y: 8, autoAlpha: 0, rotationX: -8 },
        { y: 0, autoAlpha: 1, rotationX: 0, stagger: 0.08 },
        "-=_0.45"
      );

    // Micro hover / wiggle loop applied to CTA pulse
    const pulse = gsap.to(ctaRef.current, {
      scale: 1.02,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 2.6,
      paused: true,
    });

    // Start pulse on hover (desktop)
    const ctaEl = ctaRef.current;
    function onEnter() {
      pulse.play();
    }
    function onLeave() {
      pulse.pause();
      gsap.to(ctaEl, { scale: 1, duration: 0.3 });
    }
    ctaEl.addEventListener("mouseenter", onEnter);
    ctaEl.addEventListener("mouseleave", onLeave);

    // Scroll-triggered subtle parallax of the 3D canvas background
    ScrollTrigger.create({
      trigger: rootRef.current,
      start: "top top",
      end: "bottom top",
      scrub: 1.2,
      onUpdate: (self) => {
        const progress = self.progress - 0.5; // -0.5 .. 0.5
        // small CSS variable we can use elsewhere if needed
        gsap.set(rootRef.current, { "--crm-scroll": progress.toFixed(3) });
      },
    });

    // Cleanup
    return () => {
      tl.kill();
      pulse.kill();
      ctaEl.removeEventListener("mouseenter", onEnter);
      ctaEl.removeEventListener("mouseleave", onLeave);
      ScrollTrigger.getAll().forEach((s) => s.kill());
    };
  }, []);

  // Small helper to register badge refs
  function setBadgeRef(el) {
    if (el && !badgesRef.current.includes(el)) badgesRef.current.push(el);
  }

  // Content: updated to sound like an enterprise CRM (inspired by leading CRMs)
  const heading = (
    <>
      Enterprise-grade <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-cyan-300 to-indigo-400">CRM</span>
      <wbr /> for revenue & relationships
    </>
  );

  return (
    <section
      ref={rootRef}
      className="relative isolate overflow-hidden bg-gradient-to-b from-gray-950 via-slate-900 to-black px-6 py-20 lg:py-28"
      aria-label="CRM Hero - Enterprise edition"
    >
      {/* Decorative absolute background with blend and gradient */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#071029] via-[#081224] to-[#001219] opacity-85" />

        {/* Canvas wrapper (3D) */}
        <div className="absolute inset-0 transform-gpu" style={{ mixBlendMode: 'overlay' }}>
          <Canvas camera={{ position: [0, 0, 12], fov: 50 }} style={{ height: '100%', width: '100%' }}>
            <ambientLight intensity={0.9} />
            <directionalLight position={[5, 5, 5]} intensity={0.6} />
            <Suspense fallback={null}>
              <group position={[0, -0.6, 0]}>
                <ParticleField count={1200} radius={16} />
                <TrophyModel spin={0.0032} />
              </group>
            </Suspense>
          </Canvas>
        </div>

        {/* subtle vignette */}
        <div className="absolute inset-0 pointer-events-none" style={{ mixBlendMode: 'soft-light' }}>
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 600" aria-hidden>
            <defs>
              <radialGradient id="g" cx="50%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.02" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0.44" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#g)" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left: Text */}
        <div className="w-full lg:w-6/12 text-center lg:text-left">
          <div className="max-w-2xl mx-auto lg:ml-0">
            <p className="inline-flex items-center gap-3 text-sm font-medium text-emerald-300/90 bg-emerald-900/8 rounded-full px-3 py-1 mb-4">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M3 7h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 17h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Built for growth
            </p>

            <h1
              ref={titleRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white mb-4"
            >
              {heading}
            </h1>

            <p ref={subtitleRef} className="text-lg text-slate-300/90 mb-6">
              A modern CRM that combines pipeline management, automation, and AI-driven insights.
              Connect your sales, support and marketing teams with a single truth-of-customer —
              flexible like Zoho, scalable like the largest enterprise platforms, but designed for
              real teams to move faster.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start">
              <a
                ref={ctaRef}
                href="#get-started"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold bg-gradient-to-r from-emerald-300 via-cyan-300 to-indigo-400 text-black shadow-lg hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-emerald-300/30"
              >
                Request a demo — sales-ready
              </a>

              <a
                href="#learn"
                className="text-sm text-slate-300/80 hover:underline"
                aria-label="See integrations and comparisons"
              >
                Integrations & comparisons
              </a>
            </div>

            {/* Badges (Trust) */}
            <div className="mt-8 flex flex-wrap gap-3 items-center" aria-hidden>
              {[
                { title: 'Enterprise-ready security', color: 'from-emerald-300 to-teal-400' },
                { title: '99.99% uptime SLA', color: 'from-cyan-300 to-indigo-400' },
                { title: '1000+ integrations', color: 'from-pink-300 to-rose-400' },
              ].map((b, i) => (
                <span
                  key={b.title}
                  ref={setBadgeRef}
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium bg-gradient-to-r ${b.color} text-black shadow-md`}
                >
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 20 12 16.9 7.82 20 9 12.91l-5-3.64 5.91-.99L12 2z" fill="white" />
                  </svg>
                  {b.title}
                </span>
              ))}
            </div>

            {/* Short feature list */}
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300/80">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex items-center justify-center w-7 h-7 rounded-lg bg-white/6">🔗</span>
                <div>
                  <strong className="block text-white">Two-way integrations</strong>
                  <span className="block text-slate-300/80 text-xs">Connect email, chat, ads, and billing — central record</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex items-center justify-center w-7 h-7 rounded-lg bg-white/6">⚙️</span>
                <div>
                  <strong className="block text-white">Low-code automations</strong>
                  <span className="block text-slate-300/80 text-xs">Automate follow-ups, scoring and SLA routing without engineering</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex items-center justify-center w-7 h-7 rounded-lg bg-white/6">📊</span>
                <div>
                  <strong className="block text-white">Custom reports & dashboards</strong>
                  <span className="block text-slate-300/80 text-xs">Build KPIs for MQL → SQL → Closed</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex items-center justify-center w-7 h-7 rounded-lg bg-white/6">🤖</span>
                <div>
                  <strong className="block text-white">AI-powered recommendations</strong>
                  <span className="block text-slate-300/80 text-xs">Next-best-actions, lead prioritization and churn signals</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Card with snapshot stats + subtle glass panel */}
        <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm rounded-2xl bg-white/5 backdrop-blur-md border border-white/6 p-6 shadow-2xl">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="text-sm text-slate-300/90">Quarterly impact</h3>
                <p className="mt-1 text-2xl font-bold text-white">+38% Pipeline Velocity</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xs text-slate-300/80">Avg. Win Rate</span>
                <strong className="text-lg text-emerald-300">+28%</strong>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-white/3">
                <p className="text-xs text-slate-200/80">Active leads</p>
                <p className="text-lg font-semibold text-white">18,400</p>
              </div>
              <div className="p-3 rounded-lg bg-white/3">
                <p className="text-xs text-slate-200/80">Avg. deal size</p>
                <p className="text-lg font-semibold text-white">$9.6k</p>
              </div>
            </div>

            <div className="mt-5">
              <p className="text-xs text-slate-300/70">Customers include</p>
              <div className="mt-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-white/6 flex items-center justify-center text-xs">Acme</div>
                <div className="w-10 h-10 rounded bg-white/6 flex items-center justify-center text-xs">Globo</div>
                <div className="w-10 h-10 rounded bg-white/6 flex items-center justify-center text-xs">Nimbus</div>
              </div>
            </div>

            <div className="mt-5 flex gap-3">
              <a href="#trial" className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-emerald-400 text-black text-sm font-semibold">Start free trial</a>
              <a href="#contact" className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-white/8 text-sm text-slate-300">Contact sales</a>
            </div>

            {/* small footer */}
            <div className="mt-4 text-xs text-slate-400/70">Enterprise-ready CRM: secure, scalable, extensible.</div>
          </div>
        </div>
      </div>

      {/* Accessibility: hidden skip link for keyboard users */}
      <a className="sr-only" href="#main-content">Skip to main content</a>

    </section>
  );
}

/*
Notes & Integration Tips:
- Place this component in a page with Tailwind configured.
- Install required packages:
  - three
  - @react-three/fiber
  - @react-three/drei
  - gsap
- Example npm install: npm i three @react-three/fiber @react-three/drei gsap
- For server-side rendering, ensure Canvas is only rendered in the browser or use dynamic import.
- You can swap the copy to reference your product name instead of generic labels.
*/
