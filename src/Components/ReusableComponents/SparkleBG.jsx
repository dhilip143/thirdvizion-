import { useEffect, useRef } from "react";

export default function SparkleBg({
  count = 90, // number of sparkles
  radius = [0.5, 2], // [min, max] radius
  speed = 0.2, // movement speed multiplier
  strength = 3, // glow size multiplier
  color = "255,255,255", // RGB format
  opacity = 0.8, // overall opacity
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;
    const DPR = Math.min(2, window.devicePixelRatio || 1);

    const resize = () => {
      canvas.width = canvas.clientWidth * DPR;
      canvas.height = canvas.clientHeight * DPR;
    };
    resize();
    window.addEventListener("resize", resize);

    // Generate dots based on props
    const dots = Array.from({ length: count }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: (Math.random() * (radius[1] - radius[0]) + radius[0]) * DPR,
      s: Math.random() * 0.6 + 0.2,
      a: Math.random() * Math.PI * 2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const d of dots) {
        d.a += 0.004 * d.s;
        d.x += Math.cos(d.a) * speed;
        d.y += Math.sin(d.a) * speed;

        // Wrap around edges
        if (d.x < 0) d.x = canvas.width;
        if (d.x > canvas.width) d.x = 0;
        if (d.y < 0) d.y = canvas.height;
        if (d.y > canvas.height) d.y = 0;

        ctx.globalAlpha = opacity;

        // Glow gradient
        const g = ctx.createRadialGradient(
          d.x,
          d.y,
          0,
          d.x,
          d.y,
          d.r * strength
        );
        g.addColorStop(0, `rgba(${color}, 0.7)`);
        g.addColorStop(1, `rgba(${color}, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r * strength, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [count, radius, speed, strength, color, opacity]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
    <canvas ref={canvasRef} className="absolute inset-0 -z-10 h-full w-full" />
    </div>
  );
}
