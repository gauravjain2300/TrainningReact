import React from "react";
import { useState } from "react";
import ChildComponent04 from "./ChildComponent04";

export default function ParentComponent04() {
  const [islogin, setlogin] = useState(false);
  const [msg, setMessage] = useState("My react Msg");

  const handleclick = () => {
    console.log("Clickeed");
    console.log(islogin);
    setlogin(!islogin);
  };

  return (
    <div>
      <button onClick={handleclick}> Clickhere</button>

      {islogin && <ChildComponent04 msg={msg} />}
    </div>
  );
}
