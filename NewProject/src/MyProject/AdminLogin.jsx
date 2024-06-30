import { Link } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../Firebase";
import { Box, TextField, Typography } from "@mui/material";
import { Button } from "reactstrap";

export default function AdminLogin() {
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
    const userDoc = await getDoc(doc(db, "Admin", user.uid));
    if (userDoc.exists) {
      console.log(userDoc.data());
      console.log(userDoc.data().name);
      alert(`welcome ${userDoc.data().name} `);
      navigate("/Admin", { replace: true });
    }
    console.log(user.uid);
  };
  return (
    <div>
      <div style={{ margin: "0", padding: "0", boxSizing: "border-box" }}>
        <div class="great">
          <section>
            {" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span>
            <div class="signin">
              <div class="content">
                <div
                  className="Container"
                  style={{
                    backgroundColor: "  #000000",
                    height: "100vh",
                    display: "flex",
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
                      left: "-390px",
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
                    Admin Login
                  </Typography>

                  <Box
                    sx={{
                      border: "1px solid #ffbd39",
                      width: "40%",
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

                    <Button
                      variant="contained"
                      color="success"
                      onClick={handleSubmit}
                      sx={{
                        width: "30%",
                        backgroundColor: "#ffbd39",
                        color: "white",
                        marginBottom: "30px",
                      }}
                    >
                      Submit
                    </Button>
                    <Link to={"/newuser"}>
                      <Typography sx={{ color: "white" }}>
                        Dont have an Account? Register
                      </Typography>
                    </Link>
                  </Box>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
