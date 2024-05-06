import React from "react";
import FunctionComponent02 from "./FunctionComponent02";

export default function MyFunctionComponent04() {
  const li = [1, 2, 3, 4];

  return (
    <div>
      {li.map((e, i) => {
        return <FunctionComponent02 key={i} />;
      })}
    </div>
  );
}
