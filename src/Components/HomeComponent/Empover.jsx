import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

// Services data
const servicesData = [
  {
    title: "Immersive Tech",
    description:
      "Intuitive designs for seamless digital journeys.",
    items: [
      { title: "VIRTUAL REALITY" },
      { title: "AUGMENTED REALITY" },
      { title: "3D SERVICES" },
    ],
  },
  {
    title: "Data & Cloud",
    description:
      "Custom-built, scalable platforms.",
    items: [
      { title: "CRM SOLUTIONS" },
      { title: "IAM SOLUTIONS" },
      { title: "ERP SOLUTIONS" },
      { title: "SERVER MANAGEMENT" },
    ],
  },
  {
    title: "Development & Software",
    description:
      "Transforming businesses with secure, scalable infrastructure.",
    items: [
      { title: "WEB DEVELOPMENT" },
      { title: "MOBILE APPS" },
      { title: "GAME DEVELOPMENT" },
    ],
  },
];

// AnimatedTextLines Component
const AnimatedTextLines = ({ text, className }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    if (textRef.current) {
      gsap.from(textRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "back.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }
  });

  return (
    <div ref={containerRef} className={className}>
      <span
        ref={textRef}
        className="block leading-relaxed tracking-wide text-pretty whitespace-pre-line"
      >
        {text}
      </span>
    </div>
  );
};

// AnimatedHeaderSection Component
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
      scrollTrigger: withScrollTrigger ? { 
        trigger: contextRef.current,
        start: "top 80%"
      } : undefined,
    });
    tl.from(contextRef.current, { y: "50vh", duration: 1, ease: "circ.out" });
    tl.from(headerRef.current, { opacity: 0, y: 200, duration: 1, ease: "circ.out" }, "<+0.2");
  }, []);

  return (
    <div ref={contextRef}>
      <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
        <div ref={headerRef} className="flex flex-col justify-center gap-12 pt-16 sm:gap-16">
          <p className={`text-lg sm:text-xl font-normal tracking-[0.3em] uppercase px-10 ${textColor} font-open-sans`}>
            {subTitle}
          </p>
          <div className="px-10">
            <h1 className={`flex flex-col gap-12 uppercase text-7xl sm:text-8xl md:text-9xl lg:text-9xl sm:gap-16 md:block ${textColor} font-open-sans-condensed leading-[0.9]`}>
              {titleParts.map((part, index) => (
                <span key={index} className="font-bold text-[153px]">{part} </span>
              ))}
            </h1>
          </div>
        </div>
      </div>
      <div className={`relative px-10 ${textColor}`}>
        <div className="absolute inset-x-0 border-t-2 border-amber-400" />
        <div className="pt-6 sm:pt-5 pb-17 text-end">
          <AnimatedTextLines text={text} className={`font-regular text-lg sm:text-2xl md:text-2xl lg:text-[24px] leading-relaxed tracking-wide ${textColor} font-open-sans`} />
        </div>
      </div>
    </div>
  );
};

// Service-specific font styles matching the industries pattern
const serviceFontStyles = {
  0: "font-open-sans-condensed font-bold tracking-tight", // Immersive Tech - Digital Enterprise style
  1: "font-open-sans-condensed font-semibold tracking-normal", // Data & Cloud - Healthcare style
  2: "font-open-sans-condensed font-medium tracking-wide", // Development & Software - Education style
};

// Main Services Component
const Empover = () => {
  const text = `We create immersive digital experiences and build scalable platforms 
that transform businesses with cutting-edge technology `;

  const serviceRefs = useRef([]);
  const isDesktop = useMediaQuery({ minWidth: "48rem" }); //768px

  useGSAP(() => {
    serviceRefs.current.forEach((el) => {
      if (!el) return;
      gsap.from(el, {
        y: 200,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        duration: 1,
        ease: "circ.out",
      });
    });
  }, []);

  return (
    <section id="services" className="flex flex-col min-h-screen bg-black">
      <AnimatedHeaderSection
        subTitle="Digital Innovation & Technology Solutions"
        title="Services"
        text={text}
        textColor="text-amber-50"
        withScrollTrigger={true}
      />

      <div className="relative flex flex-col font-light bg-black">
        {servicesData.map((service, index) => (
          <div
            ref={(el) => (serviceRefs.current[index] = el)}
            key={index}
            className="sticky px-10 pt-6 pb-12 bg-black border-b border-amber-800"
            style={
              isDesktop
                ? {
                    top: `calc(10vh + ${index * 5}em)`,
                    marginBottom: `${(servicesData.length - index - 1) * 5}rem`,
                  }
                : { top: 0 }
            }
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-col w-full gap-6">
                {/* Service Title with industry-matched styling */}
                <h2 className={`lg:text-[32px] text-[26px] leading-none text-amber-50 ${serviceFontStyles[index]}`}>
                  {service.title}
                </h2>
                
                {/* Service Description */}
                <p className="text-lg leading-relaxed tracking-wider text-amber-400 text-pretty font-open-sans font-normal">
                  {service.description}
                </p>
                
                {/* Service Items List */}
                <div className="flex flex-col w-full gap-2 text-2xl sm:gap-4 lg:text-3xl text-amber-50">
                  {service.items.map((item, itemIndex) => (
                    <div key={`item-${index}-${itemIndex}`} className="w-full group">
                      <h3 className="flex items-center w-full transition-all duration-300 group-hover:translate-x-2">
                        <span className="mr-12 text-xs md:text-sm text-amber-400 font-open-sans font-normal tracking-wider">
                          0{itemIndex + 1}
                        </span>
                        <span className="flex-1 font-open-sans font-normal tracking-wider uppercase text-amber-50">
                          {item.title}
                        </span>
                      </h3>
                      {itemIndex < service.items.length - 1 && (
                        <div className="w-full h-0.5 my-2 bg-amber-900 transition-all duration-300 group-hover:bg-amber-600" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Empover;