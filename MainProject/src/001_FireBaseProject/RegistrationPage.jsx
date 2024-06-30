import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { auth, db } from "../FirebaseConfig";
import { useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function RegistrationPage() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [msg, setMsg] = useState();

  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hello");
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredentials.user;
    console.log(user);

    if (user) {
      await setDoc(doc(db, "Students", user.uid), {
        name: name,
        email: email,
      });
    }

    console.log("--------------------Submit button clicked");

    // const userCredentials = await createUserWithEmailAndPassword(
    //   auth,
    //   email,
    //   password
    // );
  };

  return (
    <div>
      <form onClick={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
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

        <button>Submit</button>
      </form>

      <p onClick={() => navigate("/login", { replace: true })}>
        Already Registered?? login
      </p>
      <Link to={"/Guest"}>
        <p>Guest Users</p>
      </Link>
    </div>
  );
}
