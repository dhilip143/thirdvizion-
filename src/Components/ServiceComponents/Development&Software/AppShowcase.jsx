// src/components/MobileAppsShowcase3D.jsx
import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Html } from "@react-three/drei";
import { gsap } from "gsap";

// Mobile services app data
const appData = [
  { name: "React Native", color1: "#61DAFB", color2: "#007ACC", icon: "⚛️" },
  { name: "Flutter", color1: "#02569B", color2: "#39CEFD", icon: "💠" },
  { name: "Swift iOS", color1: "#FF6B6B", color2: "#FF9500", icon: "🦅" },
  { name: "Kotlin Android", color1: "#A445B2", color2: "#FF9800", icon: "📱" },
  { name: "Firebase", color1: "#FFCA28", color2: "#FF5722", icon: "🔥" },
  { name: "Node Backend", color1: "#3C873A", color2: "#68A063", icon: "🌐" },
];

// 3D App Card (without background layer)
function AppCard({ color1, color2, label, icon, position }) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      {/* Icon only */}
      <Html position={[position[0], position[1], position[2] + 0.25]} center>
        <div
          style={{
            fontSize: "42px",
            color: "#fff",
            textShadow: "0 0 12px rgba(255,255,255,0.8)",
          }}
        >
          {icon}
        </div>
      </Html>

      {/* App Name */}
      <Html position={[position[0], position[1] - 1.6, position[2]]} center>
        <div
          style={{
            fontSize: "14px",
            fontWeight: "bold",
            textTransform: "uppercase",
            background: `linear-gradient(90deg, ${color1}, ${color2})`,
            WebkitBackgroundClip: "text",
            color: "transparent",
            textShadow: "0 0 12px rgba(255,255,255,0.8)",
          }}
        >
          {label}
        </div>
      </Html>
    </Float>
  );
}

// Floating glowing particles (gamified background)
function FloatingParticles() {
  const count = 50;
  const particles = [];

  for (let i = 0; i < count; i++) {
    particles.push({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
      ],
      scale: Math.random() * 0.3 + 0.1,
    });
  }

  return (
    <>
      {particles.map((p, i) => (
        <mesh key={i} position={p.position}>
          <sphereGeometry args={[p.scale, 16, 16]} />
          <meshStandardMaterial
            emissive="#00f0ff"
            emissiveIntensity={2}
            color="#ffffff"
          />
        </mesh>
      ))}
    </>
  );
}

export default function MobileAppsShowcase3D() {
  const rocketRef = useRef();

  // Rocket looping animation
  useEffect(() => {
    if (rocketRef.current) {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.to(rocketRef.current, {
        x: 400,
        y: -150,
        rotation: 180,
        duration: 5,
        ease: "power2.inOut",
      }).to(rocketRef.current, {
        x: -400,
        y: 200,
        rotation: 360,
        duration: 5,
        ease: "power2.inOut",
      });
    }
  }, []);

  return (
    <section
      style={{
        background: "linear-gradient(to bottom, #000000, #0a0a2e 90%)",
        color: "white",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Title */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "42px",
          fontWeight: "900",
          paddingTop: "30px",
          marginBottom: "30px",
          background: "linear-gradient(90deg,#61DAFB,#00D9F5,#FF4B2B)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          letterSpacing: "2px",
          textShadow: "0 0 20px rgba(255,255,255,0.9)",
        }}
      >
        Mobile App Services 🚀
      </h2>

      {/* Rocket Flying Shuttle */}
      <div
        ref={rocketRef}
        style={{
          position: "absolute",
          top: "100px",
          left: "-100px",
          fontSize: "60px",
          filter: "drop-shadow(0 0 15px #fff)",
        }}
      >
        🛰️
      </div>

      {/* 3D Canvas */}
      <Canvas style={{ height: "520px", width: "100%" }}>
        <ambientLight intensity={0.6} />
        <spotLight
          position={[10, 15, 10]}
          angle={0.3}
          penumbra={1}
          intensity={1.5}
          castShadow
        />

        {/* Floating glowing particles */}
        <FloatingParticles />

        <OrbitControls enableZoom={false} />

        {appData.map((app, i) => (
          <AppCard
            key={i}
            label={app.name}
            color1={app.color1}
            color2={app.color2}
            icon={app.icon}
            position={[
              Math.sin(i * 1.2) * 3,
              Math.cos(i * 1.3) * 2,
              (i % 2 === 0 ? -1 : 1) * 0.6,
            ]}
          />
        ))}
      </Canvas>
    </section>
  );
}
