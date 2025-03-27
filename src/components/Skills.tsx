
import React, { useEffect, useRef } from "react";

interface Skill {
  category: string;
  items: string[];
  icon: React.ReactNode;
}

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  const skills: Skill[] = [
    {
      category: "Programming",
      items: ["Python"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 mb-4 text-accent-blue">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 7.92 7.05 4.56 11 4.07V19.93ZM13 4.07C16.95 4.56 20 7.92 20 12C20 16.08 16.95 19.44 13 19.93V4.07Z" fill="currentColor" />
        </svg>
      )
    },
    {
      category: "Data Manipulation & Analysis",
      items: ["Pandas", "NumPy"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 mb-4 text-accent-blue">
          <path d="M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6Z" fill="currentColor" />
          <path d="M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z" fill="currentColor" />
          <path d="M9 6C9 7.65685 7.65685 9 6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6Z" fill="currentColor" />
          <path d="M9 18C9 19.6569 7.65685 21 6 21C4.34315 21 3 19.6569 3 18C3 16.3431 4.34315 15 6 15C7.65685 15 9 16.3431 9 18Z" fill="currentColor" />
          <path d="M18 12C18 13.6569 16.6569 15 15 15C13.3431 15 12 13.6569 12 12C12 10.3431 13.3431 9 15 9C16.6569 9 18 10.3431 18 12Z" fill="currentColor" />
        </svg>
      )
    },
    {
      category: "Data Visualization",
      items: ["Matplotlib", "Seaborn", "Plotly"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 mb-4 text-accent-blue">
          <path d="M3 13H5V11H3V13ZM3 17H5V15H3V17ZM3 9H5V7H3V9ZM7 13H21V11H7V13ZM7 17H21V15H7V17ZM7 7V9H21V7H7Z" fill="currentColor" />
        </svg>
      )
    },
    {
      category: "Machine Learning",
      items: ["Scikit-learn", "Core ML Concepts"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 mb-4 text-accent-blue">
          <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="currentColor" />
          <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z" fill="currentColor" />
        </svg>
      )
    },
    {
      category: "Databases",
      items: ["SQL"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 mb-4 text-accent-blue">
          <path d="M20 13V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V13M20 13V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V13M20 13H4M12 4V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      category: "Data Processing",
      items: ["EDA", "Feature Engineering", "Data Cleaning", "Standardization"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 mb-4 text-accent-blue">
          <path d="M14 3V7C14 7.55228 14.4477 8 15 8H19M14 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V8M14 3L19 8M8 17H12M8 13H16M8 9H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
  ];

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

    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      cardRefs.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div ref={sectionRef} className="opacity-0">
          <h2 className="section-title">My Technical Toolkit</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {skills.map((skill, index) => (
              <div
                key={skill.category}
                ref={(el) => (cardRefs.current[index] = el)}
                className="skill-card opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill.icon}
                <h3 className="text-xl font-medium mb-3">{skill.category}</h3>
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                  {skill.items.map((item) => (
                    <span 
                      key={item} 
                      className="px-3 py-1 text-sm bg-accent-blue/20 rounded-full text-accent-blue"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
