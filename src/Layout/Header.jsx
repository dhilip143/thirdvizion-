// import { useState, useEffect } from "react";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaGithub,
//   FaYoutube,
//   FaChevronDown,
//   FaRocket,
//   FaCloud,
//   FaCode,
//   FaMobile,
//   FaDatabase,
//   FaShieldAlt,
//   FaCube,
//   FaBrain,
// } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";

// const Header = () => {
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const navigate = useNavigate();

//   // Categories with their respective pages
//   const categories = {
//     "Immersive Tech": {
//       icon: <FaCube className="w-4 h-4 sm:w-5 sm:h-5" />,
//       pages: [
//         {
//           name: "Virtual Reality",
//           href: "/vr",
//           icon: <FaCube className="w-4 h-4" />,
//         },
//         {
//           name: "Augmented Reality",
//           href: "/ar",
//           icon: <FaBrain className="w-4 h-4" />,
//         },
//         {
//           name: "3D Services",
//           href: "/3d",
//           icon: <FaRocket className="w-4 h-4" />,
//         },
//       ],
//     },
//     "Data & Cloud": {
//       icon: <FaCloud className="w-4 h-4 sm:w-5 sm:h-5" />,
//       pages: [
//         {
//           name: "CRM Solutions",
//           href: "/crm",
//           icon: <FaCloud className="w-4 h-4" />,
//         },
//         {
//           name: "IAM Solutions",
//           href: "/iam",
//           icon: <FaDatabase className="w-4 h-4" />,
//         },
//         {
//           name: "ERP Solutions",
//           href: "/erp",
//           icon: <FaShieldAlt className="w-4 h-4" />,
//         },
//         {
//           name: "Server Management",
//           href: "/server",
//           icon: <FaShieldAlt className="w-4 h-4" />,
//         },
//       ],
//     },
//     Development: {
//       icon: <FaCode className="w-4 h-4 sm:w-5 sm:h-5" />,
//       pages: [
//         {
//           name: "Web Development",
//           href: "/dev/web",
//           icon: <FaCode className="w-4 h-4" />,
//         },
//         {
//           name: "Mobile Apps",
//           href: "/dev/mobile",
//           icon: <FaMobile className="w-4 h-4" />,
//         },
//         {
//           name: "Custom Software",
//           href: "/dev/custom",
//           icon: <FaRocket className="w-4 h-4" />,
//         },
//       ],
//     },
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//     setActiveDropdown(null);
//   };

//   const handleNavClick = (path) => {
//     navigate(path);
//     closeMenu();
//   };

//   const handleDropdownEnter = (category) => {
//     setActiveDropdown(category);
//   };

//   const handleDropdownLeave = () => {
//     setActiveDropdown(null);
//   };

//   const socialLinks = [
//     {
//       icon: FaFacebookF,
//       href: "https://www.facebook.com/share/1Q5hmaxzpF/",
//       label: "Facebook",
//     },
//     {
//       icon: FaInstagram,
//       href: "https://www.instagram.com/thirdvizionlabs/",
//       label: "Instagram",
//     },
//     {
//       icon: FaLinkedinIn,
//       href: "https://www.linkedin.com/company/thirdvizion-labs/posts/?feedView=all",
//       label: "LinkedIn",
//     },
//     {
//       icon: FaGithub,
//       href: "https://github.com/Thirdvizion-Labs",
//       label: "GitHub",
//     },
//     {
//       icon: FaYoutube,
//       href: "https://www.youtube.com/@ThirdVizion",
//       label: "YouTube",
//     },
//   ];

//   return (
//     <>
//       <div
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//           scrolled
//             ? "bg-black/90 backdrop-blur-lg border-b border-white/10 shadow-2xl"
//             : "bg-transparent"
//         }`}
//       >
//         <div className="flex justify-between items-center h-14 sm:h-16 md:h-18 px-3 sm:px-4 md:px-6 lg:px-10">
//           {/* Logo with glow effect */}
//           <Link
//             to="/"
//             className="relative group cursor-pointer"
//             onClick={closeMenu}
//           >
//             <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-lg blur-xl opacity-5 group-hover:opacity-50 transition duration-300"></div>
//             <div className="relative  font-bold text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
//               ThirdVizion
//             </div>
//           </Link>

