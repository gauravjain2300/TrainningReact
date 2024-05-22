import React, { Component } from "react";
import ChildComponent06 from "./ChildComponent06";

export default class ParentComponentClass06 extends Component {
  handleClick = () => {
    alert("Clicked By user");
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click here</button>
        <ChildComponent06 myfun={this.handleClick} subject="React Js" />
      </div>
    );
  }
}
