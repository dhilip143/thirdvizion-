import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import ScrollToTop from "/src/Layout/ScrollToTop";
import Header from "/src/Layout/Header";
import Footer from "/src/Layout/Footer";

// pages
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

// Custom hook for refresh logic - CHANGED TO 2 RELOADS
function useRefreshOnNavigate() {
  const location = useLocation();
  const [refreshState, setRefreshState] = useState({
    count: 0,
    path: location.pathname
  });

  useEffect(() => {
    if (location.pathname !== refreshState.path) {
      // New path - start refresh cycle (2 times)
      setRefreshState({ count: 1, path: location.pathname });
    } else if (refreshState.count > 0 && refreshState.count < 2) { // CHANGED TO 2
      // Continue refresh cycle
      const timer = setTimeout(() => {
        setRefreshState(prev => ({ ...prev, count: prev.count + 1 }));
      }, 300); // 300ms between refreshes
      
      return () => clearTimeout(timer);
    }
  }, [location.pathname, refreshState]);

  return refreshState.count;
}

function AnimatedRoutes() {
  const location = useLocation();
  const refreshCount = useRefreshOnNavigate();

  useEffect(() => {
    // Refresh GSAP and other external libraries
    if (window.ScrollTrigger) {
      window.ScrollTrigger.refresh();
    }
  }, [refreshCount]);

  // Create stable key that doesn't change during exit animations
  const routeKey = location.pathname;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={routeKey}>
        <Route path="/" element={<PageWrapper><HomePage refreshCount={refreshCount} /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><AboutPage refreshCount={refreshCount} /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><ContactPage refreshCount={refreshCount} /></PageWrapper>} />
        <Route path="/blog" element={<PageWrapper><BlogPage refreshCount={refreshCount} /></PageWrapper>} />
        <Route path="/blog/:id" element={<PageWrapper><InnerBlog refreshCount={refreshCount} /></PageWrapper>} />
        <Route path="/virtual_reality" element={<PageWrapper><VrPage refreshCount={refreshCount} /></PageWrapper>} />
        <Route path="/augmented_reality" element={<PageWrapper><ArPage refreshCount={refreshCount} /></PageWrapper>} />
        <Route path="/3d_services" element={<PageWrapper><ThreeDServices refreshCount={refreshCount} /></PageWrapper>} />
        <Route path="/client_relationship_management" element={<PageWrapper><CRM refreshCount={refreshCount} /></PageWrapper>} />
        <Route path="/identity_and_access_management" element={<PageWrapper><IAM refreshCount={refreshCount} /></PageWrapper>} />
        <Route path="/enterprise_resource_planning" element={<PageWrapper><ERP refreshCount={refreshCount} /></PageWrapper>} />
        <Route path="/server_management" element={<PageWrapper><Server refreshCount={refreshCount} /></PageWrapper>} />
        <Route path="/web_development" element={<PageWrapper><WebsitePage refreshCount={refreshCount} /></PageWrapper>} />
        <Route path="/app_development" element={<PageWrapper><AppPage refreshCount={refreshCount} /></PageWrapper>} />
        <Route path="/game_development" element={<PageWrapper><GamePage refreshCount={refreshCount} /></PageWrapper>} />
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
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <ScrollToTop />
        <main className="main-content">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;