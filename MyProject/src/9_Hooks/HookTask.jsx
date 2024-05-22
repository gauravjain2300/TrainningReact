import React, { useEffect, useState } from "react";

export default function HookTask() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);
  const [bg, setbgColor] = useState(0);
  const array = ["red", "blue", "white"];

  useEffect(() => {
    document.body.style.backgroundColor = array[bg];
  }, [bg]);
  return (
    <div>
      <h3>{count}</h3>
      <h3>{num}</h3>
      <button onClick={() => setCount(count + 1)}> Click here for Count</button>
      <button onClick={() => setNum(num + 1)}> Click here for num</button>
      <button onClick={() => setbgColor(bg + 1)}>Color</button>
    </div>
  );
}
