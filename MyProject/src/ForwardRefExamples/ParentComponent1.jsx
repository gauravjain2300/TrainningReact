import React, { useRef } from "react";
import ChildComponent01 from "./ChildComponent01";

export default function ParentComponent1() {
  const inputRef = useRef();
  const handleSubmit = () => {
    inputRef.current.focus();
    console.log(inputRef);
  };
  return (
    <div>
      <h1>Parent Component</h1>

      <ChildComponent01 ref={inputRef} />
      <button onClick={handleSubmit}>CLick</button>
    </div>
  );
}
