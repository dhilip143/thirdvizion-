import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      if (footer) {
        const rect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // When footer is 50% in viewport, start animation
        if (rect.top < windowHeight * 0.5) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      id="footer"
      className="flex flex-col bg-black text-white relative overflow-hidden min-h-[600px]"
    >
      {/* Top Section */}
      <div
        className="max-w-7xl mx-auto mb-30 mt-15 bg-black px-6 py-12 
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8
        md:text-left text-center relative z-10"
      >
        {/* --- Links --- */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:text-white cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white cursor-pointer">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-white cursor-pointer">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white cursor-pointer">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* --- Services --- */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link
                to="/web_development"
                className="hover:text-white cursor-pointer"
              >
                Web Development
              </Link>
            </li>
            <li>
              <Link
                to="/client_relationship_management"
                className="hover:text-white cursor-pointer"
              >
                CRM Solutions
              </Link>
            </li>
            <li>
              <Link
                to="/virtual_reality"
                className="hover:text-white cursor-pointer"
              >
                Virtual Reality
              </Link>
            </li>
            <li>
              <Link
                to="/augmented_reality"
                className="hover:text-white cursor-pointer"
              >
                Augmented Reality
              </Link>
            </li>
            <li>
              <Link
                to="/3d_services"
                className="hover:text-white cursor-pointer"
              >
                3D Visualization
              </Link>
            </li>
          </ul>
        </div>

        {/* --- Contact --- */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <p className="text-sm text-gray-300">
            <span className="font-semibold">Phone:</span> +91 8925527548
          </p>
          <p className="text-sm text-gray-300 mt-2">
            <span className="font-semibold">Address:</span> 11, 1st Floor,
            Ramdoss Nagar, Kolathur, Chennai - 600099, Tamil Nadu, India
          </p>
        </div>

        {/* --- Social --- */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Social</h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xl text-gray-300">
            <a
              href="https://www.facebook.com/share/1Q5hmaxzpF/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="hover:text-white" />
            </a>
            <a
              href="https://www.instagram.com/thirdvizionlabs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/company/thirdvizion-labs/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="hover:text-white" />
            </a>
            <a
              href="https://github.com/Thirdvizion-Labs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-white" />
            </a>
            <a
              href="https://www.youtube.com/@ThirdVizion"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="hover:text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Brand Text */}
      <div className="absolute bottom-0 left-0 w-full text-center overflow-hidden">
        <p
          className={`bg-clip-text text-transparent font-normal tracking-wider 
                     text-[40px] sm:text-[60px] md:text-[110px] lg:text-[150px] xl:text-[180px] 2xl:text-[225px]
                     leading-none -mb-8 md:-mb-12 lg:-mb-16 pointer-events-none select-none
                     transition-all duration-1000 ease-out ${
                       isVisible 
                         ? "opacity-100 translate-y-0 scale-100" 
                         : "opacity-30 translate-y-1/2 scale-90"
                     }`}
          style={{
            backgroundImage: "linear-gradient(to right, #FDB928 0%, #F38540 25%, #3EA9C1 50%, #5EBC58 75%, #EE3A5C 100%)"
          }}
        >
          THIRDVIZION
        </p>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-6 text-center text-gray-400 text-sm relative z-10">
        © {new Date().getFullYear()} ThirdVizion Labs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;