import React, { useState } from "react";

export default function NinthTask() {
  const [off, Setoff] = useState();
  const [change, SetChange] = useState();

  const onoff = () => {
    Setoff(!off);
    SetChange(!change);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "80px",
        backgroundColor: "black",
        height: "100vh",
      }}
    >
      {off ? (
        <img
          src="lightbulbon-removebg-preview.png"
          alt=""
          style={{
            width: "500px",
            filter: "drop-shadow(0 -1mm 20mm orange)",
          }}
        />
      ) : (
        <img
          src="isolated.png"
          alt=""
          style={{
            width: "350px",
          }}
        />
      )}
      {change ? (
        <button
          style={{
            height: "40px",
            width: "100px",
            borderRadius: "20px",
          }}
          onClick={onoff}
        >
          Bulb is ON
        </button>
      ) : (
        <button
          style={{
            height: "40px",
            width: "100px",
            borderRadius: "20px",
          }}
          onClick={onoff}
        >
          Bulb is OFF
        </button>
      )}
    </div>
  );
}
