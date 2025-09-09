import React from "react";
import {
  FaShieldAlt,
  FaPiggyBank,
  FaLaptopCode,
  FaHeadset,
} from "react-icons/fa";

export default function ServerChoose() {
  const features = [
    {
      id: 1,
      title: "Lifetime Guarantee",
      desc: "We ensure your servers are always backed by a reliable guarantee and replacement support.",
      icon: <FaShieldAlt className="text-4xl text-teal-400" />,
    },
    {
      id: 2,
      title: "Good Price",
      desc: "Affordable server management packages designed to fit startups and enterprises alike.",
      icon: <FaPiggyBank className="text-4xl text-teal-400" />,
    },
    {
      id: 3,
      title: "Free Software Updates",
      desc: "All managed servers include regular patches and security updates at no extra cost.",
      icon: <FaLaptopCode className="text-4xl text-teal-400" />,
    },
    {
      id: 4,
      title: "24/7 Support",
      desc: "Round-the-clock monitoring and support so your business never faces downtime.",
      icon: <FaHeadset className="text-4xl text-teal-400" />,
    },
  ];

  return (
    <section className="bg-black py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-teal-400 mb-12">
          Why Choose Us?
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((f) => (
            <div
              key={f.id}
              className="flex items-start gap-4 bg-neutral-900 p-6 rounded-2xl shadow-lg hover:shadow-teal-500/30 transition"
            >
              <div>{f.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                <p className="text-sm text-gray-400 mt-2">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
