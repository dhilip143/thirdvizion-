// import { ArrowUpRight } from "lucide-react";

// const capabilitiesData = [
//   {
//     id: "01/6",
//     title: "UI/UX EXCELLENCE",
//     desc: "Intuitive designs for seamless digital journeys.",
//     children: ["Design Tools", "Layouts", "Components", "User Focus"],
//   },
//   {
//     id: "02/6",
//     title: "ENTERPRISE WEB SOLUTIONS",
//     desc: "Custom-built, scalable platforms.",
//     children: ["E-commerce", "Portals", "Dashboards"],
//   },
//   {
//     id: "03/6",
//     title: "CLOUD POWER",
//     desc: "Transforming businesses with secure, scalable infrastructure.",
//     children: ["AWS", "Azure", "Google Cloud"],
//   },
// ];

// export default function Categories() {
//   return (
//     <section className="bg-black text-white min-h-screen px-6 md:px-12 py-16">
//       <div className="space-y-40">
//         {capabilitiesData.map((cap, index) => (
//           <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-10">
//             {/* Left Sticky Section (Title + Number) with gray background */}
//             <div className="md:sticky md:top-20 h-fit bg-gray-300 p-6 rounded-lg">
//               <div className="flex items-baseline gap-4">
//                 <div className="text-5xl md:text-6xl text-black/20 font-bold select-none">
//                   {cap.id}
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-extrabold tracking-wide text-black">
//                     {cap.title}
//                   </h3>
//                   <p className="text-gray-800 mt-1 max-w-sm leading-relaxed">
//                     {cap.desc}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Right Scrollable Child Cards with black background */}
//             <div className="space-y-6">
//               {cap.children.map((child, i) => (
//                 <div
//                   key={i}
//                   className="rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-purple-600/70 cursor-pointer"
//                 >
//                   {/* Top Black Card */}
//                   <div className="bg-black border border-gray-700 p-6 flex justify-between items-center rounded-t-lg">
//                     <span className="font-medium text-white">{child}</span>
//                     <div className="w-7 h-7 rounded-full bg-purple-400 flex items-center justify-center">
//                       <ArrowUpRight className="text-black w-4 h-4" />
//                     </div>
//                   </div>

//                   {/* Attached Grey Box */}
//                   <div className="bg-gray-300 h-24 rounded-b-lg"></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
// import { ArrowUpRight } from "lucide-react";
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

// // ✅ Import images with clear names
// import DesignTool from "/src/assets/HomeImages/CatagoriesImges/DesignTool.jpg";
// import layout from "/src/assets/HomeImages/CatagoriesImges/layout.jpg";
// import component from "/src/assets/HomeImages/CatagoriesImges/component.jpg";
// import UserFocus from "/src/assets/HomeImages/CatagoriesImges/UserFocus.jpg";

// import ecommerce from "/src/assets/HomeImages/CatagoriesImges/ecommerce.jpg";
// import portal from "/src/assets/HomeImages/CatagoriesImges/portals.jpg";
// import dashboard from "/src/assets/HomeImages/CatagoriesImges/dashboard.jpg";

// import aws from "/src/assets/HomeImages/CatagoriesImges/aws.jpg";
// import azure from "/src/assets/HomeImages/CatagoriesImges/azure.jpg";
// import googlecloud from "/src/assets/HomeImages/CatagoriesImges/googlecloud.jpg";

// const capabilitiesData = [
//   {
//     id: "01/6",
//     title: "UI/UX EXCELLENCE",
//     desc: "Intuitive designs for seamless digital journeys.",
//     children: [
//       { name: "Design Tools", img: DesignTool },
//       { name: "Layouts", img: layout },
//       { name: "Components", img: component },
//       { name: "User Focus", img: UserFocus },
//     ],
//   },
//   {
//     id: "02/6",
//     title: "ENTERPRISE WEB SOLUTIONS",
//     desc: "Custom-built, scalable platforms.",
//     children: [
//       { name: "E-commerce", img: ecommerce },
//       { name: "Portal", img: portal },
//       { name: "Dashboards", img: dashboard },
//     ],
//   },
//   {
//     id: "03/6",
//     title: "CLOUD POWER",
//     desc: "Transforming businesses with secure, scalable infrastructure.",
//     children: [
//       { name: "AWS", img: aws },
//       { name: "Azure", img: azure },
//       { name: "Google Cloud", img: googlecloud },
//     ],
//   },
// ];

// export default function Categories() {
//   return (
//     <section className="bg-black text-white min-h-screen px-6 md:px-12 py-16">
//       <div className="space-y-40">
//         {capabilitiesData.map((cap, index) => (
//           <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-10">
//             {/* Left Sticky Section */}
//             <div className="md:sticky md:top-20 h-fit bg-gray-300 p-6 rounded-lg">
//               <div className="flex items-baseline gap-4">
//                 <div className="text-5xl md:text-6xl text-black/20 font-bold select-none">
//                   {cap.id}
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-extrabold tracking-wide text-black">
//                     {cap.title}
//                   </h3>
//                   <p className="text-gray-800 mt-1 max-w-sm leading-relaxed">
//                     {cap.desc}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Right Side Scrollable Cards */}
//             <div className="space-y-6 relative min-h-[500px]">
//               {cap.children.map((child, i) => {
//                 const ref = useRef(null);
//                 const inView = useInView(ref, {
//                   margin: "-100px",
//                   amount: 0.5,
//                 });

