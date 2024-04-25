import React from "react";
import Profile from "./Profile";
import Login from "./Login";

export default function Ifelse() {
  const isloggedin = false;

  if (isloggedin) {
    return <Profile />;
  } else {
    return <Login />;
  }
}
