import React, { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial, OrbitControls } from "@react-three/drei";
import { gsap } from "gsap";
import { FaCheckCircle } from "react-icons/fa";

// About.jsx - export default function About()
// Usage: place <About /> in your React app. TailwindCSS must be configured.
// Dependencies: three, @react-three/fiber, @react-three/drei, gsap, react-icons

function Animated3D() {
  // a simple floating 3D torus-like object
  const mesh = useRef();
  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += 0.2 * delta;
    mesh.current.rotation.y += 0.15 * delta;
    mesh.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.7) * 0.25;
  });
  return (
    <mesh ref={mesh} scale={[1.6, 1.6, 1.6]}>
      <torusGeometry args={[0.6, 0.22, 32, 64]} />
      <MeshWobbleMaterial factor={0.8} speed={2} roughness={0.2} metalness={0.8} attach="material" />
    </mesh>
  );
}

export default function About() {
  const heroRef = useRef(null);
  const servicesRef = useRef([]);
  servicesRef.current = [];

  useEffect(() => {
    // simple GSAP entrance for hero
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", { y: -30, opacity: 0, duration: 0.7, ease: "power3.out" });
      gsap.from(".hero-sub", { y: -12, opacity: 0, duration: 0.6, delay: 0.1 });
      gsap.from(".hero-cta", { scale: 0.96, opacity: 0, duration: 0.6, delay: 0.25 });

      // stagger services
      gsap.from(servicesRef.current, {
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.5,
        delay: 0.3,
        ease: "power2.out",
      });
    }, heroRef);

    return () => ctx && ctx.revert();
  }, []);

  const addServiceRef = (el) => {
    if (el && !servicesRef.current.includes(el)) servicesRef.current.push(el);
  };

  return (
    <section className="bg-black text-gray-100 min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {/* 3D canvas backdrop */}
          <Canvas className="w-full h-full" camera={{ position: [0, 0, 3.2], fov: 45 }}>
            <ambientLight intensity={0.9} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Suspense fallback={null}>
              <Animated3D />
            </Suspense>
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
          </Canvas>
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10" ref={heroRef}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Thirdvizion — Building Immersive Digital Experiences
              </h1>
              <p className="hero-sub mt-4 text-lg max-w-xl text-gray-300">
                We combine Virtual & Augmented Reality, 3D design and full-stack development to deliver
                enterprise-ready solutions from concept to launch — proudly based in Reteri.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="hero-cta inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-5 py-3 rounded-2xl font-semibold shadow-lg transform hover:scale-[1.02] transition"
                >
                  Talk to our team
                </a>
                <a
                  href="#services"
                  className="hero-cta inline-flex items-center gap-2 border border-gray-700 px-4 py-3 rounded-2xl text-gray-200 hover:bg-gray-900 transition"
                >
                  See our services
                </a>
              </div>

              <div className="mt-6 text-sm text-gray-400">
                <strong className="text-gray-200">Location:</strong> Reteri • <strong>Email:</strong>{" "}
                <a href="mailto:hello@thirdvizion.com" className="underline">
                  hello@thirdvizion.com
                </a>
              </div>
            </div>

            <div className="pt-8 lg:pt-0">
              {/* Short about card */}
              <div className="bg-gradient-to-br from-white/3 to-white/2 border border-white/5 p-6 rounded-2xl shadow-xl backdrop-blur-md">
                <h3 className="text-xl font-semibold">About Thirdvizion</h3>
                <p className="mt-3 text-gray-300">
                  Thirdvizion is a service-led technology studio based in Reteri. We help organizations
                  transform ideas into immersive products — from Virtual & Augmented Reality to cloud-powered
                  enterprise systems. Our approach blends creative design, engineering excellence, and
                  reliable operations so you can launch fast and scale securely.
                </p>

                <a href="#long-about" className="mt-4 inline-block text-sm text-orange-400">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body: Vision/Mission, Values, Services */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <section id="long-about" className="mb-8">
              <h2 className="text-2xl font-bold">Who we are</h2>
              <p className="mt-4 text-gray-300 max-w-2xl">
                Thirdvizion was founded to help businesses unlock the value of immersive technology and modern
                engineering. We design and develop memorable digital experiences — AR/VR applications, realistic
                3D simulations, engaging games, and robust web & mobile platforms — while also supporting enterprise
                needs like Data & Cloud, CRM, IAM, ERP and Server Management.
              </p>
              <p className="mt-3 text-gray-300 max-w-2xl">
                Our team brings together designers, 3D artists, VR/AR specialists, and backend engineers who care
                about product quality and long-term performance. We believe great products come from close
                collaboration, fast prototyping, and continuous learning — and we partner with clients every step of
                the way, from discovery to long-term support.
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white/3 border border-white/5 rounded-2xl">
                <h3 className="font-semibold">Vision</h3>
                <p className="mt-2 text-gray-300">
                  To make immersive technology and secure enterprise systems accessible to every business — enabling
                  richer experiences, smarter operations, and measurable growth.
                </p>
                <p className="mt-2 text-gray-400 text-sm">
                  We envision a future where immersive experiences and intelligent cloud systems work together to
                  improve training, sales, product design and customer engagement — across industries and geographies.
                </p>
              </div>

              <div className="p-6 bg-white/3 border border-white/5 rounded-2xl">
                <h3 className="font-semibold">Mission</h3>
                <p className="mt-2 text-gray-300">
                  Deliver end-to-end immersive and enterprise solutions that solve real business problems with
                  creativity, reliability, and speed.
                </p>
                <p className="mt-2 text-gray-400 text-sm">
                  We build tailored VR/AR/3D and software solutions that accelerate time-to-value for our clients. By
                  focusing on human-centered design, robust architecture, and proactive operations, we aim to turn bold
                  ideas into dependable products that scale.
                </p>
              </div>
            </div>

            {/* Core values */}
            <section className="mt-8">
              <h3 className="text-xl font-bold">Core values</h3>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Craftsmanship: clean design, reliable code.",
                  "Collaboration: we work as an extension of your team.",
                  "Practical Innovation: prototype fast, ship sensibly.",
                  "Security & Reliability: enterprise-grade operations.",
                  "Customer-first: success measured by business outcomes.",
                ].map((v, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <FaCheckCircle className="mt-1 text-orange-400" />
                    <span>{v}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside>
            {/* Services grid */}
            <section id="services" className="p-6 bg-white/3 border border-white/5 rounded-2xl">
              <h3 className="font-semibold">Services</h3>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  ["Immersive Tech", "Strategy & prototypes for immersive product experiences."],
                  ["Virtual Reality", "Full VR apps for training, simulations and demos."],
                  ["Augmented Reality", "AR experiences for marketing, visualization and field service."],
                  ["3D Services", "Modeling, animation and real-time 3D integration."],
                  ["Data & Cloud", "Scalable architecture, data pipelines and cloud ops."],
                  ["CRM Solutions", "Custom CRM integrations and automation."],
                  ["IAM Solutions", "Identity & access management design and deployment."],
                  ["ERP Solutions", "ERP integrations and workflow automation."],
                  ["Server Management", "Managed hosting, backups and monitoring."],
                  ["Development", "Product engineering: backend APIs, integrations."],
                  ["Web Development", "Modern responsive websites and web apps."],
                  ["Mobile Apps", "Native & cross-platform mobile applications."],
                ].map(([title, desc], i) => (
                  <div
                    key={i}
                    ref={addServiceRef}
                    className="p-3 bg-black/60 border border-white/3 rounded-lg hover:translate-x-1 transition-transform"
                  >
                    <div className="text-sm font-semibold">{title}</div>
                    <div className="text-xs text-gray-400">{desc}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* How we work */}
            <section className="mt-6 p-6 bg-white/3 border border-white/5 rounded-2xl">
              <h3 className="font-semibold">How we work</h3>
              <ol className="mt-3 list-decimal list-inside text-gray-300">
                <li>
                  <strong>Discover</strong> — workshops, requirements & rapid research.
                </li>
                <li>
                  <strong>Prototype</strong> — quick proof-of-concepts and UX validation.
                </li>
                <li>
                  <strong>Build</strong> — engineering sprints, QA and iterative delivery.
                </li>
                <li>
                  <strong>Support</strong> — maintenance, monitoring and continuous improvements.
                </li>
              </ol>
            </section>
          </aside>
        </div>

        {/* Why Thirdvizion */}
        <section className="mt-12 p-6 bg-gradient-to-r from-white/4 to-white/2 border border-white/5 rounded-2xl">
          <h3 className="text-xl font-bold">Why Thirdvizion?</h3>
          <p className="mt-3 text-gray-300 max-w-3xl">
            Thirdvizion exists because immersive experiences should solve real problems — not just look impressive.
            We blend creative 3D/AR/VR skills with enterprise engineering so your project is beautiful, secure and
            maintainable. Choose us when you want end-to-end delivery, teams experienced in both immersive content
            and enterprise systems, fast prototyping to validate ideas, and a local presence in Reteri.
          </p>
        </section>

        {/* Clients & Testimonials (placeholders) */}
        <section className="mt-12">
          <h3 className="text-xl font-bold">Trusted by</h3>
          <div className="mt-6 flex items-center gap-6 overflow-x-auto py-2">
            {/* Placeholder logo boxes */}
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-32 h-12 bg-white/5 rounded-md flex items-center justify-center text-xs text-gray-400">
                Client {i + 1}
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <blockquote className="p-6 bg-black/60 border border-white/5 rounded-xl">
              “Thirdvizion turned our training program into a hands-on VR experience that reduced onboarding time and
              improved retention. The team was responsive and delivered on schedule.” — Client Name, Role
            </blockquote>
            <blockquote className="p-6 bg-black/60 border border-white/5 rounded-xl">
              “Fast prototyping saved us months of rework — the prototypes made stakeholder buy-in effortless.” — Client
              Name, Role
            </blockquote>
            <blockquote className="p-6 bg-black/60 border border-white/5 rounded-xl">
              “The integration with our CRM and cloud stack was smooth; the ops team helped us keep uptime high.” — Client
              Name, Role
            </blockquote>
          </div>
        </section>

        {/* Team snapshot */}
        <section className="mt-12">
          <h3 className="text-xl font-bold">Meet the team</h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              ["[Founder Name]", "Founder & CEO — Product leader with experience in immersive tech and enterprise engineering."],
              ["[Lead Artist]", "Lead 3D Artist — Creates visuals, assets and real-time materials."],
              ["[Lead Engineer]", "Senior Engineer — Backend, cloud and integrations lead."],
            ].map(([name, bio], i) => (
              <div key={i} className="p-4 bg-black/60 border border-white/5 rounded-xl">
                <div className="w-full h-40 bg-white/4 rounded-md mb-4 flex items-center justify-center text-gray-400">Headshot</div>
                <div className="font-semibold">{name}</div>
                <div className="text-sm text-gray-400">{bio}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA / Contact block */}
        <section id="contact" className="mt-12 p-8 bg-gradient-to-r from-orange-600/10 to-pink-600/8 border border-white/5 rounded-2xl text-center">
          <h3 className="text-2xl font-bold">Ready to build something immersive?</h3>
          <p className="mt-3 text-gray-300">Tell us about your idea — we’ll propose the best path forward.</p>
          <a href="/contact" className="mt-6 inline-block bg-orange-500 px-6 py-3 rounded-xl font-semibold shadow-lg">
            Start a project
          </a>
        </section>

        {/* Footer microcopy */}
        <footer className="mt-10 text-sm text-gray-500">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <div>© {new Date().getFullYear()} Thirdvizion. All rights reserved.</div>
            <div>Email: hello@thirdvizion.com | Location: Reteri</div>
          </div>
        </footer>
        
      </div>
    </section>
  );
}
