
import React, { useEffect, useRef } from "react";

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
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
      className="relative min-h-screen flex items-center justify-center px-6 md:px-10 pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent-blue/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-blue/5 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/3 left-1/3 w-48 h-48 border border-accent-blue/20 rounded-full animate-rotate-slow opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 ref={titleRef} className="opacity-0 text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          Turning <span className="animated-gradient-text">Data</span> into 
          <br className="hidden sm:block" />Valuable <span className="animated-gradient-text">Insights</span>
        </h1>
        
        <p ref={subtitleRef} className="opacity-0 text-xl md:text-2xl text-light-gray/80 mb-10 max-w-3xl mx-auto">
          Hello, I'm <span className="text-white font-medium">Chirag Jain</span>, a <span className="text-accent-blue font-medium">Data Engineer</span> passionate about 
          transforming raw data into meaningful solutions.
        </p>
        
        <div ref={ctaRef} className="opacity-0 flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
          <a href="#projects" className="btn-primary w-full md:w-auto">
            View My Work
          </a>
          <a href="#contact" className="btn-outline w-full md:w-auto">
            Get In Touch
          </a>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a 
            href="#about" 
            className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 transition-colors duration-300 hover:border-accent-blue"
            aria-label="Scroll to About section"
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 12L1 5.5L2 4.5L7.5 10L13 4.5L14 5.5L7.5 12Z" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
