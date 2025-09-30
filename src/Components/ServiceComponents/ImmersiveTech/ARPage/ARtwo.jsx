import React, { useState } from 'react';

const ARServices = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeCard, setActiveCard] = useState(1); // For interactive card animations

  const arServicesData = [
    {
      title: 'AR with Smartphone',
      content: 'We develop cutting-edge AR experiences for smartphones, leveraging device cameras and sensors to create immersive mobile interactions. Perfect for apps, games, and marketing campaigns.',
      details: [
        'iOS & Android AR Integration',
        'Camera-Based AR Experiences',
        'Motion Sensor Activation',
        'User-Friendly Mobile Interface'
      ],
      isGlowing: false,
      icon: '📱'
    },
    {
      title: 'AR with Smart Glasses',
      content: 'We create advanced AR solutions for smart glasses and wearable devices, delivering hands-free augmented reality experiences for enterprise, education, and entertainment applications.',
      details: [
        'Hands-Free AR Operations',
        'Wearable Device Optimization',
        'Real-Time Data Overlay',
        'Enterprise-Grade Solutions'
      ],
      isGlowing: true,
      icon: '👓'
    },
    {
      title: 'Web-Based AR',
      content: 'We build browser-based AR experiences that work directly on websites, eliminating the need for app downloads. Accessible AR through WebXR technology for instant engagement.',
      details: [
        'No App Download Required',
        'WebXR Technology Implementation',
        'Cross-Browser Compatibility',
        'Instant AR Access via URLs'
      ],
      isGlowing: false,
      icon: '🌐'
    },
  ];

  const ARServiceCard = ({ title, content, details, isGlowing, icon, index }) => {
    const isActive = activeCard === index;
    
    const baseStyles = 'p-8 rounded-2xl border border-pink-500/30 shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer';
    
    const glowStyles = isGlowing || isActive
      ? 'bg-gradient-to-br from-pink-900/40 to-purple-900/40 backdrop-blur-lg shadow-pink-500/50' 
      : 'bg-gray-900/40 hover:bg-gray-900/60 hover:shadow-pink-400/30';

    return (
      <div 
        className={`${baseStyles} ${glowStyles} flex flex-col h-full relative overflow-hidden group`}
        style={{ 
          boxShadow: (isGlowing || isActive) ? '0 0 60px rgba(236, 72, 153, 0.6)' : undefined 
        }}
        onMouseEnter={() => setActiveCard(index)}
        onMouseLeave={() => setActiveCard(1)}
      >
        {/* Animated background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Icon */}
        <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        <h3 className="text-2xl font-bold mb-4 text-pink-300 border-b border-pink-700/50 pb-3 relative z-10">
          {title}
        </h3>
        <p className="text-gray-300 mb-6 text-sm flex-grow relative z-10 leading-relaxed">{content}</p>
        
        {/* Details/List Section */}
        <div className="mt-3 relative z-10">
          <p className="text-pink-400 font-semibold mb-3 flex items-center">
            <span className="w-2 h-2 bg-pink-400 rounded-full mr-2 animate-pulse"></span>
            Key Features:
          </p>
          <ul className="space-y-3">
            {details.map((item, detailIndex) => (
              <li key={detailIndex} className="flex items-center text-gray-300 text-sm group/item hover:text-pink-200 transition-colors duration-200">
                <svg className="w-4 h-4 mr-3 text-pink-400 group-hover/item:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Hover effect border */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-400/30 rounded-2xl transition-all duration-300 pointer-events-none"></div>
      </div>
    );
  };

  const generateImage = async () => {
    if (!prompt) {
      setError('Please enter a description.');
      return;
    }
    setLoading(true);
    setImageUrl('');
    setError(null);

    // Simulate API call for demo purposes
    setTimeout(() => {
      setImageUrl(`https://picsum.photos/600/400?random=${Math.random()}`);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-pink-950 text-white min-h-screen flex p-4 overflow-hidden relative">
      {/* Exact background from first component */}
      <div className="absolute inset-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-black to-fuchsia-800/10 animate-pulse-slow"></div>
        
        {/* Grid pattern with pink glow */}
        <div className="absolute inset-0 z-0">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ec489955" strokeWidth="0.5" />
              </pattern>
              <radialGradient id="glow-gradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ec4899" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#be185d" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            <circle cx="20%" cy="30%" r="200" fill="url(#glow-gradient)" />
            <circle cx="80%" cy="70%" r="150" fill="url(#glow-gradient)" />
          </svg>
        </div>

        {/* Animated glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full filter blur-[100px] opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-400 rounded-full filter blur-[120px] opacity-15 animate-float-slow"></div>
        
        {/* Circuit pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,20 Q40,0 80,20 T160,20" stroke="white" fill="none" strokeWidth="0.5"/>
            <path d="M0,60 Q40,40 80,60 T160,60" stroke="white" fill="none" strokeWidth="0.5"/>
            <path d="M0,100 Q40,80 80,100 T160,100" stroke="white" fill="none" strokeWidth="0.5"/>
            <path d="M0,140 Q40,120 80,140 T160,140" stroke="white" fill="none" strokeWidth="0.5"/>
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto 2xl:pt-19  w-full mb-0 mt-10">
        
        {/* Enhanced Header Section */}
        <header className="text-center mt-0 mb-15">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            We Do <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">AR Solutions</span> For All Platforms
          </h1>
          
          {/* Animated decoration */}
          <div className="mt-8 flex justify-center">
            <div className="w-48 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full animate-pulse"></div>
          </div>
        </header>

        {/* Enhanced 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {arServicesData.map((service, index) => (
            <ARServiceCard key={index} {...service} index={index} />
          ))}
        </div>
        
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(10px) scale(1.02); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .bg-sparkle-pattern {
          background-image: radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px);
          background-size: 10px 10px;
        }
      `}</style>
    </div>
  );
};

export default ARServices;