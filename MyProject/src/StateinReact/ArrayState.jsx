import React, { useState } from "react";

export default function ArrayState() {
  const [myarray, setMyArray] = useState([]); //blank array initilization
  const [subject, setSubject] = useState("");

  const handlesubmit = () => {
    setMyArray([...myarray, subject]);
    console.log(myarray);
    setSubject("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter subject"
        value={subject}
        onChange={(e) => setSubject(e?.target?.value)}
      />
      <button onClick={handlesubmit}>ADD</button>
      <br />
      <br />
      {myarray.map((e, i) => {
        return <h3 key={i}>{e}</h3>;
      })}
    </div>
  );
}
