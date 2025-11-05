// import { useParams } from "react-router-dom";
// import BlogsData from "/src/Data/Data.jsx";

// function InnerBlog() {
//   const { id } = useParams();
//   const blog = BlogsData.find((b) => b.id.toString() === id);
//   const { sectionImages, innerContent, title } = blog;

//   // split: first N images with content, rest are "extra"
//   const contentImages = sectionImages.slice(0, innerContent.length);
//   const extraImages = sectionImages.slice(innerContent.length);

//   if (!blog) {
//     return (
//       <div className="text-center mt-10 text-gray-500">Blog not found</div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col items-center">
//       {/* Blog Title */}
//       <h1 className="text-3xl md:text-4xl font-bold text-orange-400 text-center mt-20">
//         {blog.title}
//       </h1>

//       {/* Hero Image */}
//       <div className="mt-6 w-full flex justify-center">
//         {blog.HeroImage ? (
//           <img
//             src={blog.HeroImage}
//             alt={blog.title}
//             className="rounded-lg shadow-lg max-w-4xl w-full object-cover"
//           />
//         ) : (
//           <div className="text-gray-400">No image available</div>
//         )}
//       </div>
//       {/* Blog Content Sections */}
//       <div>
//         {/* 🔹 Images WITH content */}
//         {contentImages.map((img, index) => {
//           const isEven = index % 2 === 0;
//           const imageSide = isEven ? "left" : "right";
//           const textSide = isEven ? "right" : "left";

//           return (
//             <div
//               key={`content-${index}`}
//               className="flex flex-col md:flex-row h-[70vh] items-center my-16 px-8"
//             >
//               {/* Image */}
//               <div
//                 className={`w-full md:w-1/2 flex items-center justify-center ${imageSide === "left" ? "order-1" : "order-2"
//                   }`}
//               >
//                 <img
//                   src={img}
//                   alt={`${title} section ${index + 1}`}
//                   className="w-80 h-80 object-cover rounded-lg shadow-lg"
//                 />
//               </div>

//               {/* Text */}
//               <div
//                 className={`w-full md:w-1/2 flex flex-col justify-center px-8 ${textSide === "left" ? "order-1" : "order-2"
//                   }`}
//               >
//                 <h1 className="text-3xl font-bold text-center text-orange-400 mb-8">
//                   {title}
//                 </h1>
//                 <p className="font-bold text-center text-white mb-8">
//                   {innerContent[index]}
//                 </p>
//               </div>
//             </div>
//           );
//         })}

//         {/* 🔹 Images WITHOUT content */}
//         {extraImages.length === 1 && (
//           <div className="flex h-[70vh] items-center justify-center my-16 px-8">
//             <img
//               src={extraImages[0]}
//               alt={`${title} extra`}
//               className="w-full h-full object-cover rounded-lg shadow-lg"
//             />
//           </div>
//         )}

//         {extraImages.length > 1 && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-16 px-8">
//             {extraImages.map((img, i) => (
//               <div
//                 key={`extra-${i}`}
//                 className="flex items-center justify-center"
//               >
//                 <img
//                   src={img}
//                   alt={`${title} extra ${i + 1}`}
//                   className="w-full h-64 object-cover rounded-lg shadow-lg"
//                 />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default InnerBlog;


import { useParams } from "react-router-dom";
import BlogsData from "/src/Data/Data.jsx";
import { useState } from "react";

function InnerBlog() {
  const { id } = useParams();
  const blog = BlogsData.find((b) => b.id.toString() === id);

  if (!blog) {
    return (
      <div className="text-center mt-10 text-gray-500">Blog not found</div>
    );
  }

  // Combine Hero + section + extra images into one array for carousel
  const allImages = [
    blog.HeroImage,
    ...(blog.sectionImages || [])
  ].filter(Boolean);

  // Join all innerContent into one paragraph
  const description = blog.innerContent || "No description available.";

  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-10"   style={{ fontFamily: "Outfit, sans-serif" }}>
      {/* Blog Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-orange-400 text-center mt-20"   style={{ fontFamily: "Outfit, sans-serif" }}>
        {blog.title}
      </h1>

      {/* Carousel */}
      {allImages.length > 0 && (
        <div className="relative w-full max-w-4xl mt-8" >
          <img
            src={allImages[currentIndex]}
            alt={`${blog.title} image ${currentIndex + 1}`}
            className="rounded-lg shadow-lg w-full md:h-[400px] object-cover"  style={{ fontFamily: "work-sans, sans-serif" }}
          />

          {/* Carousel Controls */}
          {allImages.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2  p-2 rounded-full "
              >
                ◀
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2p-2 rounded-full"
              >
                ▶
              </button>
            </>
          )}
        </div>
      )}

      {/* Description */}
      <p className="mt-8 max-w-3xl text-center text-lg leading-relaxed text-gray-300">
        {description}
      </p>
    </div>
  );
}

export default InnerBlog;
