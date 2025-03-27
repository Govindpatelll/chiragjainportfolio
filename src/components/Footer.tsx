
import React from "react";
import { Mail, Phone, Linkedin, Github, Heart, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-white/10 relative">
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-accent-blue/10 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 transform transition-all duration-300 hover:scale-105">
            <a href="#home" className="text-xl font-medium text-white flex items-center gap-2 hover:text-accent-blue transition-all duration-300">
              <span className="text-accent-blue">C</span>
              <span>Chirag Jain</span>
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex items-center gap-4">
              <a 
                href="https://www.linkedin.com/in/chirag-jain-aa566a205" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-medium-gray hover:text-accent-blue transition-all duration-300 transform hover:scale-125"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-medium-gray hover:text-accent-blue transition-all duration-300 transform hover:scale-125"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              
              <a 
                href="mailto:chiragjainswm@gmail.com"
                className="text-medium-gray hover:text-accent-blue transition-all duration-300 transform hover:scale-125"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>

              <a 
                href="tel:+917976075644"
                className="text-medium-gray hover:text-accent-blue transition-all duration-300 transform hover:scale-125"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
            
            <div className="h-6 w-px bg-white/10 hidden md:block"></div>
            
            <nav className="hidden md:flex items-center space-x-6">
              {["Home", "About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-medium-gray hover:text-white transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:-bottom-1 after:left-0 after:bg-accent-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-medium-gray">
            © {currentYear} Chirag Jain. All rights reserved. Designed & Built with <Heart size={12} className="inline text-accent-blue animate-pulse" /> precision.
          </p>
          
          <div className="mt-3 md:mt-0">
            <a 
              href="#contact" 
              className="text-sm text-medium-gray hover:text-accent-blue transition-all duration-300 flex items-center gap-1 group"
            >
              <span>Get in touch</span>
              <ExternalLink size={14} className="transform transition-all duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
