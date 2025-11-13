import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import TextReveal from "/src/Hooks/TextReveal.jsx";

const keysLayout = [
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"], // ✅ Added number row
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

const toolDescriptions = {
  CRM: `CRM (Customer Relationship Management) systems help businesses manage customer interactions, improve sales, track performance, and automate workflows. Examples include Salesforce, Zoho, and HubSpot.`,
  IAM: `IAM (Identity and Access Management) ensures the right individuals have the right access to the right resources. It improves security and compliance by managing authentication and authorization in organizations.`,
  CMS: `CMS (Content Management System) allows users to create, manage, and modify website content without needing deep technical knowledge. Examples: WordPress, Strapi, Sanity.`,
  ERP: `ERP (Enterprise Resource Planning) software integrates core business processes like finance, HR, supply chain, and inventory into a single system to improve efficiency.`,
  VR: `VR (Virtual Reality) immerses users in a computer-generated 3D environment using headsets like Meta Quest or HTC Vive, enabling interactive simulations and experiences.`,
  AR: `AR (Augmented Reality) overlays digital objects and information onto the real world. Used in apps like Pokémon Go, AR shopping experiences, and industrial training.`,
  "3D": `3D refers to three-dimensional objects or experiences, often used in modeling, animation, gaming, and product design. Tools include Blender, Maya, and Unity.`,
  "3RDVIZ": `Thirdvizion is an innovative platform or concept focusing on bridging technology, creativity, and user experience — empowering businesses with next-level digital solutions.`,
};

const KeyboardGame = () => {
  const keyRefs = useRef([]);
  const [inputValue, setInputValue] = useState("");
  const [activeTool, setActiveTool] = useState(null);
  const [activeEnter, setActiveEnter] = useState(false);

  // Animate keyboard load
  useEffect(() => {
    keyRefs.current.forEach((key, idx) => {
      gsap.fromTo(
        key,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          delay: idx * 0.03,
          duration: 0.5,
          ease: "back.out(1.7)",
        }
      );
    });
  }, []);

  const animateKey = (key) => {
    const ref = keyRefs.current.find((el) => el?.innerText === key);
    if (ref) {
      gsap.fromTo(
        ref,
        { scale: 1 },
        { scale: 0.85, yoyo: true, repeat: 1, duration: 0.15 }
      );
    }
  };

  const handleKeyClick = (key) => {
    animateKey(key);
    setInputValue((prev) => prev + key);
  };

  const handleEnter = () => {
    if (!inputValue.trim()) return;

    const word = inputValue.trim().toUpperCase();

    if (toolDescriptions[word]) {
      setActiveTool(word);
    } else {
      setActiveTool(null);
    }

    setInputValue(""); // clear input
  };

  const handleClear = () => {
    setInputValue("");
    setActiveTool(null);
  };

  // ✅ Add keyboard typing support (letters + numbers)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault(); // prevent any form submission or default action

        // animate the ENTER button
        setActiveEnter(true);

        // call handleEnter logic safely
        if (inputValue.trim()) {
          const word = inputValue.trim().toUpperCase();
          if (toolDescriptions[word]) {
            setActiveTool(word);
          } else {
            setActiveTool(null);
          }
          setInputValue(""); // clear input
        }

        // remove active state after animation
        setTimeout(() => setActiveEnter(false), 150);
        return;
      }

      if (e.key === "Backspace") {
        setInputValue((prev) => prev.slice(0, -1));
        return;
      }

      const key = e.key.toUpperCase();
      if (/^[A-Z0-9]$/.test(key)) {
        animateKey(key);
        setInputValue((prev) => prev + key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [inputValue]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center  bg-black text-white px-6 overflow-hidden">
      {/* Title + Description Reveal */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          },
        }}
        className="text-center mb-6"
      >
        <TextReveal>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
         style={{ fontFamily: "outfit, sans-serif" }} >
            Interactive Keyboard Game
          </motion.h1>
        </TextReveal>
        <TextReveal delay={0.2}>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
         style={{ fontFamily: "worksans, sans-serif" }} >
            Type or click and hit ENTER to reveal the description.
          </motion.p>
        </TextReveal>
      </motion.div>

      {/* Input + Buttons */}
      <div className="flex items-center space-x-3 mb-6">
        <input
          type="text"
          value={inputValue}
          readOnly
          placeholder="Type letters/numbers here..."
          className="px-4 py-2 rounded-xl text-white border-white border-2 text-lg font-bold"
        />
        <button
          onClick={handleEnter}
          className={`px-4 py-2 rounded-xl font-bold transition-all duration-150 border-2
    ${activeEnter
              ? "bg-white scale-95"
              : "bg-white text-black hover:text-white hover- hover:bg-transparent"
            }`}
      style={{ fontFamily: "worksans, sans-serif" }}  >
          ENTER
        </button>

        <button
          onClick={handleClear}
          className="border-1 px-4 py-2 rounded-xl font-bold"
      style={{ fontFamily: "worksans, sans-serif" }}  >
          CLEAR
        </button>
      </div>

      {!activeTool && (
        <div className="text-gray-400 text-lg animate-pulse text-center pb-1" style={{ fontFamily: "worksans, sans-serif" }}>
          Available keywords: {Object.keys(toolDescriptions).join(", ")}
        </div>
      )}

      {/* Tool Description */}
      {activeTool && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl mb-10 bg-white/50 backdrop-blur-2xl p-6 rounded-2xl shadow-xl"
       style={{ fontFamily: "worksans, sans-serif" }} >
          <h2 className="text-3xl font-extrabold mb-4">{activeTool}</h2>
          <p className="text-lg leading-relaxed">
            {toolDescriptions[activeTool]}
          </p>
        </motion.div>
      )}


      <div className="keyboard mt-auto mb-35">
        {keysLayout.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center space-x-3 mb-3">
            {row.map((key, keyIndex) => {
              const refIndex = rowIndex * 10 + keyIndex;
              return (
                <div
                  key={keyIndex}
                  ref={(el) => (keyRefs.current[refIndex] = el)}
                  onClick={() => handleKeyClick(key)}
                  className="key"
                >
                  <i
                    data-key={key.toLowerCase()}
                    style={{
                      zIndex: 1,
                      color: "#000",
                      fontSize: "1.2em",
                      fontWeight: "bold",
                      pointerEvents: "none",
                    }}
                  >
                    {key}
                  </i>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyboardGame;
