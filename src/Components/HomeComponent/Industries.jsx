import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

// Import local images
import digitalEnterpriseImage from "/src/assets/HomeImages/m.jpg";
import digitalEnterpriseBg from "/src/assets/HomeImages/m.jpg";
import healthcareImage from "/src/assets/HomeImages/mm.jpg";
import healthcareBg from "/src/assets/HomeImages/mm.jpg";
import educationImage from "/src/assets/HomeImages/mmm.jpg";
import educationBg from "/src/assets/HomeImages/mmm.jpg";
import retailImage from "/src/assets/HomeImages/mmmm.jpg";
import retailBg from "/src/assets/HomeImages/mmmm.jpg";
import manufacturingImage from "/src/assets/HomeImages/mmmmm.jpg";
import manufacturingBg from "/src/assets/HomeImages/mmmmm.jpg";

gsap.registerPlugin(ScrollTrigger);

// ---- DATA ----
const industriesData = [
  {
    title: "Digital Enterprise",
    description: "Transforming traditional businesses into agile, data-driven digital enterprises with scalable cloud infrastructure and intelligent automation solutions.",
    items: [
      { title: "Cloud Migration & Digital Transformation" },
      { title: "Enterprise Architecture Modernization" },
      { title: "Workflow Automation & Process Optimization" },
    ],
  },
  {
    title: "Healthcare",
    description: "Building secure, compliant healthcare solutions that leverage AI and data analytics to improve patient outcomes and operational efficiency.",
    items: [
      { title: "Predictive Analytics for Patient Care" },
      { title: "HIPAA Compliant System Architecture" },
      { title: "Medical Data Management & Analysis" },
    ],
  },
  {
    title: "Education",
    description: "Creating innovative edtech platforms and learning management systems that enhance educational accessibility and personalized learning experiences.",
    items: [
      { title: "Learning Management Systems (LMS)" },
      { title: "Personalized Learning Algorithms" },
      { title: "Educational Data Analytics" },
    ],
  },
  {
    title: "Retail & E-commerce",
    description: "Developing sophisticated e-commerce platforms and retail analytics systems that drive sales, optimize inventory, and enhance customer experiences.",
    items: [
      { title: "E-commerce Platform Development" },
      { title: "Customer Behavior Analytics" },
      { title: "Inventory & Supply Chain Optimization" },
    ],
  },
  {
    title: "Manufacturing",
    description: "Implementing Industry 4.0 solutions with IoT integration, predictive maintenance, and production optimization for smart manufacturing.",
    items: [
      { title: "Predictive Maintenance Systems" },
      { title: "Production Line Optimization" },
      { title: "Quality Control Automation" },
    ],
  },
];

const industries = [
  {
    id: 1,
    name: "Digital Enterprise",
    frameworks: [
      { id: 1, name: "Online Storage" },
      { id: 2, name: "Work Management" },
      { id: 3, name: "Task Simplification" },
    ],
    image: digitalEnterpriseImage,
    bgImage: digitalEnterpriseBg,
  },
  {
    id: 2,
    name: "Healthcare Innovation",
    frameworks: [
      { id: 1, name: "Smart Health Checks" },
      { id: 2, name: "Safe Patient Records" },
      { id: 3, name: "Online Doctor Visits" },
    ],
    image: healthcareImage,
    bgImage: healthcareBg,
  },
  {
    id: 3,
    name: "Education Technology",
    frameworks: [
      { id: 1, name: "Online Classes" },
      { id: 2, name: "Personal Study Help" },
      { id: 3, name: "Student Progress Tracking" },
    ],
    image: educationImage,
    bgImage: educationBg,
  },
  {
    id: 4,
    name: "Retail & E-commerce Solutions",
    frameworks: [
      { id: 1, name: "Better Shopping Experience" },
      { id: 2, name: "Customer Understanding" },
      { id: 3, name: "Smooth Delivery Process" },
    ],
    image: retailImage,
    bgImage: retailBg,
  },
  {
    id: 5,
    name: "Smart Manufacturing",
    frameworks: [
      { id: 1, name: "Connected Machines" },
      { id: 2, name: "Early Problem Detection" },
      { id: 3, name: "Faster Production Flow" },
    ],
    image: manufacturingImage,
    bgImage: manufacturingBg,
  },
];

// ---- COMPONENTS ----
const AnimatedTextLines = ({ text, className }) => {
  const containerRef = useRef(null);
  const lineRefs = useRef([]);
  const lines = text.split("\n").filter((line) => line.trim() !== "");

  useGSAP(() => {
    if (lineRefs.current.length > 0) {
      gsap.from(lineRefs.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "back.out",
        scrollTrigger: { trigger: containerRef.current },
      });
    }
  });

  return (
    <div ref={containerRef} className={className}>
      {lines.map((line, index) => (
        <span
          key={index}
          ref={(el) => (lineRefs.current[index] = el)}
          className="block leading-relaxed tracking-wide text-pretty"
        >
          {line}
        </span>
      ))}
    </div>
  );
};

