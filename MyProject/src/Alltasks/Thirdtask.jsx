import React, { useState } from "react";

export default function Thirdtask() {
  const [count, setCount] = useState(0);

  const Increment = () => {
    console.log("button clicked");
    setCount(count + 1);
  };
  const decrement = () => {
    console.log("button clicked");
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Hello{count}</h1>

      <button onClick={Increment}>Increment</button>

      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
