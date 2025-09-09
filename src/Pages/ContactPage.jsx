import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaWordpress,
} from "react-icons/fa";

const socialLinks = [
  { Icon: FaFacebookF, href: "https://facebook.com" },
  { Icon: FaInstagram, href: "https://instagram.com" },
  { Icon: FaLinkedinIn, href: "https://linkedin.com" },
  { Icon: FaGithub, href: "https://github.com" },
  { Icon: FaYoutube, href: "https://youtube.com" },
  { Icon: FaWordpress, href: "https://wordpress.com" },
];

const typingContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const typingText = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  const text = "Let's create\nsomething unforgettable";

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden px-6 py-16">
      {/* Background Blobs */}
      <div className="absolute top-[-120px] left-[-150px] w-[400px] h-[400px] bg-blue-500 rounded-full blur-[220px] opacity-40"></div>
      <div className="absolute bottom-[-120px] right-[-150px] w-[500px] h-[500px] bg-purple-600 rounded-full blur-[250px] opacity-30"></div>
      <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] bg-cyan-400 rounded-full blur-[180px] opacity-30"></div>

      <div className="relative z-10 flex flex-col md:flex-row max-w-7xl mx-auto md:min-h-screen md:items-start md:space-x-12">
        {/* LEFT SIDE */}
        <div className="md:w-1/3 md:sticky md:top-24 self-start space-y-8">
          <motion.h1
            className="text-4xl lg:text-5xl font-extrabold leading-tight bg-gradient-to-r from-yellow-400 via-blue-500 via-green-500 to-red-500 bg-clip-text text-transparent whitespace-pre-line"
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

          <p className="text-lg md:text-xl text-gray-300">
            If you are curious about what you saw, contact us or follow us{" "}
            <br />
            on social media.
          </p>

          <div className="flex gap-6 text-2xl text-gray-300">
            {socialLinks.map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#a855f7" }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="mt-12 md:mt-0 md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Info Cards */}
          <div className="p-6 bg-gray-900/60 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-yellow-400">Address</h3>
            <p className="text-gray-300 mt-2">123 Tech Street, City, Country</p>
          </div>
          <div className="p-6 bg-gray-900/60 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-yellow-400">Phone</h3>
            <p className="text-gray-300 mt-2">+91 98765 43210</p>
          </div>
          <div className="p-6 bg-gray-900/60 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-yellow-400">Email</h3>
            <p className="text-gray-300 mt-2">info@thirdvizion.com</p>
          </div>
          <div className="p-6 bg-gray-900/60 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-yellow-400">Support</h3>
            <p className="text-gray-300 mt-2">support@thirdvizion.com</p>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2 p-6 bg-gray-900/60 rounded-2xl shadow-lg">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-yellow-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-yellow-400"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-yellow-400"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-yellow-400 via-blue-500 to-purple-600 rounded-lg font-bold text-black hover:opacity-90"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Google Map Embed */}
      {/* <div className="relative z-10 mt-12 max-w-7xl mx-auto">
        <iframe
          src="https://maps.app.goo.gl/yRq1ai24hgsHYupi6"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          className="rounded-2xl shadow-lg"
        ></iframe>
        
      </div> */}
      <div className="relative z-10 mt-12 max-w-7xl mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.3769118616685!2d80.21570859260818!3d13.130346971455051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265005562c04d%3A0xffa654adbcddc690!2sThirdvizion%20Labs%20Private%20Limited!5e0!3m2!1sen!2sin!4v1756812933414!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-2xl shadow-lg border-0"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
