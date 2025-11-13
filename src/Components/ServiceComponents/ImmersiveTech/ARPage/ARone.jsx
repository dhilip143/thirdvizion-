// ArPage.jsx
import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Lottie from "lottie-react";
import aiBrain from "../../../../assets/Animations/voice.json";

/**
 * Single-file component that:
 * - Shows a minimal interface with only AR functionality
 * - On mobile, opens a WebXR immersive-ar session with hit-test placement
 *
 * Usage: <ArPage />
 */

// ------------ Config ------------
const MODEL_URL = "/models/canon_at-1_retro_camera/scene.gltf";

// ------------ Helpers ------------
function isMobile() {
  return /Mobi|Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
}

// ---------------------- Main Component ----------------------
export default function ArPage() {
  const [showArUnavailableMsg, setShowArUnavailableMsg] = useState(false);
  const [startingAr, setStartingAr] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const xrRendererRef = useRef(null);
  const xrSessionRef = useRef(null);

  // Start the WebXR session and create a Three.js XR-renderer world
  const startAR = async () => {
    if (!isMobile()) {
      setShowArUnavailableMsg(true);
      return;
    }

    if (!navigator.xr) {
      setShowArUnavailableMsg(true);
      return;
    }

    setStartingAr(true);

    try {
      const supported = await navigator.xr.isSessionSupported("immersive-ar");
      if (!supported) {
        setShowArUnavailableMsg(true);
        setStartingAr(false);
        return;
      }

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.xr.enabled = true;
      renderer.xr.setReferenceSpaceType("local-floor");

      renderer.domElement.style.position = "fixed";
      renderer.domElement.style.top = "0";
      renderer.domElement.style.left = "0";
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      renderer.domElement.style.zIndex = "9999";
      document.body.appendChild(renderer.domElement);

      xrRendererRef.current = renderer;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera();

      const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
      scene.add(light);

      const reticle = new THREE.Mesh(
        new THREE.RingGeometry(0.08, 0.12, 32).rotateX(-Math.PI / 2),
        new THREE.MeshBasicMaterial({ color: 0xffffff, opacity: 0.9, transparent: true })
      );
      reticle.matrixAutoUpdate = false;
      reticle.visible = false;
      scene.add(reticle);

      const placed = new THREE.Group();
      scene.add(placed);

      const loader = new GLTFLoader();
      const gltf = await new Promise((res, rej) => {
        loader.load(
          MODEL_URL,
          (g) => res(g),
          undefined,
          (e) => rej(e)
        );
      });

      const createModelInstance = () => {
        const clone = THREE.SkeletonUtils ? THREE.SkeletonUtils.clone(gltf.scene) : gltf.scene.clone(true);
        clone.scale.setScalar(0.5);
        return clone;
      };

      const session = await navigator.xr.requestSession("immersive-ar", {
        requiredFeatures: ["hit-test", "local-floor"],
        optionalFeatures: ["dom-overlay"],
      });
      xrSessionRef.current = session;

      await renderer.xr.setSession(session);

      const referenceSpace = await session.requestReferenceSpace("local-floor");
      const viewerRefSpace = await session.requestReferenceSpace("viewer");
      const hitTestSource = await session.requestHitTestSource({ space: viewerRefSpace });

      const onSelect = (ev) => {
        if (!reticle.visible) return;
        const model = createModelInstance();
        const matrix = new THREE.Matrix4();
        matrix.copy(reticle.matrix);
        model.applyMatrix4(matrix);
        model.position.y += 0.0;
        placed.add(model);
      };

      session.addEventListener("select", onSelect);

      const touchPlace = (e) => {
        if (!reticle.visible) return;
        const model = createModelInstance();
        const matrix = new THREE.Matrix4();
        matrix.copy(reticle.matrix);
        model.applyMatrix4(matrix);
        model.position.y += 0.0;
        placed.add(model);
      };

      renderer.domElement.addEventListener("touchend", touchPlace);

      renderer.setAnimationLoop((timestamp, xrFrame) => {
        if (xrFrame) {
          const pose = xrFrame.getViewerPose(referenceSpace);
          const hitTestResults = xrFrame.getHitTestResults(hitTestSource);

          if (hitTestResults.length > 0) {
            const hit = hitTestResults[0];
            const hitPose = hit.getPose(referenceSpace);
            reticle.visible = true;
            reticle.matrix.fromArray(hitPose.transform.matrix);
          } else {
            reticle.visible = false;
          }
        }
        renderer.render(scene, camera);
      });

      session.addEventListener("end", () => {
        try {
          renderer.setAnimationLoop(null);
          renderer.domElement.removeEventListener("touchend", touchPlace);
          session.removeEventListener("select", onSelect);
          if (renderer.domElement && renderer.domElement.parentNode) {
            renderer.domElement.parentNode.removeChild(renderer.domElement);
          }
        } catch (err) {
          console.warn("cleanup error", err);
        } finally {
          xrRendererRef.current = null;
          xrSessionRef.current = null;
          setStartingAr(false);
        }
      });

    } catch (err) {
      console.error("Failed to start AR session:", err);
      setShowArUnavailableMsg(true);
      setStartingAr(false);
      if (xrRendererRef.current && xrRendererRef.current.domElement && xrRendererRef.current.domElement.parentNode) {
        xrRendererRef.current.domElement.parentNode.removeChild(xrRendererRef.current.domElement);
      }
      xrRendererRef.current = null;
    }
  };

  const endAR = async () => {
    try {
      const session = xrSessionRef.current;
      if (session) await session.end();
    } catch (err) {
      console.warn("Error ending XR session", err);
    }
  };

  useEffect(() => {
    return () => {
      if (xrSessionRef.current) xrSessionRef.current.end();
      if (xrRendererRef.current && xrRendererRef.current.domElement && xrRendererRef.current.domElement.parentNode) {
        xrRendererRef.current.domElement.parentNode.removeChild(xrRendererRef.current.domElement);
      }
    };
  }, []);

  return (
    <div className="bg-gradient-to-br pt-10  from-gray-900 via-black to-pink-950 text-white min-h-screen flex p-4 overflow-hidden relative">
      <div className="absolute inset-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-black to-fuchsia-800/10 animate-pulse-slow"></div>
        
        {/* Grid pattern with pink glow */}
        <div className="absolute inset-0 z-0">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ec489955" strokeWidth="0.5" />
              </pattern>
              <radialGradient id="glow-gradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ec4899" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#be185d" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            <circle cx="20%" cy="30%" r="200" fill="url(#glow-gradient)" />
            <circle cx="80%" cy="70%" r="150" fill="url(#glow-gradient)" />
          </svg>
        </div>

        {/* Animated glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-pink-500 rounded-full filter blur-[50px] sm:blur-[75px] md:blur-[100px] opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-fuchsia-400 rounded-full filter blur-[60px] sm:blur-[90px] md:blur-[120px] opacity-15 animate-float-slow"></div>
        
        {/* Circuit pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,20 Q40,0 80,20 T160,20" stroke="white" fill="none" strokeWidth="0.5"/>
            <path d="M0,60 Q40,40 80,60 T160,60" stroke="white" fill="none" strokeWidth="0.5"/>
            <path d="M0,100 Q40,80 80,100 T160,100" stroke="white" fill="none" strokeWidth="0.5"/>
            <path d="M0,140 Q40,120 80,140 T160,140" stroke="white" fill="none" strokeWidth="0.5"/>
          </svg>
        </div>
      </div>

      

      {/* Main content - centered with engaging hook */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full mt-12 sm:mt-16 md:mt-20 lg:mt-24 lg:mb-34 text-center px-2 sm:px-4">
        
        {/* Engaging Hook Section */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
         <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium mb-4 sm:mb-6 leading-tight"   style={{ fontFamily: "Outfit, sans-serif" }}>
  Unlock the <span className="bg-gradient-to-r from-pink-500 to-fuchsia-400 bg-clip-text text-transparent">
    Power
  </span> of <br className="hidden sm:block" />
  <span className="bg-gradient-to-r from-pink-500 to-fuchsia-400 bg-clip-text text-transparent">
    Augmented Reality
  </span>
</h1>


          <p className="text-xs md:text-lg text-gray-300 max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed"   style={{ fontFamily: "work-sans, sans-serif" }}>
            Enhance real-world experiences with interactive AR solutions. Visualize products, designs, and spaces in real time before making decisions.
          </p>
        </div>
         

        {/* AR Button Section */}
        <div className="flex flex-col items-center space-y-6 sm:space-y-8 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          
          {/* Animated call-to-action arrow */}
          <div className="animate-bounce">
            <div className="w-6 h-6 sm:w-8 sm:h-8 border-r-2 border-b-2 border-pink-400 transform rotate-45"></div>
          </div>
         <div>
          
         </div>
          <button
            onClick={startAR}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            disabled={startingAr}
            className="relative group bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white font-bold py-4 px-8 sm:py-5 sm:px-12 md:py-6 md:px-16 lg:py-7 lg:px-20 rounded-xl sm:rounded-2xl transition-all duration-500 shadow-2xl hover:shadow-3xl hover:scale-105 active:scale-95 border-2 border-pink-300/40 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-base sm:text-lg md:text-xl lg:text-2xl overflow-hidden"
          >
            {/* Animated gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r from-pink-400 to-fuchsia-500 rounded-xl sm:rounded-2xl transition-all duration-1000 ${isHovered ? 'opacity-100' : 'opacity-70'} ${isHovered ? 'blur-lg' : 'blur-md'}`}></div>
            
            {/* Shine effect */}
            <div className=" absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            
            <span className="relative flex items-center space-x-2 sm:space-x-3 md:space-x-4">
              {startingAr ? (
                <>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl">Preparing Your AR Experience...</span>
                </>
              ) : (
                <>
                  <div className="text-2xl sm:text-3xl md:text-4xl">👁️</div>
                  <div className="text-left">
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">Launch AR Experience</div>
                    <div className="text-xs sm:text-sm font-normal opacity-90 hidden sm:block">Tap to place camera in your space</div>
                  </div>
                </>
              )}
            </span>
          </button>

          {/* Close AR button when active */}
          {xrSessionRef.current && (
            <button
              onClick={endAR}
              className="relative group bg-gradient-to-r from-zinc-800 to-zinc-900 text-red-400 font-semibold py-3 px-6 sm:py-4 sm:px-8 md:py-4 md:px-10 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 border border-red-500/30 hover:border-red-400/50 backdrop-blur-sm text-sm sm:text-base md:text-lg"
            >
              <span className="relative flex items-center space-x-2 sm:space-x-3">
                <div className="text-lg sm:text-xl">✕</div>
                <span className="text-sm sm:text-base md:text-lg">Exit AR Mode</span>
              </span>
            </button>
          )}
        </div>

        {/* Instructions */}
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 animate-fade-in-up" style={{animationDelay: '0.9s'}}>
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-pink-300 mb-4 sm:mb-6 text-center">How it works:</h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-6xl mx-auto px-2">
            
            {/* Step 1 */}
            <div className="bg-gradient-to-br from-pink-500/10 to-fuchsia-600/10 border border-pink-500/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 text-center backdrop-blur-sm hover:border-pink-400/40 transition-all duration-300 hover:scale-105 group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-pink-500 to-fuchsia-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-sm sm:text-base md:text-lg">1</span>
              </div>
              <h4 className="text-pink-300 font-semibold mb-1 sm:mb-2 text-sm sm:text-base md:text-lg">Launch AR</h4>
              <p className="text-gray-300 text-xs sm:text-sm leading-tight">Tap "Launch AR Experience" above</p>
            </div>

            {/* Step 2 */}
            <div className="bg-gradient-to-br from-pink-500/10 to-fuchsia-600/10 border border-pink-500/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 text-center backdrop-blur-sm hover:border-pink-400/40 transition-all duration-300 hover:scale-105 group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-pink-500 to-fuchsia-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-sm sm:text-base md:text-lg">2</span>
              </div>
              <h4 className="text-pink-300 font-semibold mb-1 sm:mb-2 text-sm sm:text-base md:text-lg">Allow Access</h4>
              <p className="text-gray-300 text-xs sm:text-sm leading-tight">Allow camera permissions when prompted</p>
            </div>

            {/* Step 3 */}
            <div className="bg-gradient-to-br from-pink-500/10 to-fuchsia-600/10 border border-pink-500/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 text-center backdrop-blur-sm hover:border-pink-400/40 transition-all duration-300 hover:scale-105 group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-pink-500 to-fuchsia-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-sm sm:text-base md:text-lg">3</span>
              </div>
              <h4 className="text-pink-300 font-semibold mb-1 sm:mb-2 text-sm sm:text-base md:text-lg">Scan Surfaces</h4>
              <p className="text-gray-300 text-xs sm:text-sm leading-tight">Move your phone to detect surfaces</p>
            </div>

            {/* Step 4 */}
            <div className="bg-gradient-to-br from-pink-500/10 to-fuchsia-600/10 border border-pink-500/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 text-center backdrop-blur-sm hover:border-pink-400/40 transition-all duration-300 hover:scale-105 group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-pink-500 to-fuchsia-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-sm sm:text-base md:text-lg">4</span>
              </div>
              <h4 className="text-pink-300 font-semibold mb-1 sm:mb-2 text-sm sm:text-base md:text-lg">Place & Explore</h4>
              <p className="text-gray-300 text-xs sm:text-sm leading-tight">Tap to place on ring, then walk around to view</p>
            </div>
            
          </div>
        </div>
      </div>

      {/* AR Unavailable Modal */}
      {showArUnavailableMsg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-md">
          <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-xs xs:max-w-sm sm:max-w-md mx-4 shadow-2xl">
            {/* Modal glow */}
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-pink-500/10 to-fuchsia-500/10 rounded-2xl sm:rounded-3xl blur-2xl opacity-50"></div>
            
            <div className="relative text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-pink-500/10 to-fuchsia-500/10 rounded-full mb-4 sm:mb-6 border border-pink-500/20">
                <div className="text-2xl sm:text-3xl">⚠️</div>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-200 to-fuchsia-200 bg-clip-text text-transparent mb-2 sm:mb-3">
                AR Not Available
              </h3>
              
              <p className="text-gray-300 mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed">
                Your device or browser doesn't support native WebXR `immersive-ar`. 
                Use a compatible Android device with Chrome, ensure you're on HTTPS, and try again.
              </p>
              
              <div className="flex gap-2 sm:gap-3 justify-center">
                <button
                  onClick={() => setShowArUnavailableMsg(false)}
                  className="bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all hover:scale-105 active:scale-95 text-sm sm:text-base"
                >
                  Understand
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add custom styles */}
      <style jsx>{`
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(236, 72, 153, 0.25), 0 0 0 1px rgba(236, 72, 153, 0.1);
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(10px) scale(1.02); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        /* Extra small devices (phones under 375px) */
        @media (max-width: 374px) {
          .xs\\:text-3xl {
            font-size: 1.875rem;
            line-height: 2.25rem;
          }
          .xs\\:text-base {
            font-size: 1rem;
            line-height: 1.5rem;
          }
          .xs\\:max-w-sm {
            max-width: 24rem;
          }
          .xs\\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .xs\\:max-w-xs {
            max-width: 20rem;
          }
        }
      `}</style>
    </div>
  );
}