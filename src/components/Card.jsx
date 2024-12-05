import Card from 'react-bootstrap/Card';
import { Modal } from 'react-bootstrap';
import React, { useState, useEffect } from "react";

function ImageCard({ image = "holder.js/100px180?text=Image cap", title = "LOREM IPSUM" }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [cardWidth, setCardWidth] = useState('20%'); // Initial width is 20% of the window width

  // Update card width based on window size
  const handleResize = () => {
    const width = window.innerWidth;
    // Calculate 20% of the window width
    const newCardWidth = (width * 0.2) + 'px'; // Example: 20% of window width
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
  return (
    <div>
      <Card style={{maxWidth: cardWidth, minWidth: "150px", position: "relative", overflow: "hidden" }} className='hover-card'
        onClick={handleShow}
      >
        <Card.Img variant="top" src={image} />
        <Card.Body className='artwork-card-body' style={{padding: "6px"}}>
          <Card.Title className='center' style={{color: "white", fontSize: "10pt"}}>{title}</Card.Title>
        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        backdropClassName="custom-backdrop"
        contentClassName="custom-modal-content"
        style={{backgroundColor: "rgba(0,0,0,0) !important"}}
      >
        <Modal.Header closeButton className="custom-modal-header" style={{backgroundColor: "rgba(0,0,0,0)"}}/>
        <Modal.Body className="p-0" style={{backgroundColor: "rgba(0,0,0,0) !important"}}>
          <img
            src={image}
            alt={title}
            style={{ width: '100%', height: 'auto' }}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ImageCard;