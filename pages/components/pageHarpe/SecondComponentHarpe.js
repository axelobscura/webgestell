import React from "react";
import Image from 'next/image'

const SecondComponentHarpe = () => {
  return (
    <div className="component fourth-component-telos">
      <img
        src="/images/harpelogo.svg"
        alt="GESTELL Inteligencia Artificial y Automatización de Procesos para el Sector Financiero"
        width={200}
        height={200}
      />
      <p className="titularG">Harpe encuadra la complejidad de su problemática de negocio utilizando herramientas de aprendizaje supervisado y no supervisado (machine learning) que se adaptan a las condiciones cambiantes del sector financiero de manera ágil y sencilla. Ofrecemos soluciones escalables y personalizadas para automatizar su área jurídica, fiscal y de gestión de riesgos crediticios.</p>
      <style jsx>{`
        .fourth-component-telos {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          align-content: center;
          height: 100vh;
          text-align: center;
          padding: 10px 90px;
        }
        @media (max-width: 600px) {
          .fourth-component-telos {
            flex-direction: column;
          }
          p.titularG {
            padding-top: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default SecondComponentHarpe;