import React from "react";
import ChildClickevent from "./ChildClickevent";

export default function CLickEventParent() {
  const click = () => {
    alert("Button clicked");
  };

  return (
    <div>
      <button onClick={click}> Click</button>

      <ChildClickevent name={click} />
    </div>
  );
}
