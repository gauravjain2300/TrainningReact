import React, { useState } from "react";

export default function FirstNameLastName() {
  const [fname, setFname] = useState("");
  const [Lname, setLname] = useState("");

  const [data, setData] = useState("");

  let submit = () => {
    setData("Hello ," + fname + "  " + Lname);
    setFname("");
    setLname("");
  };

  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        placeholder="First Name"
        onChange={(e) => setFname(e.target.value)}
        value={fname}
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="Last Name"
        onChange={(e) => setLname(e.target.value)}
        value={Lname}
      />

      <h1>{data}</h1>
      <button onClick={submit}>Submit</button>
    </div>
  );
}
