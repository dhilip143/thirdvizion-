import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

function VRHeroSection() {
  const mainRef = useRef(null);
  const canvasRef = useRef(null);
  const headerRef = useRef(null);

  const [loading, setLoading] = useState(true);
  const frameCount = 192; // ✅ total frames
  const startFrame = 86400; // ✅ Timeline 1_00086400
  const endFrame = 86591;   // ✅ Timeline 1_00086591

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      smoothWheel: true,
      smoothtouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    const sections = gsap.utils.toArray("section");

    sections.forEach((section, index) => {
      const img = section.querySelector("img");
      const text = section.querySelector(".overlay-content"); // ✅ select text container
      gsap.set(img, { transformOrigin: "center center" });

      // Alternate direction: even index = left → right, odd index = right → left
      const fromX = index % 2 === 0 ? -800 : 400;
      const toX = index % 2 === 0 ? 400 : -400;
      const centerX = index % 2 === 0 ? -300 : 300;

      const textFromX = index % 2 === 0 ? 300 : -300; // opposite for text
      const textToX = 0;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "clamp(top bottom-=100)",
          end: "clamp(bottom top+=200)",
          scrub: true,
        },
      });

      tl.fromTo(
        img,
        { scale: 0.2, x: fromX },
        { scale: 0.7, x: centerX, ease: "power2.out" }
      ).to(img, { scale: 0.3, x: toX, ease: "power2.in" });

      // Animate Text (slides from opposite side)
      if (text) {
        tl.fromTo(
          text,
          { opacity: 0, x: textFromX },
          { opacity: 1, x: textToX, ease: "power2.out" },
          0.1 // slightly delayed so it feels smooth
        );
      }
    });

    ScrollTrigger.refresh();
  }, []);

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

    // Frame loader (Timeline naming format)
    const currentFrame = (index) =>
      `/vr/Timeline 1_${(startFrame + index).toString().padStart(8, "0")}.jpg`;

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

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.onload = onLoad;
      img.onerror = onLoad;
      img.src = currentFrame(i);
      images.push(img);
    }

    const setupScrollTriggers = () => {
      const totalScroll = frameCount * 3; // Smooth scroll length

      gsap.timeline({
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
        // Header fade in/out
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
        });
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
    <div ref={mainRef}>
      <section className="relative w-full h-[100svh] flex overflow-hidden bg-black">
        <canvas ref={canvasRef} className="z-10"></canvas>

        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black text-white z-50">
            <p>Loading Your VR experince....</p>
          </div>
        )}

        {/* HEADER */}
        <div
          ref={headerRef}
          className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white z-20 opacity-0"
        >
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold  
             text-purple-500 drop-shadow-lg text-center font-inter-tight"
          >
            Your Gateway to Virtual Worlds
          </h1>

        </div>
      </section>
    </div>
  );
}

export default VRHeroSection;
