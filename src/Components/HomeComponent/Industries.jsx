import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

// ---- DATA ----
const servicesData = [
  {
    title: "Architecture & Cloud Scalability",
    description:
      "Designing robust, modular enterprise and software architectures for the cloud. We ensure the foundational base for high-performance solutions and future growth.",
    items: [
      { title: "Enterprise and Software Architecture Design" },
      { title: "Cloud Integration (OCI & AWS Fundamentals)" },
      { title: "Microservices Design & Scalability" },
    ],
  },
  {
    title: "Full Stack Engineering & CI/CD",
    description:
      "End-to-end development of high-performance applications, from backend APIs to modern frontends, integrating DevOps practices for fast, automated delivery.",
    items: [
      { title: "Full Stack: Java/Spring Boot & React.js" },
      { title: "CI/CD Pipelines with Jenkins & Docker" },
      { title: "Version Control & Code Review Workflows" },
    ],
  },
  {
    title: "Data Analytics & ML Modeling",
    description:
      "Building Machine Learning (ML) models and advanced data analysis systems to extract predictive value, addressing challenges like handling imbalanced data.",
    items: [
      { title: "Predictive Modeling (Python/Scikit-learn)" },
      { title: "Anomaly Detection (DBSCAN, Isolation Forest)" },
      { title: "Data Management & Administration" },
    ],
  },
  {
    title: "Optimization & Decision Intelligence",
    description:
      "Direct application of AI solutions to automate core processes, optimize operational efficiency, and enable data-informed strategic decision-making.",
    items: [
      { title: "Operational Efficiency & Automation" },
      { title: "Data-Informed Decision-Making" },
      { title: "Model Validation (Precision-Recall Curves)" },
    ],
  },
];

const projects = [
  {
    id: 1,
    name: "Anomaly Detection Engine",
    frameworks: [
      { id: 1, name: "Python / Unsupervised Machine Learning" },
      { id: 2, name: "Scikit-learn" },
      { id: 3, name: "DBSCAN/Isolation Forest/K-means/HDBSCAN/PCA" },
    ],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    name: "RoomScout (Hotel Booking Platform)",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "Java Spring Boot" },
      { id: 3, name: "CI/CD (Jenkins/Docker/SonarQube/Github Actions)" },
    ],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    bgImage: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    name: "Geramirez Real Estate App",
    frameworks: [
      { id: 1, name: "Mobile Development / automation" },
      { id: 2, name: "Backend Logic / Glide" },
      { id: 3, name: "Automatic Data Sheets" },
    ],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    bgImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    name: "Bender E-commerce Store",
    frameworks: [
      { id: 1, name: "E-commerce Workflow" },
      { id: 2, name: "PHP / HTML5 / JavaScript" },
      { id: 3, name: "Payment Gateway Integration" },
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    bgImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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
            <h1 className={`flex flex-col gap-12 uppercase text-9xl sm:text-9xl md:text-9xl lg:text-9xl  sm:gap-16 md:block ${textColor}`}>
              {titleParts.map((part, index) => (<span key={index}>{part} </span>))}
            </h1>
          </div>
        </div>
      </div>
      <div className={`relative px-10 ${textColor}`}>
        <div className="absolute inset-x-0 border-t-2" />
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

  const text = `Featured engineering projects where robust 
architecture meets data science to drive  
measurable results and tangible business impact`;

  useGSAP(() => {
    moveX.current = gsap.quickTo(previewRef.current, "x", { duration: 1.5, ease: "power3.out" });
    moveY.current = gsap.quickTo(previewRef.current, "y", { duration: 2, ease: "power3.out" });

    gsap.from("#project", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: { trigger: "#project" },
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
    <section id="work" className="flex flex-col min-h-screen">
      <AnimatedHeaderSection
        subTitle={"Logic meets Aesthetics, Seamlessly"}
        title={"Works"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />
      <div className="relative flex flex-col font-light" onMouseMove={handleMouseMove}>
        {projects.map((project, index) => (
          <div
            key={project.id}
            id="project"
            className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div
              ref={(el) => { overlayRefs.current[index] = el; }}
              className="absolute inset-0 hidden md:block duration-200 bg-black -z-10 clip-path"
            />
            <div className="flex justify-between px-10 text-black transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white">
              <h2 className="lg:text-[32px] text-[26px] leading-none">{project.name}</h2>
              <Icon icon="lucide:arrow-up-right" className="md:size-6 size-5" />
            </div>
            <div className="w-full h-0.5 bg-blue-600" />
            <div className="flex px-10 text-xs leading-loose uppercase transtion-all duration-500 md:text-sm gap-x-5 md:group-hover:px-12">
              {project.frameworks.map((framework) => (
                <p key={framework.id} className="text-black transition-colors duration-500 md:group-hover:text-white">
                  {framework.name}
                </p>
              ))}
            </div>
            <div className="relative flex items-center justify-center px-10 md:hidden h-[400px]">
              <img src={project.bgImage} alt={`${project.name}-bg-image`} className="object-cover w-full h-full rounded-md brightness-50" />
              <img src={project.image} alt={`${project.name}-image`} className="absolute bg-center px-14 rounded-xl" />
            </div>
          </div>
        ))}
        <div ref={previewRef} className="fixed -top-2/6 left-0 z-50 overflow-hidden border-4 border-blue-950 pointer-events-none w-[400px] md:block hidden opacity-0 rounded-3xl">
          {currentIndex !== null && <img src={projects[currentIndex].image} alt="preview" className="object-cover w-full h-full" />}
        </div>
      </div>
    </section>
  );
};

export default Industries ;