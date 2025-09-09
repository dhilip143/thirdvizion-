
import { useParams } from "react-router-dom";
import BlogsData from "../../../Data/Data";
import DivideSection from "/src/Pages/Blog/Innerblogpages/DivideSection.jsx";

function InnerBlogs() {
  const { id } = useParams();
  const blog = BlogsData.find((b) => b.id.toString() === id);

  if (!blog) {
    return <div className="text-center mt-10 text-gray-500">Blog not found</div>;
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

      {/* Blog Description + Content */}
      {/* <div className="max-w-3xl mx-auto px-6 py-10 border-8 border-white hover:border-teal-900 mt-6 rounded-lg">
        <p className="text-lg text-teal-400 text-center mb-6">
          {blog.description}
        </p>

        <div className="prose prose-invert max-w-none text-gray-200 leading-relaxed">
          {blog.content
            ? blog.content
                .trim()
                .split("\n")
                .map((line, idx) =>
                  line.trim() ? (
                    <p key={idx} className="mb-4 text-center">
                      {line.trim()}
                    </p>
                  ) : null
                )
            : null}
        </div>
      </div> */}

      {/* DivideSection */}
      <DivideSection id={id} />
    </div>
  );
}

export default InnerBlogs;
