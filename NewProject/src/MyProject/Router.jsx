import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SigninPage from "./SigninPage";
import NewUser from "./NewUser";
import UserDashboard from "./UserDashboard";
import Appbar from "./Appbar";
import AddNewPost from "./AddNewPost";
import AdminDashboard from "./AdminDashboard";
import Table from "./Table";
import Mui from "./Mui";
import AdminLogin from "./AdminLogin";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SigninPage />}></Route>
          <Route path="/user" element={<UserDashboard />}></Route>
          <Route path="/newuser" element={<NewUser />}></Route>
          <Route path="/appbar" element={<Appbar />}></Route>
          <Route path="/myPost" element={<AddNewPost />}></Route>
          <Route path="/Adminlogin" element={<AdminLogin />}></Route>

          <Route path="/Admin" element={<AdminDashboard />}></Route>

          {/* <Route path="/table" element={<Table />}></Route> */}
          <Route path="/Mui" element={<Mui />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
