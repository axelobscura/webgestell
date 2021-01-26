import React from "react";
import CardGestell from '../cards/CardGestell';

const SecondComponent = () => {
  return (
    <div className="component second-component">
      <h2 className="titularG">¿CÓMO LO HACEMOS?</h2>
      <div className="tarjetas">
        <CardGestell 
          titulo="GOBIERNO DE DATOS" 
          texto="Damos la capacidad a las Instituciones Financieras de explotar sus datos de manera más ágil y precisa para una mejor gestión de su negocio." 
          imagen="images/icon1.png"
        />
        <CardGestell 
          titulo="AUTOMATIZACIÓN DE PROCESOS"
          texto="Nuestra soluciones y productos generan ahorros en su hoja de balance. Automatizamos procesos que eliminan riesgos de operación y actividades intensivas en capital humano."
          imagen="images/icon2.svg"
        />
        <CardGestell 
          titulo="BUSINESS ANALYTICS" 
          texto="Utilizamos la ciencia de datos para resolver problemas complejos con ideas simples. Aplicamos herramientas de vanguardia para realizar análisis históricos, predictivos y en tiempo real de manera rápida y sencilla."
          imagen="/images/icon3.png"
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

export default SecondComponent;