import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "/src/Layout/ScrollToTop";
import Header from "/src/Layout/Header.jsx";
import Footer from "/src/Layout/Footer.jsx";
// Basic Pages
import HomePage from "/src/Pages/HomePage.jsx";
import AboutPage from "/src/Pages/AboutPage.jsx";
import ContactPage from "/src/Pages/ContactPage.jsx";
// Blog Page
import BlogPage from "/src/Pages/Blog/BlogPage.jsx";
import InnerBlog from "/src/Pages/Blog/InnerBlog.jsx";
// Immersive Tech
import VrPage from "/src/Pages/Services/ImmersiveTech/VirtualReality.jsx";
import ArPage from "/src/Pages/Services/ImmersiveTech/AugmentedReality.jsx";
import ThreeDServices from "/src/Pages/Services/ImmersiveTech/3DServices.jsx";
// Data & Cloud
import CRM from "/src/Pages/Services/Data & Cloud/CRMPage.jsx";
import IAM from "/src/Pages/Services/Data & Cloud/IAMPage.jsx";
import ERP from "/src/Pages/Services/Data & Cloud/ERPPage.jsx";
import Server from "/src/Pages/Services/Data & Cloud/ServerPage.jsx";
// Devlopment & Software
import WebsitePage from "/src/Pages/Services/Development & Software/WebsitePage.jsx";
import AppPage from "/src/Pages/Services/Development & Software/AppPage.jsx";
import GamePage from "/src/Pages/Services/Development & Software/GamePage.jsx";
// Additional Pages

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Blog */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<InnerBlog />} />
          {/* Services */}
          {/* Immersive Tech */}
          <Route path="/virtual_reality" element={<VrPage />} />
          <Route path="/augmented_reality" element={<ArPage />} />
          <Route path="/3d_services" element={<ThreeDServices />} />
          {/* Data & Cloud */}
          <Route path="/client_relationship_management" element={<CRM />} />
          <Route path="/identity_and_access_management" element={<IAM />} />
          <Route path="/enterprise_resource_planning" element={<ERP />} />
          <Route path="/server_management" element={<Server />} />
          {/* Development & Software */}
          <Route path="/web_development" element={<WebsitePage />} />
          <Route path="/app_development" element={<AppPage />} />
          <Route path="/game_development" element={<GamePage />} />
          {/* Additional pages */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
