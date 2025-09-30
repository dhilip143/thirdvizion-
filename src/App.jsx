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
import ThreeDServices from "/src/Pages/Services/ImmersiveTech/ThreeDServices.jsx";
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

// import React, { useEffect, useRef, useState } from "react";

// export default function ScrollSnapping() {
//   const containerRef = useRef(null);
//   const sectionsRef = useRef([]);
//   const contentsRef = useRef([]);
//   const rafRef = useRef(null);
//   const [effect, setEffect] = useState("blink");

//   const SECTIONS = [
//     { id: "snapping", title: "First", subtitle: "we set up the snapping points", img: "https://assets.codepen.io/197359/flower-white.png", paragraphs: ["We set the scrolling element to forcibly snap to the Y axis using scroll-snap-type: y mandatory.", "Then we set each section as a snapping element using scroll-snap-align: start."] },
//     { id: "scrolling", title: "Next", subtitle: "we set up the scrolling animation", img: "https://assets.codepen.io/197359/flower-yellow.png", paragraphs: ["We track the position of each section and animate the overlay content based on how far the section is in view.", "This component uses JavaScript to compute a normalized progress value and applies transforms/filters to the content."] },
//     { id: "layout", title: "Then", subtitle: "we position a fixed layout", img: "https://assets.codepen.io/197359/flower-blue.png", paragraphs: ["The visual layers are rendered in a fixed overlay so only one is visible at a time.", "The underlying sections only provide scroll-snapping triggers and keep the page height."] },
//     { id: "transition", title: "Finally", subtitle: "we create the transition effects", img: "https://assets.codepen.io/197359/flower-red.png", paragraphs: ["We create pleasing transitions (blink, slide, zoom) as you move between sections.", "Use the radio controls to change the effect."] },
//     { id: "caveats", title: "Caveats", subtitle: "", img: "https://assets.codepen.io/197359/flower-purple.png", paragraphs: ["Scroll-driven CSS (view-timeline) is still experimental in some browsers. This implementation uses JS to be reliable.", "Because we use position: fixed overlays, stacking/interaction must be managed carefully in your site layout."] }
//   ];

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const getViewportHeight = () => window.innerHeight || document.documentElement.clientHeight;

//     const update = () => {
//       const vh = getViewportHeight();

//       sectionsRef.current.forEach((sec, i) => {
//         const contentEl = contentsRef.current[i];
//         if (!sec || !contentEl) return;

//         const rect = sec.getBoundingClientRect();
//         const centerDistance = rect.top + rect.height / 2 - vh / 2;
//         let p = centerDistance / (vh / 2);
//         p = Math.max(-1, Math.min(1, p));

//         let transform = "none";
//         let opacity = Math.max(0, 1 - Math.abs(p));
//         let filter = "none";

//         switch (effect) {
//           case "horizontal-scroll": transform = `translateX(${-p * 100}%)`; break;
//           case "backwards-scroll": transform = `translateY(${p * 100}%)`; break;
//           case "zoom-scroll": transform = `scale(${1 + Math.abs(p) * 0.5})`; filter = `blur(${Math.abs(p) * 12}px)`; break;
//           default: filter = `blur(${Math.abs(p) * 12}px) contrast(${1 + (1 - Math.abs(p)) * 3})`; break;
//         }

//         contentEl.style.transform = transform;
//         contentEl.style.opacity = opacity;
//         contentEl.style.filter = filter;
//         contentEl.style.visibility = opacity < 0.02 ? "hidden" : "visible";
//       });

//       rafRef.current = requestAnimationFrame(update);
//     };

//     rafRef.current = requestAnimationFrame(update);
//     return () => rafRef.current && cancelAnimationFrame(rafRef.current);
//   }, [effect]);

//   const setSectionRef = (el, i) => (sectionsRef.current[i] = el);
//   const setContentRef = (el, i) => (contentsRef.current[i] = el);

//   return (
//     <div className="relative font-sans text-white">
//       {/* Controls */}
//       <div className="fixed top-4 right-4 z-50 flex gap-2 bg-black/40 p-2 rounded-full">
//         {[
//           { id: "blink", label: "Blink" },
//           { id: "horizontal-scroll", label: "Horizontal" },
//           { id: "backwards-scroll", label: "Backwards" },
//           { id: "zoom-scroll", label: "Zoom" }
//         ].map(({ id, label }) => (
//           <label key={id} className="cursor-pointer text-xs px-2 py-1 rounded hover:bg-white/10">
//             <input
//               type="radio"
//               className="hidden"
//               checked={effect === id}
//               onChange={() => setEffect(id)}
//             />
//             {label}
//           </label>
//         ))}
//       </div>

//       {/* Scrollable sections */}
//       <div ref={containerRef} className="h-screen overflow-y-auto snap-y snap-mandatory bg-black">
//         {SECTIONS.map((s, i) => (
//           <section key={s.id} ref={(el) => setSectionRef(el, i)} className="h-screen snap-start" />
//         ))}
//       </div>

//       {/* Overlay content */}
//       <div className="fixed inset-0 pointer-events-none z-40">
//         {SECTIONS.map((s, i) => (
//           <div key={s.id} ref={(el) => setContentRef(el, i)} className="absolute inset-0 flex items-center justify-center p-6 transition-all">
//             <div className="max-w-2xl bg-white/5 p-8 rounded-2xl shadow-2xl backdrop-blur-sm pointer-events-auto text-center">
//               <img src={s.img} alt="" className="w-24 h-24 mx-auto mb-4" />
//               <h2 className="text-xl font-bold mb-2">{s.title}, {s.subtitle}</h2>
//               {s.paragraphs.map((p, idx) => (
//                 <p key={idx} className="text-gray-300 mb-2">{p}</p>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       <footer className="fixed left-4 bottom-3 text-gray-400 text-sm z-50">That's it 🌸</footer>
//     </div>
//   );
// }
