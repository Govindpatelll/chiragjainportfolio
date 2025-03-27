
import React, { useEffect, useRef } from "react";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (headingRef.current) {
              headingRef.current.classList.add("animate-fade-in");
            }
            
            setTimeout(() => {
              if (textRef.current) {
                textRef.current.classList.add("animate-fade-in-left");
              }
            }, 300);
            
            setTimeout(() => {
              if (imageRef.current) {
                imageRef.current.classList.add("animate-fade-in-right");
              }
            }, 500);
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden"
      ref={containerRef}
    >
      <div className="absolute inset-0 z-0 overflow-hidden opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-blue rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <h2 ref={headingRef} className="section-title opacity-0">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div 
            ref={textRef} 
            className="opacity-0 space-y-6"
          >
            <p className="text-lg md:text-xl leading-relaxed">
              Hello, I'm <span className="blue-highlight">Chirag Jain</span>, a passionate Data Engineer dedicated to transforming complex data challenges into meaningful solutions. With a strong foundation in data processing, analytics, and machine learning, I specialize in building robust data pipelines and extracting actionable insights.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed">
              My journey in data engineering began with a fascination for how data can drive decision-making across industries. This passion led me to develop expertise in <span className="blue-highlight">Python</span>, <span className="blue-highlight">SQL</span>, and various data manipulation libraries, allowing me to tackle complex data problems with precision and creativity.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed">
              I approach each project with meticulous attention to detail and a collaborative mindset, ensuring that data solutions not only meet technical specifications but also address real business needs. Beyond my technical work, I enjoy staying current with the latest advancements in data science and contributing to open-source projects.
            </p>
          </div>
          
          <div 
            ref={imageRef} 
            className="opacity-0 glass-card rounded-2xl overflow-hidden aspect-square relative"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-gradient-to-r from-accent-blue to-accent-blue-light flex items-center justify-center text-6xl md:text-7xl font-bold text-white">
                CJ
              </div>
            </div>
            <div className="absolute inset-0 bg-accent-blue/5 backdrop-blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