//           {/* Desktop Menu */}
//           <nav className="hidden lg:flex justify-center items-center gap-4 xl:gap-8 text-white text-sm xl:text-base">
//             <Link
//               to="/"
//               onClick={closeMenu}
//               className="relative py-2 transition-all duration-300 hover:text-purple-400 group cursor-pointer"
//             >
//               Home
//               <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
//             </Link>

//             <Link
//               to="/about"
//               onClick={closeMenu}
//               className="relative py-2 transition-all duration-300 hover:text-purple-400 group cursor-pointer"
//             >
//               About
//               <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
//             </Link>

//             {/* Categories Dropdown */}
//             {Object.entries(categories).map(([categoryName, categoryData]) => (
//               <div
//                 key={categoryName}
//                 className="relative group"
//                 onMouseEnter={() => handleDropdownEnter(categoryName)}
//                 onMouseLeave={handleDropdownLeave}
//               >
//                 <button className="flex items-center gap-1 xl:gap-2 py-2 transition-all duration-300 hover:text-purple-400 group text-sm xl:text-base">
//                   {categoryData.icon}
//                   <span className="whitespace-nowrap">{categoryName}</span>
//                   <FaChevronDown
//                     className={`w-3 h-3 transition-transform duration-300 ${
//                       activeDropdown === categoryName ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 {/* Dropdown Menu */}
//                 <div
//                   className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 transition-all duration-300 ${
//                     activeDropdown === categoryName
//                       ? "opacity-100 visible translate-y-0"
//                       : "opacity-0 invisible -translate-y-4"
//                   }`}
//                 >
//                   <div className="bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-4 min-w-48 xl:min-w-64">
//                     <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black/95 border-l border-t border-white/10 rotate-45"></div>

//                     <div className="space-y-2">
//                       {categoryData.pages.map((page, index) => (
//                         <Link
//                           key={page.name}
//                           to={page.href}
//                           onClick={closeMenu}
//                           className={`flex items-center gap-3 px-3 xl:px-4 py-2 xl:py-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 hover:text-white group animate-fadeInUp cursor-pointer text-sm xl:text-base`}
//                           style={{ animationDelay: `${index * 50}ms` }}
//                         >
//                           <div className="text-purple-400 group-hover:text-white transition-colors">
//                             {page.icon}
//                           </div>
//                           <span className="text-gray-300 group-hover:text-white transition-colors whitespace-nowrap">
//                             {page.name}
//                           </span>
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}

//             <Link
//               to="/contact"
//               onClick={closeMenu}
//               className="relative py-2 transition-all duration-300 hover:text-purple-400 group cursor-pointer"
//             >
//               Contact
//               <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
//             </Link>

//             <Link
//               to="/blog"
//               onClick={closeMenu}
//               className="relative py-2 transition-all duration-300 hover:text-purple-400 group cursor-pointer"
//             >
//               Resources
//               <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//           </nav>

//           {/* Social Icons - Hidden on smaller screens, visible on large+ */}
//           <div className="hidden xl:flex gap-3 text-base">
//             {socialLinks.map((social, index) => {
//               const IconComponent = social.icon;
//               return (
//                 <a
//                   key={social.label}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={social.label}
//                   className="relative p-2 text-gray-400 hover:text-white transition-all duration-300 group"
//                   style={{ animationDelay: `${index * 100}ms` }}
//                 >
//                   <div className="absolute inset-0  rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 scale-0 group-hover:scale-100"></div>
//                   <IconComponent className="relative z-10 transform group-hover:scale-110 transition-transform duration-300" />
//                 </a>
//               );
//             })}
//           </div>

//           {/* Tablet Social Icons - Visible on lg screens only */}
//           <div className="hidden lg:flex xl:hidden gap-2 text-sm">
//             {socialLinks.slice(0, 4).map((social) => {
//               const IconComponent = social.icon;
//               return (
//                 <a
//                   key={social.label}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={social.label}
//                   className="relative p-1.5 text-gray-400 hover:text-white transition-all duration-300 group"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 scale-0 group-hover:scale-100"></div>
//                   <IconComponent className="relative z-10 transform group-hover:scale-110 transition-transform duration-300" />
//                 </a>
//               );
//             })}
//           </div>

