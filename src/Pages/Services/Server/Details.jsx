// import React from "react";
// import "./Curve.css"; // custom CSS for the connector curve

// function ServerManagementUI() {
//   return (
//     <div className="min-h-screen bg-black text-teal-400 p-8 space-y-16">
//       {/* 🔹 Top bar */}
//       <header className="flex justify-between items-center mb-6">
//         {/* <input
//           type="text"
//           placeholder="Search..."
//           className="px-4 py-2 rounded-full bg-neutral-900 text-teal-400 placeholder-teal-600 focus:outline-none w-1/3"
//         /> */}
//         {/* <div className="flex gap-4">
//           <button className="px-6 py-2 rounded-full bg-neutral-800 text-teal-400 hover:bg-neutral-700">
//             Get Started
//           </button>
//           <span className="uppercase tracking-widest text-sm text-teal-600">
//             Collaboration
//           </span>
//         </div> */}
//       </header>

//       {/* 🔹 Hero Section */}
//       <section className="grid grid-cols-2 gap-8 items-center">
//         {/* Left Title */}
//         <div className="bg-neutral-900 rounded-3xl p-8 shadow-lg">
//           <h1 className="text-5xl font-extrabold">SERVER</h1>
//           <h2 className="text-4xl font-bold text-teal-400 -mt-2">
//             MANAGEMENT
//           </h2>
//           <p className="mt-4 text-sm text-teal-600">
//             We provide comprehensive server management services, ensuring your
//             servers are secure, reliable, and perform optimally. From hardware
//             tuning to virtualization and cloud integration, we deliver complete
//             enterprise-grade solutions.
//           </p>
//           <div className="flex gap-4 mt-6">
//             <button className="px-6 py-2 rounded-full bg-neutral-800 text-teal-400">
//               Logout
//             </button>
//             <button className="px-6 py-2 rounded-full bg-teal-400 text-black font-semibold">
//               Accounting
//             </button>
//           </div>
//         </div>

//         {/* Right Info Card */}
//         <div className="bg-neutral-950 rounded-3xl p-8 shadow-xl">
//           <h3 className="text-xl font-bold">What is Server Management?</h3>
//           <p className="mt-3 text-sm text-teal-600">
//             Server management involves configuring, monitoring, and maintaining
//             servers to ensure smooth, secure, and reliable operations. Our team
//             handles everything: updates, security patches, scaling, and disaster
//             recovery planning.
//           </p>
//         </div>
//       </section>

//       {/* 🔹 Connector Curve */}
//       <div className="curve-connector mt-10 flex justify-center items-center">
//         <div className="bg-neutral-800 text-teal-400 px-6 py-2 rounded-full shadow-lg">
//           SCROLL
//         </div>
//       </div>

//       {/* 🔹 Storage & Virtualization */}
//       <section className="grid grid-cols-2 gap-8">
//         <div className="bg-neutral-900 rounded-3xl p-8 shadow-lg">
//           <h4 className="text-lg font-bold">Storage Solutions</h4>
//           <p className="mt-3 text-sm text-teal-600">
//             We deploy enterprise NAS and SAN systems using TrueNAS, Synology,
//             and Dell EMC storage. With RAID, snapshots, and offsite backup,
//             your data stays safe and highly available.
//           </p>
//         </div>
//         <div className="bg-neutral-900 rounded-3xl p-8 shadow-lg">
//           <h4 className="text-lg font-bold">Virtualization</h4>
//           <p className="mt-3 text-sm text-teal-600">
//             Proxmox, VMware, and Hyper-V let us consolidate workloads,
//             optimize hardware usage, and enable live migration of virtual
//             machines with zero downtime.
//           </p>
//         </div>
//       </section>

//       {/* 🔹 Cloud & VPS */}
//       <section className="grid grid-cols-2 gap-8">
//         <div className="bg-neutral-900 rounded-3xl p-8 shadow-lg">
//           <h4 className="text-lg font-bold">Cloud Services</h4>
//           <p className="mt-3 text-sm text-teal-600">
//             We integrate AWS, Azure, and Google Cloud to extend your
//             infrastructure seamlessly into the cloud, ensuring scalability and
//             cost efficiency.
//           </p>
//         </div>
//         <div className="bg-neutral-900 rounded-3xl p-8 shadow-lg">
//           <h4 className="text-lg font-bold">VPS Hosting</h4>
//           <p className="mt-3 text-sm text-teal-600">
//             Our VPS hosting solutions offer dedicated resources, full root
//             access, and high-speed performance for businesses that need more
//             than shared hosting.
//           </p>
//         </div>
//       </section>

//       {/* 🔹 NaaS */}
//       <section className="bg-neutral-900 rounded-3xl p-8 shadow-lg">
//         <h4 className="text-lg font-bold">Network as a Service (NaaS)</h4>
//         <p className="mt-3 text-sm text-teal-600">
//           With NaaS, we provide secure, on-demand network infrastructure
//           delivered as a fully managed service. Gain flexibility, faster
//           deployments, and lower capital expenses.
//         </p>
//       </section>

//       {/* 🔹 Why Choose Us */}
//       <section className="bg-neutral-950 rounded-3xl p-10 shadow-xl text-center">
//         <h3 className="text-2xl font-bold mb-4">Why Choose Our Services?</h3>
//         <div className="grid grid-cols-3 gap-8 text-sm text-teal-600">
//           <div>
//             <h5 className="text-teal-400 font-semibold">Expert Support</h5>
//             <p className="mt-2">
//               Certified engineers available 24/7 for proactive monitoring and
//               quick issue resolution.
//             </p>
//           </div>
//           <div>
//             <h5 className="text-teal-400 font-semibold">Cost Efficiency</h5>
//             <p className="mt-2">
//               Optimize resources with tailored solutions that save money without
//               sacrificing reliability.
//             </p>
//           </div>
//           <div>
//             <h5 className="text-teal-400 font-semibold">Security First</h5>
//             <p className="mt-2">
//               End-to-end encryption, firewall management, and intrusion
//               detection to safeguard your infrastructure.
//             </p>
//           </div>
//         </div>
//         <button className="mt-6 px-6 py-3 rounded-full bg-teal-400 text-black font-semibold hover:bg-teal-300">
//           Next
//         </button>
//       </section>
//     </div>
//   );
// }

// export default ServerManagementUI;
import React from "react";
import { FaShieldAlt, FaPiggyBank, FaLaptopCode, FaHeadset } from "react-icons/fa";

export default function FeaturesGrid() {
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
