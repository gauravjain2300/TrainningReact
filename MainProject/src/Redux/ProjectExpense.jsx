import { Box, TextField } from "@mui/material";
import React from "react";

export default function ProjectExpense() {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(9835.jpg)",
          height: "100vh",
          // width: "100%",
          color: "white",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="main-wrap">
          <div className="Wrapper">
            <h1>Income</h1>
            <input type="text" placeholder="Add Budeget" />
            <br />
            <button>Submit</button>
          </div>
          <div className="Wrapper">
            <h1>Expense</h1>'
            <input type="text" placeholder="Add Item name" />
            <br />
            <input type="text" placeholder="Add Expense" />
            <br />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
