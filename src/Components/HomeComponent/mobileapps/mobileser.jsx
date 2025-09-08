// src/components/MobileAppsShowcase3D.jsx
import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Html } from "@react-three/drei";
import { gsap } from "gsap";

// App data (gamified icons + gradients)
const appData = [
  { name: "Nova Chat", color1: "#FF6B6B", color2: "#FFD93D", icon: "💬" },
  { name: "Luma Music", color1: "#00F5A0", color2: "#00D9F5", icon: "🎵" },
  { name: "HyperPix", color1: "#A445B2", color2: "#FF0066", icon: "✨" },
  { name: "Orbit Social", color1: "#42A5F5", color2: "#478ED1", icon: "🌐" },
  { name: "Pulse Stream", color1: "#FF9F1C", color2: "#FF4040", icon: "📡" },
  { name: "Zen Play", color1: "#34D399", color2: "#059669", icon: "🎮" },
];

// 3D App Card
function AppCard({ color1, color2, label, icon, position }) {
  const meshRef = useRef();

  useEffect(() => {
    if (!meshRef.current) return;
    meshRef.current.scale.set(1.2, 1.2, 0.4);
  }, []);

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      {/* Card Base */}
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[1.5, 1.5, 0.3]} />
        <meshStandardMaterial
          metalness={0.6}
          roughness={0.3}
          color={color1}
        />
      </mesh>

      {/* Icon inside */}
      <Html position={[position[0], position[1], position[2] + 0.25]} center>
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "14px",
            background: `linear-gradient(135deg, ${color1}, ${color2})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "28px",
            color: "#fff",
            boxShadow: "0 0 18px rgba(255,255,255,0.7)",
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

// Floating glowing particles (instead of plain dots/stars)
function FloatingParticles() {
  const count = 40;
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

  // Rocket looping + rotating animation with GSAP
  useEffect(() => {
    if (rocketRef.current) {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.to(rocketRef.current, {
        x: 400,
        y: -150,
        rotation: 180,
        duration: 5,
        ease: "power2.inOut",
      })
        .to(rocketRef.current, {
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
          fontSize: "40px",
          fontWeight: "900",
          paddingTop: "30px",
          marginBottom: "30px",
          background: "linear-gradient(90deg,#00F5A0,#00D9F5,#FF4B2B)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          letterSpacing: "2px",
          textShadow: "0 0 20px rgba(255,255,255,0.9)",
        }}
      >
        Futuristic App Universe
      </h2>

      {/* Rocket Flying */}
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
        🚀
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
