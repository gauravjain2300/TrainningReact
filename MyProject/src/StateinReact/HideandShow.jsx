import React from "react";
import { useState } from "react";

export default function HideandShow() {
  const [isVisible, setVisible] = useState(false);

  const handlebutton = () => {
    // if (isVisible) {
    //   setVisible(false);
    // } else {
    //   setVisible(true);
    // }
    // or we can do this
    // setVisible(!isVisible);
  };

  return (
    <div>
      {isVisible ? <h1>Hello I am visible</h1> : <h2>h1 is now hidden</h2>}
      <button onClick={() => setVisible(!isVisible)}>Change</button>
    </div>
  );
}
