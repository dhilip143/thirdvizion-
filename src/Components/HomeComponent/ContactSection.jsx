import React from "react";
import reach from "/src/assets/HomeImages/contactBg.png";

export default function ContactHero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-transparent text-white pt-32 pb-32 sm:pt-40 sm:pb-40 md:pt-48 md:pb-48 lg:pt-56 lg:pb-56"
      style={{
        backgroundImage: `url(${reach})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* background glow lines */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,#000_85%)]" />
        <div className="absolute left-1/2 top-1/2 h-[140%] w-px -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gradient-to-b from-transparent via-amber-400/20 to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-[140%] w-px -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-gradient-to-b from-transparent via-amber-400/20 to-transparent" />
      </div>

      {/* content container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* LEFT SIDE — heading + paragraph */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-outfit">
              Connect for <span className="text-yellow-400">IMPACT</span>
            </h1>
            <p className="max-w-lg text-gray-300 text-sm sm:text-base md:text-lg leading-7 font-work-sans tracking-wide">
              Ready to take your ideas to the next level? Our team of experts is
              here to collaborate, innovate, and deliver solutions tailored to
              your business needs. Whether you’re looking for AI-powered
              platforms, immersive AR/VR experiences, or scalable cloud
              solutions—we’d love to hear from you.
            </p>
          </div>

          {/* RIGHT SIDE — form */}
          <div className="w-full max-w-md md:ml-auto">
            <form className="space-y-4">
              <GradientInput placeholder="Name" />
              <GradientInput placeholder="E-mail" type="email" />
              <GradientTextarea placeholder="Tell about your Project" />

              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-full border border-yellow-400/30 px-6 py-3 text-base font-medium tracking-wide text-white transition-all hover:border-yellow-400 hover:bg-yellow-400/10 active:scale-[0.98] font-work-sans"
              >
                Get in Touch
                <span className="text-yellow-400 text-lg">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Styled Inputs --- */
function GradientInput({ placeholder, type = "text" }) {
  return (
    <div className="rounded-full p-[1px] overflow-hidden [background:linear-gradient(90deg,#f59e0b_0%,#fbbf24_50%,#eab308_100%)]">
      <div className="rounded-full bg-black overflow-hidden">
        <input
          type={type}
          placeholder={placeholder}
          className="w-full rounded-full border border-amber-400/10 bg-transparent px-4 sm:px-5 py-3 text-sm sm:text-base text-white placeholder-amber-400/60 outline-none focus:border-amber-400/40 font-work-sans"
        />
      </div>
    </div>
  );
}

function GradientTextarea({ placeholder }) {
  return (
    <div className="rounded-xl p-[1px] overflow-hidden [background:linear-gradient(90deg,#f59e0b_0%,#fbbf24_50%,#eab308_100%)]">
      <div className="rounded-xl bg-black overflow-hidden">
        <textarea
          rows={4}
          placeholder={placeholder}
          className="w-full resize-none rounded-xl border border-amber-400/10 bg-transparent px-4 py-3 text-sm sm:text-base text-white placeholder-amber-400/60 outline-none focus:border-amber-400/40 font-work-sans"
        />
      </div>
    </div>
  );
}
