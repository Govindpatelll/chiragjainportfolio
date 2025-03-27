
import React, { useEffect, useRef } from "react";

interface Skill {
  name: string;
  category: string;
  icon: string;
  level: number;
}

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      name: "Programming",
      skills: [
        { name: "Python", level: 90, icon: "🐍" },
      ]
    },
    {
      name: "Data Manipulation & Analysis",
      skills: [
        { name: "Pandas", level: 85, icon: "🐼" },
        { name: "NumPy", level: 80, icon: "🔢" },
      ]
    },
    {
      name: "Data Visualization",
      skills: [
        { name: "Matplotlib", level: 85, icon: "📊" },
        { name: "Seaborn", level: 80, icon: "📈" },
        { name: "Plotly", level: 75, icon: "📉" },
      ]
    },
    {
      name: "Machine Learning",
      skills: [
        { name: "Scikit-learn", level: 80, icon: "🤖" },
        { name: "ML Concepts", level: 75, icon: "🧠" },
      ]
    },
    {
      name: "Databases",
      skills: [
        { name: "SQL", level: 85, icon: "🗄️" },
      ]
    },
    {
      name: "Data Processing",
      skills: [
        { name: "EDA", level: 90, icon: "🔍" },
        { name: "Feature Engineering", level: 80, icon: "⚙️" },
        { name: "Data Cleaning", level: 85, icon: "🧹" },
        { name: "Standardization", level: 80, icon: "📏" },
      ]
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
              if (cardsRef.current) {
                cardsRef.current.classList.add("animate-fade-in");
                
                // Animate each skill card with a delay
                const cards = cardsRef.current.querySelectorAll(".skill-category");
                cards.forEach((card, index) => {
                  setTimeout(() => {
                    card.classList.add("animate-scale-in");
                  }, 150 * index);
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

  return (
    <section
      id="skills"
      className="section-padding bg-dark-surface"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 ref={titleRef} className="section-title text-center opacity-0">
          My Technical Toolkit
        </h2>
        
        <div ref={cardsRef} className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="skill-category glass-card glass-card-hover rounded-xl p-6 opacity-0"
            >
              <h3 className="text-xl font-medium text-white mb-4">{category.name}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="text-white">{skill.name}</span>
                      </div>
                      <span className="text-accent-blue text-sm font-medium">{skill.level}%</span>
                    </div>
                    
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-accent-blue to-accent-blue-light rounded-full transition-all duration-1000 ease-out"
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
