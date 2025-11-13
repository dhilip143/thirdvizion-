import Client1 from "/src/assets/partners/client1.png";
import Client2 from "/src/assets/partners/client2.png";
import Client3 from "/src/assets/partners/client3.png";
import Client4 from "/src/assets/partners/client4.png";
import Client5 from "/src/assets/partners/client5.png";
import Client6 from "/src/assets/partners/client6.png";
import Client7 from "/src/assets/partners/c1.svg";
import Client8 from "/src/assets/partners/c2.png";
import Client9 from "/src/assets/partners/c3.png";
import Client10 from "/src/assets/partners/c4.png";
import Client11 from "/src/assets/partners/c5.png";
import Client12 from "/src/assets/partners/c6.png";
import Client13 from "/src/assets/partners/c7.png";

const slides = [Client1, Client2, Client3, Client4, Client5, Client6, Client7, Client8, Client9, Client10, Client11, Client12, Client13];

const CarousalRow = ({ reverse = false, duration = 14, compact = false }) => {
  return (
    <div className="relative w-full overflow-hidden my-2">
      {/* Fade overlays */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>

      {/* Sliding Row */}
      <div
        className="flex items-center"
        style={{
          width: `${slides.length * 2 * 10}rem`,
          animation: `${reverse ? "reverseScroll" : "scroll"} ${duration}s linear infinite`,
        }}
      >
        {slides.concat(slides).map((img, idx) => (
          <div
            key={idx}
            className={`flex-shrink-0 ${
              compact 
                ? "w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-3" 
                : "w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-30 mx-4"
            } flex justify-center items-center group`}
          >
            <div className="relative w-full h-full">
              <img
                src={img}
                alt={`slide-${idx}`}
                className="w-full h-full object-contain object-center filter grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
              />
              {/* Optional overlay for better hover effect */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-0 transition-opacity duration-500 ease-in-out"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Partners() {
  return (
    <div className="bg-black text-white py-12 relative font-['Outfit']">
     <h2
  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-3"
  style={{ fontFamily: "Outfit, sans-serif" }}
>
  Our <span className="text-yellow-500">Clients</span>
</h2>

      <p className="text-center text-white-400 text-xs md:text-lg px-4 sm:px-6 md:px-8 mb-8">
        Creating impact alongside our valued clients.
      </p>

      {/* Multiple rows with different directions and speeds */}
      <CarousalRow duration={12} />
      <CarousalRow reverse={true} duration={14} />
     

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