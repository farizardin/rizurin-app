import React, { useState, useEffect } from "react";
import Frame from "./Frame";
const Dock = () => {
  const [scale, setScale] = useState(getInitialScale()); // Initial scale based on window width

  // Function to calculate scale factor (e.g., scale = 1 for full size, 0.5 for half size)
  function getInitialScale() {
    return window.innerWidth / 1500; // Scale factor relative to a base width (e.g., 1000px)
  }

  const handleResize = () => {
    setScale(window.innerWidth / 1500); // Recalculate scale factor on window resize
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize); // Attach resize listener
    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener on unmount
    };
  }, []);

  return (
    <div style={{justifyContent: "center", width: "100%", display: "grid"}}>
      <div style={{ transform: `scale(${scale})`, borderRadius: "15px",padding: "15px", display: "flex", justifyContent: "center", alignItems: "center", width: "auto", display: "inline-flex", backgroundColor: "rgba(0,0,0,0.5)" }}>
        <div style={{paddingRight: "10px"}}>
          <Frame rotation={0} maxWidth={"100px"}/>
        </div>
        <div style={{paddingLeft: "10px", paddingRight: "10px"}}>
          <Frame rotation={0} maxWidth={"100px"}/>
        </div>
        <div style={{paddingLeft: "10px", paddingRight: "10px"}}>
          <Frame rotation={0} maxWidth={"100px"}/>
        </div>
        <div style={{paddingLeft: "10px", paddingRight: "10px"}}>
          <Frame rotation={0} maxWidth={"100px"}/>
        </div>
        <div style={{paddingLeft: "10px"}}>
          <Frame rotation={0} maxWidth={"100px"}/>
        </div>
      </div>
    </div>
  );
};

export default Dock;
