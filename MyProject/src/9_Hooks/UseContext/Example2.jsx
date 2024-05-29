import React from "react";
import Example3 from "./Example3";

export default function Example2(props) {
  return (
    <div>
      <h3>2nd Component</h3>
      <Example3 msg={props.msg} />
    </div>
  );
}
