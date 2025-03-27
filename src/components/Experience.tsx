
import React, { useEffect, useRef } from "react";

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  const experiencePoints = [
    "Performed comprehensive Exploratory Data Analysis (EDA) to identify patterns and insights",
    "Implemented data cleaning techniques to improve data quality and consistency",
    "Standardized data formats and structures to ensure compatibility across systems",
    "Developed train/test split methodologies for robust model validation",
    "Engineered features to enhance model performance and predictive power",
    "Created interactive visualizations using Matplotlib, Seaborn, and Plotly to communicate findings",
    "Collaborated with cross-functional teams to translate business requirements into technical solutions",
    "Documented processes and methodologies to ensure knowledge transfer and project continuity"
  ];

  return (
    <section id="experience" className="section-padding relative overflow-hidden bg-dark-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div ref={sectionRef} className="opacity-0">
          <h2 className="section-title">My Journey</h2>
          
          <div ref={timelineRef} className="mt-12 opacity-0">
            <div className="glass-card p-8 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-blue"></div>
              
              <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                <div className="md:w-1/3">
                  <div className="bg-accent-blue/10 rounded-lg p-4 border border-accent-blue/20">
                    <h3 className="text-2xl font-medium mb-2">Data Engineer Intern</h3>
                    <p className="text-medium-gray mb-2">Confidential Customer Project</p>
                    <p className="text-white/70 text-sm">4-month Internship</p>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h4 className="text-xl font-medium mb-4 text-white">
                    Customer Project Focus
                  </h4>
                  
                  <ul className="space-y-3">
                    {experiencePoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="bg-accent-blue/20 rounded-full p-1 mt-1">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-blue" />
                          </svg>
                        </div>
                        <p className="text-light-gray/90">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
