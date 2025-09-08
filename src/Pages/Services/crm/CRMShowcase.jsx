
import React from "react";
import { User } from "lucide-react";

const Card = ({ id, title, highlight, description, image, button1, button2, details }) => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl shadow-xl border border-gray-800 grid grid-cols-1 md:grid-cols-2 overflow-hidden mb-12">
      {/* Left Image */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 border-2 border-cyan-400 opacity-60 pointer-events-none"></div>
      </div>

      {/* Right Content */}
      <div className="p-8 flex flex-col justify-between">
        {/* Top Icon */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg font-semibold">{id}</span>
          <User className="text-cyan-400" />
        </div>

        {/* Heading */}
        <h2 className="text-xl font-bold uppercase tracking-wide mb-4">
          {title}{" "}
          <span className="text-cyan-400 drop-shadow-lg">{highlight}</span>
        </h2>

        {/* Description */}
        {description && (
          <p className="text-gray-300 text-sm leading-relaxed mb-8">{description}</p>
        )}

        {/* Extra Details */}
        {details && (
          <div className="bg-cyan-900/30 border border-cyan-400 rounded-lg p-4 text-sm text-gray-300 mb-6">
            <p>
              <span className="font-semibold">Users:</span> {details.users}
            </p>
            <p>
              <span className="font-semibold">Storage:</span> {details.storage}
            </p>
            <p>
              <span className="font-semibold">Integrations:</span> {details.integrations}
            </p>
            <p>
              <span className="font-semibold">Plan:</span> {details.plan}
            </p>
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-4">
          {button1 && (
            <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
              {button1}
            </button>
          )}
          {button2 && (
            <button className="px-6 py-2 bg-cyan-400 text-black font-semibold rounded-full hover:bg-cyan-300 transition">
              {button2}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const CRMShowcase = () => {
  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center px-6 py-12 text-white">
      <div className="max-w-6xl w-full">
            {/* <h1>CHALLENGES YOU FACED BEFORE CRM</h1> */}
              <h2 className="text-4xl font-bold text-center text-teal-500 mb-12">CHALLENGES BEFORE CRM
     
      </h2>
        {/* Card 1 */}
        <Card
          id="01"
          title=" Manual "
          highlight="Workflow 
Bottleneck"
          description=" Dependence on manual processes caused 
delays and inefficiencies in daily operations."
          image="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          button1="Explore Insights"
          button2="Get Started"
        />

        {/* Card 2 */}
        <Card
          id="02"
          title="Disorganized"
          highlight=" Data 
Managements"
          description="Track leads, deals, and revenue growth with a visually interactive pipeline. Automate follow-ups and never miss an opportunity."
          image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        //   details={{
        //     users: "Unlimited",
        //     storage: "500 GB",
        //     integrations: "Slack, Gmail, HubSpot",
        //     plan: "Pro Edition",
        //   }}
        />

        {/* Card 3 */}
        <Card
          id="03"
          title=" Limited Insight and 
"
          highlight="Reporting"
          description=" Difficulty in generating actionable insights 
due to fragmented data and no real-time 
reporting tools."
          image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          button1="See Collaboration Tools"
          button2="Start Free Trial"
        />
          <Card
          id="04"
          title=""
          highlight=" Data 
Managements"
          description=" Challenges in tracking and managing client 
interactions, resulting in missed 
opportunities and slower response times"
          image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        //   details={{
        //     users: "Unlimited",
        //     storage: "500 GB",
        //     integrations: "Slack, Gmail, HubSpot",
        //     plan: "Pro Edition",
        //   }}
        />
      </div>
    </section>
  );
};

export default CRMShowcase;