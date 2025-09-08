import React, { useRef, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Html, useProgress, Points, PointMaterial } from "@react-three/drei";
import { EffectComposer, Bloom, DepthOfField, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";
import { gsap } from "gsap";

/* ---------------- Loader ---------------- */
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="w-44 text-center text-sm">
        <div className="text-white/80">Loading 3D model…</div>
        <div className="h-2 bg-white/6 rounded-full mt-3 overflow-hidden">
          <div
            style={{ width: `${progress}%` }}
            className="h-2 bg-[#FF700A] rounded-full transition-all"
          ></div>
        </div>
      </div>
    </Html>
  );
}

/* ---------------- Phone Model ---------------- */
function PhoneModel({ modelPath, hoverRef }) {
  const ref = useRef();
  const { scene, materials } = useGLTF(modelPath, true);

  useEffect(() => {
    if (!materials) return;
    try {
      Object.values(materials).forEach((m) => {
        if (/glass|screen|display|front/i.test(m.name || "")) {
          m.metalness = 0.05;
          m.roughness = 0.04;
          m.clearcoat = 1;
          m.clearcoatRoughness = 0.02;
        } else {
          m.roughness = m.roughness ?? 0.35;
          m.metalness = m.metalness ?? 0.0;
        }
        if ("envMapIntensity" in m) m.envMapIntensity = 1.2;
      });
    } catch (e) {}
  }, [materials]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = 0.25 * Math.sin(t / 4) * 0.12;
    ref.current.position.y = 0.03 * Math.sin(t / 1.6);

    const h = hoverRef?.current ?? 0;
    ref.current.rotation.x += (-h * 0.08 - ref.current.rotation.x) * 0.06;
    ref.current.rotation.z += (h * 0.06 - ref.current.rotation.z) * 0.06;
  });

  return (
    <primitive ref={ref} object={scene} dispose={null} scale={[2.4, 2.4, 2.4]} />
  );
}

/* ---------------- Floating Particles ---------------- */
function FloatingParticles() {
  const ref = useRef();
  const count = 600; // number of particles
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3 + 0] = (Math.random() - 0.5) * 12; // x
    positions[i * 3 + 1] = (Math.random() - 0.5) * 8; // y
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // z
  }

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.getElapsedTime() * 0.02;
  });

  return (
    <group rotation={[0, 0, 0]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ff700a"
          size={0.08}
          sizeAttenuation
          depthWrite={false}
          opacity={0.7}
        />
      </Points>
    </group>
  );
}

