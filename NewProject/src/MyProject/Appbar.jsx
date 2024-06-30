// import React from "react";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Card, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db, storage } from "../Firebase";
import { getDoc, setDoc, updateDoc } from "firebase/firestore";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect } from "react";
// import { auth, db } from "../Firebase";

import { getDownloadURL, uploadBytes, ref } from "firebase/storage";

import ViewAllPost from "./ViewAllPost";
import AddNewPost from "./AddNewPost";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function Appbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [MyPost, SetMyPost] = React.useState(false);
  const [Allpost, setAllPost] = React.useState(false);
  const [myprofile, Setmyprofile] = React.useState(false);
  const [newPost, setNewPost] = React.useState(false);
  const [userDetails, setUserDetails] = React.useState();
  const [profileUrl, setProfileUrl] = React.useState();
  const [uplodingStatus, setUploadingStatus] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [imageLink, setImageLink] = React.useState();
  const [post, setPost] = React.useState([]);
  const [postUsers, setPostUsers] = React.useState(null);

  ////From here starts All Post Data

  // -------------------------------------------------------------------------------------------------------------------------
  useEffect(() => {
    fetchUsers();
    fetchPostFun();
  }, []);

  const fetchUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "Users"));
    const users = {};
    // key : value
    // 784asd : Anjali
    querySnapshot.forEach((doc) => {
      const record = doc.data();
      console.log("======> Record ");
      // users[doc.id] = record.name;
      console.log("---> doc id : ", doc.id);
      users[doc.id] = record.name;
    });
    console.log("users : ", users);
    setPostUsers(users);
  };

  const fetchPostFun = async () => {
    const querySnapshot = await getDocs(collection(db, "Post"));
    const fetchPost = [];

    const current = auth.currentUser;
    querySnapshot.forEach((doc) => {
      const record = doc.data();
      //console.log("record ",record);
      if (record.userid === current.uid) {
        fetchPost.push({
          id: doc.id,
          title: record.title,
          description: record.description,
          image: record.image,
          userid: record.userid,
        });
      }
    });
    setPost(fetchPost);
  };
  const handleDelete = async (docid) => {
    console.log("---> delete ", docid);
    await deleteDoc(doc(db, "Post", docid));
    setPost(post.filter((item) => item.id !== docid));

    // navigate("/dashboard",{replace:true})
  };

  // const navigate = useNavigate();
  ////////////for adding new post
  const handleAddpost = async () => {
    const user = auth.currentUser;
    const storageRef = await ref(storage, `post/${user.uid}/${Date.now()}`);
    await uploadBytes(storageRef, imageLink);
    const downloadUrl = await getDownloadURL(storageRef);

    await setDoc(doc(db, "Post", `${Date.now()}`), {
      title: title,
      description: description,
      image: downloadUrl,
      userid: user.uid,
    });

    // navigate("/viewpost", { replace: true });
  };

  // ------------------------------------------------------------------------

  const handleNewPost = () => {
    setNewPost(!newPost);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    Setmyprofile(!myprofile);
    setAllPost(false);
    SetMyPost(false);
    setNewPost(false);
  };
  const handleopenmyprofile = () => {
    // Setmyprofile(!myprofile);
    setAllPost(!Allpost);
    Setmyprofile(false);
    SetMyPost(false);
    setNewPost(false);
  };

  const handleMyposts = () => {
    SetMyPost(!MyPost);
    Setmyprofile(false);
    setAllPost(false);
    setNewPost(false);
    // navigate("/myPost", { replace: true });
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // From here code starts
  const navigate = useNavigate();
  React.useEffect(() => {
    const subscirbe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchCurrentUserDetails(user);
      }
    });
  }, []);

  const fetchCurrentUserDetails = async (user) => {
    // const user = auth.currentUser;
    if (user) {
      const userData = await getDoc(doc(db, "Users", user.uid));
      console.log(`welcome dashboard   ${userData.data().name}`);
      console.log(`welcome dashboard   ${userData.data().profilepic}`);
      setUserDetails(userData.data());
    }
  };

  const hanldeLogout = async () => {
    await signOut(auth);
    navigate("/", { replace: true });
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    console.log("---->profileUrl", profileUrl);
    // setUploadingStatus(true);
    const user = auth.currentUser;
    const storageRef = await ref(storage, `profilepictures/${user.uid}`);
    // const storageRef = await ref(storage, `profilepictures/mypic`);
    await uploadBytes(storageRef, profileUrl);

    const downloadUrl = await getDownloadURL(storageRef);
    console.log("---> download URL ", downloadUrl);

    await updateDoc(doc(db, "Users", user.uid), {
      profilepic: downloadUrl,
    });

    const userData = await getDoc(doc(db, "Users", user.uid));
    setUserDetails(userData.data());

    setUploadingStatus(false);
  };
  return (
    <div style={{ backgroundColor: "#000000", height: "100vh" }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#ffbd39",
          color: "#000000",
          boxShadow: "10px 10px 35px -3px rgba(255,255,255,1)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
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
                color: "#000000",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="#000000"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem>
                  <Typography
                    textAlign="center"
                    sx={{ color: "white" }}
                    onClick={handleopenmyprofile}
                  >
                    All Posts
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center" sx={{ color: "white" }}>
                    Myposts
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#000000",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="#000000"
              >
                {/* <MenuIcon /> */}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem>
                  <Typography textAlign="center" sx={{ color: "white" }}>
                    All Posts
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center" sx={{ color: "white" }}>
                    Myposts
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#000000",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <MenuItem>
                <Typography
                  textAlign="center"
                  sx={{ color: "white" }}
                  onClick={handleopenmyprofile}
                >
                  All Posts
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography
                  textAlign="center"
                  sx={{ color: "white" }}
                  onClick={handleMyposts}
                >
                  Myposts
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography
                  textAlign="center"
                  sx={{ color: "white" }}
                  onClick={handleNewPost}
                >
                  New Post
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography
                  textAlign="center"
                  sx={{ color: "white" }}
                  onClick={hanldeLogout}
                >
                  Logout
                </Typography>
              </MenuItem>
            </Box>
            <Box>
              {" "}
              <Typography
                sx={{
                  fontWeight: "700",
                  marginRight: "50px",
                }}
              >
                Hello,{userDetails?.name}
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                  {/* < ></Avatar> */}
                  {userDetails?.profilepic ? (
                    <Avatar src={userDetails?.profilepic}></Avatar>
                  ) : (
                    <Avatar src="https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049569.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1707177600&semt=ais"></Avatar>
                  )}
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {myprofile && (
        <Box>
          <Typography
            variant="h2"
            sx={{
              color: "white",
              textAlign: "center",
              paddingTop: "50px",

              color: "#ffbd39",
              // paddingBottom: "30px",
              textShadow: "19px 22px 11px white;",
            }}
          >
            {" "}
            Your Profile
          </Typography>
          <Card className="card" sx={{ background: "" }}>
            <Box className="ds-top"></Box>
            <Box className="avatar-holder">
              {userDetails?.profilepic ? (
                <img src={userDetails?.profilepic}></img>
              ) : (
                <img src="https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049569.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1707177600&semt=ais"></img>
              )}
            </Box>
            <Box className="name">
              <a href="https://codepen.io/AlbertFeynman/" target="_blank">
                {/* {this.props.inputvalue} */}
              </a>
              <h6 title="Followers">
                <span className="followers">{userDetails.name}</span>
              </h6>
            </Box>

            <Box className="ds-info">
              <Box className="ds projects">
                <h6 title="Number of projects created by the user"></h6>
                <p>{userDetails.email}</p>
              </Box>
              <input
                type="file"
                onChange={(e) => setProfileUrl(e.target.files[0])}
                style={{ position: "absolute", top: "70px" }}
              ></input>
              <Button
                onClick={handleSubmit}
                sx={{
                  marginTop: "100px",
                  backgroundColor: "black",
                  height: "50px",
                  position: "absolute",
                  left: "20px",
                  width: "200px",
                }}
              >
                Uplod image
              </Button>
            </Box>
          </Card>
        </Box>
      )}

      {Allpost && (
        <Container>
          <Typography
            sx={{
              color: "white",
              textAlign: "center",
              color: "#ffbd39",
              // paddingBottom: "30px",
              textShadow: "19px 22px 11px white;",
            }}
            variant="h2"
          >
            All Posts
          </Typography>
          <Box
            className="scroll"
            sx={{
              // border: "1px solid crimson",
              height: "500px",
              position: "static",
              // backgroundColor: "#bec0c4",
              width: "70%",
              margin: "0 auto",
              // position: "absolute",
              overflow: "scroll",
              // overflowX: "hidden",
              padding: "10px",

              borderRadius: "20px",
              marginTop: "10px",
            }}
          >
            <ViewAllPost></ViewAllPost>
          </Box>
        </Container>
      )}

      {/* {MyPost && (
       
      )} */}

      {newPost && (
        <div>
          {/* //   <Typography
        //     variant="h2"
        //     sx={{
        //       color: "white",
        //       textAlign: "center",
        //       color: "#ffbd39",
        //       // paddingBottom: "30px",
        //       textShadow: "19px 22px 11px white;",
        //     }}
        //   >
        //     Add New Post
        //   </Typography>
        //   <Box
        //     sx={{
        //       backgroundColor: "#ffff",
        //       border: "1px solid white",
        //       height: "500px",
        //       borderRadius: "15px",
        //       width: "50%",
        //       margin: "0 auto",
        //       marginTop: "50px",
        //     }}
        //   >
        //     <TextField
        //       id="standard-basic"
        //       label="Enter Title"
        //       variant="standard"
        //       onChange={(e) => setTitle(e.target.value)}
        //       sx={{
        //         input: { color: "black" },
        //         label: { color: "#a9a9a9" },
        //         borderBottom: " 1px solid #ffbd39",
        //         color: "white",
        //         //   Width: "80%",
        //         width: "90%",
        //       }}
        //     />

        //     <TextField
        //       id="standard-basic"
        //       label="Enter description"
        //       variant="standard"
        //       onChange={(e) => setDescription(e.target.value)}
        //       sx={{
        //         input: { color: "black" },
        //         label: { color: "#a9a9a9" },
        //         borderBottom: " 1px solid #ffbd39",
        //         color: "white",
        //         //   Width: "80%",
        //         width: "90%",
        //       }}
        //     />
        //     {/* <TextField
        //       id="standard-basic"
        //       label="Enter Password"
        //       variant="standard"
        //       sx={{
        //         input: { color: "white" },
        //         label: { color: "#a9a9a9" },
        //         borderBottom: " 1px solid #ffbd39",
        //         color: "white",
        //         //   Width: "80%",
        //         width: "90%",
        //       }}
        //     /> */}
          {/* <input 
               type="file"
               onChange={(e) => setImageLink(e.target.files[0])}
             />
             <button onClick={handleAddpost}>Add Post</button>
          </Box>  */}
          <AddNewPost />
        </div>
      )}
      {MyPost && (
        <Container>
          <Typography
            sx={{
              color: "white",
              textAlign: "center",
              color: "#ffbd39",

              textShadow: "19px 22px 11px white;",
              marginTop: "10px",
            }}
            variant="h2"
          >
            My Posts
          </Typography>

          <Box
            className="scroll"
            sx={{
              border: "1px solid crimson",
              height: "500px",
              position: "static",
              width: "50%",
              margin: "0 auto",
              // position: "absolute",
              overflow: "scroll",
              // overflowX: "hidden",

              borderRadius: "20px",
              marginTop: "30px",
            }}
          >
            {post.map((singlePost, index) => {
              return (
                <Box class="Main-container" key={index}>
                  <Box class="wrapper">
                    <Box class="banner-image">
                      {" "}
                      <img
                        src={singlePost.image}
                        style={{
                          height: "300px",
                          width: "100%",
                          borderRadius: "10px",
                        }}
                      />{" "}
                    </Box>
                    <h1 className="Title"> {singlePost?.title}</h1>
                    <p className="description">{singlePost?.description}</p>
                  </Box>
                  <Box class="button-wrapper">
                    <button class="btn outline">DETAILS</button>
                    <button
                      class="btn fill"
                      onClick={() => handleDelete(singlePost.id)}
                    >
                      Delete
                    </button>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Container>
      )}

      {/* <Box class="Main-container" key={index}>
        <Box class="wrapper">
          <Box class="banner-image"> </Box>
          <h1 className="Title"> {singlePost.title}</h1>
          <p className="description">{singlePost.description}</p>
        </Box>
        <Box class="button-wrapper">
          <button class="btn outline">DETAILS</button>
          <button class="btn fill">BUY NOW</button>
        </Box>
      </Box> */}
    </div>
  );
}
