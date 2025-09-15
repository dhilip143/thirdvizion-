// import React, { useRef, useEffect, useState, useMemo } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Points, PointMaterial } from "@react-three/drei";
// import * as THREE from "three";
// import {
//   getAuth,
//   signInWithCustomToken,
//   signInAnonymously,
// } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { initializeApp } from "firebase/app";

// // ✅ Safe global access
// const appId =
//   typeof window !== "undefined" && window.__app_id
//     ? window.__app_id
//     : "default-app-id";
// const firebaseConfig =
//   typeof window !== "undefined" && window.__firebase_config
//     ? JSON.parse(window.__firebase_config)
//     : {};
// const initialAuthToken =
//   typeof window !== "undefined" && window.__initial_auth_token
//     ? window.__initial_auth_token
//     : undefined;

// // ------------------------------------------------------------------
// // ParticleTunnel (background effect)
// // ------------------------------------------------------------------
// function ParticleTunnel({ isGsapLoaded }) {
//   const ref = useRef();
//   const count = 3000;

//   const [positions, colors] = useMemo(() => {
//     const positionArray = new Float32Array(count * 3);
//     const colorArray = new Float32Array(count * 3);

//     const purple = new THREE.Color("#9b2cbe");
//     const pink = new THREE.Color("#db2777");
//     const blue = new THREE.Color("#2563eb");
//     const palette = [purple, pink, blue];

//     for (let i = 0; i < count; i++) {
//       const angle = Math.random() * Math.PI * 2;
//       const radius = 1.5 + Math.random() * 1.2;
//       const x = Math.cos(angle) * radius;
//       const y = Math.sin(angle) * radius;
//       const z = (i / count) * 20 - 10;
//       positionArray.set([x, y, z], i * 3);

//       const color = palette[Math.floor(Math.random() * palette.length)];
//       color.toArray(colorArray, i * 3);
//     }
//     return [positionArray, colorArray];
//   }, [count]);

//   useFrame((state) => {
//     const t = state.clock.getElapsedTime() * 0.4;
//     if (ref.current) {
//       ref.current.rotation.z = Math.sin(t * 0.3) * 0.2;
//       ref.current.rotation.x = Math.cos(t * 0.2) * 0.1;
//     }
//   });

//   useEffect(() => {
//     if (ref.current && isGsapLoaded && window.gsap) {
//       window.gsap.to(ref.current.rotation, {
//         y: Math.PI * 2,
//         duration: 20,
//         repeat: -1,
//         ease: "linear",
//       });
//     }
//   }, [isGsapLoaded]);

//   return (
//     <group ref={ref}>
//       <Points
//         positions={positions}
//         colors={colors}
//         stride={3}
//         frustumCulled={false}
//       >
//         <PointMaterial
//           transparent
//           size={0.06}
//           sizeAttenuation
//           depthWrite={false}
//           vertexColors
//         />
//       </Points>
//     </group>
//   );
// }

// // ------------------------------------------------------------------
// // Main Page
// // ------------------------------------------------------------------
// export default function ThreeDServicePage() {
//   const [isAuthReady, setIsAuthReady] = useState(false);
//   const [isGsapLoaded, setIsGsapLoaded] = useState(false);

//   // Firebase init + auth
//   useEffect(() => {
//     try {
//       if (Object.keys(firebaseConfig).length > 0) {
//         const app = initializeApp(firebaseConfig);
//         const auth = getAuth(app);
//         getFirestore(app);

//         const signIn = async () => {
//           if (initialAuthToken) {
//             await signInWithCustomToken(auth, initialAuthToken);
//           } else {
//             await signInAnonymously(auth);
//           }
//         };

//         signIn()
//           .then(() => setIsAuthReady(true))
//           .catch(console.error);
//       }
//     } catch (e) {
//       console.error("Firebase init error:", e);
//     }
//   }, []);

//   // Load GSAP + ScrollTrigger
//   useEffect(() => {
//     const loadScripts = async () => {
//       const loadScript = (src) =>
//         new Promise((resolve) => {
//           const script = document.createElement("script");
//           script.src = src;
//           script.onload = resolve;
//           document.body.appendChild(script);
//         });

