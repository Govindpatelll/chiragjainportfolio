
import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // WhatsApp link with pre-filled message
  const whatsappLink = "https://api.whatsapp.com/send?phone=917976075644&text=Hello%20Chirag%2C%20I'm%20reaching%20out%20from%20your%20portfolio%20website.";
  
  // Handle scroll to hide/show button based on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed z-50 flex items-center justify-center transition-all duration-500 ${
        isVisible ? 'right-6 opacity-100' : 'right-0 opacity-0'
      } bottom-24 md:bottom-16`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Contact via WhatsApp"
    >
      <div className={`relative flex items-center group ${isHovered ? 'scale-110' : 'scale-100'} transition-all duration-300`}>
        {/* Pulsing background effect */}
        <div className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-pulse-slow scale-110"></div>
        
        {/* Main button */}
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-lg hover:shadow-green-500/50 z-10 relative overflow-hidden">
          {/* WhatsApp icon */}
          <MessageCircle className="w-7 h-7 text-white" />
          
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
        </div>
        
        {/* Tooltip */}
        <div className={`absolute right-16 bg-white text-gray-800 px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap transition-all duration-300 ${
          isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        } transform origin-left`}>
          <span className="text-sm font-medium">Chat on WhatsApp</span>
          <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
