import React from "react";

const Frame = ({rotation = 45}) => {
  const frameStyle = {
    display: "inline-block",
    padding: "10px",
    // border: "5px solid #0099ff", // Frame border
    borderRadius: "10px", // Optional rounded corners
    backgroundColor: "#f0f0f0", // Frame background
    transform: `rotate(${rotation}deg)`, // Rotate the frame
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Optional shadow
  };

  const imageStyle = {
    display: "block",
    maxWidth: "100%",
    height: "auto", // Maintain aspect ratio
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
      <div style={frameStyle}>
        <img
          src="https://via.placeholder.com/150" // Replace with your image URL
          alt="Framed Example"
          style={imageStyle}
        />
      </div>
    </div>
  );
};

export default Frame;
