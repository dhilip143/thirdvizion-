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
  



  return (
   
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
   
  );
}

function App() {
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
