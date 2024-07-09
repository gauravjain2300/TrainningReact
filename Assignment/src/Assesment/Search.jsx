import { TextField } from "@mui/material";
import React, { useState } from "react";

export default function Search() {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState([
    "apple",
    "banana",
    "orange",

    "pineapple",
    "watermelon",
    "mango",
  ]);
  const Fruits = search.filter((item) => item.includes(input));
  return (
    <div
      style={{
        backgroundColor: "Orange",
        width: "50%",
        height: "500px",
        margin: "50px auto",
        borderRadius: "15px",
        textAlign: "center",
        padding: "20px 0",
        color: "white",
      }}
    >
      <TextField
        value={input}
        onChange={(e) => setInput(e.target.value)}
        label=" Fruits"
        variant="outlined"
        sx={{ fontWeight: "900" }}
      ></TextField>
      <ul>
        {Fruits.map((e, i) => {
          return (
            <li
              onClick={(e) => setInput(e.target.textContent)}
              style={{
                listStyle: "none",
                fontWeight: "900",
                cursor: "pointer",
                margin: "5px ",
              }}
              key={i}
            >
              {e}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
