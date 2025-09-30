import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import BlogsData from "/src/Data/Data.jsx";

const BlogPage = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(BlogsData);

  // Reveal animation
  useEffect(() => {
    const revealCard = (index) => {
      if (index >= filteredBlogs.length) return;
      setVisibleCards((prev) => {
        const newState = [...prev];
        newState[index] = true;
        return newState;
      });
      setTimeout(() => revealCard(index + 1), 300);
    };
    setVisibleCards([]); // reset visibility on filter change
    revealCard(0);
  }, [filteredBlogs]);

  // Filter blogs based on search term
  useEffect(() => {
    const term = searchTerm.toLowerCase();
    const filtered = BlogsData.filter(
      (blog) =>
        blog.title.toLowerCase().includes(term) ||
        blog.description.toLowerCase().includes(term)
    );
    setFilteredBlogs(filtered);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 xl:py-40 py-30 relative">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl xl:text-8xl font-bold mb-4 text-[#FF700A]">
          Welcome to Our Blog
        </h1>
        <p className="text-gray-400 text-sm md:text-md xl:text-lg mb-6">
          Explore insights on immersive tech, VR, AR, 3D, cloud, development,
          and more.
        </p>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-1/2 md:w-1/3 px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 focus:outline-none focus:border-[#FF700A] text-white placeholder-gray-500 transition-all"
        />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 relative">
        {filteredBlogs.length === 0 && (
          <p className="text-gray-400 col-span-full text-center mt-12">
            No blogs found.
          </p>
        )}

        {filteredBlogs.map((blog, i) => (
          <Link to={`/blog/${blog.id}`} key={i}>
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={visibleCards[i] ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="relative bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-700 cursor-pointer overflow-hidden hover:border-[#FF700A]"
            >
              <motion.h2
                className="text-xl md:text-2xl font-semibold mb-2 border-b border-[#FF700A] inline-block"
                initial={{ width: 0 }}
                animate={visibleCards[i] ? { width: "100%" } : {}}
                transition={{ duration: 0.6 }}
              >
                {blog.title}
              </motion.h2>
              <p className="text-gray-400 text-sm md:text-base mt-2">
                {blog.description}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
