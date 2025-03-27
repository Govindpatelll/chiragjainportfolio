
import React, { useEffect, useRef } from "react";
import { Calendar, Building2, Award } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const experiences: ExperienceItem[] = [
    {
      title: "Data Engineer Intern",
      company: "Confidential Client Project",
      period: "December 2024",
      description: [
        "Performed comprehensive Exploratory Data Analysis (EDA) to uncover initial patterns and insights from raw customer data",
        "Implemented rigorous data cleaning and standardization techniques to ensure high data quality and consistency",
        "Engineered relevant features for model input, significantly improving predictive performance by 28%",
        "Applied train/test split methodologies for accurate model validation and assessment",
        "Created advanced visualizations using Matplotlib, Seaborn, and Plotly to communicate findings to non-technical stakeholders",
        "Collaborated with cross-functional teams to integrate data pipeline into the client's existing infrastructure"
      ],
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "SQL", "Matplotlib", "Seaborn", "Plotly"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (titleRef.current) {
              titleRef.current.classList.add("animate-fade-in");
            }
            
            setTimeout(() => {
              if (timelineRef.current) {
                timelineRef.current.classList.add("animate-fade-in");
                
                // Animate experience cards
                const items = timelineRef.current.querySelectorAll(".experience-item");
                items.forEach((item, index) => {
                  setTimeout(() => {
                    item.classList.add("animate-fade-in-right");
                  }, 300 * index);
                });
              }
            }, 400);
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
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

  // Animation for skills progress bars
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      
      if (containerRect.top < window.innerHeight && containerRect.bottom > 0) {
        // When experience section is visible, animate progress bars
        const progressBars = document.querySelectorAll('.skill-category .bg-gradient-to-r');
        progressBars.forEach((bar) => {
          const barElement = bar as HTMLElement;
          const parentElement = barElement.parentElement as HTMLElement;
          const percentage = parentElement.previousElementSibling?.querySelector('.text-sm')?.textContent;
          
          if (percentage) {
            // Set the width based on the percentage
            barElement.style.width = percentage;
          }
        });
      }
    };

    // Call it once to check initial visibility
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="experience" 
      className="section-padding relative"
      ref={containerRef}
    >
      <div className="absolute inset-0 z-0 overflow-hidden opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-blue rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-blue rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <h2 ref={titleRef} className="section-title text-center opacity-0">
          My Journey
        </h2>
        
        <div 
          ref={timelineRef} 
          className="mt-16 relative opacity-0"
        >
          {/* Timeline bar */}
          <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-white/20 to-transparent"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="experience-item opacity-0 relative mb-16 md:w-1/2 md:even:ml-auto md:odd:mr-auto md:pl-8 md:even:pl-0 md:even:pr-8"
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-0 md:left-auto md:right-0 md:even:left-0 md:even:right-auto top-0 w-4 h-4 rounded-full bg-accent-blue shadow-blue-glow transform -translate-y-1/2 md:even:translate-x-1/2 md:odd:-translate-x-1/2"></div>
              
              <div className="glass-card glass-card-hover rounded-xl p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-medium text-white">{exp.title}</h3>
                  <span className="inline-flex items-center gap-1.5 text-accent-blue font-medium mt-1 md:mt-0">
                    <Calendar size={16} className="inline-block" />
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-xl mb-2 text-white/90 flex items-center gap-2">
                  <Building2 size={18} className="text-accent-blue" />
                  {exp.company}
                </p>
                
                <div className="border-l-2 border-accent-blue/30 pl-4 mt-6 mb-6">
                  <h4 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
                    <Award size={18} className="text-accent-blue" />
                    Key Responsibilities
                  </h4>
                  <ul className="list-disc list-inside space-y-2">
                    {exp.description.map((point, i) => (
                      <li key={i} className="text-light-gray">
                        <span className="ml-1">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm hover:bg-white/10 transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
