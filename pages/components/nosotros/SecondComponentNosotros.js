import React from "react";
import Image from 'next/image';

const SecondComponentNosotros = () => {
  return (
    <div className="component second-component">
      <div className="tarjetas">
        <div className="tar">
        <Image
          src="/images/IRTABADGE.png"
          alt="GESTELL Inteligencia Artificial y Automatización de Procesos para el Sector Financiero"
          width={300}
          height={200}
          satyle={{ padding: '20px'}}
        />
        </div>
        <div className="tar">
        <Image
          src="/images/ttx4.png"
          alt="GESTELL Inteligencia Artificial y Automatización de Procesos para el Sector Financiero"
          width={300}
          height={200}
        />
        </div>
        <div className="tar">
        <Image
          src="/images/medalla.png"
          alt="GESTELL Inteligencia Artificial y Automatización de Procesos para el Sector Financiero"
          width={300}
          height={200}
        />
        </div>
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
          justify-content: space-around;
          width: 100vw;
        }
        @media (max-width: 600px) {
          .tarjetas {
            flex-direction: column;
            justify-content: space-around;
            flex-align: center;
            justify-content: center;
          }
          .tar {
            text-align:center;
            margin-top: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default SecondComponentNosotros;