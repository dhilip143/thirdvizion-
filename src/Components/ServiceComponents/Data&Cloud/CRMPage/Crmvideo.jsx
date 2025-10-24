

import React from "react";
import vid from "/src/assets/Crm/v1.mp4";

function CrmVideo() {
    return (
        <section className="w-full min-h-screen bg-black text-white py-16 px-6">
            <div className="max-w-6xl mx-auto">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Understanding CRM Software
                    </h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Learn how Customer Relationship Management transforms business operations and customer interactions.
                    </p>
                </div>

                {/* Video Player */}
                <div className="mb-16">
                    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-xl max-w-4xl mx-auto border border-gray-800">
                        <video
                            controls
                            autoPlay
                            muted
                            className="w-full h-auto"
                            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'%3E%3Crect width='800' height='450' fill='%231f2937'/%3E%3Cpath d='M320 200L480 280L320 360Z' fill='%233B82F6'/%3E%3C/svg%3E"
                        >
                            <source src={vid} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    
                    {/* Who Needs CRM Section */}
                    <div className="space-y-6">
                        <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
                            <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-3">
                                <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                                Who Needs CRM?
                            </h3>
                            <div className="space-y-4">
                                {[
                                    {
                                        title: "Sales Teams",
                                        desc: "Track leads, manage pipelines, and close deals faster"
                                    },
                                    {
                                        title: "Marketing Departments", 
                                        desc: "Segment audiences and measure campaign effectiveness"
                                    },
                                    {
                                        title: "Customer Support",
                                        desc: "Provide personalized service with complete customer history"
                                    },
                                    {
                                        title: "Small Businesses",
                                        desc: "Organize customer data and automate follow-ups"
                                    },
                                    {
                                        title: "Enterprises",
                                        desc: "Coordinate large teams and complex customer journeys"
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="flex gap-4 p-3 rounded-lg bg-gray-800/50">
                                        <div className="flex-shrink-0 w-2 bg-blue-500 rounded-full"></div>
                                        <div>
                                            <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                                            <p className="text-gray-400 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CRM Benefits Section */}
                    <div className="space-y-6">
                        <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
                            <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-3">
                                <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                                CRM Benefits
                            </h3>
                            <div className="space-y-4">
                                {[
                                    {
                                        title: "Increased Sales",
                                        desc: "Boost conversion rates with better lead management"
                                    },
                                    {
                                        title: "Customer Retention",
                                        desc: "Build stronger relationships and reduce churn"
                                    },
                                    {
                                        title: "Team Productivity", 
                                        desc: "Automate tasks and streamline workflows"
                                    },
                                    {
                                        title: "Data Centralization",
                                        desc: "All customer information in one place"
                                    },
                                    {
                                        title: "Informed Decisions",
                                        desc: "Make data-driven choices with analytics"
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="flex gap-4 p-3 rounded-lg bg-gray-800/50">
                                        <div className="flex-shrink-0 w-2 bg-green-500 rounded-full"></div>
                                        <div>
                                            <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                                            <p className="text-gray-400 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                {/* Key Features Section */}
                <div className="mt-16 max-w-4xl mx-auto">
                    <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
                        <h3 className="text-2xl font-bold text-purple-400 mb-8 text-center">
                            Essential CRM Features
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { feature: "Contact Management", icon: "👥" },
                                { feature: "Sales Pipeline", icon: "📊" },
                                { feature: "Email Integration", icon: "📧" },
                                { feature: "Task Automation", icon: "⚡" },
                                { feature: "Analytics & Reports", icon: "📈" },
                                { feature: "Mobile Access", icon: "📱" }
                            ].map((item, index) => (
                                <div key={index} className="text-center p-4 rounded-lg bg-gray-800/30 border border-gray-700">
                                    <div className="text-2xl mb-2">{item.icon}</div>
                                    <h4 className="font-semibold text-white">{item.feature}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default CrmVideo;
