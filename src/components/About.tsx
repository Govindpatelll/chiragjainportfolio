import React, { useEffect, useRef } from "react";
import { Calendar, MapPin, Briefcase, User, Linkedin } from "lucide-react";

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center mt-12">
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

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-lg flex items-center gap-3">
                <User size={20} className="text-accent-blue" />
                <div>
                  <h3 className="text-sm text-medium-gray">Full Name</h3>
                  <p className="text-white">Chirag Jain</p>
                </div>
              </div>

              <div className="glass-card p-4 rounded-lg flex items-center gap-3">
                <MapPin size={20} className="text-accent-blue" />
                <div>
                  <h3 className="text-sm text-medium-gray">Location</h3>
                  <p className="text-white">Remote / Flexible</p>
                </div>
              </div>

              <div className="glass-card p-4 rounded-lg flex items-center gap-3">
                <Briefcase size={20} className="text-accent-blue" />
                <div>
                  <h3 className="text-sm text-medium-gray">Experience</h3>
                  <p className="text-white">Data Engineering</p>
                </div>
              </div>

              <div className="glass-card p-4 rounded-lg flex items-center gap-3">
                <Calendar size={20} className="text-accent-blue" />
                <div>
                  <h3 className="text-sm text-medium-gray">Availability</h3>
                  <p className="text-white">Available Now</p>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            ref={imageRef} 
            className="opacity-0 glass-card rounded-2xl overflow-hidden p-1.5 relative h-[450px]"
          >
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              <img 
                src="/lovable-uploads/3b01c9c2-501e-458d-a1af-112bf263f648.png" 
                alt="Chirag Jain" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-bg/80 rounded-xl"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              <a 
                href="https://www.linkedin.com/in/chirag-jain-aa566a205" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary text-sm px-4 py-2 inline-flex items-center gap-1"
              >
                <Linkedin size={16} />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
