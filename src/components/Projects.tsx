
import React, { useEffect, useRef } from "react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  links: {
    github?: string;
    demo?: string;
  };
}

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<Array<HTMLDivElement | null>>([]);

  const projects: Project[] = [
    {
      title: "Customer Data Analysis Project",
      description:
        "A comprehensive data analysis project focused on customer segmentation and behavior patterns. Applied EDA, data cleaning, and machine learning techniques to identify key customer segments and predict future behaviors.",
      tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
      image: "data-visualization",
      links: {
        github: "#",
      },
    },
    {
      title: "Automated Data Pipeline",
      description:
        "Developed an automated ETL pipeline to process daily transaction data. The system handles data extraction, transformation, and loading while maintaining data quality and consistency through standardization protocols.",
      tech: ["Python", "SQL", "Pandas", "NumPy"],
      image: "data-pipeline",
      links: {
        github: "#",
        demo: "#",
      },
    },
    {
      title: "Predictive Analytics Dashboard",
      description:
        "Created an interactive dashboard for predictive analytics, allowing users to visualize trends and make data-driven decisions. Features include customizable visualizations and real-time data updates.",
      tech: ["Python", "Plotly", "Pandas", "SQL"],
      image: "dashboard",
      links: {
        github: "#",
        demo: "#",
      },
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

    projectRefs.current.forEach((project) => {
      if (project) {
        observer.observe(project);
      }
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      projectRefs.current.forEach((project) => {
        if (project) {
          observer.unobserve(project);
        }
      });
    };
  }, []);

  // Custom SVG placeholders for projects
  const renderProjectImage = (type: string) => {
    switch (type) {
      case "data-visualization":
        return (
          <div className="w-full h-48 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-16 h-16 text-accent-blue">
              <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" fillOpacity="0.2" />
              <path d="M8 13L12 9L16 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M8 17L12 13L16 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        );
      case "data-pipeline":
        return (
          <div className="w-full h-48 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-16 h-16 text-accent-blue">
              <path d="M4 6H20M4 12H12M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <circle cx="16" cy="12" r="4" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        );
      case "dashboard":
        return (
          <div className="w-full h-48 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-16 h-16 text-accent-blue">
              <rect x="3" y="3" width="7" height="9" rx="1" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
              <rect x="14" y="3" width="7" height="5" rx="1" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
              <rect x="14" y="12" width="7" height="9" rx="1" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
              <rect x="3" y="16" width="7" height="5" rx="1" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="w-full h-48 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-16 h-16 text-accent-blue">
              <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" fillOpacity="0.2" />
            </svg>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div ref={sectionRef} className="opacity-0">
          <h2 className="section-title">Featured Work</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {projects.map((project, index) => (
              <div
                key={project.title}
                ref={(el) => (projectRefs.current[index] = el)}
                className="project-card opacity-0 flex flex-col h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {renderProjectImage(project.image)}
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-medium mb-3">{project.title}</h3>
                  <p className="text-light-gray/80 mb-4 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-accent-blue/10 text-accent-blue rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 mt-auto">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        className="flex items-center gap-1 text-sm text-medium-gray hover:text-accent-blue transition-colors"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Code</span>
                      </a>
                    )}
                    
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        className="flex items-center gap-1 text-sm text-medium-gray hover:text-accent-blue transition-colors"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M15 3h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
