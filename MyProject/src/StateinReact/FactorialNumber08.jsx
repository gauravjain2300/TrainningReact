import React, { useState } from "react";

export default function FactorialNumber08() {
  const [number, Setnumber] = useState(0);
  const [fact, SetFactorial] = useState(0);
  let f = 1;

  const findFactorial = (e) => {
    Setnumber(parseInt(e?.target?.value));
  };
  const factorialValue = () => {
    for (let i = 1; i <= number; i++) {
      f * i;
    }
    SetFactorial(f);
  };

  return (
    <div>
      {/* <input type="text" placeholder='Enter a number :' onChange={(e)=> Setnumber(e?.target?.value)} /> */}
      <input
        type="text"
        placeholder="Enter a number :"
        onChange={(e) => findFactorial(e)}
      />
      <button onClick={factorialValue}>Calculate</button>
      {/* {number} */}
      {fact}
    </div>
  );
}
