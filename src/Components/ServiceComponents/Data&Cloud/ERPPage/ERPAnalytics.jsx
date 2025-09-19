import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function WhoWeAre() {
  const features = [
    {
      title: "ERP",
      desc: "ERP (Enterprise Resource Planning) is software that streamlines and integrates business processes.",
    },
    {
      title: "CRM",
      desc: "CRM (Customer Relationship Management) manages customer interactions and sales.",
    },
    {
      title: "HRMS",
      desc: "HRMS (Human Resource Management System) manages HR processes efficiently.",
    },
    {
      title: "POS",
      desc: "POS (Point of Sale) processes sales transactions and payments.",
    },
    {
      title: "INFANTRY",
      desc: "Infantry is not a business system; did you mean Inventory? (Manages stock tracking and supply.)",
    },
    {
      title: "SALES",
      desc: "Sales handles customer purchases and revenue tracking.",
    },
  ];

  return (
    <div className=" text-white min-h-screen flex flex-col items-center px-6 py-16">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-4">Who Are We?</h2>
      <p className="text-neutral-400 text-center max-w-2xl mb-8">
        ThirdVizion is a consulting and services company specializing in Odoo-based business
        solutions. Our goal is to target specific business challenges with manageable,
        affordable software.
      </p>

      {/* Grid */}
      <div className="max-w-6xl w-full">
        {/* First row - fixed 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className="bg-gray-900/40 border border-gray-800 hover:border-cyan-400 hover:scale-105 transition rounded-xl h-80 p-6 text-center shadow hover:shadow-lg hover:border-neutral-600 transition"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neutral-800 flex items-center justify-center text-xl font-bold text-blue-400">
                {item.title.charAt(0)}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-neutral-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Remaining rows - auto fit full width */}
        <div className="grid gap-6 mt-6 [grid-template-columns:repeat(auto-fit,minmax(0,1fr))]">
          {features.slice(4).map((item, index) => (
            <div
              key={index + 4}
              className="bg-gray-900/40 border border-gray-800 hover:border-cyan-400 hover:scale-105 transition rounded-xl h-80 p-6 text-center shadow hover:shadow-lg hover:border-neutral-600 transition"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blur-400 flex items-center justify-center text-xl font-bold text-blue-400">
                {item.title.charAt(0)}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-neutral-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
