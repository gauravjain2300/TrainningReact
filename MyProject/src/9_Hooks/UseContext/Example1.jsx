import React from "react";
import { useState } from "react";
import Example2 from "./Example2";

export default function Example1() {
  const [data, setData] = useState("");
  return (
    <div>
      <h3>1 St Component</h3>
      <input
        type="text"
        placeholder="Enter data"
        onChange={(e) => {
          setData(e.target.value);
        }}
      />

      <Example2 msg={data} />
    </div>
  );
}
