import React from "react";

const Map = () => {
  return (
    <>
      {/* Google Map Embed */}
      <div className="relative z-10 py-12 w-full h-screen mx-auto bg-black">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.3769118616685!2d80.21570859260818!3d13.130346971455051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265005562c04d%3A0xffa654adbcddc690!2sThirdvizion%20Labs%20Private%20Limited!5e0!3m2!1sen!2sin!4v1756812933414!5m2!1sen!2sin"
          width="90%"
          height="400"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-2xl shadow-lg border-0 mx-auto map"
        ></iframe>
      </div>
    </>
  );
};

export default Map;
