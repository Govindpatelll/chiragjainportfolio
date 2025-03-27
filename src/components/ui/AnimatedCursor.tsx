
import React, { useEffect, useState } from "react";

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const handleLinkHoverEvents = () => {
      const allLinks = document.querySelectorAll("a, button, [role='button'], [type='button']");
      
      allLinks.forEach((link) => {
        link.addEventListener("mouseenter", () => setLinkHovered(true));
        link.addEventListener("mouseleave", () => setLinkHovered(false));
      });
      
      const allButtons = document.querySelectorAll(".btn-primary, .btn-outline");
      
      allButtons.forEach((button) => {
        button.addEventListener("mouseenter", () => setButtonHovered(true));
        button.addEventListener("mouseleave", () => setButtonHovered(false));
      });
    };

    addEventListeners();
    
    // Add the event handlers after a small delay to ensure all DOM elements are loaded
    setTimeout(handleLinkHoverEvents, 500);

    // Ensure cursor follows touch on mobile
    const touchHandler = (e: TouchEvent) => {
      if (e.touches[0]) {
        setPosition({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      }
    };

    document.addEventListener("touchmove", touchHandler);
    document.addEventListener("touchstart", touchHandler);

    return () => {
      removeEventListeners();
      document.removeEventListener("touchmove", touchHandler);
      document.removeEventListener("touchstart", touchHandler);
    };
  }, []);

  const cursorClasses = `custom-cursor-dot ${hidden ? "opacity-0" : "opacity-100"} ${buttonHovered ? "bg-accent-blue" : "bg-white"}`;
  
  const cursorRingClasses = `custom-cursor border ${buttonHovered ? "border-accent-blue" : "border-white"} ${hidden ? "opacity-0" : "opacity-100"} ${clicked ? "scale-75" : ""} ${linkHovered ? "scale-150" : ""} ${buttonHovered ? "scale-200" : ""}`;
  
  const cursorDotStyle = { 
    left: `${position.x}px`, 
    top: `${position.y}px`,
    transition: "left 0.15s ease-out, top 0.15s ease-out, background-color 0.3s ease"
  };
  
  const cursorRingStyle = { 
    left: `${position.x}px`, 
    top: `${position.y}px`,
    transition: "left 0.2s ease-out, top 0.2s ease-out, transform 0.3s ease, border-color 0.3s ease"
  };

  return (
    <div className="hidden md:block">
      <div className={cursorClasses} style={cursorDotStyle} />
      <div className={cursorRingClasses} style={cursorRingStyle} />
    </div>
  );
};

export default AnimatedCursor;
