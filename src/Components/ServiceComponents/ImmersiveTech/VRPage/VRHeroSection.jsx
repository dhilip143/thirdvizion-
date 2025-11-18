import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function VRHeroSection() {
  const mainRef = useRef(null);
  const canvasRef = useRef(null);

  const [loading, setLoading] = useState(true);
  const frameCount = 192;
  const startFrame = 86400;

  useEffect(() => {
    const ctx = gsap.context(() => {

      // -----------------------
      // Canvas Setup
      // -----------------------
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

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

      // -----------------------
      // Image Preload
      // -----------------------
      const currentFrame = (index) =>
        `/vr/Timeline 1_${(startFrame + index)
          .toString()
          .padStart(8, "0")}.jpg`;

      const images = [];
      const videoFrames = { frame: 0 };
      let imagesToLoad = frameCount;

      const render = () => {
        const pixelRatio = window.devicePixelRatio || 1;
        const canvasWidth = canvas.width / pixelRatio;
        const canvasHeight = canvas.height / pixelRatio;

        context.clearRect(0, 0, canvas.width, canvas.height);

        const img = images[videoFrames.frame];
        if (img?.complete && img.naturalWidth > 0) {
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

      const onImageLoad = () => {
        imagesToLoad--;
        if (imagesToLoad === 0) {
          setLoading(false);
          render();
          setupScrollAnimations();
        }
      };

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.onload = onImageLoad;
        img.onerror = onImageLoad;
        img.src = currentFrame(i);
        images.push(img);
      }

      // -----------------------
      // SCROLLTRIGGER SETUP
      // -----------------------
      const setupScrollAnimations = () => {
        const totalScroll = frameCount * 3;

        // ❗ Animation Scroll (frame change only)
        ScrollTrigger.create({
          trigger: mainRef.current,
          start: "top 54%",  // 👉 animation starts early
          end: `+=${totalScroll}`,
          scrub: 1,
          onUpdate: (self) => {
            const targetFrame = Math.min(
              frameCount - 1,
              Math.floor(self.progress * (frameCount - 1))
            );
            videoFrames.frame = targetFrame;
            render();
          },
        });

        // ❗ Pin Scroll (only pinning)
     
      };

      // -----------------------
      // Resize Handler
      // -----------------------
      const handleResize = () => {
        setCanvasSize();
        render();
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", handleResize);

    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef}>
      <section className="relative w-full h-[100svh] flex overflow-hidden bg-black">
        <canvas ref={canvasRef} className="z-10"></canvas>

        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black text-white z-50">
            <p>Loading Immersive VR Experience...</p>
          </div>
        )}

        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div className="text-center text-white">
            <h2
              className="text-4xl md:text-6xl font-bold mb-4"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Experience The Future
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VRHeroSection;
