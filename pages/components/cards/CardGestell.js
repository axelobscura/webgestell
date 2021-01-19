import React from "react";
import Link from 'next/link';
import Card from 'react-bootstrap/Card';

const CardGestell = ({titulo, texto, imagen, enlace}) => {
  return (
    <Link href={enlace ? enlace : ""}>
      <Card>
        <div className="cajaImagen">
          <Card.Img 
            variant="top" 
            src={imagen} 
            className={imagen == "images/daseinlogo.png" ? "icon1 dasein_logo" : "icon1"}
            fluid
          />
        </div>
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>{texto}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default CardGestell;