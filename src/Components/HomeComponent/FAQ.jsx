import React, { useEffect, useRef, useState, useId } from "react";
import { ChevronRight, X, Plus, Search, Bot } from "lucide-react";
import clsx from "clsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  try {
    gsap.registerPlugin(ScrollTrigger);
  } catch {}
}

/* --------------------------------------------------------------------------
   Data
   -------------------------------------------------------------------------- */
const categories = [
  "Immersive Tech",
  "Development",
  "Cloud & Infrastructure",
  "Enterprise Solutions",
  "Support & Settings",
];

const faqData = {
  "Immersive Tech": [
    {
      question: "What immersive technologies does Thirdvizion specialize in?",
      answer:
        "We are experts in AR, VR, and 3D experiences for training, engagement, and product visualization.",
    },
    {
      question: "Can immersive tech integrate with enterprise systems?",
      answer:
        "Yes, our AR/VR integrates seamlessly with CRM, ERP, and e-commerce workflows.",
    },
    {
      question: "Do you create custom 3D models?",
      answer:
        "Absolutely, our in-house 3D art team builds high-fidelity models and environments.",
    },
  ],
  Development: [
    {
      question: "What range of dev services do you offer?",
      answer:
        "Full-stack Web, Mobile, and Game Development with React, Node, Unity, Unreal.",
    },
    {
      question: "Can you modernize legacy applications?",
      answer:
        "Yes, we migrate old systems to secure, scalable modern platforms.",
    },
  ],
  "Cloud & Infrastructure": [
    {
      question: "Which cloud platforms do you manage?",
      answer:
        "AWS, Azure, and GCP with uptime, scalability, and cost optimization.",
    },
    {
      question: "Do you support multi-cloud setups?",
      answer:
        "Yes, hybrid and multi-cloud strategies to balance performance and avoid lock-in.",
    },
  ],
  "Enterprise Solutions": [
    {
      question: "What enterprise solutions do you build?",
      answer:
        "ERP, CRM, and custom enterprise apps to streamline operations and automate workflows.",
    },
  ],
  "Support & Settings": [
    {
      question: "How can I contact support?",
      answer:
        "Via our client portal, email support@thirdvizion.com, or live chat.",
    },
    {
      question: "Do you offer AMCs?",
      answer:
        "Yes, Annual Maintenance Contracts with flexible packages for long-term stability.",
    },
  ],
};

/* --------------------------------------------------------------------------
   Helpers
   -------------------------------------------------------------------------- */
