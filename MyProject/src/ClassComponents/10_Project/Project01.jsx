import React, { useState } from "react";
import "./../10_Project/Project01.css";

export default function () {
  const [name, setname] = useState("");
  const [subject, setSubject] = useState("");
  const [city, setCity] = useState("");
  const [Priority, setPriority] = useState("");
  // const [low, Setlow] = useState("");
  // const [medium, Setmedium] = useState("");
  // const [high, Sethigh] = useState("");

  const [editindex, seteditindex] = useState(null);
  const [status, setStatus] = useState(false);
  const [recrods, setRecords] = useState([]);

  //   const handlesubmit{
  const handlecomplete = () => {
    console.log("true");
    setStatus(true);
  };

  //     setRecords([...recrods,newRecords])

  //   }\
  const handlesubmit = (e) => {
    e.preventDefault();
    const newRecords = { name, subject, Priority };

    if (editindex != null) {
      //Update
      const updateRecord = [...recrods];

      updateRecord[editindex] = newRecords;
      setRecords(updateRecord);
    } else {
      setRecords([...recrods, newRecords]);
    }

    setname("");
    setCity("");
    setSubject("");
  };

  const handledelete = (index) => {
    console.log(index);
    const lastRecords = recrods; //fetch all records
    console.log("beforedelete", lastRecords);

    lastRecords.splice(index, 1); //remove selected index record
    console.log("---", lastRecords);
    setRecords([...lastRecords]);
  };

  const handleedit = (index) => {
    // console.log(index);
    const FetchData = recrods[index];
    +setname(FetchData.name);
    setSubject(FetchData.subject);
    setCity(FetchData.city);
    seteditindex(index);
    // if()
  };

  return (
    <div className="Main-box">
      <img src="hide.png" alt="" className="wall" />
      <div className="Container-wrapper">
        <form onSubmit={handlesubmit}>
          <div className="Allinput">
            <input
              type="text"
              value={name}
              placeholder="Enter Employee  Name"
              onChange={(e) => setname(e.target.value)}
            />
            {/* <label htmlFor="">Username</label> */}
            <input
              type="text"
              placeholder="Enter your Task"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <input
              type="date"
              value={city}
              placeholder="Enter Date"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="priority">
            <p>Priority:</p>

            <label htmlFor="">Low</label>
            <input
              type="radio"
              value="Low"
              onChange={(e) => setPriority(e.target.value)}
            />
            <label htmlFor="">Medium</label>
            <input
              type="radio"
              value="Medium"
              onChange={(e) => setPriority(e.target.value)}
            />
            <label htmlFor="">High</label>
            <input
              type="radio"
              value="High"
              onChange={(e) => setPriority(e.target.value)}
            />
          </div>

          <button
            style={{
              width: "150px",
              height: "50px",
              backgroundColor: "",
              borderRadius: "20px",
              background: "rgb(94,147,144)",
              // background:
              //   " radial-gradient(circle, rgba(94,147,144,1) 0%, rgba(13,13,13,1) 95%)",
              color: "white",
              fontWeight: "900",
              marginTop: "80px",
            }}
          >
            {editindex != null ? "Update" : "Submit"}
          </button>
        </form>
      </div>

      <table class="container">
        <thead>
          <tr>
            <th>
              <h1>Employee Name</h1>
            </th>
            <th>
              <h1>All Task</h1>
            </th>
            <th>
              <h1>Date</h1>
            </th>
            <th>
              <h1>Priority</h1>
            </th>
            <th>
              <h1>Pending</h1>
            </th>
            <th>
              <h1>Pending/Completed</h1>
            </th>
            <th colSpan={2}>
              <h1>Action</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          {recrods.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.subject}</td>
                <td>{item.Priority}</td>
                <td>
                  <button onClick={() => handlecomplete(index)}>
                    Completed?
                  </button>
                </td>
                <td>{status ? "Completed" : "Pending"}</td>
                <td>
                  <button
                    onClick={() => {
                      handleedit(index);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button onClick={() => handledelete(index)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
  // </div>
}
