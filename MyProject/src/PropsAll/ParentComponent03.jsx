import React from "react";
import ChildComponent03 from "./ChildComponent03";

export default function ParentComponent03() {
  const handleevent = () => {
    alert("hello welcome to react js");
  };
  return (
    <div>
      <button onClick={handleevent}>Click here</button>

      <ChildComponent03 myfun={handleevent}></ChildComponent03>
    </div>
  );
}
