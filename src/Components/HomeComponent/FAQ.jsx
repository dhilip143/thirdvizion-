// src/components/FAQSection.jsx
import { useState } from "react";
import { ChevronRight, X, Plus } from "lucide-react";
import clsx from "clsx";

// 🟠 Categories
const categories = [
  "Immersive Tech",
  "Development",
  "Cloud & Infrastructure",
  "Enterprise Solutions",
  "Support & Settings",
];

// 🟠 FAQ Data for Thirdvizion
const faqData = {
  "Immersive Tech": [
    {
      question: "What immersive technologies does Thirdvizion provide?",
      answer:
        "We specialize in AR, VR, and 3D experiences that help businesses engage customers, improve training, and showcase products in interactive ways.",
    },
    {
      question: "Can immersive tech be integrated with my existing systems?",
      answer:
        "Yes, our AR/VR solutions are designed to seamlessly integrate with enterprise workflows, websites, and applications.",
    },
    {
      question: "Do you build custom 3D models?",
      answer:
        "Absolutely. Our 3D team creates high-fidelity custom models for AR/VR apps, games, and enterprise visualization.",
    },
  ],

  Development: [
    {
      question: "What kind of development services do you offer?",
      answer:
        "We provide end-to-end Web, Mobile App, and Game Development with modern frameworks and scalable architectures.",
    },
    {
      question: "Do you handle both frontend and backend?",
      answer:
        "Yes. Our team covers full-stack development including UI/UX, APIs, databases, and cloud integration.",
    },
    {
      question: "Can you modernize legacy applications?",
      answer:
        "Yes, we re-engineer and migrate old applications into modern, scalable, and secure platforms.",
    },
  ],

  "Cloud & Infrastructure": [
    {
      question: "Do you provide server and cloud management?",
      answer:
        "Yes. We manage AWS, Azure, and GCP infrastructures, ensuring scalability, uptime, and cost optimization.",
    },
    {
      question: "What about security?",
      answer:
        "We implement IAM solutions, firewalls, and compliance-based security layers to safeguard business data.",
    },
    {
      question: "Can you support hybrid or multi-cloud setups?",
      answer:
        "Yes, we design cloud architectures that balance performance, cost, and flexibility across providers.",
    },
  ],

  "Enterprise Solutions": [
    {
      question: "What enterprise solutions does Thirdvizion build?",
      answer:
        "We develop ERP, CRM, and custom enterprise applications that streamline operations and improve efficiency.",
    },
    {
      question: "Do you provide integration with third-party tools?",
      answer:
        "Yes. We integrate with payment systems, analytics, e-commerce platforms, and more.",
    },
    {
      question: "Can solutions be scaled for large organizations?",
      answer:
        "All our solutions are built with scalability in mind, ready to grow with your business needs.",
    },
  ],

  "Support & Settings": [
    {
      question: "How can I reach the Thirdvizion support team?",
      answer:
        "You can contact us via our support portal, email at support@thirdvizion.com, or live chat on the website.",
    },
    {
      question: "What are your support hours?",
      answer:
        "Our team is available 9 AM – 8 PM IST, Monday to Saturday. Priority support is available for enterprise clients.",
    },
    {
      question: "Do you offer ongoing maintenance?",
      answer:
        "Yes. We provide AMC (Annual Maintenance Contracts) and flexible support packages for long-term assistance.",
    },
  ],
};

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("Immersive Tech");
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-gray-200 py-16 px-6  shadow-md font-sans mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-3">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-sm text-gray-400 max-w-2xl mx-auto mb-10">
        Thirdvizion is your trusted partner for immersive technologies, cloud
        infrastructure, enterprise solutions, and development services. Here are
        answers to some of the most common questions.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-start gap-6 max-w-6xl mx-auto">
        {/* Category Dropdown for Mobile */}
        <div className="mb-4 md:hidden overflow-hidden w-full">
          <select
            className="w-full p-3 rounded-lg border border-gray-700 bg-gray-900 text-sm text-gray-200"
            value={activeCategory}
            onChange={(e) => {
              setActiveCategory(e.target.value);
              setOpenIndex(null);
            }}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Sidebar Category List for Desktop */}
        <div className="hidden md:flex flex-col gap-3 md:w-1/3">
          {categories.map((category) => (
            <button
              key={category}
              className={clsx(
                "rounded-lg px-4 py-3 text-left font-semibold border transition",
                activeCategory === category
                  ? "bg-gray-900 border-gray-700 shadow text-white"
                  : "bg-gray-800/50 border-transparent text-gray-400 hover:bg-gray-800 hover:text-gray-200"
              )}
              onClick={() => {
                setActiveCategory(category);
                setOpenIndex(null);
              }}
            >
              <div className="flex justify-between items-center">
                <span>{category}</span>
                <ChevronRight size={18} />
              </div>
            </button>
          ))}
        </div>

        {/* Right FAQ List */}
        <div className="md:w-2/3 space-y-4">
          {faqData[activeCategory]?.length > 0 ? (
            faqData[activeCategory].map((faq, index) => (
              <div
                key={index}
                className={clsx(
                  "rounded-xl border border-gray-700 bg-gray-900 shadow transition-all duration-300",
                  openIndex === index ? "ring-1 ring-orange-400" : ""
                )}
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex justify-between items-center p-4 text-left text-gray-200 text-sm font-medium"
                >
                  <span>{faq.question}</span>
                  {openIndex === index ? (
                    <X size={20} className="text-orange-400" />
                  ) : (
                    <Plus size={20} className="text-orange-400" />
                  )}
                </button>

                <div
                  className={clsx(
                    "overflow-hidden transition-all duration-500 ease-in-out",
                    openIndex === index ? "max-h-40 p-4 pt-0" : "max-h-0 p-0"
                  )}
                >
                  <p className="text-xs text-gray-400">{faq.answer}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No questions in this category.</p>
          )}
        </div>
      </div>
    </section>
  );
}
