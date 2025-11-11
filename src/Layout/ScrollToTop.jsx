import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const lenis = useLenis(); // get Lenis instance

  useEffect(() => {
    // Wait for Framer Motion exit animation (~800ms)
    const timer = setTimeout(() => {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
        console.log("✅ ReactLenis scroll reset triggered");
      } else {
        window.scrollTo(0, 0);
        console.log("✅ Fallback window scroll reset triggered");
      }

      // Refresh GSAP triggers if present
      if (window.ScrollTrigger) {
        window.ScrollTrigger.refresh(true);
        console.log("🔄 ScrollTrigger refreshed");
      }
    }, 900); // adjust delay to match your Framer Motion exit duration (ms)

    return () => clearTimeout(timer);
  }, [pathname, lenis]);

  return null;
};

export default ScrollToTop;
