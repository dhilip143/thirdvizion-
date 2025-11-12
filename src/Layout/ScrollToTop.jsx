import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Wait for Framer Motion exit animation (~800ms)
    // const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      console.log("✅ Window scroll reset triggered");

      // Refresh GSAP triggers if present
    //   if (window.ScrollTrigger) {
    //     window.ScrollTrigger.refresh(true);
    //     console.log("🔄 ScrollTrigger refreshed");
    //   }
    // }, 900); // adjust delay to match your Framer Motion exit duration (ms)

    // return () => clearTimeout(timer);
  // }, [pathname]);

  // return null;
})
}

export default ScrollToTop;
