import React from "react";

import { Link, useNavigate } from "react-router-dom";

export default function Homepage01() {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/contact");
  };

  return (
    <div>
      <Link to={"/contact"}>
        <h3>Link: to contact page</h3>
      </Link>
      <Link to={"/about"}>
        <h3>Link: to About page</h3>
      </Link>

      <button onClick={handleButton}>Go to Contact Page</button>
      <button onClick={() => navigate("/about")}>Go to About Page</button>
      <button onClick={() => navigate(1)}>Navigate: go Next</button>
    </div>
  );
}
