import React, {useState, useEffect} from "react";

const YoutubeFrame = ({rotation = 0, image = "https://via.placeholder.com/150", maxWidth = "200px", link="#"}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [cardWidth, setCardWidth] = useState('16%'); // Initial width is 20% of the window width
  // Update card width based on window size
  const handleResize = () => {
    const width = window.innerWidth;
    // Calculate 20% of the window width
    const newCardWidth = (width * 0.16) + 'px'; // Example: 20% of window width
    setCardWidth(newCardWidth);
  };

  // Use effect to add event listener on component mount and clean up on unmount
  useEffect(() => {
    handleResize(); // Initial resize when component mounts
    window.addEventListener('resize', handleResize); // Listen for resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up listener on unmount
    };
  }, []);

  const imageStyle = {
    display: "block",
    height: "auto", // Maintain aspect ratio
    maxWidth: cardWidth,
    minWidth: "150px",
  };

  const frameStyle = {
    display: "inline-block",
    // border: "5px solid #0099ff", // Frame border
    borderRadius: "10px", // Optional rounded corners
    transform: `rotate(${rotation}deg)`, // Rotate the frame
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Optional shadow
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
