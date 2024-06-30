import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../FirebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [userDetails, setUserdetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchCurrentuserDetails(user);
      }
    });
  }, []);

  const fetchCurrentuserDetails = async (user) => {
    // const user = auth.currentUser;
    if (user) {
      const userData = await getDoc(doc(db, "Students", user.uid));
      console.log(`welcome dashboard ${userData.data().name}`);

      setUserdetails(userData.data());
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login", { replace: true });
  };

  return (
    <div>
      {userDetails ? (
        <h1>Welcome {userDetails.name}</h1>
      ) : (
        <h1>loading.....</h1>
      )}

      <button onClick={handleLogout}>Logout?</button>
    </div>
  );
}
