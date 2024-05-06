import React from "react";

export default function InternalCssInReactjs02() {
  const myStyle = {
    myContainer: {
      backgroundColor: "black",
      color: "white",
      height: "150px",
    },
    myHeading: {
      backgroundColor: "red",
      color: "purple",
    },
  };

  return (
    <div style={myStyle.myContainer}>
      <h1 style={myStyle.myHeading}>InternalCssInReactjs02</h1>
    </div>
  );
}
