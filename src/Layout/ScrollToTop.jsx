import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const lenis = useLenis(); // ✅ Access the existing Lenis instance

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true }); // ✅ instantly jump to top
    }
  }, [pathname, lenis]);

  return null;
};

export default ScrollToTop;
