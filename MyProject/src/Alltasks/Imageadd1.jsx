import React, { useState } from "react";

export default function Imageadd1() {
  const [image, setImage] = useState("");

  const handlegetimage = () => {
    console.log("change");
    console.log(image);
  };

  const handleFileChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <img src="Cartoonboy.jpg" alt="" id="Profilepic" width={"20%"} />
      <img src={image} alt="" width={"20%"} />
      <input
        type="File"
        accept="image/jpeg,image/png, image/jpg"
        id="input-file"
        onChange={handleFileChange}
      />
      <button onClick={handlegetimage}> click here</button>
    </div>
  );
}
