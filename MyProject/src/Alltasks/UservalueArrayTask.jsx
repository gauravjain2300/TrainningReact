import React from "react";
import { useState } from "react";
import ChildarrayTask from "./ChildarrayTask";
import "../Alltasks/TasksCss/Userinfo.css";

export default function UservalueArrayTask() {
  const [name, SetName] = useState("");
  const [subject, setsubject] = useState("");
  const [city, setCity] = useState("");
  const Mainarray = [{ name: name, subject: subject, City: city }];
  const [login, setLogin] = useState(false);
  const [id, setid] = useState(0);

  const submit = () => {
    console.log("Gaurav");
    console.log(Mainarray);
    setLogin(true);
    setid(id + 1);
  };

  return (
    <div className="Userinfo">
      <input
        type="text"
        placeholder="Enter Your name"
        onChange={(e) => {
          SetName(e.target.value);
        }}
        className="username"
      />

      <input
        type="text"
        placeholder="Enter Your subject"
        className="username"
        onChange={(e) => {
          setsubject(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter Your City"
        className="username"
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <br />

      <button onClick={submit} className="btn">
        {" "}
        Submit
      </button>

      {login && <ChildarrayTask userinfo={Mainarray} />}
    </div>
  );
}
