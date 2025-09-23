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
      title: "INVENTORY",
      desc: "Inventory management tracks stock levels, orders, and supply to avoid shortages or overstock.",
    },
    {
      title: "SALES",
      desc: "Sales handles customer purchases and revenue tracking.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-20">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-white via-[#dfe1ff] to-[#a9afff] bg-clip-text text-transparent mb-4">
        Who Are We?
      </h2>
      <p className="text-[#c7cbff] text-center max-w-2xl mb-12 leading-relaxed">
        ThirdVizion is a consulting and services company specializing in Odoo-based
        business solutions. Our goal is to solve specific business challenges with
        manageable, affordable software.
      </p>

      {/* Grid */}
      <div className="max-w-6xl w-full">
        {/* First row - fixed 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className="bg-[#7C86FF10] border border-[#7C86FF20] rounded-2xl p-6 text-center  backdrop-blur-md shadow-[0_0_25px_rgba(124,134,255,0.1)] hover:shadow-[0_0_40px_rgba(124,134,255,0.3)] hover:border-[#7C86FF60] hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#7C86FF15] flex items-center justify-center text-xl font-bold text-[#a9afff] shadow-inner shadow-[inset_0_0_10px_rgba(124,134,255,0.3)]">
                {item.title.charAt(0)}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-[#c7cbff] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Remaining rows - auto fit */}
        <div className="grid gap-6 mt-6 grid-cols-2 ">
          {features.slice(4).map((item, index) => (
            <div
              key={index + 4}
              className="bg-[#7C86FF10] border border-[#7C86FF20] rounded-2xl p-6 text-center  backdrop-blur-md shadow-[0_0_25px_rgba(124,134,255,0.1)] hover:shadow-[0_0_40px_rgba(124,134,255,0.3)] hover:border-[#7C86FF60] hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#7C86FF15] flex items-center justify-center text-xl font-bold text-[#a9afff] shadow-inner shadow-[inset_0_0_10px_rgba(124,134,255,0.3)]">
                {item.title.charAt(0)}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-[#c7cbff] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
