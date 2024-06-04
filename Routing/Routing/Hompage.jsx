import React from "react";
import { Link } from "react-router-dom";

export default function Hompage() {
  return (
    <div>
      <h1>Home page</h1>

      <Link to={"/contactus"}>
        <p>Click here for ContactUs</p>
      </Link>
    </div>
  );
}
