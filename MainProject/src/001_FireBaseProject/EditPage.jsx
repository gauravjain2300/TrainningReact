import { getDoc, doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../FirebaseConfig";

export default function EditPage() {
  const { uid } = useParams();
  const [name, setName] = useState();
  const [profilepic, setProfilepic] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetchuser();
  }, [uid]);

  const fetchuser = async () => {
    const userData = await getDoc(doc(db, "Students", uid));

    setName(userData.data().name);
    setProfilepic(userData.data().profilepic);
    setEmail(userData.data().email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateDoc(doc(db, "Students", uid), {
      name: name,
    });
    navigate("/Guest", { replace: true });
  };

  return (
    <div>
      <h3>edit User Details</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />

        <input type="text" value={email} placeholder="Enter Email" disabled />
        {/* <input type="text" />
<input type="text" /> */}

        <button>Update</button>
      </form>
    </div>
  );
}
