import React from "react";
import "../Alltasks/TasksCss/ChildAndParent.css";

export default function ChildTask01(props) {
  // const ChildTask01 = ({ name, email, City, subject }) => {
  return (
    <div className="Child-wrapper">
      {props.children}

      <div className="card">
        <div className="ds-top"></div>
        <div className="avatar-holder">
          {/* <img src="Woman.jpg" alt="" /> */}
          {props.gender}
          {/* <img src="Cartoonboy.jpg" alt="" /> */}
          {/* <img src="imageman.png" alt="" /> */}
        </div>
        <div className="name">
          <a href="https://codepen.io/AlbertFeynman/" target="_blank">
            {props.value}
            {props.name}
            {/* {this.props.inputvalue} */}
            {/* Gaurav */}
          </a>
          <h6 title="Followers">
            <span className="followers">{props.email}</span>
          </h6>
        </div>

        <div className="ds-info">
          <div className="ds projects">
            <h6 title="Number of projects created by the user">{props.City}</h6>
            <p>{props.subject} </p>
          </div>
        </div>
      </div>
    </div>
  );
}
