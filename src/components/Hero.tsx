
import React, { useEffect, useRef } from "react";
import { ChevronDown, ExternalLink, Github } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;
    
    if (title) {
      title.classList.add("animate-fade-in");
    }
    
    if (subtitle) {
      setTimeout(() => {
        subtitle.classList.add("animate-fade-in");
      }, 300);
    }
    
    if (cta) {
      setTimeout(() => {
        cta.classList.add("animate-fade-in");
      }, 600);
    }
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent-blue/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-blue/5 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/3 left-1/3 w-48 h-48 border border-accent-blue/20 rounded-full animate-rotate-slow opacity-30"></div>
        
        {/* Additional decorative elements */}
        <div className="absolute top-1/2 right-1/6 w-32 h-32 border border-accent-blue/10 rounded-full animate-rotate-slow opacity-20" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-accent-blue/5 rounded-full animate-pulse-slow" style={{ animationDelay: "1.5s" }}></div>
        
        {/* New decoration elements */}
        <div className="absolute top-1/5 left-1/6 w-4 h-4 bg-accent-blue/30 rounded-full animate-ping opacity-70" style={{ animationDelay: "0.5s", animationDuration: "3s" }}></div>
        <div className="absolute bottom-1/4 right-1/5 w-3 h-3 bg-accent-blue/20 rounded-full animate-ping opacity-50" style={{ animationDelay: "1.2s", animationDuration: "2.5s" }}></div>
        
        {/* Premium particles */}
        <div className="absolute top-1/3 right-1/3 w-1 h-20 bg-gradient-to-b from-accent-blue/40 to-transparent rotate-45 opacity-60"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-20 bg-gradient-to-b from-accent-blue/40 to-transparent -rotate-45 opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-block mb-3 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 transform">
          <span className="text-white/80 text-sm font-medium">Data Engineer & Data Analyst</span>
        </div>
        
        <h1 ref={titleRef} className="opacity-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          Turning <span className="animated-gradient-text">Data</span> into 
          <br className="hidden sm:block" />Valuable <span className="animated-gradient-text">Insights</span>
        </h1>
        
        <p ref={subtitleRef} className="opacity-0 text-lg sm:text-xl md:text-2xl text-light-gray/80 mb-10 max-w-3xl mx-auto">
          Hello, I'm <span className="text-white font-medium">Chirag Jain</span>, a <span className="text-accent-blue font-medium">Data Engineer</span> passionate about 
          transforming raw data into meaningful solutions.
        </p>
        
        <div ref={ctaRef} className="opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a href="#projects" className="btn-primary w-full sm:w-auto group hover:shadow-blue-glow transform transition-all duration-300 hover:translate-y-[-2px]">
            <span>View My Work</span>
            <ExternalLink size={isMobile ? 14 : 16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </a>
          
          <a href="#contact" className="btn-outline w-full sm:w-auto group hover:border-accent-blue/50 hover:bg-white/5 hover:shadow-blue-glow-sm transform transition-all duration-300 hover:translate-y-[-2px]">
            <span>Get In Touch</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1 transition-transform group-hover:translate-x-1">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          
          <a 
            href="https://github.com/chiragjain44/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="glass-card px-4 py-2 rounded-lg w-full sm:w-auto flex items-center justify-center gap-2 transition-all duration-300 hover:bg-white/10 hover:shadow-blue-glow-sm transform hover:translate-y-[-2px]"
          >
            <Github size={isMobile ? 16 : 18} />
            <span>GitHub</span>
          </a>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a 
            href="#about" 
            className="flex items-center justify-center w-10 h-10 rounded-full glass-card transition-all duration-300 hover:border-accent-blue hover:shadow-blue-glow-sm hover:bg-white/10"
            aria-label="Scroll to About section"
          >
            <ChevronDown size={20} className="text-white/80" />
          </a>
        </div>
        
        {/* Custom floating badges */}
        <div className="absolute top-1/3 -left-4 md:left-0 hidden md:block animate-float opacity-90" style={{ animationDelay: "0.5s" }}>
          <div className="glass-card py-2 px-3 rounded-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-blue-glow-sm transform hover:bg-white/10">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-sm font-medium">Python Expert</span>
          </div>
        </div>
        
        <div className="absolute bottom-1/3 -right-4 md:right-0 hidden md:block animate-float opacity-90" style={{ animationDelay: "1s" }}>
          <div className="glass-card py-2 px-3 rounded-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-blue-glow-sm transform hover:bg-white/10">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-sm font-medium">Data Analysis</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
