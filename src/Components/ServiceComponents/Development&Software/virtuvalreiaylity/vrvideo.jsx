// src/components/Vrvideo.jsx
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

function Vrvideo() {
  const mainRef = useRef(null);
  const canvasRef = useRef(null);
  const headerRef = useRef(null);
  const contentSectionRef = useRef(null);

  const [loading, setLoading] = useState(true);
  const frameCount = 243; // ✅ total frames

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // ✅ Smooth scroll with Lenis
    const lenis = new Lenis({ lerp: 0.1, smooth: true });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    // ✅ Resize canvas for HD
    const setCanvasSize = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * pixelRatio;
      canvas.height = window.innerHeight * pixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(pixelRatio, pixelRatio);
    };
    setCanvasSize();

    // ✅ Frame path helper
    const currentFrame = (index) =>
      `/vr/frame_${index.toString().padStart(6, "0")}.jpg`;

    const images = [];
    const videoFrames = { frame: 0 };
    let imagesToLoad = frameCount;

    // ✅ Draw frame on canvas
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

    // ✅ Preload frames
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

    // ✅ GSAP ScrollTrigger sequence
    const setupScrollTriggers = () => {
      const totalScroll = Math.floor(frameCount * 3);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: mainRef.current,
            start: "top top",
            end: `+=${totalScroll}`,
            scrub: 1,
            pin: true,
            onUpdate: (self) => {
              const targetFrame = Math.min(
                frameCount - 1,
                Math.floor(self.progress * (frameCount - 1))
              );
              videoFrames.frame = targetFrame;
              render();
            },
          },
        })
        // Header
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
        // Content
        .fromTo(
          contentSectionRef.current,
          { opacity: 0, yPercent: 80, xPercent: -50 },
          { opacity: 1, yPercent: -50, duration: 1, ease: "power3.out" }
        );
    };

    // ✅ Handle resize
    const handleResize = () => {
      setCanvasSize();
      render();
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div ref={mainRef}>
        {/* MAIN SECTION */}
        <section className="relative w-screen h-[100svh] overflow-hidden bg-black">
          <canvas ref={canvasRef} className="z-10"></canvas>

          {/* LOADING OVERLAY */}
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black text-white z-50">
              <p>Loading VR frames...</p>
            </div>
          )}

          {/* HEADER */}
          <div
            ref={headerRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white z-20 opacity-0"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
              Immersive VR Experience
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Step into the future of interaction
            </p>
          </div>

          {/* CONTENT */}
          <div
            ref={contentSectionRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-4xl text-center text-white z-30 opacity-0"
          >
            <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent drop-shadow-xl mb-12">
              VR in Action
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              {[
                {
                  title: "Virtual Tours",
                  desc: "Explore spaces remotely with high fidelity 360° visuals.",
                },
                {
                  title: "Training Simulations",
                  desc: "Immersive learning environments for industries and education.",
                },
                {
                  title: "Gaming Experiences",
                  desc: "Next-level VR gameplay with realistic environments.",
                },
                {
                  title: "Custom VR Solutions",
                  desc: "Tailored VR apps for businesses, events, and marketing.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/5 p-6 rounded-2xl shadow-lg backdrop-blur-lg border border-white/10 hover:scale-[1.03] transition-transform"
                >
                  <h3 className="text-2xl font-bold mb-3 text-cyan-400">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="bg-gradient-to-r from-indigo-900 via-black to-purple-900 text-white py-24 px-8 md:px-16">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg">
              Ready for Virtual Reality?
            </h2>
            <p className="text-xl mb-12 text-gray-300">
              Let’s build immersive VR experiences together.
            </p>
            <a
              href="#"
              className="inline-block bg-gradient-to-r from-indigo-600 to-purple-700 px-10 py-5 rounded-full text-xl font-semibold hover:scale-105 transition-transform shadow-xl"
            >
              Start Your VR Project
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default Vrvideo;
