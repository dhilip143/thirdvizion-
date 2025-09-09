import React from "react";
import ServerImage from "/src/assets/HeroImages/ServerImage.jpg"; // make sure path is correct
import Choose from "/src/Components/ServiceComponents/Data&Cloud/ServerChoose";
import Details from "/src/Components/ServiceComponents/Data&Cloud/ServerDetail";

function ServerPage() {
  return (
    <>
      <div className="flex h-[70vh]">
        {/* Left Section */}
        <div className="w-1/2 bg-black flex items-center justify-center p-6">
          <div className="flex flex-col items-center text-center max-w-md">
            <h1 className="text-3xl text-teal-200 mb-4">SERVER MANAGEMENT</h1>
            <p className="text-white">
              We provide comprehensive server management services, ensuring your
              servers are secure, reliable, and perform optimally. This includes
              proactive monitoring, regular maintenance, and swift
              troubleshooting to minimize downtime and protect your data. 🛡️
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 bg-black flex items-center justify-center">
          <img
            src={ServerImage}
            alt="server management"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      <Choose />
      <Details />
    </>
  );
}

export default ServerPage;
