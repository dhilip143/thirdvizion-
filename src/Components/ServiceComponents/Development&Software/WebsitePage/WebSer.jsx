import React, { useState, useEffect, useRef } from "react";

// --- Icon Components (Cyan Theme) ---
const StethoscopeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10a6 6 0 0 0-12 0v1h12z"/><path d="M12 2v2a10 10 0 0 0 10 10v1h-3a2 2 0 0 1-2-2v-2a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v2a2 2 0 0 1-2 2H2v-1A10 10 0 0 0 12 4V2z"/></svg>
);

const BookOpenIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
);

const ShoppingCartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 12.09a2 2 0 0 0 1.76 1.54L21 16"/><path d="M6 5h17l-1 7H8"/></svg>
);

const DollarSignIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
);

const PlaneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 14l2.2-2L17.8 10l-1.4 1.4L14 10l-2 2l2 2l-1.4 1.4L12 16l2 2l1.4-1.4L18 18l2.2-2L17.8 14z"/><path d="M2 22l20-20"/></svg>
);

const SmileIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
);

const PackageIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12.89 2h3.42"/><path d="M10.77 20h2.46"/><path d="M20.24 12l-8.49 8.49L3.51 12l8.23-8.23a2.46 2.46 0 0 1 3.48 0L20.24 12z"/><line x1="12" y1="4" x2="12" y2="20"/></svg>
);

const iconMap = {
  "Health Care": StethoscopeIcon,
  Education: BookOpenIcon,
  "E-Commerce": ShoppingCartIcon,
  Fintech: DollarSignIcon,
  Travel: PlaneIcon,
  Entertainment: SmileIcon,
  "Food Delivery": PackageIcon,
};

// --- Radial Segment ---
const RadialSegment = ({ service, angle, isSelected, onClick, rotationOffset }) => {
  const IconComponent = iconMap[service.title];
  const totalServices = 7;
  const rotationDegrees = angle + rotationOffset;
  const counterRotationDegrees = -rotationDegrees;

  return (
    <div
      className="absolute top-1/2 left-1/2 w-80 h-80 origin-top-left flex justify-start items-center cursor-pointer transition-all duration-700 ease-out"
      style={{
        transform: `rotate(${rotationDegrees}deg) translate(0px, -50%)`,
      }}
      onClick={() => onClick(service)}
    >
      <div
        className={`w-full h-full absolute transition-all duration-500 rounded-full ${
          isSelected
            ? "border-2 border-[#00d3f3] opacity-70 shadow-[0_0_15px_rgba(0,211,243,0.5)]"
            : "border border-white/20  hover:opacity-40 hover:border-[#00d3f3]/50"
        }`}
        style={{
          clipPath: `polygon(50% 50%, 100% 50%, 100% 100%, 0% 100%, 0% 50%)`,
          transform: `rotate(${-(90 - 360 / totalServices / 2)}deg)`,
          pointerEvents: "none",
        }}
      />
      <div
        className={`absolute left-0 top-0 p-4 transition-all duration-500 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center space-y-2 group ${
          isSelected ? "scale-125 z-10" : "scale-100 hover:scale-110"
        }`}
        style={{
          transform: `translate(240px, 0px) rotate(${counterRotationDegrees}deg)`,
        }}
      >
        <div
          className={`w-20 h-20 flex items-center justify-center rounded-full transition-all duration-500 backdrop-blur-md ${
            isSelected
              ? "bg-[#00d3f3] text-gray-900 scale-110 shadow-[0_0_20px_rgba(0,211,243,0.7)]"
              : "bg-white/5 text-white border border-white/30 group-hover:bg-[#00d3f3]/20 group-hover:border-[#00d3f3]/50 group-hover:shadow-[0_0_15px_rgba(0,211,243,0.3)]"
          }`}
        >
          {React.createElement(IconComponent, {})}
        </div>
        <span
          className={`text-sm font-bold transition-all duration-500 px-3 py-1 rounded-full backdrop-blur-md ${
            isSelected
              ? "text-[#00d3f3] bg-[#00d3f3]/20 scale-110 border border-[#00d3f3]/30"
              : "text-white bg-white/5 border border-white/10 group-hover:bg-[#00d3f3]/10 group-hover:text-[#00d3f3] group-hover:border-[#00d3f3]/30"
          }`}
        >
          {service.title}
        </span>
      </div>
    </div>
  );
};

