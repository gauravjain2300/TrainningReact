import React from "react";
import { useState } from "react";

export default function NameChangeusestate() {
  const [name, Setname] = useState("");
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => Setname("My React Js")}> Change </button>
    </div>
  );
}
