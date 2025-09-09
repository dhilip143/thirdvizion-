import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { gsap } from "gsap";
import { Canvas } from "@react-three/fiber";
import { Sparkles, Stars } from "@react-three/drei";

// SparkleField background (canvas stars)
function SparkleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    let dots = Array.from({ length: 90 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5 + 0.5,
      s: Math.random() * 1.2 + 0.2,
      a: Math.random() * Math.PI * 2,
    }));

    function draw() {
      ctx.clearRect(0, 0, w, h);
      dots.forEach((d) => {
        d.a += 0.004 * d.s;
        d.x += Math.cos(d.a) * 0.2;
        d.y += Math.sin(d.a) * 0.2;
        if (d.x < 0) d.x = w;
        if (d.x > w) d.x = 0;
        if (d.y < 0) d.y = h;
        if (d.y > h) d.y = 0;

        const g = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r * 3);
        g.addColorStop(0, "rgba(255,255,255,0.9)");
        g.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r * 3, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(draw);
    }
    draw();

    window.addEventListener("resize", () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-20" />;
}

export default function Game3DSection() {
  const mountRef = useRef(null);
  const svgPathRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene + Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.0025);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.outputEncoding = THREE.sRGBEncoding;
    mount.appendChild(renderer.domElement);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      40,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1.2, 5);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Lights
    const rimLight = new THREE.DirectionalLight(0xffb86b, 0.7);
    rimLight.position.set(-5, 5, 5);
    scene.add(rimLight);

    const fill = new THREE.PointLight(0x9be7ff, 0.6, 20);
    fill.position.set(3, 1, -3);
    scene.add(fill);

    const ambient = new THREE.AmbientLight(0x222222, 0.6);
    scene.add(ambient);

    // Ground
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(40, 40),
      new THREE.MeshStandardMaterial({
        color: 0x000000,
        transparent: true,
        opacity: 0.12,
      })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1.4;
    scene.add(ground);

    // Central objects
    const group = new THREE.Group();
    scene.add(group);

    const torus = new THREE.Mesh(
      new THREE.TorusGeometry(1.1, 0.25, 48, 120),
      new THREE.MeshPhysicalMaterial({
        color: 0x1de9b6,
        metalness: 0.35,
        roughness: 0.05,
        clearcoat: 0.6,
        clearcoatRoughness: 0.1,
        emissive: 0x00ffb6,
        emissiveIntensity: 0.45,
      })
    );
    torus.rotation.x = Math.PI * 0.15;
    group.add(torus);

    const sphere = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.6, 3),
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: 0x88f2ff,
        emissiveIntensity: 0.2,
      })
    );
    group.add(sphere);

    // Animated shards
    const shards = [];
    const shardGeom = new THREE.BoxGeometry(0.06, 0.6, 0.02);
    for (let i = 0; i < 30; i++) {
      const mat = new THREE.MeshStandardMaterial({
        color: new THREE.Color().setHSL(0.55 + Math.random() * 0.12, 0.9, 0.5),
        emissive: 0x66f3ff,
        emissiveIntensity: 0.2,
      });
      const mesh = new THREE.Mesh(shardGeom, mat);
      const angle = Math.random() * Math.PI * 2;
      const radius = 1.6 + Math.random() * 1.2;
      mesh.position.set(
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 0.8,
        Math.sin(angle) * radius
      );
      group.add(mesh);
      shards.push(mesh);
    }

    // Animation loop
    const clock = new THREE.Clock();
    function animate() {
      const t = clock.getElapsedTime();
      group.rotation.y = t * 0.18;
      torus.rotation.x = Math.sin(t * 0.6) * 0.08 + Math.PI * 0.15;
      sphere.rotation.y = t * -0.28;
      shards.forEach((s, i) => {
        const a = t * 0.3 + i;
        const r = 2 + i * 0.05;
        s.position.x = Math.cos(a) * r;
        s.position.z = Math.sin(a) * r;
        s.rotation.x += 0.01;
        s.rotation.y += 0.008;
      });
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();

    // Neon SVG animation (continuous loop)
    const svgPath = svgPathRef.current;
    let svgTween;
    if (svgPath) {
      const pathLength = svgPath.getTotalLength();
      svgPath.style.strokeDasharray = pathLength;
      svgPath.style.strokeDashoffset = pathLength;
      // animate strokeDashoffset from pathLength -> -pathLength to create a continuous loop
      svgTween = gsap.to(svgPath, {
        strokeDashoffset: -pathLength,
        duration: 6,
        ease: "linear",
        repeat: -1,
        yoyo: false,
      });
    }

    return () => {
      controls.dispose();
      renderer.dispose();
      if (svgTween) svgTween.kill();
    };
  }, []);

  return (
    <section className="relative w-full bg-black text-white py-20 overflow-hidden">
      {/* Sparkle background */}
      <SparkleField />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Text Content (updated to React/JS gaming focus) */}
          <div>
            <h2 className="font-inter-tight text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-green-400 text-transparent bg-clip-text">
              React & JavaScript Game Labs
            </h2>
            <p className="mt-4 text-white/80 max-w-xl">
              We prototype, iterate, and ship browser-native games using React,
              Three.js, Babylon.js and modern JS toolchains. Fast dev loops,
              playable demos, and production-ready WebGL builds.
            </p>

            <div className="mt-6 flex gap-4">
              <a className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-green-400 text-black font-bold shadow-lg hover:scale-105 transition">
                Launch Demo
              </a>
              <a className="px-6 py-3 rounded-2xl border border-white/20 text-white/80 hover:text-white transition">
                View JS Tooling
              </a>
            </div>
          </div>

          {/* 3D Scene + Neon + Extra Sparkles/Stars */}
          <div className="relative h-[420px] w-full rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-black/25">
            <div ref={mountRef} className="absolute inset-0" />

            {/* React-Three-Fiber Overlay with Sparkles + Stars */}
            <Canvas className="absolute inset-0">
              <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
              <Sparkles count={120} scale={[6, 6, 6]} size={2.5} speed={0.8} color="#00fff7" />
            </Canvas>

            {/* Neon SVG line (now animates as a continuous loop) */}
            <svg
              viewBox="0 0 800 420"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full pointer-events-none"
            >
              <defs>
                <linearGradient id="neonGrad" x1="0" x2="1">
                  <stop offset="0%" stopColor="#00fff0" />
                  <stop offset="100%" stopColor="#00b3ff" />
                </linearGradient>
              </defs>
              <path
                ref={svgPathRef}
                d="M30 360 C180 280, 320 80, 470 200 C620 320, 760 160, 770 80"
                fill="none"
                stroke="url(#neonGrad)"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
