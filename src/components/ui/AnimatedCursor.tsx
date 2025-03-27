
import React, { useEffect, useState } from "react";

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

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
    };

    addEventListeners();
    handleLinkHoverEvents();

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

  const cursorClasses = `custom-cursor-dot bg-white ${hidden ? "opacity-0" : "opacity-100"}`;
  const cursorRingClasses = `custom-cursor border border-white ${hidden ? "opacity-0" : "opacity-100"} ${clicked ? "scale-75" : ""} ${linkHovered ? "scale-150" : ""}`;
  
  const cursorDotStyle = { left: `${position.x}px`, top: `${position.y}px` };
  const cursorRingStyle = { left: `${position.x}px`, top: `${position.y}px` };

  return (
    <div className="hidden md:block">
      <div className={cursorClasses} style={cursorDotStyle} />
      <div className={cursorRingClasses} style={cursorRingStyle} />
    </div>
  );
};

export default AnimatedCursor;
