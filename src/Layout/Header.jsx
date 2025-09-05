import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaWordpress,
} from "react-icons/fa";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex justify-between items-center h-14 px-4 md:px-10  z-50 sticky">
        {/* Logo (replace with your image) */}
        <div className="text-white font-bold text-xl">ThirdVizion</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center items-center gap-6 text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/ame">game</Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <button className="focus:outline-none">Services</button>
            {dropdown && (
              <div className="absolute top-full left-0 bg-white text-black shadow-md rounded-lg w-44 z-50">
                <ul className="flex flex-col text-sm">
                  <Link
                    to="/immersive"
                    className="px-4 py-2 hover:bg-gray-100"
                    onClick={() => setDropdown(false)}
                  >
                    Immersive Technology
                  </Link>
                  <Link
                    to="/data"
                    className="px-4 py-2 hover:bg-gray-100"
                    onClick={() => setDropdown(false)}
                  >
                    Data & Cloud
                  </Link>
                  <Link
                    to="/software"
                    className="px-4 py-2 hover:bg-gray-100"
                    onClick={() => setDropdown(false)}
                  >
                    Software Development
                  </Link>
                </ul>
              </div>
            )}
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex gap-4 text-lg text-gray-300">
          <a
            href="https://www.facebook.com/share/1Q5hmaxzpF/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF className="hover:text-purple-400 transition-colors" />
          </a>
          <a
            href="https://www.instagram.com/thirdvizionlabs/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="hover:text-purple-400 transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/company/thirdvizion-labs/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="hover:text-purple-400 transition-colors" />
          </a>
          <a
            href="https://github.com/Thirdvizion-Labs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="hover:text-purple-400 transition-colors" />
          </a>
          <a
            href="https://www.youtube.com/@ThirdVizion"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube className="hover:text-purple-400 transition-colors" />
          </a>
          <a
            href="https://wordpress.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WordPress"
          >
            <FaWordpress className="hover:text-purple-400 transition-colors" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden relative">
          <button
            onClick={toggleMenu}
            className={`relative w-6 h-6 flex flex-col justify-between items-center z-50 group cursor-pointer`}
            aria-label="Toggle Menu"
          >
            <span
              className={`block h-0.5 w-full bg-white transition-transform duration-300 ease-in-out ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-white transition-transform duration-300 ease-in-out ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-6 text-lg text-white bg-black z-40 transition-transform duration-500">
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
              <Link to="/about" onClick={closeMenu}>
                About
              </Link>
              <Link to="/service" onClick={closeMenu}>
                Services
              </Link>
              <Link to="/contact" onClick={closeMenu}>
                Contact
              </Link>

              {/* Socials also inside mobile */}
              <div className="flex gap-4 text-xl text-gray-300 mt-6">
                <a href="https://www.facebook.com/share/1Q5hmaxzpF/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebookF className="hover:text-purple-400" />
                </a>
                <a href="https://www.instagram.com/thirdvizionlabs/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram className="hover:text-purple-400" />
                </a>
                <a href="https://www.linkedin.com/company/thirdvizion-labs/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedinIn className="hover:text-purple-400" />
                </a>
                <a href="https://github.com/Thirdvizion-Labs" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub className="hover:text-purple-400" />
                </a>
                <a href="https://www.youtube.com/@ThirdVizion" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <FaYoutube className="hover:text-purple-400" />
                </a>
                <a href="https://wordpress.com/" target="_blank" rel="noopener noreferrer" aria-label="WordPress">
                  <FaWordpress className="hover:text-purple-400" />
                </a>
              </div>
            </div>
          )}
        </div>

      </div>
    </>
  );
};

export default Header;
