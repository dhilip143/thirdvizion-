import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly scroll to top whenever route changes
    window.scrollTo({ top: 0, behavior: "auto" });

    // If using GSAP ScrollTrigger, refresh it
    if (window.ScrollTrigger) {
      window.ScrollTrigger.refresh(true);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
