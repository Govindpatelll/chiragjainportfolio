
import React, { useState, useEffect } from "react";
import { Menu, X, Mail, Phone, ExternalLink } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const currentScrollPos = window.pageYOffset;
      
      // Auto-hide navbar on scroll down, show on scroll up
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
      
      setScrolled(scrollPosition > 50);

      // Determine which section is in view
      const sections = navItems.map((item) => item.href.substring(1));
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen) {
        const target = event.target as HTMLElement;
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenu && !mobileMenu.contains(target) && !target.closest('button[aria-label="Toggle Menu"]')) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-dark-bg/90 backdrop-blur-xl border-b border-white/5 shadow-md"
          : "py-6"
      } ${visible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a
          href="#home"
          className="text-xl font-medium text-white flex items-center gap-2 transform transition-all duration-300 hover:scale-105"
        >
          <span className="text-accent-blue">C</span>
          <span>Chirag Jain</span>
        </a>

        <div className="hidden md:flex items-center gap-4">
          <a 
            href="mailto:chiragjainswm@gmail.com" 
            className="text-medium-gray hover:text-white transition-all duration-300 flex items-center gap-1.5 text-sm group"
          >
            <Mail size={16} className="group-hover:text-accent-blue" />
            <span>chiragjainswm@gmail.com</span>
          </a>
          
          <span className="h-4 w-px bg-white/10"></span>
          
          <a 
            href="tel:+917976075644" 
            className="text-medium-gray hover:text-white transition-all duration-300 flex items-center gap-1.5 text-sm group"
          >
            <Phone size={16} className="group-hover:text-accent-blue" />
            <span>+91 7976075644</span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`nav-link ${activeSection === item.href.substring(1) ? "active" : ""}`}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary ml-4 py-2 px-4 group"
          >
            Get in Touch
            <ExternalLink size={14} className="ml-1 transform transition-all duration-300 group-hover:translate-x-1" />
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-white glass-card w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-dark-bg/98 backdrop-blur-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-xl transition-colors duration-300 transform hover:scale-110 ${
                activeSection === item.href.substring(1)
                  ? "text-accent-blue"
                  : "text-light-gray"
              } hover:text-accent-blue`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary mt-8 py-2.5 px-6 flex items-center gap-2 hover:shadow-blue-glow transform transition-all duration-300 hover:translate-y-[-2px]"
            onClick={() => setIsOpen(false)}
          >
            <span>Get in Touch</span>
            <ExternalLink size={16} />
          </a>
          
          <div className="mt-6 flex flex-col gap-4 items-center">
            <a 
              href="mailto:chiragjainswm@gmail.com" 
              className="text-medium-gray hover:text-white transition-all duration-300 flex items-center gap-2 group"
            >
              <Mail size={18} className="text-accent-blue" />
              <span>chiragjainswm@gmail.com</span>
            </a>
            
            <a 
              href="tel:+917976075644" 
              className="text-medium-gray hover:text-white transition-all duration-300 flex items-center gap-2 group"
            >
              <Phone size={18} className="text-accent-blue" />
              <span>+91 7976075644</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
