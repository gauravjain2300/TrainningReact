import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationPage from "./RegistrationPage";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";
import Guest from "./Guest";
import EditPage from "./EditPage";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegistrationPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
          <Route path="/Guest" element={<Guest />}></Route>
          {/* <Route path="/edit:uid" element={<EditPage />}></Route> */}
          <Route path="/edit/:uid" element={<EditPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
