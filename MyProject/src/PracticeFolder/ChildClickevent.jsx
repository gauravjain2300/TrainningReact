import React from "react";

export default function ChildClickevent(props) {
  return (
    <div>
      <button onClick={props.name}>Button</button>
    </div>
  );
}