// --- Radial Selector (Laptop Only) ---
const RadialSelector = ({ services, selectedService, setSelectedService, rotationOffset }) => {
  const totalServices = services.length;
  const angleStep = 360 / totalServices;

  return (
    <div className="relative w-full flex justify-center py-32">
      <div className="relative w-[940px] h-[856px] flex items-center justify-center">
        <div className="absolute w-88 h-88 bg-black/40 rounded-full border-2 border-[#00d3f3]/30 flex flex-col items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(0,211,243,0.2)]">
          <div className="text-center px-6">
            <h3 className="text-4xl font-extrabold text-white leading-tight mb-4 font-inter-tight">
              <span className="block">
                Web Development <span className="block text-[#00d3f3]">service</span>
              </span>
            </h3>
            {selectedService && (
              <div className="mt-6 pt-6 border-t border-[#00d3f3]/30 animate-fadeIn">
                <p className="text-sm text-[#00d3f3] font-semibold uppercase tracking-widest font-inter-tight">
                  WE DO
                </p>
                <p className="text-2xl font-bold text-white mt-2 animate-pulse-text font-inter-tight">
                  {selectedService.title}
                </p>
              </div>
            )}
          </div>
        </div>
        {services.map((service, index) => (
          <RadialSegment
            key={service.title}
            service={service}
            angle={index * angleStep}
            isSelected={selectedService?.title === service.title}
            onClick={setSelectedService}
            rotationOffset={rotationOffset}
          />
        ))}
      </div>
    </div>
  );
};

// --- Mobile Design (Simplified) ---
const MobileServices = ({ services, selectedService, setSelectedService }) => {
  return (
    <div className="flex flex-col items-center w-full py-12 space-y-6">
      <h2 className="text-3xl font-bold text-white text-center mb-4">
        Web Development <span className="text-[#00d3f3]">Service</span>
      </h2>
      <div className="flex flex-col w-full max-w-md space-y-4">
        {services.map((service) => {
          const Icon = iconMap[service.title];
          const isSelected = selectedService?.title === service.title;
          return (
            <div
              key={service.title}
              className={`flex items-center space-x-4 px-6 py-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                isSelected
                  ? "bg-[#00d3f3]/20 border-[#00d3f3] shadow-[0_0_20px_rgba(0,211,243,0.3)]"
                  : "bg-white/5 border-white/10 hover:border-[#00d3f3]/50 hover:bg-[#00d3f3]/10"
              }`}
              onClick={() => setSelectedService(service)}
            >
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full ${
                  isSelected ? "bg-[#00d3f3] text-black" : "bg-white/10 text-white"
                }`}
              >
                <Icon />
              </div>
              <span
                className={`text-lg font-semibold ${
                  isSelected ? "text-[#00d3f3]" : "text-white"
                }`}
              >
                {service.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// --- Main App ---
const App = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [rotationOffset, setRotationOffset] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const rotationRef = useRef(null);

  const services = [
    { title: "Health Care" },
    { title: "Education" },
    { title: "E-Commerce" },
    { title: "Fintech" },
    { title: "Travel" },
    { title: "Entertainment" },
    { title: "Food Delivery" },
  ];

  // Detect Mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-rotation effect (Laptop only)
  useEffect(() => {
    if (!isMobile && autoRotate) {
      rotationRef.current = setInterval(() => {
        setRotationOffset((prev) => (prev + 0.2) % 360);
      }, 50);
    } else {
      if (rotationRef.current) clearInterval(rotationRef.current);
    }

    return () => {
      if (rotationRef.current) clearInterval(rotationRef.current);
    };
  }, [autoRotate, isMobile]);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setAutoRotate(false);
    setTimeout(() => setAutoRotate(true), 8000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white font-inter-tight overflow-hidden">
      {!isMobile ? (
        <RadialSelector
          services={services}
          selectedService={selectedService}
          setSelectedService={handleServiceSelect}
          rotationOffset={rotationOffset}
        />
      ) : (
        <MobileServices
          services={services}
          selectedService={selectedService}
          setSelectedService={handleServiceSelect}
        />
      )}
    </div>
  );
};

export default App;
