
import React, { useEffect, useRef } from "react";
import { FileText, Download, ExternalLink } from "lucide-react";

const ResumeSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (contentRef.current) {
              contentRef.current.classList.add("animate-fade-in");
            }
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

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/3942f7cf-91ac-447c-a4a3-e97c156813eb.png'; // Use the uploaded resume image
    link.download = 'Chirag_Jain_Resume.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="resume"
      className="py-16 relative overflow-hidden"
      ref={containerRef}
    >
      <div className="absolute inset-0 z-0 overflow-hidden opacity-5">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-accent-blue rounded-full filter blur-3xl"></div>
      </div>

      <div 
        ref={contentRef}
        className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 opacity-0"
      >
        <div className="glass-card rounded-2xl p-8 md:p-12 border-2 border-accent-blue/20 transform transition-all duration-300 hover:shadow-blue-glow hover:border-accent-blue/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="col-span-2">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <FileText size={28} className="text-accent-blue" />
                My Resume
              </h2>
              <p className="text-lg text-light-gray/90 mb-6">
                Looking for a comprehensive overview of my skills, experience, and qualifications? Download my resume to learn more about my background in data engineering and analytics.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={handleDownloadResume}
                  className="btn-primary inline-flex items-center gap-2 transform transition-all duration-300 hover:scale-105 hover:shadow-blue-glow-sm"
                >
                  <Download size={18} />
                  <span>Download Resume</span>
                </button>
                <a 
                  href="https://www.linkedin.com/in/chirag-jain-aa566a205" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center gap-2 transform transition-all duration-300 hover:scale-105 hover:border-accent-blue/50 hover:shadow-blue-glow-sm"
                >
                  <ExternalLink size={18} />
                  <span>View LinkedIn</span>
                </a>
              </div>
            </div>
            
            <div className="relative h-40 md:h-64 group">
              <div className="absolute inset-0 flex items-center justify-center transform transition-all duration-500 group-hover:scale-105">
                <div className="w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-accent-blue/20 to-accent-blue-light/20 backdrop-blur-md rounded-xl flex items-center justify-center overflow-hidden">
                  <img 
                    src="/lovable-uploads/3942f7cf-91ac-447c-a4a3-e97c156813eb.png" 
                    alt="Chirag Jain Resume" 
                    className="w-full h-full object-contain p-2 transform transition-all duration-500 hover:scale-105"
                  />
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-32 md:h-32 border-2 border-dashed border-accent-blue/30 rounded-xl animate-pulse-slow"></div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10">
            <h3 className="text-xl font-medium text-white mb-4">Key Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="glass-card p-4 rounded-lg text-center hover:border-accent-blue/20 transition-all duration-300 border border-transparent transform hover:scale-105 hover:shadow-blue-glow-sm">
                <div className="text-2xl font-bold text-accent-blue mb-1">4+</div>
                <div className="text-sm text-medium-gray">Months of Experience</div>
              </div>
              
              <div className="glass-card p-4 rounded-lg text-center hover:border-accent-blue/20 transition-all duration-300 border border-transparent transform hover:scale-105 hover:shadow-blue-glow-sm">
                <div className="text-2xl font-bold text-accent-blue mb-1">10+</div>
                <div className="text-sm text-medium-gray">Projects Completed</div>
              </div>
              
              <div className="glass-card p-4 rounded-lg text-center hover:border-accent-blue/20 transition-all duration-300 border border-transparent transform hover:scale-105 hover:shadow-blue-glow-sm">
                <div className="text-2xl font-bold text-accent-blue mb-1">8+</div>
                <div className="text-sm text-medium-gray">Technologies</div>
              </div>
              
              <div className="glass-card p-4 rounded-lg text-center hover:border-accent-blue/20 transition-all duration-300 border border-transparent transform hover:scale-105 hover:shadow-blue-glow-sm">
                <div className="text-2xl font-bold text-accent-blue mb-1">24/7</div>
                <div className="text-sm text-medium-gray">Support Availability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
