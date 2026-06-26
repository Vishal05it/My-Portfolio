import React from "react";
import "./Components/Styles/Wrapper.css";

function Wrapper() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -10,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "20%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(236,72,153,0.18) 0%, transparent 70%)",
          animation: "orb-pulse 8s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "15%",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
          animation: "orb-pulse 10s ease-in-out infinite 2s",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "-5%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
          animation: "orb-pulse 12s ease-in-out infinite 4s",
        }}
      />
    </div>
  );
}

export default Wrapper;
