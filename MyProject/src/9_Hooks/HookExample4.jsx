import React, { useEffect } from "react";
import { useState } from "react";

export default function HookExample4() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const res = await response.json();
    setData(res);
  };

  return (
    <div style={{ color: "white" }}>
      {data ? (
        data.map((e, i) => {
          return <h1 key={i}>{e.title}</h1>;
        })
      ) : (
        <p>loading....</p>
      )}
    </div>
  );
}
