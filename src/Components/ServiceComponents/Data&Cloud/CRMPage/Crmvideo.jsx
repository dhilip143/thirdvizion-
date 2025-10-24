import React, { useState, useRef } from "react";
import vid from "/src/assets/Crm/v1.mp4";

function CrmVideo() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-16 px-4 sm:px-6">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#FF646710] to-[#FF8E9E10] border border-[#FF646730] mb-8">
                    <div className="w-2 h-2 bg-[#FF6467] rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-[#FF8E9E]">CRM PLATFORM OVERVIEW</span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-[#FF6467] via-[#FF8E9E] to-[#FF6467] bg-clip-text text-transparent bg-size-200 animate-gradient">
                        Transform Your Customer Relationships
                    </span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Discover how our powerful CRM solution helps businesses build lasting customer connections 
                    and drive sustainable growth through intelligent relationship management.
                </p>
            </div>

            {/* Enhanced Video Player Section */}
            <div className="max-w-6xl mx-auto mb-20">
                <div className="relative group">
                    {/* Background Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF6467] to-[#FF8E9E] rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
                    
                    {/* Video Container */}
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-3xl border border-[#FF646730] shadow-2xl overflow-hidden transform transition-all duration-700 group-hover:shadow-[0_0_80px_rgba(255,100,103,0.3)]">
                        <div className="relative">
                            <video
                                ref={videoRef}
                                controls={false}
                                autoPlay={false}
                                muted
                                className="w-full h-auto rounded-2xl"
                                poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%231f2937;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23000;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='450' fill='url(%23grad)'/%3E%3Ccircle cx='400' cy='225' r='80' fill='%23FF6467' opacity='0.1'/%3E%3Cpath d='M360 200L440 225L360 250Z' fill='%23FF6467'/%3E%3C/svg%3E"
                            >
                                <source src={vid} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            
                            {/* Custom Video Controls */}
                            {!isPlaying && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-2xl">
                                    <button
                                        onClick={handlePlayPause}
                                        className="group relative bg-gradient-to-r from-[#FF6467] to-[#FF8E9E] w-20 h-20 rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:shadow-2xl"
                                    >
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF6467] to-[#FF8E9E] opacity-75 animate-ping"></div>
                                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z"/>
                                        </svg>
                                    </button>
                                </div>
                            )}
                            
                            {/* Video Overlay Info */}
                            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                                <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                                    <h3 className="text-xl font-bold text-white mb-2">Understanding CRM Software</h3>
                                    <p className="text-gray-300 text-sm">Complete guide to Customer Relationship Management</p>
                                </div>
                                <div className="flex gap-3">
                                    <button className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 hover:bg-white/20 transition-all duration-300">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/>
                                        </svg>
                                    </button>
                                    <button className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 hover:bg-white/20 transition-all duration-300">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            <div className="max-w-7xl mx-auto mb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: "🚀",
                            title: "Boost Sales Performance",
                            description: "Increase conversion rates with intelligent lead scoring and automated follow-ups",
                            stats: "47% avg. sales increase"
                        },
                        {
                            icon: "💡",
                            title: "Smart Automation",
                            description: "Automate repetitive tasks and focus on building meaningful customer relationships",
                            stats: "Save 15+ hours/week"
                        },
                        {
                            icon: "📊",
                            title: "Data-Driven Insights",
                            description: "Make informed decisions with real-time analytics and performance dashboards",
                            stats: "360° customer view"
                        }
                    ].map((feature, index) => (
                        <div 
                            key={index}
                            className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-[#FF646720] hover:border-[#FF646760] transition-all duration-500 hover:transform hover:-translate-y-2"
                        >
                            <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-[#FF6467] to-[#FF8E9E] rounded-2xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 pr-16">{feature.title}</h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-[#FF6467] font-semibold text-sm">{feature.stats}</span>
                                <div className="w-8 h-8 bg-[#FF6467] rounded-full flex items-center justify-center transform group-hover:translate-x-2 transition-transform duration-300">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Detailed Sections Grid */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    
                    {/* Who Needs CRM */}
                    <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-3xl p-8 border border-[#FF646730] hover:border-[#FF646760] transition-all duration-500">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#FF6467] to-[#FF8E9E] rounded-2xl flex items-center justify-center">
                                <span className="text-white text-xl">🎯</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">Who Needs CRM?</h3>
                                <p className="text-gray-400">Perfect solution for teams that value customer relationships</p>
                            </div>
                        </div>
                        
                        <div className="space-y-4">
                            {[
                                {
                                    icon: "🏢",
                                    title: "Sales Teams",
                                    description: "Track leads, manage pipelines, and close deals faster with automated workflows",
                                    color: "from-blue-500 to-cyan-400"
                                },
                                {
                                    icon: "📢",
                                    title: "Marketing Departments",
                                    description: "Segment audiences, track campaigns, and measure ROI effectively",
                                    color: "from-green-500 to-emerald-400"
                                },
                                {
                                    icon: "🤝",
                                    title: "Customer Support",
                                    description: "Provide personalized service with complete customer history and context",
                                    color: "from-purple-500 to-indigo-400"
                                },
                                {
                                    icon: "🌐",
                                    title: "Small Businesses",
                                    description: "Organize customer data and automate follow-ups to scale efficiently",
                                    color: "from-orange-500 to-red-400"
                                },
                                {
                                    icon: "🏛️",
                                    title: "Enterprises",
                                    description: "Coordinate large teams and manage complex customer journeys",
                                    color: "from-teal-500 to-cyan-400"
                                }
                            ].map((item, index) => (
                                <div 
                                    key={index}
                                    className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-gray-800/50 to-gray-700/30 border border-gray-700/50 hover:border-[#FF646760] hover:bg-gradient-to-r hover:from-gray-800/80 hover:to-gray-700/60 transition-all duration-300"
                                >
                                    <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white text-lg group-hover:scale-110 transition-transform duration-300`}>
                                        {item.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-white mb-1 group-hover:text-[#FF6467] transition-colors duration-300">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-400 text-sm">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CRM Benefits */}
                    <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-3xl p-8 border border-[#FF646730] hover:border-[#FF646760] transition-all duration-500">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#FF6467] to-[#FF8E9E] rounded-2xl flex items-center justify-center">
                                <span className="text-white text-xl">⭐</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">CRM Benefits</h3>
                                <p className="text-gray-400">Transform your business with measurable improvements</p>
                            </div>
                        </div>
                        
                        <div className="space-y-4">
                            {[
                                {
                                    icon: "📈",
                                    title: "Increased Sales",
                                    description: "Boost conversion rates by 47% with better lead management",
                                    progress: 87
                                },
                                {
                                    icon: "💝",
                                    title: "Customer Retention",
                                    description: "Build stronger relationships and reduce churn by 35%",
                                    progress: 92
                                },
                                {
                                    icon: "⚡",
                                    title: "Team Productivity", 
                                    description: "Automate tasks and save 15+ hours per week per team member",
                                    progress: 78
                                },
                                {
                                    icon: "🗂️",
                                    title: "Data Centralization",
                                    description: "All customer information accessible in one unified platform",
                                    progress: 95
                                },
                                {
                                    icon: "🎯",
                                    title: "Informed Decisions",
                                    description: "Make data-driven choices with real-time analytics and insights",
                                    progress: 83
                                }
                            ].map((item, index) => (
                                <div 
                                    key={index}
                                    className="group p-4 rounded-2xl bg-gradient-to-r from-gray-800/50 to-gray-700/30 border border-gray-700/50 hover:border-[#FF646760] hover:bg-gradient-to-r hover:from-gray-800/80 hover:to-gray-700/60 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-[#FF6467] to-[#FF8E9E] rounded-xl flex items-center justify-center text-white text-lg">
                                            {item.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-white group-hover:text-[#FF6467] transition-colors duration-300">
                                                {item.title}
                                            </h4>
                                        </div>
                                        <span className="text-[#FF6467] font-bold text-sm">{item.progress}%</span>
                                    </div>
                                    <p className="text-gray-400 text-sm mb-2">{item.description}</p>
                                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                                        <div 
                                            className="bg-gradient-to-r from-[#FF6467] to-[#FF8E9E] h-2 rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: `${item.progress}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Key Features Showcase */}
                <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-3xl p-8 border border-[#FF646730] hover:border-[#FF646760] transition-all duration-500">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-white mb-4">
                            <span className="bg-gradient-to-r from-[#FF6467] to-[#FF8E9E] bg-clip-text text-transparent">
                                Essential CRM Features
                            </span>
                        </h3>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Everything you need to manage customer relationships effectively in one powerful platform
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { 
                                feature: "Contact Management", 
                                icon: "👥", 
                                description: "Centralize all customer information and interactions",
                                color: "from-blue-500 to-cyan-400"
                            },
                            { 
                                feature: "Sales Pipeline", 
                                icon: "📊", 
                                description: "Visualize and manage your entire sales process",
                                color: "from-green-500 to-emerald-400"
                            },
                            { 
                                feature: "Email Integration", 
                                icon: "📧", 
                                description: "Sync all email communications automatically",
                                color: "from-red-500 to-pink-400"
                            },
                            { 
                                feature: "Task Automation", 
                                icon: "⚡", 
                                description: "Automate repetitive tasks and follow-ups",
                                color: "from-yellow-500 to-orange-400"
                            },
                            { 
                                feature: "Analytics & Reports", 
                                icon: "📈", 
                                description: "Gain insights with comprehensive reporting",
                                color: "from-purple-500 to-indigo-400"
                            },
                            { 
                                feature: "Mobile Access", 
                                icon: "📱", 
                                description: "Manage your CRM on the go with mobile apps",
                                color: "from-teal-500 to-cyan-400"
                            },
                            { 
                                feature: "Custom Workflows", 
                                icon: "🔄", 
                                description: "Create tailored processes for your business",
                                color: "from-pink-500 to-rose-400"
                            },
                            { 
                                feature: "Team Collaboration", 
                                icon: "🤝", 
                                description: "Work together seamlessly across departments",
                                color: "from-indigo-500 to-purple-400"
                            }
                        ].map((item, index) => (
                            <div 
                                key={index}
                                className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-700/30 border border-gray-700/50 hover:border-[#FF646760] hover:bg-gradient-to-r hover:from-gray-800/80 hover:to-gray-700/60 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                    {item.icon}
                                </div>
                                <h4 className="font-semibold text-white mb-2 group-hover:text-[#FF6467] transition-colors duration-300">
                                    {item.feature}
                                </h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-4xl mx-auto mt-20 text-center">
                <div className="bg-gradient-to-br from-[#FF646710] to-[#FF8E9E10] backdrop-blur-xl rounded-3xl p-12 border border-[#FF646730]">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Transform Your Customer Relationships?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join thousands of businesses that have revolutionized their customer management with our CRM platform.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-gradient-to-r from-[#FF6467] to-[#FF8E9E] text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 transform">
                            Start Free Trial
                        </button>
                        <button className="border border-[#FF6467] text-[#FF6467] px-8 py-4 rounded-2xl font-semibold hover:bg-[#FF646710] transition-all duration-300">
                            Schedule Demo
                        </button>
                    </div>
                </div>
            </div>

            {/* Custom CSS */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .bg-size-200 {
                    background-size: 200% 200%;
                }
                .animate-gradient {
                    animation: gradient 3s ease infinite;
                }
            `}</style>
        </section>
    );
}

export default CrmVideo;