import React from "react";

const FirstComponent = () => {
  return (
    <div className="component fourth-component">
      <div className="mascara">
      <h1>Telos</h1>
      <h2 className="titularG">Regulación Automatizada</h2>
      </div>
      <style jsx>{`
        .fourth-component {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          align-content: center;
          height: 100vh;
          text-align: center;
          background: url(images/bab-t-337.jpg) no-repeat center center fixed; 
          -webkit-background-size: cover;
          -moz-background-size: cover;
          -o-background-size: cover;
          background-size: cover;
        }
        .mascara {
          width: 100%;
          height: 100vh;
          background: rgba(0,0,0,0.8);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          align-content: center;
        }
        .fourth-component h2.titularG {
          color: #f2f2f2;
          font-family: Metropolis-Black, sans-serif;
          padding: 0 90px;
        }
      `}</style>
    </div>
  );
};

export default FirstComponent;