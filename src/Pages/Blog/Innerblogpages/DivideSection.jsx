
// import React from "react";
// import BlogsData from "../../../Data/Data";

// function DivideSection({ id }) {
//   const blog = BlogsData.find((b) => b.id.toString() === id);

//   if (!blog) return null;

//   return (
//     <div>
//       {/* Section 1 */}
//       <div className="flex h-[70vh]">
//         <div className="my-16 w-1/2 flex flex-col justify-center px-8">
//           <h1 className="text-3xl font-bold text-center text-teal-400 mb-8">
//             {blog.title} 
//           </h1>
//           <p className="font-bold text-center text-white mb-8">
//             {blog.innerContent1}
//           </p>
//         </div>
//         <div className="w-1/2 flex items-center justify-center">
//           {blog.sectionImage1 ? (
//             <img
//               src={blog.sectionImage1}
//               alt={`${blog.title} section 1`}
//               className="w-80 h-80 object-cover rounded-lg shadow-lg"
//             />
//           ) : (
//             <div className="text-gray-400">No image available</div>
//           )}
//         </div>
//       </div>

//       {/* Section 2 */}
//       <div className="flex h-[70vh]">
//         <div className="w-1/2 flex items-center justify-center">
//           {blog.sectionImage2 ? (
//             <img
//               src={blog.sectionImage2}
//               alt={`${blog.title} section 2`}
//               className="w-80 h-80 object-cover rounded-lg shadow-lg"
//             />
//           ) : (
//             <div className="text-gray-400">No image available</div>
//           )}
//         </div>
//         <div className="my-16 w-1/2 flex flex-col justify-center px-8">
//           <h1 className="text-3xl font-bold text-center text-teal-400 mb-8">
//             {blog.title} 
//           </h1>
//           <p className="font-bold text-center text-white mb-8">
//             {blog.innerContent2}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DivideSection;
// import React from "react";
// import BlogsData from "../../../Data/Data";

// function DivideSection({ id }) {
//   const blog = BlogsData.find((b) => b.id.toString() === id);

//   if (!blog) return null;

//   return (
//     <div>
//       {blog.sectionImages.map((img, index) => {
//         const isEven = index % 2 === 0; // 0, 2, 4 are even
//         const imageSide = isEven ? "left" : "right";
//         const textSide = isEven ? "right" : "left";
//         const content = blog.innerContent[index] || ""; // fallback in case content missing

//         return (
//           <div
//             key={index}
//             className="flex h-[70vh] items-center my-16 px-8"
//           >
//             {/* Image */}
//             <div
//               className={`w-1/2 flex items-center justify-center ${
//                 imageSide === "left" ? "order-1" : "order-2"
//               }`}
//             >
//               {img ? (
//                 <img
//                   src={img}
//                   alt={`${blog.title} section ${index + 1}`}
//                   className="w-80 h-80 object-cover rounded-lg shadow-lg"
//                 />
//               ) : (
//                 <div className="text-gray-400">No image available</div>
//               )}
//             </div>

//             {/* Text */}
//             <div
//               className={`w-1/2 flex flex-col justify-center px-8 ${
//                 textSide === "left" ? "order-1" : "order-2"
//               }`}
//             >
//               <h1 className="text-3xl font-bold text-center text-teal-400 mb-8">
//                 {blog.title}
//               </h1>
//               <p className="font-bold text-center text-white mb-8">{content}</p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default DivideSection;
// import React from "react";
// import BlogsData from "../../../Data/Data";

// function DivideSection({ id }) {
//   const blog = BlogsData.find((b) => b.id.toString() === id);

//   if (!blog) return null;

//   return (
//     <div>
//       {blog.sectionImages.map((img, index) => {
//         const content = blog.innerContent[index]; // undefined if no content
//         const isEven = index % 2 === 0;

//         // Full-width image if no content
//         if (!content) {
//           return (
//             <div
//               key={index}
//               className="flex h-[70vh] items-center justify-center my-16 px-8"
//             >
//               <img
//                 src={img}
//                 alt={`${blog.title} section ${index + 1}`}
//                 className="w-full h-full object-cover rounded-lg shadow-lg"
//               />
//             </div>
//           );
//         }

//         // Layout with content
//         const imageSide = isEven ? "left" : "right";
//         const textSide = isEven ? "right" : "left";

//         return (
//           <div key={index} className="flex h-[70vh] items-center my-16 px-8">
//             {/* Image */}
//             <div
//               className={`w-1/2 flex items-center justify-center ${
//                 imageSide === "left" ? "order-1" : "order-2"
//               }`}
//             >
//               {img ? (
//                 <img
//                   src={img}
//                   alt={`${blog.title} section ${index + 1}`}
//                   className="w-80 h-80 object-cover rounded-lg shadow-lg"
//                 />
//               ) : (
//                 <div className="text-gray-400">No image available</div>
//               )}
//             </div>

//             {/* Text */}
//             <div
//               className={`w-1/2 flex flex-col justify-center px-8 ${
//                 textSide === "left" ? "order-1" : "order-2"
//               }`}
//             >
//               <h1 className="text-3xl font-bold text-center text-teal-400 mb-8">
//                 {blog.title}
//               </h1>
//               <p className="font-bold text-center text-white mb-8">{content}</p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default DivideSection;
import React from "react";
import BlogsData from "/src/Data/Data"; // absolute path is cleaner

function DivideSection({ id }) {
  const blog = BlogsData.find((b) => b.id.toString() === id);
  if (!blog) return null;

  const { sectionImages, innerContent, title } = blog;

  // split: first N images with content, rest are "extra"
  const contentImages = sectionImages.slice(0, innerContent.length);
  const extraImages = sectionImages.slice(innerContent.length);

  return (
    <div>
      {/* 🔹 Images WITH content */}
      {contentImages.map((img, index) => {
        const isEven = index % 2 === 0;
        const imageSide = isEven ? "left" : "right";
        const textSide = isEven ? "right" : "left";

        return (
          <div
            key={`content-${index}`}
            className="flex flex-col md:flex-row h-[70vh] items-center my-16 px-8"
          >
            {/* Image */}
            <div
              className={`w-full md:w-1/2 flex items-center justify-center ${
                imageSide === "left" ? "order-1" : "order-2"
              }`}
            >
              <img
                src={img}
                alt={`${title} section ${index + 1}`}
                className="w-80 h-80 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Text */}
            <div
              className={`w-full md:w-1/2 flex flex-col justify-center px-8 ${
                textSide === "left" ? "order-1" : "order-2"
              }`}
            >
              <h1 className="text-3xl font-bold text-center text-teal-400 mb-8">
                {title}
              </h1>
              <p className="font-bold text-center text-white mb-8">
                {innerContent[index]}
              </p>
            </div>
          </div>
        );
      })}

      {/* 🔹 Images WITHOUT content */}
      {extraImages.length === 1 && (
        <div className="flex h-[70vh] items-center justify-center my-16 px-8">
          <img
            src={extraImages[0]}
            alt={`${title} extra`}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      )}

      {extraImages.length > 1 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-16 px-8">
          {extraImages.map((img, i) => (
            <div key={`extra-${i}`} className="flex items-center justify-center">
              <img
                src={img}
                alt={`${title} extra ${i + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DivideSection;
