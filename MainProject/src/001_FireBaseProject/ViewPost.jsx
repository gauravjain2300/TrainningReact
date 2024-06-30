/* eslint-disable no-unused-vars */
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function ViewPost() {
  const [post, setPost] = useState([]);
  const [postUsers, setPostUsers] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetchUsers();
    fetchPostFun();
  }, []);

  const fetchUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "Students"));
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
      });
    });
    setPost(fetchPost);
  };

  const handleDelete = async (docid) => {
    console.log("---> delete ", docid);
    await deleteDoc(doc(db, "Post", docid));
    setPost(post.filter((item) => item.id !== docid));

    // navigate("/dashboard",{replace:true})
  };
  return (
    <div>
      <h1>View All Post </h1>
      {post.map((singlePost, index) => {
        return (
          <div key={index}>
            <h4>{singlePost.title}</h4>
            <h3>{singlePost.userid}</h3>
            <h4>posted by : {postUsers[singlePost.userid]}</h4>
            <p>{singlePost.description}</p>
            <img src={singlePost.image} height={50} width={50} />
            <button onClick={() => handleDelete(singlePost.id)}>Delete</button>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
}
