import React from "react";
import Image from 'next/image'

const SecondComponentSuptech = () => {
  return (
    <div className="component fourth-component-telos">
      <Image
        src="/images/suptechlogo.png"
        alt="GESTELL Inteligencia Artificial y Automatización de Procesos para el Sector Financiero"
        width={350}
        height={360}
      />
      <p className="titularG">Dasein automatiza la recolección, validación, almacenamiento, y análisis de información regulatoria utilizada por las autoridades financieras en sus procesos de supervisión.<br/><br/>Utilizamos técnicas de Machine Learning para una vigilancia preventiva de riesgos Micro / Macro prudenciales.</p>
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

export default SecondComponentSuptech;