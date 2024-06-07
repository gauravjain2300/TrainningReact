import React from "react";
import { useParams } from "react-router-dom";

export default function Page2() {
  const { id, name } = useParams();
  return (
    <div>
      <h1>Page 2</h1>
      <h3> id={id}</h3>
      {name && <h3>Name :{name}</h3>}
    </div>
  );
}
