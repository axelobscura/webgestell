import React from "react";
import Card from 'react-bootstrap/Card';

const CardGestell = ({titulo, texto, imagen}) => {
  return (
    <Card>
      <div className="cajaImagen">
        <Card.Img variant="top" src={imagen} className="icon1" fluid />
      </div>
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{texto}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardGestell;