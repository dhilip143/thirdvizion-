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
    title: "Web Development & Software",
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

// AnimatedHeaderSection Component (with custom classNames)
const AnimatedHeaderSection = ({
  subTitle,
  title,
  text,
  textColor,
  withScrollTrigger = false,
  titleClassName = "",
  subTitleClassName = "",
  textClassName = "",
}) => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);
  const shouldSplitTitle = title.includes(" ");
  const titleParts = shouldSplitTitle ? title.split(" ") : [title];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: withScrollTrigger
        ? {
            trigger: contextRef.current,
            start: "top 80%",
          }
        : undefined,
    });
    tl.from(contextRef.current, {
      y: "50vh",
      duration: 1,
      ease: "circ.out",
    });
    tl.from(
      headerRef.current,
      {
        opacity: 0,
        y: "200",
        duration: 1,
        ease: "circ.out",
      },
      "<+0.2"
    );
  }, []);

  return (
    <div ref={contextRef}>
      <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
        <div
          ref={headerRef}
          className="flex flex-col justify-center gap-12 pt-16 sm:gap-16"
        >
          {/* Subtitle */}
          <p
            className={`font-light tracking-[0.5rem] uppercase px-10 ${textColor} ${subTitleClassName}`}
          >
            {subTitle}
          </p>

          {/* Title */}
          <div className="px-10">
            <h1
              className={`flex flex-col gap-12 uppercase sm:gap-16 md:block ${textColor} ${titleClassName}`}
            >
              {titleParts.map((part, index) => (
                <span key={index}>{part} </span>
              ))}
            </h1>
          </div>
        </div>
      </div>

      {/* Description Text */}
      <div className={`relative px-10 ${textColor}`}>
        <div className="absolute inset-x-0 border-t-2" />
        <div className="py-12 sm:py-16 text-end">
          <AnimatedTextLines
            text={text}
            className={`font-light uppercase ${textClassName} ${textColor}`}
          />
        </div>
      </div>
    </div>
  );
};

// Main Services Component
const Empover = () => {
  const text = `We create immersive digital experiences and build scalable platforms 
that transform businesses with cutting-edge technology and intuitive design`;

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
    <section id="services" className="min-h-screen bg-black ">
      <AnimatedHeaderSection
        subTitle="Digital Innovation & Technology Solutions"
        title="Services"
        text={text}
        textColor="text-white"
        withScrollTrigger={true}
        titleClassName="text-6xl sm:text-9xl "
        subTitleClassName="text-xl tracking-widest"
        textClassName="text-lg sm:text-3xl leading-relaxed tracking-wide"
      />

      {servicesData.map((service, index) => (
        <div
          ref={(el) => (serviceRefs.current[index] = el)}
          key={index}
          className="sticky px-10 pt-6 pb-12 text-white bg-black border-t-2 border-white/30"
          style={
            isDesktop
              ? {
                  top: `calc(10vh + ${index * 5}em)`,
                  marginBottom: `${(servicesData.length - index - 1) * 5}rem`,
                }
              : { top: 0 }
          }
        >
          <div className="flex items-center justify-between gap-4 font-light">
            <div className="flex flex-col w-full gap-6">
              <h2 className="text-4xl lg:text-5xl">{service.title}</h2>
              <p className="text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty">
                {service.description}
              </p>
              <div className="flex flex-col w-full gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80">
                {service.items.map((item, itemIndex) => (
                  <div key={`item-${index}-${itemIndex}`} className="w-full">
                    <h3 className="flex items-center w-full">
                      <span className="mr-12 text-lg text-blue-600">
                        0{itemIndex + 1}
                      </span>
                      <span className="flex-1">{item.title}</span>
                    </h3>
                    {itemIndex < service.items.length - 1 && (
                      <div className="w-full h-px my-2 bg-blue-400" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Empover;