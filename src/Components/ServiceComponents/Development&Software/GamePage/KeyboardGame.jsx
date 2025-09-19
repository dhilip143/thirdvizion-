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
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black text-white px-6 overflow-hidden">
      {/* Title + Description Reveal */}
      <motion.div
        initial="hidden"
        animate="visible"
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
            className="text-4xl md:text-6xl font-extrabold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Interactive Keyboard Game
          </motion.h1>
        </TextReveal>
        <TextReveal delay={0.2}>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
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
    ${
      activeEnter
        ? "bg-white scale-95"
        : "bg-white text-black hover:text-white hover- hover:bg-transparent"
    }`}
        >
          ENTER
        </button>

        <button
          onClick={handleClear}
          className="border-1 px-4 py-2 rounded-xl font-bold"
        >
          CLEAR
        </button>
      </div>

      {!activeTool && (
        <div className="text-gray-400 text-lg animate-pulse text-center pb-1">
          Available keywords: {Object.keys(toolDescriptions).join(", ")}
        </div>
      )}

      {/* Tool Description */}
      {activeTool && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl mb-10 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-6 rounded-2xl shadow-xl"
        >
          <h2 className="text-3xl font-extrabold mb-4">{activeTool}</h2>
          <p className="text-lg leading-relaxed">
            {toolDescriptions[activeTool]}
          </p>
        </motion.div>
      )}

    
      <div className="keyboard mb-10">
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
// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { gsap } from "gsap";
// import TextReveal from "/src/Hooks/TextReveal.jsx";

// const keysLayout = [
//   ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
//   ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
//   ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
//   ["Z", "X", "C", "V", "B", "N", "M"],
// ];

// const toolDescriptions = {
//   CRM: `CRM (Customer Relationship Management) systems help businesses manage customer interactions, improve sales, track performance, and automate workflows. Examples include Salesforce, Zoho, and HubSpot.`,
//   IAM: `IAM (Identity and Access Management) ensures the right individuals have the right access to the right resources. It improves security and compliance by managing authentication and authorization in organizations.`,
//   CMS: `CMS (Content Management System) allows users to create, manage, and modify website content without needing deep technical knowledge. Examples: WordPress, Strapi, Sanity.`,
//   ERP: `ERP (Enterprise Resource Planning) software integrates core business processes like finance, HR, supply chain, and inventory into a single system to improve efficiency.`,
//   VR: `VR (Virtual Reality) immerses users in a computer-generated 3D environment using headsets like Meta Quest or HTC Vive, enabling interactive simulations and experiences.`,
//   AR: `AR (Augmented Reality) overlays digital objects and information onto the real world. Used in apps like Pokémon Go, AR shopping experiences, and industrial training.`,
//   "3D": `3D refers to three-dimensional objects or experiences, often used in modeling, animation, gaming, and product design. Tools include Blender, Maya, and Unity.`,
//   "3RDVIZ": `Thirdvizion is an innovative platform or concept focusing on bridging technology, creativity, and user experience — empowering businesses with next-level digital solutions.`,
// };

// const KeyboardGame = () => {
//   const keyRefs = useRef([]);
//   const [inputValue, setInputValue] = useState("");
//   const [activeTool, setActiveTool] = useState(null);
//   const [activeEnter, setActiveEnter] = useState(false);

//   // Animate keyboard load
//   useEffect(() => {
//     keyRefs.current.forEach((key, idx) => {
//       gsap.fromTo(
//         key,
//         { scale: 0.9, opacity: 0 },
//         {
//           scale: 1,
//           opacity: 1,
//           delay: idx * 0.03,
//           duration: 0.5,
//           ease: "back.out(1.7)",
//         }
//       );
//     });
//   }, []);

//   const animateKey = (key) => {
//     const ref = keyRefs.current.find((el) => el?.innerText === key);
//     if (ref) {
//       gsap.fromTo(ref, { scale: 1 }, { scale: 0.85, yoyo: true, repeat: 1, duration: 0.15 });
//     }
//   };

//   const handleKeyClick = (key) => {
//     animateKey(key);
//     setInputValue((prev) => prev + key);
//   };

//   const handleEnter = () => {
//     if (!inputValue.trim()) return;
//     const word = inputValue.trim().toUpperCase();
//     if (toolDescriptions[word]) {
//       setActiveTool(word);
//     } else {
//       setActiveTool(null);
//     }
//     setInputValue("");
//   };

//   const handleClear = () => {
//     setInputValue("");
//     setActiveTool(null);
//   };

//   // ✅ Keyboard typing support
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === "Enter") {
//         e.preventDefault();
//         setActiveEnter(true);

//         if (inputValue.trim()) {
//           const word = inputValue.trim().toUpperCase();
//           if (toolDescriptions[word]) setActiveTool(word);
//           else setActiveTool(null);
//           setInputValue("");
//         }
//         setTimeout(() => setActiveEnter(false), 150);
//         return;
//       }

//       if (e.key === "Backspace") {
//         setInputValue((prev) => prev.slice(0, -1));
//         return;
//       }

//       const key = e.key.toUpperCase();
//       if (/^[A-Z0-9]$/.test(key)) {
//         animateKey(key);
//         setInputValue((prev) => prev + key);
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [inputValue]);

//   return (
//     <div className="w-full min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 md:px-8 overflow-hidden">
//       {/* Title + Subtitle */}
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={{
//           hidden: { opacity: 0, y: 20 },
//           visible: {
//             opacity: 1,
//             y: 0,
//             transition: { duration: 0.8, ease: "easeOut" },
//           },
//         }}
//         className="text-center mb-6"
//       >
//         <TextReveal>
//           <motion.h1
//             className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Interactive Keyboard Game
//           </motion.h1>
//         </TextReveal>
//         <TextReveal delay={0.2}>
//           <motion.p
//             className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl md:max-w-2xl mx-auto"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             Type or click and hit ENTER to reveal the description.
//           </motion.p>
//         </TextReveal>
//       </motion.div>

//       {/* Input + Buttons */}
//       <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
//         <input
//           type="text"
//           value={inputValue}
//           readOnly
//           placeholder="Type letters/numbers..."
//           className="px-3 py-2 sm:px-4 sm:py-2 rounded-xl text-white border-white border-2 text-base sm:text-lg font-bold bg-transparent"
//         />
//         <button
//           onClick={handleEnter}
//           className={`px-3 py-2 sm:px-4 sm:py-2 rounded-xl font-bold text-sm sm:text-base border-2 transition-all duration-150 
//           ${activeEnter ? "bg-white text-black scale-95" : "bg-white text-black hover:bg-transparent hover:text-white"}`}
//         >
//           ENTER
//         </button>

