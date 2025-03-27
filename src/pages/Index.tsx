
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ResumeSection from "@/components/ResumeSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedCursor from "@/components/ui/AnimatedCursor";
import { ChevronUp } from "lucide-react";

const Index = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Custom loading animation
    const body = document.body;
    body.classList.add('opacity-0');
    
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        const newProgress = prev + (100 - prev) * 0.1;
        return newProgress > 99 ? 100 : newProgress;
      });
    }, 100);
    
    // Add page load animation
    setTimeout(() => {
      clearInterval(interval);
      setLoadingProgress(100);
      
      setTimeout(() => {
        body.classList.remove('opacity-0');
        body.classList.add('transition-opacity', 'duration-500', 'opacity-100');
        setIsPageLoaded(true);
      }, 500);
    }, 1800);

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        
        if (!href) return;
        
        const target = document.querySelector(href);
        if (target) {
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.scrollY,
            behavior: 'smooth'
          });
        }
      });
    });

    // Add scroll to top button functionality
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup event listeners
      clearInterval(interval);
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {});
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <main className="min-h-screen bg-dark-bg text-light-gray antialiased overflow-hidden">
      <AnimatedCursor />
      
      {/* Page loader overlay */}
      {!isPageLoaded && (
        <div className="fixed inset-0 z-50 bg-dark-bg flex flex-col items-center justify-center">
          <div className="text-5xl font-bold mb-8">
            <span className="text-white">C</span>
            <span className="text-accent-blue">J</span>
          </div>
          
          <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-accent-blue to-accent-blue-light transition-all duration-300 rounded-full" 
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
          
          <div className="mt-3 text-sm text-medium-gray">
            {loadingProgress < 100 ? 'Loading...' : 'Ready!'}
          </div>
        </div>
      )}
      
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <ResumeSection />
      <Contact />
      <Footer />
      
      {/* Scroll to top button with enhanced styling */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full glass-card text-white flex items-center justify-center shadow-blue-glow hover:bg-accent-blue transition-all duration-300 ${
          showScrollToTop ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp size={20} />
      </button>
      
      {/* Background gradient */}
      <div className="fixed bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-[-1]"></div>
    </main>
  );
};

export default Index;
