
import React, { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  links: {
    github?: string;
    demo?: string;
    case?: string;
  };
}

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const projects: Project[] = [
    {
      title: "Machine Learning Classification Project",
      description: "Machine learning using scikit-learn with normalization, standardization, and train-test split libraries for data processing and model evaluation.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 800 400' preserveAspectRatio='none'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'%3E%3Cstop offset='0%' stop-color='%230077FF' stop-opacity='0.2'/%3E%3Cstop offset='100%' stop-color='%2300A3FF' stop-opacity='0.1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%' height='100%' fill='url(%23grad)'/%3E%3Cg fill='%23fff' opacity='0.05'%3E%3Ccircle cx='200' cy='150' r='80'/%3E%3Ccircle cx='500' cy='220' r='120'/%3E%3Crect x='100' y='300' width='200' height='50' rx='20'/%3E%3Crect x='400' y='100' width='300' height='50' rx='20'/%3E%3C/g%3E%3Ctext x='400' y='200' font-family='Arial' font-size='30' text-anchor='middle' fill='%23fff' opacity='0.7'%3EML Analysis%3C/text%3E%3C/svg%3E",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      links: {
        github: "https://github.com/chiragjain44/machine-learning-project/blob/main/machinelearning.ipynb",
        case: "#"
      }
    },
    {
      title: "Customer Analytics Dashboard",
      description: "Data analytics project focused on teen customers, utilizing matplotlib and seaborn for comprehensive exploratory data analysis (EDA) to derive actionable insights.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 800 400' preserveAspectRatio='none'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'%3E%3Cstop offset='0%' stop-color='%230077FF' stop-opacity='0.2'/%3E%3Cstop offset='100%' stop-color='%2300A3FF' stop-opacity='0.1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%' height='100%' fill='url(%23grad)'/%3E%3Cg fill='%23fff' opacity='0.05'%3E%3Cpath d='M100,250 L200,150 L300,200 L400,100 L500,180 L600,120 L700,220' stroke='%23fff' stroke-width='3' fill='none'/%3E%3Ccircle cx='100' cy='250' r='5' fill='%23fff'/%3E%3Ccircle cx='200' cy='150' r='5' fill='%23fff'/%3E%3Ccircle cx='300' cy='200' r='5' fill='%23fff'/%3E%3Ccircle cx='400' cy='100' r='5' fill='%23fff'/%3E%3Ccircle cx='500' cy='180' r='5' fill='%23fff'/%3E%3Ccircle cx='600' cy='120' r='5' fill='%23fff'/%3E%3Ccircle cx='700' cy='220' r='5' fill='%23fff'/%3E%3C/g%3E%3Ctext x='400' y='300' font-family='Arial' font-size='30' text-anchor='middle' fill='%23fff' opacity='0.7'%3ECustomer Analytics%3C/text%3E%3C/svg%3E",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "EDA"],
      links: {
        github: "https://github.com/chiragjain44/project_advpython-/blob/main/customer.ipynb",
        demo: "#"
      }
    },
    {
      title: "Sales Data Visualization Project",
      description: "Comprehensive sales data analysis project that leverages advanced Python libraries for data visualization and statistical analysis to uncover sales patterns and trends.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 800 400' preserveAspectRatio='none'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'%3E%3Cstop offset='0%' stop-color='%230077FF' stop-opacity='0.2'/%3E%3Cstop offset='100%' stop-color='%2300A3FF' stop-opacity='0.1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%' height='100%' fill='url(%23grad)'/%3E%3Cg fill='%23fff' opacity='0.05'%3E%3Ccircle cx='200' cy='120' r='40'/%3E%3Ccircle cx='350' cy='180' r='60'/%3E%3Ccircle cx='500' cy='150' r='30'/%3E%3Ccircle cx='650' cy='220' r='50'/%3E%3C/g%3E%3Ctext x='400' y='300' font-family='Arial' font-size='30' text-anchor='middle' fill='%23fff' opacity='0.7'%3ESales Analysis%3C/text%3E%3C/svg%3E",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Data Analysis"],
      links: {
        github: "https://github.com/chiragjain44/project_advpython-/blob/main/saleproject1.ipynb",
        case: "#"
      }
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
              if (gridRef.current) {
                gridRef.current.classList.add("animate-fade-in");
                
                // Animate each project card with a delay
                const cards = gridRef.current.querySelectorAll(".project-card-container");
                cards.forEach((card, index) => {
                  setTimeout(() => {
                    card.classList.add("animate-fade-in");
                  }, 200 * index);
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
      id="projects"
      className="section-padding bg-dark-surface relative overflow-hidden"
      ref={containerRef}
    >
      <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-accent-blue/30 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full border border-accent-blue/20 animate-rotate-slow" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        <h2 ref={titleRef} className="section-title text-center opacity-0">
          Featured Work
        </h2>
        
        <div 
          ref={gridRef} 
          className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 opacity-0"
        >
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card-container opacity-0 transition-all duration-300 transform hover:-translate-y-2 group"
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="project-card h-full flex flex-col">
                <div className="relative overflow-hidden rounded-t-xl aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                    style={{
                      transform: activeProject === index ? 'scale(1.05)' : 'scale(1)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-70"></div>
                  
                  {/* Premium hover overlay effect */}
                  <div className="absolute inset-0 bg-accent-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-medium text-white mb-3 group-hover:text-accent-blue transition-colors duration-300">{project.title}</h3>
                  
                  <p className="text-light-gray/80 mb-4 flex-grow text-sm sm:text-base">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 bg-white/5 border border-white/10 rounded-full text-xs group-hover:border-accent-blue/30 group-hover:bg-white/10 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    {project.links.github && (
                      <a 
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-medium-gray hover:text-accent-blue transition-colors duration-300 hover:scale-110 transform"
                        aria-label="View Code on GitHub"
                      >
                        <Github size={isMobile ? 18 : 20} />
                      </a>
                    )}
                    
                    {project.links.demo && (
                      <a 
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-medium-gray hover:text-accent-blue transition-colors duration-300 hover:scale-110 transform"
                        aria-label="View Live Demo"
                      >
                        <ExternalLink size={isMobile ? 18 : 20} />
                      </a>
                    )}
                    
                    {project.links.case && (
                      <a 
                        href={project.links.case}
                        className="ml-auto group flex items-center gap-1 text-medium-gray hover:text-accent-blue transition-colors duration-300"
                      >
                        <span className="text-sm sm:text-base">View Case Study</span>
                        <ArrowRight size={isMobile ? 14 : 16} className="transform transition-transform group-hover:translate-x-1" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
