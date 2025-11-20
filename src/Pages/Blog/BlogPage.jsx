import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlogImage1 from "/src/assets/Blog1/3d.jpg";

// Single blog data
const BlogsData = [
  {
    id: "1",
    title: "3D Modeling in Immersive Tech",
    description: "How immersive technologies are shaping the future.",
    HeroImage: BlogImage1,
    innerContent: [
      `Spreadsheets. emails. tracking forms by hand.
Teams were being slowed down, and each week it cost hours.

At Thirdvizion Labs, we use intelligent, 𝙣𝙤-𝙘𝙤𝙙𝙚 𝙖𝙪𝙩𝙤𝙢𝙖𝙩𝙞𝙤𝙣 to help businesses get One customer had trouble with a not smooth procedure
Forms are manually checked, emails are sent, data is logged into Airtable, and Slack is used to notify teams.

Each week, it took almost seven hours.

We intervened with a quick, customised automation utilising n8n:
→ Submission of the form → Automatic email sent → Airtable updated → A Slack ping was initiated.

We constructed it within three days.
𝙉𝙤𝙩 𝙖 𝙘𝙤𝙙𝙚. 𝙉𝙤𝙩 𝙘𝙤𝙢𝙥𝙡𝙞𝙘𝙖𝙩𝙚𝙙. 𝙊𝙣𝙡𝙮 𝙤𝙪𝙩𝙘𝙤𝙢𝙚𝙨.

The entire process now operates in the background without making any noise.
No work. No mistakes.

The outcome?
"Smarter work. Smoother flow."

"The best invisible hire we ever made," stated their COO.`
    ],
    sectionImages: [BlogImage1],
  }
];

const BlogPage = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(BlogsData);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Reveal animation with staggered effect
  useEffect(() => {
    const revealCard = (index) => {
      if (index >= filteredBlogs.length) return;
      setVisibleCards((prev) => {
        const newState = [...prev];
        newState[index] = true;
        return newState;
      });
      setTimeout(() => revealCard(index + 1), 150);
    };
    setVisibleCards([]);
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

  // Floating particles background
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#FF700A] rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 0.8
      }
    },
    hover: {
      y: -15,
      scale: 1.05,
      rotateY: 5,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300
      }
    }
  };

  const titleVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "100%",
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const glowVariants = {
    hidden: { opacity: 0 },
    hover: { opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 xl:py-40 py-30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <FloatingParticles />
      
      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 -left-20 w-72 h-72 bg-gradient-to-r from-[#FF700A] to-purple-600 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-l from-[#FF700A] to-blue-600 rounded-full blur-3xl opacity-15"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Hero Section */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
        >
          <span className="bg-gradient-to-r from-[#FF700A] font-medium via-orange-400 to-yellow-400 bg-clip-text text-transparent"
            style={{ fontFamily: "Outfit, sans-serif" }}>
            Welcome to Our Blog
          </span>
        </motion.h1>
        
        

      
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-8 relative z-10 justify-items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence mode="wait">
          {filteredBlogs.length === 0 ? (
            <motion.div
              className="col-span-full text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="text-6xl mb-4"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🔍
              </motion.div>
              <p className="text-gray-400 text-xs md:text-lg">No blogs found. Try a different search term.</p>
            </motion.div>
          ) : (
            filteredBlogs.map((blog, i) => (
              <motion.div
                key={blog.id}
                variants={cardVariants}
                initial="hidden"
                animate={visibleCards[i] ? "visible" : "hidden"}
                whileHover="hover"
                onHoverStart={() => setHoveredCard(i)}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative group max-w-md w-full"
              >
                {/* Card Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#FF700A] to-purple-600 rounded-3xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                  variants={glowVariants}
                />
                
                <Link to={`/blog/${blog.id}`}>
                  <motion.div
                    className="relative bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 cursor-pointer overflow-hidden h-full flex flex-col"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Blog Image */}
                    <motion.div
                      className="mb-6 rounded-xl overflow-hidden"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <img 
                        src={blog.HeroImage} 
                        alt={blog.title}
                        className="w-full h-48 object-cover rounded-xl"
                      />
                    </motion.div>

                    {/* Hover Gradient Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#FF700A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={false}
                      animate={{ opacity: hoveredCard === i ? 1 : 0 }}
                    />
                    
                    {/* Animated Border */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF700A] via-orange-400 to-purple-600 opacity-0 group-hover:opacity-100"
                      initial={false}
                      animate={{ opacity: hoveredCard === i ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-[2px] rounded-2xl bg-gray-900/95" />
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10 flex-1 flex flex-col" style={{ fontFamily: "Outfit, sans-serif" }}>
                      {/* Title with animated underline */}
                      <div className="mb-4">
                        <motion.h2
                          className="text-2xl md:text-3xl font-bold mb-3 inline-block"
                          layoutId={`title-${blog.id}`}
                          style={{ fontFamily: "Outfit, sans-serif" }}
                         >
                          {blog.title}
                        </motion.h2>
                        <motion.div
                          className="h-1 bg-gradient-to-r from-[#FF700A] to-orange-400 rounded-full"
                          variants={titleVariants}
                          initial="hidden"
                          animate={visibleCards[i] ? "visible" : "hidden"}
                          style={{ fontFamily: "Outfit, sans-serif" }}/>
                      </div>

                      {/* Description */}
                      <motion.p
                        className="text-gray-300 text-lg leading-relaxed flex-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        style={{ fontFamily: "" }}>
                        {blog.description}
                      </motion.p>

                      {/* Read More CTA */}
                      <motion.div
                        className="flex items-center justify-between mt-6 pt-4 border-t border-gray-700/50"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                      >
                        <span className="text-[#FF700A] font-semibold text-lg">
                          Read More
                        </span>
                        <motion.div
                          animate={{ x: hoveredCard === i ? 5 : 0 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          →
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Floating elements */}
                    <motion.div
                      className="absolute top-4 right-4 w-2 h-2 bg-[#FF700A] rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  </motion.div>
                </Link>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </motion.div>

      {/* Footer */}
      <motion.div
        className="text-center mt-20 pt-8 border-t border-gray-800/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
      </motion.div>
    </div>
  );
};

export default BlogPage;