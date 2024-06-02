import React, { useEffect, useState } from "react";

export default function CRUDExample() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [city, setCity] = useState("");
  const [student, setStudent] = useState([]);

  const [editindex, seteditindex] = useState(null);

  let [change, setchange] = useState(true);

  useEffect(() => {
    // it will call once in a program after refresh

    let allRecords = JSON.parse(localStorage.getItem("Students")) || [];
    setStudent(allRecords);
    console.log(allRecords);
  }, []);

  let newstudent = { id: Date.now(), name, subject, city };
  const handlesubmit = (e) => {
    e.preventDefault();
    if (editindex !== null) {
      console.log("update");
      let updateStudents = [...student];
      updateStudents[editindex] = {
        id: student[editindex].id,
        name,
        subject,
        city,
      };
      setStudent(updateStudents);
      localStorage.setItem("Students", JSON.stringify(updateStudents));
    } else {
      setStudent([...student, newstudent]);
      localStorage.setItem(
        "Students",
        JSON.stringify([...student, newstudent])
      );

      console.log(student);
      setName("");
      setSubject("");
      setCity("");
    }
  };

  const handledelete = (index) => {
    console.log(`delete index =${index}`);

    let allnewData = student.filter((e, i) => i !== index);
    console.log(allnewData);
    setStudent(allnewData);
    localStorage.setItem("Students", JSON.stringify(allnewData));
  };

  const handleEdit = (index) => {
    setchange(!change);
    seteditindex(index);
    setName(student[index].name);
    setCity(student[index].city);
    setSubject(student[index].subject);
  };

  const handleUpdate = () => {
    // setchange(!change);
    // console.log(student[editindex]);
    let olddata = student[editindex];
    // console.log(olddata);
    // console.log(olddata);
    // setStudent([olddata]);
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={subject}
          placeholder="Enter Your Subject"
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Your City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        {change ? (
          <button type="submit"> Submit</button>
        ) : (
          <button type="submit" onClick={handleUpdate}>
            Update
          </button>
        )}
      </form>

      <table border={2} style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Subject</th>
            <th>City</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>

        <tbody>
          {student.map((e, i) => {
            return (
              <tr key={i}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.subject}</td>
                <td>{e.city}</td>
                <td>
                  <button onClick={() => handleEdit(i)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => handledelete(i)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
