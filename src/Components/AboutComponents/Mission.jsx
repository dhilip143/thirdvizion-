import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// --- 3D PNG Logo ---
function ExtrudedLogo({ hovered }) {
  const group = useRef();
  const texture = useTexture("/src/assets/AboutImages/tird.png"); // ✅ Load PNG texture

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.15;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
  });

  return (
    <group ref={group} scale={1.2}>
      <mesh castShadow receiveShadow>
        <planeGeometry args={[60, 60]} /> {/* ✅ Flat plane for PNG */}
        <meshStandardMaterial
          map={texture}
          transparent
          metalness={0.6}
          roughness={0.35}
          emissive={
            hovered
              ? new THREE.Color("#00ffaa").multiplyScalar(0.15)
              : new THREE.Color("black")
          }
        />
      </mesh>
    </group>
  );
}

export default function Mission() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const canvasWrapperRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        x: -80,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(contentRef.current.querySelectorAll(".fade-up"), {
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.fromTo(
        canvasWrapperRef.current,
        { scale: 0.88, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.0,
          ease: "elastic.out(1, 0.6)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let hoverTl;
    if (hovered) {
      hoverTl = gsap.to(sectionRef.current.querySelector(".logo-shell"), {
        scale: 1.06,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      hoverTl = gsap.to(sectionRef.current.querySelector(".logo-shell"), {
        scale: 1,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)",
      });
    }
    return () => hoverTl && hoverTl.kill();
  }, [hovered]);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen flex items-center justify-center bg-black text-white py-20 px-6"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Text content */}
        <div className="space-y-6 px-2 md:px-6">
          <h3
            ref={titleRef}
            className="text-sm uppercase tracking-widest text-emerald-300"
          >
            ThirdVizion
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Our Mission & Vision
          </h2>

          <div ref={contentRef} className="text-gray-300 space-y-4">
            <p className="fade-up">
              We are a service company that blends creativity, technology and
              strategy — delivering immersive digital experiences that shift
              perspectives. We call it{" "}
              <span className="font-semibold text-white">ThirdVizion</span>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="fade-up bg-gray-900/40 p-4 rounded-2xl">
                <h4 className="text-sm font-semibold uppercase text-emerald-300">
                  Vision
                </h4>
                <p className="mt-2 text-sm text-gray-300">
                  To be the third eye for brands — revealing new angles through
                  bold design and 3D-driven storytelling.
                </p>
              </div>

              <div className="fade-up bg-gray-900/40 p-4 rounded-2xl">
                <h4 className="text-sm font-semibold uppercase text-amber-300">
                  Mission
                </h4>
                <p className="mt-2 text-sm text-gray-300">
                  Deliver high-impact digital solutions using React, GSAP & WebGL
                  to make complex ideas tangible and playful.
                </p>
              </div>
            </div>

            <div className="fade-up pt-2">
              <button
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="inline-flex items-center gap-3 bg-emerald-400/10 border border-emerald-400 text-emerald-300 px-4 py-2 rounded-full text-sm hover:bg-emerald-400/6 transition"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>

        {/* Right: 3D Canvas */}
        <div className="flex items-center justify-center">
          <div
            ref={canvasWrapperRef}
            className="logo-shell w-full max-w-md rounded-3xl p-4 bg-gradient-to-b from-white/3 to-white/2 backdrop-blur-md border border-white/6 shadow-2xl"
          >
            <Canvas
              shadows
              camera={{ position: [0, 0, 180], fov: 45 }}
              onCreated={({ gl }) => {
                gl.setClearColor("#000000", 0);
                gl.toneMapping = THREE.ACESFilmicToneMapping;
                gl.outputEncoding = THREE.sRGBEncoding;
              }}
              style={{ height: 420, borderRadius: 24 }}
            >
              <ambientLight intensity={0.6} />
              <directionalLight
                position={[50, 50, 50]}
                intensity={1.2}
                castShadow
              />
              <pointLight position={[-30, -30, -30]} intensity={0.25} />

              <group
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                onClick={() => {
                  gsap.fromTo(
                    canvasWrapperRef.current,
                    { rotateZ: -0.03 },
                    {
                      rotateZ: 0.03,
                      duration: 0.12,
                      yoyo: true,
                      repeat: 5,
                      ease: "power1.inOut",
                    }
                  );
                }}
              >
                <ExtrudedLogo hovered={hovered} />
              </group>

              <OrbitControls
                enablePan={false}
                enableZoom={true}
                minDistance={120}
                maxDistance={250}
              />
            </Canvas>

            {/* Overlay inside canvas box for brand mark */}
            <div className="mt-4 text-center">
              <div className="text-xs uppercase tracking-wider text-gray-400">
                ThirdVizion
              </div>
              <div className="text-sm font-semibold text-white">
                Creative · Tech · Motion
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
