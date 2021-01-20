import React from "react";
import Image from 'next/image';

const FirstComponentNosotros = () => {
  return (
    <div className="component fourth-component-telos">
      <Image
        src="/images/nosotros.svg"
        alt="GESTELL Inteligencia Artificial y Automatización de Procesos para el Sector Financiero"
        width={400}
        height={400}
      />
      <p className="titularG">En Gestell encuadramos las nuevas tecnologías en sistemas inteligentes que vuelven más eficiente la operación de las Instituciones Financieras.<br/><br/>Nuestra filosofía es ofrecer soluciones agiles, escalables y de implementación sencilla que empoderen a nuestros clientes a través de un control de su información.</p>
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

export default FirstComponentNosotros;