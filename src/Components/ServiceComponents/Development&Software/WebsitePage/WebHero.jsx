import { Sparkles } from "lucide-react";


const WebHero = () => {
  return (
    <section className="relative isolate pt-50 md:pt-0 md:min-h-screen flex mb-70   items-center justify-center overflow-hidden text-white px-4 sm:px-6 md:px-8">
      <div className="relative z-10 mx-auto max-w-6xl text-center">
        {/* Main Heading */}
        <h1
          className="mt-6 font-medium text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.15] sm:leading-[1.1] tracking-wide text-white"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          The easiest path to build your{" "}
          <span className="text-[#00d3f3]">dream website.</span>
        </h1>

        {/* Subtitle */}
        <p
          className="mt-4 sm:mt-5 max-w-lg md:max-w-1xl lg:max-w-xl mx-auto text-sm sm:text-base md:text-lg text-white/70 px-2 font-inter-tight"
        >
          At{" "}
          <span
            className="font-semibold text-[#00d3f3] capitalize"
            style={{ fontFamily: "work-sans, sans-serif" }}
          >
            ThirdVizion
          </span>
          , we craft scalable, performant, and visually stunning web experiences
          tailored to the users.
        </p>

        {/* CTA Button */}
        <div className="mt-8 sm:mt-10">
          <a
            href="/contact"
            className="font-inter-tight inline-flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl border border-[#00d3f3]/40 bg-black px-5 sm:px-6 md:px-8 py-3 sm:py-4 font-medium sm:font-semibold tracking-wide text-sm sm:text-base md:text-lg shadow-[0_0_10px_rgba(0,211,243,0.3)] backdrop-blur-md transition-all duration-500 hover:shadow-[0_0_25px_rgba(0,211,243,0.5)] hover:scale-105 text-[#00d3f3]"
          >
            Let’s Build Something Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default WebHero;
