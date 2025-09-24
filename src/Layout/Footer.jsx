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
    <section className=" w-full h-full 2xl:h-[70vh] flex flex-col bg-black text-white z-[999] backdrop-blur-2xl ">
      {/* Top Section */}
      <div className="md:-mb-40 max-w-7xl mx-auto bg-black px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link
                to="/"
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
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
              <Link to="/immersive" className="hover:text-white cursor-pointer">
                Services
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

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/software" className="hover:text-white cursor-pointer">
                Software
              </Link>
            </li>
            <li>
              <Link to="/immersive" className="hover:text-white cursor-pointer">
                AR/VR
              </Link>
            </li>
            <li>
              <Link to="/data" className="hover:text-white cursor-pointer">
                Data & Cloud
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <p className="text-sm text-gray-300">
            <span className="font-semibold">Phone:</span> 123-456-7890
          </p>
          <p className="text-sm text-gray-300 mt-2">
            <span className="font-semibold">Address:</span> Your Address Here
          </p>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Social</h3>
          <div className="flex flex-wrap gap-4 text-xl text-gray-300">
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
            <FaWordpress className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
      {/* CopyRight Section */}
      <div className="md:mt-40 pt-2 text-center text-gray-400 text-xs border-t border-gray-700 leading-none">
        © 2024 Thirdvizion Labs | All Rights Reserved
      </div>

      {/* Brand Text */}
      <div className=" w-full h-full text-center bg-black text-[48px] md:text-[110px] lg:text-[150px] xl:text-[200px] 2xl:text-[220px] overflow-hidden ">
        <p className="md:-mt-4 md:-mb-8 lg:-mb-12 xl:-mb-16 2xl:-mt-16 bg-gradient-to-r from-yellow-400 via-green-500 to-red-500 
    bg-clip-text text-transparent tracking-wider ">
          THIRDVIZION
        </p>
      </div>
    </section>
  );
};

export default Footer;