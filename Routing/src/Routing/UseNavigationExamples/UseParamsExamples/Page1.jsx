import React from "react";
import { Link } from "react-router-dom";

export default function Page1() {
  return (
    <div>
      <h1>Page1</h1>

      <Link to={"/page/1"}>Id send to second page2</Link>
      <br />
      <Link to={"/page/2"}>Id 2 send to second page2</Link>

      <br />
      <Link to={"/page/101/ReactJs"}>Id send to second page2</Link>
    </div>
  );
}
