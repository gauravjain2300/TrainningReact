import React from "react";

export default function FirstTask() {
  return (
    <div>
      <nav>
        {/* <img src="logo.png" alt="" /> */}
        <h2>Shivaa.</h2>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Services</li>
          <li>Pages</li>
          <li>Blog</li>
          <li>Contact us</li>
        </ul>

        <div className="wrapper">
          <img src="logo.png" alt="" className="logo" />

          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </nav>
    </div>
  );
}
