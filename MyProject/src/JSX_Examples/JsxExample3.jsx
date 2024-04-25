import React from "react";
import Profile from "./Profile";
import Login from "./Login";

export default function JsxExample3() {
  const isloggin = false;
  return;

  // <div>ternary operator or condition operator
  // ternary operator divided in 3 parts ternary operator represent with?:
  // Syntax: exp1? exp2: exp3

  // if expl true it will execute exp2 otherwise it will excute exp3
  // </div>

  {
    isloggin ? <Profile /> : <Login />;
  }
}
