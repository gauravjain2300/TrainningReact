import React from "react";
import { useState } from "react";

export default function SixthTask() {
  const [change, Setchange] = useState("White");
  return (
    <div
      style={{
        backgroundColor: change,
        height: "100vh",
      }}
    >
      <h1 style={{ textAlign: "center", paddingTop: "50px" }}>
        Changing Colors
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
          alignItems: "center",
          height: "20vh",
        }}
      >
        <button
          style={{
            height: "50px",
            width: "100px",
            borderRadius: "10px",
            background: "rgb(216,154,126)",
            background:
              "linear-gradient(185deg, rgba(216,154,126,1) 10%, rgba(5,11,19,1) 100%)",
            fontWeight: "900",
            color: "red",
            textAlign: "center",
          }}
          onClick={() => Setchange("red")}
        >
          Red
        </button>
        <button
          style={{
            height: "50px",
            width: "100px",
            borderRadius: "10px",
            background: "rgb(216,154,126)",
            background:
              "linear-gradient(185deg, rgba(216,154,126,1) 10%, rgba(5,11,19,1) 100%)",
            fontWeight: "900",
            color: "blue",
            textAlign: "center",
          }}
          onClick={() => Setchange("blue")}
        >
          blue
        </button>
        <button
          style={{
            height: "50px",
            width: "100px",
            borderRadius: "10px",
            background: "rgb(216,154,126)",
            background:
              "linear-gradient(185deg, rgba(216,154,126,1) 10%, rgba(5,11,19,1) 100%)",
            fontWeight: "900",
            color: "black",
            textAlign: "center",
          }}
          onClick={() => Setchange("black")}
        >
          black
        </button>
        <button
          style={{
            height: "50px",
            width: "100px",
            borderRadius: "10px",
            background: "rgb(216,154,126)",
            background:
              "linear-gradient(185deg, rgba(216,154,126,1) 10%, rgba(5,11,19,1) 100%)",
            fontWeight: "900",
            color: "purple",
            textAlign: "center",
          }}
          onClick={() => Setchange("purple")}
        >
          purple
        </button>
        <button
          style={{
            height: "50px",
            width: "100px",
            borderRadius: "10px",
            background: "rgb(216,154,126)",
            background:
              "linear-gradient(185deg, rgba(216,154,126,1) 10%, rgba(5,11,19,1) 100%)",
            fontWeight: "900",
            textAlign: "center",
            color: "yellow",
          }}
          onClick={() => Setchange("Yellow")}
        >
          Yellow
        </button>
      </div>
    </div>
  );
}
