import Card from 'react-bootstrap/Card';
import React, { useEffect, useRef, useState } from "react";

function ImageCard({ image = "holder.js/100px180?text=Image cap" }) {
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
    <Card style={{width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ImageCard;