//         <button
//           onClick={handleClear}
//           className="px-3 py-2 sm:px-4 sm:py-2 rounded-xl font-bold text-sm sm:text-base border-2 hover:bg-white hover:text-black transition"
//         >
//           CLEAR
//         </button>
//       </div>

//       {!activeTool && (
//         <div className="text-gray-400 text-sm sm:text-base text-center pb-2 px-2 max-w-lg">
//           Available keywords: {Object.keys(toolDescriptions).join(", ")}
//         </div>
//       )}

//       {/* Tool Description */}
//       {activeTool && (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.4 }}
//           className="max-w-2xl mb-10 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-6 rounded-2xl shadow-xl"
//         >
//           <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">{activeTool}</h2>
//           <p className="text-base sm:text-lg leading-relaxed">{toolDescriptions[activeTool]}</p>
//         </motion.div>
//       )} 

//       {/* Responsive Keyboard */}
//       <div className="keyboard mb-10 w-full max-w-3xl sm:w-2xl mx-auto px-2 sm:px-4 overflow-x-hidden">
//         {keysLayout.map((row, rowIndex) => (
//           <div key={rowIndex} className="flex justify-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
//             {row.map((key, keyIndex) => {
//               const refIndex = rowIndex * 10 + keyIndex;
//               return (
//                 <div
//                   key={keyIndex}
//                   ref={(el) => (keyRefs.current[refIndex] = el)}
//                   onClick={() => handleKeyClick(key)}
//                   className="flex items-center justify-center rounded-lg cursor-pointer select-none
//                   bg-gradient-to-br from-gray-700 to-gray-800 transition-all duration-200
//                   w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-xs sm:text-base md:text-lg font-bold"
//                 >
//                   {key}
//                 </div>
//               );
//             })}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default KeyboardGame;
