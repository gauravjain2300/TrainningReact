import React, { useState } from "react";

export default function LocalStorage01() {
  const [name, setName] = useState("");
  const [subject, setsubject] = useState("");

  const Click = () => {
    console.log("clicked");

    localStorage.setItem(name, subject);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="EnterName"
        onChange={(e) => setName(e?.target?.value)}
      />
      <input
        type="text"
        placeholder=""
        onChange={(e) => {
          setsubject(e?.target.value);
        }}
      />

      <button onClick={Click}>Click</button>
    </div>
  );
}
