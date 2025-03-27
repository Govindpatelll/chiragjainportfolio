
import React from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-medium text-white flex items-center gap-2">
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
                className="text-medium-gray hover:text-accent-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-medium-gray hover:text-accent-blue transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              
              <a 
                href="mailto:chiragjainswm@gmail.com"
                className="text-medium-gray hover:text-accent-blue transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>

              <a 
                href="tel:+917976075644"
                className="text-medium-gray hover:text-accent-blue transition-colors"
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
                  className="text-sm text-medium-gray hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/5 text-center md:text-left">
          <p className="text-sm text-medium-gray">
            © {currentYear} Chirag Jain. All rights reserved. Designed & Built with precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
