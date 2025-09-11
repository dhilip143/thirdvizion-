import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link for routing
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWordpress,
  FaLinkedinIn,
  FaGithub, // ✅ Added GitHub
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-gray-700">
        
        {/* Links */}
        <div>
          <h3 className="font-semibold mt-20 mb-4">Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <Link 
              to="/" 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
              className="hover:text-white cursor-pointer"
            >
              Home
            </Link>
            <li>
              <Link to="/about" className="hover:text-white cursor-pointer">About Us</Link>
            </li>
            <li>
              <Link to="/immersive" className="hover:text-white cursor-pointer">Services</Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-white cursor-pointer">Blogs</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white cursor-pointer">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mt-20 mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/software" className="hover:text-white cursor-pointer">Software</Link>
            </li>
            <li>
              <Link to="/immersive" className="hover:text-white cursor-pointer">AR/VR</Link>
            </li>
            <li>
              <Link to="/data" className="hover:text-white cursor-pointer">Data & Cloud</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mt-20 mb-4">Contact Us</h3>
          <p className="text-sm text-gray-300">
            <span className="font-semibold">Contact:</span> 123-456-7890
          </p>
          <p className="text-sm text-gray-300 mt-2">
            <span className="font-semibold">Address:</span> ADD
          </p>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mt-20 mb-4">Social</h3>
          <div className="flex space-x-5 text-xl text-gray-300">
             <a
              href="https://www.facebook.com/share/1Q5hmaxzpF/"
              target="_blank"
              rel="noopener noreferrer"
            >
            <FaFacebookF className="hover:text-white cursor-pointer" /></a>
            <a
              href="https://www.instagram.com/thirdvizionlabs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-white cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/company/thirdvizion-labs/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="hover:text-white cursor-pointer" />
            </a>
            <a
              href="https://github.com/Thirdvizion-Labs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-white cursor-pointer" />
            </a>
              <a
              href="https://www.youtube.com/@ThirdVizion"
              target="_blank"
              rel="noopener noreferrer"
            >
            <FaYoutube className="hover:text-white cursor-pointer" /></a>
            <FaWordpress className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      {/* <div className="text-center py-4 text-gray-400 text-xs border-gray-700">
        © 2019 Lift Media | All Rights Reserved
      </div>

      
      <div className="text-center py-10 text-[200px] tracking-wide">
        <span className="bg-gradient-to-r from-yellow-400 via-blue-500 via-green-500 to-red-500 bg-clip-text text-transparent">
          THIRDVIZION
        </span>
      </div> */}
            {/* Bottom Section */}
      {/* Bottom Section */}
<div className="text-center text-gray-400 text-xs border-t border-gray-700 leading-none">
  © 2019 Lift Media | All Rights Reserved
</div>

{/* Brand Text */}
<div className="text-center leading-none">
  <span className="bg-gradient-to-r from-yellow-400 via-blue-500 via-green-500 to-red-500 
    bg-clip-text text-transparent 
    text-[50px] sm:text-[90px] md:text-[130px] lg:text-[180px] 
    tracking-wide block">
    THIRDVIZION
  </span>
</div>


    </footer>
  );
};

export default Footer;
