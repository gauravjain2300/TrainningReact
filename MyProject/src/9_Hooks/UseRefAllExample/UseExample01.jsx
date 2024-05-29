import React, { useRef } from "react";

export default function UseExample01() {
  const inputRef = useRef(null);
  const handleSubmit = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Enter Name :" />
      <button onClick={handleSubmit}>Click here</button>
    </div>
  );
}
