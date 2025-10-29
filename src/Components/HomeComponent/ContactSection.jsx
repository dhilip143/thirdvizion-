import reach from "/src/assets/HomeImages/contactBg.png";

export default function ContactHero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-transparent text-amber-50 pt-32 pb-32 sm:pt-40 sm:pb-40 md:pt-48 md:pb-48 lg:pt-56 lg:pb-56"
      style={{
        backgroundImage: `url(${reach})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* subtle background lines + soft center image */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,#000_85%)]" />
        <div className="absolute left-1/2 top-1/2 h-[140%] w-px -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gradient-to-b from-transparent via-amber-400/20 to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-[140%] w-px -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-gradient-to-b from-transparent via-amber-400/20 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
        {/* Heading — responsive sizes */}
        <h1 className="whitespace-normal text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-[-0.02em] mt-6 font-serif text-amber-50">
          Your Next Big Idea Starts Here
        </h1>

        {/* Two-column area */}
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start overflow-hidden">
          {/* Left: Paragraph */}
          <div>
            <p className="max-w-xl text-sm sm:text-base md:text-lg leading-7 sm:leading-8 text-amber-200/80 font-sans font-normal tracking-wide">
              Ready to take your ideas to the next level? Our team of experts is
              here to collaborate, innovate, and deliver solutions tailored to
              your business needs. Whether you're looking for AI-powered
              platforms, immersive AR/VR experiences, or scalable cloud
              solutions—we'd love to hear from you.
            </p>
          </div>

          {/* Right: Form */}
          <div className="w-full max-w-md md:ml-auto overflow-hidden">
            <form className="space-y-4 overflow-hidden">
              <GradientInput placeholder="Name" />
              <GradientInput placeholder="E-mail" type="email" />
              <GradientTextarea placeholder="Tell about your Project" />

              <button
                type="submit"
                className="w-full rounded-full border border-amber-400/20 px-6 py-3 text-sm sm:text-base font-medium tracking-wide text-amber-50 transition-all hover:border-amber-400/40 hover:bg-amber-400/5 active:scale-[0.99] font-sans"
              >
                Get in Touch
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function GradientInput({ placeholder, type = "text" }) {
  return (
    <div className="rounded-full p-[1px] overflow-hidden [background:linear-gradient(90deg,#f59e0b_0%,#fbbf24_50%,#eab308_100%)]">
      <div className="rounded-full bg-black overflow-hidden">
        <input
          type={type}
          placeholder={placeholder}
          className="w-full rounded-full border border-amber-400/10 bg-transparent px-4 sm:px-5 py-3 text-sm sm:text-base text-amber-50 placeholder-amber-400/60 outline-none focus:border-amber-400/30 font-sans font-normal tracking-wide"
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
          className="w-full resize-none rounded-xl border border-amber-400/10 bg-transparent px-4 py-3 text-sm sm:text-base text-amber-50 placeholder-amber-400/60 outline-none focus:border-amber-400/30 font-sans font-normal tracking-wide"
        />
      </div>
    </div>
  );
} 