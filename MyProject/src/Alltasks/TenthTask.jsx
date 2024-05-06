import React, { useState } from "react";

export default function TenthTask() {
  const [changebtn, SetChangebtn] = useState("white");

  const Allcolor = ["red", "blue", "black", "purple"];

  const Alltext = ["White", "black", "blue", "red"];

  const Random = () => {
    const Randomcolor = Math.floor(Math.random() * Allcolor.length);
    const Textcolor = Math.floor(Math.random() * Alltext.length);

    SetChangebtn(Randomcolor);
    console.log(Randomcolor);
    SetChangebtn(Textcolor);
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: Allcolor[changebtn],
          width: "200px",
          height: "50px",
          color: Alltext[changebtn],
          borderRadius: "10px",
          fontWeight: "900",
        }}
        onClick={Random}
      >
        Change color
      </button>
    </div>
  );
}
