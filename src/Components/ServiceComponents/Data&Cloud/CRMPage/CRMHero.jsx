import { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import TextReveal from "/src/Hooks/TextReveal.jsx";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";


export default function CrmHero() {
  const rootRef = useRef(null);
  const badgesRef = useRef([]);

  badgesRef.current = [];

  const titleControls = useAnimation();
  const subtitleControls = useAnimation();
  const ctaControls = useAnimation();
  const badgesControls = useAnimation();

  const inView = useInView(rootRef, { once: true, margin: "-100px" });

  if (inView) {
    titleControls.start({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8 },
    });
    subtitleControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.3 },
    });
    ctaControls.start({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, delay: 0.5 },
    });
    badgesControls.start({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { staggerChildren: 0.08, delay: 0.4 },
    });
  }

  function setBadgeRef(el) {
    if (el && !badgesRef.current.includes(el)) badgesRef.current.push(el);
  }

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden px-4 sm:px-6 py-16 sm:py-20 lg:py-28 text-white"
      aria-label="CRM Hero - Coral Theme"
    >
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row  items-center gap-10 lg:gap-20 xl:gap-10">
        {/* Left: Text */}
        <div className="w-full lg:w-6/12 text-center lg:text-left">
          <div className="max-w-2xl mx-auto lg:ml-0">
            <p className="inline-flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-white/80 bg-[#FF646710] border border-[#FF646740] rounded-full px-3 py-1 sm:px-4 sm:py-1.5 mb-4 lg:mb-6">
              <Sparkles className="size-3 sm:size-4 text-[#FF6467]" />
              Built for growth
            </p>

            <TextReveal>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ amount: 0 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight sm:leading-tight lg:leading-tight tracking-tight mb-4 lg:mb-6 text-[#FF6467]"
                style={{ fontFamily: "Outfit, sans-serif" }} >
                Enterprise-Grade CRM
              </motion.h1>
            </TextReveal>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ amount: 0 }}
              className="text-sm sm:text-base lg:text-lg text-white/70 mb-6 lg:mb-8 leading-relaxed"
             style={{ fontFamily: "work-sans, sans-serif" }}  >
            Boost growth with an AI-powered CRM that unites sales, marketing, and support. Manage pipelines, automate workflows, and build stronger customer relationships. 
            </motion.p>

            {/* CTA Buttons */}
           <Link to="/contact">
  <motion.button
    initial={{ opacity: 0, y: 40, scale: 0.96 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    className="hover:bg-[#FF6467] text-white shadow-[0_0_20px_rgba(255,100,103,0.4)] hover:shadow-[0_0_35px_rgba(255,100,103,0.6)] hover:scale-[1.02] transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-[#FF646780] 
      border border-[#FF6467]/30 px-5 py-2.5 sm:px-6 sm:py-3 font-semibold backdrop-blur-md hover:scale-105 font-inter-tight inline-flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl bg-transparent md:px-8 tracking-wide text-sm sm:text-base lg:text-lg xl:text-xl
      mb-6 lg:mb-8"
  >
    Request a demo
  </motion.button>
</Link>


            {/* Badges */}
            <motion.div
              whileInView={badgesControls}
              initial={{ opacity: 1, y: 50, rotateX: -8 }}
              className="flex flex-wrap gap-2 sm:gap-3 items-center justify-center lg:justify-start"
              aria-hidden
            >
              {[
                // "Enterprise-ready security",
                // "99.99% uptime SLA",
                // "1000+ integrations",
              ].map((b) => (
                <span
                  key={b}
                  ref={setBadgeRef}
                  className="inline-flex items-center gap-1 sm:gap-2 rounded-full px-2.5 py-1 sm:px-3 sm:py-1 text-xs font-medium bg-[#FF646710] border border-[#FF646730] text-white shadow-md"
                >
                  {b}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Right: Stat Card */}
        <div className="w-full lg:w-5/12 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-sm rounded-xl sm:rounded-2xl bg-[#FF646710] backdrop-blur-md border border-[#FF646730] p-4 sm:p-6 lg:p-6 shadow-[0_0_30px_rgba(255,100,103,0.15)] hover:shadow-[0_0_50px_rgba(255,100,103,0.3)] transition-all duration-500">
            <div className="flex items-center justify-between gap-3 sm:gap-4 mb-4 lg:mb-4">
              <div>
                <h3 className="text-xs sm:text-sm text-white/70">Quarterly impact</h3>
                <p className="mt-1 text-lg sm:text-xl lg:text-2xl font-bold text-[#FF6467]">
                  +38% Pipeline Velocity
                </p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xs text-white/70">Avg. Win Rate</span>
                <strong className="text-base sm:text-lg text-[#FF6467]">+28%</strong>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3">
              <div className="p-2 sm:p-3 rounded-lg bg-[#FF646720] border border-[#FF646740]">
                <p className="text-xs text-white/70">Active leads</p>
                <p className="text-base sm:text-lg font-semibold text-[#FF6467]">18,400</p>
              </div>
              <div className="p-2 sm:p-3 rounded-lg bg-[#FF646720] border border-[#FF646740]">
                <p className="text-xs text-white/70">Avg. deal size</p>
                <p className="text-base sm:text-lg font-semibold text-[#FF6467]">$9.6k</p>
              </div>
            </div>

            <div className="mt-4 sm:mt-5 text-xs text-white/70 font-semibold">
              Enterprise-ready CRM: secure, scalable, extensible.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}