const usePrefersReducedMotion = () => {
  const [prefers, setPrefers] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setPrefers(mq.matches);
    setPrefers(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return prefers;
};

const measureHeight = (el) => {
  if (!el) return 0;
  const prev = el.style.display;
  el.style.display = "block";
  const h = el.scrollHeight;
  el.style.display = prev;
  return h;
};

/* --------------------------------------------------------------------------
   Sub-components
   -------------------------------------------------------------------------- */
const FAQHeader = () => (
  <header className="text-center mb-16 relative z-10">
    <h2
      id="faq-heading"
      className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-600 drop-shadow-lg font-serif"
    >
      Frequently Asked Questions
    </h2>
    <p className="mt-4 text-base text-amber-200/80 max-w-2xl mx-auto font-sans font-normal tracking-wide">
      Answers about immersive tech, development, cloud, and enterprise solutions.
    </p>
  </header>
);

const HelpBotCTA = () => (
  <div className="mt-6 rounded-2xl border border-amber-500/40 bg-gradient-to-br from-amber-600/30 to-transparent p-6 text-center backdrop-blur-sm shadow-lg">
    <div className="mx-auto w-14 h-14 mb-3 rounded-full flex items-center justify-center bg-gradient-to-br from-amber-500 to-yellow-500 shadow-md shadow-amber-500/30">
      <Bot size={28} className="text-black" />
    </div>
    <h4 className="font-bold text-amber-50 text-lg font-sans font-semibold">Can't find an answer?</h4>
    <p className="text-sm text-amber-200/80 mt-1 mb-4 font-sans font-normal">
      Our AI assistant will help you instantly.
    </p>
    <a
      href="#ask-ai"
      className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 shadow-md font-semibold text-black text-sm transition-transform hover:scale-105 font-sans"
    >
      Ask our AI Assistant
    </a>
  </div>
);

const FAQSidebar = ({ categories, activeCategory, setActiveCategory, setQuery, setOpenIndex }) => (
  <nav className="hidden md:flex md:flex-col gap-3 md:w-1/3 lg:w-1/4">
    {categories.map((cat) => {
      const active = cat === activeCategory;
      return (
        <button
          key={cat}
          onClick={() => {
            setActiveCategory(cat);
            setQuery("");
            setOpenIndex(null);
          }}
          className={clsx(
            "rounded-xl px-5 py-3 text-left font-semibold border transition-all duration-300 flex items-center justify-between group font-sans",
            active
              ? "bg-gradient-to-r from-amber-600/30 to-yellow-600/30 border-amber-500/60 text-amber-50 shadow-lg"
              : "bg-white/5 border-amber-800/30 text-amber-200/80 hover:bg-white/10 hover:text-amber-50"
          )}
        >
          <span>{cat}</span>
          <ChevronRight
            size={18}
            className={clsx(
              "transition-transform duration-300",
              active ? "translate-x-1 text-amber-400" : "group-hover:translate-x-1 text-amber-400/70"
            )}
          />
        </button>
      );
    })}
  </nav>
);

const FAQControls = ({ activeCategory, setActiveCategory, query, setQuery, setOpenIndex }) => (
  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
    <div className="md:hidden w-full">
      <select
        className="w-full p-3 rounded-xl border border-amber-800 bg-black text-sm text-amber-50 focus:ring-2 focus:ring-amber-500 font-sans"
        value={activeCategory}
        onChange={(e) => {
          setActiveCategory(e.target.value);
          setQuery("");
          setOpenIndex(null);
        }}
      >
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>

    <div className="relative w-full md:w-auto flex-grow">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-400">
        <Search size={18} />
      </div>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search questions..."
        className="pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-amber-800 text-sm text-amber-50 w-full placeholder:text-amber-400/50 focus:outline-none focus:ring-2 focus:ring-amber-500 font-sans font-normal tracking-wide"
      />
    </div>
  </div>
);

const BackgroundDecorations = () => (
  <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(40%_40%_at_50%_0%,rgba(251,191,36,0.15)_0%,transparent_100%)] animate-pulse"></div>
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[radial-gradient(40%_40%_at_50%_100%,rgba(245,158,11,0.15)_0%,transparent_100%)] blur-3xl"></div>
  </div>
);

const FAQItem = ({ faq, index, isOpen, onToggle, setRef }) => {
  const iconRef = useRef(null);
  const qId = useId();
  const panelId = useId();

  return (
    <article
      className={clsx(
        "faq-card rounded-2xl border bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md shadow-lg transition-all duration-300 overflow-hidden",
        isOpen ? "ring-2 ring-amber-500/60 border-amber-400/50 scale-[1.02]" : "border-amber-800/60"
      )}
    >
      <h3>
        <button
          id={qId}
          className="faq-question-btn w-full flex justify-between items-center p-5 text-left text-amber-50 font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 font-sans tracking-tight"
          aria-controls={panelId}
          aria-expanded={isOpen}
          onClick={() => onToggle(index)}
        >
          <span className="flex-1 text-base md:text-lg">{faq.question}</span>
          <span
            ref={iconRef}
            className="ml-6 flex items-center justify-center h-8 w-8 rounded-full bg-amber-400/10 transition-transform"
          >
            {isOpen ? <X size={20} className="text-amber-400" /> : <Plus size={20} className="text-amber-400" />}
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        ref={(el) => setRef(el, iconRef.current, index)}
        className="overflow-hidden px-5"
        role="region"
        aria-labelledby={qId}
        aria-hidden={!isOpen}
        style={{ height: 0, paddingTop: 0, paddingBottom: 0 }}
      >
        <div className="border-t border-amber-800/60">
          <p className="pt-4 pb-4 text-sm md:text-base text-amber-200/80 leading-relaxed font-sans font-normal tracking-wide">
            {faq.answer}
          </p>
        </div>
      </div>
    </article>
  );
};

