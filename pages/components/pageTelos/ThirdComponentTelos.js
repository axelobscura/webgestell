import React from "react";
import CardGestell from '../cards/CardGestell';

const ThirdComponentTelos = () => {
  return (
    <div className="component second-component">
      <h2 className="titularG">¿CÓMO LO HACEMOS?</h2>
      <div className="tarjetas">
        <CardGestell 
          titulo="Know Your Costumer (KYC) Y Costumer Due Diligence (CDD)" 
          texto="Automatizamos el proceso de identificación, integración y validación de información de sus clientes." 
          imagen="images/telos1.svg"
        />
        <CardGestell 
          titulo="AUTOMATIZACIÓN DE REPORTES REGULATORIOS Y ANÁLISIS PRUDENCIAL"
          texto="Automatizamos sus reportes regulatorios y analizamos su información para obtener tendencias, composiciones y árboles de relación de indicadores de interés."
          imagen="images/telos2.svg"
        />
        <CardGestell 
          titulo="ANÁLISIS TRANSACCIONAL" 
          texto="Realizamos análisis descriptivos, históricos y predictivos de elementos de riesgo en productos, servicios, tipos de cliente, zonas geográficas y transacciones."
          imagen="/images/telos3.svg"
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

export default ThirdComponentTelos;