import React from "react";

const YoutubeFrame = ({rotation = 0, image = "https://via.placeholder.com/150", maxWidth = "200px", link="#"}) => {
  const frameStyle = {
    display: "inline-block",
    // border: "5px solid #0099ff", // Frame border
    borderRadius: "10px", // Optional rounded corners
    transform: `rotate(${rotation}deg)`, // Rotate the frame
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Optional shadow
  };

  const imageStyle = {
    display: "block",
    maxWidth: maxWidth,
    height: "auto", // Maintain aspect ratio
  };

  return (
      <div style={frameStyle}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            src={image} // Replace with your image URL
            alt="Framed Example"
            style={imageStyle}
            className="hover-card"
          />
        </a>
      </div>
  );
};

export default YoutubeFrame;
