import React from "react";

const FifthComponent = () => {
  return (
    <div className="component fifth-component">
      <div
        className="video"
        style={{
          position: "relative",
          paddingBottom: "56.25%" /* 16:9 */,
          paddingTop: 25,
          height: 0,
          textAlign: "center",
          background: '#40b19b'
        }}
      >
        <iframe
          style={{
            position: "absolute",
            top: '50px',
            left: '5%',
            width: "90%",
            marginLeft: '-45%',
            height: "90vh",
            margin: "0 auto"
          }}
          src={`https://www.youtube.com/embed/YRH9pcDIpVM`}
          frameBorder="0"
        />
      </div>
    </div>
  );
};

export default FifthComponent;