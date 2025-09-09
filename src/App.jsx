import { BrowserRouter, Routes, Route } from "react-router-dom";
// Layout Components
import Header from "/src/Layout/Header.jsx";
import Footer from "/src/Layout/Footer.jsx";
// Basic Pages
import Home from "/src/Pages/HomePage.jsx";
import About from "/src/Pages/AboutPage.jsx";
import Contact from "/src/Pages/ContactPage.jsx";
import Blogs from "/src/Pages/Blog/BlogPage.jsx";

import Diagram from "/src/Pages/Services/Immersive/Diagram";
import MainImmersive from "./Pages/Services/Immersive/MainImmersive";
import MainData from "/src/Pages/Services/Data & Cloud/MainData";
import MainSoftware from "/src/Pages/Services/Software/MainSoftware";
import ProjectGallery from "/src/Pages/Services/Software/ProjectGallery";
import CRM from "/src/Pages/Services/crm/CRM";
import IAMHero from "/src/Pages/Services/IAM/IAMHero";
// import ITServices from "/src/Pages/Services/ITServices.jsx/IT.jsx";
import Game from "/src/Pages/Services/Software/game";
import ThreeD from "/src/Pages/Services/Immersive/ThreeD";
import Mobile from "/src/Pages/Services/mobile/mobile";
import ERPHeroSlider from "/src/Pages/Services/ERP/ERPHeroSlider"; // ✅ fixed path
import Thirdblog from "./Components/HomeComponent/About/Thirdblog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blogs />} />
          {/* Immersive Route with Diagram + MainImmersive */}
          <Route path="/ar" element={<Diagram />} />
          <Route path="/vr" element={<MainImmersive />} />
          <Route path="/3d" element={<ThreeD />} />
          <Route path="/data" element={<MainData />} />
          <Route path="/ProjectGallery" element={<ProjectGallery />} />
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/three" element={<Thirdblog />} />
          <Route path="/web" element={<MainSoftware />} />
          <Route path="/ProjectGallery" element={<ProjectGallery />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/iam" element={<IAMHero />} />
          {/* <Route path="/erp" element={<ITServices />} /> */}
          <Route path="/game" element={<Game />} />
          <Route path="/erp" element={<ERPHeroSlider />} />{" "}
          {/* ✅ unique path */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
