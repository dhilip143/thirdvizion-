// src/components/ThreeDServices.jsx
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

import clientone from "/src/assets/AboutImages/aboutclient/figma.png";
import clienttwo from "/src/assets/AboutImages/aboutclient/django.png";
import clientthree from "/src/assets/AboutImages/aboutclient/python.png";
import clientfour from "/src/assets/AboutImages/aboutclient/Blender-.png";
// import Three from "../../../Components/3dservicecomp/three";

gsap.registerPlugin(ScrollTrigger);

function ThreeDServices() {
  const mainRef = useRef(null);
  const canvasRef = useRef(null);
  const headerRef = useRef(null);
  const contentSectionRef = useRef(null);

  const [loading, setLoading] = useState(true);
  const frameCount = 599;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Smooth scroll
    const lenis = new Lenis({ lerp: 0.1, smooth: true });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Canvas resize
    const setCanvasSize = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * pixelRatio;
      canvas.height = window.innerHeight * pixelRatio;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(pixelRatio, pixelRatio);
    };
    setCanvasSize();

    // Frame loader
    const currentFrame = (index) =>
      `/Frames/frame_${index.toString().padStart(6, "0")}.jpg`;

    const images = [];
    const videoFrames = { frame: 0 };
    let imagesToLoad = frameCount;

    const render = () => {
      const canvasWidth = canvas.width / (window.devicePixelRatio || 1);
      const canvasHeight = canvas.height / (window.devicePixelRatio || 1);
      context.clearRect(0, 0, canvas.width, canvas.height);

      const img = images[videoFrames.frame];
      if (img && img.complete && img.naturalWidth > 0) {
        const imageAspect = img.naturalWidth / img.naturalHeight;
        const canvasAspect = canvasWidth / canvasHeight;
        let drawWidth, drawHeight, drawX, drawY;

        if (imageAspect > canvasAspect) {
          drawHeight = canvasHeight;
          drawWidth = drawHeight * imageAspect;
          drawX = (canvasWidth - drawWidth) / 2;
          drawY = 0;
        } else {
          drawWidth = canvasWidth;
          drawHeight = drawWidth / imageAspect;
          drawX = 0;
          drawY = (canvasHeight - drawHeight) / 2;
        }
        context.drawImage(img, drawX, drawY, drawWidth, drawHeight);
      }
    };

    const onLoad = () => {
      imagesToLoad--;
      if (imagesToLoad === 0) {
        setLoading(false);
        render();
        setupScrollTriggers();
      }
    };

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.onload = onLoad;
      img.onerror = onLoad;
      img.src = currentFrame(i);
      images.push(img);
    }

    const setupScrollTriggers = () => {
      // ✅ Scroll tuned so no white gap and no last-frame repeat
      const totalScroll = Math.floor(frameCount * 2.85);

      gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: `+=${totalScroll}`,
          scrub: 1,
          pin: true,
          onUpdate: (self) => {
            // lock frame between 0 and frameCount-1
            const targetFrame = Math.min(
              frameCount - 1,
              Math.floor(self.progress * (frameCount - 1))
            );
            videoFrames.frame = targetFrame;
            render();
          },
        },
      })
        // Header animation
        .fromTo(
          headerRef.current,
          { opacity: 0, scale: 0.7, yPercent: -50, xPercent: -50 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
        )
        .to(headerRef.current, {
          opacity: 0,
          scale: 1.2,
          duration: 0.6,
          ease: "power2.in",
        })
        // Content animation
        .fromTo(
          contentSectionRef.current,
          { opacity: 0, yPercent: 80, xPercent: -50 },
          { opacity: 1, yPercent: -50, duration: 1, ease: "power3.out" }
        );
    };

    const handleResize = () => {
      setCanvasSize();
      render();
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
      lenis.destroy();
    };
  }, []);

  return (
<>
<div ref={mainRef}>
      <section className="relative w-screen h-[100svh] overflow-hidden bg-black">
        <canvas ref={canvasRef} className="z-10"></canvas>

        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black text-white z-50">
            <p>Loading 3D frames...</p>
          </div>
        )}

        {/* HEADER */}
        <div
          ref={headerRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white z-20 opacity-0"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
            Next-Gen 3D Development
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Crafted for innovation, powered by creativity
          </p>
          <div className="flex gap-6 justify-center mt-8">
            <img src={clientone} alt="figma" className="w-12 h-12" />
            <img src={clienttwo} alt="django" className="w-12 h-12" />
            <img src={clientthree} alt="python" className="w-12 h-12" />
            <img src={clientfour} alt="blender" className="w-12 h-12" />
          </div>
        </div>

        {/* CONTENT */}
        <div
          ref={contentSectionRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-6xl text-center text-white z-30 opacity-0"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 to-indigo-600 bg-clip-text text-transparent drop-shadow-xl mb-12">
            Our 3D Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-10 text-left">
            {[
              {
                title: "Architectural Visualization",
                desc: "Stunning photorealistic 3D renderings to showcase your spaces before they are built.",
              },
              {
                title: "Product Prototyping",
                desc: "Interactive 3D models for marketing, design reviews, and digital showcases.",
              },
              {
                title: "Immersive Experiences",
                desc: "Engaging 3D environments for web, AR, and VR that capture attention.",
              },
              {
                title: "Custom 3D Modeling",
                desc: "Tailored models for gaming, animation, simulation, and virtual production.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 p-8 rounded-2xl shadow-lg backdrop-blur-lg border border-white/10 hover:scale-[1.03] transition-transform"
              >
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-900 via-black to-purple-900 text-white py-28 px-8 md:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-pink-500 via-indigo-400 to-cyan-500 bg-clip-text text-transparent drop-shadow-lg">
            Ready to Build with Us?
          </h2>
          <p className="text-xl mb-12 text-gray-300">
            Let’s create futuristic 3D experiences that set you apart.
          </p>
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-700 px-10 py-5 rounded-full text-xl font-semibold hover:scale-105 transition-transform shadow-xl"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
    {/* <Three/> */}
    </>
  );
}

export default ThreeDServices;
