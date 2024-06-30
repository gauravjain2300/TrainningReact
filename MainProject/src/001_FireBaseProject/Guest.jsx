import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useId, useState } from "react";
import { db } from "../FirebaseConfig";
import { useNavigate } from "react-router-dom";

export default function Guest() {
  const [allUser, setAllUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    const querySnapShot = await getDocs(collection(db, "Students"));
    console.log("----------->Querysnapshot", querySnapShot);

    const users = [];

    querySnapShot.forEach((doc) => {
      users.push({ uid: doc.id, ...doc.data() });
      setAllUsers(users);
    });
  };

  const deleteUser = async (userid) => {
    console.log("-------->deleteUser", userid);
    await deleteDoc(doc(db, "Students", userid)); // it will remove from firestore

    //remove from array
    const newArray = allUser.filter((user) => user.uid !== userid);

    setAllUsers(newArray);
    console.log(newArray);
  };

  return (
    <div>
      <h1>All Users</h1>

      <table border={2}>
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Email</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>

        <tbody>
          {allUser ? (
            allUser.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  {/* <td>img</td> */}
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button onClick={() => navigate(`/edit/${user.uid}`)}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button onClick={() => deleteUser(user.uid)}>Delete</button>
                  </td>
                </tr>
              );
            })
          ) : (
            <h1>No users Found</h1>
          )}
        </tbody>
      </table>
    </div>
  );
}
