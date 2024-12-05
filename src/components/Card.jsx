import Card from 'react-bootstrap/Card';
import React, { useEffect, useRef, useState } from "react";

function ImageCard({ image = "holder.js/100px180?text=Image cap", title = "LOREM IPSUM" }) {
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
        threshold: 0.2,
      }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <Card style={{width: '18rem', position: "relative", overflow: "hidden" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body className='artwork-card-body'>
        <Card.Title className='center' style={{color: "white"}}>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default ImageCard;