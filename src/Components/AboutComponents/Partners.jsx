import Client1 from "/src/assets/partners/client1.png";
import Client2 from "/src/assets/partners/client2.png";
import Client3 from "/src/assets/partners/client3.png";
import Client4 from "/src/assets/partners/client4.png";
import Client5 from "/src/assets/partners/client5.png";
import Client6 from "/src/assets/partners/client6.png";

const slides = [Client1, Client2, Client3, Client4, Client5, Client6];

const CarousalRow = ({ reverse = false, duration = 14 }) => {
  return (
    <div className="relative w-full overflow-hidden my-4">
      {/* Fade overlays */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>

      {/* Sliding Row */}
      <div
        className="flex items-center"
        style={{
          width: `${slides.length * 2 * 12}rem`,
          animation: `${reverse ? "reverseScroll" : "scroll"} ${duration}s linear infinite`,
        }}
      >
        {slides.concat(slides).map((img, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-6 flex justify-center items-center"
          >
            <img
              src={img}
              alt={`slide-${idx}`}
              className="w-full h-full object-contain object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Partners() {
  return (
    <div className="bg-black text-white py-12 relative font-['Outfit']">
      <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-3 font-['Outfit']">
        Our Clients
      </h2>
      <p className="text-center text-gray-400 text-xs md:text-lg px-4 sm:px-6 md:px-8 mb-8 font-['Outfit']">
        Creating impact alongside our valued clients.
      </p>

      <CarousalRow duration={14} />

      {/* Tailwind animations */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes reverseScroll {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}