import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import vr from "/src/assets/vr/vr-glasses-gaming 1.png";

export default function Vr() {
  const cardRef = useRef(null);
  const circleRef = useRef(null);
  const logoRef = useRef(null);
  const productRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const circle = circleRef.current;
    const logo = logoRef.current;
    const product = productRef.current;
    const content = contentRef.current;

    // GSAP Timeline
    const tl = gsap.timeline({ paused: true });

    tl.to(card, { width: 600, duration: 0.6, ease: "power2.inOut" })
      .to(
        circle,
        {
          borderRadius: "20px",
          backgroundColor: "#6d28d9",
          duration: 0.6,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(logo, { scale: 0, duration: 0.5, ease: "back.in(1.7)" }, "<")
      .fromTo(
        product,
        {
          scale: 0,
          rotate: 315,
          xPercent: -50,
          yPercent: -50,
          top: "50%",
          left: "50%",
        },
        {
          scale: 1,
          rotate: 15,
          left: "75%",
          duration: 0.8,
          ease: "expo.out",
        },
        "<0.2"
      )
      .to(
        content,
        {
          opacity: 1,
          x: -20,
          visibility: "visible",
          duration: 0.5,
          ease: "power2.out",
        },
        "<0.3"
      );

    // Event listeners
    const handleEnter = () => tl.play();
    const handleLeave = () => tl.reverse();

    card.addEventListener("mouseenter", handleEnter);
    card.addEventListener("mouseleave", handleLeave);

    return () => {
      card.removeEventListener("mouseenter", handleEnter);
      card.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#151515]">
      <div
        ref={cardRef}
        className="relative w-[300px] h-[350px] flex items-center justify-center rounded-2xl overflow-hidden bg-transparent"
      >
        {/* Circle Background */}
        <div
          ref={circleRef}
          className="absolute inset-0 flex items-center justify-center rounded-full bg-[#191919]"
        >
          <span
            ref={logoRef}
            className="text-white font-bold text-4xl tracking-widest"
          >
            VR
          </span>
        </div>

        {/* VR Product Image */}
        <img
          ref={productRef}
          src={vr}
          alt="VR Headset"
          className="absolute"
          style={{ height: "300px" }}
        />

        {/* Content */}
        <div
          ref={contentRef}
          className="absolute left-[5%] w-1/2 p-5 opacity-0 invisible"
        >
          <h2 className="text-white text-3xl uppercase font-bold">VR Service</h2>
          <p className="text-white mt-3 leading-relaxed">
            Experience the future with immersive VR services. Step 
            worlds and unlock endless possibilities with cutting-edge
            technology.
          </p>
        </div>
      </div>
    </div>
  );
}
