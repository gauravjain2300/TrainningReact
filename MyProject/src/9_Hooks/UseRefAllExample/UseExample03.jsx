import React from "react";
import { useRef } from "react";

export default function UseExample03() {
  const nameRef = useRef("");
  const emailref = useRef("");

  const handlesubmit = () => {
    // alert(Name.value, email.value);
    let name = nameRef.current.value;
    let email = emailref.current.value;

    alert(`name = ${name}-email =${email}`);
  };

  return (
    <div>
      <input type="text" placeholder="Enter Your Name" ref={nameRef} />
      <input type="text" placeholder="Enter Your Email" ref={emailref} />

      <button onClick={handlesubmit}>Click </button>
    </div>
  );
}
