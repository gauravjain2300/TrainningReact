import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export default function UseRefExample02() {
  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div>
      <p>Current Value :{count}</p>
      <p>Previous Value :{prevCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Click here</button>
    </div>
  );
}