//           {/* Enhanced Mobile Menu Button */}
//           <div className="flex lg:hidden relative">
//             <button
//               onClick={toggleMenu}
//               className="relative w-8 h-8 sm:w-10 sm:h-10 flex flex-col justify-center items-center z-50 group cursor-pointer p-1"
//               aria-label="Toggle Menu"
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
//               <span
//                 className={`block h-0.5 w-5 sm:w-6 bg-white transition-all duration-300 ease-in-out transform ${
//                   isOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"
//                 }`}
//               />
//               <span
//                 className={`block h-0.5 w-5 sm:w-6 bg-white transition-all duration-300 ${
//                   isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
//                 }`}
//               />
//               <span
//                 className={`block h-0.5 w-5 sm:w-6 bg-white transition-all duration-300 ease-in-out transform ${
//                   isOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"
//                 }`}
//               />
//             </button>

//             {/* Enhanced Mobile Menu */}
//             <div
//               className={`fixed top-0 left-0 w-full h-full bg-black/95 backdrop-blur-xl z-40 transition-all duration-500 overflow-y-auto ${
//                 isOpen ? "opacity-100 visible" : "opacity-0 invisible"
//               }`}
//             >
//               <div className="flex flex-col justify-start items-center min-h-full pt-20 pb-8 gap-6 sm:gap-8 text-white px-4 sm:px-6">
//                 <Link
//                   to="/"
//                   onClick={() => handleNavClick("/")}
//                   className="text-xl sm:text-2xl font-medium transition-all duration-300 hover:text-purple-400 hover:scale-110 cursor-pointer"
//                 >
//                   Home
//                 </Link>

//                 <Link
//                   to="/about"
//                   onClick={() => handleNavClick("/about")}
//                   className="text-xl sm:text-2xl font-medium transition-all duration-300 hover:text-purple-400 hover:scale-110 cursor-pointer"
//                 >
//                   About
//                 </Link>

//                 {/* Mobile Categories */}
//                 <div className="space-y-4 sm:space-y-6 w-full max-w-sm">
//                   {Object.entries(categories).map(
//                     ([categoryName, categoryData]) => (
//                       <div key={categoryName} className="text-center">
//                         <div className="flex items-center justify-center gap-2 sm:gap-3 text-lg sm:text-xl font-medium text-purple-400 mb-2 sm:mb-3">
//                           {categoryData.icon}
//                           <span className="whitespace-nowrap">
//                             {categoryName}
//                           </span>
//                         </div>
//                         <div className="space-y-1 sm:space-y-2">
//                           {categoryData.pages.map((page) => (
//                             <Link
//                               key={page.name}
//                               to={page.href}
//                               onClick={() => handleNavClick(page.href)}
//                               className="flex items-center justify-center gap-2 text-sm sm:text-base text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer py-1"
//                             >
//                               {page.icon}
//                               <span className="whitespace-nowrap">
//                                 {page.name}
//                               </span>
//                             </Link>
//                           ))}
//                         </div>
//                       </div>
//                     )
//                   )}
//                 </div>

//                 <Link
//                   to="/contact"
//                   onClick={() => handleNavClick("/contact")}
//                   className="text-xl sm:text-2xl font-medium transition-all duration-300 hover:text-purple-400 hover:scale-110 cursor-pointer"
//                 >
//                   Contact
//                 </Link>

//                 {/* Mobile Social Icons */}
//                 <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-6 text-xl sm:text-2xl mt-4 sm:mt-8">
//                   {socialLinks.map((social, index) => {
//                     const IconComponent = social.icon;
//                     return (
//                       <a
//                         key={index}
//                         href={social.href}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         aria-label={social.label}
//                         className="flex items-center justify-center text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-125 hover:rotate-12 p-2"
//                       >
//                         <IconComponent />
//                       </a>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;

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
          href: "/vr",
        },
        {
          name: "Augmented Reality",
          href: "/ar",
        },
        {
          name: "3D Services",
          href: "/3d",
        },
      ],
    },
    "Data & Cloud": {
      icon: <FaCloud className="w-4 h-4 sm:w-5 sm:h-5" />,
      pages: [
        {
          name: "CRM Solutions",
          href: "/crm",
        },
        {
          name: "IAM Solutions",
          href: "/iam",
        },
        {
          name: "ERP Solutions",
          href: "/erp",
        },
        {
          name: "Server Management",
          href: "/server",
        },
      ],
    },
    Development: {
      icon: <FaCode className="w-4 h-4 sm:w-5 sm:h-5" />,
      pages: [
        {
          name: "Web Development",
          href: "/web",
        },
        {
          name: "Mobile Apps",
          href: "/mobile",
        },
        {
          name: "Game Development",
          href: "/game",
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