//                 return (
//                   // <motion.div
//                   //   ref={ref}
//                   //   key={i}
//                   //   className="rounded-lg overflow-hidden shadow-lg cursor-pointer absolute left-0 right-0"
//                   //   initial={{ y: i * 120, opacity: 0.7, scale: 0.95 }}
//                   //   animate={{
//                   //     y: inView ? 0 : i * 120,
//                   //     opacity: inView ? 1 : 0.7,
//                   //     scale: inView ? 1 : 0.95,
//                   //     zIndex: inView ? 10 : 1,
//                   //   }}
//                   //   transition={{
//                   //     type: "spring",
//                   //     stiffness: 120,
//                   //     damping: 20,
//                   //     delay: i * 0.2,
//                   //   }}
//                   // >
//                   <motion.div
//   ref={ref}
//   key={i}
//   className="rounded-lg overflow-hidden shadow-lg cursor-pointer absolute left-0 right-0"
//   initial={{ y: i * 120, opacity: 0, scale: 0.9 }}
//   animate={{
//     y: inView ? 0 : i * 120,
//     opacity: inView ? 1 : 0,
//     scale: inView ? 1 : 0.9,
//     zIndex: inView ? 10 : 1,
//   }}
//   transition={{
//     type: "spring",
//     stiffness: 120,
//     damping: 20,
//     delay: i * 0.3, // ⏳ add more delay per card
//   }}
// >

//                     {/* Top Black Card */}
//                     {/* <div className="bg-black border border-gray-700 p-6 flex justify-between items-center rounded-t-lg">
//                       <span className="font-medium text-white">{child.name}</span>
                     
//                       <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
//                         <img
//                           src={child.img}
//                           alt={child.name}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                     </div> */}
//                     {/* Top Black Card */}
// <div className="bg-black border border-gray-700 p-6 flex justify-between items-center rounded-t-lg">
//   <span className="font-medium text-white">{child.name}</span>
// </div>

// {/* Attached Grey Box with Image */}
// <div className="bg-gray-300 h-48 rounded-b-lg overflow-hidden">
//   <img
//     src={child.img}
//     alt={child.name}
//     className="w-full h-full object-cover"
//   />
// </div>


//                     {/* Attached Grey Box */}
//                     <div className="bg-gray-300 h-24 rounded-b-lg"></div>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

// ✅ Import images with clear names
import DesignTool from "/src/assets/HomeImages/CatagoriesImges/DesignTool.jpg";
import Layout from "/src/assets/HomeImages/CatagoriesImges/layout.jpg";
import Component from "/src/assets/HomeImages/CatagoriesImges/component.jpg";
import UserFocus from "/src/assets/HomeImages/CatagoriesImges/UserFocus.jpg";

import Ecommerce from "/src/assets/HomeImages/CatagoriesImges/Ecommerce.jpg";
import Portal from "/src/assets/HomeImages/CatagoriesImges/portals.jpg";
import Dashboard from "/src/assets/HomeImages/CatagoriesImges/dashboard.jpg";

import Aws from "/src/assets/HomeImages/CatagoriesImges/aws.jpg";
import Azure from "/src/assets/HomeImages/CatagoriesImges/azure.jpg";
import GoogleCloud from "/src/assets/HomeImages/CatagoriesImges/googlecloud.jpg";

const capabilitiesData = [
  {
    id: "01/6",
    title: "Immersive Tech",
    desc: "Intuitive designs for seamless digital journeys.",
    children: [
      { name: "VIRTUAL REALITY", img: DesignTool },
      { name: "AUGUMENTED REALITY", img: Layout },
      { name: "3D SERVICES", img: Component },
      // { name: "User Focus", img: UserFocus },
    ],
  },
  {
    id: "02/6",
    title: "Data & Cloud",
    desc: "Custom-built, scalable platforms.",
    children: [
      { name: "CRM SOLUTIONS", img: Ecommerce },
      { name: "IAM SOLUTIONS", img: Portal },
      { name: "ERP SOLUTIONS", img: Dashboard },
       { name: "SERVER MANAGEMENT", img: UserFocus },
    ],
  },
  {
    id: "03/6",
    title: "Web Development & Software",
    desc: "Transforming businesses with secure, scalable infrastructure.",
    children: [
      { name: "WEB DEVOLOPEMENT", img: Aws },
      { name: "MOBILE APPS", img: Azure },
      { name: "GAME DEVOLOPEMENT", img: GoogleCloud },
    ],
  },
];

export default function Categories() {
  return (
    <section className="bg-black text-white min-h-screen px-6 md:px-12 py-16">
      <div className="space-y-40">
        {capabilitiesData.map((cap, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Sticky Section */}
            <div className="md:sticky md:top-20 h-fit bg-gray-300 p-6 rounded-lg">
              <div className="flex items-baseline gap-4">
                <div className="text-5xl md:text-6xl text-black/20 font-bold select-none">
                  {cap.id}
                </div>
                <div>
                  <h3 className="text-xl font-extrabold tracking-wide text-black">
                    {cap.title}
                  </h3>
                  <p className="text-gray-800 mt-1 max-w-sm leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side Cards with Animation */}
            <div className="space-y-6">
              {cap.children.map((child, i) => (
                <motion.div
                  key={i}
                  className="rounded-lg overflow-hidden shadow-lg cursor-pointer"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0px 8px 25px rgba(168, 85, 247, 0.5)", // purple glow
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  {/* Top Black Card */}
                  <div className="bg-black border border-gray-700 p-6 flex justify-between items-center rounded-t-lg">
                    <span className="font-medium text-white">{child.name}</span>
                    <div className="w-7 h-7 rounded-full bg-purple-400 flex items-center justify-center">
                      <ArrowUpRight className="text-black w-4 h-4" />
                    </div>
                  </div>

                  {/* Attached Grey Box with Image */}
                  <div className="bg-gray-300 h-40 rounded-b-lg overflow-hidden">
                    <img
                      src={child.img}
                      alt={child.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
