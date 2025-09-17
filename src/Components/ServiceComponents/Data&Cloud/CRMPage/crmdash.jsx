import cr from "/src/assets/AboutImages/crm dashboard 1.png";

export default function Crmdash() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-black text-white">
      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-4 text-center">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold tracking-wide drop-shadow-lg">
          CRM Dashboard
        </h1>
        <p className="max-w-2xl text-base md:text-lg text-white/70">
          Manage your leads, track performance, and visualize insights — all in
          one powerful dashboard.
        </p>

        {/* Image with hover zoom effect */}
        <div className="w-full max-w-5xl flex items-center justify-center mt-10">
          <img
            src={cr}
            alt="CRM Dashboard"
            className="rounded-2xl shadow-2xl border border-white/10 max-w-full h-auto transform transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
