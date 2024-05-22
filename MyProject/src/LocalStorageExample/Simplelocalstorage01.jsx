import React, { useState } from "react";

export default function Simplelocalstorage01() {
  const [name, setName] = useState("");
  const [subject, setsubject] = useState("");
  const [msg, setMsg] = useState("");
  const handlesubmit = () => {
    localStorage.setItem(name, subject);
    setMsg("Successfully Record added");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name :"
        onChange={(e) => setName(e?.target?.value)}
      />
      <input
        type="text"
        placeholder="Enter subject :"
        onChange={(e) => setsubject(e?.target?.value)}
      />
      <button onClick={handlesubmit}>submit</button>

      <p>{msg}</p>
    </div>
  );
}
