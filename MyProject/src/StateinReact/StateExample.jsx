import React, { useState } from "react";

export default function StateExample() {
  // What is state?
  // what is use State
  //useState is a hook which is return stateful value and function - using that function we can change state

  // const [property,propertychangemethod]
  //what is return value of use state
  //ans. use state return statefull value return which contain stateful value and function that can change state of variable

  // in react js class component is use for setState fir state modification

  const [count, setCount] = useState(100); //UseState(initialstate) or default value

  const handlerButton = () => {
    console.log("button clicked");
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Hello{count}</h1>

      <button onClick={handlerButton}>Change</button>
    </div>
  );
}
