

import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaChevronDown,
  FaRocket,
  FaCloud,
  FaCode,
  FaMobile,
  FaDatabase,
  FaShieldAlt,
  FaCube,
  FaBrain,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(null);

  const navigate = useNavigate();

  // Categories with their respective pages
  const categories = {
    "Immersive Tech": {
      icon: <FaCube className="w-4 h-4 sm:w-5 sm:h-5" />,
      pages: [
        {
          name: "Virtual Reality",
          href: "/virtual_reality",
        },
        {
          name: "Augmented Reality",
          href: "/augmented_reality",
        },
        {
          name: "3D Services",
          href: "/3d_services",
        },
      ],
    },
    "Data & Cloud": {
      icon: <FaCloud className="w-4 h-4 sm:w-5 sm:h-5" />,
      pages: [
        {
          name: "CRM Solutions",
          href: "/client_relationship_management",
        },
        {
          name: "IAM Solutions",
          href: "/identity_and_access_management",
        },
        {
          name: "ERP Solutions",
          href: "/enterprise_resource_planning",
        },
        {
          name: "Server Management",
          href: "/server_management",
        },
      ],
    },
    "Development&software": {
      icon: <FaCode className="w-4 h-4 sm:w-5 sm:h-5" />,
      pages: [
        {
          name: "Web Development",
          href: "/web_development",
        },
        {
          name: "Mobile Apps",
          href: "/app_development",
        },
        {
          name: "Game Development",
          href: "/game_development",
        },
      ],
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileCategoryOpen(null);
  };

  const handleNavClick = (path) => {
    navigate(path);
    closeMenu();
  };

  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/share/1Q5hmaxzpF/",
      label: "Facebook",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/thirdvizionlabs/",
      label: "Instagram",
    },
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/company/thirdvizion-labs/posts/?feedView=all",
      label: "LinkedIn",
    },
    {
      icon: FaGithub,
      href: "https://github.com/Thirdvizion-Labs",
      label: "GitHub",
    },
    {
      icon: FaYoutube,
      href: "https://www.youtube.com/@ThirdVizion",
      label: "YouTube",
    },
  ];

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/90 backdrop-blur-lg border-b border-white/10 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-18 px-3 sm:px-4 md:px-6 lg:px-10">
          {/* Logo */}
          <Link
            to="/"
            className="relative group cursor-pointer"
            onClick={closeMenu}
          >
            <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-lg blur-xl opacity-5 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative font-bold text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              ThirdVizion
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex justify-center items-center gap-4 xl:gap-8 text-white text-sm xl:text-base">
            <Link
              to="/"
              onClick={closeMenu}
              className="hover:text-purple-400 transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={closeMenu}
              className="hover:text-purple-400 transition"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("Services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-2 py-2 hover:text-purple-400 transition">
                Services
                <FaChevronDown
                  className={`w-3 h-3 transition-transform duration-300 ${
                    activeDropdown === "Services" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown */}
              <div
                className={`w-[70vw] absolute top-full left-1/2 transform -translate-x-1/2 mt-2 transition-all duration-300 ${
                  activeDropdown === "Services"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-4"
                }`}
              >
                <div className="bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {Object.entries(categories).map(
                    ([categoryName, categoryData]) => (
                      <div key={categoryName}>
                        <div className="flex items-center gap-2 text-purple-400 font-medium mb-2">
                          {categoryData.icon}
                          {categoryName}
                        </div>
                        <div className="space-y-2">
                          {categoryData.pages.map((page) => (
                            <Link
                              key={page.name}
                              to={page.href}
                              onClick={closeMenu}
                              className="flex items-center gap-2 text-gray-300 hover:text-white transition"
                            >
                              {page.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="hover:text-purple-400 transition"
            >
              Contact
            </Link>
            <Link
              to="/blog"
              onClick={closeMenu}
              className="hover:text-purple-400 transition"
            >
              Resources
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="hidden xl:flex gap-3 text-base">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 text-gray-400 hover:text-white transition"
                >
                  <IconComponent />
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="w-8 h-8 flex flex-col justify-center items-center"
            >
              <span
                className={`block h-0.5 w-5 bg-white transition ${
                  isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-black/95 backdrop-blur-xl z-40 overflow-y-auto p-6 pt-20 text-white">
          <div className="flex flex-col gap-6">
            <Link
              to="/"
              onClick={() => handleNavClick("/")}
              className="text-xl"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => handleNavClick("/about")}
              className="text-xl"
            >
              About
            </Link>

            {/* Services Accordion */}
            <div>
              <button
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === "Services" ? null : "Services"
                  )
                }
                className="flex items-center justify-between w-full text-xl"
              >
                Services
                <FaChevronDown
                  className={`transition-transform ${
                    activeDropdown === "Services" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeDropdown === "Services" && (
                <div className="mt-3 space-y-4">
                  {Object.entries(categories).map(
                    ([categoryName, categoryData]) => (
                      <div key={categoryName}>
                        <button
                          onClick={() =>
                            setMobileCategoryOpen(
                              mobileCategoryOpen === categoryName
                                ? null
                                : categoryName
                            )
                          }
                          className="flex items-center justify-between w-full text-purple-400"
                        >
                          <span className="flex items-center gap-2">
                            {categoryData.icon}
                            {categoryName}
                          </span>
                          <FaChevronDown
                            className={`transition ${
                              mobileCategoryOpen === categoryName
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>
                        {mobileCategoryOpen === categoryName && (
                          <div className="ml-6 mt-2 space-y-2">
                            {categoryData.pages.map((page) => (
                              <Link
                                key={page.name}
                                to={page.href}
                                onClick={() => handleNavClick(page.href)}
                                className="flex items-center gap-2 text-gray-300 hover:text-white transition"
                              >
                                {page.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  )}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              onClick={() => handleNavClick("/contact")}
              className="text-xl"
            >
              Contact
            </Link>

            <Link
              to="/blog"
              onClick={() => handleNavClick("/blog")}
              className="text-xl"
            >
              Resources
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
