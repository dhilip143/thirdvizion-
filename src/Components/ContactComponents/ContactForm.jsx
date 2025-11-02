import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaPaperPlane,
} from "react-icons/fa";

const socialLinks = [
  { Icon: FaFacebookF, href: "https://facebook.com", color: "#1877F2" },
  { Icon: FaInstagram, href: "https://instagram.com", color: "#E4405F" },
  { Icon: FaLinkedinIn, href: "https://linkedin.com", color: "#0A66C2" },
  { Icon: FaYoutube, href: "https://youtube.com", color: "#FF0000" },
];

const infoCards = [
  {
    icon: FaMapMarkerAlt,
    title: "Address",
    content: "11, 1st Floor, Ramdos Nagar Kolathur, Chennai-600099",
    color: "#F59E0B"
  },
  {
    icon: FaPhone,
    title: "Phone",
    content: "+91 89255 27548 / +044-26284947",
    color: "#10B981"
  },
  {
    icon: FaEnvelope,
    title: "Email",
    content: "business@thirdvizion.com",
    color: "#EF4444"
  },
  {
    icon: FaGlobe,
    title: "Support",
    content: "www.thirdvizion.com",
    color: "#3B82F6"
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const typingContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.05,
      delayChildren: 0.3 
    },
  },
};

const typingText = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  },
};

const formVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const buttonVariants = {
  initial: { 
    scale: 1,
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  },
  hover: { 
    scale: 1.05,
    background: "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  },
  tap: { 
    scale: 0.95 
  }
};

const ContactForm = () => {
  const text = "Let's create\nsomething unforgettable";
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendMail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    const params = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_xobkpan",
        "template_593n1su",
        params,
        "4AnXDmbIUVcrm3tHZ"
      );
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("❌ Failed to send email:", error);
      setStatus("❌ Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-black text-white overflow-hidden px-6 py-16"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row max-w-7xl mx-auto gap-12 lg:gap-16">
        {/* LEFT SIDE */}
        <motion.div
          className="lg:w-2/5 space-y-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h1
              className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight bg-gradient-to-r from-yellow-400 via-blue-500 via-green-500 to-red-500 bg-clip-text text-transparent whitespace-pre-line"
              variants={typingContainer}
              initial="hidden"
              animate="visible"
            >
              {text.split("").map((char, index) => (
                <motion.span key={index} variants={typingText}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p 
              className="text-lg lg:text-xl text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              If you are curious about what you saw, contact us or follow us{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent font-semibold">
                on social media.
              </span>
            </motion.p>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex gap-6 text-2xl"
            variants={itemVariants}
          >
            {socialLinks.map(({ Icon, href, color }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-700 hover:border-gray-500 transition-colors"
                whileHover={{ 
                  scale: 1.2, 
                  y: -5,
                  color: color,
                  backgroundColor: "rgba(255,255,255,0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>

          {/* Info Cards Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
            variants={containerVariants}
          >
            {infoCards.map(({ icon: Icon, title, content, color }, index) => (
              <motion.div
                key={index}
                className="p-4 bg-gray-900/40 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-gray-500 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  borderColor: color,
                  boxShadow: `0 10px 30px -10px ${color}40`
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div 
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: `${color}20` }}
                  >
                    <Icon className="text-xl" style={{ color }} />
                  </div>
                  <h3 className="font-bold text-white">{title}</h3>
                </div>
                <p className="text-gray-300 text-sm pl-11">{content}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - Contact Form */}
        <motion.div
          className="lg:w-3/5"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={formVariants}
        >
          <div className="bg-gray-900/30 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-gray-700 shadow-2xl">
            <motion.h2 
              className="text-2xl lg:text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Send us a Message
            </motion.h2>

            <form onSubmit={sendMail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 outline-none"
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 outline-none"
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 outline-none"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <textarea
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none outline-none"
                  required
                ></textarea>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-lg font-bold text-white border-none relative overflow-hidden group"
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  style={{
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </span>
                  
                  {/* Button shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </motion.button>
              </motion.div>
            </form>

            {status && (
              <motion.p 
                className="mt-4 p-3 rounded-lg text-center font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  backgroundColor: status.includes("✅") ? "#10B98120" : "#EF444420",
                  color: status.includes("✅") ? "#10B981" : "#EF4444",
                  border: `1px solid ${status.includes("✅") ? "#10B98140" : "#EF444440"}`
                }}
              >
                {status}
              </motion.p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;