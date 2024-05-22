import React, { useEffect, useState } from "react";

export default function HookExample3() {
  const [data, setData] = useState(0);

  useEffect(() => {
    console.log("UseEffect called");
  }, []); // it invoke once in a program before intilization

  return (
    <div style={{ color: "white" }}>
      {data}
      <br />
      <button onClick={() => setData(data + 1)}>Click Here</button>
    </div>
  );
}
