import React from "react";
import Image from 'next/image'

const SecondComponentProducto = () => {
  return (
    <div className="component fourth-component-telos">
      <Image
        src="/images/genosislogo.png"
        alt="GESTELL Inteligencia Artificial y Automatización de Procesos para el Sector Financiero"
        width={330}
        height={270}
      />
      <p className="titularG">Implementamos un control “inteligente” de su ecosistema informático robotizando sus procesos de validación, limpieza y conciliación de datos.<br/><br/>Utilizamos técnicas de inteligencia artificial en combinación con tecnología en la nube para procesar y almacenar su información de manera escalable y flexible.</p>
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

export default SecondComponentProducto;