import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUsername } from "./Features/Counter";

export default function ReduxComponents() {
  const [name, setName] = useState("");
  let dispatch = useDispatch();
  let data = useSelector((state) => {
    return state.counterkey.username;
  });
  const saveHandler = () => {
    dispatch(updateUsername(name));
    // setName("");
  };

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />

      <h1>{data}:Name</h1>
      <button onClick={saveHandler}> Submit</button>
    </div>
  );
}
