import React from "react";
import CardGestell from '../cards/CardGestell';

const ThirdComponentHarpe = () => {
  return (
    <div className="component second-component">
      <h2 className="titularG">COMPONENTES DE LA PLATAFORMA</h2>
      <div className="tarjetas">
        <CardGestell 
          titulo="Análisis de Estados Financieros"
          imagen="images/harpe1.png"
        />
        <CardGestell 
          titulo="Análisis de Riesgo Crediticio"
          imagen="images/harpe2.png"
        />
        <CardGestell 
          titulo="Componente de Machine Learning personalizado"
          imagen="images/harpe3.png"
        />
        <CardGestell 
          titulo="Componente de LegalTech"
          imagen="images/harpe4.png"
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

export default ThirdComponentHarpe;