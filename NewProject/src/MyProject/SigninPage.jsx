import { BorderBottom } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
// import React from "react";
import NewUser from "./NewUser";
import { Link } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../Firebase";

export default function SigninPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const usercreditentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = usercreditentials.user;
    const userDoc = await getDoc(doc(db, "Users", user.uid));
    if (userDoc.exists) {
      console.log(userDoc.data());
      console.log(userDoc.data().name);
      alert(`welcome ${userDoc.data().name} `);
      navigate("/appbar", { replace: true });
    }
    console.log(user.uid);
  };
  return (
    <div style={{ margin: "0", padding: "0", boxSizing: "border-box" }}>
      <div class="great">
        <section>
          {" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span> <span></span> <span></span> <span></span> <span></span>
          <div class="signin">
            <div class="content">
              <div
                className="Container"
                id="app"
                style={{
                  backgroundColor: "  #000000",
                  height: "500px",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative ",
                }}
              >
                <img
                  src="wall.png"
                  alt=""
                  style={{
                    position: "absolute",
                    right: "520px",
                    height: "550px",
                  }}
                />
                <Typography
                  sx={{
                    color: "#ffbd39",
                    paddingBottom: "30px",
                    textShadow: "19px 22px 11px white;",
                    // textshadow: "16px 22px 11px #a9a9a9",
                  }}
                  variant="h3"
                >
                  Login here
                </Typography>

                <Box
                  sx={{
                    // border: "1px solid #ffbd39",
                    width: "100%",
                    display: "flex",
                    // justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    borderRadius: "20px",
                    height: "500px",
                    padding: "20px",
                    boxShadow: " 10px 10px 5px 0px rgba(169,169,169,0.4);",
                  }}
                >
                  <TextField
                    id="standard-basic"
                    label="Enter Email "
                    onChange={(e) => setEmail(e.target.value)}
                    variant="standard"
                    sx={{
                      input: { color: "white" },
                      label: { color: "#a9a9a9" },
                      borderBottom: " 1px solid #ffbd39",
                      color: "white",
                      width: "90%",
                      color: "-moz-initial",
                      color: "white",
                      marginTop: "50px",
                    }}
                  />
                  <br />
                  <TextField
                    id="standard-basic"
                    label="Enter Password"
                    variant="standard"
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{
                      input: { color: "white" },
                      label: { color: "#a9a9a9" },
                      borderBottom: " 1px solid #ffbd39",
                      color: "white",
                      //   Width: "80%",
                      width: "90%",
                    }}
                  />

                  <br />

                  {/* <Button
                    variant="contained"
                    color="success"
                    
                    sx={{
                      
                    }}
                  >
                    Submit
                  </Button> */}
                  <button
                    onClick={handleSubmit}
                    style={{
                      width: "30%",
                      backgroundColor: "#ffbd39",
                      color: "white",
                      height: "50px",
                      borderRadius: "20px",

                      marginBottom: "30px",
                    }}
                  >
                    Submit
                  </button>
                  <Link to={"/newuser"}>
                    <Typography sx={{ color: "white" }}>
                      Dont have an Account? Register
                    </Typography>
                    <br />
                  </Link>
                  <Typography
                    sx={{ color: "white" }}
                    onClick={() => {
                      navigate("/Adminlogin", { replace: true });
                    }}
                  >
                    Admin login
                  </Typography>
                </Box>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
