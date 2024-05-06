import React, { useState } from "react";

export default function Randomcolorexample06() {
  const [bgcolor, setBgcolor] = useState(0);
  const colorArray = ["blue", "black", "red", "grey"];

  //blue = colorArray[0]

  const handlerforRandomColor = () => {
    const indexRandom = Math.floor(Math.random() * colorArray.length);
    console.log(indexRandom);
    setBgcolor(indexRandom);
  };

  return (
    <div style={{ backgroundColor: colorArray[bgcolor], color: "white" }}>
      <h1>Hello</h1>
      <button onClick={handlerforRandomColor}>Random Colors</button>
    </div>
  );
}
