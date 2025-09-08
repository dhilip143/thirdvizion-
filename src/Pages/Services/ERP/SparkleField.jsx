import React, { useEffect, useRef } from "react";

function SparkleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const DPR = window.devicePixelRatio || 1;

    const resize = () => {
      canvas.width = canvas.clientWidth * DPR;
      canvas.height = canvas.clientHeight * DPR;
    };
    resize();
    window.addEventListener("resize", resize);

    const dots = Array.from({ length: 120 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: (Math.random() * 2 + 1) * DPR,
      s: Math.random() * 1 + 0.5,
      a: Math.random() * Math.PI * 2,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const d of dots) {
        d.a += 0.004 * d.s;
        d.x += Math.cos(d.a) * 0.5;
        d.y += Math.sin(d.a) * 0.5;

        // Wrap around edges
        if (d.x < 0) d.x = canvas.width;
        if (d.x > canvas.width) d.x = 0;
        if (d.y < 0) d.y = canvas.height;
        if (d.y > canvas.height) d.y = 0;

        ctx.globalAlpha = 0.9;
        const g = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r * 4);
        g.addColorStop(0, "rgba(0,255,255,1)");   // neon teal center
        g.addColorStop(1, "rgba(0,255,255,0)");   // fade to transparent
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r * 4, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
}

export default function SparklePage() {
  return (
    <div className="relative bg-black min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Sparkle Background */}
      <SparkleField />

      {/* Foreground Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-cyan-400">
          Neon Sparkle Background
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          This page has animated dots glowing in the background.
        </p>
      </div>
    </div>
  );
}
