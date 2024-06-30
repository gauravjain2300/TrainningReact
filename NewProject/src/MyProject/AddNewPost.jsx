import React, { useState } from "react";
import { auth, db, storage } from "../Firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Box, TextField, Typography } from "@mui/material";

export default function AddNewPost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageLink, setImageLink] = useState();

  // const navigate = useNavigate();
  const handleSubmit = async () => {
    const user = auth.currentUser;
    const storageRef = await ref(storage, `post/${user.uid}/${Date.now()}`);
    await uploadBytes(storageRef, imageLink);
    const downloadUrl = await getDownloadURL(storageRef);
    console.log("success fully uploded");

    await setDoc(
      doc(db, "Post", `${Date.now()}`),
      {
        title: title,
        description: description,
        image: downloadUrl,
        userid: user.uid,
        timestamp: Date.now(),
      },
      alert("done")
    );

    // navigate("/viewpost", { replace: true });
  };

  return (
    <div>
      {/* <h1>Add New Post</h1>
      <input
        type="text"
        placeholder="Enter title"
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <br></br>
      <textarea
        placeholder="Enter description"
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <br></br>
      <input type="file" onChange={(e) => setImageLink(e.target.files[0])} />

      <br></br>
      <button onClick={handleSubmit}>Add Post</button> */}
      <div>
        <Typography
          variant="h2"
          sx={{
            color: "white",
            textAlign: "center",
            color: "#ffbd39",
            // paddingBottom: "30px",
            textShadow: "19px 22px 11px white;",
          }}
        >
          Add New Post
        </Typography>
        <Box
          sx={{
            backgroundColor: "#ffff",
            border: "1px solid white",
            height: "500px",
            borderRadius: "15px",
            width: "50%",
            margin: "0 auto",
            marginTop: "50px",
          }}
        >
          <TextField
            id="standard-basic"
            label="Enter Title"
            variant="standard"
            onChange={(e) => setTitle(e.target.value)}
            sx={{
              input: { color: "black" },
              label: { color: "#a9a9a9" },
              borderBottom: " 1px solid #ffbd39",
              color: "white",
              //   Width: "80%",
              width: "90%",
            }}
          />

          <TextField
            id="standard-basic"
            label="Enter description"
            variant="standard"
            onChange={(e) => setDescription(e.target.value)}
            sx={{
              input: { color: "black" },
              label: { color: "#a9a9a9" },
              borderBottom: " 1px solid #ffbd39",
              color: "white",
              //   Width: "80%",
              width: "90%",
            }}
          />
          {/* <TextField
              id="standard-basic"
              label="Enter Password"
              variant="standard"
              sx={{
                input: { color: "white" },
                label: { color: "#a9a9a9" },
                borderBottom: " 1px solid #ffbd39",
                color: "white",
                //   Width: "80%",
                width: "90%",
              }}
            /> */}
          <input
            type="file"
            onChange={(e) => setImageLink(e.target.files[0])}
          />
          <button onClick={handleSubmit}>Add Post</button>
        </Box>
      </div>
    </div>
  );
}
