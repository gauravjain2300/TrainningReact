import React from "react";
import { useState } from "react";

export default function EightTask() {
  const [isicrease, setIncrease] = useState(40);

  const Increasing = () => {
    setIncrease(isicrease + 1);
  };
  const Decreasing = () => {
    setIncrease(isicrease - 1);
  };

  return (
    <div>
      <h1
        style={{
          fontSize: isicrease,
        }}
      >
        Hello World
      </h1>

      <button onClick={Increasing}>Increasing Font Size</button>
      <button onClick={Decreasing}>Decreasing Font Size</button>
    </div>
  );
}
