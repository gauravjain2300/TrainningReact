import { Box, Button, TextField, Typography } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../Firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function NewUser() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [msg, setMsg] = useState();
  const navigate = useNavigate();

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
      await setDoc(doc(db, "Users", user.uid), {
        name: name,
        email: email,
      });

      console.log("successfully record inserted");
      setMsg("successfully record inserted");
    }

    console.log("--------------------Submit button clicked");
    navigate("/appbar", { replace: true });
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: "  #000000",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center ",
          flexDirection: "column",
          position: "relative",
        }}
      >
        {/* <img
          src="box.png"
          alt=""
          style={{
            position: "absolute",
            top: "10px",
            left: "-145px",
            bottom: "-150px",
            zIndex: "10px",
          }}
        /> */}
        <Typography
          sx={{
            color: "#ffbd39",
            paddingBottom: "30px",
            textShadow: "19px 22px 11px white;",
            // textshadow: "16px 22px 11px #a9a9a9",
          }}
          variant="h3"
        >
          Sign up here
        </Typography>
        <div
          style={{
            backgroundColor: "#ffbd39",
            width: "80%",
            height: "600px",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",

            alignItems: "center",
            position: "relative ",
            // boxShadow: "-18px 18px 157px 33px rgba(255,189,57,0.75)",
          }}
        >
          <Box
            sx={{
              border: "5px solid black",
              width: "50%",
              backgroundColor: "#000000",
              display: "flex",
              // justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              borderRadius: "20px",
              height: "500px",
              padding: "20px",
              //   boxShadow: " 10px 10px 5px 0px rgba(169,169,169,0.4);",
              boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
            }}
          >
            <TextField
              id="standard-basic"
              label="Enter Name"
              variant="standard"
              sx={{
                label: { color: "#a9a9a9" },
                borderBottom: " 1px solid #ffbd39",

                width: "90%",

                marginTop: "50px",
                input: { color: "white" },
              }}
              onChange={(e) => setName(e.target.value)}
            />

            <TextField
              id="standard-basic"
              label="Enter Email id"
              variant="standard"
              sx={{
                label: { color: "#a9a9a9" },
                borderBottom: " 1px solid #ffbd39",
                input: { color: "white" },
                width: "90%",
                color: "-moz-initial",
                color: "white",
                marginTop: "50px",
              }}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              id="standard-basic"
              label="Enter Password"
              variant="standard"
              sx={{
                label: { color: "#a9a9a9" },
                borderBottom: " 1px solid #ffbd39",
                color: "white",
                width: "90%z",
                input: { color: "white" },
                color: "-moz-initial",
                color: "white",
                marginTop: "50px",
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
              style={{
                paddingRight: "120px",
                height: "50px",
                color: "white",
              }}
            />

            <Button
              variant="contained"
              color="success"
              size="large"
              sx={{
                width: "30%",
                backgroundColor: "#ffbd39",
                color: "white",
                marginTop: "30px",
                borderRadius: "10px",
              }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Box>
          {msg && <p style={{ color: "green" }}>{msg}</p>}
        </div>
      </div>
    </div>
  );
}
