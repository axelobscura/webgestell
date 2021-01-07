import React from "react";
import Image from 'next/image';

const SecondComponentNosotros = () => {
  return (
    <div className="component second-component">
      <div className="tarjetas">
        <Image
          src="/images/IRTABADGE.png"
          alt="GESTELL Inteligencia Artificial y Automatización de Procesos para el Sector Financiero"
          width={400}
          height={300}
          satyle={{ padding: '20px'}}
        />
        <Image
          src="/images/ttx4.png"
          alt="GESTELL Inteligencia Artificial y Automatización de Procesos para el Sector Financiero"
          width={400}
          height={300}
        />
        <Image
          src="/images/medalla.png"
          alt="GESTELL Inteligencia Artificial y Automatización de Procesos para el Sector Financiero"
          width={400}
          height={300}
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

export default SecondComponentNosotros;