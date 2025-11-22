import React, { useState, useRef, useEffect } from "react";
import vid from "/src/assets/Crm/1.9.1_CRM.mp4";

function CrmVideo() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);

    useEffect(() => {
        // Auto play video when component mounts
        if (videoRef.current) {
            videoRef.current.play().then(() => {
                setIsPlaying(true);
            }).catch(error => {
                console.log("Auto-play failed:", error);
            });
        }
    }, []);

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

    const handleMuteUnmute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <section className="w-full min-h-screen text-white py-8 md:py-16 px-4 sm:px-6 font-sans">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-6 font-sans">
                    <span className="bg-gradient-to-r from-[#FF6467] via-[#FF6467] to-[#FF6467] bg-clip-text text-transparent bg-size-200 animate-gradient" style={{ fontFamily: "Outfit, sans-serif" }} >
                        Understanding CRM Software
                    </span>
                </h1>
                <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-sans" style={{ fontFamily: "work-sans, sans-serif" }}>
                    Complete guide to Customer Relationship Management and how it transforms business operations
                </p>
            </div>

            {/* Enhanced Video Player Section */}
            <div className="max-w-6xl mx-auto mb-12 md:mb-20">
                <div className="relative group">
                    {/* Background Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF6467] to-[#FF6467] rounded-2xl md:rounded-3xl blur-2xl md:blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
                    
                    {/* Video Container */}
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-[#FF646730] shadow-xl md:shadow-2xl overflow-hidden transform transition-all duration-700 group-hover:shadow-[0_0_80px_rgba(255,100,103,0.3)]">
                        <div className="relative">
                            <video
                                ref={videoRef}
                                controls={false}
                                autoPlay={true}
                                muted={isMuted}
                                loop={true}
                                playsInline={true}
                                className="w-full h-auto rounded-xl md:rounded-2xl"
                                poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%231f2937;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23000;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='450' fill='url(%23grad)'/%3E%3Ccircle cx='400' cy='225' r='80' fill='%23FF6467' opacity='0.1'/%3E%3Cpath d='M360 200L440 225L360 250Z' fill='%23FF6467'/%3E%3C/svg%3E"
                            >
                                <source src={vid} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            
                            {/* Custom Video Controls */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button
                                    onClick={handlePlayPause}
                                    className={`group relative bg-gradient-to-r from-[#FF6467] to-[#FF6467] w-12 h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:shadow-2xl ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}
                                >
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF6467] to-[#FF6467] opacity-75 animate-ping"></div>
                                    <svg 
                                        className="w-4 h-4 md:w-8 md:h-8 text-white" 
                                        fill="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        {isPlaying ? (
                                            <path d="M6 4h4v16H6zM14 4h4v16h-4z"/>
                                        ) : (
                                            <path d="M8 5v14l11-7z"/>
                                        )}
                                    </svg>
                                </button>
                            </div>
                            
                            {/* Video Overlay Info */}
                            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-3 md:gap-0">
                                <div className="bg-black/60 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 border border-white/10 flex-1 md:flex-none">
                                    <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2 font-sans" style={{ fontFamily: "Outfit, sans-serif" }}>Understanding CRM Software</h3>
                                    <p className="text-gray-300 text-xs md:text-sm font-sans" style={{ fontFamily: "work-sans, sans-serif" }}>Complete guide to Customer Relationship Management</p>
                                </div>
                                <div className="flex gap-2 md:gap-3 self-end">
                                    {/* Audio Control Button */}
                                    <button 
                                        onClick={handleMuteUnmute}
                                        className="bg-[#FF646710] backdrop-blur-sm rounded-lg md:rounded-xl p-2 md:p-3 border border-[#FF646730] hover:bg-[#FF646720] hover:border-[#FF646750] transition-all duration-300"
                                    >
                                        <svg className="w-4 h-4 md:w-5 md:h-5 text-[#FF6467]" fill="currentColor" viewBox="0 0 24 24">
                                            {isMuted ? (
                                                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                                            ) : (
                                                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                                            )}
                                        </svg>
                                    </button>
                                    <button className="bg-[#FF646710] backdrop-blur-sm rounded-lg md:rounded-xl p-2 md:p-3 border border-[#FF646730] hover:bg-[#FF646720] hover:border-[#FF646750] transition-all duration-300">
                                        <svg className="w-4 h-4 md:w-5 md:h-5 text-[#FF6467]" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/>
                                        </svg>
                                    </button>
                                    <button className="bg-[#FF646710] backdrop-blur-sm rounded-lg md:rounded-xl p-2 md:p-3 border border-[#FF646730] hover:bg-[#FF646720] hover:border-[#FF646750] transition-all duration-300">
                                        <svg className="w-4 h-4 md:w-5 md:h-5 text-[#FF6467]" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Who Needs CRM Section */}
            <div className="max-w-7xl mx-auto">
                <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-[#FF646730] hover:border-[#FF646760] transition-all duration-500">
                    <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#FF6467] to-[#FF6467] rounded-xl md:rounded-2xl flex items-center justify-center">
                            <span className="text-white text-lg md:text-xl">🎯</span>
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-[#FF6467] font-sans" style={{ fontFamily: "Outfit, sans-serif" }}>Who Needs CRM?</h3>
                            <p className="text-gray-400 text-sm md:text-base font-sans" style={{ fontFamily: "work-sans, sans-serif" }}>Perfect solution for teams that value customer relationships</p>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                        {[
                            {
                                icon: "🏢",
                                title: "Sales Teams",
                                description: "Track leads, manage pipelines, and close deals faster with automated workflows",
                                color: "from-[#FF6467] to-[#FF6467]"
                            },
                            {
                                icon: "📢",
                                title: "Marketing Departments",
                                description: "Segment audiences, track campaigns, and measure ROI effectively",
                                color: "from-[#FF6467] to-[#FF6467]"
                            },
                            {
                                icon: "🤝",
                                title: "Customer Support",
                                description: "Provide personalized service with complete customer history and context",
                                color: "from-[#FF6467] to-[#FF6467]"
                            },
                            {
                                icon: "🌐",
                                title: "Small Businesses",
                                description: "Organize customer data and automate follow-ups to scale efficiently",
                                color: "from-[#FF6467] to-[#FF6467]"
                            },
                            {
                                icon: "🏛️",
                                title: "Enterprises",
                                description: "Coordinate large teams and manage complex customer journeys",
                                color: "from-[#FF6467] to-[#FF6467]",
                                fullWidth: true
                            }
                        ].map((item, index) => (
                            <div 
                                key={index}
                                className={`group flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-r from-[#FF646710] to-[#FF646705] border border-[#FF646730] hover:border-[#FF646760] hover:bg-gradient-to-r hover:from-[#FF646720] hover:to-[#FF646710] transition-all duration-300 ${
                                    item.fullWidth ? 'md:col-span-2' : ''
                                }`}
                            >
                                <div className={`w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br ${item.color} rounded-lg md:rounded-xl flex items-center justify-center text-white text-base md:text-lg group-hover:scale-110 transition-transform duration-300`}>
                                    {item.icon}
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-white text-sm md:text-base mb-1 group-hover:text-[#FF6467] transition-colors duration-300 font-sans" style={{ fontFamily: "Outfit, sans-serif" }}>
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-400 text-xs md:text-sm font-sans" style={{ fontFamily: "work-sans, sans-serif" }}>{item.description}</p>
                                </div>
                            </div>
                        ))}
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