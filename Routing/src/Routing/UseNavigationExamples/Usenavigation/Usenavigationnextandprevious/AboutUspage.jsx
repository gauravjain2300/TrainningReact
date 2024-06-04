import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AboutUspage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>About Page</h1>

      <Link to={"/contact"}>Go to Contact</Link>
      <button onClick={() => navigate("/contact")}>
        Navigate:to Contact Page
      </button>
      <button onClick={() => navigate(-1)}>Navigate:to Contact Page</button>
      <button onClick={() => navigate()}>Navigate:to Contact Page</button>
    </div>
  );
}