/* --------------------------------------------------------------------------
   Main Component
   -------------------------------------------------------------------------- */
export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [openIndex, setOpenIndex] = useState(null);
  const [query, setQuery] = useState("");
  const [filteredFaqs, setFilteredFaqs] = useState(faqData[activeCategory] || []);
  const itemRefs = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();
  const listRef = useRef(null);

  useEffect(() => {
    itemRefs.current = [];
    const q = query.trim().toLowerCase();
    const filtered = (faqData[activeCategory] || []).filter(
      (f) => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)
    );
    setFilteredFaqs(filtered);
    setOpenIndex(null);
  }, [activeCategory, query]);

  // ✅ Animate FAQ list only when category/search changes
  useEffect(() => {
    if (prefersReducedMotion || !listRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".faq-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
        }
      );
    }, listRef);

    return () => ctx.revert();
  }, [filteredFaqs, activeCategory]);

  const handleToggle = (index) => {
    const prev = openIndex;
    if (prev !== null && itemRefs.current[prev]) {
      const { contentEl, iconEl } = itemRefs.current[prev];
      gsap.to(contentEl, {
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        opacity: 0,
        duration: 0.35,
        ease: "power2.inOut",
      });
      gsap.to(iconEl, { rotation: 0, scale: 1, duration: 0.3 });
    }
    if (prev === index) {
      setOpenIndex(null);
      return;
    }
    if (itemRefs.current[index]) {
      const { contentEl, iconEl } = itemRefs.current[index];
      const h = measureHeight(contentEl);
      gsap.fromTo(
        contentEl,
        { height: 0, paddingTop: 0, paddingBottom: 0, opacity: 0 },
        {
          height: h,
          paddingTop: 4,
          paddingBottom: 16,
          opacity: 1,
          duration: 0.45,
          ease: "power3.out",
          onComplete: () => (contentEl.style.height = "auto"),
        }
      );
      gsap.to(iconEl, { rotation: 45, scale: 1.1, duration: 0.3 });
      setOpenIndex(index);
    }
  };

  const setItemRef = (el, iconEl, index) => {
    if (el) itemRefs.current[index] = { contentEl: el, iconEl };
  };

  return (
    <section
      className="relative bg-black text-amber-50 min-h-[600px] py-24 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-5xl mx-auto">
        <FAQHeader />
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 justify-center">
          <FAQSidebar
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            setQuery={setQuery}
            setOpenIndex={setOpenIndex}
          />
          <div className="md:w-2/3 lg:w-3/4">
            <FAQControls
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              query={query}
              setQuery={setQuery}
              setOpenIndex={setOpenIndex}
            />
            <div ref={listRef} className="space-y-5 faq-list-container">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, i) => (
                  <FAQItem
                    key={`${activeCategory}-${i}`}
                    faq={faq}
                    index={i}
                    isOpen={openIndex === i}
                    onToggle={handleToggle}
                    setRef={setItemRef}
                  />
                ))
              ) : (
                <div className="rounded-2xl border border-amber-800 bg-white/5 backdrop-blur-sm p-10 text-center">
                  <p className="text-sm text-amber-200/80 font-sans font-normal">No questions match your search.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ✅ Centered HelpBot */}
        {/* <div className="flex justify-center mt-12">
          <div className="w-full max-w-md">
            <HelpBotCTA />
          </div>
        </div> */}
      </div>
      <BackgroundDecorations />
    </section>
  );
}