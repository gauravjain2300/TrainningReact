import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigation = useNavigate();

  const handlebtn = () => {
    navigation("/Contact");
  };

  return (
    <div>
      <h1>This is Home page</h1>
      <button onClick={handlebtn}>Go to Contact page</button>
    </div>
  );
}
