import React, { useState } from "react";

export default function Inpvalue() {
  const [username, setUsername] = useState("");

  const [data, setData] = useState("");

  let submit = () => {
    setData(username);
    setUsername("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <h1>{data}</h1>
      <button onClick={submit}>Submit</button>
    </div>
  );
}
