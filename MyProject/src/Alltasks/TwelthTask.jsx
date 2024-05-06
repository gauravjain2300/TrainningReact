import React, { useState } from "react";
import "../Alltasks/TasksCss/Twelth.css";

export default function TwelthTask() {
  const [myarray, setMyArray] = useState([]);
  const [Fruit, setFruit] = useState("");
  const [reverse, setreverse] = useState([]);

  const handlesubmit = () => {
    setMyArray([...myarray, Fruit]);
    console.log(myarray);
    setFruit("");
  };

  const Reverse = () => {
    setreverse([...myarray].reverse());
  };

  return (
    <div className="Main-Wrapper">
      <div className="Wrapping">
        <div className="Wrapper ">
          <div
            style={{
              border: "1px solid  white",
              width: "500px",
              height: "500px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              borderRadius: "10px",
              color: "white",
            }}
          >
            <input
              type="text"
              placeholder="Enter Fruit Name:"
              value={Fruit}
              onChange={(e) => setFruit(e?.target?.value)}
            />
            <br />
            <button
              style={{
                border: "1px solid  white",
                height: "50px",
                width: "150px",
                borderRadius: "20px",
                marginBottom: "20px",
                marginTop: "10px",
              }}
              onClick={handlesubmit}
            >
              ADD
            </button>
            <button
              style={{
                border: "1px solid white",
                height: "50px",
                width: "150px",
                borderRadius: "20px",
                marginBottom: "50px",
              }}
              onClick={Reverse}
            >
              Reverse
            </button>
          </div>
          <div
            style={{
              border: "1px solid white",
              height: "500px",
              width: "500px",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "5px 4+px 12px 8px white",
            }}
          >
            <ul
              style={{
                listStyle: "none",
                paddingTop: "50px",
                fontSize: "20px",
                color: "white",
              }}
            >
              {myarray.map((e, i) => {
                return <li key={i}>{e}</li>;
              })}
            </ul>
          </div>

          <div className="myul">
            <ul
              style={{
                listStyle: "none",
                paddingTop: "50px",
                fontSize: "20px",
                color: "white",
              }}
            >
              {reverse.map((e, i) => {
                return <li key={i}>{e}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
  //   )
}