const AnimatedHeaderSection = ({
  subTitle,
  title,
  text,
  textColor,
  withScrollTrigger = false,
}) => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);
  const titleParts = title.includes(" ") ? title.split(" ") : [title];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: withScrollTrigger ? { trigger: contextRef.current } : undefined,
    });
    tl.from(contextRef.current, { y: "50vh", duration: 1, ease: "circ.out" });
    tl.from(headerRef.current, { opacity: 0, y: 200, duration: 1, ease: "circ.out" }, "<+0.2");
  }, []);

  return (
    <div ref={contextRef}>
      <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
        <div ref={headerRef} className="flex flex-col justify-center gap-12 pt-16 sm:gap-16">
          <p className={`text-lg sm:text-xl font-light tracking-[0.5rem] uppercase px-10 ${textColor}`}>
            {subTitle}
          </p>
          <div className="px-10">
            <h1 className={`flex flex-col gap-12 uppercase text-9xl sm:text-9xl md:text-9xl lg:text-9xl sm:gap-16 md:block ${textColor}`}>
              {titleParts.map((part, index) => (<span key={index}>{part} </span>))}
            </h1>
          </div>
        </div>
      </div>
      <div className={`relative px-10 ${textColor}`}>
        <div className="absolute inset-x-0 border-t-2 border-cyan-400" />
        <div className="py-12 sm:py-16 text-end">
          <AnimatedTextLines text={text} className={`font-light uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed ${textColor}`} />
        </div>
      </div>
    </div>
  );
};

const Industries = () => {
  const overlayRefs = useRef([]);
  const previewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const mouse = useRef({ x: 0, y: 0 });
  const moveX = useRef(null);
  const moveY = useRef(null);

  const text = `Transforming industries through innovative technology solutions 
that drive efficiency, enhance customer experiences, and create 
sustainable competitive advantages in the digital age`;

  useGSAP(() => {
    moveX.current = gsap.quickTo(previewRef.current, "x", { duration: 1.5, ease: "power3.out" });
    moveY.current = gsap.quickTo(previewRef.current, "y", { duration: 2, ease: "power3.out" });

    gsap.from("#industry", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: { trigger: "#industry" },
    });
  }, []);

  const handleMouseEnter = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(index);
    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.fromTo(
      el,
      { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
      { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", duration: 0.15, ease: "power2.out" }
    );
    gsap.to(previewRef.current, { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" });
  };

  const handleMouseLeave = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(null);
    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.to(el, { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", duration: 0.2, ease: "power2.in" });
    gsap.to(previewRef.current, { opacity: 0, scale: 0.95, duration: 0.3, ease: "power2.out" });
  };

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    mouse.current.x = e.clientX + 24;
    mouse.current.y = e.clientY + 24;
    moveX.current(mouse.current.x);
    moveY.current(mouse.current.y);
  };

  return (
    <section id="industries" className="flex flex-col min-h-screen bg-black">
      <AnimatedHeaderSection
        subTitle={"Industry Applications"}
        title={" WE EMPOWER"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="relative flex flex-col font-light bg-black" onMouseMove={handleMouseMove}>
        {industries.map((industry, index) => (
          <div
            key={industry.id}
            id="industry"
            className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0 bg-black border-b border-gray-800"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div
              ref={(el) => { overlayRefs.current[index] = el; }}
              className="absolute inset-0 hidden md:block duration-200 bg-cyan-500 -z-10 clip-path"
            />
            <div className="flex justify-between px-10 text-white transition-all duration-500 md:group-hover:px-12">
              <h2 className="lg:text-[32px] text-[26px] leading-none">
                {industry.name}
              </h2>
              <Icon icon="lucide:dot" className="md:size-6 size-5" />
            </div>
            <div className="w-full h-0.5 bg-cyan-400" />
            <div className="flex px-10 text-xs leading-loose uppercase transtion-all duration-500 md:text-sm gap-x-5 md:group-hover:px-12">
              {industry.frameworks.map((framework) => (
                <p key={framework.id} className="text-gray-300 transition-colors duration-500">
                  {framework.name}
                </p>
              ))}
            </div>
            <div className="relative flex items-center justify-center px-10 md:hidden h-[400px]">
              <img src={industry.bgImage} alt={`${industry.name}-bg-image`} className="object-cover w-full h-full rounded-md brightness-50" />
              <img src={industry.image} alt={`${industry.name}-image`} className="absolute bg-center px-14 rounded-xl" />
            </div>
          </div>
        ))}
        <div 
          ref={previewRef} 
          className="fixed -top-2/6 left-0 z-50 overflow-hidden border-4 border-cyan-400 pointer-events-none w-[400px] md:block hidden opacity-0 shadow-2xl shadow-cyan-500/20 rounded-2xl"
        >
          {currentIndex !== null && (
            <img 
              src={industries[currentIndex].image} 
              alt="preview" 
              className="object-cover w-full h-full rounded-xl" 
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Industries;