
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
import WhatsAppButton from "@/components/WhatsAppButton";
import { ChevronUp } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const isMobile = useIsMobile();

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
      {!isMobile && <AnimatedCursor />}
      
      {/* Enhanced page loader overlay with more premium effects */}
      {!isPageLoaded && (
        <div className="fixed inset-0 z-50 bg-dark-bg flex flex-col items-center justify-center">
          <div className="text-4xl sm:text-5xl font-bold mb-8 relative">
            <span className="text-white">C</span>
            <span className="text-accent-blue">J</span>
            <div className="absolute -top-6 -right-6 w-12 h-12 border-t-2 border-r-2 border-accent-blue opacity-80 animate-pulse-slow"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b-2 border-l-2 border-accent-blue opacity-80 animate-pulse-slow"></div>
          </div>
          
          <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-accent-blue to-accent-blue-light transition-all duration-300 rounded-full relative"
              style={{ width: `${loadingProgress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
            </div>
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
      
      {/* WhatsApp Contact Button - Now handled by the WhatsAppButton component */}
      <WhatsAppButton />
      
      {/* Enhanced scroll to top button with more premium styling */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-card text-white flex items-center justify-center shadow-blue-glow hover:bg-accent-blue transition-all duration-300 transform hover:scale-110 ${
          showScrollToTop ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp size={isMobile ? 18 : 20} />
        <div className="absolute inset-0 rounded-full bg-white/5 animate-pulse-slow"></div>
      </button>
      
      {/* Enhanced background elements for more premium feel */}
      <div className="fixed bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-[-1]"></div>
      <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-[-2] opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent-blue/10 animate-pulse-slow filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent-blue/5 animate-pulse-slow filter blur-3xl"></div>
      </div>
      
      {/* Premium floating particles - visible on desktop */}
      {!isMobile && (
        <>
          <div className="fixed top-1/3 left-1/5 w-1 h-16 bg-gradient-to-b from-accent-blue/30 to-transparent rotate-45 animate-pulse-slow pointer-events-none"></div>
          <div className="fixed bottom-1/3 right-1/5 w-1 h-16 bg-gradient-to-b from-accent-blue/30 to-transparent -rotate-45 animate-pulse-slow pointer-events-none"></div>
          <div className="fixed top-2/3 right-1/3 w-2 h-2 rounded-full bg-accent-blue/40 animate-ping pointer-events-none" style={{ animationDuration: '4s' }}></div>
          <div className="fixed bottom-2/3 left-1/3 w-2 h-2 rounded-full bg-accent-blue/40 animate-ping pointer-events-none" style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
        </>
      )}
    </main>
  );
};

export default Index;
