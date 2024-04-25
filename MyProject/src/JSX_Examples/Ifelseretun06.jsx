import React from "react";
import Profile from "./Profile";
import Login from "./Login";

export default function Ifelseretun06() {
  let element;
  const isloggedin = true;

  if (isloggedin) {
    element = <Profile />;
  } else {
    element = <Login />;
  }

  return element;
}
