import { useState, useEffect } from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaGithub,
    FaYoutube,
    FaChevronDown,
    FaCloud,
    FaCode,
    FaCube,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "/src/assets/Logo.svg";

const Header = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileCategoryOpen, setMobileCategoryOpen] = useState(null);

    // For animation
    const [activeBox, setActiveBox] = useState(null);

    const navigate = useNavigate();

    const categories = {
        "Immersive Tech": {
            icon: <FaCube className="w-4 h-4 sm:w-5 sm:h-5" />,
            pages: [
                { name: "Virtual Reality", href: "/virtual_reality" },
                { name: "Augmented Reality", href: "/augmented_reality" },
                { name: "3D Services", href: "/3d_services" },
            ],
        },
        "Data & Cloud": {
            icon: <FaCloud className="w-4 h-4 sm:w-5 sm:h-5" />,
            pages: [
                { name: "CRM Solutions", href: "/client_relationship_management" },
                { name: "IAM Solutions", href: "/identity_and_access_management" },
                { name: "ERP Solutions", href: "/enterprise_resource_planning" },
                { name: "Server Management", href: "/server_management" },
            ],
        },
        "Development & Software": {
            icon: <FaCode className="w-4 h-4 sm:w-5 sm:h-5" />,
            pages: [
                { name: "Web Development", href: "/web_development" },
                { name: "Mobile Apps", href: "/app_development" },
                { name: "Game Development", href: "/game_development" },
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
        const rect = e.currentTarget.getBoundingClientRect();
        setActiveBox({ page, rect });
    };

    const handleAnimationComplete = () => {
        if (activeBox?.page?.href) {
            navigate(activeBox.page.href);
            setActiveBox(null);
            closeMenu();
        }
    };

    const socialLinks = [
        { icon: FaFacebookF, href: "https://www.facebook.com/share/1Q5hmaxzpF/" },
        { icon: FaInstagram, href: "https://www.instagram.com/thirdvizionlabs/" },
        {
            icon: FaLinkedinIn,
            href: "https://www.linkedin.com/company/thirdvizion-labs/posts/?feedView=all",
        },
        { icon: FaGithub, href: "https://github.com/Thirdvizion-Labs" },
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
                            onMouseEnter={() => setActiveDropdown("Services")}
                            onMouseLeave={() => setActiveDropdown(null)}
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
                                    : "opacity-0 invisible -translate-y-40"
                                    }`}
                            >
                                <div
                                    style={{ clipPath: "circle(50.3% at 52% 0)" }}
                                    className="bg-white border border-white/10 rounded-2xl shadow-2xl  p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-[100vw] h-[100vh]">
                                    {Object.entries(categories).map(([categoryName, categoryData]) => (
                                        <div key={categoryName} className="flex flex-col gap-4">
                                            <div className="flex items-center gap-2 text-purple-400 font-semibold">
                                                {categoryData.icon}
                                                {categoryName}
                                            </div>

                                            {/* {/* Bento Grid  */}
                                            <div className="grid grid-cols-2 gap-3">
                                                {categoryData.pages.map((page, index) => {
                                                    const randomTransforms = [
                                                        "rotate-[-2deg] translate-x-1",
                                                        "rotate-[2deg] translate-y-1",
                                                        "rotate-[-1deg] -translate-x-1",
                                                        "rotate-[1deg] -translate-y-1",
                                                    ];
                                                    const transformClass =
                                                        randomTransforms[index % randomTransforms.length];

                                                    return (
                                                        <button
                                                            key={page.name}
                                                            onClick={(e) => handleBoxClick(page, e)}
                                                            className={`bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3 text-center text-sm text-gray-200 hover:bg-white/20 hover:text-white shadow-lg transition transform ${transformClass} hover:rotate-0 hover:translate-x-0 hover:translate-y-0`}
                                                        >
                                                            {page.name}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Mega Menu */}
                            {/* <AnimatePresence>
  {activeDropdown === "Services" && (
    <motion.div
      key="mega-menu"
      initial={{
        y: "-100%",         // start way up
        opacity: 0,
        scale: 0.8,
        clipPath: "circle(0% at 50% 0%)" // tiny circle at the top center
      }}
      animate={{
        y: 0,
        opacity: 1,
        scale: 1,
        clipPath: "circle(150% at 50% 0%)", // big enough to reveal whole menu
        transition: {
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1], // smooth "falling" curve
        },
      }}
      exit={{
        y: "-50%",
        opacity: 0,
        scale: 0.8,
        clipPath: "circle(0% at 50% 0%)",
        transition: { duration: 0.4, ease: "easeInOut" },
      }}
      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 z-40"
    >
      <div className="bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-[80vw] max-w-6xl">
        {Object.entries(categories).map(([categoryName, categoryData]) => (
          <div key={categoryName} className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-purple-400 font-semibold">
              {categoryData.icon}
              <span>{categoryName}</span>
            </div>

            {/* Bento Grid 
            <div className="grid grid-cols-2 gap-3">
              {categoryData.pages.map((page, index) => {
                const randomTransforms = [
                  "rotate-[-2deg] translate-x-1",
                  "rotate-[2deg] translate-y-1",
                  "rotate-[-1deg] -translate-x-1",
                  "rotate-[1deg] -translate-y-1",
                ];
                const transformClass =
                  randomTransforms[index % randomTransforms.length];

                return (
                  <Link
                    key={page.name}
                    to={page.href}
                    onClick={closeMenu}
                    className={`bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3 text-center text-sm text-gray-200 hover:bg-white/20 hover:text-white shadow-lg transition transform ${transformClass} hover:rotate-0 hover:translate-x-0 hover:translate-y-0`}
                  >
                    {page.name}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )}
</AnimatePresence> */}

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
                    <div className="hidden xl:flex gap-3 text-base">
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
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="w-8 h-8 flex flex-col justify-center items-center">
                            <span className={`block h-0.5 w-5 bg-white transition ${isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"}`} />
                            <span className={`block h-0.5 w-5 bg-white transition ${isOpen ? "opacity-0" : "opacity-100"}`} />
                            <span className={`block h-0.5 w-5 bg-white transition ${isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"}`} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Animate clicked box to center */}
            <AnimatePresence>
                {activeBox && (
                    <motion.div
                        initial={{
                            top: activeBox.rect.top,
                            left: activeBox.rect.left,
                            width: activeBox.rect.width,
                            height: activeBox.rect.height,
                            position: "fixed",
                            backgroundColor: "rgba(255,255,255,0.1)",
                            borderRadius: "0.75rem",
                            zIndex: 9999,
                        }}
                        animate={{
                            top: "50%",
                            left: "50%",
                            width: 300,
                            height: 120,
                            translateX: "-50%",
                            translateY: "-50%",
                            backgroundColor: "rgba(255,255,255,0.2)",
                            boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
                            borderRadius: "1rem",
                        }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        onAnimationComplete={handleAnimationComplete}
                        className="flex items-center justify-center text-white text-lg font-semibold"
                    >
                        {activeBox.page.name}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;