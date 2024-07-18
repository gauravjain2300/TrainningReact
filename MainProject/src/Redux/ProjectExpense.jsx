import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddBudget, AddExpense } from "./Features/Expense";

export default function ProjectExpense() {
  const [add, setAdd] = useState(false);
  const [amount, setAmount] = useState("");
  const [count, setCount] = useState("");
  const [des, setDes] = useState("");
  const [itemname, setItemName] = useState("");
  const [itemamount, setItemAmount] = useState("");

  const dispatch = useDispatch();

  const handlesubmit = () => {
    dispatch(AddBudget(amount));
  };

  const budget = useSelector((state) => {
    return state.expensekey.budget;
  });

  const handleExpense = () => {
    dispatch(AddExpense({ itemname, itemamount }));

    dispatch({
      type: "Remaining-Amount",
      payload: { budget: parseInt(budget) - parseInt(itemamount) },
    });
  };

  const RemainingAmn = useSelector((state) => {
    return state.extrakey.amount;
  });

  const Expense = useSelector((state) => {
    // console.log(state.expensekey.Expense);
    return state.expensekey.expenses;
  });

  return (
    <div>
      <div
        style={{
          backgroundImage: "url(bg.jpg)",
          height: "100vh",

          color: "white",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h1 style={{ textAlign: "center", fontSize: "50px" }}>
          Money Management
        </h1>
        <div className="main-wrap">
          <div className="Wrapper">
            <h1>Income</h1>
            <input
              type="text"
              placeholder="Add Budeget"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
            />
            <br />
            <br />
            <button onClick={handlesubmit}>Submit</button>
          </div>
          <div className="Wrapper">
            <h1>Expense</h1>
            <input
              type="text"
              placeholder="Add Item name"
              onChange={(e) => setItemName(e.target.value)}
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="Add Expense"
              onChange={(e) => setItemAmount(e.target.value)}
            />
            <br />
            <br />
            <button onClick={handleExpense}>Submit</button>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {" "}
          <h1> Total Amount: {budget}</h1>
          <h1> Remaining Amount :{RemainingAmn}</h1>
        </div>

        <table
          border={2}
          style={{
            width: "100%",
            marginTop: "50px",
            border: "1px solid white",
          }}
        >
          <thead>
            <th>Item Name</th>
            <th>Item Price</th>
            {/* <th>Item</th>
            <th>Item</th>
            <th>Item</th> */}
          </thead>

          <tbody style={{ textAlign: "center", fontWeight: "bold" }}>
            {Expense.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{e.itemname}</td>
                  <td>{e.itemamount}</td>
                </tr>
              );
            })}{" "}
            {/* <tr></tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
