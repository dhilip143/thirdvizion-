import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

// GSAP பிளகினை ஒரு முறை மட்டும் பதிவு செய்தால் போதும்
gsap.registerPlugin(ScrollTrigger);

function VRHeroSection() {
  const mainRef = useRef(null);
  const canvasRef = useRef(null);

  const [loading, setLoading] = useState(true);
  const frameCount = 192;
  const startFrame = 86400;

  useEffect(() => {
    // GSAP Context-ஐத் தொடங்குகிறோம். இது இந்த component-க்குள் மட்டும் செயல்படும்.
    const ctx = gsap.context(() => {
      // 1. Lenis (Smooth Scroll) Setup
      // ஒரே ஒரு Lenis instance-ஐ மட்டும் உருவாக்குகிறோம்.
      const lenis = new Lenis({
        lerp: 0.1,
        smoothWheel: true,
        smoothtouch: true,
      });

      // GSAP Ticker-ஐப் பயன்படுத்தி Lenis-ஐ இயக்குகிறோம்
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);

      // Lenis scroll-ஐ ScrollTrigger-க்கு update செய்கிறோம்
      lenis.on("scroll", ScrollTrigger.update);

      // 2. Canvas Setup
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      const setCanvasSize = () => {
        const pixelRatio = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * pixelRatio;
        canvas.height = window.innerHeight * pixelRatio;
        canvas.style.width = window.innerWidth + "px";
        canvas.style.height = window.innerHeight + "px";
        context.setTransform(1, 0, 0, 1, 0, 0); // context-ஐ reset செய்கிறோம்
        context.scale(pixelRatio, pixelRatio);
      };

      setCanvasSize();

      // 3. Image Preloading
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
          // "object-fit: cover" போன்றதொரு fill logic
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
          // படங்கள் load ஆன பிறகு ScrollTrigger-ஐ உருவாக்குகிறோம்
          setupScrollTrigger();
        }
      };

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.onload = onImageLoad;
        img.onerror = onImageLoad; // Error ஆனாலும், load count-ஐக் குறைக்க வேண்டும்
        img.src = currentFrame(i);
        images.push(img);
      }

      // 4. ScrollTrigger Setup
      const setupScrollTrigger = () => {
        const totalScroll = frameCount * 3; // Scroll தூரத்தை சரிசெய்யவும்

        gsap.timeline({
          scrollTrigger: {
            trigger: mainRef.current, // mainRef-ஐ trigger ஆகப் பயன்படுத்துகிறோம்
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
              render(); // Scroll செய்யும்போது canvas-ஐ re-render செய்கிறோம்
            },
          },
        });
      };

      // 5. Resize Handling
      const handleResize = () => {
        setCanvasSize();
        render(); // Resize செய்யும்போது canvas-ஐ மீண்டும் வரைகிறோம்
        ScrollTrigger.refresh(); // ScrollTrigger-ஐயும் refresh செய்கிறோம்
      };

      window.addEventListener("resize", handleResize);

      // 6. Cleanup Function
      // இதுதான் மிக முக்கியம். Component unmount ஆகும்போது (வேறு பக்கத்திற்குச் செல்லும்போது) இது இயங்கும்.
      return () => {
        window.removeEventListener("resize", handleResize);
        lenis.destroy(); // Lenis-ஐ அழிக்கிறோம்
        // GSAP Ticker-லிருந்து Lenis-ஐ நீக்குகிறோம் (ctx.revert() இதைச் செய்யாது)
        gsap.ticker.remove((time) => {
            lenis.raf(time * 1000);
        });
        // ctx.revert() இந்த context-ல் உருவாக்கப்பட்ட அனைத்து
        // GSAP animations மற்றும் ScrollTriggers-ஐ மட்டும் நீக்கும்.
        // இது மற்ற பக்கங்களைப் பாதிக்காது.
      };
    }, mainRef); // mainRef-ஐ context-இன் scope-ஆக அமைக்கிறோம்

    // useEffect-ன் cleanup function
    return () => ctx.revert();
  }, []); // இந்த effect ஒரு முறை மட்டும் இயங்க வேண்டும்

  return (
    <div ref={mainRef}>
      <section className="relative w-full h-[100svh] flex overflow-hidden bg-black">
        <canvas ref={canvasRef} className="z-10"></canvas>

        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black text-white z-50">
            <p>Loading Immersive VR Experience...</p>
          </div>
        )}

        {/* Overlay Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div className="text-center text-white">
            <h2
              className="text-4xl md:text-6xl font-bold mb-4"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Experience The Future
            </h2>
            {/* <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Scroll to explore our immersive VR solutions and capabilities
            </p> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default VRHeroSection;