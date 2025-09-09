import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import WhyChoose from "/src/Components/ServiceComponents/Data&Cloud/IAMChooseUs";
import IAMBenefits from "/src/Components/ServiceComponents/Data&Cloud/IAMBenefit";
import IAMHero from "/src/Components/ServiceComponents/Data&Cloud/IAMHero";

const IAMLanding3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 6);

    // Resize Handler
    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const point = new THREE.PointLight(0x00fff7, 1, 20);
    point.position.set(2, 2, 3);
    scene.add(point);

    // Objects (Shield, Lock, Key)
    const shield = new THREE.Mesh(
      new THREE.OctahedronGeometry(1, 0),
      new THREE.MeshStandardMaterial({ color: 0x00fff7, emissive: 0x009999 })
    );
    shield.position.x = -3;
    scene.add(shield);

    const lock = new THREE.Mesh(
      new THREE.TorusGeometry(0.8, 0.2, 16, 100),
      new THREE.MeshStandardMaterial({ color: 0x00ffaa, emissive: 0x008877 })
    );
    scene.add(lock);

    const key = new THREE.Mesh(
      new THREE.BoxGeometry(1, 0.3, 0.3),
      new THREE.MeshStandardMaterial({ color: 0x00ccff, emissive: 0x0066aa })
    );
    key.position.x = 3;
    scene.add(key);

    // GSAP Animations
    gsap.to(shield.rotation, {
      y: Math.PI * 2,
      duration: 6,
      repeat: -1,
      ease: "linear",
    });
    gsap.to(lock.rotation, {
      x: Math.PI * 2,
      duration: 8,
      repeat: -1,
      ease: "linear",
    });
    gsap.to(key.rotation, {
      z: Math.PI * 2,
      duration: 5,
      repeat: -1,
      ease: "linear",
    });

    gsap.to([shield.position, lock.position, key.position], {
      y: "+=0.5",
      yoyo: true,
      repeat: -1,
      duration: 2,
      ease: "sine.inOut",
      stagger: 0.3,
    });

    // Particles
    const particles = new THREE.Points(
      new THREE.BufferGeometry().setAttribute(
        "position",
        new THREE.Float32BufferAttribute(
          Array.from({ length: 800 }, () => (Math.random() - 0.5) * 30),
          3
        )
      ),
      new THREE.PointsMaterial({ color: 0x00fff7, size: 0.04 })
    );
    scene.add(particles);

    // Animate Loop
    const animate = () => {
      particles.rotation.y += 0.001;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", onResize);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
        {/* 3D Background */}
        <div ref={mountRef} className="absolute inset-0 z-0" />

        {/* Hero Content
        <div className="relative z-10 max-w-4xl px-6 text-center mt-20">
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-10 shadow-xl">
            <h1 className="text-5xl md:text-6xl font-extrabold text-teal-400 mb-6">
              Empower Your Business with Smarter Access
            </h1>
            <p className="text-gray-200 mb-8 text-lg">
              Identity & Access Management solutions made secure, scalable, and
              future-ready.
            </p>
            <button className="bg-teal-500 hover:bg-teal-600 text-black font-bold px-6 py-3 rounded-lg transition">
              Get Started
            </button>
          </div>
        </div> */}
        <IAMHero />
      </section>
      <WhyChoose />
      <IAMBenefits />
    </>
  );
};

export default IAMLanding3D;
