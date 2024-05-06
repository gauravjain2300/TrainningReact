import React, { useState } from "react";
import "./TasksCss/Eleventh.css";

export default function Eleventh() {
  const [myarray, setMyArray] = useState([]); //blank array initilization
  const [Fruit, setFruit] = useState("");

  const handlesubmit = () => {
    setMyArray([...myarray, Fruit]);
    console.log(myarray);
    setFruit("");
  };

  return (
    <div className="Main-box">
      <div className="box">
        <input
          type="text"
          placeholder="Enter Fruit Name:"
          value={Fruit}
          onChange={(e) => setFruit(e?.target?.value)}
        />
        <img src="Vector1.png" alt="" className="Vector1" />
        <img src="Vector2.png" alt="" className="Vector2" />
        <img src="Vector3.png" alt="" className="Vector3" />
        <img src="Vector4.png" alt="" className="Vector4" />
        <br />
        <button onClick={handlesubmit}>ADD</button>

        <ul>
          {" "}
          {myarray.map((e, i) => {
            return <li key={i}>{e}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
