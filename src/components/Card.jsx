import Card from 'react-bootstrap/Card';
import { Modal } from 'react-bootstrap';
import React, { useState } from "react";

function ImageCard({ image = "holder.js/100px180?text=Image cap", title = "LOREM IPSUM" }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Card style={{width: '18rem', position: "relative", overflow: "hidden" }} className='hover-card'
        onClick={handleShow}
      >
        <Card.Img variant="top" src={image} />
        <Card.Body className='artwork-card-body'>
          <Card.Title className='center' style={{color: "white"}}>{title}</Card.Title>
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