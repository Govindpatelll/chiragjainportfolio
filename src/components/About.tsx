
import React, { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-dark-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div ref={sectionRef} className="opacity-0">
          <h2 className="section-title">About Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="glass-card p-8 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-transparent"></div>
                <div className="relative z-10">
                  <p className="mb-4">
                    I'm a detail-oriented <span className="blue-highlight">Data Engineer</span> with 
                    a passion for solving complex problems through data-driven approaches. My journey 
                    in the field of data engineering began with a fascination for uncovering insights 
                    hidden within raw information.
                  </p>
                  <p className="mb-4">
                    With expertise in <span className="blue-highlight">Python</span>, <span className="blue-highlight">SQL</span>, and 
                    various data processing tools, I specialize in building robust data pipelines, 
                    performing thorough exploratory data analysis, and developing efficient data 
                    models that drive business decisions.
                  </p>
                  <p>
                    I approach each project with a focus on creating <span className="blue-highlight">scalable</span>, 
                    <span className="blue-highlight"> maintainable</span>, and <span className="blue-highlight">efficient</span> solutions 
                    that deliver actionable insights. When I'm not working with data, I enjoy staying 
                    updated with the latest advancements in data science and machine learning 
                    technologies.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border-2 border-accent-blue/30 shadow-blue-glow">
                <div className="w-full h-full bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg flex items-center justify-center">
                  <div className="text-8xl text-accent-blue opacity-80 font-bold">CJ</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-xl bg-gradient-blue opacity-80 blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-20 h-20 rounded-xl bg-gradient-blue opacity-50 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
