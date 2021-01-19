import React from "react";
import Image from 'next/image'

const SecondComponentTelos = () => {
  return (
    <div className="component fourth-component-telos">
      <Image
        src="/images/teloslogo.svg"
        alt="GESTELL Inteligencia Artificial y Automatización de Procesos para el Sector Financiero"
        width={200}
        height={200}
      />
      <p className="titularG">Telos automatiza sus procesos de cumplimiento regulatorio y prevención de lavado de dinero<br/>utilizando técnicas de inteligencia artificial.</p>
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

export default SecondComponentTelos;