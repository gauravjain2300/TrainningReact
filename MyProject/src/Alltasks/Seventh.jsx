import React from "react";
import { useState } from "react";

export default function Seventh() {
  const [name, setname] = useState(0);

  const randomnames = ["Laptop", "Wire", "Charger", "key"];

  const Changename = () => {
    const indexRandom = Math.floor(Math.random() * randomnames.length);

    setname(indexRandom);
  };

  return (
    <div>
      <h1>{randomnames[name]}</h1>

      <button onClick={Changename}> Random names</button>
    </div>
  );
}
