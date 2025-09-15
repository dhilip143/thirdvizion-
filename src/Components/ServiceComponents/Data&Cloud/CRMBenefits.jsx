import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const keysLayout = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

// Tool descriptions
const toolDescriptions = {
  CRM: `CRM (Customer Relationship Management) systems like Salesforce or Zoho CRM help businesses manage customer interactions, improve sales, track performance, and automate workflows. Many business people use CRM tools to stay organized and drive growth.`,
  Zoho: `Zoho CRM is a cloud-based tool that helps businesses automate sales, marketing, and customer support. It is known for being affordable, user-friendly, and offering integrations with other Zoho applications.`,
  Salesforce: `Salesforce CRM is one of the most powerful and widely used platforms for managing customer relationships. It provides advanced features for sales automation, analytics, AI-driven insights, and scalable enterprise solutions.`,
};

const CRMBenefits = () => {
  const keyRefs = useRef([]);
  const [clickedKeys, setClickedKeys] = useState([]);
  const [activeTool, setActiveTool] = useState(null);

  // GSAP Animation for keyboard load
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

  const handleKeyHover = (e) => {
    gsap.to(e.target, { scale: 1.15, duration: 0.2, ease: "power1.out" });
  };

  const handleKeyLeave = (e) => {
    gsap.to(e.target, { scale: 1, duration: 0.2, ease: "power1.out" });
  };

  const handleKeyClick = (key) => {
    // Small click animation
    gsap.fromTo(
      keyRefs.current.find((ref) => ref?.innerText === key),
      { scale: 1 },
      { scale: 0.8, yoyo: true, repeat: 1, duration: 0.15, ease: "power1.inOut" }
    );

    // Check CRM
    if (["C", "R", "M"].includes(key)) {
      setClickedKeys((prev) => {
        const updated = Array.from(new Set([...prev, key]));
        if (
          updated.includes("C") &&
          updated.includes("R") &&
          updated.includes("M")
        ) {
          setActiveTool("CRM");
        }
        return updated;
      });
      return;
    }

    // Check Zoho
    if (["Z", "O", "H"].includes(key)) {
      setClickedKeys((prev) => {
        const updated = Array.from(new Set([...prev, key]));
        if (
          updated.includes("Z") &&
          updated.includes("O") &&
          updated.includes("H")
        ) {
          setActiveTool("Zoho");
        }
        return updated;
      });
      return;
    }

    // Check Salesforce
    if (["S", "A", "L"].includes(key)) {
      setClickedKeys((prev) => {
        const updated = Array.from(new Set([...prev, key]));
        if (
          updated.includes("S") &&
          updated.includes("A") &&
          updated.includes("L")
        ) {
          setActiveTool("Salesforce");
        }
        return updated;
      });
      return;
    }

    // Normal letter → reset to no description
    setActiveTool(null);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      {/* Tool Full Description */}
      {activeTool && (
        <div className="max-w-2xl mb-10 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-6 rounded-2xl shadow-xl animate-fadeIn">
          <h2 className="text-3xl font-extrabold mb-4">{activeTool}</h2>
          <p className="text-lg leading-relaxed">
            {toolDescriptions[activeTool]}
          </p>
        </div>
      )}

      {/* Keyboard */}
      <div className="flex flex-col space-y-3 mb-10">
        {keysLayout.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center space-x-3">
            {row.map((key, keyIndex) => {
              const isSpecial = [
                "C",
                "R",
                "M",
                "Z",
                "O",
                "H",
                "S",
                "A",
                "L",
              ].includes(key);
              const isActive = clickedKeys.includes(key);
              return (
                <div
                  key={keyIndex}
                  ref={(el) => (keyRefs.current.push(el))}
                  onMouseEnter={handleKeyHover}
                  onMouseLeave={handleKeyLeave}
                  onClick={() => handleKeyClick(key)}
                  className={`relative w-14 h-14 flex items-center justify-center rounded-xl cursor-pointer font-bold text-lg select-none
                    ${
                      isSpecial && isActive
                        ? "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg shadow-pink-500/50"
                        : "bg-gradient-to-br from-gray-700 to-gray-800"
                    }
                    transition-all duration-200
                  `}
                >
                  {key}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Instruction message */}
      {!activeTool && (
        <div className="text-gray-400 text-lg animate-pulse text-center">
          Click letters to explore •  
          <br />C + R + M → CRM • Z + O + H → Zoho • S + A + L → Salesforce
        </div>
      )}
    </div>
  );
};

export default CRMBenefits;
