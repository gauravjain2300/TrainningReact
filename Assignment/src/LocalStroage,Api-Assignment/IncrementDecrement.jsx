import React from "react";
import { useState } from "react";
import "./../IncrementDecrement/increment.css";

export default function IncrementDecrement() {
  const [Increment, setIncrement] = useState(0);

  const handleincrement = () => {
    setIncrement(Increment + 1);
  };

  const handleDecrement = () => {
    setIncrement(Increment - 1);
  };
  const reset = () => {
    setIncrement(0);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{Increment}</h1>

      <div className="btn">
        <button onClick={handleincrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
