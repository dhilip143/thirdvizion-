
// import image1 from "/src/assets/WebStackImages/React.png";
// import image2 from  "/src/assets/WebStackImages/Node.png";
// import image3 from "/src/assets/WebStackImages/Vue.png";
// import image4 from  "/src/assets/WebStackImages/Nuxt.png";
// // "/src/assets/Images/slider1_4.png";
// import image5 from "/src/assets/WebStackImages/Angular.png";
// import image6 from "/src/assets/WebStackImages/Framer.png";
// import image7 from "/src/assets/WebStackImages/Lottie.png";
// // "/src/assets/Images/slider1_7.png";
// import image8 from "/src/assets/WebStackImages/Tailwind.png"; 
// import image9 from  "/src/assets/WebStackImages/Bootstrap.png";  
// import image10 from "/src/assets/WebStackImages/Vite2.png";

// const WebStack = () => {
//   return (
//     <>
//       <div className="">
//         <div
//           className="slider"
//           style={{
//             "--width": "150px",
//             "--height": "100px",
//             "--quantity": 9,
//             "--time": "14s",
//           }}
//         >
//           <div className="list">
//             <div className="item hidden" style={{ "--position": 1 }}>
//               <img src={image1} alt="" className="" />
//             </div>
//             <div className="item" style={{ "--position": 2 }}>
//               <img src={image2} alt="" className="" />
//             </div>
//             <div className="item" style={{ "--position": 3 }}>
//               <img src={image3} alt="" className="" />
//             </div>
//             <div className="item" style={{ "--position": 4 }}>
//               <img src={image4} alt="" className="" />
//             </div>
//             <div className="item" style={{ "--position": 5 }}>
//               <img src={image5} alt="" className="" />
//             </div>
//             <div className="item" style={{ "--position": 6 }}>
//               <img src={image6} alt="" className="" />
//             </div>
//             <div className="item" style={{ "--position": 7 }}>
//               <img src={image7} alt="" className="" />
//             </div>
//             <div className="item" style={{ "--position": 8 }}>
//               <img src={image8} alt="" className="" />
//             </div>
//             <div className="item" style={{ "--position": 9 }}>
//               <img src={image9} alt="" className="" />
//             </div>
//             <div className="item" style={{ "--position": 10 }}>
//               <img
//                 src={image10}
//                 alt=""
//                 className=""
//               />
//             </div>
//           </div>
//         </div>

//         {/* Second Row */}
//         <div
//           className="slider"
//           reverse="true"
//           style={{
//             "--width": "150px",
//             "--height": "100px",
//             "--quantity": 9,
//             "--time": "14s",
//           }}
//         >
//           <div className="list">
//             <div className="item" style={{ "--position": 2 }}>
//               <img src={image2} alt="" className="" />
//             </div>
//             <div className="item" style={{ "--position": 3 }}>
//               <img src={image3} alt="" className="" />
//             </div>
//             <div className="item" style={{ "--position": 4 }}>
//               <img src={image4} alt="" className="" />
//             </div>
//             <div className="item" style={{ "--position": 5 }}>
//               <img src={image5} alt="" className="" />
//             </div>
//             <div className="item" style={{ "--position": 6 }}>
//               <img src={image6} alt="" className="" />
//             </div>
//             <div className="item" style={{ "--position": 7 }}>
//               <img src={image7} alt="" className="" />
//             </div>
//             <div className="item" style={{ "--position": 8 }}>
//               <img src={image8} alt="" className="" />
//             </div>
//             <div className="item" style={{ "--position": 9 }}>
//               <img src={image9} alt="" className="" />
//             </div>
//             <div className="item" style={{ "--position": 10 }}>
//               <img
//                 src={image10}
//                 alt=""
//                 className=""
//               />
//             </div>
//           </div>
//         </div>

//         {/* Third Row */}
//         <div
//           className="slider"
//           style={{
//             "--width": "150px",
//             "--height": "100px",
//             "--quantity": 9,
//             "--time": "14s",
//           }}
//         >
//           <div className="list">
//             <div className="item" style={{ "--position": 2 }}>
//               <img src={image2} alt="" className="" />
//             </div>
//             <div className="item" style={{ "--position": 3 }}>
//               <img src={image3} alt="" className="" />
//             </div>
//             <div className="item" style={{ "--position": 4 }}>
//               <img src={image4} alt="" className="" />
//             </div>
//             <div className="item" style={{ "--position": 5 }}>
//               <img src={image5} alt="" className="" />
//             </div>
//             <div className="item" style={{ "--position": 6 }}>
//               <img src={image6} alt="" className="" />
//             </div>
//             <div className="item" style={{ "--position": 7 }}>
//               <img src={image7} alt="" className="" />
//             </div>
//             <div className="item" style={{ "--position": 8 }}>
//               <img src={image8} alt="" className="" />
//             </div>
//             <div className="item" style={{ "--position": 9 }}>
//               <img src={image9} alt="" className="" />
//             </div>
//             <div className="item" style={{ "--position": 10 }}>
//               <img
//                 src={image10}
//                 alt=""
//                 className=""
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default WebStack;





import React from 'react';

const DevelopmentServices = () => {
  const services = [
    {
      id: 1,
      title: "React Development",
      description: "Build lightning-fast, scalable, and interactive web applications using React. Perfect for startups and enterprises seeking modern, high-performance UI experiences.",
      color: "from-[#00d3f3] to-cyan-400",
      icon: (
        <svg className="w-12 h-12 text-[#00d3f3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      id: 2,
      title: "WordPress Development",
      description: "We craft custom WordPress websites — from themes to plugins — delivering easy-to-manage and SEO-friendly solutions for businesses of all sizes.",
      color: "from-[#00d3f3] to-cyan-500",
      icon: (
        <svg className="w-12 h-12 text-[#00d3f3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Shopify Development",
      description: "Launch and grow your online store with Shopify. We design beautiful, conversion-optimized eCommerce sites tailored to your brand.",
      color: "from-[#00d3f3] to-cyan-400",
      icon: (
        <svg className="w-12 h-12 text-[#00d3f3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-transparent mt-60 py-20 px-4 sm:px-6 lg:px-8 font-inter-tight">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-[#00d3f3] via-cyan-400 to-cyan-500 bg-clip-text sm:text-6xl font-inter-tight">
            Development Services
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-lg text-white/80 font-inter-tight">
            Professional web development solutions tailored to your business needs.
          </p>
        </div>

        {/* Glassmorphic Services Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative rounded-3xl overflow-hidden backdrop-blur-xl bg-black/40 border border-[#00d3f3]/30 shadow-[0_0_30px_rgba(0,211,243,0.1)] transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,211,243,0.3)] hover:-translate-y-2 group`}
            >
              {/* Gradient Top Bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${service.color}`}></div>

              <div className="p-8">
                {/* Icon + Title */}
                <div className="flex items-center mb-5">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="ml-4 text-2xl font-bold text-white font-inter-tight">{service.title}</h3>
                </div>

                {/* Description */}
                <p className="text-white/70 text-lg leading-relaxed mb-6 font-inter-tight">
                  {service.description}
                </p>

                {/* Button */}
                <button className={`px-6 py-3 rounded-lg font-semibold text-gray-900 bg-gradient-to-r ${service.color} hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(0,211,243,0.5)] font-inter-tight`}>
                  Learn More
                </button>
              </div>

              {/* Subtle background icon (decorative) */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 opacity-10 text-[#00d3f3]">
                {service.icon}
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#00d3f3]/5 to-transparent pointer-events-none"></div>
            </div>
          ))}
        </div>

    
      </div>
    </div>
  );
};

export default DevelopmentServices;