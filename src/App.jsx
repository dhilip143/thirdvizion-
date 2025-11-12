// src/App.jsx
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import ScrollToTop from "/src/Layout/ScrollToTop";
import Header from "/src/Layout/Header";
import Footer from "/src/Layout/Footer";

// pages (same as before)
import HomePage from "/src/Pages/HomePage.jsx";
import AboutPage from "/src/Pages/AboutPage.jsx";
import ContactPage from "/src/Pages/ContactPage.jsx";
import BlogPage from "/src/Pages/Blog/BlogPage.jsx";
import InnerBlog from "/src/Pages/Blog/InnerBlog.jsx";
import VrPage from "/src/Pages/Services/ImmersiveTech/VirtualReality.jsx";
import ArPage from "/src/Pages/Services/ImmersiveTech/AugmentedReality.jsx";
import ThreeDServices from "/src/Pages/Services/ImmersiveTech/ThreeDServices.jsx";
import CRM from "/src/Pages/Services/Data & Cloud/CRMPage.jsx";
import IAM from "/src/Pages/Services/Data & Cloud/IAMPage.jsx";
import ERP from "/src/Pages/Services/Data & Cloud/ERPPage.jsx";
import Server from "/src/Pages/Services/Data & Cloud/ServerPage.jsx";
import WebsitePage from "/src/Pages/Services/Development & Software/WebsitePage.jsx";
import AppPage from "/src/Pages/Services/Development & Software/AppPage.jsx";
import GamePage from "/src/Pages/Services/Development & Software/GamePage.jsx";

function AnimatedRoutes() {
  const location = useLocation();
  const refreshCount = useRefreshOnNavigate();

  useEffect(() => {
    // Optional GSAP refresh on every route
    if (window.ScrollTrigger) {
      window.ScrollTrigger.refresh(true);
    }
  }, [refreshCount]);

  // Create stable key that doesn't change during exit animations
  const routeKey = location.pathname;

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        // This will also trigger ScrollToTop’s Lenis reset
        if (window.ScrollTrigger) {
          window.ScrollTrigger.refresh(true);
        }
      }}
    >
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<InnerBlog />} />
        <Route path="/virtual_reality" element={<VrPage />} />
        <Route path="/augmented_reality" element={<ArPage />} />
        <Route path="/3d_services" element={<ThreeDServices />} />
        <Route
          path="/client_relationship_management"
          element={<CRM />}
        />
        <Route
          path="/identity_and_access_management"
          element={<IAM />}
        />
        <Route path="/enterprise_resource_planning" element={<ERP />} />
        <Route path="/server_management" element={<Server />} />
        <Route path="/web_development" element={<WebsitePage />} />
        <Route path="/app_development" element={<AppPage />} />
        <Route path="/game_development" element={<GamePage />} />
      </Routes>
    </AnimatePresence>
  );
}

// Wrapper component to handle internal refresh without breaking AnimatePresence
function PageWrapper({ children, refreshCount }) {
  const [internalKey, setInternalKey] = useState(0);

  useEffect(() => {
    if (refreshCount > 0) {
      // Update internal key to force re-render of page content
      setInternalKey(prev => prev + 1);
    }
  }, [refreshCount]);

  return (
    <div key={internalKey} className="page-wrapper">
      {children}
    </div>
  );
}

function App() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling once
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
      direction: "vertical",
    });

    // Store globally for access in ScrollToTop
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;