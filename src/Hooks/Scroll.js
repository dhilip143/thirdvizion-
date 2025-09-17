import { useEffect, useRef } from "react";

export default function useScroll(effect = "blink") {
  const sectionsRef = useRef([]);
  const contentsRef = useRef([]);
  const rafRef = useRef(null);

  useEffect(() => {
    const getViewportHeight = () =>
      window.innerHeight || document.documentElement.clientHeight;

    const update = () => {
      const vh = getViewportHeight();

      sectionsRef.current.forEach((sec, i) => {
        const contentEl = contentsRef.current[i];
        if (!sec || !contentEl) return;

        const rect = sec.getBoundingClientRect();
        const centerDistance = rect.top + rect.height / 2 - vh / 2;
        let p = centerDistance / (vh / 2);
        p = Math.max(-1, Math.min(1, p));

        let transform = "none";
        let opacity = Math.max(0, 1 - Math.abs(p));
        let filter = "none";

        switch (effect) {
          case "horizontal-scroll":
            transform = `translateX(${-p * 100}%)`;
            break;
          case "backwards-scroll":
            transform = `translateY(${p * 100}%)`;
            break;
          case "zoom-scroll":
            transform = `scale(${1 + Math.abs(p) * 0.5})`;
            filter = `blur(${Math.abs(p) * 12}px)`;
            break;
          default:
            filter = `blur(${Math.abs(p) * 12}px) contrast(${
              1 + (1 - Math.abs(p)) * 3
            })`;
            break;
        }

        contentEl.style.transform = transform;
        contentEl.style.opacity = opacity;
        contentEl.style.filter = filter;
        contentEl.style.visibility = opacity < 0.02 ? "hidden" : "visible";
      });

      rafRef.current = requestAnimationFrame(update);
    };

    rafRef.current = requestAnimationFrame(update);
    return () => rafRef.current && cancelAnimationFrame(rafRef.current);
  }, [effect]);

  return { sectionsRef, contentsRef };
}
