import React from "react";
import { useNavigate } from "react-router-dom";

export default function ContactPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Use Navigate:Contact Page</h1>
      <h1 onClick={() => navigate("/aboutus")}>ABout page</h1>
    </div>
  );
}
