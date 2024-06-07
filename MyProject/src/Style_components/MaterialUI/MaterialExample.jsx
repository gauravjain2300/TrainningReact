import { Box, Button } from "@mui/material";
import React from "react";

// import { Delete, Edit } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

export default function MaterialExample() {
  return (
    <div>
      <button>Base Ui Button</button>
      <Button>Material UI</Button>

      <Box sx={{ "& button": { m: 1 } }}>
        <Button variant="text">Text button</Button>
        <Button variant="outlined">Text button</Button>
        <Button variant="contained">Text button</Button>
      </Box>

      <Box sx={{ "& button": { m: 1 } }}>
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          large
        </Button>
      </Box>

      <Box sx={{ "& button": { m: 1 } }}>
        <Button variant="outlined" size="medium" startIcon={<Edit />}>
          Medium
        </Button>
        <Button variant="outlined" size="medium" startIcon={<Delete />}>
          Medium
        </Button>
      </Box>
    </div>
  );
}