//       await loadScript(
//         "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
//       );
//       await loadScript(
//         "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
//       );
//       setIsGsapLoaded(true);
//     };

//     loadScripts();
//   }, []);

//   // Scroll animations
//   useEffect(() => {
//     if (isGsapLoaded && window.gsap && window.ScrollTrigger) {
//       const sections = window.gsap.utils.toArray(".scroll-section");
//       window.gsap.registerPlugin(window.ScrollTrigger);

//       sections.forEach((section) => {
//         window.gsap.fromTo(
//           section,
//           { opacity: 0, y: 60 },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 1.4,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: section,
//               start: "top 80%",
//               end: "bottom 20%",
//               toggleActions: "play reverse play reverse",
//             },
//           }
//         );
//       });
//     }
//   }, [isGsapLoaded]);

//   return (
//     <div className="bg-black text-white font-sans">
//       {/* Canvas Background */}
//       <div className="fixed inset-0 z-0">
//         <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
//           <ambientLight intensity={0.5} />
//           <ParticleTunnel isGsapLoaded={isGsapLoaded} />
//         </Canvas>
//       </div>

//       {/* Foreground Content */}
//       <div className="relative z-10 space-y-40">
//         {/* Hero Section */}
//         <section className="scroll-section min-h-screen flex flex-col items-center justify-center text-center px-6">
//           <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
//             Transforming Ideas into{" "}
//             <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
//               3D Reality
//             </span>
//           </h1>
//           <p className="text-lg md:text-2xl mt-6 max-w-3xl opacity-80">
//             We design cinematic-grade 3D experiences for brands, products,
//             architecture, and entertainment.
//           </p>
//           <button className="mt-10 px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-transform">
//             Start Your Project
//           </button>
//         </section>

//         {/* Features Section */}
//         <section className="scroll-section grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-8">
//           {[
//             {
//               title: "Immersive Visuals",
//               desc: "High-fidelity 3D renders that feel alive and real.",
//             },
//             {
//               title: "Dynamic Animation",
//               desc: "Motion-driven storytelling powered by cutting-edge tools.",
//             },
//             {
//               title: "Seamless Integration",
//               desc: "Assets optimized for games, VR, AR, and films.",
//             },
//           ].map((f, i) => (
//             <div
//               key={i}
//               className="bg-black/70 border border-white/20 p-8 rounded-2xl shadow-lg backdrop-blur-lg"
//             >
//               <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
//               <p className="opacity-80">{f.desc}</p>
//             </div>
//           ))}
//         </section>

//         {/* Tools Section */}
//         <section className="scroll-section max-w-5xl mx-auto px-8 text-center">
//           <h2 className="text-4xl md:text-6xl font-extrabold mb-10">
//             Powered by Industry Giants
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//             <div className="p-8 bg-gradient-to-br from-pink-500 via-purple-600 to-blue-600 rounded-3xl shadow-xl">
//               <h3 className="text-3xl font-bold mb-4">Blender Creativity</h3>
//               <p className="opacity-80">
//                 From procedural assets to immersive environments, Blender drives
//                 our artistic edge.
//               </p>
//             </div>
//             <div className="p-8 bg-gradient-to-bl from-blue-500 via-purple-600 to-pink-600 rounded-3xl shadow-xl">
//               <h3 className="text-3xl font-bold mb-4">Maya Precision</h3>
//               <p className="opacity-80">
//                 Industry-grade animation, rigging, and cinematic visuals for
//                 large-scale productions.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="scroll-section min-h-screen flex flex-col items-center justify-center text-center px-8">
//           <h2 className="text-4xl md:text-6xl font-bold mb-6">
//             Ready to Create the Future?
//           </h2>
//           <p className="text-lg md:text-2xl max-w-3xl opacity-80">
//             Whether for gaming, film, or interactive design, our 3D services are
//             tailored to your vision.
//           </p>
//           <button className="mt-10 px-10 py-5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 rounded-full font-bold text-xl shadow-xl hover:scale-105 transition-transform">
//             Let’s Build Together
//           </button>
//         </section>
//       </div>
//     </div>
//   );
// }
