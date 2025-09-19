// src/components/Vrtwo.jsx
import vrone from "/src/assets/vr/vrn.jpg";
import vrtwo from "/src/assets/vr/vrman.jpg";

export default function Vrtwo() {
  return (
    <section className="relative min-h-screen bg-zinc-950 flex flex-col items-center justify-center overflow-hidden">
      {/* Background neon blobs */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-violet-700/30 rounded-full blur-[180px]"></div>
      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-indigo-600/30 rounded-full blur-[180px]"></div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 px-10 py-20 w-full max-w-7xl relative z-10">
        {/* Left: Text + VR Man */}
        <div className="flex flex-col items-center md:items-start gap-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">
              Easy to Wear <br /> and Comfortable
            </h2>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Pellentesque dictum sem non nibh egestas mattis. Vivamus vel
              scelerisque ex. Ut varius sollicitudin libero, sed finibus lectus
              ultrices vitae. Nam aliquam eu magna ac facilisis.
            </p>
          </div>

          <div className="relative w-80 h-80 rounded-3xl overflow-hidden backdrop-blur-md bg-zinc-900/40 border border-violet-500/30 shadow-[0_0_50px_rgba(168,85,247,0.5)]">
            <img
              src={vrtwo}
              alt="VR Man"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>

        {/* Right: VR Headset + Text */}
        <div className="flex flex-col items-center md:items-end gap-12">
          <div className="relative w-80 h-80 rounded-3xl overflow-hidden backdrop-blur-md bg-zinc-900/40 border border-indigo-500/30 shadow-[0_0_50px_rgba(59,130,246,0.5)]">
            <img
              src={vrone}
              alt="VR Headset"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          <div className="space-y-6 text-right">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">
              Control Comes <br /> Naturally
            </h2>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Pellentesque dictum sem non nibh egestas mattis. Vivamus vel
              scelerisque ex. Ut varius sollicitudin libero, sed finibus lectus
              ultrices vitae. Nam aliquam eu magna ac facilisis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
