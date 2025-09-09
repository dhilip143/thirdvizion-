import React from "react";
import CRMShowcase from "./CRMShowcase";
import SalesforceFeture from "./SalesforceFeture";

const HeroBanner = () => {
  return (
    <>
      <section
        className="relative w-full min-h-[80vh] flex items-center justify-center rounded-t-3xl overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
    

        {/* Center Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">CRM</h1>
          <p className="text-white text-lg max-w-2xl mx-auto">
           Customer Relationship Management is a system 
or strategy that helps businesses manage 
interactions with current and potential 
customers, streamline processes, and improve 
customer satisfaction to drive sales and growth
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button className="px-6 py-2 bg-cyan-400 text-black font-semibold rounded-full hover:bg-cyan-300 transition">
              Get Started
            </button>
            <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <CRMShowcase />
      <SalesforceFeture />
   
    </>
  );
};

export default HeroBanner;
