import React from "react";
import CardGestell from '../cards/CardGestell';

const ThirdComponentProducto = () => {
  return (
    <div className="component second-component">
      <h2 className="titularG">COMPONENTES DE LA PLATAFORMA</h2>
      <div className="tarjetas">
        <CardGestell 
          titulo="Consolida datos de diferentes fuentes"
          imagen="images/producto1.png"
        />
        <CardGestell 
          titulo="Crea un solo modelo semántico"
          imagen="images/producto2.png"
        />
        <CardGestell 
          titulo="Valida y concilia su información"
          imagen="images/producto3.svg"
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

export default ThirdComponentProducto;