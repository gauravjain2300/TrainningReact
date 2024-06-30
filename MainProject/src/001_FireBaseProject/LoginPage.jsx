import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../FirebaseConfig";

import { useNavigate } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
// import { Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredentials.user;
    console.log(user.uid);
    const userDoc = await getDoc(doc(db, "Students", user.uid));
    if (userDoc.exists) {
      console.log(userDoc.data());
      console.log(userDoc.data().name);
      alert(`welcome ${userDoc.data().name}`);
      navigate("/Dashboard", { replace: true });
    }

    console.log(user.uid);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button> Submit</button>
      </form>
    </div>
  );
}
