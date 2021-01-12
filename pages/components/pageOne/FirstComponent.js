import React from "react";

const FirstComponent = () => {
  return (
    <div className="component first-component">
      <video autoPlay="autoplay" loop="loop" muted className="videofondo">
        <source src="video/plexus.mp4" type="video/mp4" />
      </video>
      <div className="contenido">
        <h1 className="titer">Inteligencia Artificial y Automatización<br/>de Procesos para el Sector Financiero</h1>
        <h2>Empoderamos a nuestros clientes a través de tecnologías únicas para crear la banca del mañana</h2>
      </div>
      <style jsx>{`
        .videofondo {
          position: fixed;
          right: 0;
          bottom: 0;
          min-width: 100%;
          min-height: 100%;
          z-index: 1;
        }
        .contenido {
          z-index: 100;
          position: fixed;
          top: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.1);
          color: #f1f1f1;
          width: 100%;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-content: center;
          justify-content: center;
          align-items: center;
        }
        .contenido h1.titer {
          font-family: 'Poppins', sans-serif;
          text-align: center;
          font-weight: 700;
        }
        .contenido h2 {
          font-family: Metropolis-Light, sans-serif;
          font-weight: 100;
          font-size: 1rem;
          text-align: center;
          padding-top: 10px;
        }
      `}</style>
    </div>
  );
};

export default FirstComponent;