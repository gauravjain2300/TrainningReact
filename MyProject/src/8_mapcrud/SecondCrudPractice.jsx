import React, { useState } from "react";

export default function SecondCrudPractice() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [subject, setSubject] = useState("");

  // const [recrods, setRecords] = useState([]);

  const handlsesubmit = (e) => {
    console.log("Clicked");
    e.preventDefault();
    records = [{ name, city, subject }];
  };

  return (
    <div>
      <form action="" onSubmit={handlsesubmit}>
        <input
          type="text"
          placeholder="Enter Your  Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Your City"
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Your Subject"
          onChange={(e) => setSubject(e.target.value)}
        />

        <button>Submit</button>
      </form>

      <table border={2}>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Subject</th>
            <th colSpan={2}> Action</th>
          </tr>
        </thead>

        <tbody>
          {records.map((e, i) => {
            return (
              <tr key={i}>
                <td>{e.name}</td>
                <td>{e.subject}</td>
                <td>{e.city}</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
