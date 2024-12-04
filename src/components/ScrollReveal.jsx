import React, { useEffect, useRef, useState } from "react";

function ScrollReveal() {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Reveal when visible in the viewport
          observer.disconnect(); // Stop observing after it's revealed
        }
      },
      {
        threshold: 0.2, // Trigger when 10% of the element is visible
      }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      observer.disconnect(); // Cleanup on unmount
    };
  }, []);

  return (
    <div
      ref={divRef}
      style={{
        opacity: isVisible ? 1 : 0, // Change opacity
        transform: isVisible ? "translateY(0)" : "translateY(20px)", // Smooth slide up
        transition: "opacity 0.6s ease, transform 0.6s ease", // Smooth animation
        padding: "20px",
        textAlign: "center",
        height: "100vh",
      }}
    >
      {isVisible ? "I'm visible!" : "Waiting to be revealed..."}
    </div>
  );
}

export default ScrollReveal;
