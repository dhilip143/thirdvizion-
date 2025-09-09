// src/components/PhoneLanding.jsx
import React, { useRef, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  Html,
  useProgress,
  Points,
  PointMaterial,
} from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  DepthOfField,
  Vignette,
} from "@react-three/postprocessing";
import * as THREE from "three";
import { gsap } from "gsap";

/* ---------------- Loader ---------------- */
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div
        style={{
          width: 180,
          textAlign: "center",
          fontSize: 13,
          color: "white",
        }}
      >
        <div style={{ marginBottom: 8, opacity: 0.9 }}>Loading 3D model…</div>
        <div
          style={{
            height: 8,
            background: "rgba(255,255,255,0.06)",
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background: "#FF700A",
              borderRadius: 8,
              transition: "width 0.2s ease",
            }}
          />
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
    <primitive
      ref={ref}
      object={scene}
      dispose={null}
      scale={[2.4, 2.4, 2.4]}
    />
  );
}

/* ---------------- Floating Particles ---------------- */
function FloatingParticles() {
  const ref = useRef();
  const count = 600;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3 + 0] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.getElapsedTime() * 0.02;
    const s = 0.9 + Math.sin(clock.getElapsedTime() * 0.3) * 0.05;
    ref.current.scale.set(s, s, s);
  });

  return (
    <group rotation={[0, 0, 0]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ff700a"
          size={0.06}
          sizeAttenuation
          depthWrite={false}
          opacity={0.75}
        />
      </Points>
    </group>
  );
}

/* ---------------- Service chip (UI) ---------------- */
function ServiceChip({ icon, title, subtitle, idx, refForGsap }) {
  return (
    <div
      ref={(el) => refForGsap.current?.push(el)}
      className="service-chip"
      style={{
        minWidth: 160,
        borderRadius: 14,
        padding: "12px 14px",
        display: "flex",
        gap: 12,
        alignItems: "center",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
        border: "1px solid rgba(255,255,255,0.04)",
        boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
        cursor: "pointer",
        transition: "transform 0.22s ease, box-shadow 0.22s ease",
      }}
      onMouseEnter={(e) =>
        gsap.to(e.currentTarget, {
          scale: 1.04,
          duration: 0.22,
          ease: "power2.out",
        })
      }
      onMouseLeave={(e) =>
        gsap.to(e.currentTarget, {
          scale: 1,
          duration: 0.22,
          ease: "power2.out",
        })
      }
    >
      <div
        style={{
          width: 46,
          height: 46,
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg,#FF700A,#00E6FF)",
          boxShadow: "0 10px 30px rgba(255,112,10,0.09)",
          fontSize: 20,
        }}
      >
        {icon}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 700, fontSize: 14 }}>{title}</div>
        <div
          style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 4 }}
        >
          {subtitle}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Main Component ---------------- */
