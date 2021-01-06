import React from "react";
import CardGestell from '../cards/CardGestell';

const ThirdComponent = () => {
  return (
    <div className="component second-component">
      <h2 className="titularG">Productos y Soluciones</h2>
      <div className="tarjetas">
        <CardGestell 
          titulo="DASEIN" 
          texto="Plataforma SupTech." 
          imagen="images/daseinlogo.png"
        />
        <CardGestell 
          titulo="GNOSIS"
          texto="Plataforma de Gestión de Datos."
          imagen="images/gnosislogo.png"
        />
        <CardGestell 
          titulo="TELOS" 
          texto="Plataforma Regulatoria."
          imagen="/images/teloslogo.png"
        />
        <CardGestell 
          titulo="HARPE" 
          texto="Solución de Business Analytics."
          imagen="/images/harpelogo.png"
        />
      </div>
      <style jsx>{`
        .second-component {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          align-content: center;
          height: 100vh;
        }
        .second-component h2 {
          font-family: Metropolis-Light, sans-serif;
        }
        .tarjetas {
          display: flex;
          flex-direction: row;
          padding: 10px;
        }
        @media (max-width: 600px) {
          .tarjetas {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default ThirdComponent;