import React from "react";

const Icon = ({image = "https://via.placeholder.com/150", maxWidth = "200px"}) => {
  const frameStyle = {
    display: "inline-block",
    // border: "5px solid #0099ff", // Frame border
    borderRadius: "10px", // Optional rounded corners
    backgroundColor: "rgba(0,0,0,0)", // Frame background
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Optional shadow
  };

  const imageStyle = {
    display: "block",
    maxWidth: maxWidth,
    height: "auto", // Maintain aspect ratio
  };

  return (
    // <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
      <div style={frameStyle}>
        <img
          src={image} // Replace with your image URL
          alt="Framed Example"
          style={imageStyle}
        />
      </div>
    // </div>
  );
};

export default Icon;