/* ---------------- Main Component ---------------- */
export default function PhoneLanding({
  modelPath = "/models/apple_iphone_based_mobile_phone/scene.gltf",
}) {
  const containerRef = useRef();
  const hoverRef = useRef(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    gsap.fromTo(el, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" });
    gsap.fromTo(
      el.querySelectorAll(".cta"),
      { y: 6, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, delay: 0.25 }
    );
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    function onMove(e) {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const centerX = x - 0.5;
      hoverRef.current = centerX * 2;
    }
    function onLeave() {
      hoverRef.current = 0;
    }
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  function onSceneReady() {
    setReady(true);
  }

  const outerStyle = {
    minHeight: "100vh",
    background: "linear-gradient(180deg,#030303,#040404 40%)",
    color: "white",
    position: "relative",
    overflow: "hidden",
    fontFamily:
      "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto",
  };

  return (
    <div style={outerStyle}>
      <div ref={containerRef} style={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <header
          style={{
            maxWidth: 1200,
            margin: "28px auto 0",
            padding: "0 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: "linear-gradient(135deg,#FF700A,#00E6FF)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 10px 40px rgba(255,112,10,0.14)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M3 7h18" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>
            <div style={{ fontWeight: 700, letterSpacing: 0.4 }}>
              ThirdVizion — Mobile App Services
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <button
              className="cta"
              style={{
                background: "#FF700A",
                color: "#000",
                padding: "10px 14px",
                borderRadius: 10,
                fontWeight: 700,
                border: "none",
              }}
            >
              Request Demo
            </button>
            <button
              className="cta"
              style={{
                padding: "8px 12px",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.06)",
                color: "rgba(255,255,255,0.9)",
                background: "transparent",
              }}
            >
              Pricing
            </button>
          </div>
        </header>

        {/* Hero + 3D */}
        <main
          style={{
            maxWidth: 1200,
            margin: "36px auto",
            padding: "0 20px",
            display: "grid",
            gridTemplateColumns: "1fr 540px",
            gap: 36,
            alignItems: "center",
          }}
        >
          {/* Text */}
          <section>
            <h1
              style={{
                fontSize: 44,
                lineHeight: 1.02,
                margin: "6px 0 12px",
                fontWeight: 800,
              }}
            >
              Launch faster with{" "}
              <span style={{ color: "#FF700A" }}>high-polish</span> mobile
              experiences.
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.78)",
                fontSize: 16,
                maxWidth: 620,
              }}
            >
              We craft production-ready mobile apps and immersive marketing
              experiences — interactive 3D previews, polished onboarding, and
              high-performance builds included.
            </p>

            <div style={{ marginTop: 22, display: "flex", gap: 12 }}>
              <button
                className="cta"
                style={{
                  background: "#FF700A",
                  color: "#000",
                  padding: "12px 18px",
                  borderRadius: 12,
                  fontWeight: 700,
                }}
              >
                Get Started
              </button>
              <button
                className="cta"
                style={{
                  padding: "10px 14px",
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.06)",
                  color: "rgba(255,255,255,0.9)",
                  background: "transparent",
                }}
              >
                See Pricing
              </button>
            </div>
          </section>

          {/* 3D Card */}
          <aside
            style={{
              width: "100%",
              height: 560,
              borderRadius: 20,
              overflow: "hidden",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
              boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
              border: "1px solid rgba(255,255,255,0.03)",
              position: "relative",
            }}
          >
            <Canvas
              camera={{ position: [0, 0.45, 2.2], fov: 34 }}
              shadows
              gl={{ antialias: true, toneMappingExposure: 1.1 }}
              style={{ width: "100%", height: "100%", display: "block" }}
              onCreated={() => onSceneReady?.()}
            >
              {/* ✨ Floating background particles */}
              <FloatingParticles />

              <ambientLight intensity={0.3} />
              <directionalLight
                position={[3, 4, 2]}
                intensity={1.2}
                castShadow
              />
              <pointLight position={[-3, 1.6, -2]} intensity={0.6} color={"#ff8a3d"} />
              <spotLight
                position={[0, 5, 5]}
                angle={0.4}
                penumbra={0.3}
                intensity={1.1}
                color={"#ffffff"}
                castShadow
              />

              <Environment preset="studio" background={false} />

              <Suspense fallback={<Loader />}>
                <group position={[0, -0.08, 0]}>
                  <PhoneModel modelPath={modelPath} hoverRef={hoverRef} />
                </group>
              </Suspense>

              <OrbitControls
                enablePan={false}
                minDistance={1.6}
                maxDistance={3.2}
                enableDamping
                dampingFactor={0.09}
                minPolarAngle={Math.PI / 3.6}
                maxPolarAngle={Math.PI / 2.1}
              />

              <EffectComposer>
                <DepthOfField focusDistance={0.02} focalLength={0.02} bokehScale={4} />
                <Bloom luminanceThreshold={0.4} intensity={1.1} radius={0.9} />
                <Vignette eskil={false} offset={0.2} darkness={0.6} />
              </EffectComposer>
            </Canvas>

            <div
              style={{
                position: "absolute",
                left: 14,
                bottom: 14,
                color: "rgba(255,255,255,0.9)",
                fontSize: 12,
              }}
            >
              Drag to rotate · Hover to tilt
            </div>
          </aside>
        </main>

        <footer
          style={{
            textAlign: "center",
            padding: "18px 20px 40px",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          © {new Date().getFullYear()} ThirdVizion — Crafted with ❤️
        </footer>
      </div>
    </div>
  );
}
