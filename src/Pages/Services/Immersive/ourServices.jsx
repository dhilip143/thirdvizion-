import React from "react";
import { FaUsersCog, FaShieldAlt, FaLaptopCode } from "react-icons/fa";

const ServicesPage = () => {
  const services = [
    {
      title: "CRM Solutions",
      description: "We deliver powerful CRM systems that help you manage customers, track sales, and grow your business.",
      icon: <FaUsersCog className="text-teal-400 text-4xl" />,
    },
    {
      title: "IAM Services",
      description: "Our IAM solutions provide secure identity management, access control, and authentication for enterprises.",
      icon: <FaShieldAlt className="text-teal-400 text-4xl" />,
    },
    {
      title: "IT Services",
      description: "We offer scalable IT services, from cloud deployment to infrastructure support, ensuring smooth operations.",
      icon: <FaLaptopCode className="text-teal-400 text-4xl" />,
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center px-8 py-20">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* LEFT CONTENT */}
        <div>
          <span className="uppercase tracking-widest text-teal-400 text-sm font-semibold">
            Our Services
          </span>

          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mt-4">
            WHAT WE <span className="text-teal-400">DO?</span>
          </h2>

          <p className="text-gray-400 mt-6 leading-relaxed">
            We provide cutting-edge digital services to empower businesses with automation, 
            security, and innovation. From customer relationship management to IT infrastructure, 
            we ensure your business is future-ready.
          </p>

          <button className="mt-6 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-black font-semibold rounded-lg shadow-md transition">
            VIEW ALL
          </button>
        </div>

        {/* RIGHT CONTENT - SERVICE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-xl p-6 shadow-lg flex flex-col items-center text-center hover:bg-gray-800 transition"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesPage;
