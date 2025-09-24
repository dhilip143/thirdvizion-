import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
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

const ContactForm = () => {
  const text = "Let's create\nsomething unforgettable";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendMail = (e) => {
    e.preventDefault();

    const parms = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        "service_xobkpan", // ✅ Service ID
        "template_593n1su", // ✅ Template ID
        parms,
        "4AnXDmbIUVcrm3tHZ" // ✅ replace with Public Key from dashboard
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("❌ Failed to send email:", error);
          setStatus("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden px-6 py-16">


      <div className="relative z-10 flex flex-col md:flex-row max-w-7xl mx-auto md:min-h-screen md:items-start md:space-x-12">
        {/* LEFT SIDE */}
        <div className="md:w-1/3 md:sticky md:top-24 self-start space-y-8">
          <motion.h1
            className="text-4xl lg:text-5xl text-center md:text-start font-extrabold leading-tight bg-gradient-to-r from-yellow-400 via-blue-500 via-green-500 to-red-500 bg-clip-text text-transparent whitespace-pre-line"
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

          <p className="text-lg md:text-xl text-center md:text-start text-gray-300">
            If you are curious about what you saw, contact us or follow us{" "}
            <br />
            on social media.
          </p>

          <div className="flex gap-6 text-2xl justify-center md:justify-start text-gray-300">
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
          <div className="md:col-span-2 p-6  rounded-2xl shadow-lg">
            <form onSubmit={sendMail} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-yellow-400"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-yellow-400"
                required
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-yellow-400"
              />
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-yellow-400"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-transparent rounded-lg font-bold text-white border-1 hover:opacity-90"
              >
                Send Message
              </button>
            </form>
            {status && <p className="mt-4 text-sm">{status}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;


// import React from "react";

// export default function ContactSection() {
//   return (
//     <section className="bg-black text-white relative overflow-hidden py-16 px-4 md:px-12">
//       {/* Background gradient */}
//       {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-500 to-green-300 opacity-20 blur-3xl pointer-events-none"></div> */}

//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
//         {/* Left: Contact Form */}
//         <div className="space-y-6 z-10">
//           <h2 className="text-4xl md:text-5xl font-bold">We&apos;re here to help</h2>

//           <form className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium mb-1" htmlFor="name">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 placeholder="e.g. John Smith"
//                 className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1" htmlFor="email">
//                 Email address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="e.g. example@gmail.com"
//                 className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1" htmlFor="message">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 rows={4}
//                 placeholder="Let us know how we can help"
//                 className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="mt-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
//             >
//               Send message
//             </button>
//           </form>
//         </div>

//         {/* Right: Testimonial Card */}
//         <div className="z-10">
//           <div className="bg-gray-900/70 backdrop-blur-lg rounded-xl p-6 shadow-lg flex flex-col justify-between h-full">
//             <div className="space-y-4">
//               <div className="flex items-center gap-2">
//                 <span className="text-xl font-bold">Arctiq</span>
//               </div>
//               <p className="text-gray-300">
//                 &quot;Arctic <b>cut project delays by 30%</b> and transformed our global team communication,
//                 saving us hours every week.&quot;
//               </p>
//             </div>
//             <div className="mt-4">
//               <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Ebay_logo.svg" alt="eBay" className="h-6 w-auto" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
