import React from "react";
import CardGestell from '../cards/CardGestell';

const ThirdComponentSuptech = () => {
  return (
    <div className="component second-component">
      <h2 className="titularG">COMPONENTES DE LA PLATAFORMA</h2>
      <div className="tarjetas">
        <CardGestell 
          titulo="Gestión de Datos"
          imagen="images/suptech1.png"
        />
        <CardGestell 
          titulo="Reporteo Regulatorio Digital (RRD)"
          imagen="images/suptech2.png"
        />
        <CardGestell 
          titulo="Análisis Macro – Prudencial"
          imagen="images/suptech3.png"
        />
        <CardGestell 
          titulo="Análisis Micro – Prudencial"
          imagen="images/suptech4.png"
        />
        <CardGestell 
          titulo="Componente de PLD/FT"
          imagen="images/suptech5.svg"
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

export default ThirdComponentSuptech;