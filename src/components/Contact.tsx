
import React, { useEffect, useRef, useState } from "react";
import { Send, Loader2, Mail, Phone, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Show success toast
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
    }, 1500);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (titleRef.current) {
              titleRef.current.classList.add("animate-fade-in");
            }
            
            setTimeout(() => {
              if (contentRef.current) {
                contentRef.current.classList.add("animate-fade-in");
              }
            }, 300);
            
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
      id="contact"
      className="section-padding relative overflow-hidden"
      ref={containerRef}
    >
      <div className="absolute inset-0 z-0 overflow-hidden opacity-5">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-accent-blue rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-accent-blue rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10">
        <h2 ref={titleRef} className="section-title text-center opacity-0">
          Let's Connect
        </h2>
        
        <div 
          ref={contentRef} 
          className="mt-12 opacity-0"
        >
          <div className="text-center mb-12">
            <p className="text-xl text-light-gray/90 max-w-2xl mx-auto">
              Interested in collaborating or have a question? Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>
          
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="md:grid md:grid-cols-5">
              <div className="bg-gradient-to-br from-accent-blue to-accent-blue-light p-8 md:p-10 md:col-span-2 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <p className="flex items-start gap-3 text-white/90">
                      <Mail size={20} className="shrink-0 mt-1" />
                      <a href="mailto:chiragjainswm@gmail.com" className="hover:text-white transition-colors">
                        chiragjainswm@gmail.com
                      </a>
                    </p>
                    
                    <p className="flex items-start gap-3 text-white/90">
                      <Phone size={20} className="shrink-0 mt-1" />
                      <a href="tel:+917976075644" className="hover:text-white transition-colors">
                        +91 7976075644
                      </a>
                    </p>
                    
                    <p className="flex items-start gap-3 text-white/90">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 mt-1">
                        <path d="M3 5L12 13L21 5" stroke="currentColor" strokeWidth="2"/>
                        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span>
                        Location: Remote / Location Flexible
                      </span>
                    </p>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h4 className="text-xl font-medium text-white mb-4">Connect with me</h4>
                  
                  <div className="flex gap-4">
                    <a 
                      href="https://www.linkedin.com/in/chirag-jain-aa566a205" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    
                    <a 
                      href="https://github.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                      aria-label="GitHub"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-8 md:p-10 md:col-span-3">
                <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-medium-gray mb-2">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue transition-colors"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-medium-gray mb-2">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue transition-colors"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-medium-gray mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue transition-colors"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-medium-gray mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue transition-colors"
                      rows={5}
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="btn-primary w-full md:w-auto flex items-center justify-center gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
