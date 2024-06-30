import {
  AppBar,
  Box,
  IconButton,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Container } from "reactstrap";
// import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";

export default function UserDashboard() {
  return (
    <div
      style={{
        backgroundColor: "#000000",
        height: "100vh",
      }}
    >
      <AppBar sx={{ backgroundColor: "#ffbd39" }}>
        {" "}
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              gap: "20px",
              justifyContent: "space-around",
            }}
          >
            {/* //<AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
            {/* <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#ffbd39",
                textDecoration: "none",
              }}
            > */}
            <img src="vite.svg" alt="" />

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                Hello
              </IconButton>
              <Menu
                id="menu-appbar"
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                Page
              </Menu>
            </Box>
            <Box sx={{ display: "flex", gap: "20px" }}>
              {" "}
              <Typography sx={{ color: "#000000" }} variant="h6">
                All Post
              </Typography>
              <Typography sx={{ color: "#000000" }} variant="h6">
                My Post
              </Typography>
              <Typography sx={{ color: "#000000" }} variant="h6">
                Add Post
              </Typography>
            </Box>

            <Box
              sx={{
                border: "1px solid white",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src="box.png" alt="" width={"100%"} />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
