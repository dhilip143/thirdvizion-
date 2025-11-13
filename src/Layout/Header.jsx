


import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
 
  FaYoutube,
  FaChevronDown,
  FaVrCardboard,
  FaCubes,
  FaUsers,
  FaLock,
  FaDatabase,
  FaServer,
  FaCode,
  FaMobileAlt,
  FaGamepad,
} from "react-icons/fa";
import { MdViewInAr } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "/src/assets/Logo.svg";
import NewLogo from "/src/assets/New_Logo.png"

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [setMobileCategoryOpen] = useState(null);
  const [hoverDisabled, setHoverDisabled] = useState(false);
  const [activeBox, setActiveBox] = useState(null);

  const navigate = useNavigate();

  const categories = {
    "Immersive Tech": {
      pages: [
        {
          name: "Virtual Reality",
          href: "/virtual_reality",
          icon: <FaVrCardboard className="w-4 h-4 text-purple-400" />,
          desc: "Create fully immersive 3D experiences for training, marketing, or entertainment.",
        },
        {
          name: "Augmented Reality",
          href: "/augmented_reality",
          icon: <MdViewInAr className="w-4 h-4 text-pink-400" />,
          desc: "Blend the digital and real world with interactive AR applications.",
        },
        {
          name: "3D Services",
          href: "/3d_services",
          icon: <FaCubes className="w-4 h-4 text-blue-400" />,
          desc: "High-quality 3D modeling, rendering, and visualization for any industry.",
        },
      ],
    },
    "Data & Cloud": {
      pages: [
        {
          name: "CRM Solutions",
          href: "/client_relationship_management",
          icon: <FaUsers className="w-4 h-4 text-red-400" />,
          desc: "Manage customer data, boost sales, and streamline communication.",
        },
        {
          name: "IAM Solutions",
          href: "/identity_and_access_management",
          icon: <FaLock className="w-4 h-4 text-yellow-400" />,
          desc: "Securely control user access and identity management across systems.",
        },
        {
          name: "ERP Solutions",
          href: "/enterprise_resource_planning",
          icon: <FaDatabase className="w-4 h-4 text-indigo-400" />,
          desc: "Unify business operations with powerful, scalable ERP software.",
        },
        {
          name: "Server Management",
          href: "/server_management",
          icon: <FaServer className="w-4 h-4 text-green-400" />,
          desc: "Reliable server setup, monitoring, and optimization for your infrastructure.",
        },
      ],
    },
    "Development & Software": {
      pages: [
        {
          name: "Web Development",
          href: "/web_development",
          icon: <FaCode className="w-4 h-4 text-cyan-400" />,
          desc: "Modern, responsive, and fast websites built to engage users.",
        },
        {
          name: "Mobile Apps",
          href: "/app_development",
          icon: <FaMobileAlt className="w-4 h-4 text-orange-400" />,
          desc: "Custom iOS & Android apps designed for performance and scalability.",
        },
        {
          name: "Game Development",
          href: "/game_development",
          icon: <FaGamepad className="w-4 h-4 text-pink-400" />,
          desc: "Interactive and visually stunning games for multiple platforms.",
        },
      ],
    },
  };


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileCategoryOpen(null);
  };

  const handleBoxClick = (page, e) => {

    navigate(page.href); // instantly go to the clicked page
    setIsOpen(false); // close the mobile menu if open
    setActiveDropdown(null); // close dropdown if open
  }

  const socialLinks = [
    { icon: FaFacebookF, href: "https://www.facebook.com/share/1Q5hmaxzpF/" },
    { icon: FaInstagram, href: "https://www.instagram.com/thirdvizionlabs/" },
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/company/thirdvizion-labs/posts/?feedView=all",
    },

    { icon: FaYoutube, href: "https://www.youtube.com/@ThirdVizion" },
  ];

  return (
    <>
      {/* Top Nav */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-black/90 backdrop-blur-lg border-b border-white/10 shadow-2xl"
          : "bg-transparent"
          }`}
      >
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-18 px-3 sm:px-4 md:px-6 lg:px-10">
          {/* Logo */}
          <Link to="/" onClick={closeMenu}>
            <img src={Logo} alt="Logo" className="size-40" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex justify-center items-center gap-4 xl:gap-8 text-white text-sm xl:text-base">
            <Link to="/" onClick={closeMenu} className="hover:text-purple-400">
              Home
            </Link>
            <Link
              to="/about"
              onClick={closeMenu}
              className="hover:text-purple-400"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => !hoverDisabled && setActiveDropdown("Services")}
              onMouseLeave={() => !hoverDisabled && setActiveDropdown(null)}
            >

              <button className="flex items-center gap-2 py-2 hover:text-purple-400">
                Services
                <FaChevronDown
                  className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === "Services" ? "rotate-180" : ""
                    }`}
                />
              </button>

              {/* Mega Menu */}
              <div
                className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-4 transition-all duration-300 ${activeDropdown === "Services"
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-4"
                  }`}
              >
                <div className="bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-[80vw] max-w-6xl">
                  {Object.entries(categories).map(([categoryName, categoryData]) => (
                    <div key={categoryName} className="flex flex-col gap-4">
                      {/* Category Heading (No icon) */}
                      <h3 className="text-gray-300 uppercase text-xs tracking-wide">
                        {categoryName}
                      </h3>

                      {/* Page Links */}
                      <div className="flex flex-col gap-3">
                        {categoryData.pages.map((page) => (
                          <button
                            key={page.name}
                            onClick={(e) => handleBoxClick(page, e)}
                            className="flex items-start gap-3 rounded-xl p-3 hover:bg-white/10 transition"
                          >
                            {/* Icon for Page */}
                            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 text-purple-400 text-lg">
                              {page.icon} {/* page.icon should be defined in categories data */}
                            </span>

                            {/* Page Name + Description */}
                            <div className="text-left">
                              <p className="text-sm text-white font-medium">
                                {page.name}
                              </p>
                              <p className="text-xs text-gray-400">
                                {page.desc}
                              </p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>


            <Link
              to="/contact"
              onClick={closeMenu}
              className="hover:text-purple-400"
            >
              Contact
            </Link>
            <Link
              to="/blog"
              onClick={closeMenu}
              className="hover:text-purple-400"
            >
              Resources
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="hidden lg:flex gap-3 text-base">
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              return (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-white"
                >
                  <Icon />
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden fixed top-5 right-10 z-50">
            <button onClick={toggleMenu} className="w-8 h-8 flex flex-col justify-center items-center z-50">
              <span className={`block h-0.5 w-5 bg-white transition ${isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"}`} />
              <span className={`block h-0.5 w-5 bg-white transition ${isOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`block h-0.5 w-5 bg-white transition ${isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"}`} />
            </button>
          </div>

          {/* Mobile Menu Drawer */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="w-full absolute top-0 z-40 bg-black/95 backdrop-blur-xl p-6 flex flex-col lg:hidden"
              >
                {/* Scrollable container */}
                <div className="flex-1 overflow-y-scroll flex flex-col gap-6 pt-">
                  {/* Mobile Nav Links */}
                  <nav className="flex flex-col gap-4 text-white text-lg">
                    <Link to="/" onClick={closeMenu} className="hover:text-purple-400">
                      Home
                    </Link>
                    <Link to="/about" onClick={closeMenu} className="hover:text-purple-400">
                      About
                    </Link>

                    {/* Collapsible Services Section */}
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-gray-300 text-sm uppercase mb-3">Services</p>
                      {Object.entries(categories).map(([categoryName, categoryData]) => (
                        <div key={categoryName} className="mb-4">
                          <p className="text-xs text-gray-400 mb-2">{categoryName}</p>
                          <div className="flex flex-col gap-2">
                            {categoryData.pages.map((page) => (
                              <button
                                key={page.name}
                                onClick={(e) => handleBoxClick(page, e)}
                                className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10"
                              >
                                <span className="w-6 h-6 flex items-center justify-center rounded bg-white/10 text-purple-400">
                                  {page.icon}
                                </span>
                                <span className="text-sm">{page.name}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link to="/contact" onClick={closeMenu} className="hover:text-purple-400">
                      Contact
                    </Link>
                    <Link to="/blog" onClick={closeMenu} className="hover:text-purple-400">
                      Resources
                    </Link>
                  </nav>

                  {/* Social Links */}
                  <div className="mt-auto flex gap-4 justify-center md:justify-start">
                    {socialLinks.map((social, i) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={i}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-white"
                        >
                          <Icon />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>

            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Header;