export default function AppHero({
  modelPath = "/models/apple_iphone_based_mobile_phone/scene.gltf",
}) {
  const containerRef = useRef();
  const hoverRef = useRef(0);
  const shuttleRef = useRef();
  const servicesRefs = useRef([]);
  const textRef = useRef([]);

  // entrance animation for text
  useEffect(() => {
    if (textRef.current.length) {
      gsap.fromTo(
        textRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.9, ease: "power3.out" }
      );
    }
  }, []);

  // shuttle animation
  useEffect(() => {
    const s = shuttleRef.current;
    if (!s) return;
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6 });
    tl.fromTo(
      s,
      { x: -140, y: 80, rotation: -12, opacity: 0.95 },
      {
        x: 110,
        y: -40,
        rotation: 18,
        duration: 4.5,
        ease: "power2.inOut",
        opacity: 1,
      }
    ).to(s, {
      x: -140,
      y: 80,
      rotation: -12,
      duration: 4.8,
      ease: "power2.inOut",
    });
    return () => tl.kill();
  }, []);

  // service chips entrance
  useEffect(() => {
    const chips = servicesRefs.current || [];
    gsap.fromTo(
      chips,
      { y: 18, opacity: 0, scale: 0.98 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        stagger: 0.06,
        ease: "power3.out",
        delay: 0.6,
      }
    );
  }, []);

  const services = [
    {
      icon: "⚛️",
      title: "React Native",
      subtitle: "Cross-platform UIs, native feel",
    },
    { icon: "💠", title: "Flutter", subtitle: "Pixel-perfect mobile & web" },
    {
      icon: "🦅",
      title: "Swift (iOS)",
      subtitle: "High-performance native apps",
    },
    {
      icon: "🤖",
      title: "Kotlin (Android)",
      subtitle: "Modern Android engineering",
    },
    { icon: "🔥", title: "Firebase", subtitle: "Realtime, auth, hosting" },
    { icon: "🌐", title: "Node Backend", subtitle: "APIs, realtime, scaling" },
  ];

  const outerStyle = {
    minHeight: "100vh",
    background: "linear-gradient(180deg,#030303,#050505 40%,#0a0a0a 100%)",
    color: "white",
    position: "relative",
    overflow: "hidden",
    fontFamily: "Inter, ui-sans-serif, system-ui",
  };

  return (
    <div style={outerStyle}>
      {/* Hero + 3D */}
      <main
        style={{
          margin: "50px 20px",
          display: "grid",
          gridTemplateColumns: "1fr 560px",
          gap: 36,
          alignItems: "center",
        }}
      >
        {/* Text */}
        <section>
          <h1
            ref={(el) => textRef.current.push(el)}
            style={{
              fontSize: 48,
              lineHeight: 1.05,
              margin: "6px 0 16px",
              fontWeight: 800,
              background: "linear-gradient(90deg,#FF700A,#FF4B2B,#00E6FF)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Launch faster with high-polish mobile experiences.
          </h1>
          <p
            ref={(el) => textRef.current.push(el)}
            style={{
              color: "rgba(255,255,255,0.78)",
              fontSize: 17,
              maxWidth: 620,
            }}
          >
            We craft production-ready mobile apps and immersive marketing
            experiences — interactive 3D previews, polished onboarding, and
            high-performance builds included.
          </p>

          <div
            ref={(el) => textRef.current.push(el)}
            style={{ marginTop: 22, display: "flex", gap: 12 }}
          >
            <button
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

          {/* Service chips */}
          <div style={{ marginTop: 30 }}>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {services.map((s, i) => {
                if (!servicesRefs.current) servicesRefs.current = [];
                return (
                  <ServiceChip
                    key={i}
                    icon={s.icon}
                    title={s.title}
                    subtitle={s.subtitle}
                    idx={i}
                    refForGsap={servicesRefs}
                  />
                );
              })}
            </div>
          </div>
        </section>

        {/* 3D Card */}
        <aside
          style={{
            width: "100%",
            height: 560,
            borderRadius: 22,
            overflow: "hidden",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
            boxShadow: "0 25px 70px rgba(0,0,0,0.7)",
            border: "1px solid rgba(255,255,255,0.04)",
            position: "relative",
          }}
        >
          <div
            ref={shuttleRef}
            style={{
              position: "absolute",
              top: 90,
              left: -140,
              zIndex: 6,
              fontSize: 44,
              filter: "drop-shadow(0 6px 18px rgba(255,112,10,0.18))",
              pointerEvents: "none",
              transform: "rotate(-8deg)",
            }}
            aria-hidden
          >
            🛰️
          </div>

          <Canvas
            camera={{ position: [0, 0.45, 2.2], fov: 34 }}
            shadows
            gl={{ antialias: true, toneMappingExposure: 1.05 }}
            style={{ width: "100%", height: "100%", display: "block" }}
          >
            <FloatingParticles />
            <ambientLight intensity={0.35} />
            <directionalLight position={[3, 4, 2]} intensity={1.2} castShadow />
            <pointLight
              position={[-3, 1.6, -2]}
              intensity={0.6}
              color={"#ff8a3d"}
            />
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
              <DepthOfField
                focusDistance={0.02}
                focalLength={0.02}
                bokehScale={4}
              />
              <Bloom luminanceThreshold={0.38} intensity={1.0} radius={0.9} />
              <Vignette eskil={false} offset={0.2} darkness={0.6} />
            </EffectComposer>
          </Canvas>

          <div
            style={{
              position: "absolute",
              left: 14,
              bottom: 14,
              color: "rgba(255,255,255,0.7)",
              fontSize: 12,
            }}
          >
            Drag to rotate · Hover to tilt
          </div>
        </aside>
      </main>
    </div>
  );
}
