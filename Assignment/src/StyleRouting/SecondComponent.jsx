import { Box } from "@mui/material";
import React from "react";

export default function SecondComponent() {
  return (
    <div>
      <main>
        <Box
          className="banner"
          sx={{
            width: "90%",
            height: "350px",
            margin: "20px auto",
            borderRadius: "15px",
          }}
        ></Box>
      </main>
    </div>
  );
}
