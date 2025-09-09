import { useParams } from "react-router-dom";
import BlogsData from "/src/Data/Data.jsx";

function InnerBlog() {
  const { id } = useParams();
  const blog = BlogsData.find((b) => b.id.toString() === id);
  const { sectionImages, innerContent, title } = blog;

  // split: first N images with content, rest are "extra"
  const contentImages = sectionImages.slice(0, innerContent.length);
  const extraImages = sectionImages.slice(innerContent.length);

  if (!blog) {
    return (
      <div className="text-center mt-10 text-gray-500">Blog not found</div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      {/* Blog Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-teal-400 text-center mt-20">
        {blog.title}
      </h1>

      {/* Hero Image */}
      <div className="mt-6 w-full flex justify-center">
        {blog.HeroImage ? (
          <img
            src={blog.HeroImage}
            alt={blog.title}
            className="rounded-lg shadow-lg max-w-4xl w-full object-cover"
          />
        ) : (
          <div className="text-gray-400">No image available</div>
        )}
      </div>
      {/* Blog Content Sections */}
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
              <div
                key={`extra-${i}`}
                className="flex items-center justify-center"
              >
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
    </div>
  );
}

export default InnerBlog;
