import React, { useEffect, useState } from "react";

export default function HookExample1() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log("useEffect calling");
  });
  return (
    <div style={{ color: "white" }}>
      <h3>{count}</h3>
      <h3>{num}</h3>
      <button onClick={() => setCount(count + 1)}> Click here for Count</button>
      <button onClick={() => setNum(num + 1)}> Click here for num</button>
    </div>
  );
}
