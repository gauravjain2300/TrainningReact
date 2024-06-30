// import React from "react";
import React, { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import PeopleIcon from "@mui/icons-material/People";
import FeedIcon from "@mui/icons-material/Feed";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "../Firebase";
import { arrayUnion, updateDoc } from "firebase/firestore";

import { auth } from "../Firebase";
// import { Typography } from "@mui/material";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function AdminDashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [AllUsers, SetAllusers] = useState(false);

  const [usersdata, setUsersdata] = useState(null);
  const [Allpost, setAllPost] = useState(false);

  const [allUsers, setAllUsers] = useState([]);
  const [post, setPost] = useState([]);
  const [postUsers, setPostUsers] = useState(null);

  const [newComment, setNewComment] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    fetchUsers();
    fetchPostFun();
  }, []);

  const handleAllpost = () => {
    setAllPost(!Allpost);
  };

  const fetchUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "Users"));
    const users = {};
    // key : value
    // 784asd : Anjali
    querySnapshot.forEach((doc) => {
      const record = doc.data();
      console.log("======> Record ", record);
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

    querySnapshot.forEach((doc) => {
      const record = doc.data();
      //console.log("record ",record);
      fetchPost.push({
        id: doc.id,
        title: record.title,
        description: record.description,
        image: record.image,
        userid: record.userid,
        likes: record.likes || [],
        comments: record.comments || [],
        createdAt: timeAgo(record.timestamp),
      });
    });
    setPost(fetchPost);
  };

  const timeAgo = (timestamp) => {
    const now = Date.now();
    const seconds = Math.floor((now - timestamp) / 1000);

    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
      return `${interval} years ago`;
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return `${interval} months ago`;
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return `${interval} days ago`;
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return `${interval} hours ago`;
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return `${interval} minutes ago`;
    }
    return `${Math.floor(seconds)} seconds ago`;
  };

  const handleDelete = async (docid) => {
    console.log("---> delete ", docid);
    await deleteDoc(doc(db, "Post", docid));
    setPost(post.filter((item) => item.id !== docid));

    // navigate("/dashboard",{replace:true})
  };

  const handleLike = async (postid) => {
    const specific_post = await getDoc(doc(db, "Post", postid));

    const postDataLikeList = (await specific_post.data().likes) || [];

    console.log("---> postdata ", postDataLikeList);

    const user = auth.currentUser;

    if (postDataLikeList.includes(user.uid)) return;

    console.log("----> adding 1 like");

    await updateDoc(doc(db, "Post", postid), {
      likes: [...postDataLikeList, user.uid],
    });

    const updatePost = await post.map((post) =>
      post.id === postid ? { ...post, likes: [...post.likes, user.uid] } : post
    );

    setPost(updatePost);
  };
  const handleComment = async (postid) => {
    const user = auth.currentUser;
    console.log("---> postid ", postid);
    const newCommentObj = {
      text: newComment,
      userid: user.uid,
      timestamp: Date.now(),
    };
    await updateDoc(doc(db, "Post", postid), {
      comments: arrayUnion(newCommentObj),
    });
    setNewComment("");
    const updateCommentPost = await post.map((post) =>
      post.id === postid
        ? { ...post, comments: [...post.comments, newCommentObj] }
        : post
    );

    setPost(updateCommentPost);

    console.log("---->>> NEWPOST : ", post);
  };
  // const navigate = useNavigate();
  useEffect(() => {
    fetchAllusers();
  }, []);

  const fetchAllusers = async () => {
    const querySnapshot = await getDocs(collection(db, "Users"));
    // console.log("----> QuerySnapshot",querySnapshot);

    const users = [];

    querySnapshot.forEach((doc) => {
      users.push({ uid: doc.id, ...doc.data() });
    });

    setAllUsers(users);
    console.log("----> users", users);
  };

  const deleteUser = async (userid) => {
    console.log("--->delete User", userid);
    const selectedUser = getDoc(doc(db, "Users", userid));
    await deleteDoc(doc(db, "Users", userid)); // it will remove from firestore

    selectedUser.deleteUser;
    // remove from array
    const newArray = allUsers.filter((user) => user.uid !== userid);
    setAllUsers(newArray);
    console.log(newArray);
  };

  const handleclickALL = () => {
    SetAllusers(!AllUsers);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleAllUsers = () => {
    // console.log("hello");
    setUsersdata(usersdata);
  };

  return (
    <div style={{ backgroundColor: "#000000", height: "100vh" }}>
      <Box sx={{ display: "flex", backgroundColor: "#000000" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          open={open}
          sx={{
            backgroundColor: "#ffbd39",
            color: "black",
            display: "flex",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {" "}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                ADMIN DASHBOARD
              </Typography>
            </Box>
            <img src="vite.svg" alt="" width={"20px"} />
          </Toolbar>
        </AppBar>

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            {/* <h1>Gaurav</h1> */}
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />

          <List>
            <ListItem onClick={handleclickALL} className="listitem">
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              ALL USERS
            </ListItem>
          </List>

          <List>
            <ListItem className="listitem" onClick={handleAllpost}>
              <ListItemIcon>
                <FeedIcon />
              </ListItemIcon>
              ALL POSTS
            </ListItem>
          </List>

          <List>
            <ListItem className="listitem">
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              SIGN OUT
            </ListItem>
          </List>
        </Drawer>

        <Main open={open}>
          <DrawerHeader />
          <Typography paragraph></Typography>
          <Typography paragraph></Typography>

          {AllUsers && (
            <Box
              sx={{
                justifyContent: "start",

                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              {allUsers.map((user, index) => {
                return (
                  <div class="container-main" key={index}>
                    <div class="main-wrapper">
                      <div class="banner-image-main">
                        {user.profilepic ? (
                          <img
                            src={user.profilepic}
                            style={{
                              width: "100%",
                              height: "200px",
                              borderRadius: "10px",
                            }}
                          />
                        ) : (
                          <img
                            src="https://img.freepik.com/premium-photo/3d-icon-cartoon-person-profile-avatar-user-profile-3d-render-illustration_276199-401.jpg"
                            style={{
                              width: "100%",
                              height: "300px",
                              borderRadius: "10px",
                            }}
                          />
                        )}{" "}
                      </div>
                      <h1> {user.name}</h1>
                      <p>{user.email}</p>
                    </div>
                    <div class="button-wrapper">
                      <button class="btn outline">DETAILS</button>
                      <button
                        class="btn fill"
                        onClick={() => deleteUser(user.uid)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </Box>
          )}

          {Allpost && (
            <div style={{ width: "50%", margin: "0 auto" }}>
              {post.map((singlePost, index) => {
                return (
                  <div key={index}>
                    <Box class="Main-container" sx={{ color: "white" }}>
                      <Box class="wrapper">
                        <Box class="banner-image">
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <img
                              src="ice.jpg"
                              alt=""
                              style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                              }}
                            />
                            <Typography
                              sx={{ color: "white", fontWeight: "900" }}
                            >
                              {postUsers[singlePost.userid]}
                            </Typography>
                          </Box>
                          <img
                            src={singlePost.image}
                            style={{
                              height: "300px",
                              width: "100%",
                              borderRadius: "10px",
                            }}
                          />{" "}
                        </Box>
                        <h1 className="Title"> {singlePost.title}</h1>
                        <p className="description">{singlePost.description}</p>
                        <p className="description">
                          Likes {singlePost.likes?.length || 0}
                        </p>
                        <p className="description">
                          {singlePost.comments?.length > 0 ? (
                            singlePost.comments.map((comment, index) => {
                              return (
                                <div key={index}>
                                  <p>
                                    Commented by : {postUsers[comment.userid]}{" "}
                                    :- {comment.text}
                                    <span style={{ fontSize: "10px" }}>
                                      {" "}
                                      at : {timeAgo(comment.timestamp)}
                                    </span>
                                  </p>
                                </div>
                              );
                            })
                          ) : (
                            <p>No Comments Found</p>
                          )}
                        </p>
                      </Box>
                      <Box class="button-wrapper">
                        {/* <button
                          class="btn outline"
                          onClick={() => handleLike(singlePost.id)}
                        >
                          Like
                        </button> */}
                        {/* <input
                          type="text"
                          placeholder="Enter Comments"
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                        />
                        <button
                          className="btn outline"
                          onClick={() => handleComment(singlePost.id)}
                        >
                          Add Comment
                        </button> */}
                      </Box>
                    </Box>
                    <hr
                      style={{
                        // marginTop: "5px",
                        border: "1px solid grey",
                        borderRadius: "20px",
                      }}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </Main>
      </Box>
    </div>
  );
}
