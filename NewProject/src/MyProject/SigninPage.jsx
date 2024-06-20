import { BorderBottom } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

export default function SigninPage() {
  return (
    <div style={{ margin: "0", padding: "0", boxSizing: "border-box" }}>
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
          style={{ position: "absolute", left: "-390px", height: "550px" }}
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
            label="Enter Name"
            variant="standard"
            sx={{
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
            sx={{
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
            sx={{
              width: "30%",
              backgroundColor: "#ffbd39",
              color: "white",
              marginBottom: "30px",
            }}
          >
            Submit
          </Button>
          <Typography sx={{ color: "white" }}>
            Dont have an Account? Register
          </Typography>
        </Box>
      </div>
    </div>
  );
}
