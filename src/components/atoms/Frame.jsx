import React from "react";

const Frame = ({ rotation = 45, image = "https://via.placeholder.com/150", maxWidth = "200px" }) => {
  const frameStyle = {
    display: "inline-block",
    padding: "4px",
    background: "rgba(0, 0, 0, 0.6)",
    transform: `rotate(${rotation}deg)`,
    position: "relative",
    border: "1px solid rgba(0, 255, 255, 0.1)",
    overflow: "hidden"
  };

  const cornerStyle = {
    position: "absolute",
    width: "15px",
    height: "15px",
    border: "2px solid #00f2ff",
    boxShadow: "0 0 10px #00f2ff",
    zIndex: 2
  };

  const tagStyle = {
    position: "absolute",
    bottom: "-15px",
    right: "0",
    fontSize: "10px",
    color: "#00f2ff",
    fontFamily: "'Courier New', Courier, monospace",
    letterSpacing: "1px",
    opacity: 0.8,
    textShadow: "0 0 5px #00f2ff"
  };

  const scanlineStyle = {
    position: "absolute",
    top: "-100%",
    left: 0,
    width: "100%",
    height: "50%",
    background: "linear-gradient(to bottom, transparent, rgba(0, 242, 255, 0.2), transparent)",
    zIndex: 3,
    animation: "scan 4s linear infinite"
  };

  const imageStyle = {
    display: "block",
    maxWidth: maxWidth,
    height: "auto", // Maintain aspect ratio
  };

  return (
    // <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
    <div style={frameStyle}>
      <style>
        {`
          @keyframes scan {
            0% { top: -100%; }
            100% { top: 100%; }
          }
        `}
      </style>
      <div style={{ ...cornerStyle, top: 0, left: 0, borderRight: 'none', borderBottom: 'none' }} />
      <div style={{ ...cornerStyle, top: 0, right: 0, borderLeft: 'none', borderBottom: 'none' }} />
      <div style={{ ...cornerStyle, bottom: 0, left: 0, borderRight: 'none', borderTop: 'none' }} />
      <div style={{ ...cornerStyle, bottom: 0, right: 0, borderLeft: 'none', borderTop: 'none' }} />
      <div style={scanlineStyle} />
      <img
        src={image}
        alt="Cyber Frame"
        style={imageStyle}
      />
      <div style={tagStyle}>
        [ART_{image.match(/art(\d+)/)?.[1]?.padStart(3, '0') || 'UNK'}]
      </div>
    </div>
    // </div>
  );
};

export default Frame;
